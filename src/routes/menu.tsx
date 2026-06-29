import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Coffee,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  Utensils,
  Wine,
} from "lucide-react";

import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE,
  PHONE_DISPLAY,
  cocktailMenu,
  drinkMenu,
  foodMenu,
  images,
  tables,
  type DigitalMenuGroup,
  type DigitalMenuItem,
} from "@/lib/etat-dame";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu ÉTAT DAME, carte digitale à Nîmes" },
      {
        name: "description",
        content:
          "Menu digital ÉTAT DAME: plats, boissons, cocktails, prix et informations pratiques.",
      },
      { property: "og:title", content: "Menu ÉTAT DAME, carte digitale à Nîmes" },
      {
        property: "og:description",
        content: "Toute la carte ÉTAT DAME, lisible rapidement après scan QR code.",
      },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const scannedTable = useScannedTable();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cocoa focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Aller au contenu
      </a>
      <MenuNav />
      <main id="main">
        <MenuHero scannedTable={scannedTable} />
        <QuickTabs />
        <DigitalMenuSection
          sectionId="manger"
          kicker="Manger"
          title="Recettes et choix"
          intro="Chaque bloc donne la base de la recette, puis seulement ce qui change dans l'assiette."
          icon={Utensils}
          groups={foodMenu}
          detailed
        />
        <DigitalMenuSection
          sectionId="boire"
          kicker="Boire"
          title="Boissons, cafés et matcha"
          intro="Froid, chaud, café, limonades, jus et boissons maison."
          icon={Coffee}
          groups={drinkMenu}
          muted
        />
        <DigitalMenuSection
          sectionId="cocktails"
          kicker="Cocktails"
          title="Les signatures du bar"
          intro="Une carte dédiée aux créations maison, à découvrir séparément du brunch."
          icon={Wine}
          groups={cocktailMenu}
        />
        <MenuInfo />
      </main>
      <MenuFooter />
      <MenuMobileBar />
    </div>
  );
}

function useScannedTable() {
  const [scannedTable, setScannedTable] = useState("");

  useEffect(() => {
    const tableId = new URLSearchParams(window.location.search).get("table");
    const table = tables.find((candidate) => candidate.id === tableId);
    if (table) setScannedTable(table.label);
  }, []);

  return scannedTable;
}

function MenuNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cocoa/10 bg-[var(--cream-warm)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="/"
          className="flex items-center gap-3 text-cocoa transition-opacity hover:opacity-80"
        >
          <span className="grid h-9 w-9 place-items-center rounded-sm border border-cocoa/25 bg-card font-serif text-xl leading-none">
            d
          </span>
          <span className="font-serif text-lg tracking-[0.22em]">ÉTAT DAME</span>
        </a>
        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.14em] text-cocoa/80 md:flex">
          <a href="#manger" className="transition-colors hover:text-cocoa">
            Manger
          </a>
          <a href="#boire" className="transition-colors hover:text-cocoa">
            Boire
          </a>
          <a href="#cocktails" className="transition-colors hover:text-cocoa">
            Cocktails
          </a>
          <a href="#infos" className="transition-colors hover:text-cocoa">
            Infos
          </a>
        </nav>
        <a
          href="/"
          className="inline-flex items-center gap-2 border border-cocoa bg-cocoa px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cocoa-deep"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Accueil
        </a>
      </div>
    </header>
  );
}

