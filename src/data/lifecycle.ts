import type { PublishedSlug } from "../lib/topics";

export type LifecycleDocumentId = PublishedSlug;

export const lifecyclePhases = [
  {
    id: "discover",
    index: 1,
    name: "Requirements",
    action: "Understand the need",
    summary: "Learn who needs what and why it matters now.",
    colorVariable: "--phase-discover",
    documents: [],
  },
  {
    id: "plan",
    index: 2,
    name: "Planning",
    action: "Set the direction",
    summary: "Turn evidence into a shared product plan.",
    colorVariable: "--phase-plan",
    documents: ["prd"],
  },
  {
    id: "design",
    index: 3,
    name: "Design",
    action: "Shape the solution",
    summary: "Shape the experience and record durable decisions.",
    colorVariable: "--phase-design",
    documents: ["rfc", "adr"],
  },
  {
    id: "build",
    index: 4,
    name: "Implementation",
    action: "Build the change",
    summary: "Build the agreed change in safe, reviewable steps.",
    colorVariable: "--phase-build",
    documents: [],
  },
  {
    id: "verify",
    index: 5,
    name: "Testing",
    action: "Verify the change",
    summary: "Check behaviour, quality, and risk.",
    colorVariable: "--phase-verify",
    documents: [],
  },
  {
    id: "release",
    index: 6,
    name: "Deployment",
    action: "Release safely",
    summary: "Make the change available safely.",
    colorVariable: "--phase-release",
    documents: [],
  },
  {
    id: "operate",
    index: 7,
    name: "Maintenance",
    action: "Operate and improve",
    summary: "Run, support, and improve the service. Feed what you learn back.",
    colorVariable: "--phase-operate",
    documents: [],
  },
] as const satisfies readonly {
  id: string;
  index: number;
  name: string;
  action: string;
  summary: string;
  colorVariable: string;
  documents: readonly LifecycleDocumentId[];
}[];

export type LifecyclePhase = (typeof lifecyclePhases)[number];
export type PhaseId = LifecyclePhase["id"];
