"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Shield, Home } from "lucide-react";
const propertyImage = "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80";

export function PropertySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a]">
              Parametry aktiva a lokality
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Kvalitní novostavba v širším centru Brna. Základem investice je reálná nemovitost v atraktivní lokalitě s vysokou budoucí hodnotou.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-lg text-[#1e3a8a]">Lokalita</div>
                  <div className="text-gray-600">Brno – město, užší centrum, ulice Vlhká.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-lg text-[#1e3a8a]">Stav budovy</div>
                  <div className="text-gray-600">Novostavba, kolaudace proběhla 09/2025.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-lg text-[#1e3a8a]">Obsazenost</div>
                  <div className="text-gray-600">Aktuálně je zajištěna 100% obsazenost portfolia.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Home className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-lg text-[#1e3a8a]">Typ jednotek</div>
                  <div className="text-gray-600">Moderní byty 1+kk, převážně o výměře 22m².</div>
                </div>
              </div>
            </div>

            <Card className="bg-[#f59e0b]/10 border-[#f59e0b]/20">
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 mb-1">Byty k dispozici již od</div>
                <div className="text-3xl text-[#1e3a8a]">2 850 000 Kč</div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-3xl blur-xl opacity-10"></div>
            <img 
              src={propertyImage} 
              alt="Ekonomický model a správa" 
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
