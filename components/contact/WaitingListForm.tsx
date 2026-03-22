"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleWaitlistForm } from "@/services/handleWaitlistForm";
import { useState } from "react";

export function WaitingListForm() {
  const { t } = useLanguage();
  const [apartmentCount, setApartmentCount] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWaitlistForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field>
        <FieldLabel htmlFor="wl-name">{t.contact.name}</FieldLabel>
        <Input id="wl-name" name="name" placeholder={t.contact.name} />
      </Field>

      <Field>
        <FieldLabel htmlFor="wl-email">{t.contact.email}</FieldLabel>
        <Input
          id="wl-email"
          name="email"
          type="email"
          placeholder={t.contact.email}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="wl-phone">{t.contact.phone}</FieldLabel>
        <Input
          id="wl-phone"
          name="phone"
          type="tel"
          placeholder={t.contact.phone}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="apartment-count">
          {t.contact.apartmentCount}
        </FieldLabel>
        <FieldDescription>{t.contact.apartmentCountDesc}</FieldDescription>
        <Select
          value={apartmentCount}
          onValueChange={setApartmentCount}
          name="apartmentCount"
        >
          <SelectTrigger id="apartment-count" className="mt-1.5">
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
      </Field>

      <Button type="submit" className="w-full bg-[#f59e0b] hover:bg-[#d97706]">
        {t.contact.joinWaitingList}
      </Button>
    </form>
  );
}
