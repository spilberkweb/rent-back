"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-background">
      <div className="space-y-6 max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 text-destructive mb-6">
          <OctagonXIcon className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hups, něco se nepovedlo!
        </h1>
        
        <p className="text-lg text-muted-foreground">
          Omlouváme se, ale při zpracování vašeho požadavku došlo k neočekávané chybě. 
          Náš tým byl o problému informován.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button 
            onClick={() => reset()} 
            size="lg"
            className="gap-2"
          >
            <RefreshCcw className="w-4 h-4" />
            Zkusit znovu
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            asChild
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              Zpět na hlavní stránku
            </Link>
          </Button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-muted rounded-lg text-left overflow-auto max-h-40">
            <p className="text-xs font-mono text-destructive break-all">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function OctagonXIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 9l-6 6" />
      <path d="M9 9l6 6" />
      <path d="M2.7 7.46L7.46 2.7c.4-.4.94-.7 1.54-.7h6c.6 0 1.14.3 1.54.7l4.76 4.76c.4.4.7.94.7 1.54v6c0 .6-.3 1.14-.7 1.54l-4.76 4.76c-.4.4-.94.7-1.54.7h-6c-.6 0-1.14-.3-1.54-.7L2.7 16.54c-.4-.4-.7-.94-.7-1.54v-6c0-.6.3-1.14.7-1.54z" />
    </svg>
  );
}
