import { useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Clock3,
  Star,
  UtensilsCrossed,
  Bike,
  ShoppingBag,
  Users,
  Beer,
  Coffee,
  Wine,
} from "lucide-react";

import heroImg from "@/assets/hero-kebab.jpg";
import interiorImg from "@/assets/interior.jpg";
import platterImg from "@/assets/platter.jpg";

interface HomeProps {
  targetSection?: string;
}

const PLACE = {
  name: "AZEM BISTRO",
  category: "Kebab shop",
  priceRange: "€1–10",
  rating: 4.8,
  reviewCount: 1412,
  address: "Rathausstraße 17, 10178 Berlin, Germany",
  phone: "+49 179 4215886",
  phoneHref: "tel:+491794215886",
  mapsUrl:
    "https://www.google.com/maps/place/AZEM+BISTRO/@52.5180502,13.4071489,18z/data=!4m6!3m5!1s0x47a84f8c76af9305:0xaa8dbd5f74c822c8!8m2!3d52.5180502!4d13.4071489!16s%2Fg%2F11kspydhhs",
  geo: { lat: 52.5180502, lng: 13.4071489 },
  hours: [
    { day: "Mon", time: "9:00–4:00" },
    { day: "Tue", time: "9:00–4:00" },
    { day: "Wed", time: "9:00–4:00" },
    { day: "Thu", time: "9:00–4:00" },
    { day: "Fri", time: "9:00–4:00" },
    { day: "Sat", time: "9:00–4:00" },
    { day: "Sun", time: "9:00–4:00" },
  ],
} as const;

const REVIEWS = [
  {
    name: "Xavier C",
    stars: 5,
    time: "2 months ago",
    text:
      "Nice restaurant with space to sit down and eat. Incredible döner — the crispiness of the bread really sets it apart. The staff is very friendly and the food is reasonably priced!",
  },
  {
    name: "Ms_Aaru.S",
    stars: 5,
    time: "3 months ago",
    text:
      "I extremely enjoyed the food here. Though the döner house is common in Germany, this is truly a gem among them.",
  },
  {
    name: "Ania Zaroda",
    stars: 5,
    time: "2 months ago",
    text:
      "Stumbled upon this while restaurants nearby were closing — best kebab I've had in years. Sauces, meat, bread: perfection in every bite!",
  },
] as const;

