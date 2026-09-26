export const socials = [
  {
    name: "X (Twitter)",
    url: "https://x.com/akramcodez",
    handle: "@akramcodez",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/akramcodez",
    handle: "/in/akramcodez",
  },
  {
    name: "GitHub",
    url: "https://github.com/akramcodez",
    handle: "/akramcodez",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/akramcodez",
    handle: "/u/akramcodez",
  },
  {
    name: "Peerlist",
    url: "https://peerlist.io/akramcodez",
    handle: "/akramcodez",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/akramcodez",
    handle: "@akramcodez",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@akramcodez",
    handle: "/akramcodez",
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/u/0/?fs=1&to=skakram00zz@gmail.com&tf=cm",
    handle: "Contact me",
  },
];

export const skills = [
  "MERN",
  "NextJS",
  "TypeScript",
  "Tailwind",
  "MySQL",
  "MongoDB",
  "Prisma",
  "Postman",
  "Git",
  "GitHub",
  "Python",
  "Java",
  "Cpp",
  "C",
  "CI/CD",
];

type Project = {
  name: string;
  tech: string;
  desc: string;
  link: string;
  liveLink: string;
  video?: string;
};

export const projects: Project[] = [
  {
    name: "OsFit",
    tech: "Next.js • Tailwind • Supabase",
    desc: "AI-powered tool for analyzing GitHub files and solving issues. Supports 20+ languages",
    link: "https://github.com/akramcodez/osfit",
    liveLink: "https://osfit.akramcodez.com",
    video: "https://x.com/akramcodez/status/2005999816070029547",
  },
  {
    name: "RepoTune",
    tech: "CLI • TypeScript",
    desc: "Repository quality toolkit for open source maintainers. Scan any repo in seconds.",
    link: "https://github.com/akramcodez/repotune",
    liveLink: "https://www.npmjs.com/package/repotune",
  },
  {
    name: "PIVA",
    tech: "Next.js • Prisma • T3 Stack",
    desc: "AI-powered webinar platform",
    link: "https://github.com/akramcodez/piva",
    liveLink: "https://piva.akramcodez.com",
    video: "https://x.com/akramcodez/status/1948605383528120502",
  },
  {
    name: "MyTube",
    tech: "React • TypeScript • Tailwind",
    desc: "Modern YouTube clone",
    link: "https://github.com/akramcodez/mytube_home",
    liveLink: "https://my-tube-omega-lime.vercel.app",
  },
];

