import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
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
  bases,
  euro,
  gourmandises,
  hours,
  images,
  smsHref,
} from "@/lib/etat-dame";
import { submitReservation } from "@/lib/api/reservations.functions";

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

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "in";
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function HomePage() {
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
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
        <Reservation />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-md border border-cocoa/10 bg-cream/88 px-3 py-2 shadow-paper backdrop-blur-md sm:px-5">
        <a
          href="/"
          className="flex items-center gap-3 pr-2 text-cocoa transition-opacity hover:opacity-80"
          aria-label="ÉTAT DAME, accueil"
        >
          <span className="grid h-10 w-10 place-items-center rounded-sm border border-cocoa/25 bg-card font-serif text-2xl leading-none">
            d
          </span>
          <span className="hidden font-serif text-xl tracking-[0.16em] sm:block">ÉTAT DAME</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-cocoa/86 md:flex">
          <a href="/menu" className="transition-colors hover:text-cocoa">
            Menu
          </a>
          <a href="#restaurant" className="transition-colors hover:text-cocoa">
            Le lieu
          </a>
          <a href="#reservation" className="transition-colors hover:text-cocoa">
            Réserver
          </a>
          <a href="#infos" className="transition-colors hover:text-cocoa">
            Infos
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 w-10 place-items-center rounded-sm border border-cocoa/15 text-cocoa transition-colors hover:bg-cocoa hover:text-cream sm:grid"
            aria-label="Instagram ÉTAT DAME"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.7} />
          </a>
          <a
            href="#reservation"
            className="group inline-flex items-center gap-2 rounded-sm bg-cocoa py-2 pl-4 pr-2 text-sm font-semibold text-cream transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Réserver
            <span className="grid h-7 w-7 place-items-center rounded-sm bg-cream/12 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
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
      <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-[radial-gradient(circle_at_70%_10%,color-mix(in_oklab,var(--terracotta)_18%,transparent),transparent_55%)]" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-cocoa/15 bg-card/65 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cocoa/90">
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
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cocoa py-4 pl-7 pr-3 text-sm font-semibold text-cream shadow-warm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 active:scale-[0.98]"
            >
              Voir le menu
              <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/12 transition-transform group-hover:translate-x-1">
                <Utensils className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#reservation"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cocoa/18 bg-card/70 px-7 py-4 text-sm font-semibold text-cocoa transition-colors hover:bg-cocoa/6"
            >
              Réserver une table
              <Calendar className="h-4 w-4" strokeWidth={1.7} />
            </a>
          </div>
        </div>

        <div className="relative lg:pb-4">
          <div className="absolute -right-8 top-10 hidden w-32 rotate-6 rounded-full bg-cocoa px-5 py-7 text-center text-cream shadow-warm lg:block">
            <p className="section-kicker leading-none">fait</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em]">maison</p>
          </div>
          <figure className="overflow-hidden rounded-[2rem] border border-cocoa/12 bg-card p-2 shadow-paper">
            <img
              src={images.hero}
              alt="Table de brunch avec pancakes, café latte et avocado toast"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover sm:aspect-[16/11]"
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
        <div className="relative">
          <img
            src={images.interior}
            alt="Salle ÉTAT DAME avec murs terracotta, tables en marbre et plantes"
            className="aspect-[16/11] w-full rounded-[2rem] object-cover shadow-paper"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute -bottom-6 left-6 max-w-xs rounded-[1.5rem] border border-cocoa/12 bg-card p-5 shadow-paper">
            <p className="font-serif text-3xl text-cocoa">Nîmes</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Une adresse douce, lumineuse, pensée pour bruncher sans courir.
            </p>
          </div>
        </div>
        <div className="pt-8 lg:pt-0">
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
        </div>
      </div>
    </section>
  );
}

