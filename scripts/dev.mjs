import { spawn, spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const portFlagIndex = args.findIndex((arg) => arg === "-p" || arg === "--port");
const port = portFlagIndex === -1 ? "3005" : args[portFlagIndex + 1];

if (!port || !/^\d+$/.test(port)) {
  console.error("Usage: npm run dev -- -p <port>");
  process.exit(1);
}

const listeners = () => {
  const result = spawnSync("lsof", ["-tiTCP:" + port, "-sTCP:LISTEN"], {
    encoding: "utf8",
  });

  return result.stdout
    .trim()
    .split("\n")
    .filter(Boolean)
    .map(Number)
    .filter((pid) => Number.isInteger(pid) && pid !== process.pid);
};

const wait = (milliseconds) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
};

const stopListeners = () => {
  const pids = listeners();
  if (pids.length === 0) return;

  console.log(`Stopping server on port ${port}: ${pids.join(", ")}`);
  for (const pid of pids) {
    try {
      process.kill(pid, "SIGTERM");
    } catch (error) {
      if (error.code !== "ESRCH") throw error;
    }
  }

  for (let attempt = 0; attempt < 20 && listeners().length > 0; attempt += 1) {
    wait(100);
  }

  const remaining = listeners();
  if (remaining.length > 0) {
    console.log(`Force stopping server on port ${port}: ${remaining.join(", ")}`);
    for (const pid of remaining) {
      try {
        process.kill(pid, "SIGKILL");
      } catch (error) {
        if (error.code !== "ESRCH") throw error;
      }
    }
  }

  for (let attempt = 0; attempt < 20 && listeners().length > 0; attempt += 1) {
    wait(100);
  }

  const stuck = listeners();
  if (stuck.length > 0) {
    console.error(`Unable to free port ${port}. Still in use by: ${stuck.join(", ")}`);
    process.exit(1);
  }
};

stopListeners();

console.log(`Starting Next.js on http://localhost:${port}`);
const next = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", "-p", port], {
  stdio: "inherit",
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => next.kill(signal));
}

next.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
