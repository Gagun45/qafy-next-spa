"use server";

import { contactFormSchema, type ContactFormType } from "@/lib/zod-schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendRequest = async (
  values: ContactFormType,
  images: File[]
): Promise<{ success: boolean; message: string }> => {
  try {
    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      console.error("Invalid contact form:", parsed.error.format());
      return { success: false, message: "Invalid form data" };
    }

    // ✅ Continue using parsed data
    const { name, contact, message } = parsed.data;
    // 1. Filter out empty strings or non-File entries
    const files: File[] = images.filter(
      (value): value is File =>
        value instanceof File &&
        value.type.startsWith("image/") &&
        value.size > 0
    );

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      }))
    );
    const html = `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contacts:</strong> ${contact}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    const { error } = await resend.emails.send({
      from: "Qafy Mobile <denys@qafy.info>",
      to: process.env.TO_EMAIL!,
      subject: `New request from Qafy Mobile`,
      html,
      attachments,
    });
    if (error) {
      console.log("Resend error: ", error);
      return { success: false, message: "Failed to send email" };
    }
    return { success: true, message: "Email sent successfully" };
  } catch (err) {
    console.log("Send request error: ", err);
    return { message: "Something went wrong", success: false };
  }
};
