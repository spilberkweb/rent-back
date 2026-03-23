import type { Metadata } from "next";
import { InvestmentModel } from "@/components/InvestmentModel";

export const metadata: Metadata = {
  title: "Kalkulačka investice do nemovitosti - RENT|BACK",
  description:
    "Spočítejte si svůj přesný výnos z investice do bytu u Spilberk Property.",
};

export default function Page() {
  return <InvestmentModel />;
}
