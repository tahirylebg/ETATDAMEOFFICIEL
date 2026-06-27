import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

import { ADDRESS, EMAIL, PHONE, PHONE_DISPLAY, SITE_URL } from "@/lib/etat-dame";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales ÉTAT DAME" },
      {
        name: "description",
        content: "Mentions légales du site ÉTAT DAME, brunch fait maison à Nîmes.",
      },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: LegalNoticePage,
});

function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-cream px-5 py-8 text-cocoa sm:px-8">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-cocoa/12 bg-card px-4 py-2 text-sm font-bold text-cocoa transition-colors hover:bg-cocoa/6"
        >
          <ArrowLeft className="h-4 w-4" />
          Accueil
        </a>

        <section className="mt-12 rounded-[2rem] border border-cocoa/12 bg-card p-6 shadow-paper sm:p-9">
          <p className="section-kicker text-terracotta">Informations légales</p>
          <h1 className="heading-readable mt-3 text-5xl text-cocoa sm:text-6xl">
            Mentions légales.
          </h1>
          <div className="mt-8 grid gap-6 text-sm leading-relaxed text-cocoa/76 sm:text-base">
            <LegalBlock title="Éditeur du site">
              <p>ÉTAT DAME</p>
              <p>{ADDRESS}</p>
              <p>Site web: {SITE_URL}</p>
            </LegalBlock>

            <LegalBlock title="Contact">
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" strokeWidth={1.6} />
                <a href={`tel:${PHONE}`} className="font-semibold text-cocoa hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" strokeWidth={1.6} />
                <a href={`mailto:${EMAIL}`} className="font-semibold text-cocoa hover:underline">
                  {EMAIL}
                </a>
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" strokeWidth={1.6} />
                {ADDRESS}
              </p>
            </LegalBlock>

            <LegalBlock title="Hébergement">
              <p>
                L'hébergement technique est assuré par le prestataire retenu pour la mise en ligne
                officielle du site. Cette information sera précisée par l'éditeur selon le domaine
                publié.
              </p>
            </LegalBlock>

            <LegalBlock title="Propriété intellectuelle">
              <p>
                Les textes, visuels, éléments graphiques et contenus de ce site sont protégés. Toute
                reproduction non autorisée est interdite.
              </p>
            </LegalBlock>
          </div>
        </section>
      </div>
    </main>
  );
}

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-cocoa/12 pt-5 first:border-t-0 first:pt-0">
      <h2 className="text-lg font-black text-cocoa">{title}</h2>
      <div className="mt-2 grid gap-1">{children}</div>
    </section>
  );
}
