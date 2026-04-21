import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  doneItems,
  educationItems,
  fellowshipItems,
  leadershipItems,
  navItems,
  profile,
  recognitionItems,
  researchItems,
  sitePages,
  skillGroups,
  thoughts,
  trainingItems,
  trustSignals,
  workItems,
} from "./content.js";

const siteUrl = "https://sakshyambanjade.com.np";
const defaultImagePath = "/og-image.png";
const defaultImageUrl = `${siteUrl}${defaultImagePath}`;
const defaultDescription =
  "Sakshyam Banjade is an AI builder, researcher, and founder from Nepal working on applied AI systems, research, fellowship programs, and technology writing.";

function setMeta(name, content, attribute = "name") {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setJsonLd(data) {
  let tag = document.head.querySelector('script[data-seo-jsonld="true"]');
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.setAttribute("data-seo-jsonld", "true");
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}

function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

function useSeo({ title, description, path = "/", type = "website", structuredData, robots = "index, follow" }) {
  useEffect(() => {
    const url = `${siteUrl}${path}`;
    document.title = title;
    setMeta("description", description);
    setMeta("author", "Sakshyam Banjade");
    setMeta("robots", robots);
    setMeta("theme-color", "#ffffff");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", defaultImageUrl, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:image:alt", "Sakshyam Banjade - AI builder, researcher, and founder", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", defaultImageUrl);
    setMeta("twitter:image:alt", "Sakshyam Banjade - AI builder, researcher, and founder");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    if (structuredData) setJsonLd(structuredData);
  }, [description, path, robots, structuredData, title, type]);
}

function useRedirectFallback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (!redirect) return;

    const cleanPath = decodeURIComponent(redirect);
    navigate(cleanPath, { replace: true });
  }, [location.search, navigate]);
}

function useRouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash.replace("#", "");
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(
      "section > h2, section > p, .entry, .quote, .quick-links, .tweet-box, .contact-list"
    );

    targets.forEach((target, index) => {
      target.classList.remove("in-view");
      target.classList.add("motion-item");
      target.style.transitionDelay = reduceMotion ? "0ms" : `${Math.min(index % 5, 4) * 45}ms`;
    });

    if (reduceMotion) {
      targets.forEach((target) => target.classList.add("in-view"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          instance.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location.pathname]);
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("about");
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    if (!onHome) {
      setActiveId("");
      return undefined;
    }

    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <header className="site-header">
      <nav className="nav page" aria-label="Primary navigation">
        <Link className="site-name" to="/" aria-label="Sakshyam Banjade home" onClick={() => setIsOpen(false)}>
          Sakshyam Banjade
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${isOpen ? "open" : ""}`} id="nav-menu">
          {navItems.map(([label, to]) => {
            const hash = to.includes("#") ? to.split("#")[1] : "";
            const isActive = onHome && hash && activeId === hash;

            return (
            <li key={to}>
              <Link
                className={isActive || (!onHome && location.pathname === to) ? "active" : ""}
                to={to}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

function Entry({ item }) {
  const title = item.href ? <a href={item.href}>{item.title}</a> : item.title;

  return (
    <article className={`entry ${item.featured ? "featured" : ""}`}>
      <time>{item.label}</time>
      <div>
        <h3>{title}</h3>
        <p>{item.body}</p>
      </div>
    </article>
  );
}

function SectionHeader({ eyebrow, title, body }) {
  return (
    <header className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-layout">
        <div className="hero-content">
          <h1>{profile.name}</h1>
          <p className="subtitle">{profile.tagline}</p>
          <p className="hero-copy">{profile.intro}</p>
          <p className="hero-copy">{profile.location}</p>

          <p className="action-links" aria-label="Primary actions">
            <Link to="/projects/">View Work</Link>
            <Link to="/research/">Research</Link>
            <Link to="/fellowship/">Fellowship</Link>
            <Link to="/contact/">Contact</Link>
          </p>

          <p className="current-focus">{profile.focus}</p>
        </div>

        <figure className="hero-visual" aria-hidden="true">
          <img src="/hero-running.png" alt="" />
        </figure>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="trust-bar" aria-label="Trust signals">
      {trustSignals.map((signal) => (
        <span key={signal}>{signal}</span>
      ))}
    </div>
  );
}

function HomeBlock({ tone = "default", compact = false, children }) {
  return (
    <div className={`home-block home-block-${tone}${compact ? " home-block-compact" : ""}`}>
      <div className="page home-block-inner">{children}</div>
    </div>
  );
}

function WritingArchive() {
  return (
    <section id="writing">
      <SectionHeader
        eyebrow="Writing archive"
        title="writing"
        body="A dedicated writing space for essays, notes, reflections, and longer ideas. This archive is powered by React Router, so each piece can have its own clean page, metadata, and shareable URL."
      />

      {thoughts.slice(0, 4).map((thought) => (
        <article className="entry thought-link" key={thought.slug}>
          <time>{thought.slug}</time>
          <div>
            <h3>
              <Link to={`/thoughts/${thought.slug}/`}>{thought.title}</Link>
            </h3>
            <p>{thought.summary}</p>
            <span className="path">/thoughts/{thought.slug}</span>
          </div>
        </article>
      ))}

      <p className="action-links">
        <Link to="/writing/">Open writing archive</Link>
      </p>
    </section>
  );
}

function WritingCard({ thought }) {
  return (
    <article className="entry thought-link writing-card">
      <time>{thought.slug}</time>
      <div>
        <h3>
          <Link to={`/thoughts/${thought.slug}/`}>{thought.title}</Link>
        </h3>
        <p>{thought.summary}</p>
        <Link className="read-link" to={`/thoughts/${thought.slug}/`} aria-label={`Read ${thought.title}`}>
          Read essay
        </Link>
      </div>
    </article>
  );
}

function RecognitionSection() {
  return (
    <section id="recognitions">
      <SectionHeader
        eyebrow="Signals"
        title="recognitions"
        body="Signals from language work, technology media, international communities, and public contribution."
      />
      {recognitionItems.map((item) => (
        <Entry item={item} key={`${item.label}-${item.title}`} />
      ))}
    </section>
  );
}

function FellowshipSection() {
  return (
    <section id="fellowship">
      <SectionHeader
        eyebrow="Programs"
        title="fellowships / selections / programs"
        body="Programs, workshops, pitch spaces, and ecosystem moments connected to leadership, AI, innovation, and public technology work."
      />
      {fellowshipItems.map((item) => (
        <Entry item={item} key={`${item.label}-${item.title}`} />
      ))}
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeader eyebrow="Stack" title="skills" />
      {skillGroups.map((group) => (
        <article className="entry" key={group.title}>
          <time>{group.title}</time>
          <div>
            <h3>{group.title}</h3>
            <p>{group.body}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education">
      <SectionHeader eyebrow="Background" title="education" />
      {educationItems.map((item) => (
        <Entry item={item} key={`${item.label}-${item.title}`} />
      ))}
    </section>
  );
}

function TrainingSection() {
  return (
    <section id="training">
      <SectionHeader eyebrow="Courses" title="training / certifications" />
      {trainingItems.map((item) => (
        <Entry item={item} key={`${item.label}-${item.title}`} />
      ))}
    </section>
  );
}

function TweetsSection() {
  return (
    <section id="tweets">
      <SectionHeader
        eyebrow="Live feed"
        title="latest tweets"
        body="Recent posts from @SakshyamBanjade. If the timeline does not load, open the profile directly."
      />
      <div className="tweet-box">
        <a
          className="twitter-timeline"
          data-height="620"
          data-dnt="true"
          data-chrome="noheader nofooter noborders transparent"
          href="https://twitter.com/SakshyamBanjade"
        >
          Tweets by SakshyamBanjade
        </a>
      </div>
      <p className="tweet-action">
        <a
          href="https://twitter.com/intent/tweet?button_hashtag=sakshyambanjade&ref_src=twsrc%5Etfw"
          className="twitter-hashtag-button"
          data-show-count="false"
        >
          Tweet #sakshyambanjade
        </a>
      </p>
    </section>
  );
}

function HomePage() {
  useSeo({
    title: "Sakshyam Banjade | AI Builder, Researcher & Founder",
    description: defaultDescription,
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: "Sakshyam Banjade",
          url: `${siteUrl}/`,
          description: defaultDescription,
          inLanguage: "en",
          publisher: {
            "@id": `${siteUrl}/#organization`,
          },
        },
        {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Sakshyam Banjade",
          url: `${siteUrl}/`,
          image: defaultImageUrl,
          founder: {
            "@id": `${siteUrl}/#person`,
          },
          sameAs: profile.links.map(([, href]) => href),
        },
        {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: "Sakshyam Banjade",
          url: `${siteUrl}/`,
          image: defaultImageUrl,
          email: `mailto:${profile.email}`,
          jobTitle: "AI Builder, Researcher and Founder",
          nationality: "Nepalese",
          sameAs: profile.links.map(([, href]) => href),
          knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "Applied AI",
            "Research",
            "Technology writing",
            "Startup building",
          ],
        },
      ],
    },
  });

  return (
    <>
      <main className="home-page" id="main">
        <HomeBlock tone="hero">
          <Hero />
          <TrustBar />
        </HomeBlock>

        <HomeBlock tone="soft">
          <section id="work">
            <SectionHeader
              eyebrow="Selected systems"
              title="selected work"
              body="A focused view of the products, systems, and public work I have built or contributed to. This section is meant to make the work easy to understand before the details."
            />
            {workItems.map((item) => (
              <Entry item={item} key={`${item.label}-${item.title}`} />
            ))}
            <p className="quiet">
              The through-line is simple: build useful systems, turn ideas into visible output, and make Nepal part of
              serious global AI and technology conversations.
            </p>
          </section>
        </HomeBlock>

        <HomeBlock>
          <section id="done">
            <SectionHeader
              eyebrow="Range"
              title="things i have done"
              body="The range matters because the work has not stayed in one lane. I have built products, published research, worked around media and finance, led communities, mentored students, and represented Nepal-focused work in international spaces."
            />
            {doneItems.map((item) => (
              <Entry item={item} key={`${item.label}-${item.title}`} />
            ))}
          </section>
        </HomeBlock>

        <HomeBlock tone="soft">
          <section id="research">
            <SectionHeader
              eyebrow="Direction"
              title="research"
              body="My long-term direction combines practical product building with serious academic work. I am interested in applied AI, human-centered AI, multi-agent systems, AI for agriculture, quantitative systems, scientific tooling, robotics, and neuro-inspired AI memory systems."
            />
            {researchItems.map((item) => (
              <Entry item={item} key={item.title} />
            ))}
          </section>
        </HomeBlock>

        <HomeBlock>
          <RecognitionSection />
        </HomeBlock>

        <HomeBlock tone="soft">
          <FellowshipSection />
        </HomeBlock>

        <HomeBlock>
          <section id="leadership">
            <SectionHeader
              eyebrow="People"
              title="leadership"
              body="I care about building more than products. I am equally interested in helping people grow through mentorship, leadership, and opportunity creation."
            />
            {leadershipItems.map((item) => (
              <Entry item={item} key={`${item.label}-${item.title}`} />
            ))}
          </section>
        </HomeBlock>

        <HomeBlock tone="soft">
          <SkillsSection />
        </HomeBlock>

        <HomeBlock>
          <WritingArchive />
        </HomeBlock>

        <HomeBlock tone="soft" compact>
          <TweetsSection />
        </HomeBlock>

        <HomeBlock compact>
          <EducationSection />
        </HomeBlock>

        <HomeBlock tone="soft" compact>
          <TrainingSection />
        </HomeBlock>

        <HomeBlock compact>
          <section id="contact">
            <SectionHeader
              eyebrow="Reach out"
              title="contact"
              body="I am interested in research collaboration, product conversations, mentorship initiatives, fellowship partnerships, and other work aligned with technology and impact."
            />
            <p className="contact-list">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              {profile.links.map(([label, href]) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </p>
          </section>
        </HomeBlock>
      </main>
      <Footer />
    </>
  );
}

const pageContent = {
  projects: {
    intro:
      "Selected AI, software, research, and product systems I have built or contributed to, with a focus on useful execution and public-facing work.",
    items: workItems,
  },
  research: {
    intro:
      "Research work and directions across applied AI, civic identity infrastructure, scientific tooling, market systems, and human-centered technology.",
    items: researchItems,
  },
  fellowship: {
    intro:
      "Fellowships, selections, workshops, pitch spaces, and ecosystem moments connected to leadership, AI, innovation, and public technology work.",
    items: fellowshipItems,
  },
  contact: {
    intro:
      "I am interested in research collaboration, product conversations, mentorship initiatives, fellowship partnerships, and other work aligned with technology and impact.",
    items: [],
  },
};

function StandalonePage({ slug }) {
  const page = sitePages.find((item) => item.slug === slug);
  const content = pageContent[slug];

  useSeo({
    title: page.title,
    description: page.description,
    path: `/${slug}/`,
    structuredData: breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: page.label, path: `/${slug}/` },
    ]),
  });

  return (
    <>
      <main className="page writing-page" id="main">
        <section className="archive-intro" aria-labelledby={`${slug}-title`}>
          <p className="subtitle">{page.label.toLowerCase()}</p>
          <h1 id={`${slug}-title`}>{page.label}</h1>
          <p>{content.intro}</p>
          <p className="action-links">
            <Link to="/">Home</Link>
            {slug !== "writing" ? <Link to="/writing/">Writing</Link> : null}
          </p>
        </section>

        {slug === "contact" ? (
          <section aria-label="Contact links">
            <article className="entry">
              <time>email</time>
              <div>
                <h2>Start a conversation</h2>
                <p>
                  The fastest path is email. You can also use the public profiles below for research, code, writing,
                  and professional context.
                </p>
                <p className="contact-list">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  {profile.links.map(([label, href]) => (
                    <a href={href} key={label}>
                      {label}
                    </a>
                  ))}
                </p>
              </div>
            </article>
          </section>
        ) : (
          <section aria-label={page.label}>
            {content.items.map((item) => (
              <Entry item={item} key={`${item.label}-${item.title}`} />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function WritingPage() {
  useSeo({
    title: "Writing | Sakshyam Banjade",
    description:
      "Essays and notes by Sakshyam Banjade on technology, AI, education, patience, community, and building things early.",
    path: "/writing/",
    structuredData: breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Writing", path: "/writing/" },
    ]),
  });

  return (
    <>
      <main className="page writing-page" id="main">
        <section className="archive-intro" aria-labelledby="writing-title">
          <p className="subtitle">writing archive</p>
          <h1 id="writing-title">Writing</h1>
          <p>
            Essays, notes, and reflections I want to keep in one place. Open any piece, read comfortably, then move
            back to the archive or continue to the next one without getting lost.
          </p>
          <p className="action-links">
            <Link to="/#writing">Back to home section</Link>
            <Link to="/">Home</Link>
          </p>
        </section>

        <section className="writing-list" aria-label="Essays">
          {thoughts.map((thought) => (
            <WritingCard thought={thought} key={thought.slug} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

function ThoughtPage() {
  const { slug } = useParams();
  const thought = useMemo(() => thoughts.find((item) => item.slug === slug), [slug]);
  const legacyThought = useMemo(() => thoughts.find((item) => item.legacySlug === slug), [slug]);
  const thoughtIndex = useMemo(() => thoughts.findIndex((item) => item.slug === slug), [slug]);
  const previousThought = thoughtIndex > 0 ? thoughts[thoughtIndex - 1] : null;
  const nextThought = thoughtIndex >= 0 && thoughtIndex < thoughts.length - 1 ? thoughts[thoughtIndex + 1] : null;

  if (!thought && legacyThought) return <Navigate to={`/thoughts/${legacyThought.slug}/`} replace />;
  if (!thought) return <NotFoundPage />;

  useSeo({
    title: `${thought.title} | Sakshyam Banjade`,
    description: thought.summary,
    path: `/thoughts/${thought.slug}/`,
    type: "article",
    structuredData: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Writing", path: "/writing/" },
        { name: thought.title, path: `/thoughts/${thought.slug}/` },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: thought.title,
        description: thought.summary,
        mainEntityOfPage: `${siteUrl}/thoughts/${thought.slug}/`,
        author: {
          "@type": "Person",
          name: "Sakshyam Banjade",
          url: `${siteUrl}/`,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Sakshyam Banjade",
          url: `${siteUrl}/`,
        },
      },
    ],
  });

  return (
    <>
      <main id="main" className="page thought-page">
        <header className="reading-header">
          <p className="subtitle">writing</p>
          <h1>{thought.title}</h1>
          <p className="meta">{thought.summary}</p>
          <p className="reading-actions">
            <Link to="/writing/">Back to archive</Link>
            <Link to="/">Home</Link>
          </p>
        </header>

        <article>
          {thought.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <nav className="post-nav" aria-label="Previous and next writing">
          {previousThought ? (
            <Link to={`/thoughts/${previousThought.slug}/`}>
              <span>Previous</span>
              {previousThought.title}
            </Link>
          ) : (
            <span />
          )}
          <Link className="archive-link" to="/writing/">
            All writing
          </Link>
          {nextThought ? (
            <Link to={`/thoughts/${nextThought.slug}/`}>
              <span>Next</span>
              {nextThought.title}
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
      <Footer />
    </>
  );
}

function NotFoundPage() {
  useSeo({
    title: "Page Not Found | Sakshyam Banjade",
    description:
      "The page was not found. Use this page to return to Sakshyam Banjade's portfolio, writing archive, projects, research, or contact page.",
    path: "/404.html",
    robots: "noindex, follow",
  });

  return (
    <>
      <main className="page writing-page" id="main">
        <section className="archive-intro" aria-labelledby="not-found-title">
          <p className="subtitle">404</p>
          <h1 id="not-found-title">Page not found</h1>
          <p>
            This page does not exist anymore, or the link was typed wrong. Nothing useful is loaded here, but the main
            paths are still available.
          </p>
          <p className="action-links">
            <Link to="/">Home</Link>
            <Link to="/writing/">Writing</Link>
            <Link to="/projects/">Projects</Link>
            <Link to="/contact/">Contact</Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="page site-footer">
      <p>Building systems, research, and opportunities with long-term intent.</p>
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      &uarr;
    </button>
  );
}

function AppShell() {
  useRedirectFallback();
  useRouteEffects();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<StandalonePage slug="projects" />} />
        <Route path="/projects/" element={<StandalonePage slug="projects" />} />
        <Route path="/research" element={<StandalonePage slug="research" />} />
        <Route path="/research/" element={<StandalonePage slug="research" />} />
        <Route path="/fellowship" element={<StandalonePage slug="fellowship" />} />
        <Route path="/fellowship/" element={<StandalonePage slug="fellowship" />} />
        <Route path="/contact" element={<StandalonePage slug="contact" />} />
        <Route path="/contact/" element={<StandalonePage slug="contact" />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/" element={<WritingPage />} />
        <Route path="/thoughts/:slug" element={<ThoughtPage />} />
        <Route path="/thoughts/:slug/" element={<ThoughtPage />} />
        <Route path="/thoughts/:slug.html" element={<ThoughtPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default function App() {
  return <AppShell />;
}