export const repos = [
  {
    name: "appwrite",
    prs: [
      {
        title:
          "fix: prevent user enumeration on password recovery endpoint",
        url: "https://github.com/appwrite/appwrite/pull/13438",
      }
    ],
  },
  {
    name: "Zed",
    prs: [
      {
        title:
          "Ensure stale git commit template are not persisted",
        url: "https://github.com/zed-industries/zed/pull/63604",
      }
    ],
  },
  {
    name: "temporalio/sdk-typescript",
    prs: [
      {
        title:
          "test: adapt integration tests for Temporal Cloud",
        url: "https://github.com/temporalio/sdk-typescript/pull/2354",
      }
    ],
  },
  {
    name: "growthbook",
    prs: [
      {
        title:
          "fix(helm): update sub-chart appVersion to 4.4.0",
        url: "https://github.com/growthbook/growthbook/pull/6048",
      }
    ],
  },
  {
    name: "openclaw",
    prs: [
      {
        title: "fix: force supportsDeveloperRole=false for non-native OpenAI endpoints",
        url: "https://github.com/openclaw/openclaw/pull/29479",
      },
      {
        title: "fix: use SID-based ACL classification for non-English Windows",
        url: "https://github.com/openclaw/openclaw/pull/23415",
      },
      {
        title: "fix: sanitize native command names for Telegram API",
        url: "https://github.com/openclaw/openclaw/pull/19257",
      },
      {
        title: "fix: add optional chaining for runResult.meta.agentMeta access",
        url: "https://github.com/openclaw/openclaw/pull/18026",
      },
      {
        title:
          "feat: add stuck loop detection and exponential backoff infrastructure for agent polling",
        url: "https://github.com/openclaw/openclaw/pull/17118",
      },
      {
        title: "fix: make sensitive field whitelist case-insensitive",
        url: "https://github.com/openclaw/openclaw/pull/16148",
      },
      {
        title: "fix: allow device-paired clients to retrieve TTS API keys",
        url: "https://github.com/openclaw/openclaw/pull/14613",
      },
      {
        title: "feat: expose /compact command in Telegram native menu",
        url: "https://github.com/openclaw/openclaw/pull/10352",
      },
      {
        title: "fix: don't lowercase Slack channel IDs",
        url: "https://github.com/openclaw/openclaw/pull/14055",
      },
      {
        title: "fix: preserve original filename for WhatsApp inbound documents",
        url: "https://github.com/openclaw/openclaw/pull/12691",
      },
      {
        title:
          "fix: L2-normalize local embedding vectors to fix semantic search",
        url: "https://github.com/openclaw/openclaw/pull/5332",
      },
    ],
  },
  {
    name: "browser-use",
    prs: [
      {
        title:
          "fix: prevent unnecessary blank tab creation when closing background tabs",
        url: "https://github.com/browser-use/browser-use/pull/3766",
      },
      {
        title: "fix: expose prohibited_domains in BrowserSession",
        url: "https://github.com/browser-use/browser-use/pull/3770",
      },
    ],
  },
  {
    name: "nanocoder",
    prs: [
      {
        title: "Become a Nanocoder Maintainer and merge many more PRs",
        url: "https://github.com/Nano-Collective/nanocoder/issues?q=is%3Apr%20author%3Aakramcodez%20is%3Amerged",
      },
      {
        title: "fix: add timeout, output limits, and abort support",
        url: "https://github.com/Nano-Collective/nanocoder/pull/547",
      },
      {
        title: "fix: resolve autosave race, history truncation, and resume rebase",
        url: "https://github.com/Nano-Collective/nanocoder/pull/545",
      },
      {
        title:
          "feat: add conversation checkpoint system with interactive loading",
        url: "https://github.com/Nano-Collective/nanocoder/pull/129",
      },
      {
        title: "feat: switch from Prettier to Biome for formatting",
        url: "https://github.com/Nano-Collective/nanocoder/pull/139",
      },
      {
        title: "feat: add CLI test harness for non-interactive mode",
        url: "https://github.com/Nano-Collective/nanocoder/pull/154",
      },
      {
        title: "feat: add /settings command for interactive command menu",
        url: "https://github.com/Nano-Collective/nanocoder/pull/320",
      },
    ],
  },
  {
    name: "opsiMate",
    prs: [
      {
        title:
          "[Feat] created Add Key Modal Instead of Redirecting to Secrets Page",
        url: "https://github.com/OpsiMate/OpsiMate/pull/312",
      },
    ],
  },
  {
    name: "activepieces",
    prs: [
      {
        title: "fix: persist sidebar state across browser refresh",
        url: "https://github.com/activepieces/activepieces/pull/9529",
      },
      {
        title: "feat: add model selection dropdown to ai agent piece",
        url: "https://github.com/activepieces/activepieces/pull/9950",
      },
      {
        title: "fix: handle empty/null JSON bodies in webhook endpoints",
        url: "https://github.com/activepieces/activepieces/pull/10082",
      },
      {
        title: "feat: add last used column to track key usage",
        url: "https://github.com/activepieces/activepieces/pull/10159",
      },
      {
        title: "feat: add Push to Git option to table dropdown menu",
        url: "https://github.com/activepieces/activepieces/pull/10001",
      },
      {
        title: "fix: improve project settings UI/UX",
        url: "https://github.com/activepieces/activepieces/pull/10465",
      },
      {
        title: "fix: resolve sidebar state persistence and interaction issues",
        url: "https://github.com/activepieces/activepieces/pull/10464",
      },
      {
        title: "feat: add invite user option to sidebar menu",
        url: "https://github.com/activepieces/activepieces/pull/10473",
      },
      {
        title: "feat: implement smart relative date formatting across tables",
        url: "https://github.com/activepieces/activepieces/pull/10474",
      },
      {
        title: "fix: make project members count clickable to access settings",
        url: "https://github.com/activepieces/activepieces/pull/10472",
      },
      {
        title: "fix: standardize page header styling and height",
        url: "https://github.com/activepieces/activepieces/pull/10475",
      },
      {
        title: "feat: add multiple body type support to Custom API Action",
        url: "https://github.com/activepieces/activepieces/pull/10171",
      },
    ],
  },
  {
    name: "internetarchive",
    prs: [
      {
        title: "Remove Vue files from temporary ESLint formatting exemptions",
        url: "https://github.com/internetarchive/openlibrary/pull/12453",
      },
      {
        title: "fix: add FastAPI route alias for .json check-in POSTs to match legacy web.py behavior",
        url: "https://github.com/internetarchive/openlibrary/pull/12394",
      },
      {
        title: "feat: auto-sync docs wiki into docs/wiki/ on container start",
        url: "https://github.com/internetarchive/openlibrary/pull/12351",
      },
      {
        title: "fix: add noopener noreferrer to external links with target blank",
        url: "https://github.com/internetarchive/openlibrary/pull/12348",
      },
      {
        title: "fix: password reflected in DOM on failed login",
        url: "https://github.com/internetarchive/openlibrary/pull/12328",
      },
      {
        title: "fix: align focus ring on search input to container border",
        url: "https://github.com/internetarchive/openlibrary/pull/12069",
      },
      {
        title: "fix: improve homepage accessibility for screen readers",
        url: "https://github.com/internetarchive/openlibrary/pull/11355",
      },
      {
        title: "Fix header buttons on Create List page (#11301)",
        url: "https://github.com/internetarchive/openlibrary/pull/11320",
      },
      {
        title: "fix: handle EXIF orientation for uploaded images",
        url: "https://github.com/internetarchive/openlibrary/pull/11362",
      },
      {
        title: "Add webp to supported formats listed on add cover page",
        url: "https://github.com/internetarchive/openlibrary/pull/11392",
      },
      {
        title:
          "fix: Improve Yearly Reading Goal modal for better usability and clarity",
        url: "https://github.com/internetarchive/openlibrary/pull/11343",
      },
      {
        title: "fix: minimum book thickness validation",
        url: "https://github.com/internetarchive/openlibrary/pull/11545",
      },
      {
        title: "fix: migrate registration newsletter to native HTML checkbox",
        url: "https://github.com/internetarchive/openlibrary/pull/11400",
      },
      {
        title: "fix: mobile dropdown cell height",
        url: "https://github.com/internetarchive/openlibrary/pull/11477",
      },
      {
        title: "fix: improve UX and clarity for Bulk Search",
        url: "https://github.com/internetarchive/openlibrary/pull/11358",
      },
    ],
  },
  {
    name: "ghostfolio",
    prs: [
      {
        title: "Task/migrate auth page component to standalone",
        url: "https://github.com/ghostfolio/ghostfolio/pull/5695",
      },
      {
        title: "Task/migrate file drop directive to standalone",
        url: "https://github.com/ghostfolio/ghostfolio/pull/5646",
      },
      {
        title: "Task/prefix home watchlist component with Gf",
        url: "https://github.com/ghostfolio/ghostfolio/pull/5640",
      },
      {
        title: "Task/prefix create watchlist item dialog component with Gf",
        url: "https://github.com/ghostfolio/ghostfolio/pull/5617",
      },
    ],
  },
  {
    name: "dodopayments",
    prs: [
      {
        title: "Replace hardcoded country/state/city arrays with dynamic data",
        url: "https://github.com/dodopayments/billingsdk/pull/260",
      },
      {
        title: "Fix #211: payment-method-selector-ui",
        url: "https://github.com/dodopayments/billingsdk/pull/239",
      },
      {
        title: "Fix #211: payment-method-manager-ui",
        url: "https://github.com/dodopayments/billingsdk/pull/237",
      },
      {
        title: "Fix #210 : upcoming-charges-responsiveness",
        url: "https://github.com/dodopayments/billingsdk/pull/236",
      },
      {
        title: "Fix #210: usage table responsiveness",
        url: "https://github.com/dodopayments/billingsdk/pull/228",
      },
      {
        title: "Fix #210: usage-based-pricing-responsiveness",
        url: "https://github.com/dodopayments/billingsdk/pull/217",
      },
    ],
  },
  {
    name: "circuitverse",
    prs: [
      {
        title: "Fix: translation for Member since in Arabic",
        url: "https://github.com/CircuitVerse/CircuitVerse/pull/6005",
      },
      {
        title: "fix: rtl modal close buttons position",
        url: "https://github.com/CircuitVerse/CircuitVerse/pull/6034",
      },
    ],
  },
];

