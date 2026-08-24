import { type CollectionEntry, getCollection } from "astro:content";
import {
  type PublishedSlug,
  type PublishedTopic,
  publishedTopics,
  topicKey,
  topicPath,
} from "./topics";

export type GuideEntry = CollectionEntry<"guides">;
export type GuideIndex = ReadonlyMap<PublishedSlug, GuideEntry>;

export function guideTopic(guide: GuideEntry): PublishedTopic {
  return guide.data.phase === "plan"
    ? { phase: "plan", slug: guide.data.slug }
    : { phase: "design", slug: guide.data.slug };
}

export function guidePath(guide: GuideEntry): ReturnType<typeof topicPath> {
  return topicPath(guideTopic(guide));
}

export function guideColorVariable(guide: GuideEntry): "--phase-plan" | "--phase-design" {
  return guide.data.phase === "plan" ? "--phase-plan" : "--phase-design";
}

export function indexGuides(guides: readonly GuideEntry[]): GuideIndex {
  return new Map(guides.map((guide) => [guide.data.slug, guide]));
}

export function requireGuide(guides: GuideIndex, slug: PublishedSlug): GuideEntry {
  const guide = guides.get(slug);
  if (!guide) throw new Error(`Published guide is missing: ${slug}`);
  return guide;
}

export async function getGuides(): Promise<GuideEntry[]> {
  const guides = await getCollection("guides", ({ data }) => !data.draft);

  if (guides.length !== publishedTopics.length) {
    throw new Error(
      `Expected ${publishedTopics.length} published guides, received ${guides.length}`,
    );
  }

  const guidesByTopic = new Map<string, GuideEntry>();
  for (const guide of guides) {
    if (guide.id !== guide.data.slug) {
      throw new Error(`Guide ID must match its validated slug: ${guide.id} != ${guide.data.slug}`);
    }
    if (!guide.body?.trim()) {
      throw new Error(`Published guide body is empty: ${guide.data.slug}`);
    }
    guidesByTopic.set(topicKey(guideTopic(guide)), guide);
  }

  return publishedTopics.map((topic, index) => {
    const guide = guidesByTopic.get(topicKey(topic));
    if (!guide) throw new Error(`Published guide is missing: ${topicKey(topic)}`);
    if (guide.data.order !== index + 1) {
      throw new Error(`Guide order must be ${index + 1}: ${topicKey(topic)}`);
    }
    return guide;
  });
}
