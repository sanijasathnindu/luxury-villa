"use client";

import Image from "next/image";
import { ArrowRight, BedDouble, Ruler, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";
import { rooms } from "@/lib/site-data";

export function RoomCarousel() {
  return (
    <Swiper
      modules={[Autoplay, EffectCreative, Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={18}
      loop
      autoplay={{ delay: 5200, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      effect="creative"
      creativeEffect={{
        prev: { translate: ["-8%", 0, -120], opacity: 0.45 },
        next: { translate: ["8%", 0, -120], opacity: 0.45 },
      }}
      className="villa-room-swiper"
    >
      {rooms.map((room) => (
        <SwiperSlide key={room.name}>
          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="grid overflow-hidden rounded-[8px] border border-[#d9b76f]/16 bg-[#18150f] shadow-[0_30px_100px_rgba(0,0,0,0.26)] lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="relative min-h-[360px] lg:min-h-[560px]">
              <Image
                src={room.image}
                alt={`${room.name} at Villa Aurelia`}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>

            <div className="flex min-h-[460px] flex-col justify-between p-6 sm:p-8 lg:p-12">
              <div>
                <p className="text-sm font-medium uppercase text-[#d9b76f]">{room.eyebrow}</p>
                <h3 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl">
                  {room.name}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#efe7d8]/72">{room.description}</p>
              </div>

              <div className="mt-10">
                <div className="grid gap-3 sm:grid-cols-2">
                  {room.details.map((detail, index) => {
                    const icons = [Ruler, BedDouble, Sparkles, ArrowRight];
                    const Icon = icons[index] ?? Sparkles;

                    return (
                      <div
                        key={detail}
                        className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.055] p-4 text-sm text-white/78"
                      >
                        <Icon className="h-4 w-4 text-[#d9b76f]" />
                        {detail}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-white/50">From</p>
                    <p className="text-3xl font-semibold text-white">
                      {room.price}
                      <span className="text-base font-normal text-white/52"> / night</span>
                    </p>
                  </div>
                  <Button asChild>
                    <a href="#booking">
                      Reserve suite
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
