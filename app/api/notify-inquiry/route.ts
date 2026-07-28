import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    await resend.emails.send({
      from: "스케치온 홈페이지 <noreply@sketchon.kr>",
      to: process.env.NOTIFY_EMAIL as string,
      subject: `[스케치온] 새 문의: ${name}님`,
      text: `이름: ${name}\n연락처: ${phone}\n이메일: ${email}\n\n문의내용:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}