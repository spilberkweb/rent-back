import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { Contact } from "./pages/Contact";
import { InvestmentCalculator } from "./pages/InvestmentCalculator";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "jak-to-funguje", Component: HowItWorks },
      { path: "kalkulacka", Component: InvestmentCalculator },
      { path: "kontakt", Component: Contact },
    ],
  },
]);