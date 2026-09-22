import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import gsap from "gsap";
import { Brand, Button, Icon, Roll, Socials } from "./ui";
const nav = [
  ["Who we are", "/about-us"],
  ["Projects", "/projects"],
  ["Articles", "/blog"],
  ["Join us", "/career"],
  ["Start a project", "/contacts"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const panel = useRef(null),
    trigger = useRef(null),
    closeTimer = useRef(null);
  const location = useLocation();
  function closeMenu() {
    clearTimeout(closeTimer.current);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(false);
      return;
    }
    gsap.to(panel.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.45,
      ease: "power3.inOut",
      overwrite: true,
    });
    // Do not let throttled animation frames keep an accessible dialog trapped open.
    closeTimer.current = setTimeout(() => setOpen(false), 450);
  }
  useEffect(() => setOpen(false), [location.pathname]);
  useLayoutEffect(() => {
    const el = panel.current;
    if (!open) {
      el.close();
      return;
    }
    el.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const context = gsap.context(() => {
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.65, ease: "power3.inOut" },
        );
        gsap.fromTo(
          el.querySelectorAll(".menu-link"),
          { y: 65, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: 0.25,
            stagger: 0.07,
            duration: 0.65,
            ease: "power3.out",
          },
        );
      }
    }, el);
    return () => {
      clearTimeout(closeTimer.current);
      gsap.killTweensOf(el);
      context.revert();
      document.body.style.overflow = old;
      trigger.current?.focus();
    };
  }, [open]);
  return (
    <>
      <header className="header">
        <Link to="/" aria-label="Neiden home" className="header-brand">
          <Brand mark />
          <span className="purpose">Built With Purpose</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([name, to], i) => (
            <Link
              to={to}
              key={to}
              className={location.pathname === to ? "active" : ""}
            >
              <Roll>{name}</Roll>
              {i === 1 && <sup>35</sup>}
            </Link>
          ))}
        </nav>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          ref={trigger}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      <dialog
        ref={panel}
        id="navigation-menu"
        className="menu-panel"
        onCancel={(e) => {
          e.preventDefault();
          closeMenu();
        }}
        aria-label="Navigation"
      >
        <div className="menu-heading">
          <Brand />
          <button
            className="icon-button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="menu-inner">
          <div>
            <p className="eyebrow">Navigation</p>
            {[
              ["About studio", "/about-us"],
              ["Projects", "/projects"],
              ["Articles", "/blog"],
              ["Contact", "/contacts"],
              ["Career", "/career"],
              ["404", "/404"],
            ].map(([name, to], i) => (
              <Link
                className="menu-link"
                to={to}
                key={to}
                onClick={() => setOpen(false)}
              >
                <small>0{i + 1}</small>
                <Roll>{name}</Roll>
                <Icon />
              </Link>
            ))}
          </div>
          <div className="menu-details">
            <span className="eyebrow">Contacts</span>
            <a href="tel:+13125552468">+1 (312) 555-2468</a>
            <a href="mailto:hello@neiden.project">hello@neiden.project</a>
            <p>
              Dronningens Gate 15,
              <br />
              0152 Oslo, Norway
            </p>
            <Socials />
            <Button to="/contacts">Start a project</Button>
          </div>
        </div>
        <div className="menu-bottom">
          <span>2019–26©</span>
          <Link to="/terms-of-services">Terms of service</Link>
          <Link to="/privacy">Privacy policy</Link>
          <span>Built With Purpose</span>
        </div>
      </dialog>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Brand />
          <p>Built With Purpose</p>
        </div>
        <div>
          <span className="eyebrow">Navigation</span>
          {nav.slice(0, 4).map(([name, to]) => (
            <Link key={to} to={to}>
              <Roll>{name}</Roll>
            </Link>
          ))}
        </div>
        <div>
          <span className="eyebrow">Contacts</span>
          <a href="tel:+13125552468">+1 (312) 555-2468</a>
          <a href="mailto:hello@neiden.project">hello@neiden.project</a>
          <p>
            Dronningens Gate 15,
            <br />
            0152 Oslo, Norway
          </p>
          <Socials />
        </div>
      </div>
      <Link
        to="/contacts"
        className="footer-wordmark"
        aria-label="Start a project with Neiden"
      >
        ñeiden<sup>®</sup>
        <Icon />
      </Link>
      <div className="footer-bottom">
        <span>2019–26©</span>
        <span>Forde Lab™ · All rights reserved</span>
        <Link to="/terms-of-services">Terms of service</Link>
        <Link to="/privacy">Privacy policy</Link>
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            })
          }
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Neiden® — Design Studio & Explorations";
  }, [pathname]);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
