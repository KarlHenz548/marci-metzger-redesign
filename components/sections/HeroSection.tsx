import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

const marciImage =
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.07%25,l:0%25,w:100%25,h:66.64%25/rs=w:1095,h:1095,cg:true";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background lg:flex lg:min-h-[calc(100svh-5rem)] lg:items-center"
    >
      <div className="mx-auto grid w-full max-w-360 items-center gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:px-12 lg:py-8 xl:gap-20">
        {/* Left: Main introduction */}
        <div className="relative z-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-accent" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              The Ridge Realty Group
            </p>
          </div>

          <h1 className="max-w-2xl font-(family-name:--font-playfair) text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-6xl xl:text-7xl">
            Find your place
            <br />
            in <span className="italic text-accent">Pahrump.</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Buying a home, selling a property, or planning your next move? Marci
            Metzger brings nearly three decades of real estate experience to
            help guide you home.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#properties"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-foreground"
            >
              Explore Properties
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>

            <a
              href="tel:+12069196886"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white"
            >
              <Phone size={16} aria-hidden="true" />
              Call Marci
            </a>
          </div>

          {/* Compact experience detail */}
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-5 sm:mt-9">
            <span className="font-(family-name:--font-playfair) text-4xl leading-none text-accent">
              30
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Nearly three decades
              </p>
              <p className="mt-1 text-xs text-muted">
                Real estate experience in your corner
              </p>
            </div>
          </div>
        </div>

        {/* Right: Editorial portrait composition */}
        <div className="relative mx-auto w-full max-w-lg pb-8 pl-3 sm:pl-6 lg:max-w-none lg:pb-6 lg:pl-5">
          {/* Offset decorative frame */}
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-0 right-8 top-5 border border-accent/50 sm:right-12 lg:bottom-1"
          />

          {/* Main portrait */}
          <div className="relative h-97.5 overflow-hidden bg-[#e7d8c7] sm:h-120 lg:h-[min(64svh,580px)] lg:min-h-100">
            <Image
              src={marciImage}
              alt="Marci Metzger of The Ridge Realty Group"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[center_0%]"
            />
          </div>

          <p className="absolute bottom-0 right-4 text-[9px] font-medium uppercase tracking-[0.2em] text-muted sm:right-8">
            Find where you belong
          </p>
        </div>
      </div>
    </section>
  );
}
