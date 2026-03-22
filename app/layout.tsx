import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/app/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Rent|Back",
  description: "Zpětný leasing nemovitostí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <LanguageProvider>
          <TooltipProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <Toaster position="top-center" richColors />
          </TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