function MenuHero({ scannedTable }: { scannedTable: string }) {
  return (
    <section className="paper-grain px-5 pb-9 pt-30 sm:px-8 sm:pb-12 sm:pt-38">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <p className="section-kicker text-terracotta">
            {scannedTable ? `Carte digitale · ${scannedTable}` : "Carte illustrée"}
          </p>
          <h1 className="display-readable mt-3 text-[clamp(4.4rem,11vw,9rem)] text-cocoa">Menu</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-cocoa/86 sm:text-2xl">
            Toute la carte ÉTAT DAME, pensée pour choisir vite: base de la recette, options, prix,
            boissons.
          </p>
          {scannedTable && (
            <p className="mt-4 inline-flex rounded-full border border-cocoa/12 bg-card px-4 py-2 text-sm font-bold text-cocoa shadow-paper">
              Scan depuis {scannedTable}. Pour réserver, appelez directement le restaurant.
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#manger"
              className="inline-flex items-center gap-2 rounded-none bg-cocoa px-6 py-3 text-sm font-bold text-cream shadow-warm transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Utensils className="h-4 w-4" />
              Voir les plats
            </a>
            <a
              href="#boire"
              className="inline-flex items-center gap-2 rounded-none border border-cocoa/14 bg-card px-6 py-3 text-sm font-bold text-cocoa transition-colors hover:bg-beige/55"
            >
              <Coffee className="h-4 w-4" />
              Voir les boissons
            </a>
          </div>
        </div>

        <figure className="relative overflow-hidden border-[10px] border-cocoa bg-cocoa shadow-warm">
          <img
            src={images.brunch}
            alt="Brunch servi chez ÉTAT DAME"
            className="aspect-[16/11] w-full object-cover"
            width={1400}
            height={960}
          />
          <figcaption className="absolute bottom-5 left-5 rounded-full bg-cream px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cocoa shadow-paper">
            Carte QR
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function QuickTabs() {
  return (
    <div className="sticky top-[4.3rem] z-30 bg-cream/94 px-5 py-3 backdrop-blur-md sm:px-8">
      <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto" aria-label="Accès carte">
        {[
          ["#manger", "Manger"],
          ["#boire", "Boire"],
          ["#cocktails", "Cocktails"],
          ["#infos", "Infos pratiques"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="shrink-0 px-5 py-2.5 text-sm font-bold text-cocoa transition-colors hover:text-terracotta"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function DigitalMenuSection({
  sectionId,
  kicker,
  title,
  intro,
  icon: Icon,
  groups,
  muted = false,
  detailed = false,
}: {
  sectionId: string;
  kicker: string;
  title: string;
  intro: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  groups: DigitalMenuGroup[];
  muted?: boolean;
  detailed?: boolean;
}) {
  return (
    <section
      id={sectionId}
      className={`scroll-mt-32 px-5 py-14 sm:px-8 sm:py-18 ${muted ? "bg-beige/35" : ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker text-terracotta">{kicker}</p>
            <h2 className="heading-readable mt-3 text-5xl text-cocoa sm:text-6xl">{title}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-cocoa/76">{intro}</p>
            {detailed && (
              <div className="mt-4 flex max-w-xl flex-wrap items-center gap-2 text-xs font-semibold text-cocoa/70">
                <span className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.12em] text-olive">
                  <Leaf className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Sans viande
                </span>
                <span>Repère indicatif, pas une mention vegan ou allergènes.</span>
              </div>
            )}
          </div>
          <span className="hidden h-[3.75rem] w-[3.75rem] place-items-center rounded-full border border-cocoa/12 bg-card text-cocoa shadow-paper sm:grid">
            <Icon className="h-6 w-6" strokeWidth={1.45} />
          </span>
        </div>

        <div className="mt-9 columns-1 gap-5 md:columns-2 xl:columns-3">
          {groups.map((group, index) => (
            <MenuGroupCard key={group.title} group={group} index={index} detailed={detailed} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuGroupCard({
  group,
  index,
  detailed,
}: {
  group: DigitalMenuGroup;
  index: number;
  detailed: boolean;
}) {
  const priceHint =
    group.items.length > 1 ? `Dès ${group.items[0].price}` : (group.items[0]?.price ?? "");

  return (
    <Reveal
      as="article"
      className={`mb-5 break-inside-avoid overflow-hidden rounded-none border border-cocoa/14 bg-card p-5 shadow-paper sm:p-6 ${
        detailed && !group.compact ? "ring-1 ring-cocoa/4" : ""
      }`}
      delay={Math.min(index, 4) * 0.08}
    >
      {group.image && (
        <figure className="mb-4 overflow-hidden border-[6px] border-cocoa">
          <img
            src={group.image}
            alt={group.imageAlt ?? group.title}
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            loading="lazy"
          />
        </figure>
      )}
      <div className="flex items-start justify-between gap-4 border-b border-cocoa/12 pb-4">
        <h3 className="font-sans text-xl font-black uppercase leading-tight text-cocoa sm:text-2xl">
          {group.title}
        </h3>
        {priceHint ? (
          <span className="shrink-0 rounded-full bg-cocoa px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-cream">
            {priceHint}
          </span>
        ) : (
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-terracotta" />
        )}
      </div>
      {group.composition && (
        <div className="mt-4 rounded-none bg-beige/38 p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cocoa/62">
            Composition
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cocoa/82">{group.composition}</p>
        </div>
      )}
      {group.note && <p className="mt-3 text-sm leading-relaxed text-cocoa/70">{group.note}</p>}
      {group.choiceLabel && (
        <p className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-terracotta">
          {group.choiceLabel}
        </p>
      )}
      <div className="mt-4 space-y-3">
        {group.items.map((item) => (
          <MenuItemRow key={`${group.title}-${item.name}`} item={item} />
        ))}
      </div>
    </Reveal>
  );
}

function MenuItemRow({ item }: { item: DigitalMenuItem }) {
  return (
    <div className="flex items-start gap-3">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p className="text-base font-semibold leading-snug text-cocoa sm:text-[1.05rem]">
            {item.name}
          </p>
          {item.vegetarian && (
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.1em] text-olive">
              <Leaf className="h-3 w-3" strokeWidth={1.8} />
              Sans viande
            </span>
          )}
        </div>
        {item.note && <p className="mt-0.5 text-xs text-cocoa/62">{item.note}</p>}
      </div>
      <span className="leader-dots mt-[1.25rem] min-w-5 flex-1" aria-hidden="true" />
      <p className="shrink-0 font-sans text-base font-black tabular-nums text-cocoa sm:text-lg">
        {item.price}
      </p>
    </div>
  );
}

function MenuInfo() {
  return (
    <section id="infos" className="scroll-mt-32 bg-cocoa px-5 py-14 text-cream sm:px-8 sm:py-18">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal>
          <p className="section-kicker text-cream/90">Infos pratiques</p>
          <h2 className="heading-readable mt-3 max-w-3xl text-5xl sm:text-6xl">
            Carte simple, prix directs, réservation à part.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-cream/82">
            Les prix sont indiqués en euros. Addition partagée à parts égales uniquement.
          </p>
        </Reveal>

        <Reveal className="grid gap-3" delay={0.15}>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-between gap-4 rounded-none border border-cream/14 bg-cream/8 px-5 py-4 text-cream transition-colors hover:bg-cream/14"
          >
            <span className="inline-flex items-center gap-3 font-semibold">
              <Phone className="h-5 w-5" strokeWidth={1.5} />
              Appeler
            </span>
            <span className="font-bold">{PHONE_DISPLAY}</span>
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between gap-4 rounded-none border border-cream/14 bg-cream/8 px-5 py-4 text-cream transition-colors hover:bg-cream/14"
          >
            <span className="inline-flex items-center gap-3 font-semibold">
              <MapPin className="h-5 w-5" strokeWidth={1.5} />
              Adresse
            </span>
            <span className="text-right font-bold">{ADDRESS}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function MenuFooter() {
  return (
    <footer className="bg-ink px-5 pb-28 pt-12 text-cream/84 sm:px-8 md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-3xl tracking-[0.12em] text-cream">ÉTAT DAME</p>
          <p className="mt-2 text-sm text-cream/70">
            Carte susceptible d'évoluer selon les produits et la saison.
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-cream"
        >
          <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
        </a>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-cream/64">
          <a href="/mentions-legales" className="hover:text-cream">
            Mentions légales
          </a>
          <a href="/confidentialite" className="hover:text-cream">
            Confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}

function MenuMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-cocoa/10 bg-cream/94 p-3 shadow-[0_-18px_44px_-30px_color-mix(in_oklab,var(--cocoa)_60%,transparent)] backdrop-blur-md md:hidden">
      <a
        href="#manger"
        className="inline-flex items-center justify-center gap-2 rounded-none border border-cocoa/14 bg-card py-3.5 text-sm font-semibold text-cocoa"
      >
        <Utensils className="h-4 w-4" /> Manger
      </a>
      <a
        href="#boire"
        className="inline-flex items-center justify-center gap-2 rounded-none border border-cocoa/14 bg-card py-3.5 text-sm font-semibold text-cocoa"
      >
        <Coffee className="h-4 w-4" /> Boire
      </a>
      <a
        href={`tel:${PHONE}`}
        className="inline-flex items-center justify-center gap-2 rounded-none bg-cocoa py-3.5 text-sm font-semibold text-cream shadow-warm"
      >
        <Phone className="h-4 w-4" /> Réserver
      </a>
    </div>
  );
}
