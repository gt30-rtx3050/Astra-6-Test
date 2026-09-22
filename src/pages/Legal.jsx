import React from "react";
import { Link } from "react-router-dom";
import { PageIntro, articleIntro } from "./Collections";
import { Button, usePageMotion } from "../components/ui";
import { ContactSection, Newsletter } from "../components/Forms";
const terms = [
  [
    "Who we are",
    [
      'Neiden ("we", "us", "our") provides digital products, including website templates for Framer. By purchasing, downloading, or using our products, you agree to these Terms of Service.',
      "Contact: fordelabteam@gmail.com",
    ],
  ],
  [
    "Scope",
    [
      "These Terms apply to visitors of our website and subdomains, customers purchasing or downloading our templates, and partners or collaborators engaging with us in relation to our products.",
      "These Terms do not apply to third-party websites or services linked from our site.",
    ],
  ],
  [
    "Eligibility",
    [
      "By using our site and purchasing our products, you confirm that you are at least 18 years old or have legal capacity to enter into contracts in your jurisdiction, and you are not prohibited from using our services under applicable laws.",
    ],
  ],
  [
    "Products & license",
    [
      "Upon purchase, you are granted a non-exclusive, non-transferable license to use the Framer template for your own projects or client work.",
      "You may not resell, redistribute, sublicense, or claim ownership of our templates.",
      "Modifications are allowed, but derivative versions remain subject to this license.",
    ],
  ],
  [
    "Payments & refunds",
    [
      "All prices are listed on our website and processed via third-party payment providers. Taxes may be added based on your location and applicable laws.",
      "Due to the digital nature of our products, all sales are final and non-refundable, unless required by law.",
    ],
  ],
  [
    "Account & access",
    [
      "Some products may require you to create an account or provide details to receive updates.",
      "You are responsible for maintaining the confidentiality of your account credentials. Unauthorized sharing of access, downloads, or licenses is strictly prohibited.",
    ],
  ],
  [
    "Intellectual property",
    [
      "All templates, assets, branding, and content remain the intellectual property of Neiden. Purchase does not transfer ownership, only usage rights as described in Section 4. Unauthorized use may result in termination of your license and legal action.",
    ],
  ],
  [
    "Prohibited uses",
    [
      "You agree not to resell or distribute our templates without permission; use our products for unlawful, defamatory, or harmful purposes; or reverse-engineer or attempt to extract source files in ways not permitted by the license.",
    ],
  ],
  [
    "Availability & updates",
    [
      "We aim to ensure availability of downloads and updates but cannot guarantee uninterrupted access. We may update or discontinue products at any time. Updates may include bug fixes, improvements, or design changes.",
    ],
  ],
  [
    "Disclaimers",
    [
      'Our products are provided "as is" without warranties of any kind, express or implied. We do not guarantee compatibility with all browsers, devices, or third-party services. Use of our templates is at your own risk.',
    ],
  ],
  [
    "Limitation of liability",
    [
      "To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from use of our products. Our total liability for any claim shall not exceed the amount you paid for the product in question.",
    ],
  ],
  [
    "Indemnification",
    [
      "You agree to indemnify and hold harmless Neiden from any claims, damages, or liabilities arising from your misuse of our products or breach of these Terms.",
    ],
  ],
  [
    "Governing law",
    [
      "These Terms are governed by the laws of the jurisdiction where Neiden is registered, unless otherwise required by consumer protection laws in your country.",
    ],
  ],
  [
    "Changes to these Terms",
    [
      'We may update these Terms from time to time. Updates will be posted on this page with an updated "Last updated" date. Continued use of our products after changes means you accept the revised Terms.',
    ],
  ],
  [
    "Contact",
    [
      "Questions about these Terms? fordelabteam@gmail.com",
      "If email isn’t an option, write to our registered address listed above.",
      "This document is provided for informational purposes and does not constitute legal advice.",
    ],
  ],
];
export function Legal({ privacy = false }) {
  usePageMotion(privacy ? "privacy" : "terms");
  return (
    <>
      <PageIntro
        label={privacy ? "Privacy" : "Terms"}
        jp={privacy ? "個人情報保護" : "利用条件"}
        title={privacy ? "Privacy policy" : "Terms of services"}
        description="Four core disciplines. One clear goal: helping brands communicate, grow, and stay memorable."
      >
        <Button to="/">Back to Home</Button>
      </PageIntro>
      <section className="section container article-body-layout">
        <aside className="legal-toc">
          <span className="eyebrow">On this page</span>
          {terms.map(([title], i) => (
            <a href={`#legal-${i}`} key={title}>
              {i + 1}. {title}
            </a>
          ))}
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
            it.
          </p>
          <p>
            The best interfaces rarely draw attention to themselves. Instead,
            they help users accomplish tasks quickly, confidently, and without
            unnecessary effort.
          </p>
          {terms.map(([title, paras], i) => (
            <section id={`legal-${i}`} key={title}>
              <h2>
                {i + 1}. {title}
              </h2>
              {paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
        </article>
      </section>
      <Newsletter />
      <ContactSection />
    </>
  );
}
export function ThankYou() {
  return (
    <>
      <PageIntro
        label="Purchase complete"
        jp="購入完了"
        title="Neiden Is Ready"
        description="We've sent your Remix link to the email address you used during checkout."
      />
      <section className="container thank-you-content">
        <p>
          This is a recreated preview page. No purchase or delivery has occurred
          here.
        </p>
        <p>Can't find the email? Check your Spam or Promotions folder.</p>
        <p>
          Please contact us directly if your email wasn't delivered for some
          reason via email at{" "}
          <a href="mailto:fordelabteam@gmail.com">fordelabteam@gmail.com</a> or
          on <a href="https://x.com/Fordelab">X / Fordelab</a>.
        </p>
        <a className="button" href="mailto:fordelabteam@gmail.com">
          Contact us ↗
        </a>
      </section>
      <ContactSection />
    </>
  );
}
