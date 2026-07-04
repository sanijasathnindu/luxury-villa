"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryImages } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function GalleryLightbox() {
  const [selected, setSelected] = useState<(typeof galleryImages)[number] | null>(null);

  return (
    <>
      <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px] lg:auto-rows-[260px]">
        {galleryImages.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.72, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelected(image)}
            className={cn(
              "group relative isolate overflow-hidden rounded-[8px] border border-white/10 bg-white/5 text-left shadow-[0_22px_70px_rgba(0,0,0,0.22)]",
              image.span,
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent opacity-90" />
            <span className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
              <span className="text-base font-medium text-white">{image.label}</span>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition group-hover:border-[#d9b76f]/60 group-hover:text-[#f4d58b]">
                <Maximize2 className="h-4 w-4" />
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] max-w-6xl overflow-hidden p-0">
          <DialogTitle className="sr-only">{selected?.label ?? "Villa gallery image"}</DialogTitle>
          {selected ? (
            <div className="relative aspect-[16/10] min-h-[360px] w-full overflow-hidden rounded-[8px] bg-black">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 to-transparent p-6">
                <p className="text-xl font-medium text-white">{selected.label}</p>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
