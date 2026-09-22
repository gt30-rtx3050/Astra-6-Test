import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset, avatars } from "../data";
gsap.registerPlugin(ScrollTrigger);
// Keep entrances on wall-clock time if a low-powered browser drops frames.
gsap.ticker.lagSmoothing(0);
export function Icon({ name = "arrow", ...props }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 19 19 5M5 5h14v14" />
      </>
    ),
    plus: <path d="M12 4v16M4 12h16" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    x: (
      <>
        <path d="M4 3h4l12 18h-4L4 3ZM20 3 4 21" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c-7 6-7 12 0 18 7-6 7-12 0-18ZM5 6c4 6 10 4 14 11" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    play: <path d="m8 5 12 7-12 7Z" />,
    down: <path d="m5 9 7 7 7-7" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill={name === "play" ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
export function Mark() {
  return (
    <svg className="brand-mark" viewBox="0 0 44 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 13h10v11H0zm10-13h10c10 0 10 13 24 13v11c-17 0-18-13-24-13H10zm24 0h10v11H34z"
      />
    </svg>
  );
}
export function Brand({ mark = false }) {
  return (
    <span className="brand">
      {mark && <Mark />}
      <span>
        ñeiden<sup>®</sup>
      </span>
    </span>
  );
}
export function Roll({ children }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}
export function Button({
  to,
  children,
  light = false,
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const cls = `button ${light ? "button-light" : ""} ${className}`;
  return to ? (
    <Link to={to} className={cls} {...props}>
      <Roll>{children}</Roll>
      <Icon name="plus" />
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={cls} {...props}>
      <Roll>{children}</Roll>
      <Icon name="plus" />
    </button>
  );
}
export function Label({ children, jp = "原点と理念" }) {
  return (
    <div className="section-label">
      <span className="red-bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>
        [ ND® <span className="label-dash">‒</span> {children} /{" "}
        <span className="jp">{jp}</span> ]
      </span>
    </div>
  );
}
export function Title({ children, as: Tag = "h2", className = "" }) {
  function split(node) {
    return React.Children.map(node, (part) =>
      typeof part === "string"
        ? part.split(" ").map((word, i) => (
            <React.Fragment key={i}>
              <span className="title-word">
                {word.split("").map((letter, j) => (
                  <span className="title-letter" key={j}>
                    {letter}
                  </span>
                ))}
              </span>{" "}
            </React.Fragment>
          ))
        : part,
    );
  }
  return (
    <Tag className={`display-title ${className}`} data-title-reveal>
      {split(children)}
    </Tag>
  );
}
export function SectionHead({ label, jp, title, description, children }) {
  return (
    <>
      <div className="section-top">
        <Label jp={jp}>{label}</Label>
        {description && <p>{description}</p>}
      </div>
      {title && (
        <div className="section-title-row">
          <Title>{title}</Title>
          {children}
        </div>
      )}
    </>
  );
}
export function Picture({
  id,
  alt = "",
  className = "",
  eager = false,
  width = 1200,
  style,
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`picture ${className} ${failed ? "picture-unavailable" : ""}`}
      style={style}
    >
      {!failed ? (
        <img
          src={asset(id, width)}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="image-fallback"
          role="img"
          aria-label={alt || "Image unavailable"}
        >
          <span className="fallback-mark">ñ</span>
          <small>{alt || "Neiden®"}</small>
        </span>
      )}
    </div>
  );
}
export function Author({
  name = "Lars Nyström",
  role = "Head of Strategy",
  image = "tKz4t7GASrOBCeaAajhgtS4HA",
  company = "Neiden®",
}) {
  return (
    <div className="author">
      <Picture id={image} alt={name} width={256} />
      <div>
        <strong>{name}</strong>
        <span>
          {role} at
          <br />
          <b>{company}</b>
        </span>
      </div>
    </div>
  );
}
export function Rating() {
  return (
    <div className="rating">
      <div className="avatars">
        {avatars.map((id, i) => (
          <Picture
            key={id}
            id={id}
            alt={`Client portrait ${i + 1}`}
            width={256}
            eager
          />
        ))}
        <span>80+</span>
      </div>
      <div className="rating-copy">
        <div>
          <span className="rating-dots">●●●●●</span> 4.9/5
        </div>
        <span>Based on 361 reviews</span>
      </div>
    </div>
  );
}
export function Socials() {
  return (
    <div className="socials">
      <a
        href="https://x.com/Fordelab"
        target="_blank"
        rel="noreferrer"
        aria-label="X"
      >
        <Icon name="x" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <Icon name="instagram" />
      </a>
      <a
        href="https://dribbble.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Dribbble"
      >
        <Icon name="globe" />
      </a>
      <a
        href="https://www.behance.net/"
        target="_blank"
        rel="noreferrer"
        aria-label="Behance"
      >
        Bē
      </a>
    </div>
  );
}
export function Count({ value, suffix = "", prefix = "", className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const state = { n: 0 };
    const context = gsap.context(() => {
      gsap.to(state, {
        n: value,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 93%", once: true },
        onUpdate: () => {
          if (ref.current)
            ref.current.textContent =
              prefix + Math.round(state.n).toLocaleString("en-US") + suffix;
        },
      });
    });
    return () => context.revert();
  }, [value, suffix, prefix]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
export function usePageMotion(key) {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray("[data-title-reveal]").forEach((el) =>
        gsap.fromTo(
          el.querySelectorAll(".title-letter"),
          { yPercent: 115 },
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.018,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 95%", once: true },
          },
        ),
      );
      gsap.utils.toArray("[data-reveal]").forEach((el) =>
        gsap.fromTo(
          el,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 95%", once: true },
          },
        ),
      );
      gsap.utils.toArray("[data-parallax]").forEach((el) =>
        gsap.fromTo(
          el,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        ),
      );
    });
    return () => media.revert();
  }, [key]);
}