export const aboutContent = [
  <>
    I&apos;m <span className="font-medium text-foreground">Sk Akram</span>, a software engineer from <span className="font-medium text-foreground">India</span>. I&apos;m currently a Software Engineer at <a href="https://nanocollective.org/" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">Nano Collective</a> and also work part-time as a Software Engineer at <a href="https://experts.afterquery.com/" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">AfterQuery Experts</a>. I&apos;ve worked across projects involving <span className="font-medium text-foreground">AI</span>, <span className="font-medium text-foreground">developer tooling</span>, and <span className="font-medium text-foreground">full-stack web development</span>.
  </>,
  <>
    I&apos;m also an active <span className="font-medium text-foreground">open-source contributor</span> with <span className="font-medium text-foreground">60+ merged PRs</span> across projects and organizations including <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">OpenClaw</a>, <a href="https://github.com/activepieces/activepieces" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">Activepieces</a>, <a href="https://github.com/internetarchive/openlibrary" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">Internet Archive</a>, <a href="https://github.com/zed-industries/zed" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">zed</a>, and <a href="https://github.com/dodopayments/billingsdk" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">DodoPayments</a>. I really like working on hard things because I want to keep growing and in the process provide meaningful value to others. Outside of software engineering, I share what I&apos;m building, learning, and some random thoughts with a <span className="font-medium text-foreground">6K+ audience</span> on <a href="https://x.com/akramcodez" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">X (@akramcodez)</a>.
  </>
];

export const experiences = [
  {
    company: "AfterQuery Experts",
    logo: "/afterquery.png",
    link: "https://experts.afterquery.com",
    roles: [
      {
        title: "Software Engineer",
        type: "Part-time",
        location: "Remote",
        period: "Aug 2026 - Present",
      }
    ]
  },
  {
    company: "Nano Collective",
    logo: "/nc.png",
    link: "http://nanocollective.org",
    roles: [
      {
        title: "Software Developer",
        type: "Full-time",
        location: "Remote",
        period: "Jun 2026 - Present",
      }
    ]
  },
  {
    company: "Kebulan Grid",
    logo: "/kebulan.png",
    link: "https://kebulangrid.com",
    roles: [
      {
        title: "Full-stack Developer",
        type: "Part-time",
        location: "Remote",
        period: "May 2026 - Aug 2026",
      },
      {
        title: "Full-stack Developer",
        type: "Full-time",
        location: "Remote",
        period: "Nov 2025 - Apr 2026",
      }
    ]
  }
];
