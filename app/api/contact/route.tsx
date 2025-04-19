// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { name, email, message } = await request.json();
  // hook into your mailing/CRM here
  console.log("Contact form submission:", { name, email, message });
  return NextResponse.json({ success: true });
}
