import { type CollectionEntry, getCollection } from "astro:content";
import { type GuideEntry, getGuides } from "./guides";

export type ReferenceEntry = CollectionEntry<"references">;

export interface ResolvedReference {
  reference: ReferenceEntry;
  guide: GuideEntry;
}

const MAX_REFERENCE_WORDS = 1_300;

export function referencePath({
  reference,
  guide,
}: ResolvedReference): `/${string}/${string}/${string}/` {
  return `/${guide.data.phase}/${guide.data.slug}/${reference.data.slug}/`;
}

export async function getReferences(): Promise<ResolvedReference[]> {
  const [references, guides] = await Promise.all([
    getCollection("references", ({ data }) => !data.draft),
    getGuides(),
  ]);
  const guidesById = new Map(guides.map((guide) => [guide.id, guide]));
  const descriptions = new Set<string>();
  const resolved: ResolvedReference[] = [];

  for (const reference of references) {
    const guide = guidesById.get(reference.data.guide.id);
    if (!guide) {
      throw new Error(`Reference guide is missing or unpublished: ${reference.id}`);
    }

    const expectedId = reference.data.slug;
    if (reference.id !== expectedId) {
      throw new Error(`Reference ID must match its slug: ${reference.id} != ${expectedId}`);
    }
    if (!reference.body?.trim()) {
      throw new Error(`Published reference body is empty: ${reference.id}`);
    }
    const words = reference.body.trim().split(/\s+/u).length;
    if (words > MAX_REFERENCE_WORDS) {
      throw new Error(
        `Reference exceeds ${MAX_REFERENCE_WORDS} words: ${reference.id} has ${words}`,
      );
    }

    const description = reference.data.description.trim();
    if (descriptions.has(description)) {
      throw new Error(`Duplicate reference description: ${description}`);
    }
    descriptions.add(description);

    const sourceUrls = new Set<string>();
    for (const source of reference.data.sources) {
      if (sourceUrls.has(source.url)) {
        throw new Error(`Duplicate source URL in reference: ${reference.id} -> ${source.url}`);
      }
      sourceUrls.add(source.url);
    }

    resolved.push({ reference, guide });
  }

  resolved.sort(
    (left, right) =>
      left.guide.data.order - right.guide.data.order ||
      left.reference.data.order - right.reference.data.order,
  );

  for (const guide of guides) {
    const owned = resolved.filter((item) => item.guide.id === guide.id);
    owned.forEach((item, index) => {
      if (item.reference.data.order !== index + 1) {
        throw new Error(
          `Reference order must be ${index + 1}: ${item.reference.id} has ${item.reference.data.order}`,
        );
      }
    });
  }

  return resolved;
}

export async function getReferencesForGuide(guide: GuideEntry): Promise<ResolvedReference[]> {
  const references = await getReferences();
  return references.filter((item) => item.guide.id === guide.id);
}
