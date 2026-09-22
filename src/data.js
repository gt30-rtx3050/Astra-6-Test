import localAssets from "./local-assets.json";
export const asset = (id, width = 1200) =>
  localAssets.includes(id)
    ? `/assets/${id}.webp`
    : `https://framerusercontent.com/images/${id}.png?scale-down-to=${width}`;
export const projects = [
  {
    slug: "featured-1",
    title: "Identity Through Visual Contrast",
    image: "lK1Tvi0mTDQbz8grrdkpiyIWMeU",
    tags: ["E-Commerce", "UI/UX", "Frontend"],
    year: 2025,
    client: "NORTHLINE STUDIO",
  },
  {
    slug: "featured-2",
    title: "Digital Products Through Interaction",
    image: "gz751Ln7TDowgGszqhywuWvSj4",
    tags: ["Web Design", "Branding"],
    year: 2025,
    client: "CLANDESITE",
  },
  {
    slug: "featured-3",
    title: "Brand Systems for Modern Audiences",
    image: "WEQuOOgSyoJrZzovSkpjjZOhK0",
    tags: ["Backend", "Frontend"],
    year: 2025,
    client: "CLANDESITE",
  },
  {
    slug: "featured-4",
    title: "Visual Languages for Growing Brands",
    image: "EKGRYKG8h9YjXQ7KKKuEKY8Yhyk",
    tags: ["UI/UX", "E-Commerce", "Branding"],
    year: 2025,
    client: "CLANDESITE",
  },
  {
    slug: "landing-page-for-an-online-course-copy",
    title: "Clearer Interfaces for Everyday Use",
    image: "jTzsjXasZsrkJu7DhMz4FSFc5jY",
    tags: ["E-Commerce", "SaaS", "UI/UX"],
    year: 2025,
    client: "CLANDESITE",
  },
  {
    slug: "corporate-website-for-an-it-company",
    title: "Building Better Digital Experiences",
    image: "GNKW2p6tofJIAe363P7yHitHX4",
    tags: ["E-Commerce", "UI/UX"],
    year: 2025,
    client: "CLANDESITE",
  },
  {
    slug: "data-driven-ux-decisions",
    title: "Brands Built Through Consistency",
    image: "H7n1L97Ku2shlmdqtD0ivHx34Dk",
    tags: ["UI/UX", "Backend"],
    year: 2024,
    client: "CLANDESITE",
  },
  {
    slug: "strategic-thinking-and-brand-foundations-for-dribbble",
    title: "Exploring New Digital Interactions",
    image: "ntx4RF0pVgkv50EiHx03cgEVBeA",
    tags: ["Branding", "Web Design", "UI/UX"],
    year: 2024,
    client: "CLANDESITE",
  },
  {
    slug: "creating-a-scalable-system-for-growth",
    title: "Shaping Brands Through Design",
    image: "S5SlUxzXWxG7YPWY61P4MrOl23Q",
    tags: ["Frontend", "Backend", "UI/UX"],
    year: 2025,
    client: "CLANDESITE",
  },
];
export const services = [
  {
    title: "Brand Positioning & Identity",
    jp: "物語と個性",
    image: "SFtrpgoY0jrw6ld77yTQ7zXOd4",
    second: "ThSJMmo8A9ev11PSsUakGJNops",
    price: 4500,
    description:
      "We define how your brand looks, speaks, and is remembered. From positioning and visual identity to scalable design systems, every element is built to create recognition and consistency.",
    tags: [
      "Visual identity",
      "Typography systems",
      "Brand Positioning",
      "Logo design",
      "Packaging design",
      "Rebranding",
    ],
  },
  {
    title: "Product Experience Design",
    jp: "体験と設計",
    image: "gpwwteOl8wQDmMNdmeJasTo",
    second: "4c1sZa6BkCihgjj6NxTNGlcC8sU",
    price: 3500,
    description:
      "We design websites, platforms, and digital products that balance usability, performance, and visual clarity. Every interaction is shaped to help users move faster and make better decisions.",
    tags: [
      "UX Design",
      "UI Systems",
      "Product Strategy",
      "Wireframing",
      "Prototyping",
      "Design Audits",
    ],
  },
  {
    title: "Social Presence & Content",
    jp: "影響と発信",
    image: "A26lxSV6q0TIIPqbUrKvmy4SK0",
    second: "rfmUc2KkjlbXoRGKPOx6FB3FA",
    price: 2500,
    description:
      "We create content systems that keep brands active, consistent, and recognizable across social platforms. From strategy to execution, every touchpoint supports long-term brand growth.",
    tags: [
      "Content Strategy",
      "Creative Campaigns",
      "Art Direction",
      "Community Building",
      "Brand Content",
      "Social Media",
    ],
  },
  {
    title: "Organic Growth & Visibility",
    jp: "検索と成長",
    image: "gz751Ln7TDowgGszqhywuWvSj4",
    second: "gSpzlP9lUeXmDY0EogvSg85aJR0",
    price: 6000,
    description:
      "We increase visibility where it matters most. Through SEO, content strategy, and technical improvements, we help brands attract the right audience and create lasting growth.",
    tags: [
      "SEO Strategy",
      "Technical SEO",
      "Content Strategy",
      "Keyword Research",
      "Site Performance",
      "Search Analytics",
    ],
  },
];
export const team = [
  {
    name: "Lars Nyström",
    role: "Lead Designer",
    image: "W89niMvUYx7o6kTt52uPfheQG6A",
    quote:
      "For me, design is about turning abstract ideas into systems people actually enjoy using.",
  },
  {
    name: "Freya Lund",
    role: "Strategy Lead",
    image: "vw8Iqt6UnVn6lGkJe8diqV4SoNo",
    quote:
      "A good strategy connects dots others don’t even see — and turns them into opportunities.",
  },
  {
    name: "Erik Nguyen",
    role: "Web Developer",
    image: "HcgCf0ZSohbFk176Lx9OHOXlPQ",
    quote:
      "I believe great code is like great design — clean, scalable, and invisible to the user, but vital to everything.",
  },
  {
    name: "Henrik Olsen",
    role: "Content Creator",
    image: "V0l9T2bH1JmE7RN4EXYQf0OlE",
    quote:
      "Half my job is pressing a button, the other half is making everyone believe it’s real art anyway.",
  },
];
export const faqs = [
  [
    "How long does a typical project take?",
    "Project timelines vary depending on scope and complexity, but most engagements fall between 4–8 weeks. That includes everything from research and strategy to design, development, and launch. For smaller projects, like a single-page site or brand refresh, we can move faster. For larger digital platforms, timelines extend as needed — but we always communicate clear milestones and deliverables along the way.",
  ],
  [
    "What’s included in the subscription plans?",
    "Both Subscription and Subscription+ give you access to the full Neiden team — designers, developers, and strategists working on your projects. The base Subscription includes unlimited active requests, ongoing support, and priority communication. Subscription+ adds faster turnaround and extended support hours, making it ideal for companies that need even more speed and availability. In both cases, you’re not hiring a freelancer — you’re getting an entire studio on your side.",
  ],
  [
    "Do you work with small businesses or only larger companies?",
    "We collaborate with clients of all sizes. Many of our projects are with startups and small businesses that need strong branding or a reliable website to make their mark. At the same time, we partner with larger companies and established brands on complex, long-term initiatives. What matters most is not the size of your company, but the clarity of your vision and our ability to bring it to life.",
  ],
  [
    "How does the per-project plan work?",
    "The per-project plan is designed for clients who prefer clear boundaries and one-off deliverables instead of ongoing collaboration. Together we define the scope, timeline, and milestones before the project starts. Pricing is agreed upfront, so there are no surprises later. This option is perfect for tasks like a rebrand, a website launch, or a campaign that has a clear start and finish. Once the project is delivered, you can choose to continue with a subscription or wrap it up — completely flexible.",
  ],
  [
    "What if I need something outside your listed services?",
    "That happens more often than you’d think. Not every need fits neatly into “branding,” “web design,” or “SEO.” If you have something unusual in mind — like a campaign, a specific integration, or a hybrid request — we’re happy to talk it through. In many cases, we either cover it ourselves or bring in a trusted partner. The goal is always the same: to give you a solution that fits your business, not force your idea into a template.",
  ],
];
const defaultExcerpt =
  "The timeline for building a website depends on its complexity and specific requirements. On average.";
