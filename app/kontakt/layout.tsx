import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontaktujte Rent|Back - Jsme tu pro vás",
  description: "Zeptejte se nás na detaily investic do nemovitostí nebo začněte vydělávat hned teď.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
