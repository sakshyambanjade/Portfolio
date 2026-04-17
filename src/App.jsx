import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  doneItems,
  leadershipItems,
  navItems,
  profile,
  researchItems,
  thoughts,
  trustSignals,
  workItems,
} from "./content.js";

const siteUrl = "https://sakshyambanjade.com.np";

function setMeta(name, content, attribute = "name") {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function useSeo({ title, description, path = "/", type = "website" }) {
  useEffect(() => {
    const url = `${siteUrl}${path}`;
    document.title = title;
    setMeta("description", description);
    setMeta("author", "Sakshyam Banjade");
    setMeta("robots", "index, follow");
    setMeta("theme-color", "#ffffff");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", url, "property");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [description, path, title, type]);
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
  const [activeId, setActiveId] = useState("top");
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
        <Link className="site-name" to="/#top" aria-label="Sakshyam Banjade home" onClick={() => setIsOpen(false)}>
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
          {navItems.map(([label, id]) => (
            <li key={id}>
              <Link
                className={onHome && activeId === id ? "active" : ""}
                to={`/#${id}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
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

function Hero() {
  return (
    <section className="hero" id="top">
      <h1>{profile.name}</h1>
      <p className="subtitle">{profile.tagline}</p>
      <p className="hero-copy">{profile.intro}</p>
      <p className="hero-copy">{profile.location}</p>

      <p className="action-links" aria-label="Primary actions">
        <Link to="/#work">View Work</Link>
        <Link to="/#research">Research</Link>
        <Link to="/#fellowship">Fellowship</Link>
        <Link to="/#contact">Contact</Link>
      </p>

      <p className="current-focus">{profile.focus}</p>
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

function WritingArchive() {
  return (
    <section id="writing">
      <h2>writing</h2>
      <p>
        A small public archive of notes and essays on technology, AI, education, patience, community, and the
        reality of building things early.
      </p>

      {thoughts.map((thought) => (
        <article className="entry thought-link" key={thought.slug}>
          <time>{thought.slug}</time>
          <div>
            <h3>
              <Link to={`/thoughts/${thought.slug}`}>{thought.title}</Link>
            </h3>
            <p>{thought.summary}</p>
            <span className="path">/thoughts/{thought.slug}</span>
          </div>
        </article>
      ))}
    </section>
  );
}

function HomePage() {
  useSeo({
    title: "Sakshyam Banjade | AI Systems, Research & Emerging Talent Networks",
    description:
      "Personal website of Sakshyam Banjade featuring AI projects, research, leadership, fellowship work, and product building from Nepal.",
  });

  return (
    <>
      <main className="page" id="main">
        <Hero />
        <TrustBar />
        <hr />

        <section id="work">
          <h2>selected work</h2>
          <p>
            A focused view of the products, systems, and public work I have built or contributed to. This section is
            meant to make the work easy to understand before the details.
          </p>
          {workItems.map((item) => (
            <Entry item={item} key={`${item.label}-${item.title}`} />
          ))}
          <p className="quiet">
            The through-line is simple: build useful systems, turn ideas into visible output, and make Nepal part of
            serious global AI and technology conversations.
          </p>
        </section>

        <hr />

        <section id="done">
          <h2>things i have done</h2>
          <p>
            The range matters because the work has not stayed in one lane. I have built products, published research,
            worked around media and finance, led communities, mentored students, and represented Nepal-focused work in
            international spaces.
          </p>
          {doneItems.map((item) => (
            <Entry item={item} key={`${item.label}-${item.title}`} />
          ))}
        </section>

        <hr />

        <section id="research">
          <h2>research</h2>
          <p>
            My long-term direction combines practical product building with serious academic work. I am interested in
            applied AI, human-centered AI, multi-agent systems, AI for agriculture, quantitative systems, scientific
            tooling, robotics, and neuro-inspired AI memory systems.
          </p>
          {researchItems.map((item) => (
            <Entry item={item} key={item.title} />
          ))}
        </section>

        <hr />

        <section id="fellowship">
          <h2>fellowship</h2>
          <p>Next cohort soon.</p>
        </section>

        <hr />

        <section id="leadership">
          <h2>leadership</h2>
          <p>
            I care about building more than products. I am equally interested in helping people grow through mentorship,
            leadership, and opportunity creation.
          </p>
          {leadershipItems.map((item) => (
            <Entry item={item} key={`${item.label}-${item.title}`} />
          ))}
        </section>

        <hr />
        <WritingArchive />
        <hr />

        <section id="contact">
          <h2>contact</h2>
          <p>
            I am interested in research collaboration, product conversations, mentorship initiatives, fellowship
            partnerships, and other work aligned with technology and impact.
          </p>
          <p className="contact-list">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {profile.links.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ThoughtPage() {
  const { slug } = useParams();
  const thought = useMemo(() => thoughts.find((item) => item.slug === slug), [slug]);

  if (!thought) return <Navigate to="/#writing" replace />;

  useSeo({
    title: `${thought.title} | Sakshyam Banjade`,
    description: thought.summary,
    path: `/thoughts/${thought.slug}`,
    type: "article",
  });

  return (
    <>
      <main id="main" className="page thought-page">
        <p className="subtitle">writing</p>
        <h1>{thought.title}</h1>
        <p className="meta">{thought.meta}</p>
        <article>
          {thought.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <p className="action-links">
          <Link to="/#writing">Back to writing</Link>
          <Link to="/">Home</Link>
        </p>
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
        <Route path="/thoughts/:slug" element={<ThoughtPage />} />
        <Route path="/thoughts/:slug.html" element={<ThoughtPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default function App() {
  return <AppShell />;
}
