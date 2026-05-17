export default function Footer() {
  return (
    <footer className="border-t border-secondary/10 py-10 text-light/25">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-[12px] uppercase tracking-widest sm:flex-row">
        <p>© {new Date().getFullYear()} AVEC Design</p>
        <p>Digital Systems, Designed to Perform</p>
      </div>
    </footer>
  );
}
