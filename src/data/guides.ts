export type GuideId = "prd" | "rfc" | "adr";

type GuidePhaseId = "plan" | "design";
type GuideColorVariable = "--phase-plan" | "--phase-design";
type TemplatePath = `/templates/${string}.md`;

type GuideMeta = {
  readonly label: string;
  readonly value: string;
};

type GuideSource = {
  readonly label: string;
  readonly url: `https://${string}`;
};

type GuideSectionBase = {
  readonly id: string;
  readonly title: string;
};

type IntroSection = GuideSectionBase & {
  readonly kind: "intro";
  readonly paragraphs: readonly string[];
  readonly pullQuote: string;
};

type WhenSection = GuideSectionBase & {
  readonly kind: "when";
  readonly reachForItWhen: readonly string[];
  readonly skipItWhen: readonly string[];
};

type AnatomySection = GuideSectionBase & {
  readonly kind: "anatomy";
  readonly items: readonly {
    readonly term: string;
    readonly description: string;
  }[];
};

type ExampleSection = GuideSectionBase & {
  readonly kind: "example";
  readonly fileName: string;
  readonly documentTitle: string;
  readonly documentMeta: string;
  readonly entries: readonly {
    readonly heading: string;
    readonly text: string;
    readonly items?: readonly string[];
  }[];
};

type DosSection = GuideSectionBase & {
  readonly kind: "dos";
  readonly dos: readonly string[];
  readonly donts: readonly string[];
};

type RelatedSection = GuideSectionBase & {
  readonly kind: "related";
  readonly guides: readonly {
    readonly guideId: GuideId;
    readonly abbreviation: string;
    readonly colorVariable: GuideColorVariable;
    readonly description: string;
  }[];
};

type TemplateSection = GuideSectionBase & {
  readonly kind: "template";
  readonly fileName: string;
  readonly templatePath: TemplatePath;
  readonly note: string;
};

export type GuideSection =
  | IntroSection
  | WhenSection
  | AnatomySection
  | ExampleSection
  | DosSection
  | RelatedSection
  | TemplateSection;

export type Guide = {
  readonly id: GuideId;
  readonly abbreviation: string;
  readonly name: string;
  readonly phase: GuidePhaseId;
  readonly phaseHash: `#${GuidePhaseId}`;
  readonly colorVariable: GuideColorVariable;
  readonly summary: string;
  readonly tagline: string;
  readonly templatePath: TemplatePath;
  readonly meta: readonly GuideMeta[];
  readonly sources: readonly GuideSource[];
  readonly sections: readonly GuideSection[];
};