export default function Home({ targetSection }: HomeProps) {
  // Scroll to target section when URL changes (e.g., /#/services → scroll to #services)
  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [targetSection]);

  // Brainstorm (as required by project workflow) — pick one and commit.
  // 1) Warm modern brutalism (chosen): bold blocks, terracotta accents, grain, oversized serif headings.
  // 2) Night-market neon: deep black, saturated signage reds, animated ticker, photo collage.
  // 3) Bauhaus café minimal: strict geometry, primary colors, rigid grid, museum-like whitespace.

  const mapEmbedUrl = useMemo(() => {
    const q = encodeURIComponent(`${PLACE.name} ${PLACE.address}`);
    return `https://www.google.com/maps?q=${q}&output=embed`;
  }, []);

  function handleComingSoon(label: string) {
    toast.message(`${label}: coming soon`, {
      description: "Replace this link with your official profile URL.",
    });
  }

  return (
    <div className="w-full bg-background text-foreground">
      <Header />

      <main>
        {/* HERO */}
        <section id="home" className="relative overflow-hidden grain">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `linear-gradient(110deg, rgba(20,15,10,.92) 0%, rgba(20,15,10,.65) 45%, rgba(20,15,10,.35) 100%), url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* asym edge */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-background [clip-path:polygon(0_35%,100%_0,100%_100%,0_100%)]" />

          <div className="mx-auto max-w-6xl px-4 pt-26 pb-16 md:px-8">
            <div className="grid items-end gap-10 md:grid-cols-[1.1fr_.9fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
                  <UtensilsCrossed className="h-4 w-4" />
                  <span>{PLACE.category}</span>
                  <span className="opacity-70">•</span>
                  <span>{PLACE.priceRange}</span>
                </div>

                <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
                  {PLACE.name}
                </h1>
                <p className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-white/85 md:text-xl">
                  Late-night Turkish & German bistro classics — crisp bread, bold sauces, and a warm,
                  cozy vibe in Berlin-Mitte.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={PLACE.phoneHref}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call to order
                    </a>
                  </Button>
                  <Button asChild variant="secondary" className="border border-white/10">
                    <a href={PLACE.mapsUrl} target="_blank" rel="noreferrer">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get directions
                    </a>
                  </Button>
                  <div className="ml-1 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-white/90 backdrop-blur">
                    <Star className="h-4 w-4 text-amber-300" />
                    <span className="font-medium">{PLACE.rating}</span>
                    <span className="text-white/70">({PLACE.reviewCount.toLocaleString()} reviews)</span>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  <MiniInfo icon={<MapPin className="h-4 w-4" />} title="Address" value={PLACE.address} />
                  <MiniInfo icon={<Clock3 className="h-4 w-4" />} title="Hours" value="Daily 9:00–4:00" />
                </div>
              </div>

              <Card className="border-white/10 bg-white/7 backdrop-blur supports-[backdrop-filter]:bg-white/10">
                <div className="p-5 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-white/70">Today</div>
                      <div className="mt-0.5 text-xl font-semibold">Open 9:00–4:00</div>
                    </div>
                    <div className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white/80">
                      <span className="font-medium">Berlin</span>
                      <span className="opacity-70"> · Mitte</span>
                    </div>
                  </div>

                  <Separator className="my-4 bg-white/10" />

                  <div className="grid grid-cols-7 gap-2 text-xs">
                    {PLACE.hours.map((h) => (
                      <div
                        key={h.day}
                        className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-center"
                      >
                        <div className="text-white/70">{h.day}</div>
                        <div className="mt-1 text-[11px] font-medium text-white/90">{h.time}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                    <iframe
                      title="AZEM BISTRO map"
                      src={mapEmbedUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-[240px] w-full"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section
          id="about"
          kicker="About"
          title="A warm spot for a quick bite — or a long night"
          subtitle="From Google Maps: cozy & trendy atmosphere, great beer selection, and vegetarian options — popular for lunch and dinner."
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                AZEM BISTRO sits in the heart of Berlin (Rathausstraße) serving the kind of food you
                crave: hearty, fast, and full of flavor. Expect Turkish-style döner favorites alongside
                classic German comfort plates.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge variant="secondary">Casual</Badge>
                <Badge variant="secondary">Cozy</Badge>
                <Badge variant="secondary">Trendy</Badge>
                <Badge variant="secondary">Good for groups</Badge>
                <Badge variant="secondary">LGBTQ+ friendly</Badge>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Feature icon={<ShoppingBag className="h-4 w-4" />} title="Takeaway" desc="Takeout + curbside pickup." />
                <Feature icon={<Users className="h-4 w-4" />} title="Reservations" desc="Accepts reservations (Google Maps)." />
                <Feature icon={<Beer className="h-4 w-4" />} title="Drinks" desc="Beer, wine, coffee." />
                <Feature icon={<Bike className="h-4 w-4" />} title="Late-night" desc="Open until 4:00." />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-primary/15 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_80px_-40px_rgba(0,0,0,.45)]">
                <img
                  src={interiorImg}
                  alt="Warm bistro interior"
                  className="h-[360px] w-full object-cover md:h-[420px]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-xs text-muted-foreground">
                *Photography used for atmosphere illustration.
              </div>
            </div>
          </div>
        </Section>

        {/* MENU */}
        <Section
          id="menu"
          kicker="Menu highlights"
          title="Big flavor, quick service"
          subtitle="Based on Google Maps “Menu & highlights” and commonly mentioned items in reviews."
        >
          <div className="grid gap-8 md:grid-cols-[.95fr_1.05fr] md:items-start">
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card">
              <img
                src={platterImg}
                alt="Kebab platter and sides"
                className="h-[280px] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <div className="text-sm text-muted-foreground">Drinks (from Google Maps)</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <Beer className="mr-1 h-3.5 w-3.5" /> Beer
                  </Badge>
                  <Badge variant="secondary">
                    <Coffee className="mr-1 h-3.5 w-3.5" /> Coffee
                  </Badge>
                  <Badge variant="secondary">
                    <Wine className="mr-1 h-3.5 w-3.5" /> Wine
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">Döner Plate with French Fries</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A popular Google Maps highlight — perfect for late-night cravings.
                    </p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                </div>
              </Card>

              <Card className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">Currywurst mit Pommes</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A Berlin classic — featured in Google Maps highlights.
                    </p>
                  </div>
                  <Badge variant="secondary">Classic</Badge>
                </div>
              </Card>

              <Card className="p-5">
                <div className="text-lg font-semibold">Crispy-bread Döner</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Reviewers call out the crisp bread and friendly staff — ask for your favorite sauce
                  combo.
                </p>
              </Card>

              <Card className="p-5">
                <div className="text-lg font-semibold">Daily specials</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Specials vary — check in-store or call for today’s picks.
                </p>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary">
                  <a href={PLACE.phoneHref}>
                    <Phone className="mr-2 h-4 w-4" /> Ask what’s good today
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border">
                  <a href={PLACE.mapsUrl} target="_blank" rel="noreferrer">
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* SERVICES */}
        <Section
          id="services"
          kicker="Services"
          title="Made for Berlin pace"
          subtitle="From Google Maps service options and planning details."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <ServiceCard
              icon={<UtensilsCrossed className="h-4 w-4" />}
              title="Dine-in"
              desc="Casual seating, counter service, table service available."
            />
            <ServiceCard
              icon={<ShoppingBag className="h-4 w-4" />}
              title="Takeaway + curbside pickup"
              desc="Grab-and-go for quick lunches and late-night bites."
            />
            <ServiceCard
              icon={<Bike className="h-4 w-4" />}
              title="Delivery"
              desc="Delivery is listed on Google Maps (availability may vary by time/platform)."
            />
            <ServiceCard
              icon={<Users className="h-4 w-4" />}
              title="Catering & group bookings"
              desc="Catering is listed on Google Maps — call ahead for groups and events."
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={PLACE.phoneHref}>Book / reserve by phone</a>
            </Button>
            <Button
              variant="outline"
              className="border-border"
              onClick={() => handleComingSoon("Instagram")}
            >
              Instagram
            </Button>
            <Button
              variant="outline"
              className="border-border"
              onClick={() => handleComingSoon("TikTok")}
            >
              TikTok
            </Button>
          </div>
        </Section>

        {/* REVIEWS */}
        <Section
          id="reviews"
          kicker="Reviews"
          title="Loved for the bread, sauces, and vibe"
          subtitle="Selected 5-star snippets from Google Maps reviews."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <Card key={r.name + r.time} className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium">{r.name}</div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{r.time}</div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">“{r.text}”</p>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5">
            <div>
              <div className="text-sm text-muted-foreground">Google rating</div>
              <div className="mt-1 flex items-center gap-2">
                <div className="text-2xl font-semibold">{PLACE.rating}</div>
                <div className="text-sm text-muted-foreground">
                  {PLACE.reviewCount.toLocaleString()} reviews
                </div>
              </div>
            </div>
            <Button asChild variant="secondary">
              <a href={PLACE.mapsUrl} target="_blank" rel="noreferrer">
                Read more on Google Maps
              </a>
            </Button>
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          kicker="Contact & book"
          title="Find us fast. Order even faster."
          subtitle="Call for reservations, catering, or takeaway orders."
        >
          <div className="grid gap-6 md:grid-cols-[.95fr_1.05fr] md:items-start">
            <Card className="p-6">
              <div className="grid gap-5">
                <div>
                  <div className="text-sm text-muted-foreground">Address</div>
                  <div className="mt-1 font-medium">{PLACE.address}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a className="mt-1 inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline" href={PLACE.phoneHref}>
                    <Phone className="h-4 w-4" /> {PLACE.phone}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Hours</div>
                  <div className="mt-1 font-medium">Daily 9:00–4:00</div>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={PLACE.phoneHref}>Book by phone</a>
                  </Button>
                  <Button asChild variant="secondary">
                    <a href={PLACE.mapsUrl} target="_blank" rel="noreferrer">
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border"
                    onClick={() => {
                      navigator.clipboard
                        .writeText(PLACE.address)
                        .then(() => toast.success("Address copied"))
                        .catch(() => toast.error("Couldn’t copy"));
                    }}
                  >
                    Copy address
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground">
                  Need a website link or email? Add it via Google Business Profile, then update this page.
                </div>
              </div>
            </Card>

            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card">
              <iframe
                title="AZEM BISTRO map"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full"
              />
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-lg font-semibold">{PLACE.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{PLACE.address}</div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="outline" className="border-border">
                <a href={PLACE.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" /> Call
                </a>
              </Button>
              <Button asChild variant="outline" className="border-border">
                <a href={PLACE.mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin className="mr-2 h-4 w-4" /> Google Maps
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-border"
                onClick={() => handleComingSoon("Instagram")}
              >
                Instagram
              </Button>
            </div>
          </div>

          <Separator className="my-7" />

          <div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} {PLACE.name}. Alle Rechte vorbehalten.</div>
            <div>
              Technischer Support:{" "}
              <a className="underline-offset-4 hover:underline" href="mailto:claritleonelmnicol@gmail.com">
                claritleonelmnicol@gmail.com
              </a>
            </div>
            <div>Google-Bewertung und Öffnungszeiten stammen aus dem AZEM BISTRO Google-Maps-Eintrag.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-baseline gap-3">
          <div className="text-lg font-semibold tracking-tight">AZEM BISTRO</div>
          <span className="hidden text-sm text-muted-foreground md:inline">
            Rathausstraße · Berlin
          </span>
        </div>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          <NavLink href="/home" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/menu" label="Menu" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/reviews" label="Reviews" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={PLACE.phoneHref}>Call</a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-border md:hidden"
            onClick={() => toast.message("Menu", { description: "Scroll — or use the sections below." })}
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}

function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-22">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {kicker}
        </div>
        <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-balance text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      </div>

      {children}
    </section>
  );
}

function MiniInfo({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white backdrop-blur">
      <div className="mt-0.5 text-white/85">{icon}</div>
      <div>
        <div className="text-xs text-white/60">{title}</div>
        <div className="text-sm font-medium text-white/90">{value}</div>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-primary/10 p-2 text-primary">{icon}</div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
        </div>
      </div>
    </Card>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-accent/25 p-2 text-foreground">{icon}</div>
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
        </div>
      </div>
    </Card>
  );
}
