// ============================================================================
// Research galaxy: all on-screen text.
// Edit the text between quotes, save, then refresh the browser (Cmd+R).
// Leave the commas and brackets alone.
// (Role tags are shown in capitals automatically. Leave sub: "" for no subtitle.)
//
// Each project has four fields:
//   name:  the project title (large text)
//   sub:   one short line under the title, max ~7 words (key finding or venue)
//   badge: a small pill above the title. Use "Published", "Under review",
//          "Preprint" or "In progress". Leave badge: "" for no pill.
//   url:   a public link (DOI, arXiv, HBR, SSRN, Zenodo). When filled in, a small
//          ↗ appears after the title, and clicking the title opens the link in a
//          new tab without advancing the slide. Leave url: "" for no link.
// A system holds 3 to 5 projects.
//
// showFoundations: true draws a faint outer ring of tiny stars, with the
//   `foundations` label shown only on the last (zoomed-out) step.
//   Set it to false to hide both.
// ============================================================================
window.GALAXY_TEXT = {

  // Steps 1, 3, 5, 7, 9: zoomed-out galaxy
  title: "Humans in an AI-Mediated World",
  core: "THE HUMAN",

  // The four star systems, in the order the talk zooms into them
  systems: [
    { // Step 2
      name: "Synthetic Consumers",
      role: "AI as Other",
      question: "What happens when we interact with AI stand-ins?",
      projects: [
        { name: "Synthetic contact", sub: "AI chats reduce cross-partisan animosity",
          badge: "Under review", url: "https://doi.org/10.48550/arxiv.2607.02181" },
        { name: "Learning from AI personas", sub: "What consumers learn from AI personas",
          badge: "In progress", url: "" },
        { name: "Synthetic twins and survey bias", sub: "Digital twins and survey question wording",
          badge: "In progress", url: "" },
      ],
    },
    { // Step 4
      name: "Learning & Effort",
      role: "AI as Tool",
      question: "How does AI shape human capabilities?",
      projects: [
        { name: "Coach not Crutch", sub: "AI practice → better unaided writing",
          badge: "Under review", url: "https://doi.org/10.48550/arxiv.2502.02880" },
        { name: "How Gen Z uses Gen AI", sub: "HBR · 79% worry AI makes people lazier",
          badge: "Published", url: "https://hbr.org/2026/01/how-gen-z-uses-gen-ai-and-why-it-worries-them" },
        { name: "AI writing for busy readers", sub: "AI practice and writing for busy readers",
          badge: "In progress", url: "" },
        { name: "AI coaching at Khan Academy", sub: "AI coaching for student motivation",
          badge: "", url: "" },
      ],
    },
    { // Step 6
      name: "Judgment & Choice",
      role: "AI as Advisor",
      question: "How does AI change how we think and decide?",
      projects: [
        { name: "AI in college admissions", sub: "Science Advances 2023",
          badge: "Published", url: "https://doi.org/10.1126/sciadv.adg9405" },
        { name: "LLM-Reasons: deliberating with AI", sub: "How AI assistance shapes consumer reasoning",
          badge: "In progress", url: "" },
        { name: "Homogenization of admissions essays", sub: "Post-ChatGPT: diverse words, less original ideas",
          badge: "Preprint", url: "https://doi.org/10.31234/osf.io/jsz58_v8" },
        { name: "Thinking outside the bots", sub: "Human vs. AI idea generation",
          badge: "In progress", url: "" },
      ],
    },
    { // Step 8
      name: "Agentic Workflows",
      role: "AI as Collaborator",
      question: "How does AI change how we do behavioral science?",
      projects: [
        { name: "Copilot training at work", sub: "Field experiment on AI training at work",
          badge: "In progress", url: "" },
        { name: "LLM heterogeneity", sub: "Using LLMs to study effect heterogeneity",
          badge: "In progress", url: "" },
        { name: "Trustworthy AI-assisted research", sub: "Principles for AI-assisted research workflows",
          badge: "In progress", url: "" },
      ],
    },
  ],

  // Step 9: the line along the bottom (Tool, Advisor, Other, Collaborator)
  spine: ["Tool", "Advisor", "Other", "Collaborator"],

  // Faint outer ring for peripheral work; label shows on step 9 only
  showFoundations: true,
  foundations: "+ foundations: measurement, field experiments, econometrics",

  // Small tag next to the step dots while autoplay (A key) is on
  autoplayTag: "AUTO",
};
