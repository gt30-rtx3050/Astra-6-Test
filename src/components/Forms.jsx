import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Label, SectionHead, Socials, Title, Icon } from "./ui";
export function Availability() {
  return (
    <div className="availability">
      <span>Projects for May</span>
      <span className="availability-bars" aria-hidden="true">
        ▰▰▰<i>▰▰</i>
      </span>
      <span>3 left</span>
    </div>
  );
}
function LegalNote() {
  return (
    <p className="legal-note">
      Submitting you agree with <Link to="/privacy">Privacy Policy</Link> and{" "}
      <Link to="/terms-of-services">Terms of Service.</Link>
    </p>
  );
}
export function ContactForm() {
  const [state, setState] = useState(""),
    [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (!endpoint) {
      setState(
        "This preview does not send messages. You can copy your message or contact hello@neiden.project directly.",
      );
      return;
    }
    setBusy(true);
    try {
      const r = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw Error();
      setState("Thank you. Your message has been sent.");
      form.reset();
    } catch {
      setState(
        "Your message could not be sent. Please try again, or email hello@neiden.project.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Name
          <input
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
            maxLength={150}
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (000) 000-0000"
            maxLength={40}
          />
        </label>
      </div>
      <label>
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your email address"
          required
          maxLength={254}
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          placeholder="Tell us about your project"
          required
          rows={3}
          maxLength={10000}
        />
      </label>
      <Button type="submit" disabled={busy}>
        {busy ? "Sending…" : "Start conversation"}
      </Button>
      <LegalNote />
      {state && (
        <p role="status" className="form-status">
          {state}
        </p>
      )}
      <div className="working-hours">
        <span className="eyebrow">Working times</span>
        <p>
          Mon–Fri: 09:00 – 18:00
          <br />
          Sat: 10:00 – 16:00
        </p>
      </div>
    </form>
  );
}
export function ContactInfo() {
  return (
    <div className="contact-info">
      <Availability />
      <div>
        <p className="eyebrow">Contacts</p>
        <a href="tel:+13125552468">+1 (312) 555-2468</a>
        <a className="contact-email" href="mailto:hello@neiden.project">
          hello@neiden.project <Icon />
        </a>
        <p>Dronningens Gate 15, 0152 Oslo, Norway</p>
      </div>
      <div>
        <p className="eyebrow">Socials</p>
        <Socials />
      </div>
      <p className="local-time">
        Local time:{" "}
        {new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Oslo",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date())}{" "}
        / Oslo
      </p>
    </div>
  );
}
export function ContactSection() {
  return (
    <section className="section contact-section container">
      <SectionHead
        label="Contacts"
        jp="対話と連絡"
        title="Let's Talk"
        description="Whether you're starting fresh or scaling further, we're here to help bring your vision to life."
      />
      <div className="contact-grid">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
export function Newsletter() {
  const [status, setStatus] = useState("");
  async function submit(e) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
    if (!endpoint) {
      setStatus(
        "Newsletter sign-up is not connected in this preview. No email has been stored or sent.",
      );
      return;
    }
    setStatus("Subscribing…");
    try {
      const r = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!r.ok) throw Error();
      setStatus("You’re subscribed. Thank you.");
    } catch {
      setStatus("Unable to subscribe. Please try again later.");
    }
  }
  return (
    <section className="newsletter section container">
      <div>
        <Label jp="更新を受け取る">Stay updated</Label>
        <Title>Subscribe</Title>
        <p>
          Occasional updates on AI systems, architecture
          <br />
          decisions, and real deployment insights.
        </p>
      </div>
      <form onSubmit={submit}>
        <label className="sr-only" htmlFor="newsletter-email">
          Enter your email
        </label>
        <div className="newsletter-input">
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            maxLength={254}
          />
          <button aria-label="Subscribe to newsletter">
            <Icon />
          </button>
        </div>
        <LegalNote />
        {status && (
          <p role="status" className="form-status">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
