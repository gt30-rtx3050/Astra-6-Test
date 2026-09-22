import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroCanvas from "../components/HeroCanvas";
import {
  Button,
  Socials,
  usePageMotion,
  Count,
} from "../components/ui";
import { Availability, ContactSection, Newsletter } from "../components/Forms";
import {
  Introduction,
  Services,
  Process,
  Reviews,
  Features,
  Timeline,
  Team,
  Belief,
} from "../components/StudioSections";
import {
  Portfolio,
  Showreel,
  Awards,
  Pricing,
  FAQ,
  Articles,
} from "../components/WorkSections";
export function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .fromTo(
          ".hero-letter",
          { yPercent: 115, rotate: 6 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.25,
            stagger: 0.055,
            ease: "power4.out",
            delay: 0.1,
          },
        )
        .fromTo(
          ".hero-script",
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power2.inOut" },
          0.55,
        )
        .fromTo(
          ".hero-enter",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
          0.5,
        );
    }, ref);
    return () => context.revert();
  }, []);
  return (
    <section className="hero" ref={ref}>
      <HeroCanvas />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="hero-meta hero-enter">
        <span>2019–26©</span>
        <Availability />
      </div>
      <div className="hero-main container">
        <div className="hero-services hero-enter">
          <span>
            <em>01.</em> Web Design & Branding
          </span>
          <span>
            <em>02.</em> Social Presence & Content
          </span>
          <span>
            <em>03.</em> Organic Growth & Visibility
          </span>
        </div>
        <div className="hero-name-wrap">
          <span className="crosshair top-left" />
          <span className="crosshair top-right" />
          <span className="crosshair bottom-left" />
          <span className="crosshair bottom-right" />
          <h1 className="hero-name" aria-label="kishor">
            {"kishor".split("").map((letter, i) => (
              <span className="hero-letter" aria-hidden="true" key={i}>
                {letter}
              </span>
            ))}
          </h1>
          <p className="hero-script">less noise. more direction.</p>
        </div>
        <div className="hero-bottom-content">
          <div className="hero-description hero-enter">
            <p>
              I help brands make smarter marketing decisions, optimize performance,
              <br className="desktop-break" /> and turn every campaign into an opportunity for growth.
            </p>
            <Button to="/contacts">Start a project</Button>
          </div>
        </div>
      </div>
      <div className="hero-footer hero-enter">
        <div className="hero-socials">
          <Socials />
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  usePageMotion("home");
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <Portfolio />
      <Showreel />
      <Awards />
      <Process />
      <Reviews />
      <Features />
      <Pricing />
      <Timeline />
      <div className="container stats-strip">
        <div>
          <span>01. Brands launched</span>
          <Count value={150} suffix="+" />
        </div>
        <div>
          <span>02. Long-term partnerships</span>
          <Count value={92} suffix="%" />
        </div>
        <div>
          <span>03. Visits generated for client websites</span>
          <Count value={12800000} suffix="+" />
        </div>
      </div>
      <Team />
      <Belief />
      <FAQ />
      <Articles />
      <Newsletter />
      <ContactSection />
    </>
  );
}
