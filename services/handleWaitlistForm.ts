"use server";

export async function handleWaitlistForm() {
  const webhookUrl =
    "https://hook.eu1.make.com/823uehwf8pbh33i6cgjitjwrm95n8j14"; // Tu získáš po uložení v Make
  const apiKey = process.env.MAKE_WEBHOOK_API_KEY; // Ideálně uloženo v .env.local

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-make-apikey": apiKey || "", // Toto je ta hlavička z tvého obrázku
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        data: {
          name: "David Urbanek",
          email: "urbanek.dav@email.cz",
          phone: "5555555",
          apartmentCount: "2",
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Chyba při odesílání: ${response.statusText}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Webhook error:", error);
    return { success: false, error: "Nepodařilo se odeslat data." };
  }
}
