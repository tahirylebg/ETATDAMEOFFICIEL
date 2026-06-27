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
          className="inline-flex items-center gap-2 rounded-full border border-cocoa/12 bg-card px-4 py-2 text-sm font-bold text-cocoa transition-colors hover:bg-cocoa/6"
        >
          <ArrowLeft className="h-4 w-4" />
          Accueil
        </a>

        <section className="mt-12 rounded-[2rem] border border-cocoa/12 bg-card p-6 shadow-paper sm:p-9">
          <p className="section-kicker text-terracotta">Données personnelles</p>
          <h1 className="heading-readable mt-3 text-5xl text-cocoa sm:text-6xl">
            Confidentialité.
          </h1>
          <div className="mt-8 grid gap-6 text-sm leading-relaxed text-cocoa/76 sm:text-base">
            <PolicyBlock title="Données collectées">
              <p>
                Le formulaire de réservation collecte uniquement les informations nécessaires au
                traitement de la demande: nom, téléphone, date, horaire, nombre de personnes et
                message éventuel.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Finalité">
              <p>
                Ces données servent uniquement à répondre aux demandes de réservation et à contacter
                la personne si une précision est nécessaire.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Conservation">
              <p>
                Les demandes sont conservées le temps nécessaire à leur traitement opérationnel. Le
                restaurant peut supprimer les données sur demande.
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
