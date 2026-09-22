import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects, posts } from "../data";
import { filterByCategory } from "../utils";
import {
  Author,
  Button,
  Count,
  Icon,
  Label,
  Picture,
  SectionHead,
  Title,
  usePageMotion,
} from "../components/ui";
import { ContactSection, Newsletter } from "../components/Forms";
import {
  ArticleCard,
  Articles,
  FAQ,
  ProjectCard,
} from "../components/WorkSections";
export function PageIntro({ label, jp, title, description, children }) {
  return (
    <section className="container page-intro">
      <Label jp={jp}>{label}</Label>
      <Title as="h1">{title}</Title>
      <div className="page-intro-bottom">
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
export function CollectionPage({ blog = false }) {
  const [filter, setFilter] = useState("All categories");
  const data = blog ? posts : projects;
  const categories = [
    "All categories",
    ...new Set(data.flatMap((p) => p.tags)),
  ];
  const filtered = filterByCategory(data, filter);
  usePageMotion(blog ? "blog" : "projects");
  return (
    <>
      <PageIntro
        label={blog ? "Blog" : "Portfolio"}
        jp={blog ? "読み物" : "制作実績"}
        title={blog ? "Blog Insights" : "Recent Projects"}
        description={
          blog
            ? "Thoughts on design, technology, creativity, and the ideas shaping better digital experiences."
            : "A collection of selected work across identity, digital products, websites, and creative direction."
        }
      />
      <section className="container collection">
        <div className="collection-filter">
          <label htmlFor="category-filter" className="eyebrow">
            Filter by
          </label>
          <div className="select-wrap">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              id="category-filter"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <Icon name="down" />
          </div>
          <span className="eyebrow" aria-live="polite">
            {filtered.length} {blog ? "articles" : "projects"}
          </span>
        </div>
        <div
          className={
            blog
              ? "articles-grid collection-grid"
              : "portfolio-grid collection-grid"
          }
        >
          {filtered.map((item, i) =>
            blog ? (
              <ArticleCard key={item.slug} post={item} />
            ) : (
              <ProjectCard key={item.slug} project={item} index={i} />
            ),
          )}
        </div>
      </section>
      {blog ? <Newsletter /> : <FAQ />}
      <ContactSection />
    </>
  );
}
const caseSections = [
  [
    "Intro",
    "概要と背景",
    "Finding the balance between visual expression and a system built to last.",
    "The project began with a simple goal: create a distinctive identity without unnecessary complexity. We combined expressive imagery, restrained typography, and a flexible system built for different touchpoints.",
    "The identity needed to feel expressive without becoming chaotic. We balanced photography, typography, color, and composition to create a system with enough structure and freedom to evolve.",
  ],
  [
    "Challenge",
    "課題と理解",
    "Turning strong visual ideas into one clear and recognizable identity.",
    "The early direction had character and strong visual potential, but photography, typography, and composition still felt like separate ideas rather than parts of one cohesive identity.",
    "The challenge was to create a shared visual logic without losing that expressive quality, giving the brand enough structure to remain recognizable and consistent across different formats and touchpoints.",
  ],
  [
    "Solution",
    "質問と理解",
    "Building a flexible visual system where every element works together.",
    "We established a clear framework for imagery, typography, color, and composition, defining how each element should behave while keeping the overall visual language expressive and distinctive.",
    "The resulting system balances consistency with creative freedom, giving the brand enough flexibility to adapt naturally across digital experiences, editorial layouts, campaigns, and future applications.",
  ],
  [
    "Result",
    "質問と理解",
    "A distinctive identity designed to stay recognizable as the brand evolves.",
    "The final identity brings every touchpoint into one coherent experience, creating stronger visual recognition while preserving the expressive character and personality established throughout the project.",
    "With a flexible foundation in place, the identity can continue evolving across new formats, platforms, and applications without sacrificing the clarity, consistency, or distinctive qualities that define the brand.",
  ],
];
export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  usePageMotion(slug);
  if (!project) return <NotFound />;
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const galleries =
    index === 0
      ? [
          ["cdZ65MS1EV5hQGhDbmXuE4dX9M", "4c1sZa6BkCihgjj6NxTNGlcC8sU"],
          ["jTzsjXasZsrkJu7DhMz4FSFc5jY", "2BsgiyAN557mdLcPDjJ5ML8UY"],
        ]
      : [
          ["PfiK1GbYnpJPMpfN4rs5hboo0", "ChbItJTeW34kYG344Wjt7kR3rs"],
          ["6BeUHbl4MKyebE39I4voUmEJfAY", "VD25WnaChrwEBqTfTOwK39oQ"],
        ];
  return (
    <>
      <PageIntro
        label="Selected project"
        jp="制作事例"
        title={project.title}
        description="A visual identity and digital system designed to make the brand feel clearer, sharper, and more distinctive."
      />
      <div className="container project-facts">
        {[
          [
            "Client",
            ["NORTHLINE STUDIO", "Crumina team", "DFD team", "Michael Page"][
              index
            ] || project.client,
          ],
          [
            "Services",
            index === 0
              ? "Branding, UI/UX, Web Design"
              : project.tags.join(", "),
          ],
          ["Team", "ND® Creative team"],
          ["Stack", "Framer, Figma, Cinema 4D"],
        ].map(([k, v]) => (
          <div key={k}>
            <span>{k}:</span>
            <p>{v}</p>
          </div>
        ))}
        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
          Visit project <Icon />
        </a>
      </div>
      <Picture
        id={project.image}
        alt={project.title}
        eager
        className="project-hero-image"
      />
      {caseSections.map(([label, jp, title, a, b], i) => (
        <React.Fragment key={label}>
          <section className="container section case-copy">
            <Label jp={jp}>{label}</Label>
            <div>
              <h2 data-reveal>{title}</h2>
              <div className="case-paragraphs">
                <p>{a}</p>
                <p>{b}</p>
              </div>
            </div>
          </section>
          {i === 0 && (
            <Picture
              className="container case-wide-image"
              id={project.image}
              alt={project.title}
            />
          )}{" "}
          {(i === 1 || i === 2) && (
            <div className="case-gallery container">
              {galleries[i - 1].map((id, k) => (
                <Picture
                  id={id}
                  key={id}
                  alt={`${project.title} — ${label.toLowerCase()} detail ${k + 1}`}
                />
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
      <section className="section container case-testimonial">
        <Author
          name="Elin Sørensen"
          role="Head of Product"
          image="f2jSL0jznEsOyoAcVARkFtZWNY"
          company="Fjordwave®"
        />
        <blockquote>
          We finally had a brand system everyone could understand and use.
          Clear, collaborative, and built to scale.
        </blockquote>
        <div className="case-result-stats">
          <div>
            <Count value={68} prefix="+" suffix="%" />
            <p>Increase in qualified leads</p>
          </div>
          <div>
            <Count value={3} suffix="x" />
            <p>Higher conversion rate</p>
          </div>
        </div>
      </section>
      <section className="section container next-project">
        <SectionHead label="Selected work" title="Next project" jp="制作事例" />
        <ProjectCard project={next} />
      </section>
      <ContactSection />
    </>
  );
}
export const articleIntro =
  "Modern digital products compete for attention every second. While visual aesthetics can attract visitors, it's the overall experience that determines whether people stay, engage, and ultimately become customers. Great UI/UX design isn't about making interfaces look impressive — it's about making every interaction feel natural.";
export function ArticleDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  usePageMotion(slug);
  if (!post) return <NotFound />;
  return (
    <>
      <section className="article-hero">
        <Picture id={post.image} alt={post.title} eager />
        <div className="article-hero-shade" />
        <div className="container article-hero-content">
          <Label jp="投稿">Post</Label>
          <Title as="h1">{post.title}</Title>
          <div className="article-hero-description">
            <p>{post.excerpt}</p>
            <Author
              name={post.author}
              role="Head of Content"
              image={post.avatar}
            />
            <div className="eyebrow">
              {post.date}　 /　{post.minutes} min. read
            </div>
          </div>
        </div>
      </section>
      <section className="container article-body-layout section">
        <aside>
          <Link className="back-link" to="/blog">
            ← Back to Articles
          </Link>
          <div className="eyebrow article-reading">
            {post.minutes} min. read
          </div>
        </aside>
        <article className="prose">
          <p className="prose-intro">{articleIntro}</p>
          <p>
            Successful design starts with understanding people, not software.
            Before colors, typography, or animations are considered, designers
            need to identify user goals, common frustrations, and business
            objectives.
          </p>
          <p>
            Every design decision should remove friction rather than introduce
            it. The best interfaces rarely draw attention to themselves.
            Instead, they help users accomplish tasks quickly, confidently, and
            without unnecessary effort.
          </p>
          <Picture
            id="H7n1L97Ku2shlmdqtD0ivHx34Dk"
            alt="A study in interface design"
          />
          <p>
            When people think about UI/UX design, they often picture polished
            interfaces, modern typography, and smooth animations. While those
            elements certainly matter, they represent only the final layer of a
            much deeper process. Good design is not measured by how impressive
            it looks in a portfolio — it is measured by how effortlessly people
            achieve their goals.
          </p>
          <p>
            Every interface is a conversation between a product and its users.
            The clearer that conversation becomes, the less attention people pay
            to the interface itself. Instead of wondering where to click or what
            happens next, they simply move forward with confidence. That's when
            design becomes invisible, and invisible design is often the most
            successful.
          </p>
          <p>
            A great experience doesn't happen by accident. It comes from
            understanding behavior, simplifying complexity, and making thousands
            of deliberate decisions that users may never consciously notice.
          </p>
          <h2>Every Decision Has a Purpose</h2>
          <p>
            Strong products are rarely built from isolated visual ideas. They
            grow from systems. Typography establishes hierarchy, spacing
            improves readability, colors reinforce meaning, and motion provides
            feedback. None of these elements exist independently — they support
            one another to create a coherent experience.
          </p>
          <p>
            The same principle applies to interactions. Buttons should feel
            predictable. Navigation should remain consistent. Components should
            behave the same way across every page. When users don't have to
            relearn the interface, they naturally trust the product more.
          </p>
          <p>
            This consistency also benefits the team behind the product.
            Designers work faster, developers build with fewer ambiguities, and
            future updates become easier because every new feature follows an
            established visual language rather than introducing another
            exception.
          </p>
          <h2>Designing For The Long Term</h2>
          <p>
            The best digital products are designed to evolve. Businesses change,
            content grows, and new features appear over time. Without a scalable
            foundation, every update introduces visual inconsistency and
            technical debt.
          </p>
          <p>
            That's why modern UI/UX design focuses on systems instead of
            isolated pages. Reusable components, flexible layouts, and clear
            design principles allow products to expand without losing their
            identity. Growth becomes an extension of the original vision rather
            than a complete redesign every few months.
          </p>
          <p>
            Ultimately, good design isn't about trends or aesthetics alone. It's
            about creating products that remain useful, understandable, and
            enjoyable long after launch. When every interaction feels
            intentional, users notice the product — not the effort required to
            use it. That's where thoughtful UI/UX design creates lasting value.
          </p>
        </article>
      </section>
      <Newsletter />
      <Articles />
      <ContactSection />
    </>
  );
}
export function NotFound() {
  return (
    <>
      <PageIntro
        label="404"
        jp="ページなし"
        title="Page not found"
        description="Four core disciplines. One clear goal: helping brands communicate, grow, and stay memorable."
      >
        <Button to="/">Go back home</Button>
      </PageIntro>
      <div className="container error-number" aria-hidden="true">
        404<span>Error</span>
      </div>
      <ContactSection />
    </>
  );
}
