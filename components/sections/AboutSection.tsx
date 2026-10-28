import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const marciImage = "/images/about-marci.jpg";

const values = [
  "Personalized guidance for your real estate journey",
  "Local insight into the Pahrump community",
  "Support through the buying or selling process",
];

export default function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-background">
      <div className="mx-auto grid max-w-360 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24">
        {/* Left: Portrait */}
        <div className="relative mx-auto w-full max-w-lg pb-5 pr-5">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-5 right-0 top-5 border border-accent/50"
          />

          <div className="relative aspect-4/5 overflow-hidden bg-[#e7d8c7]">
            <Image
              src={marciImage}
              alt="Marci Metzger, real estate agent with The Ridge Realty Group"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute bottom-0 left-0 bg-white px-5 py-4 shadow-md sm:px-7 sm:py-5">
            <p className="font-(family-name:--font-playfair) text-3xl text-accent">
              Marci Metzger
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              The Ridge Realty Group
            </p>
          </div>
        </div>

        {/* Right: Introduction */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-accent" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Get to know Marci
            </p>
          </div>

          <h2 className="max-w-xl font-(family-name:--font-playfair) text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Real estate is personal.
            <span className="mt-1 block italic text-accent">
              Your goals come first.
            </span>
          </h2>

          <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            <p>
              Buying or selling a home is an important milestone. Having the
              right person to guide you through the process can make a real
              difference.
            </p>

            <p>
              Marci Metzger of The Ridge Realty Group helps clients navigate
              their real estate journey in Pahrump, Nevada, with an emphasis on
              local knowledge, clear communication, and personal service.
            </p>
          </div>

          <ul className="mt-7 space-y-4">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-accent/10">
                  <Check
                    size={13}
                    strokeWidth={2}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm leading-6 text-foreground/85">
                  {value}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="mt-8 inline-flex min-h-12 items-center gap-3 border-b border-accent pb-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            Let&apos;s talk about your goals
          </Link>
        </div>
      </div>
    </section>
  );
}
