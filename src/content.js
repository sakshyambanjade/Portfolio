export const profile = {
  name: "Sakshyam Banjade",
  tagline: "AI researcher and builder from Nepal.",
  intro:
    "I build AI systems that work in the real world: research-grounded, Nepal-rooted, and aimed at useful deployment instead of empty demos.",
  focus:
    "Right now I am focused on LLM evaluation, applied AI systems, and research that can stand up in front of serious collaborators.",
  researchStatement:
    "I care most about LLM evaluation, applied AI systems, scientific tooling, and what it takes to build globally relevant AI research from South Asia.",
  reproducibility:
    "I care about making work inspectable. When code is public, I want the repository, environment assumptions, and evaluation logic to be easy to follow. When work is private, I still aim to make the methodology and trade-offs clear.",
  collaboration:
    "I prefer async-first collaboration, pull requests for review, concise Markdown notes, and experiment logs that make decisions easy to trace later.",
  skepticalQuestion:
    "If you reach out, tell me one claim in AI, systems, or product work that you are skeptical about. Good collaboration starts with honest questions.",
  lastUpdated: "2026-05-22",
  email: "hi@sakshyambanjade.com.np",
  links: [
    ["GitHub", "https://github.com/sakshyambanjade"],
    ["LinkedIn", "https://www.linkedin.com/in/sakshyam/"],
    ["X / Twitter", "https://x.com/SakshyamBanjade/"],
    ["Google Scholar", "https://scholar.google.com/citations?user=ltUdGkgAAAAJ&hl=en"],
    ["ResearchGate", "https://www.researchgate.net/profile/Sakshyam-Banjade-2"],
  ],
};

export const researchProfileLinks = [
  {
    label: "Google Scholar profile for Sakshyam Banjade",
    href: "https://scholar.google.com/citations?user=ltUdGkgAAAAJ&hl=en",
  },
  {
    label: "Sakshyam Banjade on ResearchGate",
    href: "https://www.researchgate.net/profile/Sakshyam-Banjade-2",
  },
  {
    label: "SSRN publication: Towards a Unified Civic Identity Stack",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6392278",
  },
  {
    label: "GitHub repositories by Sakshyam Banjade",
    href: "https://github.com/sakshyambanjade",
  },
];

export const navItems = [
  ["research", "/research/"],
  ["projects", "/projects/"],
  ["writing", "/writing/"],
  ["about", "/contact/"],
  ["contact", "/contact/"],
];

export const sitePages = [
  {
    slug: "projects",
    label: "Projects",
    title: "AI Systems Projects | Sakshyam Banjade",
    description:
      "AI systems, machine learning systems, and applied AI products by Sakshyam Banjade, including Nepal-focused technology systems and quantitative workflows.",
  },
  {
    slug: "research",
    label: "Research",
    title: "Research Papers & Publications | Sakshyam Banjade",
    description:
      "Research papers, publications, and CS.AI research by Sakshyam Banjade across applied AI, LLM evaluation, scientific tooling, and Nepal-focused technology.",
  },
  {
    slug: "notes",
    label: "Lab Notes",
    title: "Lab Notes | Sakshyam Banjade",
    description:
      "Research log entries from Sakshyam Banjade covering experiment goals, unexpected findings, evaluation questions, and next steps across AI systems and scientific tooling.",
  },
  {
    slug: "fellowship",
    label: "Fellowship",
    title: "Fellowship | Sakshyam Banjade",
    description:
      "Fellowships, selections, programs, and innovation spaces connected to Sakshyam Banjade's work in AI, leadership, and public technology.",
  },
  {
    slug: "contact",
    label: "Contact",
    title: "Contact | Sakshyam Banjade",
    description:
      "Contact Sakshyam Banjade for research collaboration, product conversations, mentorship initiatives, fellowship partnerships, and technology work.",
  },
];

export const trustSignals = [
  "2 published papers",
  "UNDP Top 6 / 50+",
  "Google Crowdsource Global Top 3",
  "Stanford tech + journalism workshop",
];

export const signalMetrics = [
  {
    value: "2",
    label: "research artifacts",
    detail: "one published paper and one active preprint",
  },
  {
    value: "Top 6 / 50+",
    label: "innovation signal",
    detail: "SeedSure AI selected at a UNDP Nepal pitch environment",
  },
  {
    value: "Top 3",
    label: "global language signal",
    detail: "Google Crowdsource translation leaderboard recognition",
  },
  {
    value: "Stanford",
    label: "workshop signal",
    detail: "technology and journalism workshop participation",
  },
];

export const newsItems = [
  {
    label: "2026",
    title: "New preprint on LLM chess evaluation",
    body:
      "Published the preprint 'Can LLMs Play Chess? Rethinking Evaluation via Constrained-Index Move Selection' and pushed the research section to center the paper more clearly.",
    href: "https://www.researchgate.net/publication/404135344_Can_LLMs_Play_Chess_Rethinking_Evaluation_via_Constrained-Index_Move_Selection",
  },
  {
    label: "2026",
    title: "SeedSure AI selected at UNDP Nepal",
    body:
      "SeedSure AI was selected among the top 6 out of 50+ pitches, validating the need for climate-smart AI systems grounded in Nepal's agricultural reality.",
    href: "https://diplomatnepal.com/news/undp-launches-regional-ai-report-highlights-nepals-ai-choices/",
  },
  {
    label: "2026",
    title: "Research profile now includes public lab notes",
    body:
      "Added visible lab notes for LLM evaluation, AI orchestration, and applied AI system design so the site shows ongoing thinking rather than just finished outputs.",
    href: "/notes/",
  },
  {
    label: "2025",
    title: "Stanford technology and journalism workshop",
    body:
      "Joined a technology and journalism workshop that sharpened how I think about communicating technical work clearly in public.",
    href: "https://stanforddaily.com/2025/09/05/summer-workshop-exhibition-the-combined-future-of-technology-and-journalism/",
  },
];

