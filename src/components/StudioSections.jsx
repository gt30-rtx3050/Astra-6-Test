import React, { useState } from "react";
import { services, team, timeline } from "../data";
import {
  Brand,
  Button,
  Count,
  Label,
  Picture,
  SectionHead,
  Title,
  Author,
  Icon,
  Rating,
} from "./ui";
export function Introduction() {
  return (
    <section className="section container introduction" id="studio">
      <Label>Who we are</Label>
      <h2 className="statement" data-reveal>
        We are an international studio
        <br className="desktop-break" /> collective — that helps brands craft
        <br className="desktop-break" /> unique digital experiences.
      </h2>
      <div className="intro-grid">
        <Picture
          id="tBbzPDsQMxlOlbThB1KDBFxSOiE"
          alt="Creative studio exploration"
          className="intro-photo"
        />
        <Picture
          id="aoRv8epBA7hfsVLfzlMeqgDFwo"
          alt="Neiden studio — material and form"
          className="intro-photo offset"
        />
        <div className="intro-quote" data-reveal>
          <p>
            Great design is rarely about adding more. It's about understanding
            what matters, removing what doesn't, and creating experiences that
            feel effortless for the people who use them.
          </p>
          <Author />
          <Button to="/about-us">About our studio</Button>
        </div>
      </div>
      <div className="section-foot">
        <span>Est. 2019</span>
        <span>18+ projects</span>
      </div>
    </section>
  );
}
export function Services() {
  return (
    <section className="section container services" id="services">
      <div className="split-layout">
        <div className="sticky-intro">
          <Label jp="思想と実行">Services</Label>
          <Title>
            What
            <br />
            We Build
          </Title>
          <p>
            Four core disciplines. One clear goal: helping brands communicate,
            grow, and stay memorable.
          </p>
          <div className="side-cta">
            <span className="eyebrow">Beyond standard project scope</span>
            <p>Made for different. Built together.</p>
            <Button to="/projects">Discuss your project</Button>
          </div>
        </div>
        <div className="service-list">
          {services.map((s, i) => (
            <article className="service" key={s.title}>
              <div className="item-index">
                <span>00{i + 1}. /</span>
                <span>{s.jp}</span>
              </div>
              <h3 data-reveal>{s.title}</h3>
              <div className="service-images">
                <Picture id={s.image} alt={s.title} />
                <Picture id={s.second} alt={`${s.title} — detail`} />
              </div>
              <p>{s.description}</p>
              <span className="eyebrow">Starting from ${s.price}</span>
              <ul className="service-tags">
                {s.tags.map((t) => (
                  <li key={t}>
                    <Icon name="check" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <div className="section-foot">
        <span>Now booking May</span>
        <span>Delivery 2–4 weeks</span>
      </div>
    </section>
  );
}
export function Process() {
  const items = [
    [
      "Discovery",
      "Understanding the real challenge",
      "Every project starts with listening — not just to what’s said, but to what’s behind it. The goal is clarity, not assumptions.",
    ],
    [
      "Strategy",
      "Defining a clear direction",
      "We translate insight into focus: what to do, what not to do, and why it matters. No guessing — just alignment.",
    ],
    [
      "Creating",
      "Building the right solution",
      "Ideas become systems, interfaces, products, brands — always designed to perform, not just impress.",
    ],
    [
      "Growth",
      "Launching and growing",
      "Refined with feedback. Evolved with purpose. Because delivery is not the end — it’s the beginning.",
    ],
  ];
  return (
    <section className="section container">
      <div className="split-layout">
        <div>
          <Label jp="構想から公開へ">Steps</Label>
          <Title>
            From brief
            <br />
            to launch
          </Title>
          <p>
            From initial thoughts and early sketches to tested solutions and
            live products — we cover it all.
          </p>
          <blockquote className="process-quote">
            We don’t jump into solutions.
            <br />
            We listen, think, and build things that actually move the needle.
          </blockquote>
          <Author
            name="Henrik Olsen"
            role="Head of Content"
            image="0gQ2Sz7vt9F3tVZoZPiRdQTXXDM"
          />
        </div>
        <div className="process-grid">
          {items.map(([name, title, body], i) => (
            <article key={name} data-reveal>
              <span className="eyebrow">
                0{i + 1}. <span>{name}</span>
              </span>
              <div className={`process-art art-${i}`} aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Reviews() {
  return (
    <>
      <section className="section container reviews">
        <SectionHead
          label="Selected review"
          jp="信頼と評価"
          title="True Stories."
          description="Real words from the people we’ve worked with — partners, clients, and brands we helped grow."
        >
          <span className="eyebrow">Return rate 82%</span>
        </SectionHead>
        <div className="review-main">
          <Picture id="f2jSL0jznEsOyoAcVARkFtZWNY" alt="Elin Sørensen" />
          <div className="review-quote">
            <span className="eyebrow">
              Services: UX/UI Design · Web Development
            </span>
            <blockquote data-reveal>
              We finally had a brand system everyone could understand and use.
              Clear, collaborative, and built to scale with confidence.
            </blockquote>
            <Author
              name="Elin Sørensen"
              role="Head of Product"
              image="f2jSL0jznEsOyoAcVARkFtZWNY"
              company="Fjordwave®"
            />
            <Rating />
          </div>
        </div>
        <div className="review-stats">
          <div>
            <span>
              Higher
              <br />
              conversion rate
            </span>
            <small>+6% MoM</small>
            <Count value={3} suffix="x" />
          </div>
          <div>
            <span>
              Increase in
              <br />
              qualified leads
            </span>
            <small>+12% MoM</small>
            <Count value={68} prefix="+" suffix="%" />
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHead
          label="Reviews"
          jp="利用者の声"
          title="More Reviews"
          description="A few more perspectives from teams we've partnered with over the years."
        />
        <div className="more-reviews">
          <article data-reveal>
            <strong className="review-brand">Nextwave®</strong>
            <blockquote>
              The new website immediately felt easier to navigate. Customers
              were finding information faster, and our team finally had a
              platform that was simple to manage and scale.
            </blockquote>
            <Author
              name="Maja Løkke"
              role="Product Manager"
              image="cP3HCisFbIUQZvyfZhvAKkts"
              company="Nextwave®"
            />
          </article>
          <article data-reveal>
            <strong className="review-brand">◉ Arcticon®</strong>
            <blockquote>
              Within weeks, we started seeing stronger visibility, more
              qualified traffic, and a much clearer position in a highly
              competitive market across key search channels.
            </blockquote>
            <Author
              name="Erik Dahl"
              role="Marketing Lead"
              image="MYH5pjdWrBALHXyzuQ0DwdvGs"
              company="Arcticon®"
            />
          </article>
        </div>
      </section>
    </>
  );
}
export function Features() {
  return (
    <section className="section container features">
      <SectionHead
        label="Features"
        jp="特徴と強み"
        title="How We Work"
        description="A closer look at the thinking, experience, and processes that shape the work we deliver."
      />
      <div className="feature-grid">
        <article className="feature-intro">
          <Brand />
          <div>
            <h3>Turning complexity into quality</h3>
            <p>
              We simplify difficult decisions, connect fragmented workflows, and
              turn ambitious ideas into dependable systems.
            </p>
            <ul className="feature-checks">
              <li>
                <Icon name="check" />
                Strategy that guides decisions
              </li>
              <li>
                <Icon name="check" />
                <span>
                  Design that reduces friction{" "}
                  <span
                    title="We design systems, interfaces, and workflows that remove unnecessary steps, reduce confusion, and help teams move faster with less effort."
                    tabIndex="0"
                  >
                    ⓘ
                  </span>
                </span>
              </li>
              <li>
                <Icon name="check" />
                Systems that actually deliver
              </li>
            </ul>
          </div>
        </article>
        <article className="feature-phone">
          <Picture
            id="2gg04VWujN4c3InGBbUgPfdWg6A"
            alt="Phone displaying a growth curve"
          />
          <span className="floating-metric one">
            <i>↗</i>
            <span>
              <b>+68–72%</b>
              <small>Conversion lift</small>
            </span>
          </span>
          <span className="floating-metric two">
            <i>◷</i>
            <span>
              <b>Response Time</b>
              <small>Under 2 hours</small>
            </span>
          </span>
          <span className="floating-metric three">
            <i>♧</i>
            <span>
              <b>95%</b>
              <small>Client retention</small>
            </span>
          </span>
        </article>
        <article className="feature-experience">
          <div className="item-index">
            <span>[ Expertise ]</span>
            <span>実績と信頼</span>
          </div>
          <div>
            <Count value={13} suffix="+" />
            <h3>
              Years
              <br />
              Industry
              <br />
              Experience
            </h3>
          </div>
        </article>
        <article className="feature-simplicity">
          <div className="item-index">
            <h3>Simplicity</h3>
            <span>シンプルさと明快さ</span>
          </div>
          <Picture
            id="8uOoWRz4QttEt8ciU8CfesOH3s"
            alt="Red translucent sculptural ring"
          />
          <h3>Less friction. More focus.</h3>
          <p>
            We remove unnecessary complexity, streamline workflows, and create
            systems that help teams focus on what actually matters.
          </p>
        </article>
        <article className="feature-growth">
          <h3>Client Growth</h3>
          <Picture
            id="oD3M5h3Wh225SG1LwgrozEzzjtk"
            alt="A handshake between creative partners"
          />
          <div>
            <small>↑　+12% MoM</small>
            <Count value={68} suffix="%" />
            <p>Average client growth after implementation</p>
          </div>
        </article>
        <article className="feature-speed">
          <Brand />
          <Picture
            id="XhZhpfyja8yyvU2VhuTJJ6NU0UE"
            alt="Wheel representing faster execution"
          />
          <span className="floating-metric">
            <i>◷</i>
            <span>
              <b>Launch Time</b>
              <small>2–4 Weeks</small>
            </span>
          </span>
          <h3>Faster Execution</h3>
          <p>
            Less waiting. Less complexity.
            <br />
            More progress from day one.
          </p>
        </article>
      </div>
    </section>
  );
}
export function Timeline({ hiring = false }) {
  const list = hiring
    ? [
        [
          "001.",
          "Review Your Application",
          "We review your work, experience, and application to understand whether there’s a strong match for the role.",
          "bhRaBh4Z56GYC0NvzwuVP84jAk",
        ],
        [
          "02.",
          "Meet & Get Acquainted",
          "A short conversation to get to know each other, discuss the role, and make sure our expectations align.",
          "UryelLvjRCXXZmd6j9eZYb6YhIE",
        ],
        [
          "03.",
          "Dive Into Your Experience",
          "A deeper conversation about your experience, decisions, process, and how you approach real creative challenges.",
          "PWIRb7C1iMI37QFNfdFbWFCwuXM",
        ],
        [
          "04.",
          "Receive Your Offer",
          "If everything clicks, we’ll discuss the details, answer any remaining questions, and send over the final offer.",
          "tVNwKdGI7ZxExXV69wQhtzy7ZA",
        ],
      ]
    : timeline;
  return (
    <section className="section container timeline">
      <SectionHead
        label="Timeline"
        jp="歩みの記録"
        title={hiring ? "The Hiring Process" : "The Journey"}
        description="A story of design decisions, creative thinking, and continuous improvement."
      />
      <div className="timeline-grid">
        {list.map(([date, title, body, image]) => (
          <article key={date} data-reveal>
            <Picture id={image} alt={title} />
            <span className="eyebrow">{date}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className="timeline-quote">
        <p>
          We don't chase trends or add complexity for the sake of innovation. We
          focus on what creates momentum, clarity, and measurable results.
        </p>
        <Author
          name="Erik Nguyen"
          role="Head of Development"
          image="SdDA7TliFBM6Mdjm7j9b3LHp6E"
        />
      </div>
    </section>
  );
}
export function Team() {
  return (
    <section className="section container team">
      <SectionHead
        label="The team"
        jp="創造する人々"
        title="Behind Neiden."
        description="The minds, makers, and strategists who shape every project from concept to launch."
      />
      <div className="team-grid">
        {team.map((p) => (
          <article key={p.name} tabIndex="0">
            <div className="team-image">
              <Picture id={p.image} alt={p.name} />
              <blockquote>“{p.quote}”</blockquote>
              <span className="team-plus">
                <Icon name="plus" />
              </span>
            </div>
            <div className="team-caption">
              <h3>{p.name}</h3>
              <p>{p.role}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="section-foot">
        <span>Est. 2019</span>
        <Button to="/career">Join our team</Button>
      </div>
    </section>
  );
}
export function Belief() {
  return (
    <section className="section container belief">
      <Label jp="思想と理念">What we believe</Label>
      <p className="statement" data-reveal>
        Good work starts with understanding.
        <br />
        <span>
          Before design, before strategy, before execution — we focus on what
          matters and remove everything that doesn't.
        </span>
      </p>
      <div className="belief-bottom">
        <p>
          Strong brands are built through clear thinking, consistent execution,
          and decisions that support long-term goals.
        </p>
        <Author />
        <span className="signature">Astridn.</span>
      </div>
    </section>
  );
}
