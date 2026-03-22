import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-background">
      <div className="space-y-6 max-w-md">
        <h1 className="text-9xl font-black text-primary/10 select-none absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          404
        </h1>
        
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-12">
          Stránka nenalezena
        </h2>
        
        <p className="text-lg text-muted-foreground">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta na jinou adresu.
        </p>

        <div className="pt-8">
          <Button 
            size="lg"
            className="gap-2 bg-[#1e3a8a] hover:bg-[#1e40af]"
            asChild
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              Zpět na začátek
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
