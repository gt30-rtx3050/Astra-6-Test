import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/inter-tight/latin-400.css";
import "@fontsource/inter-tight/latin-ext-400.css";
import "@fontsource/inter-tight/latin-500.css";
import "@fontsource/inter-tight/latin-ext-500.css";
import "@fontsource/inter-tight/latin-600.css";
import "@fontsource/inter-tight/latin-ext-600.css";
import "@fontsource/inter-tight/latin-700.css";
import "@fontsource/inter-tight/latin-ext-700.css";
import "@fontsource/oooh-baby/latin-400.css";
import "./japanese-font.css";
import "./styles.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import {
  CollectionPage,
  ProjectDetail,
  ArticleDetail,
  NotFound,
} from "./pages/Collections";
import { About, Contact, Career } from "./pages/Studio";
import { Legal, ThankYou } from "./pages/Legal";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="projects" element={<CollectionPage />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="blog" element={<CollectionPage blog />} />
          <Route path="blog/:slug" element={<ArticleDetail />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="privacy" element={<Legal privacy />} />
          <Route path="terms-of-services" element={<Legal />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
