import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  Instagram,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Utensils,
  Users,
} from "lucide-react";

import {
  ADDRESS,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE,
  PHONE_DISPLAY,
  TRIPADVISOR_RATING,
  TRIPADVISOR_REVIEW_COUNT,
  TRIPADVISOR_URL,
  bases,
  euro,
  gourmandises,
  hours,
  images,
  instagramPhotos,
} from "@/lib/etat-dame";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ÉTAT DAME, brunch fait maison à Nîmes",
      },
      {
        name: "description",
        content:
          "ÉTAT DAME à Nîmes: brunch fait maison, produits frais et de saison. Découvrez le restaurant, consultez la carte et envoyez une demande de réservation.",
      },
      {
        property: "og:title",
        content: "ÉTAT DAME, brunch fait maison à Nîmes",
      },
      {
        property: "og:description",
        content: "Une adresse chaleureuse pour bruncher, consulter la carte et réserver.",
      },
      { property: "og:type", content: "restaurant" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_1200px_at_78%_120px,color-mix(in_oklab,var(--terracotta)_48%,transparent),transparent_72%),radial-gradient(circle_1000px_at_4%_900px,color-mix(in_oklab,var(--olive)_30%,transparent),transparent_72%),radial-gradient(circle_900px_at_92%_1700px,color-mix(in_oklab,var(--terracotta)_26%,transparent),transparent_70%)]" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cocoa focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Aller au contenu
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <RestaurantIntro />
        <MenuPreview />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cocoa/10 bg-[var(--cream-warm)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="/"
          className="flex items-center gap-3 text-cocoa transition-opacity hover:opacity-80"
          aria-label="ÉTAT DAME, accueil"
        >
          <span className="grid h-9 w-9 place-items-center rounded-sm border border-cocoa/25 bg-card font-serif text-xl leading-none">
            d
          </span>
          <span className="font-serif text-lg tracking-[0.22em]">ÉTAT DAME</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.14em] text-cocoa/80 md:flex">
          <a href="/menu" className="transition-colors hover:text-cocoa">
            Menu
          </a>
          <a href="#restaurant" className="transition-colors hover:text-cocoa">
            Le lieu
          </a>
          <a href="#infos" className="transition-colors hover:text-cocoa">
            Infos
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cocoa"
          >
            Instagram
          </a>
        </nav>

        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 border border-cocoa bg-cocoa px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cocoa-deep"
        >
          Appeler
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden paper-grain px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-36"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cocoa/90">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.6} />
            Brunch maison à Nîmes
          </p>
          <h1 className="display-readable mt-7 text-[clamp(4.1rem,12vw,10.5rem)] text-cocoa text-balance">
            ÉTAT
            <span className="block translate-x-[0.12em]">DAME</span>
          </h1>
          <p className="mt-7 max-w-xl text-2xl leading-snug text-cocoa/86 sm:text-3xl">
            Brunch fait maison, produits frais & de saison. Une carte courte, lisible, généreuse,
            pensée pour se décider vite.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/menu"
              className="group inline-flex items-center justify-center gap-3 rounded-none bg-cocoa py-4 pl-7 pr-3 text-sm font-semibold text-cream shadow-warm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 active:scale-[0.98]"
            >
              Voir le menu
              <span className="grid h-9 w-9 place-items-center rounded-none bg-cream/12 transition-transform group-hover:translate-x-1">
                <Utensils className="h-4 w-4" />
              </span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-3 rounded-none border border-cocoa/18 bg-card/70 px-7 py-4 text-sm font-semibold text-cocoa transition-colors hover:bg-cocoa/6"
            >
              Réserver par téléphone
              <Calendar className="h-4 w-4" strokeWidth={1.7} />
            </a>
          </div>
        </div>

        <div className="relative lg:pb-4">
          <div className="absolute -right-8 top-10 hidden w-32 rotate-6 rounded-full bg-cocoa px-5 py-7 text-center text-cream shadow-warm lg:block">
            <p className="section-kicker leading-none">fait</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em]">maison</p>
          </div>
          <figure className="border-[10px] border-cocoa bg-cocoa shadow-warm">
            <img
              src={images.hero}
              alt="Table de brunch avec pancakes, café latte et avocado toast"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
              width={1920}
              height={1080}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function RestaurantIntro() {
  return (
    <section id="restaurant" className="px-5 py-18 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal className="relative">
          <figure className="border-[10px] border-cocoa bg-cocoa shadow-warm">
            <img
              src={images.interior}
              alt="Salle ÉTAT DAME avec murs terracotta, tables en marbre et plantes"
              className="aspect-[16/11] w-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </figure>
          <div className="absolute -bottom-6 left-6 max-w-xs rounded-none border border-cocoa/12 bg-card p-5 shadow-paper">
            <p className="font-serif text-3xl text-cocoa">Nîmes</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Une adresse douce, lumineuse, pensée pour bruncher sans courir.
            </p>
          </div>
        </Reveal>
        <Reveal className="pt-8 lg:pt-0" delay={0.15}>
          <p className="section-kicker text-terracotta">Le restaurant</p>
          <h2 className="heading-readable mt-3 text-5xl text-cocoa sm:text-6xl">
            Une table de brunch qui donne d'abord faim.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              ÉTAT DAME met en avant une cuisine maison, des produits frais et une carte simple à
              comprendre. On vient pour un brunch salé, une gourmandise sucrée, un café, ou juste
              pour prendre le temps.
            </p>
            <p>
              Le lieu doit se comprendre en quelques secondes: l'ambiance, les assiettes, les prix
              et le chemin pour réserver sont visibles sans chercher.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Maison", "bases préparées sur place"],
              ["Saison", "carte qui peut évoluer"],
              ["Simple", "menu clair, prix visibles"],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-cocoa/14 pt-4">
                <p className="font-serif text-2xl text-cocoa">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MenuPreview() {
  return (
    <section id="menu-preview" className="paper-grain px-5 py-18 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <Reveal>
            <p className="section-kicker text-terracotta">Aperçu carte</p>
            <h2 className="heading-readable mt-3 text-5xl text-cocoa sm:text-6xl">
              Du salé généreux, du sucré net, une carte qui se lit vite.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Le site donne envie sans surcharger: quelques assiettes clés, les prix visibles, puis
              une page menu dédiée pour choisir tranquillement après scan QR.
            </p>
            <a
              href="/menu"
              className="mt-8 inline-flex items-center gap-3 rounded-none bg-cocoa py-4 pl-7 pr-3 text-sm font-semibold text-cream shadow-warm transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Découvrir toute la carte
              <span className="grid h-9 w-9 place-items-center rounded-none bg-cream/12">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <Reveal
              as="article"
              className="overflow-hidden border-[10px] border-cocoa bg-cocoa text-cream shadow-warm"
              delay={0.15}
            >
              <img
                src={images.brunch}
                alt="Oeufs brunch servis avec saumon et sauce maison"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cream/76">
                  Base signature
                </p>
                <p className="mt-2 font-serif text-4xl leading-tight">{bases[0].name}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/86">{bases[0].description}</p>
                <p className="mt-5 font-serif text-3xl">{euro(bases[0].price)}</p>
              </div>
            </Reveal>

            <Reveal
              className="rounded-none border border-cocoa/12 bg-card p-6 shadow-paper"
              delay={0.3}
            >
              <p className="font-serif text-3xl text-cocoa">Les incontournables</p>
              <div className="mt-5 space-y-4">
                {[bases[1], bases[2]].map((item) => (
                  <div
                    key={item.id}
                    className="border-t border-cocoa/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-semibold text-cocoa">{item.name}</p>
                      <p className="font-serif text-xl text-cocoa">{euro(item.price)}</p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
                {gourmandises.slice(0, 2).map((item) => (
                  <div key={item.name} className="border-t border-cocoa/10 pt-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-semibold text-cocoa">{item.name}</p>
                      <p className="font-serif text-xl text-cocoa">{item.price}</p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-cocoa px-5 py-16 text-cream sm:px-8 sm:py-20">
      <Reveal className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        <div>
          <p className="section-kicker text-cream/76">Avis clients</p>
          <h2 className="heading-readable mt-3 text-4xl sm:text-5xl">Ce qu'on dit de nous.</h2>
        </div>
        <a
          href={TRIPADVISOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-cream/25 bg-cream/10 px-6 py-4 text-sm font-semibold text-cream transition-colors hover:bg-cream/16"
        >
          <span className="flex items-center gap-1 text-terracotta">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" strokeWidth={0} />
            ))}
          </span>
          {TRIPADVISOR_RATING.toFixed(1)}/5 sur TripAdvisor · {TRIPADVISOR_REVIEW_COUNT} avis
        </a>
      </Reveal>
    </section>
  );
}

function Visit() {
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const [matchHeight, setMatchHeight] = useState<number>();

  useEffect(() => {
    const element = rightColumnRef.current;
    if (!element) return;

    const updateHeight = () => setMatchHeight(element.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="infos" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal
          className="flex flex-col lg:h-[var(--match-h)]"
          style={
            matchHeight ? ({ "--match-h": `${matchHeight}px` } as React.CSSProperties) : undefined
          }
        >
          <p className="section-kicker text-terracotta">Infos pratiques</p>
          <h2 className="heading-readable mt-3 text-5xl text-cocoa sm:text-6xl">
            Ce qu'on veut savoir avant de venir.
          </h2>
          <div className="mt-8 grid gap-3">
            <InfoRow icon={MapPin} label="Adresse" value={ADDRESS} href={MAPS_URL} />
            <InfoRow icon={Phone} label="Téléphone" value={PHONE_DISPLAY} href={`tel:${PHONE}`} />
            <InfoRow
              icon={Instagram}
              label="Instagram"
              value={INSTAGRAM_HANDLE}
              href={INSTAGRAM_URL}
            />
            <InfoRow
              icon={Users}
              label="Pour qui"
              value="Brunch entre amis, date, famille, pause café."
            />
          </div>

          <article className="mt-5 flex min-h-0 flex-1 flex-col overflow-hidden border-[6px] border-cocoa bg-cocoa p-4 text-cream shadow-warm">
            <div className="flex items-center justify-between gap-3">
              <p className="flex items-center gap-2 font-serif text-lg">
                <Instagram className="h-4 w-4" strokeWidth={1.6} />
                {INSTAGRAM_HANDLE}
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cream/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-cream/12"
              >
                Suivre
              </a>
            </div>
            <div className="mt-3 grid min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-1.5">
              {instagramPhotos.map((src) => (
                <a
                  key={src}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden"
                >
                  <img
                    src={src}
                    alt="Photo Instagram ÉTAT DAME"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </article>
        </Reveal>

        <div ref={rightColumnRef} className="grid gap-5 lg:self-start">
          <Reveal
            className="border-[6px] border-cocoa bg-card p-5 shadow-paper sm:p-7"
            delay={0.15}
          >
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-cocoa" strokeWidth={1.5} />
              <h3 className="font-serif text-3xl text-cocoa">Horaires</h3>
            </div>
            <ul className="mt-5 grid gap-2">
              {hours.map(([day, time], index) => {
                const active = index === todayIndex;
                const closed = time === "Fermé";
                return (
                  <li
                    key={day}
                    className={`flex flex-wrap items-center justify-between gap-3 rounded-none px-4 py-3 text-sm ${
                      active ? "bg-cocoa text-cream" : "bg-cream/55 text-cocoa"
                    }`}
                  >
                    <span className="font-semibold">{day}</span>
                    <span className={closed ? "italic opacity-[0.62]" : ""}>{time}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Horaires à confirmer les jours fériés via Instagram ou par téléphone.
            </p>
          </Reveal>

          <Reveal
            className="overflow-hidden border-[6px] border-cocoa bg-card shadow-paper"
            delay={0.3}
          >
            <iframe
              title="ÉTAT DAME à Nîmes"
              src="https://www.google.com/maps?q=12+Rue+Littr%C3%A9+30000+N%C3%AEmes&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cocoa/8 text-cocoa">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-cocoa/68">
          {label}
        </span>
        <span className="mt-1 block break-words font-serif text-xl leading-tight text-cocoa">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-none border border-cocoa/10 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-cocoa/24 hover:shadow-soft"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-none border border-cocoa/10 bg-card p-4">
      {content}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-5 pb-28 pt-14 text-cream/84 sm:px-8 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="font-serif text-3xl tracking-[0.12em] text-cream">ÉTAT DAME</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/72">
            Brunch fait maison, produits frais & de saison à Nîmes.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/64">Réserver</p>
          <a href={`tel:${PHONE}`} className="mt-3 block hover:text-cream">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="mt-2 block hover:text-cream">
            {EMAIL}
          </a>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/64">Suivre</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 hover:text-cream"
          >
            <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
          </a>
          <p className="mt-5 text-xs text-cream/64">
            Informations, horaires et menu susceptibles d'évoluer selon la saison.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-cream/64">
            <a href="/mentions-legales" className="hover:text-cream">
              Mentions légales
            </a>
            <a href="/confidentialite" className="hover:text-cream">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-cream/10 pt-5 text-xs text-cream/64">
        © {new Date().getFullYear()} ÉTAT DAME. Tous droits réservés.
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-cocoa/10 bg-cream/94 p-3 shadow-[0_-18px_44px_-30px_color-mix(in_oklab,var(--cocoa)_60%,transparent)] backdrop-blur-md md:hidden">
      <a
        href="/menu"
        className="inline-flex items-center justify-center gap-2 rounded-none border border-cocoa/14 bg-card py-3.5 text-sm font-semibold text-cocoa"
      >
        <Utensils className="h-4 w-4" /> Menu
      </a>
      <a
        href={`tel:${PHONE}`}
        className="inline-flex items-center justify-center gap-2 rounded-none bg-cocoa py-3.5 text-sm font-semibold text-cream shadow-warm"
      >
        <Phone className="h-4 w-4" /> Appeler
      </a>
    </div>
  );
}
