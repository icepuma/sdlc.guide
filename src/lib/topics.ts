export type PublishedTopic =
  | { phase: "plan"; slug: "prd" }
  | { phase: "design"; slug: "rfc" | "adr" };

export type PublishedSlug = PublishedTopic["slug"];

export const publishedTopics = [
  { phase: "plan", slug: "prd" },
  { phase: "design", slug: "rfc" },
  { phase: "design", slug: "adr" },
] as const satisfies readonly PublishedTopic[];

export function topicPath(topic: PublishedTopic): `/${PublishedTopic["phase"]}/${PublishedSlug}/` {
  return `/${topic.phase}/${topic.slug}/`;
}

export function topicKey(topic: PublishedTopic): string {
  return `${topic.phase}/${topic.slug}`;
}
