import { Award, TrendingUp, Users, House, Handshake } from "lucide-react";

const achievements = [
  {
    icon: Award,
    label: "Experience",
    value: "Nearly 30 Years",
    description: "A REALTOR serving the Pahrump real estate market.",
  },
  {
    icon: Users,
    label: "Clients Helped",
    value: "Nearly 90",
    description: "Clients helped in 2021.",
  },
  {
    icon: TrendingUp,
    label: "Sales Volume",
    value: "$28.5 Million",
    description: "In sales closed in 2021.",
  },
];

const promotions = [
  {
    icon: House,
    eyebrow: "For Home Sellers",
    title: "Don't Just List It...",
    highlight: "Get it SOLD!",
    description:
      "We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, helping sellers pursue the best possible price for their home.",
  },
  {
    icon: Handshake,
    eyebrow: "For Home Buyers",
    title: "Guide to Buyers",
    highlight: "Expert guidance, every step.",
    description:
      "Get professional support with market analysis, upgrade lists, contractor connections, and the information you need to make confident property decisions.",
  },
];

export default function AchievementsSection() {
  return (
    <section
      aria-labelledby="achievements-heading"
      className="border-y border-border bg-white"
    >
      <div className="mx-auto max-w-360 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Sales achievements */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Proven dedication
          </p>

          <h2
            id="achievements-heading"
            className="mt-3 font-(family-name:--font-playfair) text-3xl text-foreground sm:text-4xl lg:text-5xl"
          >
            Top Residential Sales Last 5 Years
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Our team works hard every day to grow, learn, and deliver an even
            better real estate experience for our clients.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="border border-border p-6 text-center transition-colors hover:border-accent sm:p-8"
              >
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="mx-auto text-accent"
                  aria-hidden="true"
                />

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {item.label}
                </p>

                <h3 className="mt-2 font-(family-name:--font-playfair) text-2xl text-foreground sm:text-3xl">
                  {item.value}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Seller and buyer promotions */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {promotions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.eyebrow}
                className="flex flex-col border border-border bg-background p-7 sm:p-9 lg:p-10"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-accent"
                  aria-hidden="true"
                />

                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.eyebrow}
                </p>

                <h3 className="mt-3 font-(family-name:--font-playfair) text-2xl text-foreground sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-1 font-(family-name:--font-playfair) text-2xl text-accent sm:text-3xl">
                  {item.highlight}
                </p>

                <p className="mt-5 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs leading-6 text-muted">
          Sales figures reflect the original website&apos;s reported 2021
          results. Historical figures are not current annual totals.
        </p>
      </div>
    </section>
  );
}