export const projectCaseStudies = [
  {
    icon: "🌾",
    title: "SeedSure AI",
    href: "",
    tags: ["LLMs", "RAG", "AgriTech", "UNDP Selection"],
    problem:
      "Smallholder farmers need agricultural advice that respects location, soil type, weather and local farming constraints, which traditional tools or generic LLMs fail to contextualize.",
    hypothesis:
      "Grounding LLMs in localized micro-weather streams, regional soil databases, and seed matrices through RAG pipelines can deliver highly tailored and actionable crop recommendations.",
    method: [
      "Engineered a location-aware RAG pipeline linking weather APIs and historical soil databases.",
      "Optimized recommendation workflows specifically for remote microclimates and smallholder limitations in Nepal.",
      "Conducted extensive community and advisor feedback iterations to validate system usability and trust."
    ],
    result: "Selected in the Top 6 out of 50+ innovative pitches at the UNDP Nepal climate innovation challenge.",
    tradeoff:
      "Gathering structured regional agricultural data in remote and poorly mapped zones remains a high-friction operational bottleneck.",
    reproduce:
      "Verifiable architecture drafts, regional seed matrix setups, and UNDP selection records are available for deep review."
  },
  {
    icon: "🌌",
    title: "JyotishCore",
    href: "https://pypi.org/project/jyotishcore/",
    tags: ["Rust Core", "Python SDK", "Swiss Ephemeris", "FastAPI", "Rayon"],
    problem:
      "Astrological and astronomical ephemeris calculations require extremely high mathematical precision, historically forcing slow pure-Python operations or complex, untyped C library wrappers.",
    hypothesis:
      "Offloading core ephemeris logic to a native Rust engine wrapping the C Swiss Ephemeris and binding with PyO3 can achieve sub-millisecond calculation speeds alongside complete type safety.",
    method: [
      "Built a high-performance compiled Rust core implementing Swiss Ephemeris mathematical coordinate and ayanamsa systems.",
      "Exposed a fully typed, object-oriented Python SDK using PyO3 bindings and immutable dataclasses with Hindi/Nepali localization.",
      "Parallelized high-throughput batch chart calculations and auspicious time (Muhurta) search using Rust's Rayon library."
    ],
    result: "Achieved raw chart calculations in ~0.2 ms and batch computations (1,000+ charts) in 15 ms. Published on PyPI with over 100% test coverage.",
    tradeoff:
      "Distributing pre-compiled native binary wheels for cross-platform target environments adds significant CI/CD distribution complexity.",
    reproduce:
      "Open-sourced on GitHub and directly installable via PyPI (pip install jyotishcore), complete with live API endpoints and test suites."
  },
  {
    icon: "🗣️",
    title: "Voice Matters",
    href: "https://github.com/sakshyambanjade/voice-matters",
    tags: ["Azure OpenAI", "Azure Speech SDK", "React", "Node.js", "AI Health"],
    problem:
      "Access to speech therapy is severely restricted by high consulting fees and geographical barriers, leaving patients without affordable, high-frequency, real-time feedback channels.",
    hypothesis:
      "Integrating an LLM exercise generator with real-time phoneme-level pronunciation assessment models can establish a highly responsive, browser-native speech therapy loop.",
    method: [
      "Integrated Azure OpenAI to dynamically compile highly personalized, context-aware tongue-twisters and voice exercises.",
      "Utilized the Azure Speech SDK's pronunciation assessment engine to evaluate speech at the granular phoneme level.",
      "Built a highly fluid React web interface displaying granular scores (accuracy, fluency, completeness) in under 800 ms."
    ],
    result: "Delivered a fully operational browser-based AI speech therapy portal with immediate speech evaluation and scorecards.",
    tradeoff:
      "Relies heavily on low-latency internet connectivity and API service budgets, which can grow in operational cost.",
    reproduce:
      "Source code, environment configs, and sample exercises are open-sourced on GitHub for immediate auditing and execution."
  },
  {
    icon: "🧬",
    title: "MolVis Pro",
    href: "https://molvis.netlify.app/",
    tags: ["WebGL", "FastAPI", "RDKit", "AI Copilot", "CommandDSL"],
    problem:
      "Chemists and researchers face highly fragmented, heavy, desktop-bound workflows for molecular generation, conformer overlays, QSPR prediction, and docking analysis, which limits collaboration and remote iteration.",
    hypothesis:
      "A unified, browser-native molecular design platform integrating an AI Copilot (LLM-based planner using a custom CommandDSL) with WebGL 3D visualization and lightweight cheminformatics algorithms can achieve seamless, desktop-grade molecular iteration.",
    method: [
      "Engineered an LLM-based agent (CommandDSL compiler) that parses natural language instructions (e.g., 'generate analog', 'overlay conformers') into reproducible multi-step execution pipelines.",
      "Implemented fragment-based de novo generators (BRICS algorithm with clash detection) and generative models (VAE/GAN/RL adapters) for target-focused lead optimization.",
      "Developed in-browser descriptors (Lipinski rules, TPSA) and atom-level saliency visualization maps showing property contributions (LogP/TPSA attribution).",
      "Integrated 3D molecular rendering using WebGL (3DMol.js) alongside PCA/UMAP dimensional projection of chemical space for high-dimensional library visualization."
    ],
    result: "Built a fully interactive drug discovery portal served thousands of chemical analysis sessions, successfully automating the pipeline from de novo generation to visual attribution and 3D conformer alignment.",
    tradeoff:
      "Heavy deep learning models and docking simulations (like AutoDock Vina) require background server scheduling (via FastAPI) rather than running purely client-side in the browser thread.",
    reproduce:
      "Code structure, unit tests, CommandDSL specs, and automated reporting formats are fully open-sourced on GitHub (linked to live Netlify app)."
  }
];

export const workItems = [
  {
    label: "2026",
    title: "SeedSure AI",
    featured: true,
    tags: ["LLMs", "RAG", "AgriTech", "UNDP Selection"],
    href: "",
    body:
      "SeedSure AI is an AI-powered climate-smart seed and crop advisory platform focused on Nepal's smallholder farmers. It helps farmers make better seed and crop decisions using location, weather, season, soil type, and local farming conditions. The project was selected among the top 6 out of 50+ pitches at UNDP Nepal."
  },
  {
    label: "2026",
    title: "JyotishCore",
    featured: true,
    tags: ["Rust Core", "Python SDK", "Swiss Ephemeris", "FastAPI"],
    href: "https://pypi.org/project/jyotishcore/",
    body:
      "JyotishCore is a high-performance astronomical and Vedic Astrology calculation engine built as a Rust core on top of the Swiss Ephemeris, exposed as an object-oriented Python SDK on PyPI."
  },
  {
    label: "2026",
    title: "Voice Matters",
    featured: true,
    tags: ["Azure Speech SDK", "Azure OpenAI", "React", "AI Health"],
    href: "https://github.com/sakshyambanjade/voice-matters",
    body:
      "Voice Matters is an AI-powered speech therapy web application that uses Azure OpenAI and the Azure Speech SDK to generate personalized exercises and provide real-time, phoneme-level pronunciation feedback."
  },
  {
    label: "2025",
    title: "MolVis Pro",
    featured: true,
    tags: ["WebGL", "FastAPI", "RDKit", "CommandDSL", "Bioinformatics"],
    href: "https://molvis.netlify.app/",
    body:
      "MolVis Pro is an AI-powered, browser-native drug discovery and molecular design platform integrating LLM planners, VAE/BRICS generation adapters, 3D WebGL viewers, and property attribution maps."
  },
  {
    label: "2025",
    title: "NeuraPlay",
    tags: ["Cognitive Modeling", "Game AI", "Research Base", "Python"],
    href: "https://github.com/sakshyambanjade/neurlaplay",
    body:
      "NeuraPlay is an AI-powered system designed for human-like game playing and memory, which served as the foundation of a peer-reviewed research paper exploring cognitive modeling and memory-inspired architectures."
  },
  {
    label: "2025",
    title: "NeuraTrade",
    tags: ["Quant Finance", "Time-Series", "PyTorch", "Active Dev"],
    href: "https://github.com/sakshyambanjade/neuratrade",
    body:
      "NeuraTrade is a research-grounded algorithmic trading and quantitative finance system focused on time-series predictions, order-book dynamics, and risk-sensitive execution models."
  },
  {
    label: "2025",
    title: "NEPSE Guff",
    tags: ["LLMs", "Fine-tuning", "NEPSE", "Financial AI"],
    href: "https://github.com/sakshyambanjade/nepseguff",
    body:
      "NEPSE Guff is a specialized, fine-tuned large language model and conversational AI system trained specifically on Nepal Stock Exchange (NEPSE) reports, financial disclosures, and market metrics."
  },
  {
    label: "2025",
    title: "Hostify",
    tags: ["Networking", "CLI Utility", "Tunneling", "Go / Node"],
    href: "https://github.com/sakshyambanjade/hostify",
    body:
      "Hostify is a lightweight, zero-configuration local server tunneling and hosting utility designed to expose local developer environments to the web securely and instantly."
  },
  {
    label: "2024",
    title: "ReferNeeded",
    tags: ["Web Systems", "Database Design", "Matchmaking"],
    href: "https://github.com/sakshyambanjade/referneeded",
    body:
      "ReferNeeded is a streamlined professional networking and automated referral management system built to match developers seeking job referrals with engineering sponsors."
  },
  {
    label: "2024",
    title: "FastNewsOrg",
    tags: ["LLMs", "News Aggregator", "Automation", "Publishing"],
    body:
      "FastNewsOrg is an AI-powered news aggregation, curation, summarization, and automated publishing system. It is designed for politics, finance, technology news, and election monitoring workflows."
  },
  {
    label: "2024",
    title: "JobKhojdeu",
    tags: ["Web Scraping", "Job Aggregator", "Search Engine", "Nepal"],
    body:
      "JobKhojdeu is a job aggregation platform built to address fragmented job information in Nepal. It brings listings into a searchable interface and explores automated collection and filtering."
  }
];

