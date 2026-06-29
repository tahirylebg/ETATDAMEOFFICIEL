import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Printer, QrCode, Smartphone, Table2 } from "lucide-react";

import { tables } from "@/lib/etat-dame";

export const Route = createFileRoute("/qr")({
  head: () => ({
    meta: [{ title: "QR codes tables ÉTAT DAME" }, { name: "robots", content: "noindex,nofollow" }],
  }),
  component: QrPage,
});

function QrPage() {
  const [baseUrl, setBaseUrl] = useState("https://etatdame.fr");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const normalizedBaseUrl = useMemo(() => baseUrl.replace(/\/$/, ""), [baseUrl]);

  function tableUrl(tableId: string) {
    return `${normalizedBaseUrl}/menu?table=${tableId}`;
  }

  return (
    <main className="min-h-screen bg-cream px-5 py-8 text-cocoa sm:px-8 print:bg-card print:p-0">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] print:block">
          <div className="print:hidden">
            <a
              href="/menu"
              className="inline-flex items-center gap-2 border border-cocoa/12 bg-card px-4 py-2 text-sm font-bold text-cocoa transition-colors hover:bg-cocoa/6"
            >
              <ArrowLeft className="h-4 w-4" />
              Menu
            </a>
            <p className="section-kicker mt-10 text-terracotta">QR codes tables</p>
            <h1 className="heading-readable mt-3 text-5xl text-cocoa sm:text-7xl">
              Une table, un QR, la carte.
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-cocoa/78">
              Chaque QR ouvre directement la carte digitale du menu. Mets l'URL publique finale du
              site, puis imprime les supports de table.
            </p>

            <div className="mt-8 grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cocoa/72">
                  URL publique ou locale
                </span>
                <input
                  value={baseUrl}
                  onChange={(event) => setBaseUrl(event.target.value)}
                  className="field-input"
                  placeholder="https://etatdame.fr"
                />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={tableUrl("1")}
                  className="inline-flex items-center justify-center gap-2 border border-cocoa/14 bg-card px-6 py-4 text-sm font-black text-cocoa transition-colors hover:bg-beige/55"
                >
                  <Smartphone className="h-4 w-4" />
                  Tester table 1
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-2 bg-cocoa px-6 py-4 text-sm font-black text-cream shadow-warm transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Printer className="h-4 w-4" />
                  Imprimer les QR
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 print:grid print:grid-cols-2 print:gap-0">
            {tables.map((table) => (
              <QrCard
                key={table.id}
                label={table.label}
                meta={`${table.area} · ${table.seats} places`}
                url={tableUrl(table.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function QrCard({ label, meta, url }: { label: string; meta: string; url: string }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=900x900&margin=32&data=${encodeURIComponent(url)}`;

  return (
    <article className="border border-cocoa/14 bg-card p-4 shadow-paper print:break-inside-avoid print:border print:border-cocoa/35 print:shadow-none">
      <div className="bg-cocoa p-5 text-center text-cream">
        <p className="text-3xl font-black tracking-[0.08em]">ÉTAT DAME</p>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-cream/76">
          Menu digital
        </p>
      </div>

      <div className="p-4 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-beige/60 text-cocoa print:hidden">
          <QrCode className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <h2 className="mt-4 text-3xl font-black leading-none text-cocoa">{label}</h2>
        <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-cocoa/8 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-cocoa/70">
          <Table2 className="h-3.5 w-3.5" />
          {meta}
        </p>
        <img
          src={qrUrl}
          alt={`QR code ${label} ÉTAT DAME`}
          className="mx-auto mt-5 aspect-square w-full max-w-[250px] border border-cocoa/10 bg-cream p-3 print:max-w-[220px]"
        />
        <p className="mt-4 text-sm font-black text-cocoa">Scannez pour voir la carte.</p>
        <p className="mt-1 text-xs font-semibold text-cocoa/62">Menu et infos pratiques.</p>
        <p className="mt-2 break-all text-[10px] font-semibold text-cocoa/52">{url}</p>
      </div>
    </article>
  );
}
