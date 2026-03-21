"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { ContactForm } from "@/components/contact/ContactForm";
import { WaitingListForm } from "@/components/contact/WaitingListForm";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone, Users } from "lucide-react";

export default function Page() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-6 text-[#1e3a8a] text-center">
            {t.contact.pageTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            {t.contact.pageSubtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">
                {t.contact.getInTouch}
              </h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>

              {/* Waiting List Section */}
              <Card
                id="waiting-list"
                className="border-2 border-[#f59e0b]/30 bg-gradient-to-br from-[#f59e0b]/5 to-white shadow-2xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#1e3a8a]">
                      {t.contact.waitingList}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {t.contact.waitingListSubtitle}
                  </p>
                  <WaitingListForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#1e3a8a]">
                {t.contact.contactInfo}
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1e3a8a] mb-1">
                        {t.contact.email}
                      </h3>
                      <p className="text-gray-600">{t.contact.emailValue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1e3a8a] mb-1">
                        {t.contact.phone}
                      </h3>
                      <p className="text-gray-600">{t.contact.phoneValue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1e3a8a] mb-1">
                        {t.contact.address}
                      </h3>
                      <p className="text-gray-600">{t.contact.addressValue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1e3a8a] mb-1">
                        {t.contact.businessHours}
                      </h3>
                      <p className="text-gray-600">
                        {t.contact.businessHoursValue}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
