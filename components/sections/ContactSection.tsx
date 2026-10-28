"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormMessage(
      "Your form is ready, but message delivery must be configured before submissions can be sent.",
    );
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f7f3ed]">
      {/* Decorative background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full border border-[#e5dbd0] sm:size-120"
      />

      <div className="relative mx-auto max-w-360 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        {/* Section introduction */}
        <div className="grid gap-6 border-b border-[#e5dbd0] pb-9 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c17a55]">
              <span className="h-px w-9 bg-[#c17a55]" />
              Get in touch
            </p>

            <h2 className="mt-5 max-w-3xl font-(family-name:--font-playfair) text-4xl leading-[1.12] tracking-tight text-[#392b25] sm:text-5xl lg:text-7xl">
              Call or visit.
              <span className="mt-1 block italic text-[#c17a55]">
                Let&apos;s talk real estate.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#75685e] md:pb-2">
            Whether you are buying, selling, or simply exploring your options,
            Marci is here to help you take the next step.
          </p>
        </div>

        {/* Main contact layout */}
        <div className="mt-9 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Message form */}
          <div className="border border-[#e5dbd0] bg-white p-6 sm:p-9 lg:p-11">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c17a55]">
                  Get in touch
                </p>

                <h3 className="mt-3 font-(family-name:--font-playfair) text-3xl text-[#392b25] sm:text-4xl">
                  Send Message
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#75685e]">
                  Leave your contact details and get ready to start a
                  conversation about your real estate goals.
                </p>
              </div>

              <div className="hidden size-12 shrink-0 items-center justify-center bg-[#f7f3ed] text-[#c17a55] sm:flex">
                <ArrowUpRight size={23} aria-hidden="true" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Name field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-semibold text-[#392b25]"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="min-h-13 w-full border border-[#e5dbd0] bg-[#fdfbf8] px-4 py-3 text-sm text-[#392b25] outline-none transition-colors placeholder:text-[#a69a8f] focus:border-[#c17a55] focus:bg-white"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-semibold text-[#392b25]"
                >
                  Email <span className="text-[#c17a55]">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  className="min-h-13 w-full border border-[#e5dbd0] bg-[#fdfbf8] px-4 py-3 text-sm text-[#392b25] outline-none transition-colors placeholder:text-[#a69a8f] focus:border-[#c17a55] focus:bg-white"
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold text-[#392b25]"
                >
                  Message <span className="text-[#c17a55]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can Marci help you?"
                  rows={5}
                  required
                  className="w-full resize-y border border-[#e5dbd0] bg-[#fdfbf8] px-4 py-3 text-sm leading-6 text-[#392b25] outline-none transition-colors placeholder:text-[#a69a8f] focus:border-[#c17a55] focus:bg-white"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="group inline-flex min-h-13 w-full items-center justify-center gap-3 bg-[#392b25] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#c17a55] sm:w-auto sm:min-w-44"
              >
                Send Message
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </button>

              {formMessage && (
                <p
                  role="status"
                  className="flex items-start gap-2 text-sm leading-6 text-[#75685e]"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#c17a55]"
                    aria-hidden="true"
                  />
                  {formMessage}
                </p>
              )}
            </form>

            {/* reCAPTCHA policy notice */}
            <div className="mt-8 border-t border-[#e5dbd0] pt-5">
              <p className="text-[11px] leading-5 text-[#75685e]">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-[#c17a55]"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-[#c17a55]"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
          </div>

          {/* Office information */}
          <div className="flex flex-col gap-6">
            {/* Business details */}
            <div className="bg-[#efe7dc] p-6 sm:p-9 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#c17a55]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c17a55]">
                  Visit our office
                </p>
              </div>

              <h3 className="mt-5 font-(family-name:--font-playfair) text-3xl leading-tight text-[#392b25] sm:text-4xl">
                Marci Metzger
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#75685e]">
                The Ridge Realty Group
              </p>

              <div className="mt-8 space-y-6">
                {/* Office address */}
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center bg-white text-[#c17a55]">
                    <MapPin size={19} aria-hidden="true" />
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-semibold text-[#392b25]">
                      Office address
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#75685e]">
                      3190 HW-160, Suite F
                      <br />
                      Pahrump, Nevada 89048
                      <br />
                      United States
                    </p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=3190+HW-160+Suite+F+Pahrump+Nevada+89048"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#392b25] transition-colors hover:text-[#c17a55]"
                    >
                      Get directions
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Phone number */}
                <div className="flex items-center gap-4 border-t border-[#d9cabb] pt-6">
                  <span className="flex size-11 shrink-0 items-center justify-center bg-white text-[#c17a55]">
                    <Phone size={19} aria-hidden="true" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-[#392b25]">
                      Call Marci
                    </p>

                    <a
                      href="tel:+12069196886"
                      className="mt-1 inline-block text-base font-medium text-[#392b25] transition-colors hover:text-[#c17a55] sm:text-lg"
                    >
                      (206) 919-6886
                    </a>
                  </div>

                  <a
                    href="tel:+12069196886"
                    aria-label="Call Marci Metzger"
                    className="flex size-10 shrink-0 items-center justify-center border border-[#d9cabb] text-[#392b25] transition-colors hover:border-[#c17a55] hover:bg-[#c17a55] hover:text-white"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Office hours */}
            <div className="border border-[#e5dbd0] bg-white p-6 sm:p-9 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center bg-[#f7f3ed] text-[#c17a55]">
                    <Clock size={20} aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="font-(family-name:--font-playfair) text-2xl text-[#392b25]">
                      Office Hours
                    </h3>
                    <p className="mt-1 text-xs text-[#75685e]">Open daily</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#75685e]">
                  <span className="size-2 rounded-full bg-[#c17a55]" />
                  Daily
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-4 border-y border-[#e5dbd0] py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={18}
                    className="text-[#c17a55]"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#75685e]">
                    Daily office hours
                  </span>
                </div>

                <p className="text-lg font-medium tabular-nums text-[#392b25]">
                  8:00 am – 7:00 pm
                </p>
              </div>

              <div className="mt-5 border-l-2 border-[#c17a55] pl-4">
                <p className="text-sm leading-6 text-[#75685e]">
                  Need to meet outside regular hours?
                </p>

                <p className="mt-1 text-sm font-medium leading-6 text-[#392b25]">
                  Appointments outside office hours are available upon request.
                  Just call!
                </p>
              </div>

              <a
                href="tel:+12069196886"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 border border-[#e5dbd0] px-4 py-3 text-sm font-semibold text-[#392b25] transition-colors hover:border-[#c17a55] hover:bg-[#f7f3ed]"
              >
                Arrange an appointment
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="overflow-hidden border border-[#e5dbd0] bg-white">
          <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c17a55]">
                Find us
              </p>

              <h3 className="mt-2 font-(family-name:--font-playfair) text-2xl text-[#392b25]">
                Visit Our Office
              </h3>

              <p className="mt-1 text-sm text-[#75685e]">Pahrump, Nevada</p>
            </div>

            <MapPin
              size={24}
              className="shrink-0 text-[#c17a55]"
              aria-hidden="true"
            />
          </div>

          <iframe
            title="The Ridge Realty Group office location in Pahrump, Nevada"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.2857981158154!2d-115.95805461763592!3d36.18393060647347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c639760f7b12f3%3A0xa05207dd285dc73c!2sTHE%20RIDGE%20REALTY%20GROUP!5e0!3m2!1sen!2sph!4v1793170609349!5m2!1sen!2sph"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block w-full"
          />

          <div className="p-5 sm:p-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=3190+HW-160+Suite+F+Pahrump+Nevada+89048"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#392b25] transition-colors hover:text-[#c17a55]"
            >
              Get directions on Google Maps
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#e5dbd0] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-(family-name:--font-playfair) text-xl text-[#392b25] sm:text-2xl">
            Your next chapter starts here.
          </p>

          <p className="text-xs uppercase tracking-[0.15em] text-[#75685e]">
            Pahrump, Nevada
          </p>
        </div>
      </div>
    </section>
  );
}
