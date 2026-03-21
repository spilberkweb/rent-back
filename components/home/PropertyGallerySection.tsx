"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
const image1 =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80";
const image2 =
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80";
const image3 =
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80";

export function PropertyGallerySection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full text-[#f59e0b] text-sm mb-4">
            {t.propertyGallery.badge}
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a] font-bold">
            {t.propertyGallery.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.propertyGallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src={image1}
            alt="Modern apartment"
            className="rounded-3xl shadow-lg w-full h-80 object-cover"
          />
          <img
            src={image2}
            alt="Cozy bedroom"
            className="rounded-3xl shadow-lg w-full h-80 object-cover"
          />
          <img
            src={image3}
            alt="Modern bathroom"
            className="rounded-3xl shadow-lg w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