export const guides = [
  {
    id: "prd",
    abbreviation: "PRD",
    name: "Product requirements document",
    phase: "plan",
    phaseHash: "#plan",
    colorVariable: "--phase-plan",
    summary: "Makes product intent, scope, behavior, and success measures reviewable.",
    tagline: "A shared statement of the user problem, intended outcome, and evidence of success.",
    templatePath: "/templates/prd-template.md",
    meta: [
      { label: "A.K.A.", value: "Product spec" },
      { label: "WRITTEN BY", value: "Product, design, engineering, and affected partners" },
      { label: "IDEAL LENGTH", value: "No fixed length — concise enough to review" },
      { label: "SHELF LIFE", value: "Updated through delivery and outcome review" },
    ],
    sources: [
      {
        label: "Atlassian PRD guide",
        url: "https://www.atlassian.com/agile/product-management/requirements",
      },
      {
        label: "GitLab Product Development Flow",
        url: "https://handbook.gitlab.com/handbook/product-development/how-we-work/product-development-flow/",
      },
      {
        label: "GOV.UK discovery guidance",
        url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
      },
    ],
    sections: [
      {
        kind: "intro",
        id: "what",
        title: "What & why",
        paragraphs: [
          "A product requirements document makes a product decision reviewable. It states the user problem and evidence, the intended outcome, scope boundaries, and the product behavior the team must provide.",
          "Product, design, engineering, and affected stakeholders shape it together and update it as evidence changes. It can link research, user flows, designs, constraints, risks, dependencies, and delivery work. Technical trade-offs belong in an RFC when they need a separate decision.",
        ],
        pullQuote:
          "State the outcome. Make the behavior testable. Keep implementation choices open.",
      },
      {
        kind: "when",
        id: "when",
        title: "When to write one",
        reachForItWhen: [
          "A product or feature needs shared intent across disciplines",
          "The user problem, scope, or expected behavior needs review",
          "The team needs measurable outcomes and a clear review point",
          "Assumptions, dependencies, or open questions could change the work",
        ],
        skipItWhen: [
          "A contained maintenance change already has clear evidence and acceptance criteria",
          "A low-risk, reversible experiment fits in a short brief or backlog item",
          "The document would only repeat information that is current and reviewable elsewhere",
        ],
      },
      {
        kind: "anatomy",
        id: "anatomy",
        title: "Anatomy",
        items: [
          {
            term: "Problem & evidence",
            description: "Who is affected, what happens now, and the evidence behind the claim.",
          },
          {
            term: "Outcome & scope",
            description:
              "The intended result, what is in scope, and what is out of scope for this release.",
          },
          {
            term: "Users, scenarios & links",
            description:
              "The user, need, goal, and links to research, flows, prototypes, or designs.",
          },
          {
            term: "Requirements",
            description:
              "Uniquely identified, traceable, observable behavior with acceptance criteria.",
          },
          {
            term: "Success measures",
            description:
              "Baseline, target, data source, owner, and review point defined before delivery.",
          },
          {
            term: "Assumptions & dependencies",
            description:
              "Constraints, risks, dependencies, owners, and how each item will be validated.",
          },
          {
            term: "Delivery plan",
            description:
              "The main checkpoints and links to delivery work, without duplicating the backlog.",
          },
          {
            term: "Open questions",
            description:
              "Research or decisions still needed, each with an owner and decision date.",
          },
        ],
      },
      {
        kind: "example",
        id: "wild",
        title: "In the wild",
        fileName: "prd-guest-checkout.md",
        documentTitle: "PRD · Guest checkout",
        documentMeta:
          "ILLUSTRATIVE EXAMPLE · fictional data and targets · status: IN DELIVERY · owner: jonas@ · contributors: checkout, design, analytics · target release: 2026-09-15 · last updated: 2026-08-24",
        entries: [
          {
            heading: "Problem & evidence",
            text: "During the last 90 days, 34% of new visitors who reached the forced sign-up step left checkout. Checkout events are the source. In the same period, support conversations tagged account-forced were the third most common checkout complaint.",
          },
          {
            heading: "Intended outcome",
            text: "First-time shoppers can complete a one-time purchase without creating an account, while the existing account checkout remains stable.",
            items: [
              "User outcome · Complete a purchase without an unwanted account.",
              "Business outcome · Improve new-visitor checkout completion.",
              "Support outcome · Reduce contacts caused by forced account creation.",
            ],
          },
          {
            heading: "Scope",
            text: "This release changes only the new-visitor path.",
            items: [
              "In scope · Guest choice at sign-in, guest contact and delivery details, payment, confirmation, and measurement.",
              "Out of scope · Social-login rework and changes to the returning-user flow.",
              "Out of scope · Loyalty-points integration — that is v2, tracked in OQ-2.",
            ],
          },
          {
            heading: "Users & scenarios",
            text: "A first-time shopper finds an item, chooses Continue as guest, enters email, delivery, and payment details, then receives a normal order confirmation. Returning customers continue to use the existing sign-in flow. Supporting links: research CHECKOUT-18, user flow DES-204, and event plan DATA-91.",
          },
          {
            heading: "Requirements",
            text: "Each requirement names observable product behavior and how the team will know it is complete.",
            items: [
              "R1 · Must — A first-time shopper at sign-in can choose Continue as guest and complete an order without account creation.",
              "R2 · Must — Guest checkout collects name, email, delivery details, and payment details; it does not require a password.",
              "R3 · Must — A completed guest order sends an order-confirmation email with order details and a support path.",
              "R4 · Must — Returning customers can sign in and complete the existing account checkout without a new guest step.",
              "R5 · Should — Account creation is offered only after the order is complete.",
            ],
          },
          {
            heading: "Success metrics",
            text: "Analytics owns the measurement plan. Review the results 60 days after controlled release.",
            items: [
              "Outcome · New-visitor checkout completion: current baseline to +8 percentage points, using checkout events.",
              "Outcome · Account-forced support contacts: current baseline to 50% fewer, using support tags.",
              "Guardrail · Returning-customer checkout completion does not fall by more than 1 percentage point.",
              "Data quality · Guest and account checkout completion remain separately observable from launch day.",
            ],
          },
          {
            heading: "Assumptions, dependencies & risks",
            text: "Owners must validate these before the controlled release.",
            items: [
              "Assumption · Most forced-sign-up abandonment is caused by account creation, not payment or delivery friction — analytics and research own validation.",
              "Dependency · Order lookup and support tooling must work without an account ID — checkout engineering owns delivery.",
              "Risk · Guest orders could increase support effort or fraud exposure — support and risk teams own monitoring and mitigation.",
            ],
          },
          {
            heading: "Milestones",
            text: "Use outcome checkpoints, not a detailed Gantt chart.",
            items: [
              "Approve the guest-flow design and event plan.",
              "Build and QA in the checkout environment.",
              "Release gradually to new visitors.",
              "Review conversion and support results after 60 days.",
            ],
          },
          {
            heading: "Open questions",
            text: "Each unresolved question has an owner and a decision point.",
            items: [
              "OQ-1 · Checkout engineering · Choose the guest order-lookup path by 2026-09-01.",
              "OQ-2 · jonas@ · Decide whether guest purchases earn loyalty points before v2 planning on 2026-10-15.",
              "OQ-3 · Product design · Decide when to offer post-purchase account creation by 2026-09-05.",
            ],
          },
        ],
      },
      {
        kind: "dos",
        id: "dodont",
        title: "Do's & don'ts",
        dos: [
          "Write it with product, design, engineering, research, and affected partners",
          "Link evidence and record assumptions, dependencies, and open questions",
          "Give each requirement a stable ID and observable acceptance criteria",
          "Define the metric, baseline, target, data source, owner, and review point",
          "Keep the document concise and make updates visible as evidence changes",
        ],
        donts: [
          "Specify every implementation detail before the team has learned enough",
          "Use sign-off as a reason to freeze requirements that should change",
          "Let design or requirement changes happen without notifying affected people",
          "Define success as delivery rather than an outcome for users or the business",
          "Write the PRD alone or duplicate detailed work that can be linked",
        ],
      },
      {
        kind: "related",
        id: "rel",
        title: "Plays well with",
        guides: [
          {
            guideId: "rfc",
            abbreviation: "RFC",
            colorVariable: "--phase-design",
            description:
              "Use an RFC when a product requirement creates a substantial technical trade-off that needs review.",
          },
          {
            guideId: "adr",
            abbreviation: "ADR",
            colorVariable: "--phase-design",
            description:
              "A PRD may prompt architecture decisions, but ADRs can arise anywhere a significant choice is made.",
          },
        ],
      },
      {
        kind: "template",
        id: "tpl",
        title: "Steal the template",
        fileName: "prd-template.md",
        templatePath: "/templates/prd-template.md",
        note: "A concise Markdown template for evidence, outcome, scope, testable behavior, measures, dependencies, and open questions.",
      },
    ],
  },
  {
    id: "rfc",
    abbreviation: "RFC",
    name: "Request for comments",
    phase: "design",
    phaseHash: "#design",
    colorVariable: "--phase-design",
    summary:
      "Turns a substantial technical change into a reviewable proposal before implementation.",
    tagline: "A proposal written early enough that review can still change the approach.",
    templatePath: "/templates/rfc-template.md",
    meta: [
      { label: "A.K.A.", value: "Internal design proposal" },
      { label: "WRITTEN BY", value: "Change owner with affected engineers and operators" },
      { label: "IDEAL LENGTH", value: "As short as the decision allows" },
      { label: "SHELF LIFE", value: "Living through review; retain the outcome and links" },
    ],
    sources: [
      {
        label: "Rust RFC process",
        url: "https://rust-lang.github.io/rfcs/",
      },
      {
        label: "Rust RFC template",
        url: "https://github.com/rust-lang/rfcs/blob/master/0000-template.md",
      },
      {
        label: "RFC Editor: What is an RFC?",
        url: "https://www.rfc-editor.org/series/rfc/",
      },
    ],
    sections: [
      {
        kind: "intro",
        id: "what",
        title: "What & why",
        paragraphs: [
          "This guide uses RFC in the internal engineering sense, not the IETF or RFC Editor series. It is a written proposal for a substantial technical change, shared early enough that review can still alter the design before the team commits to implementation.",
          "An internal RFC makes the problem, goals, proposed design, alternatives, drawbacks, operational impact, and unresolved questions visible. Review should improve the proposal and record a clear outcome. Acceptance allows implementation to proceed; it does not guarantee that the change will be implemented or shipped.",
        ],
        pullQuote: "Make the trade-offs reviewable before implementation.",
      },
      {
        kind: "when",
        id: "when",
        title: "When to write one",
        reachForItWhen: [
          "A public or cross-team contract will change",
          "A design is hard or expensive to reverse",
          "Material alternatives need an explicit technical decision",
          "Security, reliability, operations, compatibility, or migration need review",
        ],
        skipItWhen: [
          "A contained fix or refactor fits normal code review",
          "A reversible experiment can answer the question more directly",
          "The change is already governed by an accepted decision or standard",
          "The goal is only to record a decision already made — use an ADR when it is architectural",
        ],
      },
      {
        kind: "anatomy",
        id: "anatomy",
        title: "Anatomy",
        items: [
          {
            term: "Metadata & decision owner",
            description:
              "Status, owner, decision authority, required reviewers, review window, and related work.",
          },
          {
            term: "Summary",
            description:
              "One short paragraph with the problem, recommendation, main trade-off, and decision requested.",
          },
          {
            term: "Context, goals & non-goals",
            description:
              "Evidence, users, constraints, desired result, and scope without assuming one answer.",
          },
          {
            term: "Proposed design",
            description:
              "Behavior, interfaces, data, failure modes, compatibility, and enough detail to review.",
          },
          {
            term: "Alternatives & prior art",
            description:
              "Viable options, the status quo, relevant precedent, and why they are not preferred.",
          },
          {
            term: "Risks & mitigations",
            description:
              "Drawbacks and relevant security, privacy, reliability, performance, cost, or operational risk.",
          },
          {
            term: "Rollout & operation",
            description:
              "When relevant: migration, testing, enablement, observability, ownership, and rollback.",
          },
          {
            term: "Open questions",
            description: "Questions that must be answered before a decision, each with an owner.",
          },
          {
            term: "Decision outcome",
            description:
              "Accepted, rejected, withdrawn, or postponed; rationale, date, dissent, and follow-up links.",
          },
        ],
      },
      {
        kind: "example",
        id: "wild",
        title: "In the wild",
        fileName: "rfc-042-webhooks.md",
        documentTitle: "RFC-042 · Accept signed webhooks for partner event ingestion",
        documentMeta:
          "ILLUSTRATIVE EXAMPLE · fictional data and targets · status: OPEN FOR COMMENTS · owner: mira@ · decision owner: platform lead · reviewers: security, integrations, operations · review closes: 2026-09-04 · related: INGEST-314, INC-204",
        entries: [
          {
            heading: "Summary",
            text: "Our integrations poll 14 partner APIs every 60 seconds, but 98.6% of calls return no new data. This RFC proposes signed webhooks, durable event storage, and a replayable queue. The review asks whether this design and migration plan can target p95 ingest latency below 2 seconds and about 90% fewer partner API calls without missing events. Polling remains the rollout and rollback path.",
          },
          {
            heading: "Problem",
            text: "New partner events can wait almost a minute before we see them. Empty polling calls consume rate-limit capacity, increase cost, and make delayed data hard to diagnose.",
            items: [
              "Fourteen integrations poll once per minute.",
              "98.6% of calls return no new events.",
              "Some partners already warn when we approach rate limits.",
              "A failed poll can silently delay data until the next successful cycle.",
            ],
          },
          {
            heading: "Goals & non-goals",
            text: "The proposal is limited to event ingestion for partners that support webhooks.",
            items: [
              "Goal · Reduce ingest latency and empty API calls while preserving event completeness.",
              "Goal · Provide durable receipt, idempotency, replay, and operational visibility.",
              "Non-goal · Redesign downstream event processing or require every partner to adopt webhooks.",
              "Non-goal · Remove polling before a partner passes the parallel-run checks.",
            ],
          },
          {
            heading: "Proposed design",
            text: "Each webhook-capable partner gets an endpoint at /webhooks/{partner}. The receiver verifies the signature and timestamp, stores the raw event and idempotency key, then queues a reference for asynchronous processing. It returns success only after durable storage.",
            items: [
              "Reject missing, expired, or invalid signatures.",
              "Deduplicate by partner and event ID for 30 days.",
              "Retry failed processing for 24 hours, then expose it in a replayable dead-letter view.",
              "Record latency, accepted events, signature failures, duplicates, retries, and queue age.",
              "Keep polling enabled until each partner passes its migration period.",
              "Security owns signature verification and secret rotation; privacy owns raw-event retention; operations owns replay access and log-redaction checks.",
            ],
          },
          {
            heading: "Alternatives considered",
            text: "Shorter polling is cheaper to build but creates roughly six times more requests and still adds delay. Partner-hosted queues are cleaner, but only two of fourteen partners offer one. Doing nothing keeps the current cost, latency, and operational blind spots.",
          },
          {
            heading: "Risks & drawbacks",
            text: "Webhooks add public endpoints, secret rotation, duplicate delivery, burst handling, and another failure mode to operate.",
            items: [
              "Rate-limit each partner independently.",
              "Store before processing so retries cannot lose data.",
              "Bound payload size and reject unsupported event types.",
              "Rotate secrets with two active keys during a transition.",
              "Keep polling as the immediate rollback path.",
            ],
          },
          {
            heading: "Rollout",
            text: "Enable the receiver behind a per-partner flag and migrate one partner at a time. Polling stays enabled until the acceptance checks pass.",
            items: [
              "Ship the receiver, durable store, replay queue, and dashboards.",
              "Run polling and webhooks in parallel for one low-volume partner for seven days.",
              "Accept the run only with no missed events, p95 latency below 2 seconds, and no material increase in processing errors.",
              "Test rollback by disabling the webhook flag and confirming polling resumes without duplicate processing.",
              "Enable the next partner only after the prior partner meets the checks.",
              "Disable polling only after seven stable days; re-enable it to back out.",
            ],
          },
          {
            heading: "Open questions",
            text: "The decision owner must resolve or explicitly defer each question before closing the RFC.",
            items: [
              "Do we need per-partner queue workers on day one, or is receiver rate limiting enough?",
              "What payload retention period meets support and privacy needs?",
              "Should dead-letter replay require an on-call approval step?",
            ],
          },
          {
            heading: "Decision outcome",
            text: "Pending. When review closes, record accepted, rejected, withdrawn, or postponed; explain the rationale; note material dissent; and link the implementation issue and any resulting ADR.",
          },
        ],
      },
      {
        kind: "dos",
        id: "dodont",
        title: "Do's & don'ts",
        dos: [
          "Name the decision owner, affected reviewers, review window, and outcome needed",
          "Make motivation, drawbacks, alternatives, and unresolved questions explicit",
          "Revise the proposal visibly as review changes the design",
          "Address material objections before the decision owner records an outcome",
          "Link implementation tracking and record a lasting architecture choice in an ADR when useful",
        ],
        donts: [
          "Present an implementation as an open proposal after the team has already committed",
          "Treat an internal RFC as an IETF RFC or assume every published RFC is an Internet Standard",
          "Require unanimity or treat silence as approval of a material risk",
          "Assume acceptance guarantees priority, assignment, implementation, or release",
          "Reopen a closed decision without new evidence or a changed constraint",
        ],
      },
      {
        kind: "related",
        id: "rel",
        title: "Plays well with",
        guides: [
          {
            guideId: "prd",
            abbreviation: "PRD",
            colorVariable: "--phase-plan",
            description:
              "A PRD supplies product intent when that intent is what motivates the proposed change.",
          },
          {
            guideId: "adr",
            abbreviation: "ADR",
            colorVariable: "--phase-design",
            description:
              "If an RFC establishes an enduring architecture choice, an ADR can preserve the decision and consequences.",
          },
        ],
      },
      {
        kind: "template",
        id: "tpl",
        title: "Steal the template",
        fileName: "rfc-template.md",
        templatePath: "/templates/rfc-template.md",
        note: "An internal engineering RFC template for context, scope, design, alternatives, risks, rollout, open questions, and the recorded outcome.",
      },
    ],
  },
  {
    id: "adr",
    abbreviation: "ADR",
    name: "Architecture decision record",
    phase: "design",
    phaseHash: "#design",
    colorVariable: "--phase-design",
    summary:
      "Records one architecturally significant decision, its context, status, and consequences.",
    tagline: "A short record of why the system is this way, for the people who change it next.",
    templatePath: "/templates/adr-template.md",
    meta: [
      { label: "A.K.A.", value: "Architecture decision record" },
      { label: "WRITTEN BY", value: "Decision owner with the people making the choice" },
      { label: "IDEAL LENGTH", value: "Usually one or two pages" },
      {
        label: "SHELF LIFE",
        value: "Retain accepted or rejected records; supersede with a successor",
      },
    ],
    sources: [
      {
        label: "Michael Nygard's original ADR article",
        url: "https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions",
      },
      {
        label: "AWS ADR process",
        url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html",
      },
      {
        label: "Microsoft ADR guidance",
        url: "https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record",
      },
    ],
    sections: [
      {
        kind: "intro",
        id: "what",
        title: "What & why",
        paragraphs: [
          "An architecture decision record captures one architecturally significant choice: the facts and forces behind it, its status, the decision, and the consequences. The collection of ADRs forms the decision log; one ADR is not itself the log.",
          "Draft the record while the choice is being made and review it before acceptance. State the decision plainly and record what becomes easier, harder, or otherwise changes. Preserve accepted or rejected records. If the context changes, propose a successor and mark the old ADR superseded after the replacement is accepted.",
        ],
        pullQuote: "Record why the choice made sense under the conditions at the time.",
      },
      {
        kind: "when",
        id: "when",
        title: "When to write one",
        reachForItWhen: [
          "A choice affects system structure, quality attributes, dependencies, or interfaces",
          "A decision sets an engineering pattern that other work will follow",
          "A hard-to-reverse trade-off needs durable rationale and consequences",
          "An RFC or another discussion establishes an enduring architecture choice",
        ],
        skipItWhen: [
          "A choice is local, temporary, low-risk, or easy to reverse",
          "A current standard or policy already records the decision and rationale",
          "The team is still comparing a broad proposal — use an RFC or design document",
        ],
      },
      {
        kind: "anatomy",
        id: "anatomy",
        title: "Anatomy",
        items: [
          {
            term: "Number & title",
            description: "A stable ID and short title that names the decision.",
          },
          {
            term: "Status & ownership",
            description:
              "Proposed, accepted, rejected, deprecated, or superseded; date, owner, and deciders.",
          },
          {
            term: "Context",
            description:
              "Factual technical, product, project, and social forces that make a decision necessary.",
          },
          {
            term: "Options considered",
            description:
              "Viable choices and the status quo when they are needed to understand the outcome.",
          },
          {
            term: "Decision",
            description: "A clear active-voice statement: “We will…”",
          },
          {
            term: "Consequences",
            description:
              "Positive, negative, and neutral effects, known risks, and follow-up work.",
          },
          {
            term: "Confirmation or review trigger",
            description:
              "Optional checks for compliance or evidence that should cause a successor ADR.",
          },
        ],
      },
      {
        kind: "example",
        id: "wild",
        title: "In the wild",
        fileName: "adr-007-postgres-queue.md",
        documentTitle: "ADR-007: PostgreSQL job queue",
        documentMeta:
          "ILLUSTRATIVE EXAMPLE · status: ACCEPTED · date: 2026-03-14 · decision owner: platform lead · deciders: platform team · supersedes: —",
        entries: [
          {
            heading: "Context",
            text: "We need delayed jobs and retries at about 50 jobs per minute. The team already operates Postgres well but has not run Redis or RabbitMQ in production. Adding a queue service now would add an on-call burden before it solves a current scale problem. Job creation must also remain transactionally coupled to application changes.",
          },
          {
            heading: "Options considered",
            text: "The team compared PostgreSQL, a managed Redis queue, RabbitMQ, and continuing with synchronous work. PostgreSQL was preferred at the current scale because it preserves transactional enqueueing and uses an operated system. A dedicated queue offers stronger isolation and throughput but adds a service and on-call responsibility before those benefits are needed.",
          },
          {
            heading: "Decision",
            text: "We will use PostgreSQL as the job queue, with a thin worker library that claims work through SELECT … FOR UPDATE SKIP LOCKED. The library schedules delayed jobs and retries failures; application code enqueues jobs in the same transaction as the data that created them.",
          },
          {
            heading: "Consequences · easier now",
            text: "The decision deliberately trades future scale for present operational simplicity.",
            items: [
              "We operate one fewer production system.",
              "Job enqueueing is transactional with application writes.",
              "The queue uses existing Postgres backups, access controls, monitoring, and team knowledge.",
            ],
          },
          {
            heading: "Consequences · harder now",
            text: "The cost of the choice is visible and accepted.",
            items: [
              "Queue traffic consumes database capacity and adds table-maintenance work.",
              "The worker library becomes code the team must own and support.",
              "At sustained load beyond the agreed service limits, a dedicated queue may become the lower-risk option.",
            ],
          },
          {
            heading: "Revisit when",
            text: "If a trigger persists, propose a successor ADR. Keep this record unchanged and mark it superseded only after the replacement is accepted.",
            items: [
              "Volume approaches 500 jobs per minute.",
              "Queue-table bloat, lock contention, or job latency affects normal database work.",
              "The queue needs throughput or isolation that Postgres cannot provide safely.",
            ],
          },
        ],
      },
      {
        kind: "dos",
        id: "dodont",
        title: "Do's & don'ts",
        dos: [
          "Record one architecturally significant decision per ADR",
          "Use a short title and state the decision in active voice",
          "Include the factual context, viable options, rationale, and all known consequences",
          "Keep the decision log in one durable place the project team can reach",
          "Preserve accepted or rejected records and link successor ADRs in both directions",
        ],
        donts: [
          "Rewrite an accepted or rejected ADR to hide how the decision changed",
          "Record every local implementation detail or temporary experiment",
          "Omit rejected options, rationale, negative consequences, or decision ownership",
          "Use an ADR as a broad design guide instead of a focused decision record",
          "Mark an ADR superseded before its replacement is accepted",
        ],
      },
      {
        kind: "related",
        id: "rel",
        title: "Plays well with",
        guides: [
          {
            guideId: "rfc",
            abbreviation: "RFC",
            colorVariable: "--phase-design",
            description:
              "Use an RFC to explore a substantial change; create an ADR when it establishes an enduring architecture choice.",
          },
          {
            guideId: "prd",
            abbreviation: "PRD",
            colorVariable: "--phase-plan",
            description:
              "A PRD sets product intent. It may prompt an ADR, but ADRs can arise anywhere a significant architecture choice is made.",
          },
        ],
      },
      {
        kind: "template",
        id: "tpl",
        title: "Steal the template",
        fileName: "adr-template.md",
        templatePath: "/templates/adr-template.md",
        note: "A lightweight decision-record template informed by Nygard, with explicit ownership, options, consequences, and a review trigger.",
      },
    ],
  },
] as const satisfies readonly Guide[];

export const guideById = {
  prd: guides[0],
  rfc: guides[1],
  adr: guides[2],
} as const satisfies Record<GuideId, Guide>;
