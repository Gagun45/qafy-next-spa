"use server";

import { contactFormSchema } from "@/lib/zod-schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendRequest = async (
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validatedText = contactFormSchema.safeParse(rawData);
    if (!validatedText.success) {
      console.error("Validation failed:", validatedText.error);
      return { message: "Wrong data", success: false };
    }
    const values = validatedText.data;
    const allImages = formData.getAll("images");

    // 1. Filter out empty strings or non-File entries
    const images: File[] = allImages.filter(
      (value): value is File => value instanceof File && value.size > 0
    );

    const attachments = await Promise.all(
      images.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      }))
    );
    await resend.emails.send({
      from: "Qafy Mobile <denys@qafy.info>",
      to: process.env.TO_EMAIL!,
      subject: `New request from Qafy Mobile`,
      html: `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Contacts:</strong> ${values.contact}</p>
        <p><strong>Message:</strong> ${values.message}</p>
      `,
      attachments,
    });
    return { success: true, message: "" };
  } catch (err) {
    console.log("Send request error: ", err);
    return { message: "Something went wrong", success: false };
  }
};
