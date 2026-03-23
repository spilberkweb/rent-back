"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Info, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

const chartData = [
  { year: "2016", growth: 7.2 },
  { year: "2017", growth: 11.7 },
  { year: "2018", growth: 8.1 },
  { year: "2019", growth: 9.2 },
  { year: "2020", growth: 8.0 },
  { year: "2021", growth: 22.2 },
  { year: "2022", growth: 16.0 },
  { year: "2023", growth: -5.8 },
  { year: "2024", growth: 6.0 },
  { year: "2025", growth: 13.6 },
];

export function ChartSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const chartConfig = {
    growth: {
      label: t.chart.label,
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  return (
    <section ref={sectionRef} className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
              {t.chart.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.chart.description}
            </p>
          </div>

          <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-white rounded-3xl overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {t.chart.cardTitle}
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    {t.chart.cardDescription}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 bg-[#C00000] text-white px-4 py-2 rounded-full text-sm font-semibold self-start md:self-auto">
                  <TrendingUp className="h-4 w-4 text-white" />
                  {t.chart.average}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <ChartContainer
                config={chartConfig}
                className="h-[400px] w-full mt-8"
              >
                <BarChart
                  data={chartData}
                  margin={{
                    left: 0,
                    right: 40,
                    top: 20,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid
                    vertical={false}
                    strokeDasharray="4 4"
                    stroke="#E2E8F0"
                  />
                  <XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={12}
                    tick={{ fill: "#64748B", fontSize: 12 }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={12}
                    tick={{ fill: "#64748B", fontSize: 12 }}
                    tickFormatter={(value) => `${value}%`}
                    domain={[-10, 25]}
                    ticks={[-10, -5, 0, 5, 10, 15, 20, 25]}
                  />
                  <ChartTooltip
                    cursor={{ stroke: "#CBD5E1", strokeWidth: 1 }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white/95 backdrop-blur-sm p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-200 rounded-2xl min-w-[160px]">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                              Rok {payload[0].payload.year}
                            </div>
                            <div className="flex items-center justify-between gap-8 px-1">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[#2563eb]" />
                                <span className="text-sm font-medium text-slate-600">
                                  {t.chart.label}
                                </span>
                              </div>
                              <span className="text-sm font-bold text-[#2563eb]">
                                {payload[0].value} %
                              </span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <ReferenceLine
                    y={0}
                    stroke="#1E3A8A"
                    strokeWidth={2}
                    strokeOpacity={0.8}
                  />
                  <ReferenceLine
                    y={10}
                    stroke="#f59e0b"
                    strokeDasharray="4 4"
                    strokeWidth={2}
                    label={{
                      position: "right",
                      value: "10%",
                      fill: "#f59e0b",
                      fontSize: 10,
                      fontWeight: "bold",
                    }}
                  />
                  <Bar
                    dataKey="growth"
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={isVisible}
                    animationDuration={1500}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.growth >= 10 ? "#1e3a8a" : "#3b82f6"}
                        fillOpacity={entry.growth < 0 ? 0.6 : 1}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="bg-[#F8FAFC] p-8 border-t border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-500 italic">
                  <Info className="h-4 w-4 shrink-0" />
                  {t.chart.sources}
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
