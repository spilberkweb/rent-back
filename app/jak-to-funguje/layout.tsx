import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jak funguje RENT|BACK - Inovativní model investice",
  description: "Poznejte náš unikátní model leaseback investice do nemovitostí v 10letém horizontu.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