export const recognitionItems = [
  {
    label: "2025",
    title: "Google Crowdsource",
    href: "https://crowdsource.google.com/csf/#/leaderboard/translation",
    body:
      "Global Top 3 Translator on the Google Crowdsource translation leaderboard, contributing to language data that helps improve AI systems for underrepresented languages.",
  },
  {
    label: "2025",
    title: "Google Crowdsource Influencer",
    body:
      "Selected as an official Google Crowdsource influencer and became the first from Nepal in that role.",
  },
  {
    label: "age 17",
    title: "Tech journalism at Avenues TV",
    body:
      "At 17, I began publishing technology segments on Avenues TV, covering emerging technologies, digital trends, and innovation for a broad national audience.",
  },
];

export const doneItems = [
  {
    label: "systems",
    title: "Built AI and software systems",
    body:
      "Built and prototyped systems across crop advisory, media intelligence, molecular visualization, multi-model orchestration, job aggregation, and Nepal-focused market workflows.",
  },
  {
    label: "founder",
    title: "Started and operated projects",
    body:
      "Started SeedSure AI and FastNewsOrg, moving ideas from concept into working products, content systems, and public-facing execution.",
  },
  {
    label: "media",
    title: "Published and worked around technology media",
    body:
      "Published 20+ articles through Fast News Org and worked in technology/media environments, including Avenues TV and public-facing tech journalism.",
  },
  {
    label: "research",
    title: "Published research",
    body:
      "Published an SSRN research paper on Nepal's civic identity infrastructure and continue building an applied AI research pipeline across agriculture, systems, and scientific tooling.",
  },
  {
    label: "finance",
    title: "Explored market systems",
    body:
      "Worked around trading workflows, financial analysis, quantitative research simulation, and NEPSE-focused experimentation.",
  },
  {
    label: "leadership",
    title: "Led community initiatives",
    body:
      "Served as Vice President II at Leo Club of Kathmandu Deurali, supporting service projects, volunteer coordination, youth leadership, and community engagement.",
  },
  {
    label: "mentorship",
    title: "Mentored early builders",
    body:
      "Supported students and early-stage builders through DEV Community Nepal, remote learning efforts, direct mentorship, and practical guidance around technology careers.",
  },
  {
    label: "language",
    title: "Contributed to language data",
    body:
      "Contributed through Google Crowdsource work, including translation and community participation that connects local language knowledge with global technology platforms.",
  },
  {
    label: "global",
    title: "Entered international and innovation programs",
    body:
      "Participated in leadership, innovation, AI, and technology-journalism spaces including Youth Leadership Workshop Seoul, Youth Innovation Lab FutureFront, and UNDP-related AI pitch environments.",
  },
];

export const researchItems = [
  {
    label: "preprint",
    title: "Can LLMs Play Chess? Rethinking Evaluation via Constrained-Index Move Selection",
    href: "https://www.researchgate.net/publication/404135344_Can_LLMs_Play_Chess_Rethinking_Evaluation_via_Constrained-Index_Move_Selection",
    body:
      "A new preprint exploring how large language models should be evaluated in chess through constrained-index move selection and more careful reasoning assessment.",
    schemaType: "ScholarlyArticle",
    abstract:
      "A preprint on LLM evaluation that studies chess through constrained-index move selection and more rigorous reasoning assessment.",
    publisher: "ResearchGate",
  },
  {
    label: "publication",
    title: "Towards a Unified Civic Identity Stack",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6392278",
    body:
      "A research paper proposing a federated digital identity architecture for Nepal through integration of the National Identity Card with cross-domain government services. DOI: 10.2139/ssrn.6392278.",
    schemaType: "ScholarlyArticle",
    abstract:
      "A research paper proposing a federated digital identity architecture for Nepal through integration of national identity infrastructure with cross-domain government services.",
    publisher: "SSRN",
  },
];

export const researchFocusAreas = [
  "LLM reasoning and evaluation",
  "Applied AI systems",
  "Scientific tooling",
  "AI for agriculture",
  "Information workflows",
  "Human-centered AI",
  "Quantitative systems",
  "Robotics and memory-inspired AI",
];

export const labNotes = [
  {
    label: "2026 / note 01",
    title: "Reframing LLM chess evaluation around constrained action spaces",
    icons: ["🔬", "🧪"],
    goal:
      "Test whether chess evaluation becomes more meaningful when move selection is constrained instead of judged through loose natural-language output alone.",
    tried:
      "Framed the task around constrained-index move selection and focused attention on evaluation design rather than only model theatrics.",
    unexpected:
      "Format and action-selection assumptions can distort the conclusion more than the model's underlying reasoning quality.",
    next:
      "Keep tightening evaluation protocols so the benchmark measures reasoning quality rather than interface mismatch.",
  },
  {
    label: "2026 / note 02",
    title: "Making AI advisory systems specific enough to be trusted",
    icons: ["📊", "🔬"],
    goal:
      "Understand what makes AI advice actually useful in agricultural and field-constrained settings instead of merely impressive in a demo.",
    tried:
      "Pushed the workflow toward location, season, soil type, and real user context rather than broad, generic recommendation patterns.",
    unexpected:
      "The main failure mode is not lack of output. It is advice that sounds intelligent but does not feel locally grounded enough to act on.",
    next:
      "Move further toward systems that make context visible and keep uncertainty honest for the user.",
  },
  {
    label: "2026 / note 03",
    title: "Treating orchestration as an evaluation problem, not just an API problem",
    icons: ["💻", "🧪"],
    goal:
      "Figure out whether multi-model systems can be compared and routed in a way that stays useful beyond novelty demos.",
    tried:
      "Explored routing, consensus, benchmarking, structured outputs, and side-by-side experimentation across several providers.",
    unexpected:
      "Once multiple providers enter the system, comparability gets messy fast unless prompts, constraints, and outputs are made deliberately consistent.",
    next:
      "Keep building orchestration workflows where the evaluation logic is visible enough to critique, not hidden inside tooling.",
  },
];

export const workflowPrinciples = [
  {
    title: "Reproducibility",
    body:
      "I want the main logic behind a system to be inspectable: what the task is, how the experiment is framed, what evidence matters, and where the trade-offs show up.",
  },
  {
    title: "Collaboration style",
    body:
      "I work best with async-first communication, pull requests for review, short written updates, and experiment notes that make decisions easy to revisit.",
  },
  {
    title: "What I optimize for",
    body:
      "Clear problem framing, measurable signals, honest failure analysis, and systems that can move from research curiosity into useful deployment.",
  },
];

