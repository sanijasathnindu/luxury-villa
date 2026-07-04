"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigation, villa } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-500",
          scrolled
            ? "border-white/12 bg-[#0f0e0c]/78 shadow-[0_16px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
            : "border-white/8 bg-white/[0.035] backdrop-blur-md",
        )}
      >
        <a href="#top" className="group flex items-center gap-3" aria-label="Villa Aurelia home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d9b76f]/40 bg-[#d9b76f]/12 text-sm font-semibold text-[#f4d58b]">
            VA
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-semibold text-white">{villa.name}</span>
            <span className="mt-1 text-xs text-white/55">{villa.location}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/68 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href={`tel:${villa.phone.replaceAll(" ", "")}`}>Call concierge</a>
          </Button>
          <Button asChild size="sm">
            <a href="#booking">
              <CalendarDays className="h-4 w-4" />
              Reserve stay
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/14 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="mx-auto mt-3 max-w-7xl rounded-[8px] border border-white/12 bg-[#0f0e0c]/94 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-[8px] px-4 py-3 text-sm font-medium text-white/74 transition hover:bg-white/8 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#booking"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#d9b76f] px-4 py-3 text-sm font-semibold text-[#15120d]"
                onClick={() => setOpen(false)}
              >
                <CalendarDays className="h-4 w-4" />
                Reserve stay
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
