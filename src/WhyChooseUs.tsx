import React from "react";

const features = [
  {
    label: "Generational Expertise",
    body: "40 years of industry experience and a family legacy of excellence.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M9 2L10.8 6.5H16L11.6 9.5L13.4 14L9 11L4.6 14L6.4 9.5L2 6.5H7.2L9 2Z"
          stroke="white"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Local Dedication",
    body: "Proudly serving the West Michigan area.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="6.5" stroke="white" strokeWidth="1.4" />
        <path d="M9 5.5V9.5L11.5 11" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Personal Touch",
    body: "When you call us, you're talking to a family that cares about your results.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M3 3.5C3 3.5 5.5 2 9 2C12.5 2 15 3.5 15 3.5V11.5C15 13.5 9 16.5 9 16.5C9 16.5 3 13.5 3 11.5V3.5Z"
          stroke="white"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[radial-gradient(circle,rgb(14,84,168),_#1487f3)] px-5 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
      {/* Inner content — capped at 1400px, centered */}
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Eyebrow + heading */}
        <p className="mb-1 text-[16px] font-semibold uppercase tracking-[0.12em] text-white/65  ">
          Why Choose Us
        </p>
        <h2 className="mb-8 text-2xl font-medium leading-snug text-white sm:text-3xl lg:mb-10 lg:text-4xl">
          The West Coast Irrigation Difference
        </h2>

        {/* Feature cards — 1 col on mobile, 3 on md+ */}
        <div className="mb-8   grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 lg:mb-10">
          {features.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-white/20 bg-white/[0.15] p-4 "
            >
              {/* Icon */}
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.15]">
                {f.icon}
              </div>
              <p className="mb-1.5 text-sm font-semibold text-white sm:text-[15px]">{f.label}</p>
              <p className="text-xs leading-relaxed text-white/70 sm:text-sm">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="mb-7 border-t border-white/20 lg:mb-8" />

        {/* Quote */}
        <div className="flex items-start gap-3 sm:gap-4">
          <span
            className="mt-1 shrink-0 font-serif text-4xl leading-none text-white/20 sm:text-5xl"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <div>
            <p className="mb-2 text-sm italic leading-relaxed text-white/88 sm:text-base lg:text-[17px]">
              Our family is here to take care of yours. Let us help you keep your
              property beautiful, one drop at a time.
            </p>
            <p className="text-xs text-white/50 sm:text-[13px]">
              — Blake, Owner, West Coast Irrigation Services
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