export const leadershipItems = [
  {
    label: "leadership",
    title: "Leo Club of Kathmandu Deurali",
    body: "Vice President II, supporting volunteer coordination, community projects, and youth initiatives.",
  },
  {
    label: "community",
    title: "DEV Community Nepal",
    body: "Tech Mentor, supporting others in technology and early career direction.",
  },
  {
    label: "service",
    title: "Broader community work",
    body:
      "Background includes Scouts, Red Cross involvement, youth leadership programs, community service, and direct mentorship initiatives.",
  },
  {
    label: "service",
    title: "Community initiative lead",
    body:
      "Organized and managed a high-traffic shoe collection stall during Teej at Pashupatinath Temple, coordinating volunteers and supporting efficient service for large crowds.",
  },
  {
    label: "mentor",
    title: "Youth mentorship in Kalikot",
    body:
      "Mentored a student from Kalikot through a remote learning initiative, supporting independent web development learning despite limited access to structured education and resources.",
  },
  {
    label: "regional",
    title: "Nepal Front South Asia Youth Council (S8+1)",
    body: "Co-Representative for Nepal, contributing to regional youth representation and cross-border South Asia dialogue.",
  },
  {
    label: "recognitions",
    title: "Selected programs and recognitions",
    body:
      "Youth Leadership Workshop Seoul, Nepal Front South Asia Youth Council (S8+1), FutureFront by Youth Innovation Lab, UNDP AI pitch participation, Google Crowdsource Global Top 3 Translator, and startup / AI program selections.",
  },
];

export const fellowshipItems = [
  {
    label: "2026",
    title: "Selected Virtual Delegate - World Bank Group Youth Summit 2026",
    body:
      'Selected for virtual participation in the 2026 World Bank Group Youth Summit, held under the theme "FutureWorks: Designing Jobs for the Digital Age." The summit brings together young leaders, experts, and practitioners to discuss digital transformation, future jobs, innovation, and solutions to global development challenges.',
  },
  {
    label: "2026",
    title: "Nepal Front South Asia Youth Council (S8+1)",
    body: "Co-Representative for Nepal in a regional youth council focused on South Asia dialogue and representation.",
  },
  {
    label: "2026",
    title: "Youth Leadership Workshop Seoul",
    body: "Selected participant for an international youth leadership program in South Korea.",
  },
  {
    label: "2025",
    title: "FutureFront: Powering Digital Innovation through Content & AI",
    body:
      "Selected Participant in Youth Innovation Lab's U.S. Embassy in Nepal-supported 4-day intensive bootcamp focused on digital innovation, content strategy, artificial intelligence, and youth-led problem solving. The program brought together young innovators working on technology-driven solutions for social impact in Nepal.",
  },
  {
    label: "2025",
    title: "UNDP AI pitch",
    href: "https://diplomatnepal.com/news/undp-launches-regional-ai-report-highlights-nepals-ai-choices/",
    body: "Regional AI report and Nepal AI choices event.",
  },
  {
    label: "2025",
    title: "SeedSure AI Selection",
    body: "Recognized in innovation ecosystems supporting responsible AI and development.",
  },
  {
    label: "2025",
    title: "Technology and journalism workshop",
    href: "https://stanforddaily.com/2025/09/05/summer-workshop-exhibition-the-combined-future-of-technology-and-journalism/",
    body: "Summer workshop exhibition: the combined future of technology and journalism.",
  },
];

export const skillGroups = [
  {
    title: "technical",
    body:
      "Python, JavaScript, React, Next.js, the MERN stack, FastAPI, SQL, Docker, APIs, and machine learning workflows. Python work includes Pandas, NumPy, Scikit-learn, TensorFlow, and PyTorch; database experience includes MySQL, PostgreSQL, and MongoDB.",
  },
  {
    title: "AI / research",
    body:
      "Problem framing, model experimentation, prompt engineering, evaluation design, data pipelines, regression, classification, time series modeling, feature engineering, benchmarking, and applied ML workflows.",
  },
  {
    title: "engineering practices",
    body:
      "Git-based iteration, reproducibility-minded documentation, API integration, structured outputs, experimentation across multiple model providers, and turning exploratory work into systems that other people can inspect and use.",
  },
  {
    title: "professional",
    body: "Leadership, communication, operations, project execution, mentorship, and cross-domain thinking.",
  },
];

export const educationItems = [
  {
    label: "ongoing",
    title: "Asia Pacific University of Technology & Innovation",
    body: "Bachelor's in Information Technology.",
  },
  {
    label: "past",
    title: "Canvas International College",
    body: "High school education.",
  },
  {
    label: "past",
    title: "Api School",
    body: "Earlier schooling.",
  },
];

export const trainingItems = [
  {
    label: "course",
    title: "Quantitative Research Job Simulation",
    body: "J.P. Morgan / Forage",
  },
  {
    label: "course",
    title: "Machine Learning with Python",
    body: "Broadway Infosys",
  },
  {
    label: "course",
    title: "MERN Stack Development",
    body: "Broadway Infosys",
  },
];

export const featuredTechnicalThoughtSlugs = [
  "modern-vedic-astrology-jyotishcore",
  "one-flawless-local-coding-loop",
  "working-after-see-full-time-developer-19",
  "ai-aviation-safety-efficiency",
];

