import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  educationItems,
  featuredTechnicalThoughtSlugs,
  fellowshipItems,
  labNotes,
  leadershipItems,
  navItems,
  newsItems,
  profile,
  projectCaseStudies,
  recognitionItems,
  researchProfileLinks,
  researchFocusAreas,
  researchItems,
  signalMetrics,
  sitePages,
  skillGroups,
  thoughts,
  trainingItems,
  trustSignals,
  workflowPrinciples,
  workItems,
} from "./content.js";

const siteUrl = "https://sakshyambanjade.com.np";
const defaultImagePath = "/og-image.png";
const defaultImageUrl = `${siteUrl}${defaultImagePath}`;
const defaultDescription =
  "Sakshyam Banjade is an AI developer, CS.AI researcher, and applied AI builder from Nepal working on machine learning and AI systems.";

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

function researchScholarlyArticlesJsonLd() {
  return researchItems.map((item) => ({
    "@context": "https://schema.org",
    "@type": item.schemaType || "ScholarlyArticle",
    headline: item.title,
    name: item.title,
    description: item.body,
    abstract: item.abstract || item.body,
    url: item.href,
    author: {
      "@type": "Person",
      name: "Sakshyam Banjade",
      url: `${siteUrl}/`,
    },
    publisher: item.publisher
      ? {
          "@type": "Organization",
          name: item.publisher,
        }
      : undefined,
    about: [
      "Artificial Intelligence",
      "Machine Learning",
      "CS.AI",
      "Applied AI",
      "AI Research",
      "LLM Evaluation",
      "AI Systems",
      "Nepal Technology",
    ],
  }));
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
      "section > h2, section > p, .entry, .quote, .quick-links, .tweet-box, .contact-list, .signal-card, .case-study, .note-card, .workflow-card"
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
        <figure className="hero-visual">
          <img src="/favicon-source.png" alt="Portrait of Sakshyam Banjade" />
        </figure>

        <div className="hero-content">
          <h1>{profile.name}</h1>
          <p className="subtitle">{profile.tagline}</p>
          <p className="hero-copy">{profile.intro}</p>
          <p className="hero-research-statement">{profile.researchStatement}</p>

          <p className="action-links" aria-label="Primary actions">
            <Link to="/research/">View Research</Link>
            <Link to="/projects/">See Projects</Link>
          </p>

          <p className="current-focus">{profile.focus}</p>
        </div>
      </div>
    </section>
  );
}

