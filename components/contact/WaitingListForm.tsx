"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  handleWaitlistForm,
  WaitlistFormState,
} from "@/services/handleWaitlistForm";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const initialState: WaitlistFormState = {
  success: false,
  message: "",
};

export function WaitingListForm() {
  const { t, language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [apartmentCount, setApartmentCount] = useState("1");
  const [state, formAction, isPending] = useActionState(
    handleWaitlistForm,
    initialState,
  );

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
        formRef.current?.reset();
        setApartmentCount("1");
      } else {
        toast.error(state.message);
        if (state.values?.apartmentCount) {
          setApartmentCount(state.values.apartmentCount);
        }
      }
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <input type="hidden" name="lang" value={language} />

      <Field>
        <FieldLabel htmlFor="wl-name">{t.contact.name}</FieldLabel>
        <Input
          id="wl-name"
          name="name"
          placeholder={t.contact.name}
          disabled={isPending}
          defaultValue={state.values?.name}
        />
        {state.errors?.name && <FieldError>{state.errors.name[0]}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="wl-email">{t.contact.email}</FieldLabel>
        <Input
          id="wl-email"
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
        <FieldLabel htmlFor="wl-phone">{t.contact.phone}</FieldLabel>
        <Input
          id="wl-phone"
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
        <FieldLabel htmlFor="apartment-count">
          {t.contact.apartmentCount}
        </FieldLabel>
        <FieldDescription>{t.contact.apartmentCountDesc}</FieldDescription>
        <Select
          value={apartmentCount}
          onValueChange={setApartmentCount}
          name="apartmentCount"
          disabled={isPending}
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
        {state.errors?.apartmentCount && (
          <FieldError>{state.errors.apartmentCount[0]}</FieldError>
        )}
      </Field>

      <Button
        type="submit"
        className="w-full bg-[#f59e0b] hover:bg-[#d97706] disabled:opacity-70"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.contact.sending}
          </>
        ) : (
          t.contact.joinWaitingList
        )}
      </Button>
    </form>
  );
}