export const thoughts = [
  {
    slug: "modern-vedic-astrology-jyotishcore",
    title: "How to Use JyotishCore to Build a Modern Vedic Astrology Web App (Python & Rust)",
    summary:
      "Vedic astrology requires high-precision astronomical calculations. Historically, developers had to choose between slow, pure-Python libraries or writing complex wrappers around raw C ephemeris libraries. Here is how to build a high-performance astrological system using Rust, PyO3, FastAPI, and React.",
    meta: "Thought 10",
    paragraphs: [
      "Vedic astrology (Jyotisha) requires high-precision astronomical calculations. Historically, developers had to choose between slow, pure-Python libraries or writing complex wrappers around raw C ephemeris libraries.",
      "Enter JyotishCore—a high-performance calculation engine powered by Rust (using the Swiss Ephemeris under the hood) and exposed as a clean, object-oriented Python SDK.",
      "In this post, we'll walk through how to install jyotishcore, write your first astrological calculations, spin up the built-in API server, and integrate it into a modern web application frontend.",
      { type: "heading", level: 2, text: "Why JyotishCore?" },
      {
        type: "list",
        items: [
          "Blazing Fast: Chart calculation takes just ~0.2 ms. Batch computations are vectorized and parallelized using Rust's Rayon library (processing 1,000 charts in 15 ms).",
          "Extreme Precision: Uses the NASA-backed Swiss Ephemeris.",
          "Developer-Friendly: Modern Python interfaces, strict type hints, and immutable dataclass models.",
          "Built-in API Server: Ships with a ready-to-use FastAPI server and Streamlit developer playground."
        ]
      },
      { type: "heading", level: 2, text: "Step 1: Install JyotishCore" },
      "You can install JyotishCore directly from PyPI:",
      { type: "code", lang: "bash", code: "pip install jyotishcore" },
      "If you also want the interactive developer playground and the API server dependencies, install the extras:",
      { type: "code", lang: "bash", code: 'pip install "jyotishcore[ui,api]"' },
      { type: "heading", level: 2, text: "Step 2: Calculate a Natal Chart (Backend Python)" },
      "Let's compute a birth chart. We'll set the birth time and location, select the Ayanamsa (precession correction), and retrieve planetary positions.",
      {
        type: "code",
        lang: "python",
        code: "from jyotishcore import Chart, GeoLocation, JyotishTime, Ayanamsa\n\n# 1. Define Time (in local time) and Location\ntime = JyotishTime(year=1995, month=10, day=24, hour=17, minute=45)\nlocation = GeoLocation(latitude=27.7172, longitude=85.3240, timezone=\"Asia/Kathmandu\")\n\n# 2. Compute the Chart (uses Lahiri Ayanamsa and Equal house system by default)\nchart = Chart.compute(time=time, location=location, ayanamsa_obj=Ayanamsa.LAHIRI)\n\n# 3. Retrieve the Ascendant (Lagna)\nprint(f\"Ascendant (Lagna) Degree: {chart.ascendant():.2f}°\")\n\n# 4. Read planetary longitudes, signs, and houses\nplanets = chart.planets()\nfor name, planet in planets.items():\n    print(f\"{name.capitalize()}: {planet.longitude:.2f}° in {planet.sign} (House {planet.house})\")"
      },
      { type: "heading", level: 2, text: "Step 3: Localized Panchanga (Almanac)" },
      "Panchanga consists of the five daily astronomical elements. JyotishCore lets you easily translate Panchanga outputs into regional languages like Hindi (hi) or Nepali (ne).",
      {
        type: "code",
        lang: "python",
        code: "from jyotishcore import get_panchanga\n\npanchanga = get_panchanga(\n    year=2026, month=5, day=22, hour=12, minute=0, second=0,\n    latitude=27.7172, longitude=85.3240,\n    locale=\"hi\"  # Translates names to Hindi script\n)\n\nprint(f\"Tithi (Lunar Day): {panchanga.tithi.name} ({panchanga.tithi.paksha} Paksha)\")\nprint(f\"Nakshatra (Lunar Mansion): {panchanga.nakshatra.name}\")\nprint(f\"Solar Weekday (Vara): {panchanga.vara.name}\")"
      },
      { type: "heading", level: 2, text: "Step 4: Compute Divisional Charts (Varga Positions) & Render SVGs" },
      "Vedic astrology uses divisional charts (Vargas D2 to D60) for sub-divisional strengths. With JyotishCore, you can compute them natively in Rust and render them to clean, responsive SVGs (supporting North, South, or Circular designs) inside Python.",
      {
        type: "code",
        lang: "python",
        code: "# 1. Compute Navamsa (D9) Divisional Chart\nd9_chart = chart.divisional_chart(varga=9)\n\n# 2. Inspect planet placements in D9\nfor name, pos in d9_chart.planets().items():\n    print(f\"D9 {name.capitalize()}: {pos.sign} (House {pos.house}), Vargottama: {pos.is_vargottama}\")\n\n# 3. Render Divisional Chart to an SVG string\nsvg_markup = d9_chart.to_svg(style=\"north\")  # Supports 'north', 'south', 'circular'\nwith open(\"navamsa_chart.svg\", \"w\") as f:\n    f.write(svg_markup)"
      },
      { type: "heading", level: 2, text: "Step 5: Inspect Astrological Aspects & Planetary Strength (Shadbala)" },
      "In Vedic systems, planets cast aspects (Drishti) on houses and other planets. JyotishCore maps standard and special planetary aspects (e.g. Mars aspecting 4th/8th, Saturn 3rd/10th, Jupiter/Rahu/Ketu 5th/9th) and calculates Shadbala strength points.",
      {
        type: "code",
        lang: "python",
        code: "# 1. Get aspects cast by the Sun\nsun = planets[\"sun\"]\nsun_aspects = sun.aspects(list(planets.values()))\nfor aspected in sun_aspects:\n    print(f\"Sun casts aspect on {aspected.planet} in House {aspected.house}\")\n\n# 2. Check Shadbala strength points\nfor name, p in planets.items():\n    if p.shadbala:\n        print(f\"{name.capitalize()} Shadbala Strength: {p.shadbala.get('total', 0.0):.2f} Rupas\")"
      },
      { type: "heading", level: 2, text: "Step 6: High-Performance Auspicious Time (Muhurta) Finder" },
      "Finding auspicious time windows historically required looping through days and performing hundreds of slow planetary calculations. JyotishCore includes a parallel step-and-search Muhurta finder written in Rust using Rayon multi-core processing.",
      {
        type: "code",
        lang: "python",
        code: "from jyotishcore import find_time_windows\n\n# Search for auspicious time windows in June 2026\n# Search filters: Moon must be in Taurus and not in the 8th house\nwindows = find_time_windows(\n    start_year=2026, start_month=6, start_day=1,\n    end_year=2026, end_month=6, end_day=30,\n    latitude=27.7172, longitude=85.3240,\n    min_duration_minutes=30,\n    rules=[\"moon_in_taurus\", \"no_moon_in_8th\"]\n)\n\nfor win in windows:\n    print(f\"Auspicious Window: {win.start_time} to {win.end_time} | Score: {win.score}\")"
      },
      { type: "heading", level: 2, text: "Step 7: Advanced Relational Graph Citations (Explainable Yogas)" },
      "What makes JyotishCore unique is its explainable graph-based rule engine. Instead of returning flat true/false indicators for astrological combinations (Yogas), the chart.explain() method compiles a relational database of rules and citations from classic texts (e.g. Brihat Parasara Hora Sastra, Phaladeepika).",
      {
        type: "code",
        lang: "python",
        code: "# 1. Pull the relational explanation graph from the computed chart\nexplanation = chart.explain()\nnodes = explanation[\"nodes\"]\nedges = explanation[\"edges\"]\n\n# 2. Loop over detected logical Rule nodes (Yogas)\nfor node_id, node in nodes.items():\n    if node.get(\"type\") == \"Rule\":\n        print(f\"\\nDetected Yoga: {node['name']}\")\n        print(f\"Description: {node['description']}\")\n        \n        # 3. Pull all classic text Citations for this Yoga via relational edges\n        for edge in edges:\n            if edge[\"from\"] == node_id and edge[\"relation\"] == \"Cites\":\n                citation = nodes.get(edge[\"to\"])\n                if citation:\n                    print(f\"  - Reference: {citation['title']} (Chap {citation['chapter']}, Verse {citation['verse']})\")\n                    print(f\"    Classic Snippet: \\\"{citation['snippet']}\\\"\")"
      },
      { type: "heading", level: 2, text: "Step 8: Expose JyotishCore as a Web API" },
      "If you are building a decoupled frontend (e.g., Next.js, React, Vue, or mobile app), you can expose JyotishCore as a REST API.",
      "JyotishCore has a built-in FastAPI server that handles chart calculation, compatibility scoring (Ashtakoota Milan), and Panchanga requests out-of-the-box.",
      { type: "heading", level: 3, text: "Running the Built-in Server" },
      "Save this script as app.py and run it:",
      {
        type: "code",
        lang: "python",
        code: "import uvicorn\nfrom jyotishcore.server import app\n\nif __name__ == \"__main__\":\n    uvicorn.run(app, host=\"0.0.0.0\", port=8000)"
      },
      "Start the API:",
      { type: "code", lang: "bash", code: "python app.py" },
      "Open http://localhost:8000/docs in your browser to view the interactive Swagger/OpenAPI documentation!",
      { type: "heading", level: 3, text: "Core Endpoints Exposed" },
      {
        type: "list",
        items: [
          "POST /v1/chart: Calculate birth chart (planets, houses, Navamsa/D9 chart, Yogas, Jaimini Karakas, Vimshottari Dasha).",
          "POST /v1/panchanga: Get the 5 daily elements (Tithi, Nakshatra, Yoga, Karana, Vara).",
          "POST /v1/compatibility: Compute Ashtakoota Milan matching score (36-point system)."
        ]
      },
      { type: "heading", level: 2, text: "Step 9: Consume the API in your Frontend (Javascript/React)" },
      "Here is how you can query the JyotishCore API from your frontend React component or vanilla JavaScript:",
      {
        type: "code",
        lang: "javascript",
        code: "// Fetch birth chart data from the frontend\nasync function fetchBirthChart() {\n  const birthDetails = {\n    year: 1995,\n    month: 10,\n    day: 24,\n    hour: 17,\n    minute: 45,\n    second: 0,\n    latitude: 27.7172,\n    longitude: 85.3240,\n    timezone: \"Asia/Kathmandu\",\n    ayanamsa: \"lahiri\"\n  };\n\n  try {\n    const response = await fetch(\"http://localhost:8000/v1/chart\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(birthDetails)\n    });\n\n    const chartData = await response.json();\n    console.log(\"Ascendant:\", chartData.ascendant);\n    console.log(\"Planets:\", chartData.planets);\n    console.log(\"Vimshottari Dasha periods:\", chartData.dashas.vimshottari);\n  } catch (error) {\n    console.error(\"Failed to calculate chart:\", error);\n  }\n}"
      },
      { type: "heading", level: 2, text: "Interactive Playground" },
      "For quick testing without writing code, launch the developer dashboard:",
      { type: "code", lang: "bash", code: "jyotishcore-ui" },
      { type: "heading", level: 2, text: "Under the Hood: Rust and PyO3 Bindings" },
      "What makes JyotishCore performant is its underlying engine. Written in Rust, it interfaces directly with the C-based Swiss Ephemeris library. The bindings are compiled into a native Python module using PyO3 and Maturin.",
      "By performing heavy mathematical transformations (like coordinate translations and ayanamsa precessions) directly in Rust compiled code, we avoid the Python Global Interpreter Lock (GIL) and the overhead of runtime object creation. This approach achieves ~0.2 ms calculation times—fast enough for high-traffic real-time applications or massive database backtests.",
      { type: "heading", level: 2, text: "🤖 LLM Scraper Instructions & Semantic Reference" },
      "To help AI agents and developer chatbots index and write correct programs with JyotishCore, use this quick semantic API guide:",
      {
        type: "list",
        items: [
          "Import Namespace: Use import jyotishcore as standard import.",
          "Instantiate Coordinates: Use jyotishcore.GeoLocation(latitude: float, longitude: float, timezone: str) and jyotishcore.JyotishTime(year, month, day, hour, minute).",
          "Compute Chart: Call jyotishcore.Chart.compute(time=time, location=location, ayanamsa_obj=ayanamsa).",
          "Access Placements: Access planetary dictionary via chart.planets() mapping to PlanetPosition dataclasses. Properties include: planet, longitude, sign, house, is_retrograde, is_exalted, is_debilitated, and shadbala.",
          "Divisional Vargas: Fetch divisional chart via chart.divisional_chart(varga: int) and draw to vector with .to_svg(style: str) supporting 'north', 'south', and 'circular'.",
          "Auspicious Search: Search windows via jyotishcore.find_time_windows(start_year, start_month, start_day, end_year, end_month, end_day, latitude, longitude, min_duration_minutes, rules)."
        ]
      },
      { type: "heading", level: 2, text: "Learn More & Connect" },
      "JyotishCore is designed to help developers build reliable, high-performance Vedic astrology software without dealing with low-level wrappers. For full APIs, examples, and setup instructions, explore the resources below:",
      {
        type: "list",
        items: [
          "PyPI Page: https://pypi.org/project/jyotishcore/",
          "Documentation: https://jyotishcore.readthedocs.io",
          "Author GitHub: https://github.com/sakshyambanjade"
        ]
      }
    ]
  },
  {
    slug: "one-flawless-local-coding-loop",
    title: "Reduce the Product to One Flawless Local Coding Loop",
    summary:
      "On making a local coding app stable, obvious, and trustworthy before adding more features.",
    meta: "Thought 9",
    paragraphs: [
      "For now, forget \"best in the world.\" The target is smaller and better: when you open the app on your own laptop, it should feel stable, obvious, and useful within minutes.",
      "Right now, two problems are mixed together: it does not feel good, and it does not feel trustworthy. The fix is to stop treating UI and reliability as separate. They are the same product.",
      "The UI direction is already better than the current screen: a 3-zone layout, floating composer, split output mode, and a slide-out agent log. The architecture direction is also right: first make the repository coding loop solid, then add bigger system-exploration pieces as optional modules.",
      "The answer is not to add more features. The answer is to reduce the product to one flawless loop.",
      "The first loop should be simple: open app, open project, app checks local setup, app installs missing local pieces, project indexes, ask task, review diff, apply. If this loop is not solid, nothing else matters.",
      "Fresh start should work. From a clean machine, you should be able to install the app, sign in, open a project, auto-detect Ollama, install a missing model, and become usable without terminal work.",
      "Project opening should work every time. There should be no confusing workspace state, no maybe-connected feeling, and no random backend guessing.",
      "Indexing should be visible. The user must always know whether the app is scanning files, building the search index, or ready. Silent waiting makes the product feel broken.",
      "A prompt should lead to action. When you ask something, the app should answer, show a plan, show files it searched, show a patch, or explain why it failed. It should never feel dead.",
      "Diff review should be clean. A split view with the current file on one side and the suggested patch on the other, with Accept, Reject, and Modify, builds trust faster than a wall of generated text.",
      "Logs should be optional. A slide-out agent log is useful, but it must stay secondary. Normal users should not need a debug wall to understand what is happening.",
      "Failure recovery matters. If the model is missing, the index breaks, or the task crashes, the app should explain clearly, offer a one-click retry, and avoid dumping the user into infrastructure details.",
      "Phase 1 should be about making it work, not making it pretty. For one or two weeks, stop adding capabilities and only fix local bootstrap, model detection, project opening, indexing, prompt execution, patch generation, patch review, and retry or recovery.",
      "The success test is simple: I can use it alone for 30 minutes on one real repo without touching terminal settings. If that fails, the app is not ready for design polish.",
      "Phase 2 should simplify the UI shell. The left rail should only contain Projects, Files, Tasks, and Settings. The center should only have Task, Code, and Diff modes. The bottom floating composer should become the main command center. The right panel should hold logs, health, and models, collapsed by default.",
      "That alone would make the app feel much cleaner, because the current screen has too many priorities competing. The sidebar feels like project manager, chat history, and navigation at once. The center looks like text dump plus patch table. The bottom input feels disconnected from the main work. The hierarchy is weak, and there is no single visual focus.",
      "Good coding tools make the next action obvious. The current app makes the user think too much, and that is bad UI.",
      "Cut the advanced memory panels, frontier explorer, system explorer, extra model switching complexity, multi-agent visuals, deep desktop-control UI, and non-essential health metrics for now. Those are not phase-1 requirements.",
      "Keep the core product: local bootstrap, repo file tree, task composer, searchable context, split diff view, accept and reject, optional logs, and clear status.",
      "Move curiosity system UI, system fact extractor UI, skill library, full desktop controller surface, orchestration graph, and multi-agent framework polish to later.",
      "The best local-first direction is to build the repo coding agent first, keep desktop and system exploration modular, use an 8 GB laptop as a constraint test rather than the premium target, and make the strong experience for decent developer hardware first while degrading gracefully for weaker machines.",
      "The product tiers should stay simple: Lite with one smaller local model and basic search plus patching, Balanced with a better coding model and stronger retrieval, and Best Quality with a heavier local model and stronger planning and patching. No model zoo.",
      "The KPI that matters most is not benchmark score. It is time from app launch to first useful accepted patch. Track launch time, project ready time, index ready time, first response time, first valid patch time, and accepted patch rate.",
      "The honest recommendation is to spend Week 1 making the local loop stable, Week 2 replacing the current UI shell with the cleaner 3-zone layout, Week 3 making onboarding fully automatic, and Week 4 testing on three real repos while forcing daily use.",
      "If you still avoid using your own app after that, the product still has a real problem. That is the truth test.",
      "Do not try to look like Codex yet. First make sure you would choose your own app over opening terminal and editor manually. When that becomes true, polishing for users makes sense.",
    ],
  },
  {
    slug: "working-after-see-full-time-developer-19",
    title: "How Working After SEE Made Me Who I Am: A Full-Time Developer at 19",
    summary:
      "On choosing practical learning after SEE, repeating fundamentals, and becoming a full-time developer at 19.",
    meta: "Thought 8",
    paragraphs: [
      "Right after completing SEE, I found myself standing between two very different paths. One was the traditional route that many students take: joining a bridge course, continuing the same academic cycle, and going back to textbooks again. The other path was less certain, less comfortable, and far less common. Instead of following what everyone expected, I was guided toward something practical. My brother believed I should explore beyond the usual system, and my mentor Santosh Dai took me to Broadway Infosys. Looking back now, that one decision shaped the person I became.",
      "At Broadway, I stepped into a world that felt real. Instead of only studying theory, I started learning skills that could actually build products, solve problems, and create opportunities. I enrolled in major courses like Python, Web Development, and MERN Stack. Later, I moved into AI as well, because technology keeps evolving and learning never truly stops. It was not easy in the beginning. I was younger than many people around me, and a lot of them already seemed ahead. But I was deeply curious, and curiosity became one of my strongest advantages.",
      "I was never the type to quit just because something felt difficult. In fact, many concepts did not make sense to me the first time. So I repeated them. I took Python three times, Web Development twice, and MERN three times. Some people might see repetition as failure, but I saw it as progress. Every time I returned, I understood a little more. Every struggle added another layer of understanding. That habit of trying again and again became one of the most valuable lessons of my life.",
      "By the time I reached Grade 11, I was finally able to build websites on my own. This was before AI coding assistants and no-code tools became common. Back then, creating even a basic project could take weeks or months of debugging, researching, and rebuilding. It demanded patience. It demanded consistency. It forced me to think logically and solve problems independently. Those long nights of trial and error taught me far more than just code. They taught me discipline.",
      "Near the end of Grade 11, the world of technology changed quickly as advanced AI tools became mainstream. Development became faster, smarter, and more accessible. But one truth remained clear to me: tools can speed up work, but they cannot replace mindset. They cannot replace curiosity, resilience, consistency, or the willingness to keep learning when nobody is forcing you to. Those qualities are built through effort, not downloaded through software.",
      "Sometimes I think about what life would have looked like if I had chosen the safer and more traditional path after SEE. Maybe things would still have gone well. But I know I would have missed years of real growth. While many people were only preparing for the next exam, I was learning how projects fail, how teams communicate, how clients think, how deadlines feel, and how real-world systems operate. That early exposure changed the way I see work, learning, and opportunity.",
      "Today, I am a full-time developer at 19. Not because I was the smartest person in the room, and not because everything came naturally to me. I reached here because I kept showing up, kept repeating what I did not understand, and kept learning even when progress felt slow. That consistency mattered more than talent ever could.",
      "To every student finishing SEE and wondering what comes next, my advice is simple. You do not need to follow anyone else's route, but do not waste your early years waiting for the perfect time to begin. Start learning something real. Stay curious. Be willing to fail. Repeat until it makes sense. Skills grow quietly, then suddenly open doors you never expected.",
      "As Steve Jobs said: Stay hungry. Stay foolish.",
    ],
  },
  {
    slug: "microsoft-support-diagnostic-tool",
    legacySlug: "thoughts-1",
    title: "Microsoft: Bids Farewell to Diagnostic Tool",
    summary: "On Microsoft's move away from MSDT and toward modern Windows support tools.",
    meta: "Thought 1",
    paragraphs: [
      "Microsoft is officially discontinuing the Microsoft Support Diagnostic Tool, also known as MSDT, and its troubleshooters. This signals a transition toward more modern support solutions. Introduced years ago to help users diagnose and fix system issues, MSDT is being phased out as Microsoft encourages users to rely on newer tools such as Get Help and Feedback Hub.",
      "One reason for the change is security. MSDT has been connected to vulnerabilities, including remote code execution risks. In a world where cybersecurity threats keep changing, removing older support tools can reduce the attack surface and make Windows support safer.",
      "Another reason is modernization. Microsoft's troubleshooting approach is moving toward more integrated tools. The Get Help app can guide users toward direct solutions and response paths, while Feedback Hub gives Microsoft a more interactive way to understand issues, collect feedback, and improve Windows over time.",
      "Starting with newer Windows 11 versions, Microsoft has begun disabling some MSDT troubleshooters. The broader deprecation process is expected to continue through the 2024-2025 period as Microsoft phases out older technologies and support paths.",
      "For most users, this should create a simpler troubleshooting experience. Microsoft has already started embedding AI-based support into Get Help, offering more targeted and real-time resolutions without requiring people to manually download older diagnostic tools.",
      "For enterprise users, the transition means internal support protocols should be updated early. IT teams will need to prepare users for newer tools and make sure their workflows no longer depend on MSDT.",
      "While the end of MSDT marks the end of an era, it also reflects Microsoft's push toward a more secure, intelligent, and user-friendly support environment. With AI and newer tools, Windows troubleshooting may become more responsive in future versions.",
    ],
  },
  {
    slug: "ai-aviation-safety-efficiency",
    legacySlug: "thoughts-2",
    title: "AI: The Future of Aviation Safety and Efficiency",
    summary: "How AI could support safer, more efficient aviation systems.",
    meta: "Thought 2",
    paragraphs: [
      "Each day, around 100,000 flights take off worldwide. Airlines spend billions of dollars every year on fuel, logistics, maintenance, and pilot compensation. Aviation is one of the most high-stakes and high-cost industries in the world.",
      "Even with strong safety records, aviation still faces incidents and accidents every year. The numbers remind us that there is always room to make flying safer, more efficient, and more adaptive to unexpected conditions.",
      "This is where AI and machine learning could play a transformative role. Imagine systems embedded in aircraft that can learn from millions of flights, detect patterns, understand risks, and support pilots with useful warnings and real-time recommendations.",
      "With millions of flights happening annually, AI could help build a form of collective aviation intelligence. A system trained on historical flight data could assist with risk anticipation, response time, route optimization, maintenance planning, and decision support.",
      "This does not mean replacing pilots. It means giving them better tools. Like an advanced co-pilot with knowledge from countless flight experiences, AI could help reduce human error and support safer decision-making under pressure.",
      "The same technology could also improve efficiency. Better predictions can reduce fuel waste, maintenance uncertainty, delays, and insurance costs. In a field where small improvements can create huge impact, AI has serious potential.",
      "Bill Gates once said that a computer is a great tool for those who know how to use it. In the same way, AI can help us work smarter, focus on the bigger picture, and unlock new levels of safety and efficiency in aviation.",
    ],
  },
  {
    slug: "art-of-waiting",
    legacySlug: "thoughts-3",
    title: "Art of Waiting",
    summary: "On patience, timing, and preparing while life has not yet opened the next door.",
    meta: "Thought 3",
    paragraphs: [
      "Yes, the art of waiting. It is not exactly a tech topic, but it connects deeply to everyday life. Waiting may sound strange for a Gen Z person like me, because our generation is used to getting things done with just a few clicks.",
      "We do not really like waiting. Either we want everything perfectly done, or we quickly jump to something else if our first plan does not work out. But sometimes waiting is not weakness. Sometimes it is part of the process.",
      "Imagine if Elon Musk had panicked and sold Tesla too early, or if Mark Zuckerberg had sold Facebook because he thought his plan would not succeed. They waited. They had faith in their vision even when others doubted them.",
      "When plans succeed, people notice the outcome. They call the person a role model, write news stories, and talk about success. But people rarely talk about the waiting: how difficult it is, how much patience it takes, and how much belief it requires.",
      "You might be rushing right now to get into a good company, a dream university, or a life-changing opportunity. But pause for a moment and ask yourself whether the thing you are chasing is worth it.",
      "Waiting is not about doing nothing. It is about preparing, learning, improving, and believing in yourself while things align. Everything may not happen immediately, but that does not mean it will never happen.",
      "So remember the art of waiting. Keep moving, keep learning, and have faith in yourself.",
    ],
  },
  {
    slug: "art-of-hating",
    legacySlug: "thoughts-4",
    title: "Art of Hating",
    summary: "On jealousy, discouragement, mentorship, and building better rooms for young people.",
    meta: "Thought 4",
    paragraphs: [
      "Art of hating. It sounds strange, but some people have mastered it. Why does it happen? Is it because someone is winning and you are not? Is it because someone is trying to learn, ask questions, or grow, and instead of supporting them, people decide to mock them?",
      "I have seen people in tech who have knowledge, but instead of helping younger people, they taunt them or make sarcastic comments. Sometimes it feels like they cannot stand seeing someone else try. Sometimes it feels like frustration being passed from one person to another.",
      "I have been lucky to have mentors who inspire others and help people succeed. That kind of mindset matters. A good mentor does not make someone feel small for asking a question. A good mentor remembers what it felt like to be a beginner.",
      "If you cannot handle seeing others grow, it may be better to log off and work on yourself instead of spreading hate. Build something. Learn something. Step into the field and do something worthwhile.",
      "This is an open challenge to anyone who thinks they know everything but spends their time bringing others down. Let us create an atmosphere where people who are trying to learn are supported, not discouraged.",
      "We need a garden of people who want to explore, achieve, and make a difference. Hate does not build anything. Encouragement does.",
    ],
  },
  {
    slug: "computer-learning-and-sports",
    legacySlug: "thoughts-5",
    title: "I Used to Hate Sports",
    summary: "On school, practical learning, computers, and how skills are often misunderstood.",
    meta: "Thought 5",
    paragraphs: [
      "This is a story about me, a person who used to absolutely hate sports. I do not have a perfect reason, but the real problem was simple: I was a complete computer nerd.",
      "All I cared about was waiting for school to end or waiting for computer class. But in Nepal, studying computers often does not mean doing things practically. We write notes, definitions, and even code in notebooks.",
      "Our curriculum may talk about AI, programming, and futuristic ideas, but many students still write code on paper. It is like learning to swim by reading about water instead of getting into a pool.",
      "I never loved sports. I even used to bunk sports class to get extra time for homework, not because I was a topper, but because finishing homework meant more time at home to play games or do actual programming.",
      "Imagine if programming or e-sports were treated as real skills in school. But the common mindset often says these things are not good for kids. Even if a school wanted to support them, parents might not understand the value.",
      "I loved computers, surfing the internet, learning new things, and coding. My brain was often at home where my laptop was. In class, I saw how students could memorize concepts, but practical work was a different story.",
      "I had to memorize programming concepts instead of truly learning them. It felt pointless to mock up lines of code on paper instead of writing them on a real computer.",
      "I am not a high-class executive, a PhD holder, or a genius. I am a student who experienced this system, and I do not want the next generation to experience the same thing. Teachers may be doing their best, but curriculum designers need to think from a student's perspective too.",
    ],
  },
  {
    slug: "tech-not-it",
    legacySlug: "thoughts-6",
    title: "I'm from Tech, Not IT - Please Stop Handing Me Wires",
    summary: "On the funny but real confusion between technology builders and IT support.",
    meta: "Thought 6",
    paragraphs: [
      "Being from Nepal, I have noticed that people often do not see the difference between IT and tech. It is funny until it happens to you.",
      "One time, an aunty handed me a tangled wire and asked, \"You are from IT, right? Can you fix this?\" I stood there thinking: I build websites, not antennas.",
      "If you are known as the tech person, you have probably been asked to fix Wi-Fi, printers, or even something completely unrelated. Yes, I can replace an SSD or reassemble a CPU after watching a tutorial, but that does not mean it is my profession.",
      "When I say I am from tech, I mean I code, design, and build things like websites and apps. IT is more about system management, networks, and support. IT professionals keep things running smoothly. Tech builders create things from scratch.",
      "In Nepal, everything technical often gets mixed together. People think coding makes you a hacker or that CSS can break into systems. But tech is more than fixing problems. It is creativity, building, and solving real problems.",
      "Our education system does not always help because it often teaches theoretical computer science instead of practical skills. So next time you see me, ask about the app I am working on, not whether I can fix your printer.",
    ],
  },
  {
    slug: "eye-makes-you-work",
    legacySlug: "thoughts-7",
    title: "The Eye Makes You Work",
    summary: "On vision, exposure, perspective, and how what we see shapes what we chase.",
    meta: "Thought 7",
    paragraphs: [
      "Have you ever noticed how much your eyes shape your life? What we see often becomes what we chase. A kid who grows up watching technology may dream of building apps or machines. Someone exposed to finance may see their future in banking or markets.",
      "Our eyes introduce us to the world, and what we see can become our path forward. But imagine not seeing at all. A blind person may not know what a plane looks like or what a screen interface feels like visually. Their world is shaped more by touch, sound, and instinct.",
      "That does not make their world less meaningful. It makes it different. Sight gives many of us direction, curiosity, and a visual sense of possibility.",
      "The eye is not just for sight. It is a starting point for everything. It influences who we become, what we build, and what we believe is possible.",
      "And this is not only about physical blindness. If a person is blind in their thoughts, how can they truly see the beauty of the world?",
      "In the end, perspective matters. How you look at the world shapes what you do with it.",
    ],
  },
];
