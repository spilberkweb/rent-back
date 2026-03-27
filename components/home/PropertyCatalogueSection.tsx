"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { useState } from "react";

const typeAccent: Record<string, string> = { 
  Single: "#1e3a5f", 
  Pair: "#0d9488", 
  "Co-living": "#7c3aed" 
};

const fmt = (n: number) => new Intl.NumberFormat("cs-CZ").format(n);

/* ── Project Medallion ─────────────────────── */
function ProjectMedallion({ project, t }: { project: any, t: any }) {
  const freeCount = project.units.filter((u: any) => u.status === "volne").length;
  
  return (
    <div style={{ display: "flex", gap: 0, background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden", marginBottom: 14 }}>
      <div style={{ width: 5, background: project.statusColor, flexShrink: 0 }} />
      <div style={{ flex: 1, padding: "18px 22px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
          <h3 className="rb-heading" style={{ fontSize: 22, margin: 0 }}>{project.name}</h3>
          <span style={{ padding: "2px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700, color: "#fff", background: project.statusColor }}>{project.statusLabel}</span>
          <span style={{ fontSize: 13, color: "#94a3b8" }}>{project.location}</span>
          <span style={{ marginLeft: "auto", fontSize: 13, color: "#0d9488", fontWeight: 700 }}>{freeCount} {t.catalog.freeUnits}</span>
        </div>
        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: "0 0 14px", maxWidth: 640 }}>{project.desc}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {project.stats.map((s: any, i: number) => (
            <div key={i} style={{ background: "#f8fafc", borderRadius: 6, padding: "6px 14px", display: "flex", gap: 6, alignItems: "baseline" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#1e293b" }}>{s.value}</span>
              <span style={{ fontSize: 11, color: "#94a3b8" }}>{s.label}</span>
            </div>
          ))}
          <div style={{ background: "#fff", borderRadius: 6, padding: "6px 14px", display: "flex", gap: 6, alignItems: "baseline", border: `1px solid ${project.id === "b47" ? "#fde68a" : "#0d948830"}` }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: project.id === "b47" ? "#d97706" : "#0d9488" }}>{project.yield} %</span>
            <span style={{ fontSize: 11, color: "#64748b" }}>{project.yieldLabel}</span>
          </div>
        </div>
        {project.deliveryNote && (
          <div style={{ marginTop: 12, padding: "10px 14px", background: "#fefce8", borderRadius: 6, border: "1px solid #fde68a", fontSize: 13, color: "#92400e", lineHeight: 1.5 }}>
            ⚡ <strong>{t.catalog.deliveryNotePrefix}</strong> {project.deliveryNote}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main Component ────────────────────────── */
export default function PropertyCatalogueSection() {
  const { t } = useLanguage();
  const [typeFilter, setTypeFilter] = useState("all");
  const [onlyFree, setOnlyFree] = useState(false);

  const projects = t.catalog?.projects || [];
  const statusLabels: Record<string, { label: string, dot: string }> = {
    volne: { label: t.catalog?.status.volne || "Available", dot: "#0d9488" },
    rezervovano: { label: t.catalog?.status.rezervovano || "Reserved", dot: "#d97706" },
    prodano: { label: t.catalog?.status.prodano || "Sold", dot: "#cbd5e1" },
  };

  return (
    <section className="rb-root py-20 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
        .rb-root { --navy: #1e3a5f; --gold: #c5a55a; --teal: #0d9488; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #faf9f7; color: #334155; }
        .rb-heading { font-family: 'Playfair Display', Georgia, serif; color: #1e293b; letter-spacing: -0.02em; }
        .rb-pill { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: 0.02em; }
        .rb-row { 
          display: grid; 
          grid-template-columns: 100px 90px 40px 50px 1fr 140px; 
          gap: 8px; 
          padding: 12px 16px; 
          align-items: center; 
          font-size: 14px; 
          border-bottom: 1px solid #f1f5f9; 
          transition: background 0.12s; 
        }
        .rb-row:last-child { border-bottom: none; }
        .rb-row-free:hover { background: #f0fdf9 !important; }
        
        @media (max-width: 840px) {
          .rb-row { 
            grid-template-columns: 80px 75px 30px 40px 1fr 110px; 
            font-size: 13px; 
            padding: 10px 12px;
            gap: 4px;
          }
          .rb-hide-m { display: none !important; }
        }
        
        @media (max-width: 600px) {
          .rb-row { 
            grid-template-columns: 85px 1fr 90px;
            gap: 4px 10px;
            padding: 10px 12px;
          }
          .rb-mobile-row-span { 
            grid-column: 1 / -1; 
            display: flex !important; 
            justify-content: space-between; 
            align-items: center;
            font-size: 11px; 
            color: #64748b; 
            border-top: 1px dashed #e2e8f0; 
            padding-top: 6px; 
            margin-top: 2px; 
          }
          .rb-hide-xs { display: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: 940, margin: "0 auto" }}>
        <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>{t.catalog?.badge}</div>
        <h2 className="rb-heading" style={{ fontSize: "clamp(26px, 4vw, 38px)", margin: "0 0 6px" }}>{t.catalog?.title}</h2>
        <p style={{ fontSize: 15, color: "#64748b", maxWidth: 520, lineHeight: 1.6, margin: "0 0 28px" }}>
          {t.catalog?.subtitle}
        </p>

        {/* Filters */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {["all", "Single", "Pair", "Co-living"].map(v => (
            <button key={v} onClick={() => setTypeFilter(v)}
              style={{ padding: "5px 14px", borderRadius: 16, border: typeFilter === v ? "none" : "1px solid #e2e8f0", background: typeFilter === v ? "var(--navy)" : "#fff", color: typeFilter === v ? "#fff" : "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              {v === "all" ? t.catalog?.all : v}
            </button>
          ))}
          <span style={{ width: 1, height: 18, background: "#e2e8f0" }} />
          <button onClick={() => setOnlyFree(!onlyFree)}
            style={{ padding: "5px 14px", borderRadius: 16, border: onlyFree ? "none" : "1px solid #e2e8f0", background: onlyFree ? "var(--teal)" : "#fff", color: onlyFree ? "#fff" : "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            {t.catalog?.onlyFree}
          </button>
        </div>
      </div>

      {/* Projects */}
      <div style={{ maxWidth: 940, margin: "0 auto", paddingBottom: "60px" }}>
        {projects.map((project: any) => {
          const filtered = (project.units || []).filter((u: any) => {
            if (typeFilter !== "all" && u.type !== typeFilter) return false;
            if (onlyFree && u.status !== "volne") return false;
            return true;
          });

          return (
            <div key={project.id} style={{ marginBottom: 48 }}>
              <ProjectMedallion project={project} t={t} />

              <div className="rb-row rb-hide-xs" style={{ background: "#f1f5f9", borderRadius: "6px 6px 0 0", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "none" }}>
                <span>{t.catalog?.columns.unit}</span>
                <span>{t.catalog?.columns.type}</span>
                <span className="rb-hide-m">{t.catalog?.columns.floor}</span>
                <span className="rb-hide-m">{t.catalog?.columns.size}</span>
                <span>{t.catalog?.columns.price}</span>
                <span style={{ textAlign: "right" }}>{t.catalog?.columns.yield}</span>
              </div>

              <div style={{ border: "1px solid #e5e7eb", borderTop: "none", borderRadius: "0 0 6px 6px", overflow: "hidden" }}>
                {filtered.length === 0 && (
                  <div style={{ padding: "20px 16px", textAlign: "center", color: "#94a3b8", fontSize: 14 }}>Žádné jednotky neodpovídají filtru.</div>
                )}
                {filtered.map((unit: any, i: number) => {
                  const s = statusLabels[unit.status] || { label: unit.status, dot: "#999" };
                  const isFree = unit.status === "volne";
                  const isSold = unit.status === "prodano";
                  const monthly = Math.round((unit.price * (project.yield / 100)) / 12);

                  return (
                    <div key={unit.id} className={`rb-row ${isFree ? "rb-row-free" : ""}`}
                      style={{ background: i % 2 === 0 ? "#fff" : "#fafbfc", color: isSold ? "#bcc5d0" : "#334155" }}
                    >
                      <span style={{ fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15, color: isSold ? "#bcc5d0" : "#1e293b" }}>{unit.id}</span>
                      
                      {/* Desktop View Columns */}
                      <span className="rb-hide-xs">
                        <span className="rb-pill" style={{ background: isSold ? "#cbd5e1" : (typeAccent[unit.type] || "#64748b") }}>{unit.type}</span>
                      </span>
                      <span className="rb-hide-m rb-hide-xs">{unit.floor}.</span>
                      <span className="rb-hide-m rb-hide-xs">{unit.size}</span>
                      
                      <span style={{ fontWeight: 600 }}>{fmt(unit.price)} Kč</span>
                      
                      <span style={{ textAlign: "right" }}>
                        {isFree ? (
                          <span style={{ color: "var(--teal)", fontWeight: 700, fontSize: 14 }}>
                            {project.yield}%
                            <span className="rb-hide-m" style={{ fontWeight: 400, color: "#94a3b8", fontSize: 11 }}> ({fmt(monthly)} Kč/m)</span>
                          </span>
                        ) : (
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, whiteSpace: "nowrap" }}>
                            <span style={{ width: 7, height: 7, borderRadius: "50%", background: s.dot }} />
                            {s.label}
                          </span>
                        )}
                      </span>

                      {/* Mobile Additional Info */}
                      <div className="rb-mobile-row-span" style={{ display: "none" }}>
                         <span className="rb-pill" style={{ background: isSold ? "#cbd5e1" : (typeAccent[unit.type] || "#64748b") }}>{unit.type}</span>
                         <span>{unit.floor}. NP · {unit.size} m²</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ maxWidth: 940, margin: "0 auto" }}>
        <p style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: 16 }}>
          {t.catalog?.disclaimer}
        </p>
      </div>
    </section>
  );
}
