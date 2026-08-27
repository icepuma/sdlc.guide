import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const httpsUrl = z.url().refine((url) => url.startsWith("https://"), {
  message: "Source URLs must use HTTPS",
});

const researchSource = z.object({
  label: z.string().min(1),
  citationLabel: z.string().min(1),
  supports: z.string().min(1),
  url: httpsUrl,
});

const guideBase = z.object({
  name: z.string().min(1),
  summary: z.string().min(1),
  tagline: z.string().min(1),
  order: z.number().int().positive(),
  draft: z.boolean().default(false),
  facts: z
    .array(
      z.object({
        label: z.string().min(1),
        value: z.string().min(1),
      }),
    )
    .length(4),
  sources: z.array(researchSource).min(1),
  exampleSources: z.array(researchSource).default([]),
  template: z.object({
    fileName: z.string().regex(/^[a-z0-9-]+\.md$/),
    href: z.string().regex(/^\/templates\/[a-z0-9-]+\.md$/),
    note: z.string().min(1),
  }),
  overview: z.object({
    paragraphs: z.array(z.string().min(1)).min(1),
    takeaway: z.string().min(1),
    useWhen: z.array(z.string().min(1)).min(1),
    skipWhen: z.array(z.string().min(1)).min(1),
    anatomy: z
      .array(
        z.object({
          term: z.string().min(1),
          description: z.string().min(1),
        }),
      )
      .min(1),
    dos: z.array(z.string().min(1)).min(1),
    donts: z.array(z.string().min(1)).min(1),
  }),
  related: z
    .array(
      z.object({
        guide: reference("guides"),
        description: z.string().min(1),
      }),
    )
    .min(1),
  example: z.object({
    fileName: z.string().regex(/^[a-z0-9-]+\.md$/),
    documentTitle: z.string().min(1),
    documentMeta: z.string().min(1),
  }),
});

const guides = defineCollection({
  loader: glob({
    base: "./src/content/guides",
    pattern: "**/*.mdx",
  }),
  schema: z.discriminatedUnion("slug", [
    guideBase.extend({
      phase: z.literal("plan"),
      slug: z.literal("prd"),
      abbreviation: z.literal("PRD"),
    }),
    guideBase.extend({
      phase: z.literal("design"),
      slug: z.literal("rfc"),
      abbreviation: z.literal("RFC"),
    }),
    guideBase.extend({
      phase: z.literal("design"),
      slug: z.literal("adr"),
      abbreviation: z.literal("ADR"),
    }),
  ]),
});

const phases = defineCollection({
  loader: glob({
    base: "./src/content/phases",
    pattern: "*.mdx",
  }),
  schema: z.object({
    phase: z.enum(["discover", "plan", "design", "build", "verify", "release", "operate"]),
    description: z.string().min(1),
    sources: z
      .array(
        z.object({
          label: z.string().min(1),
          url: httpsUrl,
        }),
      )
      .min(3)
      .max(5),
  }),
});

const references = defineCollection({
  loader: glob({
    base: "./src/content/references",
    pattern: "**/*.mdx",
  }),
  schema: z.object({
    guide: reference("guides"),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().min(1),
    description: z.string().min(1),
    order: z.number().int().positive(),
    draft: z.boolean().default(false),
    sources: z.array(researchSource).min(2).max(6),
  }),
});

export const collections = { guides, phases, references };
