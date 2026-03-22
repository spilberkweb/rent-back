"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ContactFormState,
  handleContactForm,
} from "@/services/handleContactForm";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const { t, language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    handleContactForm,
    initialState,
  );

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
        formRef.current?.reset();
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <input type="hidden" name="lang" value={language} />
      <Field>
        <FieldLabel htmlFor="name">{t.contact.name}</FieldLabel>
        <Input
          id="name"
          name="name"
          placeholder={t.contact.name}
          disabled={isPending}
          defaultValue={state.values?.name}
        />
        {state.errors?.name && <FieldError>{state.errors.name[0]}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="email">{t.contact.email}</FieldLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t.contact.email}
          disabled={isPending}
          defaultValue={state.values?.email}
        />
        {state.errors?.email && (
          <FieldError>{state.errors.email[0]}</FieldError>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="phone">{t.contact.phone}</FieldLabel>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder={t.contact.phone}
          disabled={isPending}
          defaultValue={state.values?.phone}
        />
        {state.errors?.phone && (
          <FieldError>{state.errors.phone[0]}</FieldError>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="message">{t.contact.message}</FieldLabel>
        <Textarea
          id="message"
          name="message"
          placeholder={t.contact.message}
          rows={5}
          disabled={isPending}
          defaultValue={state.values?.message}
        />
        {state.errors?.message && (
          <FieldError>{state.errors.message[0]}</FieldError>
        )}
      </Field>

      <Button
        type="submit"
        className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] disabled:opacity-70"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.contact.sending || "Odesílám..."}
          </>
        ) : (
          t.contact.send
        )}
      </Button>
    </form>
  );
}