export const posts = [
  {
    slug: "web-accessibility-why-it-s-non-negotiable-copy",
    title:
      "Why UI/UX Design Is the Foundation of Every Successful Digital Product",
    image: "cdZ65MS1EV5hQGhDbmXuE4dX9M",
    author: "Henrik Olsen",
    avatar: "0gQ2Sz7vt9F3tVZoZPiRdQTXXDM",
    date: "Jul 7, 2025",
    minutes: 4,
    excerpt:
      "How Thoughtful Design Turns Simple Websites Into Memorable Digital Experiences",
    tags: ["Web Standards & Accessibility", "Responsive Websites"],
  },
  {
    slug: "headless-cms-explained-pros-cons-use-cases-copy",
    title: "How Motion Design Can Make Digital Experiences Feel More Natural",
    image: "CLrHpIX9lweWoiEAFp1PMU9y434",
    author: "Ingrid Halvorsen",
    avatar: "A0oYlUlKja7x4S2LwspJ4BfUxQ8",
    date: "Jul 12, 2025",
    minutes: 4,
    excerpt: defaultExcerpt,
    tags: ["CMS & Content Management", "Development Strategy"],
  },
  {
    slug: "responsive-design-importance-2025",
    title:
      "Why Strong Visual Identity Matters More in an Increasingly Digital World",
    image: "4c1sZa6BkCihgjj6NxTNGlcC8sU",
    author: "Ingrid Halvorsen",
    avatar: "pG6QAdnOk7xGl0RTerFadgSc",
    date: "Jul 12, 2025",
    minutes: 7,
    excerpt: defaultExcerpt,
    tags: ["UI/UX Design", "Responsive Websites", "CMS & Content Management"],
  },
  {
    slug: "choosing-tech-stack-web-app",
    title: "How Better UX Design Can Turn More Visitors Into Loyal Customers",
    image: "jTzsjXasZsrkJu7DhMz4FSFc5jY",
    author: "Ingrid Halvorsen",
    avatar: "oIZoqADec9s18uqUPlps5LJjNU0",
    date: "Jun 18, 2025",
    minutes: 16,
    excerpt: defaultExcerpt,
    tags: ["Development Strategy", "Performance Optimization"],
  },
  {
    slug: "website-performance-optimization-tools",
    title: "Why Every Successful Website Starts With a Clear Content Strategy",
    image: "2BsgiyAN557mdLcPDjJ5ML8UY",
    author: "Ingrid Halvorsen",
    avatar: "a1Ky3hwZVqtXkmXrRPDAXnLpOY",
    date: "Jun 23, 2025",
    minutes: 20,
    excerpt: defaultExcerpt,
    tags: ["Performance Optimization", "UI/UX Design"],
  },
  {
    slug: "web-accessibility-best-practices",
    title:
      "How Design Systems Help Teams Build Better Digital Products at Scale",
    image: "kGQnqFLBWbxbkBCy8QkHL2IVJk",
    author: "Ingrid Halvorsen",
    avatar: "9Te4DPMVals1KSbzkvj9e6IiEs",
    date: "Jul 7, 2025",
    minutes: 6,
    excerpt: defaultExcerpt,
    tags: [
      "Web Standards & Accessibility",
      "Responsive Websites",
      "CMS & Content Management",
    ],
  },
  {
    slug: "headless-cms-explained",
    title:
      "Why Simplicity Remains One of the Hardest Things to Achieve in Design",
    image: "vHt0macOnKgBMjIOBPAB4npOh1Y",
    author: "Ingrid Halvorsen",
    avatar: "9bdeFEkNDy21upbC9FXwzuvkz8",
    date: "Jul 12, 2025",
    minutes: 4,
    excerpt: defaultExcerpt,
    tags: [
      "CMS & Content Management",
      "Web Standards & Accessibility",
      "UI/UX Design",
    ],
  },
];
export const timeline = [
  [
    "2019–20",
    "Building the Studio Foundation",
    "Started as a small design practice focused on websites, branding, and digital experiences.",
    "2UPEP5eOs8grj3KkpBKgSNMBf8",
  ],
  [
    "2021–22",
    "Expanding Beyond Pure Design",
    "Added new capabilities, collaborated with specialists, and took on larger business challenges.",
    "9ioTJc5KVyiBw2T5g6NNwYfcivE",
  ],
  [
    "2023–24",
    "Scaling Projects and Processes",
    "Developed a more structured workflow while delivering increasingly complex digital products.",
    "wDos73x1MwKSjDhAXsdlyXz7vZA",
  ],
  [
    "2025–Present",
    "Focusing on Long-Term Partnerships",
    "Working closely with ambitious brands through ongoing collaboration, design leadership, and continuous improvement.",
    "Q2JP3FJBsaqiGQ1RNK0L0x7I",
  ],
];
export const logos = [
  "GPHFrdcqpiyZD1XbfWYBictbM",
  "PPSntOOQgi595cF6FsDeGs2RQ",
  "kh1IcXJf82XQpzV48TLtX1DKd4",
  "uDSZNe6QuTNkX9dFHetJG95cLQ",
  "gpYEgh8ObKJWllieyd9p5U28G4",
  "Qt2DgHkxpK2BypoG7f0199cF10",
];
export const avatars = [
  "KhsMEuf8YeOVTfeZIX7N0GRtjts",
  "N97fVKZ6SNy7gEfd3xX0AtEWXWs",
  "cQRkOw61thT0YL73tWmNOYblF0",
  "UuFHF4dLLkC2LUYsvEwMry76BYk",
];
