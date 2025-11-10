import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contact: z.string().min(1, "Contact information is required"), // single required field
  message: z.string().min(1, "Message is required"),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;