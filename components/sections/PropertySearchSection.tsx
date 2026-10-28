"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

const locations = [
  "Any",
  "Alamo",
  "Alton",
  "Amargosa Valley",
  "Beatty",
  "Beryl",
  "Blue Diamond",
  "Boulder City",
  "Brian Head",
  "Cal Nev Ari",
  "Caliente",
  "Cedar City",
  "Cold Creek",
  "Crystal",
  "Duck Creek Village",
  "Dyer",
  "Elko",
  "Ely",
  "Goldfield",
  "Goodsprings",
  "Hatch",
  "Henderson",
  "Indian Springs",
  "Jean",
  "Las Vegas",
  "Laughlin",
  "Logandale",
  "Mc Gill",
  "Mesquite",
  "Moapa",
  "Mount Charleston",
  "Mountain Springs",
  "Nelson",
  "North Las Vegas",
  "Other",
  "Overton",
  "Pahrump",
  "Palm Gardens",
  "Panaca",
  "Parowan",
  "Pioche",
  "Ruth",
  "Sandy Valley",
  "Searchlight",
  "Tonopah",
];

const propertyTypes = [
  "Any",
  "Land",
  "Residential Lease",
  "High Rise",
  "Residential",
];

const sortOptions = [
  "Newest",
  "Oldest",
  "Least Expensive to Most",
  "Most Expensive to Least",
  "Bedrooms (Low to High)",
  "Bedrooms (High to Low)",
  "Bathrooms (Low to High)",
  "Bathrooms (High to Low)",
];

const bedroomOptions = [
  "Any Number",
  "Studio",
  "1+",
  "2+",
  "3+",
  "4+",
  "5+",
  "6+",
];

const bathroomOptions = ["Any Number", "1+", "2+", "3+", "4+", "5+", "6+"];

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-none border border-[#d9cabb] bg-white px-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

export default function PropertySearchSection() {
  const [message, setMessage] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const minPrice = Number(formData.get("minPrice") || 0);
    const maxPrice = Number(formData.get("maxPrice") || 0);

    if (minPrice > 0 && maxPrice > 0 && minPrice > maxPrice) {
      setMessage("Minimum price cannot be greater than maximum price.");
      return;
    }

    setMessage(
      "Your search filters are ready. Live property results will be available once a property-listing service is connected.",
    );
  }

  return (
    <section
      id="property-search"
      aria-labelledby="property-search-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-360 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          {/* Section introduction */}
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-9 bg-accent" />
              Your next chapter
            </p>

            <h2
              id="property-search-heading"
              className="mt-4 max-w-lg font-(family-name:--font-playfair) text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Find your dream home.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
              The right property starts with the right search. Explore your
              options and narrow down your preferences to find a place that
              feels like home.
            </p>

            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-(family-name:--font-playfair) text-xl text-foreground">
                Local knowledge. Personal guidance.
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Looking around Pahrump or nearby communities? Marci Metzger and
                her team can help guide your property search.
              </p>
            </div>
          </div>

          {/* Property search form */}
          <div className="border border-[#d9cabb] bg-[#f8f5f0] p-5 sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Start exploring
              </p>

              <h3 className="mt-2 font-(family-name:--font-playfair) text-2xl text-foreground sm:text-3xl">
                Search listings
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                Choose your preferences to narrow your search.
              </p>
            </div>

            <form onSubmit={handleSearch}>
              <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                {/* Location */}
                <div>
                  <label
                    htmlFor="property-location"
                    className="text-xs font-semibold text-foreground"
                  >
                    Location
                  </label>

                  <select
                    id="property-location"
                    name="location"
                    defaultValue="Any"
                    className={fieldClassName}
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property type */}
                <div>
                  <label
                    htmlFor="property-type"
                    className="text-xs font-semibold text-foreground"
                  >
                    Property Type
                  </label>

                  <select
                    id="property-type"
                    name="type"
                    defaultValue="Any"
                    className={fieldClassName}
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="property-sort"
                    className="text-xs font-semibold text-foreground"
                  >
                    Sort By
                  </label>

                  <select
                    id="property-sort"
                    name="sortBy"
                    defaultValue="Newest"
                    className={fieldClassName}
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Bedrooms */}
                <div>
                  <label
                    htmlFor="property-bedrooms"
                    className="text-xs font-semibold text-foreground"
                  >
                    Bedrooms
                  </label>

                  <select
                    id="property-bedrooms"
                    name="bedrooms"
                    defaultValue="Any Number"
                    className={fieldClassName}
                  >
                    {bedroomOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Bathrooms */}
                <div>
                  <label
                    htmlFor="property-bathrooms"
                    className="text-xs font-semibold text-foreground"
                  >
                    Bathrooms
                  </label>

                  <select
                    id="property-bathrooms"
                    name="bathrooms"
                    defaultValue="Any Number"
                    className={fieldClassName}
                  >
                    {bathroomOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Minimum price */}
                <div>
                  <label
                    htmlFor="property-min-price"
                    className="text-xs font-semibold text-foreground"
                  >
                    Minimum Price ($)
                  </label>

                  <input
                    id="property-min-price"
                    name="minPrice"
                    type="number"
                    min="0"
                    step="1000"
                    placeholder="No minimum"
                    className={fieldClassName}
                  />
                </div>

                {/* Maximum price */}
                <div>
                  <label
                    htmlFor="property-max-price"
                    className="text-xs font-semibold text-foreground"
                  >
                    Maximum Price ($)
                  </label>

                  <input
                    id="property-max-price"
                    name="maxPrice"
                    type="number"
                    min="0"
                    step="1000"
                    placeholder="No maximum"
                    className={fieldClassName}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-foreground px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Search size={17} aria-hidden="true" />
                Search Now
              </button>

              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-4 border-l-2 border-accent pl-3 text-sm leading-6 text-muted"
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
