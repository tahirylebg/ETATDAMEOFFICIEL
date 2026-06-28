import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { ArrowLeft } from "lucide-react";

import { EMAIL } from "@/lib/etat-dame";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Confidentialité ÉTAT DAME" },
      {
        name: "description",
        content: "Politique de confidentialité du site ÉTAT DAME.",
      },
    ],
    links: [{ rel: "canonical", href: "/confidentialite" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream px-5 py-8 text-cocoa sm:px-8">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 border border-cocoa bg-cocoa px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cocoa-deep"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Accueil
        </a>

        <section className="mt-12 rounded-none border border-cocoa/12 bg-card p-6 shadow-paper sm:p-9">
          <p className="section-kicker text-terracotta">Données personnelles</p>
          <h1 className="heading-readable mt-3 text-5xl text-cocoa sm:text-6xl">
            Confidentialité.
          </h1>
          <div className="mt-8 grid gap-6 text-sm leading-relaxed text-cocoa/76 sm:text-base">
            <PolicyBlock title="Données collectées">
              <p>
                Le site ÉTAT DAME ne collecte aucune donnée personnelle via un formulaire en ligne.
                Les réservations se font directement par téléphone ou via Instagram.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Contact">
              <p>
                Pour toute demande concernant vos données personnelles, contactez ÉTAT DAME à{" "}
                <a href={`mailto:${EMAIL}`} className="font-semibold text-cocoa hover:underline">
                  {EMAIL}
                </a>
                .
              </p>
            </PolicyBlock>
          </div>
        </section>
      </div>
    </main>
  );
}

function PolicyBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-cocoa/12 pt-5 first:border-t-0 first:pt-0">
      <h2 className="text-lg font-black text-cocoa">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