function SignalGrid() {
  return (
    <section className="signal-grid" aria-label="Key portfolio signals">
      {signalMetrics.map((item) => (
        <article className="signal-card" key={item.label}>
          <p className="signal-value">{item.value}</p>
          <h2>{item.label}</h2>
          <p>{item.detail}</p>
        </article>
      ))}
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

function NewsSection() {
  return (
    <section id="news">
      <SectionHeader
        eyebrow="News"
        title="latest updates"
        body="A short log of recent work, research, and public milestones worth knowing before diving deeper."
      />
      {newsItems.map((item) => (
        <Entry item={item} key={`${item.label}-${item.title}`} />
      ))}
    </section>
  );
}

function HomeBlock({ tone = "default", compact = false, children }) {
  return (
    <div className={`home-block home-block-${tone}${compact ? " home-block-compact" : ""}`}>
      <div className="page home-block-inner">{children}</div>
    </div>
  );
}

function ResearchSection() {
  return (
    <section id="research">
      <SectionHeader
        eyebrow="Research"
        title="research"
        body="Featured research, papers, and research interests centered on LLM evaluation, applied AI systems, and scientific tooling."
      />

      <div className="research-intro">
        <p>
          I am interested in how AI systems behave under real constraints: limited data, messy deployment environments,
          and evaluation setups that can mislead us if we are not careful.
        </p>
        <p>
          My current research questions sit around LLM reasoning, evaluation design, applied AI systems for real users,
          and how to build research that stays useful outside the lab.
        </p>
      </div>

      <div className="research-stack">
        <div>
          <h3>publications & preprints</h3>
          {researchItems.map((item) => (
            <Entry item={item} key={item.title} />
          ))}
        </div>

        <aside className="research-panel" aria-label="Research themes">
          <h3>current research themes</h3>
          <div className="focus-grid">
            {researchFocusAreas.map((item) => (
              <span className="focus-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
          <p className="quiet">
            Building a stronger publication record while developing AI systems with real-world use cases across
            evaluation, agriculture, information workflows, scientific tooling, and reasoning.
          </p>
        </aside>
      </div>

      <p className="action-links section-actions">
        <Link to="/notes/">Open lab notes on AI evaluation and research workflow</Link>
        {researchProfileLinks.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </p>
    </section>
  );
}

function CaseStudyCard({ item }) {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="case-study-icon" aria-hidden="true">
          {item.icon}
        </p>
        <div>
          <h3>{item.title}</h3>
          <p className="quiet">problem to hypothesis to signal to trade-off</p>
        </div>
      </header>

      <div className="case-study-grid">
        <div>
          <h4>Problem</h4>
          <p>{item.problem}</p>
        </div>
        <div>
          <h4>Hypothesis</h4>
          <p>{item.hypothesis}</p>
        </div>
        <div>
          <h4>Method</h4>
          <ul className="mini-list">
            {item.method.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Result</h4>
          <p>{item.result}</p>
        </div>
        <div>
          <h4>Trade-off</h4>
          <p>{item.tradeoff}</p>
        </div>
        <div>
          <h4>Reproducibility note</h4>
          <p>{item.reproduce}</p>
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  const supportingWork = workItems.filter((item) => !projectCaseStudies.some((study) => study.title === item.title));

  return (
    <section id="work">
      <SectionHeader
        eyebrow="Selected systems"
        title="selected work"
        body="A focused view of the AI systems, machine learning systems, applied AI products, and Nepal-focused technology systems I have built or contributed to. The strongest projects below are structured more like mini research notes so the reasoning is easier to evaluate."
      />

      <div className="case-study-stack">
        {projectCaseStudies.map((item) => (
          <CaseStudyCard item={item} key={item.title} />
        ))}
      </div>

      <div className="supporting-work">
        <h3>supporting systems & public work</h3>
        {supportingWork.map((item) => (
          <Entry item={item} key={`${item.label}-${item.title}`} />
        ))}
      </div>

      <p className="quiet">
        The through-line is simple: build useful systems, turn ideas into visible output, and make Nepal part of
        serious global AI and technology conversations.
      </p>
    </section>
  );
}

function NoteCard({ note }) {
  return (
    <article className="note-card">
      <div className="note-card-header">
        <time>{note.label}</time>
        <p className="note-icons" aria-label="Evidence icons">
          {note.icons.join(" ")}
        </p>
      </div>
      <h3>{note.title}</h3>
      <div className="note-rows">
        <p>
          <strong>Goal:</strong> {note.goal}
        </p>
        <p>
          <strong>Tried:</strong> {note.tried}
        </p>
        <p>
          <strong>Unexpected:</strong> {note.unexpected}
        </p>
        <p>
          <strong>Next:</strong> {note.next}
        </p>
      </div>
    </article>
  );
}

function LabNotesSection({ preview = false, id = "notes" }) {
  const visibleNotes = preview ? labNotes.slice(0, 3) : labNotes;

  return (
    <section id={id}>
      <SectionHeader
        eyebrow="Lab notebook"
        title="lab notes"
        body="Short research-log entries that capture the loop I care about most: goal, what I tried, what surprised me, and what should happen next."
      />

      <div className="notes-grid">
        {visibleNotes.map((note) => (
          <NoteCard note={note} key={note.title} />
        ))}
      </div>

      {preview ? (
        <p className="action-links section-actions">
          <Link to="/notes/">Open full lab notes</Link>
        </p>
      ) : null}
    </section>
  );
}

function WorkflowSection({ id = "workflow" }) {
  return (
    <section id={id}>
      <SectionHeader
        eyebrow="Research workflow"
        title="how i work"
        body="I want the website to make collaboration easier: what I optimize for, how I document work, and how I prefer to work with researchers, engineers, and founders."
      />

      <div className="workflow-grid">
        {workflowPrinciples.map((item) => (
          <article className="workflow-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <div className="workflow-callout">
        <p>
          <strong>Reproducibility statement:</strong> {profile.reproducibility}
        </p>
        <p>
          <strong>Collaboration style:</strong> {profile.collaboration}
        </p>
        <p>
          <strong>Skeptical question:</strong> {profile.skepticalQuestion}
        </p>
      </div>
    </section>
  );
}

function WritingArchive() {
  const featuredThoughts = thoughts.filter((thought) => featuredTechnicalThoughtSlugs.includes(thought.slug));

  return (
    <section id="writing">
      <SectionHeader
        eyebrow="Technical writing"
        title="writing"
        body="Technical notes and longer writing that reinforce the research and systems work rather than distracting from it."
      />

      {featuredThoughts.map((thought) => (
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
        <Link to="/writing/">Read all writing</Link>
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

function HomePage() {
  useSeo({
    title: "Sakshyam Banjade | AI Developer, CS.AI Researcher & Applied AI Builder from Nepal",
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
          alternateName: ["Sakshyam", "Sakshyam Banjade"],
          url: `${siteUrl}/`,
          image: defaultImageUrl,
          email: `mailto:${profile.email}`,
          jobTitle: ["AI Developer", "CS.AI Researcher", "Applied AI Builder"],
          description: profile.researchStatement,
          nationality: "Nepalese",
          sameAs: profile.links.map(([, href]) => href),
          knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "CS.AI",
            "Applied AI",
            "AI Research",
            "LLM Evaluation",
            "AI Systems",
            "Quantitative Systems",
            "Algorithmic Trading",
            "Research Papers",
            "Nepal Technology",
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
          <SignalGrid />
        </HomeBlock>

        <HomeBlock tone="soft">
          <ResearchSection />
        </HomeBlock>

        <HomeBlock>
          <ProjectsSection />
        </HomeBlock>

        <HomeBlock tone="soft">
          <NewsSection />
        </HomeBlock>

        <HomeBlock>
          <RecognitionSection />
        </HomeBlock>

        <HomeBlock tone="soft">
          <WritingArchive />
        </HomeBlock>

        <HomeBlock>
          <LabNotesSection preview />
        </HomeBlock>

        <HomeBlock tone="soft">
          <FellowshipSection />
        </HomeBlock>

        <HomeBlock tone="soft">
          <SkillsSection />
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
          <WorkflowSection />
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
      "Selected AI systems, machine learning systems, applied AI products, and Nepal-focused technology systems I have built or contributed to, with more explicit attention to problem framing, evidence, and what each system is trying to prove.",
    items: workItems,
  },
  research: {
    intro:
      "A publication-first research page for Sakshyam Banjade research papers, publications, CS.AI research, and AI researcher work from Nepal across evaluation, scientific tooling, and applied AI systems.",
    items: researchItems,
  },
  notes: {
    intro:
      "A small lab notebook for capturing research intent, experiment shape, unexpected outcomes, and the next move without pretending every idea is already a finished paper.",
    items: [],
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
    structuredData:
      slug === "research"
        ? [
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: page.label, path: `/${slug}/` },
            ]),
            ...researchScholarlyArticlesJsonLd(),
          ]
        : breadcrumbJsonLd([
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
            <article className="entry">
              <time>style</time>
              <div>
                <h2>How I work with people</h2>
                <p>{profile.collaboration}</p>
                <p>{profile.skepticalQuestion}</p>
              </div>
            </article>
          </section>
        ) : slug === "research" ? (
          <>
            <ResearchSection />
            <LabNotesSection id="notes-preview" preview />
            <WorkflowSection id="workflow-preview" />
          </>
        ) : slug === "projects" ? (
          <ProjectsSection />
        ) : slug === "notes" ? (
          <LabNotesSection preview={false} id="notes-page" />
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
      <p>Last updated: {profile.lastUpdated}</p>
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
        <Route path="/notes" element={<StandalonePage slug="notes" />} />
        <Route path="/notes/" element={<StandalonePage slug="notes" />} />
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
