"use server";

import { translations } from "@/app/locales/translations";
import { ContactEmailTemplate } from "@/emails/ContactEmailTemplate";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  values?: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
};

export async function handleContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Wait for a bit (simulate processing)
  await new Promise((resolve) => setTimeout(resolve, 500));

  const lang = (formData.get("lang") as "cs" | "en" | "it") || "cs";
  const t = translations[lang].validation;

  const ContactFormSchema = z.object({
    name: z.string().min(2, t.name),
    email: z.string().email(t.email),
    phone: z.string().min(9, t.phone),
    message: z.string().min(5, t.message),
  });

  const values = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
  };

  const validatedFields = ContactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: t.formError,
      errors: validatedFields.error.flatten().fieldErrors,
      values,
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Rent|Back <info@spilberk.com>",
      to: "urbanek@spilberk.com",
      subject: `Nová zpráva od: ${name}`,
      react: ContactEmailTemplate({ name, email, phone, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: t.sendError,
        values,
      };
    }

    return {
      success: true,
      message: t.success,
    };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      message: t.unexpectedError,
      values,
    };
  }
}
