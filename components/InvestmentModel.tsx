"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { useState } from "react";

const N = "#0D0536";
const O = "#FF6B35";
const GOLD = "#C8A96E";

export function InvestmentModel() {
  const { t, language } = useLanguage();
  const [price, setPrice] = useState(4000000);
  const [yld, setYld] = useState(3.5);
  const [growth, setGrowth] = useState(7.2);

  const locale =
    language === "cs" ? "cs-CZ" : language === "it" ? "it-IT" : "en-US";

  function fmt(n: number) {
    return Math.round(n).toLocaleString(locale);
  }
  function fmtK(n: number) {
    return (
      Math.round(n / 1000).toLocaleString(locale) +
      (language === "cs" ? " tis." : "k")
    );
  }
  function fmtM(n: number) {
    const formatted = (n / 1000000).toFixed(1);
    return (
      (language === "cs" ? formatted.replace(".", ",") : formatted) +
      (language === "cs" ? " mil" : "M")
    );
  }

  const annualRent = price * (yld / 100);
  const years = [];
  for (let i = 0; i <= 10; i++) {
    const propValue = price * Math.pow(1 + growth / 100, i);
    const cumRent = annualRent * i;
    const capGain = propValue - price;
    const totalProfit = cumRent + capGain;
    years.push({
      year: i,
      label:
        i === 0
          ? language === "cs"
            ? "Start"
            : language === "it"
              ? "Inizio"
              : "Start"
          : (language === "cs" ? "R" : "Y") + i,
      propValue: propValue,
      cumRent: cumRent,
      capGain: capGain,
      totalProfit: totalProfit,
      totalValue: propValue + cumRent,
    });
  }

  const final = years[10];
  const maxVal = final.propValue + final.cumRent;
  const returnPct = ((final.totalProfit / price) * 100).toFixed(1);
  const returnPctFormatted =
    language === "cs" ? returnPct.replace(".", ",") : returnPct;

  const chartW = 760;
  const chartH = 280;
  const padL = 60;
  const padR = 20;
  const padT = 20;
  const padB = 40;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const maxChart = maxVal * 1.08;

  function cx(i: number) {
    return Number((padL + (i / 10) * plotW).toFixed(2));
  }
  function cy(v: number) {
    return Number((padT + plotH - (v / maxChart) * plotH).toFixed(2));
  }

  let propLine = "";
  let rentLineTop = "";
  for (let i = 0; i <= 10; i++) {
    const x = cx(i);
    propLine += (i === 0 ? "M" : "L") + x + "," + cy(years[i].propValue);
    rentLineTop +=
      (i === 0 ? "M" : "L") +
      x +
      "," +
      cy(years[i].propValue + years[i].cumRent);
  }

  let rentAreaPath = "";
  for (let i = 0; i <= 10; i++) {
    rentAreaPath +=
      (i === 0 ? "M" : "L") +
      cx(i) +
      "," +
      cy(years[i].propValue + years[i].cumRent);
  }
  for (let i = 10; i >= 0; i--) {
    rentAreaPath += "L" + cx(i) + "," + cy(years[i].propValue);
  }
  rentAreaPath += "Z";

  let capAreaPath = "";
  for (let i = 0; i <= 10; i++) {
    capAreaPath += (i === 0 ? "M" : "L") + cx(i) + "," + cy(years[i].propValue);
  }
  for (let i = 10; i >= 0; i--) {
    capAreaPath += "L" + cx(i) + "," + cy(price);
  }
  capAreaPath += "Z";

  const baseAreaPath =
    "M" +
    cx(0) +
    "," +
    cy(price) +
    "L" +
    cx(10) +
    "," +
    cy(price) +
    "L" +
    cx(10) +
    "," +
    cy(0) +
    "L" +
    cx(0) +
    "," +
    cy(0) +
    "Z";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: N,
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#fff",
      }}
    >
      <div
        style={{ padding: "32px 24px 20px", maxWidth: 900, margin: "0 auto" }}
      >
        <h1
          style={{
            fontSize: 28,
            fontWeight: 300,
            margin: "0 0 4px",
            color: "#fff",
          }}
        >
          {t.calculator.pageTitle}
        </h1>
        <div
          style={{ width: 50, height: 3, background: GOLD, marginBottom: 12 }}
        />
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", margin: 0 }}>
          {t.calculator.pageSubtitle}
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 24px" }}>
        {/* Controls */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              flex: "1 1 200px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              padding: "14px 18px",
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: 2,
                marginBottom: 6,
              }}
            >
              {t.calculator.propertyPrice.toUpperCase()}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="range"
                min="1000000"
                max="15000000"
                step="500000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                style={{ flex: 1, accentColor: O }}
              />
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: O,
                  minWidth: 90,
                  textAlign: "right",
                }}
              >
                {fmtM(price)}
              </span>
            </div>
          </div>
          <div
            style={{
              flex: "1 1 160px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              padding: "14px 18px",
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: 2,
                marginBottom: 6,
              }}
            >
              {t.calculator.rentalYield.toUpperCase()}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="range"
                min="2"
                max="3.5"
                step="0.1"
                value={yld}
                onChange={(e) => setYld(Number(e.target.value))}
                style={{ flex: 1, accentColor: GOLD }}
              />
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: GOLD,
                  minWidth: 50,
                  textAlign: "right",
                }}
              >
                {yld.toFixed(1) + " %"}
              </span>
            </div>
          </div>
          <div
            style={{
              flex: "1 1 160px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              padding: "14px 18px",
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: 2,
                marginBottom: 6,
              }}
            >
              {t.calculator.propertyAppreciation.toUpperCase()}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="range"
                min="2"
                max="12"
                step="0.1"
                value={growth}
                onChange={(e) => setGrowth(Number(e.target.value))}
                style={{ flex: 1, accentColor: "#5B6ABF" }}
              />
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#8B9FFF",
                  minWidth: 50,
                  textAlign: "right",
                }}
              >
                {growth.toFixed(1) + " %"}
              </span>
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          {[
            {
              label: t.calculator.propertyPrice,
              value: fmtM(price),
              color: "rgba(255,255,255,0.6)",
              sub: "CZK",
            },
            {
              label: t.calculator.yearlyRent,
              value: fmtK(annualRent),
              color: GOLD,
              sub: "CZK",
            },
            {
              label: t.calculator.totalRent + " 10 " + t.calculator.years,
              value: fmtM(final.cumRent),
              color: GOLD,
              sub: "CZK",
            },
            {
              label: t.calculator.finalValue + " 10 " + t.calculator.years,
              value: fmtM(final.propValue),
              color: "#8B9FFF",
              sub: "CZK",
              bold: true,
            },
            {
              label: t.investorBenefits.capitalGrowth,
              value: "+" + fmtM(final.capGain),
              color: "#8B9FFF",
              sub: "CZK",
            },
            {
              label: t.calculator.totalProfit.toUpperCase(),
              value: fmtM(final.totalProfit),
              color: O,
              sub: "CZK",
              big: true,
            },
            {
              label: t.calculator.roi.toUpperCase(),
              value: returnPctFormatted + " %",
              color: O,
              sub: "",
              big: true,
            },
          ].map((k) => {
            return (
              <div
                key={k.label}
                style={{
                  flex: k.big ? "1 1 200px" : "1 1 140px",
                  minWidth: 130,
                  background: k.big
                    ? "rgba(255,107,53,0.08)"
                    : k.bold
                      ? "rgba(139,159,255,0.08)"
                      : "rgba(255,255,255,0.03)",
                  borderRadius: 12,
                  padding: k.big ? "16px 18px" : "12px 14px",
                  border: k.big
                    ? "1px solid rgba(255,107,53,0.2)"
                    : k.bold
                      ? "1px solid rgba(139,159,255,0.2)"
                      : "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: 1,
                    marginBottom: 4,
                  }}
                >
                  {k.label}
                </div>
                <div
                  style={{
                    fontSize: k.big ? 24 : k.bold ? 20 : 18,
                    fontWeight: k.big || k.bold ? 900 : 800,
                    color: k.color,
                  }}
                >
                  {k.value}
                </div>
                {k.sub && (
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.25)",
                      marginTop: 2,
                    }}
                  >
                    {k.sub}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Breakdown bar */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: 2,
              marginBottom: 8,
            }}
          >
            {language === "cs"
              ? "ROZDĚLENÍ ZISKU"
              : language === "it"
                ? "RIPARTIZIONE PROFITTO"
                : "PROFIT BREAKDOWN"}
          </div>
          <div
            style={{
              display: "flex",
              borderRadius: 8,
              overflow: "hidden",
              height: 36,
            }}
          >
            <div
              style={{
                width:
                  ((final.cumRent / final.totalProfit) * 100).toFixed(2) + "%",
                background: GOLD,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                color: N,
                minWidth: 80,
              }}
            >
              {(language === "cs"
                ? "Nájem: "
                : language === "it"
                  ? "Affitto: "
                  : "Rent: ") +
                ((final.cumRent / final.totalProfit) * 100)
                  .toFixed(1)
                  .replace(".", language === "cs" ? "," : ".") +
                " %"}
            </div>
            <div
              style={{
                width:
                  ((final.capGain / final.totalProfit) * 100).toFixed(2) + "%",
                background: "#5B6ABF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                minWidth: 80,
              }}
            >
              {(language === "cs"
                ? "Růst ceny: "
                : language === "it"
                  ? "Crescita: "
                  : "Growth: ") +
                ((final.capGain / final.totalProfit) * 100)
                  .toFixed(1)
                  .replace(".", language === "cs" ? "," : ".") +
                " %"}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 6,
            }}
          >
            <span style={{ fontSize: 12, color: GOLD, fontWeight: 700 }}>
              {fmtM(final.cumRent) + " CZK"}
            </span>
            <span style={{ fontSize: 12, color: "#8B9FFF", fontWeight: 700 }}>
              {fmtM(final.capGain) + " CZK"}
            </span>
          </div>
        </div>

        {/* Chart */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: 16,
            padding: "20px 16px 12px",
            marginBottom: 24,
          }}
        >
          <svg
            width="100%"
            viewBox={"0 0 " + chartW + " " + chartH}
            style={{ display: "block" }}
          >
            {[0, 0.25, 0.5, 0.75, 1].map((pct) => {
              const val = maxChart * pct;
              const y = cy(val);
              return (
                <g key={pct}>
                  <line
                    x1={padL}
                    y1={y}
                    x2={chartW - padR}
                    y2={y}
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                  <text
                    x={padL - 8}
                    y={y + 4}
                    fill="rgba(255,255,255,0.3)"
                    fontSize="10"
                    textAnchor="end"
                    fontFamily="system-ui"
                  >
                    {(val / 1000000).toFixed(1) + "M"}
                  </text>
                </g>
              );
            })}
            <path d={baseAreaPath} fill="rgba(255,255,255,0.03)" />
            <path d={capAreaPath} fill="rgba(91,106,191,0.25)" />
            <path d={rentAreaPath} fill="rgba(200,168,110,0.3)" />
            <line
              x1={cx(0)}
              y1={cy(price)}
              x2={cx(10)}
              y2={cy(price)}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
            <path d={propLine} fill="none" stroke="#5B6ABF" strokeWidth="2.5" />
            <path d={rentLineTop} fill="none" stroke={GOLD} strokeWidth="2.5" />
            {years.map((yr) => {
              if (yr.year === 0) return null;
              return (
                <g key={yr.year}>
                  <circle
                    cx={cx(yr.year)}
                    cy={cy(yr.propValue)}
                    r="4"
                    fill="#5B6ABF"
                  />
                  <circle
                    cx={cx(yr.year)}
                    cy={cy(yr.propValue + yr.cumRent)}
                    r="4"
                    fill={GOLD}
                  />
                </g>
              );
            })}
            {years.map((yr) => {
              return (
                <text
                  key={yr.year}
                  x={cx(yr.year)}
                  y={chartH - 8}
                  fill="rgba(255,255,255,0.4)"
                  fontSize="11"
                  textAnchor="middle"
                  fontFamily="system-ui"
                >
                  {yr.label}
                </text>
              );
            })}
            <rect
              x={chartW - 220}
              y={10}
              width="12"
              height="12"
              rx="2"
              fill={GOLD}
            />
            <text
              x={chartW - 203}
              y={20}
              fill="rgba(255,255,255,0.6)"
              fontSize="11"
              fontFamily="system-ui"
            >
              {language === "cs"
                ? "Celková hodnota (nemov. + nájem)"
                : language === "it"
                  ? "Valore totale (immobile + affitto)"
                  : "Total value (property + rent)"}
            </text>
            <rect
              x={chartW - 220}
              y={28}
              width="12"
              height="12"
              rx="2"
              fill="#5B6ABF"
            />
            <text
              x={chartW - 203}
              y={38}
              fill="rgba(255,255,255,0.6)"
              fontSize="11"
              fontFamily="system-ui"
            >
              {language === "cs"
                ? "Hodnota nemovitosti"
                : language === "it"
                  ? "Valore immobile"
                  : "Property value"}
            </text>
            <rect
              x={chartW - 220}
              y={46}
              width="12"
              height="3"
              fill="rgba(255,255,255,0.15)"
            />
            <text
              x={chartW - 203}
              y={52}
              fill="rgba(255,255,255,0.4)"
              fontSize="10"
              fontFamily="system-ui"
            >
              {language === "cs"
                ? "Kupní cena"
                : language === "it"
                  ? "Prezzo d'acquisto"
                  : "Purchase price"}
            </text>
          </svg>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
          >
            <thead>
              <tr>
                {[
                  language === "cs"
                    ? "ROK"
                    : language === "it"
                      ? "ANNO"
                      : "YEAR",
                  language === "cs"
                    ? "HODNOTA NEMOV."
                    : language === "it"
                      ? "VALORE IMMOBILE"
                      : "PROPERTY VALUE",
                  language === "cs"
                    ? "ROČNÍ NÁJEM"
                    : language === "it"
                      ? "AFFITTO ANNUO"
                      : "ANNUAL RENT",
                  language === "cs"
                    ? "KUM. NÁJEM"
                    : language === "it"
                      ? "AFFITTO CUM."
                      : "CUM. RENT",
                  language === "cs"
                    ? "KAPITÁL. ZISK"
                    : language === "it"
                      ? "GUADAGNO CAP."
                      : "CAPITAL GAIN",
                  language === "cs"
                    ? "CELKOVÝ ZISK"
                    : language === "it"
                      ? "PROFITTO TOTALE"
                      : "TOTAL PROFIT",
                ].map((h, i) => {
                  const colors = [
                    "rgba(255,255,255,0.4)",
                    "#8B9FFF",
                    GOLD,
                    GOLD,
                    "#8B9FFF",
                    O,
                  ];
                  return (
                    <th
                      key={h}
                      style={{
                        padding: "10px 10px",
                        textAlign: i === 0 ? "left" : "right",
                        color: colors[i],
                        fontSize: 10,
                        letterSpacing: 1,
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {h}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {years.map((yr) => {
                const isLast = yr.year === 10;
                const rowBg = isLast ? "rgba(255,107,53,0.06)" : "transparent";
                const bd = "1px solid rgba(255,255,255,0.04)";
                return (
                  <tr key={yr.year} style={{ background: rowBg }}>
                    <td
                      style={{
                        padding: "8px 10px",
                        borderBottom: bd,
                        fontWeight: isLast ? 800 : 400,
                        color: isLast ? O : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {yr.label}
                    </td>
                    <td
                      style={{
                        padding: "8px 10px",
                        textAlign: "right",
                        borderBottom: bd,
                        color: "#8B9FFF",
                        fontWeight: isLast ? 900 : 700,
                      }}
                    >
                      {fmtM(yr.propValue) + " Kč"}
                    </td>
                    <td
                      style={{
                        padding: "8px 10px",
                        textAlign: "right",
                        borderBottom: bd,
                        color: GOLD,
                        fontWeight: isLast ? 700 : 400,
                      }}
                    >
                      {yr.year === 0 ? "—" : fmtK(annualRent) + " Kč"}
                    </td>
                    <td
                      style={{
                        padding: "8px 10px",
                        textAlign: "right",
                        borderBottom: bd,
                        color: GOLD,
                        fontWeight: isLast ? 700 : 400,
                      }}
                    >
                      {yr.cumRent === 0 ? "—" : fmtK(yr.cumRent) + " Kč"}
                    </td>
                    <td
                      style={{
                        padding: "8px 10px",
                        textAlign: "right",
                        borderBottom: bd,
                        color: "#8B9FFF",
                        fontWeight: isLast ? 700 : 400,
                      }}
                    >
                      {yr.capGain === 0 ? "—" : "+" + fmtK(yr.capGain) + " Kč"}
                    </td>
                    <td
                      style={{
                        padding: "8px 10px",
                        textAlign: "right",
                        borderBottom: bd,
                        color: O,
                        fontWeight: isLast ? 800 : 400,
                      }}
                    >
                      {yr.totalProfit === 0 ? "—" : fmt(yr.totalProfit) + " Kč"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 20,
            padding: "14px 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
            {"SPILBERK SICAV | RENTBACK by SPILBERK"}
          </span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
            {language === "cs"
              ? "Modelový příklad, skutečné výnosy se mohou lišit"
              : language === "it"
                ? "Esempio di modello, i rendimenti effettivi possono variare"
                : "Model example, actual returns may vary"}
          </span>
        </div>
      </div>
    </div>
  );
}
