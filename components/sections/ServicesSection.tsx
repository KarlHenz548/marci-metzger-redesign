import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    image:
      "https://images.unsplash.com/photo-1781229771042-2a859f8f8022?q=80&w=2468&auto=format&fit=crop",
    imageAlt: "Home representing real estate buying and selling services",
  },
  {
    number: "02",
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    image:
      "https://plus.unsplash.com/premium_photo-1733266837111-54e47ff95c7c?q=80&w=2310&auto=format&fit=crop",
    imageAlt:
      "Residential property representing a range of real estate options",
  },
  {
    number: "03",
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    image:
      "https://plus.unsplash.com/premium_photo-1722945652527-d8d7ba9fd0d5?q=80&w=1835&auto=format&fit=crop",
    imageAlt: "Property and landscape representing local real estate expertise",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-360 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-9 bg-accent" />
            How I can help
            <span className="h-px w-9 bg-accent" />
          </p>

          <h2 className="mt-4 font-(family-name:--font-playfair) text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Real estate, made personal.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Whether you are looking for a new place to call home or preparing to
            sell, get guidance throughout your real estate journey.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {services.map((service) => (
            <article
              key={service.number}
              className="group overflow-hidden border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              {/* Service image */}
              <div className="relative h-56 overflow-hidden bg-[#e7d8c7] sm:h-64">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image overlay number */}
                <span className="absolute bottom-4 left-4 bg-white px-4 py-2 font-(family-name:--font-playfair) text-2xl text-accent">
                  {service.number}
                </span>
              </div>

              {/* Service content */}
              <div className="p-6 sm:p-8 lg:p-9">
                <div className="h-px w-full bg-border transition-colors group-hover:bg-accent" />

                <h3 className="mt-6 font-(family-name:--font-playfair) text-2xl text-foreground sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-12 border-t border-border pt-7 text-center">
          <p className="font-(family-name:--font-playfair) text-xl text-foreground sm:text-2xl">
            Your goals. Your timeline. Personal guidance.
          </p>
        </div>
      </div>
    </section>
  );
}
