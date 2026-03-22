"use server";

import { ContactEmailTemplate } from "@/emails/ContactEmailTemplate";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Neplatná emailová adresa"),
  phone: z.string().min(9, "Telefon musí mít alespoň 9 znaků"),
  message: z.string().min(5, "Zpráva musí mít alespoň 5 znaků"),
});

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
  // Wait for a bit to simulate processing for smoother UX
  await new Promise((resolve) => setTimeout(resolve, 500));

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
      message: "Chyba při vyplňování formuláře.",
      errors: validatedFields.error.flatten().fieldErrors,
      values,
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Rent|Back <info@spilberk.com>", // Replace with your verified sender
      to: "urbanek@spilberk.com", // The user's email or target recipient
      subject: `Nová zpráva od: ${name}`,
      react: ContactEmailTemplate({ name, email, phone, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message:
          "Omlouváme se, zprávu se nepodařilo odeslat. Zkuste to prosím později.",
        values,
      };
    }

    return {
      success: true,
      message: "Vaše zpráva byla úspěšně odeslána. Brzy se Vám ozveme zpět.",
    };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      message: "Při odesílání zprávy došlo k neočekávané chybě.",
      values,
    };
  }
}
