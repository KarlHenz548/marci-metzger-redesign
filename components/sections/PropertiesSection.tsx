"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
const propertyPhotos = [
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:984,h:655",
    title: "Roseworthy Property",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25/rs=w:984,h:655",
    title: "Ailanto Property",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG/:/rs=w:984,h:655",
    title: "Ailanto Property",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:984,h:655",
    title: "Ailanto Property",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:984,h:655",
    title: "East Beacon Ridge Property",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:984,h:656",
    title: "East Beacon Ridge Property",
  },
];

const propertyCategories = [
  {
    number: "01",
    title: "Find a Home",
    description:
      "Explore property photos and imagine the possibilities for your next home.",
    imageIndex: 0,
  },
  {
    number: "02",
    title: "Explore Properties",
    description:
      "Take a closer look at properties featured in Marci's photo gallery.",
    imageIndex: 1,
  },
  {
    number: "03",
    title: "Browse the Gallery",
    description:
      "Browse more property photos and discover the details of each home.",
    imageIndex: 4,
  },
];

export default function PropertiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function showPrevious() {
    setActiveIndex((current) =>
      current === null
        ? 0
        : (current - 1 + propertyPhotos.length) % propertyPhotos.length,
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % propertyPhotos.length,
    );
  }

  function closeGallery() {
    setActiveIndex(null);
  }

  return (
    <section id="properties" className="bg-[#efe7dc]">
      <div className="mx-auto max-w-360 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Section heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-9 bg-accent" />
              Your next chapter
            </p>

            <h2 className="mt-4 max-w-2xl font-(family-name:--font-playfair) text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Find your dream home.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Explore property photos and get inspired for your next move in
              Pahrump, Nevada.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start border-b border-accent pb-2 text-sm font-semibold text-foreground transition-colors hover:text-accent md:self-auto"
          >
            View Photo Gallery
          </button>
        </div>

        {/* Property photo cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {propertyCategories.map((category) => {
            const photo = propertyPhotos[category.imageIndex];

            return (
              <button
                type="button"
                key={category.number}
                onClick={() => setActiveIndex(category.imageIndex)}
                className="group block w-full bg-white text-left"
              >
                <div className="relative aspect-5/4 overflow-hidden bg-[#e1d4c5]">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-background px-3 py-2 text-[10px] font-semibold tracking-[0.15em] text-foreground">
                    {category.number}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-(family-name:--font-playfair) text-2xl text-foreground">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    View photos
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom call to action */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#d9cabb] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted">
            Want a closer look? Open the gallery to browse the property
            photographs.
          </p>
        </div>
      </div>

      {/* Photo gallery modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#211a16]/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Property photo gallery"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Property gallery
                </p>
                <h3 className="mt-1 font-(family-name:--font-playfair) text-xl sm:text-2xl">
                  {propertyPhotos[activeIndex].title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close photo gallery"
                className="flex size-11 shrink-0 items-center justify-center border border-white/30 transition-colors hover:bg-white/10"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            {/* Main image */}
            <div className="relative h-[60svh] w-full overflow-hidden bg-[#211a16] sm:h-[70svh]">
              <Image
                key={propertyPhotos[activeIndex].src}
                src={propertyPhotos[activeIndex].src}
                alt={propertyPhotos[activeIndex].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 90vw"
                className="object-cover"
              />

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center bg-black/50 text-white transition-colors hover:bg-accent sm:left-5"
              >
                <ChevronLeft size={25} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center bg-black/50 text-white transition-colors hover:bg-accent sm:right-5"
              >
                <ChevronRight size={25} aria-hidden="true" />
              </button>
            </div>

            {/* Counter and thumbnails */}
            <div className="mt-4 flex items-center justify-between text-xs text-white/70">
              <span>
                Photo {activeIndex + 1} of {propertyPhotos.length}
              </span>
              <span>Use the arrows to browse</span>
            </div>

            <div className="mt-4 grid grid-cols-6 gap-2">
              {propertyPhotos.map((photo, index) => (
                <button
                  type="button"
                  key={photo.src}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View photo ${index + 1}`}
                  aria-pressed={activeIndex === index}
                  className={`relative aspect-4/3 overflow-hidden border-2 ${
                    activeIndex === index
                      ? "border-white"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