function MenuPreview() {
  return (
    <section id="menu-preview" className="paper-grain px-5 py-18 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
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
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-cocoa py-4 pl-7 pr-3 text-sm font-semibold text-cream shadow-warm transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Découvrir toute la carte
              <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/12">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <article className="overflow-hidden rounded-[2rem] bg-cocoa text-cream shadow-warm">
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
            </article>

            <div className="rounded-[2rem] border border-cocoa/12 bg-card p-6 shadow-paper">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "11:30",
    guests: "2",
    note: "",
    website: "",
  });
  const [reservationStatus, setReservationStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [reservationReference, setReservationReference] = useState("");
  const [reservationError, setReservationError] = useState("");
  const today = new Date().toISOString().slice(0, 10);

  const message = [
    "Bonjour ÉTAT DAME,",
    "",
    "Je souhaite réserver une table.",
    `Nom: ${form.name || "à compléter"}`,
    `Téléphone: ${form.phone || "à compléter"}`,
    `Date: ${form.date || "à compléter"}`,
    `Horaire: ${form.time}`,
    `Nombre de personnes: ${form.guests}`,
    form.note ? `Message: ${form.note}` : "",
    "",
    "Merci.",
  ]
    .filter(Boolean)
    .join("\n");

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReservationStatus("submitting");
    setReservationError("");

    try {
      const result = await submitReservation({
        data: {
          ...form,
          source: "home-reservation",
        },
      });

      setReservationReference(result.reference);
      setReservationStatus("success");
    } catch (error) {
      setReservationStatus("error");
      setReservationError(
        error instanceof Error
          ? error.message
          : "La demande n'a pas pu être envoyée. Réessayez ou appelez directement.",
      );
    }
  }

  return (
    <section
      id="reservation"
      className="relative isolate overflow-hidden bg-cocoa px-5 py-20 text-cream sm:px-8 sm:py-28"
    >
      <img
        src={images.cocktail}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.22]"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-cocoa/88" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-kicker text-cream/92">Demande de réservation</p>
          <h2 className="heading-readable mt-3 text-5xl sm:text-7xl">
            Choisis ton moment, on confirme la place.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-cream/84">
            Le formulaire transmet les bonnes informations à l'équipe. Une réponse confirme ensuite
            la disponibilité de la table.
          </p>

          <div className="mt-8 grid gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-between rounded-2xl border border-cream/14 bg-cream/8 px-5 py-4 text-cream transition-colors hover:bg-cream/14"
            >
              <span className="flex items-center gap-3">
                <Phone className="h-5 w-5" strokeWidth={1.6} />
                Appeler
              </span>
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between rounded-2xl border border-cream/14 bg-cream/8 px-5 py-4 text-cream transition-colors hover:bg-cream/14"
            >
              <span className="flex items-center gap-3">
                <Instagram className="h-5 w-5" strokeWidth={1.6} />
                Instagram
              </span>
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-cream/14 bg-cream p-3 text-cocoa shadow-warm"
        >
          <div className="rounded-[1.55rem] bg-card p-5 sm:p-7">
            <input
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
              className="hidden"
              aria-hidden="true"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nom">
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="field-input"
                  placeholder="Votre nom"
                />
              </Field>
              <Field label="Téléphone">
                <input
                  required
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="field-input"
                  placeholder="06 ..."
                  inputMode="tel"
                />
              </Field>
              <Field label="Date">
                <input
                  required
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(event) => updateField("date", event.target.value)}
                  className="field-input"
                />
              </Field>
              <Field label="Horaire">
                <select
                  value={form.time}
                  onChange={(event) => updateField("time", event.target.value)}
                  className="field-input"
                >
                  {[
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "20:30",
                  ].map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </Field>
              <Field label="Personnes">
                <select
                  value={form.guests}
                  onChange={(event) => updateField("guests", event.target.value)}
                  className="field-input"
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8+"].map((guest) => (
                    <option key={guest}>{guest}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message">
                <input
                  value={form.note}
                  onChange={(event) => updateField("note", event.target.value)}
                  className="field-input"
                  placeholder="Brunch, occasion, allergie..."
                />
              </Field>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-cocoa/58">
              Les informations envoyées servent uniquement à traiter la réservation. Elles ne sont
              pas utilisées pour de la prospection.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={reservationStatus === "submitting"}
                className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-cocoa py-4 pl-7 pr-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {reservationStatus === "submitting" ? "Envoi en cours..." : "Envoyer une demande"}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/12 transition-transform group-hover:translate-x-1">
                  <Mail className="h-4 w-4" />
                </span>
              </button>
              <a
                href={smsHref(message)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/14 px-6 py-4 text-sm font-semibold text-cocoa hover:bg-cocoa/6"
              >
                Envoyer par SMS <Send className="h-4 w-4" />
              </a>
            </div>

            {reservationStatus === "success" && (
              <p
                className="mt-4 rounded-2xl bg-olive/10 px-4 py-3 text-sm leading-relaxed text-cocoa"
                role="status"
              >
                Demande reçue. Référence: <span className="font-bold">{reservationReference}</span>.
                L'équipe vous répond pour confirmer la disponibilité.
              </p>
            )}

            {reservationStatus === "error" && (
              <p
                className="mt-4 rounded-2xl bg-destructive/10 px-4 py-3 text-sm leading-relaxed text-cocoa"
                role="alert"
              >
                {reservationError}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-cocoa/72">{label}</span>
      {children}
    </label>
  );
}

function Visit() {
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <section id="infos" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
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
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-cocoa/12 bg-card p-5 shadow-paper sm:p-7">
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
                    className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm ${
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
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-cocoa/12 bg-card shadow-paper">
            <iframe
              title="ÉTAT DAME à Nîmes"
              src="https://www.google.com/maps?q=12+Rue+Littr%C3%A9+30000+N%C3%AEmes&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
        className="flex items-center gap-4 rounded-2xl border border-cocoa/10 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-cocoa/24 hover:shadow-soft"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-cocoa/10 bg-card p-4">
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
        className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/14 bg-card py-3.5 text-sm font-semibold text-cocoa"
      >
        <Utensils className="h-4 w-4" /> Menu
      </a>
      <a
        href="#reservation"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-cocoa py-3.5 text-sm font-semibold text-cream shadow-warm"
      >
        <Calendar className="h-4 w-4" /> Réserver
      </a>
    </div>
  );
}
