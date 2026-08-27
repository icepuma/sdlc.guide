import { type CollectionEntry, getCollection } from "astro:content";
import { lifecyclePhases, type PhaseId } from "../data/lifecycle";

export type PhaseEntry = CollectionEntry<"phases">;
export type PhaseIndex = ReadonlyMap<PhaseId, PhaseEntry>;

export function phasePath(phase: PhaseId): `/${PhaseId}/` {
  return `/${phase}/`;
}

export function indexPhases(phases: readonly PhaseEntry[]): PhaseIndex {
  return new Map(phases.map((phase) => [phase.data.phase, phase]));
}

export function requirePhase(phases: PhaseIndex, phase: PhaseId): PhaseEntry {
  const entry = phases.get(phase);
  if (!entry) throw new Error(`Published phase is missing: ${phase}`);
  return entry;
}

export async function getPhases(): Promise<PhaseEntry[]> {
  const phases = await getCollection("phases");

  if (phases.length !== lifecyclePhases.length) {
    throw new Error(`Expected ${lifecyclePhases.length} phase pages, received ${phases.length}`);
  }

  const phasesById = new Map<PhaseId, PhaseEntry>();
  const descriptions = new Set<string>();
  for (const phase of phases) {
    if (phase.id !== phase.data.phase) {
      throw new Error(
        `Phase ID must match its validated phase: ${phase.id} != ${phase.data.phase}`,
      );
    }
    if (!phase.body?.trim()) {
      throw new Error(`Phase body is empty: ${phase.data.phase}`);
    }
    if (phasesById.has(phase.data.phase)) {
      throw new Error(`Duplicate phase page: ${phase.data.phase}`);
    }
    const description = phase.data.description.trim();
    if (descriptions.has(description)) {
      throw new Error(`Duplicate phase description: ${description}`);
    }
    phasesById.set(phase.data.phase, phase);
    descriptions.add(description);
  }

  return lifecyclePhases.map((lifecyclePhase) => {
    const phase = phasesById.get(lifecyclePhase.id);
    if (!phase) throw new Error(`Published phase is missing: ${lifecyclePhase.id}`);
    return phase;
  });
}
