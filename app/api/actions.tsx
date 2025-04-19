// lib/mail.ts
"use server";
import { Resend } from "resend";

const resend = new Resend("re_6v2n17J2_Dv6x5ZbYwJrp86Q1WNE2QAfk");
console.log("sending email");

export async function sendSampleEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  return await resend.emails.send({
    from: "contact@alanguan.com",
    to: "alan@avecdesign.io",
    subject: `New contact from ${data.name}`,
    html: `
      <h1>Contact request</h1>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `,
  });
}
