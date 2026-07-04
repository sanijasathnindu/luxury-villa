"use client";

import Image from "next/image";
import {
  ArrowRight,
  Baby,
  Bath,
  BedDouble,
  CalendarDays,
  Car,
  ChefHat,
  Dumbbell,
  Flower2,
  HouseWifi,
  MapPin,
  Music2,
  Phone,
  PlaneLanding,
  Sailboat,
  ShieldCheck,
  Sparkles,
  Star,
  Telescope,
  Utensils,
  Waves,
  Wifi,
  Wine,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { GalleryLightbox } from "@/components/site/gallery-lightbox";
import { Navigation } from "@/components/site/navigation";
import { RoomCarousel } from "@/components/site/room-carousel";
import { Reveal, staggerContainer, staggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  amenities,
  attractionGroups,
  experienceBlocks,
  features,
  heroStats,
  imageLibrary,
  testimonials,
  villa,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

const featureIcons = {
  Waves,
  Telescope,
  ChefHat,
  PlaneLanding,
  HouseWifi,
  BedDouble,
};

const amenityIcons = {
  Sparkles,
  Car,
  Utensils,
  Wine,
  Wifi,
  ShieldCheck,
  Dumbbell,
  Baby,
  Music2,
  Bath,
  Sailboat,
  Flower2,
};

export function LuxuryVillaPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 760], [0, 160]);
  const heroScale = useTransform(scrollY, [0, 760], [1.04, 1.16]);
  const heroOpacity = useTransform(scrollY, [0, 650], [1, 0.42]);

  return (
    <motion.main
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen overflow-hidden bg-[#0f0e0c] text-[#f8f2e8]"
    >
      <Navigation />

      <section className="relative isolate min-h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}>
          <Image
            src={imageLibrary.hero}
            alt="Villa Aurelia luxury tropical villa with private pool"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,7,0.86),rgba(10,9,7,0.48)_45%,rgba(10,9,7,0.20)),linear-gradient(0deg,rgba(15,14,12,1)_0%,rgba(15,14,12,0)_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0f0e0c] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-8 pt-32 sm:px-6 lg:px-8 lg:pb-12">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_420px]">
            <div className="max-w-5xl">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/76 backdrop-blur-xl"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#d9b76f]" />
                Private cliffside residence on the Uluwatu coast
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7 max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[0] text-white sm:text-7xl lg:text-8xl"
              >
                A private villa where ocean, architecture, and service move as one.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-7 max-w-2xl text-lg leading-8 text-[#efe7d8]/76 sm:text-xl"
              >
                Six suites, a cinematic infinity pool, chef-led dining, and a discreet team dedicated to the rare luxury of an unhurried day.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.46 }}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <Button asChild size="lg">
                  <a href="#booking">
                    <CalendarDays className="h-5 w-5" />
                    Plan your stay
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#gallery">
                    View residence
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-3 rounded-[8px] border border-white/12 bg-[#0f0e0c]/52 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:grid-cols-3 lg:grid-cols-1"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[8px] border border-white/10 bg-white/[0.055] p-5">
                  <p className="text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/56">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative isolate py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,183,111,0.16),transparent_36%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase text-[#d9b76f]">Villa experience</p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">
                Designed for privacy, theatre, and effortless resort living.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#efe7d8]/68 lg:justify-self-end">
              Villa Aurelia is arranged as a private coastal compound: quiet suites, open-air dining, a wellness wing, and gathering spaces that make every hour feel intentionally composed.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {experienceBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.08} className={cn(index === 1 && "lg:mt-16", index === 2 && "lg:mt-8")}>
                <article className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] shadow-[0_26px_80px_rgba(0,0,0,0.22)]">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={block.image}
                      alt={`${block.title} at Villa Aurelia`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/64 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#d9b76f]">0{index + 1}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{block.title}</h3>
                    <p className="mt-4 leading-7 text-[#efe7d8]/62">{block.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#f8f2e8] py-24 text-[#15120d] sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-[#9d7a32]">Signature features</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] sm:text-6xl">
              Every detail is tuned for a residence that lives like a private resort.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {features.map((feature) => {
              const Icon = featureIcons[feature.icon as keyof typeof featureIcons];

              return (
                <motion.article
                  variants={staggerItem}
                  key={feature.title}
                  className="group rounded-[8px] border border-[#15120d]/10 bg-white p-6 shadow-[0_18px_55px_rgba(21,18,13,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#d9b76f]/50 hover:shadow-[0_26px_70px_rgba(21,18,13,0.13)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#15120d] text-[#f4d58b] transition group-hover:bg-[#d9b76f] group-hover:text-[#15120d]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold">{feature.title}</h3>
                  <p className="mt-4 leading-7 text-[#4c4539]">{feature.copy}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase text-[#d9b76f]">Interactive gallery</p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">
                Architecture, water, and light composed frame by frame.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#efe7d8]/62">
              A visual tour through the villa&apos;s pool deck, suites, dining spaces, terraces, and coastline.
            </p>
          </Reveal>
          <div className="mt-14">
            <GalleryLightbox />
          </div>
        </div>
      </section>

      <section id="amenities" className="relative bg-[#15120d] py-24 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(217,183,111,0.08),transparent_42%,rgba(96,129,119,0.10))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase text-[#d9b76f]">Amenities</p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">
                The ease of a private club, held inside one residence.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#efe7d8]/66">
              Concierge planning, wellness, family care, security, dining, and transport are built into the villa&apos;s operating rhythm.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          >
            {amenities.map((amenity) => {
              const Icon = amenityIcons[amenity.icon as keyof typeof amenityIcons];

              return (
                <motion.div
                  key={amenity.label}
                  variants={staggerItem}
                  className="group flex min-h-36 flex-col justify-between rounded-[8px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d9b76f]/50 hover:bg-white/[0.08]"
                >
                  <Icon className="h-6 w-6 text-[#d9b76f]" />
                  <p className="text-base font-medium text-white">{amenity.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="suites" className="bg-[#f8f2e8] py-24 text-[#15120d] sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-[#9d7a32]">Accommodation</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] sm:text-6xl">
              Choose a suite, then let the villa team shape the rest.
            </h2>
          </Reveal>
          <div className="mt-14">
            <RoomCarousel />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-medium uppercase text-[#d9b76f]">Guest notes</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">
              Quiet precision, remembered long after checkout.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.guest} delay={index * 0.08}>
                <Card className="h-full transition duration-300 hover:-translate-y-1 hover:border-[#d9b76f]/45 hover:bg-white/[0.075]">
                  <CardHeader>
                    <div className="flex gap-1 text-[#d9b76f]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-8 text-white/78">{testimonial.quote}</p>
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <CardTitle>{testimonial.guest}</CardTitle>
                      <p className="mt-2 text-sm text-white/48">{testimonial.context}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="bg-[#15120d] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase text-[#d9b76f]">Location</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">
              Set above Bali&apos;s most cinematic coastline.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#efe7d8]/66">
              The villa is positioned for privacy first, with fast access to beaches, temple sunsets, wellness circuits, seafood markets, and charter departures.
            </p>

            <Tabs defaultValue="coast" className="mt-10">
              <TabsList>
                {attractionGroups.map((group) => (
                  <TabsTrigger key={group.value} value={group.value}>
                    {group.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {attractionGroups.map((group) => (
                <TabsContent key={group.value} value={group.value}>
                  <div className="grid gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item.place}
                        className="rounded-[8px] border border-white/10 bg-white/[0.055] p-5 transition hover:border-[#d9b76f]/45"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-lg font-semibold text-white">{item.place}</h3>
                          <span className="rounded-full bg-[#d9b76f]/14 px-3 py-1 text-sm text-[#f4d58b]">
                            {item.time}
                          </span>
                        </div>
                        <p className="mt-3 leading-7 text-white/58">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative min-h-[620px] overflow-hidden rounded-[8px] border border-white/10 bg-[#0f0e0c] shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
              <Image
                src={imageLibrary.ocean}
                alt="Ocean coastline near Villa Aurelia"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-56"
              />
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(15,14,12,0.82),rgba(15,14,12,0.34)),radial-gradient(circle_at_62%_42%,rgba(217,183,111,0.24),transparent_32%)]" />
              <div className="absolute inset-8 rounded-[8px] border border-[#d9b76f]/18" />
              <div className="absolute left-[16%] top-[18%] h-px w-[62%] rotate-12 bg-white/18" />
              <div className="absolute bottom-[22%] left-[22%] h-px w-[58%] -rotate-[18deg] bg-white/14" />

              {[
                ["Villa Aurelia", "52%", "46%", true],
                ["Nyang Nyang", "31%", "28%", false],
                ["Temple", "65%", "22%", false],
                ["Yacht marina", "72%", "72%", false],
              ].map(([label, left, top, active]) => (
                <div key={label.toString()} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: left.toString(), top: top.toString() }}>
                  <div
                    className={cn(
                      "relative grid h-12 w-12 place-items-center rounded-full border backdrop-blur-xl",
                      active
                        ? "border-[#d9b76f] bg-[#d9b76f] text-[#15120d] shadow-[0_0_0_12px_rgba(217,183,111,0.16)]"
                        : "border-white/20 bg-white/10 text-white",
                    )}
                  >
                    <MapPin className="h-5 w-5" />
                    <span className="absolute left-1/2 top-full mt-3 min-w-max -translate-x-1/2 rounded-full border border-white/12 bg-[#0f0e0c]/76 px-3 py-1 text-xs text-white/78 backdrop-blur-md">
                      {label}
                    </span>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-6 left-6 right-6 rounded-[8px] border border-white/12 bg-[#0f0e0c]/70 p-5 backdrop-blur-2xl">
                <p className="text-sm text-white/52">Coordinates</p>
                <p className="mt-1 text-2xl font-semibold text-white">{villa.coordinates}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="booking" className="relative isolate overflow-hidden py-24 sm:py-32">
        <Image
          src={imageLibrary.villaNight}
          alt="Villa Aurelia evening architecture"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,9,7,0.88),rgba(10,9,7,0.58),rgba(10,9,7,0.32)),linear-gradient(0deg,rgba(15,14,12,1),rgba(15,14,12,0.14)_42%,rgba(15,14,12,1))]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <p className="text-sm font-medium uppercase text-[#d9b76f]">Private bookings</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.98] text-white sm:text-7xl">
              Your residence is ready when the coastline goes quiet.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#efe7d8]/72">
              Share preferred dates and guest count. The reservations team will return with availability, tailored inclusions, and a private itinerary within one business day.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href={`mailto:${villa.email}?subject=Villa Aurelia reservation request`}>
                  <CalendarDays className="h-5 w-5" />
                  Request availability
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${villa.phone.replaceAll(" ", "")}`}>
                  <Phone className="h-5 w-5" />
                  Speak with concierge
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ["Minimum stay", "3 nights", "Flexible on select shoulder dates"],
              ["Nightly rate", "From $8,950", "Full villa exclusive use"],
              ["Guest capacity", "Up to 12", "Six ensuite private suites"],
            ].map(([label, value, note]) => (
              <div key={label} className="rounded-[8px] border border-white/12 bg-white/[0.065] p-6 backdrop-blur-2xl">
                <p className="text-sm text-white/54">{label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
                <p className="mt-3 text-sm leading-6 text-white/58">{note}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0b0a08] py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d9b76f]/40 bg-[#d9b76f]/12 text-sm font-semibold text-[#f4d58b]">
                VA
              </span>
              <div>
                <p className="font-semibold text-white">{villa.name}</p>
                <p className="text-sm text-white/50">{villa.location}</p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-7 text-white/55">
              A private cliffside villa for families, celebrations, retreats, and long quiet stays beside the Indian Ocean.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-white">Explore</p>
              <div className="mt-4 grid gap-3">
                {[
                  ["Experience", "#experience"],
                  ["Features", "#features"],
                  ["Gallery", "#gallery"],
                  ["Suites", "#suites"],
                  ["Location", "#location"],
                ].map(([item, href]) => (
                  <a key={item} href={href} className="text-sm text-white/54 transition hover:text-[#f4d58b]">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">Contact</p>
              <div className="mt-4 grid gap-3 text-sm text-white/54">
                <a className="transition hover:text-[#f4d58b]" href={`mailto:${villa.email}`}>
                  {villa.email}
                </a>
                <a className="transition hover:text-[#f4d58b]" href={`tel:${villa.phone.replaceAll(" ", "")}`}>
                  {villa.phone}
                </a>
                <span>{villa.location}</span>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">Social</p>
              <div className="mt-4 grid gap-3">
                {["Instagram", "Pinterest", "Vimeo"].map((item) => (
                  <a key={item} href="#" className="text-sm text-white/54 transition hover:text-[#f4d58b]">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-4 pt-8 text-sm text-white/40 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Copyright 2026 Villa Aurelia. All rights reserved.</p>
          <p>Private villa residence and concierge experience.</p>
        </div>
      </footer>
    </motion.main>
  );
}
