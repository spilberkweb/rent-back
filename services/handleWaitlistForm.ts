"use server";

import { translations } from "@/app/locales/translations";
import { z } from "zod";

export type WaitlistFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  values?: {
    name: string;
    email: string;
    phone: string;
    apartmentCount: string;
  };
};

export async function handleWaitlistForm(
  prevState: WaitlistFormState,
  formData: FormData,
): Promise<WaitlistFormState> {
  // Wait for a bit (simulate processing)
  await new Promise((resolve) => setTimeout(resolve, 500));

  const lang = (formData.get("lang") as "cs" | "en" | "it") || "cs";
  const t = translations[lang].validation;

  const WaitlistSchema = z.object({
    name: z.string().min(2, t.name),
    email: z.string().email(t.email),
    phone: z.string().min(9, t.phone),
    apartmentCount: z.string().min(1, "Prosím vyberte počet bytů"),
  });

  const values = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    apartmentCount: formData.get("apartmentCount") as string,
  };

  const validatedFields = WaitlistSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: t.formError,
      errors: validatedFields.error.flatten().fieldErrors,
      values,
    };
  }

  const webhookUrl =
    "https://hook.eu1.make.com/823uehwf8pbh33i6cgjitjwrm95n8j14";
  const apiKey = process.env.MAKE_WEBHOOK_API_KEY;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-make-apikey": apiKey || "",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        data: validatedFields.data,
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.statusText}`);
    }

    return {
      success: true,
      message: t.success,
    };
  } catch (error) {
    console.error("Waitlist error:", error);
    return {
      success: false,
      message: t.unexpectedError,
      values,
    };
  }
}
