"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.contact.send);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field>
        <FieldLabel htmlFor="name">{t.contact.name}</FieldLabel>
        <Input id="name" name="name" placeholder={t.contact.name} required minLength={2} />
      </Field>

      <Field>
        <FieldLabel htmlFor="email">{t.contact.email}</FieldLabel>
        <Input id="email" name="email" type="email" placeholder={t.contact.email} required />
      </Field>

      <Field>
        <FieldLabel htmlFor="phone">{t.contact.phone}</FieldLabel>
        <Input id="phone" name="phone" type="tel" placeholder={t.contact.phone} />
      </Field>

      <Field>
        <FieldLabel htmlFor="message">{t.contact.message}</FieldLabel>
        <Textarea
          id="message"
          name="message"
          placeholder={t.contact.message}
          rows={5}
          required
          minLength={10}
        />
      </Field>

      <Button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af]">
        {t.contact.send}
      </Button>
    </form>
  );
}
