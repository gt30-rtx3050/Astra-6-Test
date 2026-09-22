import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { projects, posts, faqs } from "../data";
import { monthlyPrice } from "../utils";
import {
  Author,
  Button,
  Count,
  Icon,
  Label,
  Picture,
  SectionHead,
  Title,
} from "./ui";
export function ProjectCard({ project, index = 0 }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-picture">
        <Picture id={project.image} alt={project.title} />
        <span className="view-project">
          View project <Icon />
        </span>
      </div>
      <div className="project-meta">
        <span>0{index + 1}.</span>
        <span>{project.year}</span>
        <span>{project.client}</span>
      </div>
      <div className="project-title">
        <h3>{project.title}</h3>
        <Icon />
      </div>
      <div className="tags">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </Link>
  );
}
export function Portfolio() {
  return (
    <section className="section portfolio container">
      <SectionHead
        label="Portfolio"
        jp="実績と成果"
        title="Case studies."
        description="Stories of how we helped brands evolve, connect with audiences, and scale effectively."
      >
        <span className="eyebrow">© 2023–25</span>
      </SectionHead>
      <div className="portfolio-grid">
        {projects.slice(0, 4).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
      <div className="more-cases">
        <div className="section-top">
          <Label jp="他の事例">More cases</Label>
          <p>
            Design isn’t always about looks — strategy and systems matter just
            as much.
          </p>
          <Button to="/projects">All projects</Button>
        </div>
        {projects.slice(6).map((p, i) => (
          <Link className="case-row" to={`/projects/${p.slug}`} key={p.slug}>
            <span className="case-number">0{i + 1}.</span>
            <span className="eyebrow">{p.year}</span>
            <Picture id={p.image} alt={p.title} />
            <div>
              <h3>{p.title}</h3>
              <p>
                {
                  [
                    "Code review, Debugging, Refactoring",
                    "API debugging, Error handling",
                    "Case Study, CMS",
                  ][i]
                }
              </p>
            </div>
            <Icon />
          </Link>
        ))}
      </div>
      <div className="section-foot">
        <span>Latest work</span>
        <span>Q2 2026</span>
      </div>
    </section>
  );
}
export function Showreel() {
  const [open, setOpen] = useState(false),
    [index, setIndex] = useState(0),
    [playing, setPlaying] = useState(false);
  const dialog = useRef(null),
    button = useRef(null);
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
        button.current?.focus();
      };
    } else dialog.current.close();
  }, [open]);
  useEffect(() => {
    if (!playing || !open) return;
    const id = setInterval(
      () => setIndex((v) => (v + 1) % projects.length),
      2200,
    );
    return () => clearInterval(id);
  }, [playing, open]);
  function close() {
    setOpen(false);
    setPlaying(false);
  }
  return (
    <section className="showreel section">
      <div className="container">
        <SectionHead
          label="Showreel"
          jp="視覚の記録"
          title="Highlights"
          description="Fast, sharp, and bold — our approach to websites and campaigns, distilled."
        >
          <span className="eyebrow">© 2023–26</span>
        </SectionHead>
      </div>
      <div className="showreel-grid">
        {projects.map((p) => (
          <Picture key={p.slug} id={p.image} alt={p.title} />
        ))}
        <button
          ref={button}
          className="play-button"
          onClick={() => {
            setOpen(true);
            setPlaying(true);
          }}
          aria-label="Open project highlights"
        >
          <Icon name="play" />
        </button>
        <span className="showreel-date">2025–26</span>
        <span className="showreel-length">Showreel ©26</span>
      </div>
      <dialog
        className="showreel-dialog"
        ref={dialog}
        aria-label="Project highlights"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setIndex((index + 1) % projects.length);
          if (e.key === "ArrowLeft")
            setIndex((index + projects.length - 1) % projects.length);
        }}
      >
        <button
          className="modal-close icon-button"
          onClick={close}
          aria-label="Close highlights"
        >
          <Icon name="close" />
        </button>
        <div className="slideshow-image" key={index}>
          <Picture id={projects[index].image} alt={projects[index].title} />
        </div>
        <div className="slideshow-controls">
          <button
            aria-label="Previous project"
            onClick={() =>
              setIndex((index + projects.length - 1) % projects.length)
            }
          >
            ←
          </button>
          <Link to={`/projects/${projects[index].slug}`} onClick={close}>
            {projects[index].title} ↗
          </Link>
          <button onClick={() => setPlaying(!playing)}>
            {playing ? "Pause" : "Play"}
          </button>
          <button
            aria-label="Next project"
            onClick={() => setIndex((index + 1) % projects.length)}
          >
            →
          </button>
        </div>
        <p className="slideshow-note">
          Project highlights · The original film is not available in this
          preview.
        </p>
      </dialog>
    </section>
  );
}
export function Awards() {
  return (
    <section className="awards container">
      {[
        ["2021–2025", "5x", "Red Dot Winner", "Brands & Communication Design"],
        [
          "2023/24/25",
          "2x",
          "Awwwards winner",
          "Site of the day & Site of the month",
        ],
        ["2019", "iF", "IF Design Award Winner", "User Experience (UX)"],
      ].map(([year, count, title, subtitle]) => (
        <article key={title}>
          <span className="eyebrow">{year}</span>
          <span className="award-icon">{count}</span>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </article>
      ))}
    </section>
  );
}
function AccordionItem({ question, answer, index, open, onClick }) {
  const ref = useRef(null);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(ref.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: reduced ? 0 : 0.4,
      ease: "power2.inOut",
      overwrite: true,
    });
  }, [open]);
  return (
    <article className={`faq-item ${open ? "expanded" : ""}`}>
      <h3>
        <button
          aria-expanded={open}
          aria-controls={`faq-answer-${index}`}
          id={`faq-question-${index}`}
          onClick={onClick}
        >
          <span className="faq-number">0{index + 1}.</span>
          <span>{question}</span>
          <Icon name="plus" />
        </button>
      </h3>
      <div
        ref={ref}
        className="faq-answer"
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        inert={!open}
      >
        <div>
          <p>{answer}</p>
          {index === 0 && (
            <div className="faq-photos">
              <Picture
                id="Uxvv7FDO9rX0PiYWTwBYfQ9IfVU"
                alt="Device on the table"
              />
              <Picture
                id="o11Y43pucQaabqElOz7c1klds"
                alt="People sharing pieces of paper"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section container faq">
      <div className="split-layout">
        <div>
          <Label jp="質問と理解">FAQ</Label>
          <Title>
            Quick
            <br />
            answers.
          </Title>
          <p>Short and clear responses to the questions we hear most often.</p>
          <div className="side-cta">
            <h4>Still have questions?</h4>
            <p>Let’s talk — we’ll clear everything up.</p>
            <Button to="/contacts">Let's clear it up</Button>
          </div>
        </div>
        <div>
          {faqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              question={q}
              answer={a}
              index={i}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
const plans = [
  {
    name: "Launch Plan",
    price: 2500,
    description:
      "Perfect for startups and small businesses that need a professional website to launch with confidence.",
    features: [
      "Landing Page Design",
      "Responsive Layout",
      "UI Design",
      "Framer Development",
    ],
    extras: ["Performance Optimization", "Basic SEO Setup"],
    time: "Typically delivered in 3–5 weeks",
  },
  {
    name: "Growth Plan",
    price: 5500,
    description:
      "Built for growing brands that need more pages, stronger storytelling, and better performance.",
    features: [
      "Multi-Page Website",
      "Custom UI/UX Design",
      "CMS Integration",
      "Advanced Animations",
      "Conversion-Focused Structure",
    ],
    extras: ["Social Preview Setup", "Speed Optimization", "Priority Support"],
    time: "Typically delivered in 5–6 weeks",
  },
  {
    name: "Signature Plan",
    price: 8500,
    description:
      "A fully custom solution for established brands that expect premium design and long-term support.",
    features: [
      "Brand Identity",
      "Framer Development",
      "Advanced Interactions",
      "Launch Assistance",
    ],
    extras: ["Design Documentation", "Dedicated Project Lead"],
    time: "Flexible engagement",
  },
];
export function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section className="section container pricing">
      <SectionHead
        label="Pricing"
        jp="価格と価値"
        title="Packages"
        description="Flexible engagement models designed around your goals, timeline, and level of support."
      >
        <div
          className="pricing-toggle"
          role="group"
          aria-label="Billing period"
        >
          <button aria-pressed={!annual} onClick={() => setAnnual(false)}>
            Monthly
          </button>
          <button aria-pressed={annual} onClick={() => setAnnual(true)}>
            Annual
          </button>
          <span>24% Save</span>
        </div>
      </SectionHead>
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <article className={i === 1 ? "popular-plan" : ""} key={p.name}>
            <div className="item-index">
              <span>00{i + 1}. /</span>
              <span>物語と個性</span>
            </div>
            <h3>
              {p.name}
              {i === 1 && <span>Popular</span>}
            </h3>
            <p>{p.description}</p>
            <div className="plan-price" key={String(annual)}>
              ${monthlyPrice(p.price, annual).toLocaleString("en-US")}
              <small>/Per month</small>
            </div>
            <span className="eyebrow">What's included</span>
            <ul>
              {p.features.map((f) => (
                <li key={f}>
                  <Icon name="check" />
                  {f}
                </li>
              ))}
            </ul>
            <span className="eyebrow">Extras</span>
            <ul>
              {p.extras.map((f) => (
                <li key={f}>
                  <Icon name="plus" />
                  {f}
                </li>
              ))}
            </ul>
            <Button to="/contacts">Start a project</Button>
            <small className="plan-time">
              Timeframe:
              <br />
              {p.time}
            </small>
          </article>
        ))}
      </div>
      <div className="section-foot">
        <span>No hidden fees</span>
        <span>{annual ? "Billed annually" : "Billed monthly"}</span>
      </div>
    </section>
  );
}
export function ArticleCard({ post }) {
  return (
    <Link className="article-card" to={`/blog/${post.slug}`}>
      <div className="article-picture">
        <Picture id={post.image} alt={post.title} />
        <span className="article-arrow">
          <Icon />
        </span>
      </div>
      <div className="article-meta">
        <span>{post.date}</span>
        <span>{post.minutes} min. read</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="article-author">
        <Picture id={post.avatar} alt={post.author} width={256} />
        <span>
          Article by <b>{post.author}</b>
        </span>
      </div>
    </Link>
  );
}
export function Articles() {
  return (
    <section className="section container articles">
      <SectionHead
        label="Blog posts"
        jp="思考と記録"
        title="Articles."
        description="Thoughts, experiments, and lessons from our team — covering design, strategy, and everything in between."
      />
      <div className="articles-grid">
        {posts.slice(0, 3).map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="section-foot">
        <Button to="/blog">Read all posts</Button>
        <span>Updated weekly</span>
      </div>
    </section>
  );
}
