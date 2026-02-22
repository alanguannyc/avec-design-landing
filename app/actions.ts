// lib/mail.ts
"use server";
import { Resend } from "resend";

const resend = new Resend("re_6v2n17J2_Dv6x5ZbYwJrp86Q1WNE2QAfk");
console.log("sending email");

export async function sendSampleEmail(data: {
  name: string;
  email: string;
  message: string;
  phone: string;
}) {
  return await resend.emails.send({
    from: "contact@alanguan.com",
    to: "alan@avecdesign.io",
    subject: `New contact from ${data.name}`,
    html: `
      <div style="margin:0;padding:24px;background:#f6f0e5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f1f2e;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e8dfd2;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:22px 24px;background:linear-gradient(135deg,#132a3d,#1b3850);color:#f6f0e5;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#e3be84;">AVEC Design</p>
              <h1 style="margin:0;font-size:24px;line-height:1.2;">New Contact Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 24px;">
              <p style="margin:0 0 14px;font-size:14px;line-height:1.6;color:#395066;">
                You received a new inquiry from the website contact form.
              </p>

              <div style="margin:0 0 10px;padding:12px 14px;border:1px solid #e8dfd2;border-radius:10px;background:#fcfaf6;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8f9ba6;">Name</p>
                <p style="margin:0;font-size:15px;font-weight:600;color:#0f1f2e;">${data.name}</p>
              </div>

              <div style="margin:0 0 10px;padding:12px 14px;border:1px solid #e8dfd2;border-radius:10px;background:#fcfaf6;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8f9ba6;">Email</p>
                <p style="margin:0;font-size:15px;font-weight:600;color:#0f1f2e;">${data.email}</p>
              </div>

              <div style="margin:0 0 10px;padding:12px 14px;border:1px solid #e8dfd2;border-radius:10px;background:#fcfaf6;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8f9ba6;">Phone</p>
                <p style="margin:0;font-size:15px;font-weight:600;color:#0f1f2e;">${data.phone}</p>
              </div>

              <div style="padding:12px 14px;border:1px solid #e8dfd2;border-radius:10px;background:#fcfaf6;">
                <p style="margin:0 0 6px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8f9ba6;">Message</p>
                <p style="margin:0;font-size:15px;line-height:1.7;color:#1b3850;white-space:pre-wrap;">${data.message}</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
}

export async function sendSuccessEmail(to: string) {
  return await resend.emails.send({
    from: "contact@avecdesign.io",
    to,
    subject: "Thank you for contacting AVEC Design",
    html: `
      <div style="margin:0;padding:24px;background:#f6f0e5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f1f2e;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e8dfd2;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:22px 24px;background:linear-gradient(135deg,#132a3d,#1b3850);color:#f6f0e5;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#e3be84;">AVEC Design</p>
              <h1 style="margin:0;font-size:24px;line-height:1.2;">Thank You for Reaching Out!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 24px;">
              <p style="margin:0 0 14px;font-size:14px;line-height:1.6;color:#395066;">
                We appreciate you contacting AVEC Design. Our team will review your message and get back to you as soon as possible.
              </p>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#395066;">
                In the meantime, feel free to explore our website and learn more about our services and past projects.
              </p>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
}
