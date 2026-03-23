"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  User,
  Database,
  MessageSquare,
  Clock,
  UserCheck,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-[#1e3a8a] rounded-full mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.privacy.title}
          </h1>
          <p className="text-lg text-slate-600">
            {t.language === "cs"
              ? "Vaše soukromí je pro nás prioritou. Přečtěte si, jak nakládáme s vašimi údaji."
              : "Your privacy is our priority. Read how we handle your data."}
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 bg-slate-100 rounded-lg">
                <User className="w-5 h-5 text-slate-600" />
              </div>
              <CardTitle className="text-xl font-semibold">
                {t.privacy.controller}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                {t.privacy.controllerValue}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Database className="w-5 h-5 text-slate-600" />
              </div>
              <CardTitle className="text-xl font-semibold">
                {t.privacy.dataCollected}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                {t.privacy.dataCollectedValue}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 bg-slate-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-slate-600" />
              </div>
              <CardTitle className="text-xl font-semibold">
                {t.privacy.purpose}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                {t.privacy.purposeValue}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Clock className="w-5 h-5 text-slate-600" />
              </div>
              <CardTitle className="text-xl font-semibold">
                {t.privacy.retention}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                {t.privacy.retentionValue}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 bg-slate-100 rounded-lg">
                <UserCheck className="w-5 h-5 text-slate-600" />
              </div>
              <CardTitle className="text-xl font-semibold">
                {t.privacy.rights}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                {t.privacy.rightsValue}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-slate-400">
          {t.language === "cs"
            ? "Poslední aktualizace: 23. března 2026"
            : "Last updated: March 23, 2026"}
        </div>
      </div>
    </div>
  );
}
