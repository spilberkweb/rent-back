import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Mail, Phone, MapPin, Clock, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export function Contact() {
  const { t } = useLanguage();
  const [apartmentCount, setApartmentCount] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.contact.send);
  };

  const handleWaitingListSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.contact.joinWaitingList);
  };

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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">{t.contact.name}</Label>
                      <Input id="name" placeholder={t.contact.name} required />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.contact.email}</Label>
                      <Input id="email" type="email" placeholder={t.contact.email} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t.contact.phone}</Label>
                      <Input id="phone" type="tel" placeholder={t.contact.phone} />
                    </div>
                    <div>
                      <Label htmlFor="message">{t.contact.message}</Label>
                      <Textarea 
                        id="message" 
                        placeholder={t.contact.message}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af]">
                      {t.contact.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Waiting List Section */}
              <Card id="waiting-list" className="border-2 border-[#f59e0b]/30 bg-gradient-to-br from-[#f59e0b]/5 to-white shadow-2xl">
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
                  <form onSubmit={handleWaitingListSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="wl-name">{t.contact.name}</Label>
                      <Input id="wl-name" placeholder={t.contact.name} required />
                    </div>
                    <div>
                      <Label htmlFor="wl-email">{t.contact.email}</Label>
                      <Input id="wl-email" type="email" placeholder={t.contact.email} required />
                    </div>
                    <div>
                      <Label htmlFor="wl-phone">{t.contact.phone}</Label>
                      <Input id="wl-phone" type="tel" placeholder={t.contact.phone} />
                    </div>
                    <div>
                      <Label htmlFor="apartment-count">{t.contact.apartmentCount}</Label>
                      <Select value={apartmentCount} onValueChange={setApartmentCount}>
                        <SelectTrigger id="apartment-count">
                          <SelectValue placeholder={t.contact.apartmentCountDesc} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5+">5+</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-gray-500 mt-1">{t.contact.apartmentCountDesc}</p>
                    </div>
                    <Button type="submit" className="w-full bg-[#f59e0b] hover:bg-[#d97706]">
                      {t.contact.joinWaitingList}
                    </Button>
                  </form>
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
                      <h3 className="font-semibold text-lg text-[#1e3a8a] mb-1">{t.contact.email}</h3>
                      <p className="text-gray-600">{t.contact.emailValue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1e3a8a] mb-1">{t.contact.phone}</h3>
                      <p className="text-gray-600">{t.contact.phoneValue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1e3a8a] mb-1">{t.contact.address}</h3>
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