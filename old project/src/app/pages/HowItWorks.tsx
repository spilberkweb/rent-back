import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();
  
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-6 text-[#1e3a8a] text-center">
            {t.howItWorksPage.title}
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            {t.howItWorksPage.subtitle}
          </p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a]">{t.howItWorksPage.concept}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  {t.howItWorksPage.conceptDesc}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a]">{t.howItWorksPage.howTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">{t.howItWorks.step1}</h3>
                      <p className="text-gray-600">
                        {t.howItWorks.step1Desc}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">{t.howItWorks.step2}</h3>
                      <p className="text-gray-600">
                        {t.howItWorks.step2Desc}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">{t.howItWorks.step3}</h3>
                      <p className="text-gray-600">
                        {t.howItWorks.step3Desc}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">{t.howItWorks.step4}</h3>
                      <p className="text-gray-600">
                        {t.howItWorks.step4Desc}
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a]">{t.howItWorksPage.benefits}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#1e3a8a]">{t.howItWorksPage.investorAdvantage}</h4>
                    <p className="text-gray-600">{t.howItWorksPage.investorAdvantageDesc}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#1e3a8a]">{t.howItWorksPage.buyerAdvantage}</h4>
                    <p className="text-gray-600">{t.howItWorksPage.buyerAdvantageDesc}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#1e3a8a]">{t.howItWorksPage.marketAdvantage}</h4>
                    <p className="text-gray-600">{t.howItWorksPage.marketAdvantageDesc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">{t.howItWorksPage.readyCta}</h3>
                <p className="text-lg mb-6">{t.howItWorksPage.readyCtaDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}