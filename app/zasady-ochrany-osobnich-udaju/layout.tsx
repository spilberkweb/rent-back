import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů (GDPR) - Rent|Back",
  description: "Zásady toho, jak nakládáme s vašimi osobními údaji u nás ve Spilberk Property.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
