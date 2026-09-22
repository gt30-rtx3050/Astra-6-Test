import React from "react";
import { Link } from "react-router-dom";
import { PageIntro } from "./Collections";
import {
  Author,
  Button,
  Count,
  Label,
  Picture,
  SectionHead,
  Title,
  usePageMotion,
} from "../components/ui";
import { ContactForm, ContactInfo, ContactSection } from "../components/Forms";
import { Team, Timeline } from "../components/StudioSections";
import { FAQ } from "../components/WorkSections";
export function About() {
  usePageMotion("about");
  return (
    <>
      <PageIntro
        label="Company"
        jp="スタジオ紹介"
        title="About ñeiden®"
        description="A creative studio built around curious minds, thoughtful design, and a shared passion for meaningful work."
      >
        <span className="eyebrow">2019–26©</span>
      </PageIntro>
      <section className="section container philosophy">
        <Label jp="私たちの理念">Our philosophy</Label>
        <p className="statement" data-reveal>
          Neiden Studio started in 2019 with a simple belief: good design should
          feel clear, relevant, and unmistakably human. We still build
          everything around that idea.
        </p>
        <div className="about-philosophy-grid">
          <Picture
            id="9fA5xHjS4FUTNCT6E4DatxM2ut4"
            alt="Neiden studio philosophy"
          />
          <div>
            <span className="signature">Neiden Co.</span>
            <p>
              We believe the strongest ideas come from understanding the problem
              first. Strategy gives every decision purpose, while design turns
              that thinking into something people can see and feel.
            </p>
            <p>
              Our work brings identity, digital experiences, and technology into
              one coherent system. Nothing exists in isolation, and nothing is
              added simply to make more noise.
            </p>
          </div>
        </div>
        <div className="section-foot">
          <span>Est. 2019</span>
          <span>18+ projects</span>
        </div>
      </section>
      <section className="section container">
        <SectionHead
          label="Studio life"
          jp="日々の風景"
          title="Life at Neiden"
          description="A glimpse into the people, places, and everyday moments that shape our studio."
        />
        <div className="studio-life-grid">
          {[
            "x7cKYwdgbA4ORxShoEzSpWAfRk",
            "tpO9ofyUmQotzYYKJxr3KxkH9qE",
            "YSLys0U6nLp4DTexQXlXexx64A",
          ].map((id, i) => (
            <Picture key={id} id={id} alt={`Life at Neiden — ${i + 1}`} />
          ))}
        </div>
        <div className="stats-strip">
          <div>
            <span>Projects Delivered · +6 This Year</span>
            <Count value={45} suffix="+" />
          </div>
          <div>
            <span>Years Creating · Since 2019</span>
            <Count value={7} suffix="Y" />
          </div>
          <div>
            <span>Clients Worldwide · 90% Referrals</span>
            <Count value={40} suffix="+" />
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHead
          label="Together"
          jp="共につくる"
          title="One Studio."
          description="Different perspectives, disciplines, and experiences come together to shape stronger ideas and more thoughtful work."
        />
        <div className="together-grid">
          {[
            ["Different Perspectives", "JRHDYV2WZNOZVCXWL2Z0rnmrPrY"],
            ["Different Disciplines", "YSLys0U6nLp4DTexQXlXexx64A"],
            ["One Studio", "NNSUobq8lPFNxj8uNsBHBLm7Ijw"],
          ].map(([title, id], i) => (
            <article key={title}>
              <div className="item-index">
                <span>00{i + 1}. /</span>
                <span>物語と個性</span>
              </div>
              <Picture id={id} alt={title} />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="section container awards-list">
        <SectionHead
          label="Recognition"
          jp="受賞歴"
          title="Our awards"
          description="Recognition for selected work across digital design, identity, and creative development."
        >
          <Button to="/projects">View our work</Button>
        </SectionHead>
        <div className="award-row eyebrow">
          <span>Award</span>
          <span>Recognition</span>
          <span>Year</span>
        </div>
        {[
          ["Awwwards", "Site of the Day", "26©"],
          ["CSS DESIGN AWARDS", "Website of the Day", "26©"],
          ["Awwwards", "Honorable Mention", "25©"],
          ["CSS DESIGN AWARDS", "Special Kudos", "25©"],
          ["ORPETRON", "Site of the Day", "25©"],
          ["CSS WINNER", "Website of the Day", "24©"],
        ].map(([a, b, c], i) => (
          <div className="award-row" key={i}>
            <h3>{a}</h3>
            <span>{b}</span>
            <span>{c}</span>
          </div>
        ))}
      </section>
      <Timeline />
      <Team />
      <ContactSection />
    </>
  );
}
export function Contact() {
  usePageMotion("contact");
  return (
    <>
      <PageIntro
        label="Contact us"
        jp="お問い合わせ"
        title="Start With A Conversation"
        description="Have a question, an idea, or just want to say hello? We’d love to hear from you."
      />
      <section className="container contact-page-grid">
        <ContactForm />
        <ContactInfo />
      </section>
      <section className="container section contact-testimonials">
        <article>
          <Picture id="1Wpy1LPGyzwqotalEwpCDj5D8" alt="Client collaboration" />
          <blockquote>
            Working with the team completely changed how we approached our
            digital presence. Everything became clearer, more consistent, and
            much easier for our customers to understand and use.
          </blockquote>
          <Author
            name="Kya Stubber"
            role="Team lead"
            company="Open Project One®"
          />
        </article>
        <article>
          <Picture id="svRf9MxMPSwrPILL4qXQw5Dqqe8" alt="Nextwave project" />
          <blockquote>
            The new website immediately felt easier to navigate. Customers were
            finding information faster, and our team finally had a platform that
            was simple to manage and scale.
          </blockquote>
          <Author
            name="Maja Løkke"
            role="Product Manager"
            image="cP3HCisFbIUQZvyfZhvAKkts"
            company="Nextwave®"
          />
        </article>
      </section>
      <FAQ />
    </>
  );
}
export function Career() {
  usePageMotion("career");
  return (
    <>
      <PageIntro
        label="Career"
        jp="採用情報"
        title="Careers at Neiden"
        description="Four core disciplines. One clear goal: helping brands communicate, grow, and stay memorable."
      >
        <span className="vacancy-badge">5 open vacancies</span>
      </PageIntro>
      <section className="section container">
        <SectionHead
          label="Steps"
          jp="構想から公開へ"
          title="Current Openings"
          description="From initial thoughts and early sketches to tested solutions and live products — we cover it all."
        />
        <div className="career-grid">
          {[
            "AI Consultant (Workflow & Strategy)",
            "AI Systems Engineer",
            "AI Consultant (Workflow & Strategy)",
            "AI Systems Engineer",
          ].map((title, i) => (
            <article key={i} data-reveal>
              <div className="item-index">
                <span>00{i + 1}. /</span>
                <span>物語と個性</span>
              </div>
              {i % 2 === 0 && (
                <Picture
                  id={
                    i === 0
                      ? "3a2UiUxpkoWkTjn9s3T1dnnzIvg"
                      : "aloYrBf0BXJKdEiAIne3Lwai33A"
                  }
                  alt="Working at Neiden"
                />
              )}
              <h3>{title}</h3>
              <p>
                Work directly with clients to map operations, identify
                automation opportunities, and design AI systems that fit real
                workflows.
              </p>
              <span className="eyebrow">Remote / Hybrid — Full-time</span>
              <Button to="/contacts">Apply for role</Button>
            </article>
          ))}
        </div>
        <div className="section-foot">Est. 2019</div>
      </section>
      <Timeline hiring />
      <Team />
      <ContactSection />
    </>
  );
}
