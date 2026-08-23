export const lifecycleDocuments = {
  prd: {
    id: "prd",
    abbreviation: "PRD",
    name: "Product requirements document",
    phase: "plan",
    path: "/plan/prd/",
    summary: "Makes product intent, scope, behavior, and success measures reviewable.",
    live: true,
  },
  rfc: {
    id: "rfc",
    abbreviation: "RFC",
    name: "Request for comments",
    phase: "design",
    path: "/design/rfc/",
    summary:
      "Turns a substantial technical change into a reviewable proposal before implementation.",
    live: true,
  },
  adr: {
    id: "adr",
    abbreviation: "ADR",
    name: "Architecture decision record",
    phase: "design",
    path: "/design/adr/",
    summary: "Records one architecturally significant decision, its context, and consequences.",
    live: true,
  },
} as const;

export type LifecycleDocumentId = keyof typeof lifecycleDocuments;
export type LifecycleDocument = (typeof lifecycleDocuments)[LifecycleDocumentId];

export const lifecyclePhases = [
  {
    id: "discover",
    index: 1,
    name: "Requirements",
    action: "Find the signal",
    summary: "Learn who needs what, and why now.",
    state: "soon",
    colorVariable: "--phase-discover",
    documents: [],
  },
  {
    id: "plan",
    index: 2,
    name: "Planning",
    action: "Set the target",
    summary: "Turn evidence into shared product intent.",
    state: "open",
    colorVariable: "--phase-plan",
    documents: ["prd"],
  },
  {
    id: "design",
    index: 3,
    name: "Design",
    action: "Choose the shape",
    summary: "Review the change and record durable choices.",
    state: "open",
    colorVariable: "--phase-design",
    documents: ["rfc", "adr"],
  },
  {
    id: "build",
    index: 4,
    name: "Implementation",
    action: "Make the change",
    summary: "Create the agreed change in safe steps.",
    state: "soon",
    colorVariable: "--phase-build",
    documents: [],
  },
  {
    id: "verify",
    index: 5,
    name: "Testing",
    action: "Prove the change",
    summary: "Check behavior, quality, and risk.",
    state: "soon",
    colorVariable: "--phase-verify",
    documents: [],
  },
  {
    id: "release",
    index: 6,
    name: "Deployment",
    action: "Put it in reach",
    summary: "Move the change into use with control.",
    state: "soon",
    colorVariable: "--phase-release",
    documents: [],
  },
  {
    id: "operate",
    index: 7,
    name: "Maintenance",
    action: "Keep value flowing",
    summary: "Run, support, improve — and feed what you learn back.",
    state: "soon",
    colorVariable: "--phase-operate",
    documents: [],
  },
] as const satisfies readonly {
  id: string;
  index: number;
  name: string;
  action: string;
  summary: string;
  state: "open" | "soon";
  colorVariable: string;
  documents: readonly LifecycleDocumentId[];
}[];

export type LifecyclePhase = (typeof lifecyclePhases)[number];
export type PhaseId = LifecyclePhase["id"];
