# RFC-000: [Short, decision-oriented title]

> Internal engineering RFC — not a document published in the RFC Series. Replace every `[placeholder]` before review.

| Field | Value |
|---|---|
| **Status** | Select one: Draft · In review · Accepted · Rejected · Withdrawn · Postponed · Superseded |
| **RFC steward** | @name — keeps status, history, and links current |
| **Decision authority** | @name — records the decision and accepted residual risk |
| **Decision requested** | Approve · Reject · Postpone [the stated approach] |
| **Acceptance authorises** | `None` by default, or the precise scoped work acceptance permits |
| **Required reviewers** | @name (affected domain) |
| **Review window** | YYYY-MM-DD to YYYY-MM-DD |
| **Related work** | PRD, ADR, incident, prototype, plan, or issue links |
| **Proposes to supersede** | `None`, or an RFC ID while this RFC is Draft or In review |
| **Supersedes / superseded by** | `None` / `None`, or RFC ID after the coordinated accepted-record update |
| **Last updated** | YYYY-MM-DD |

`Proposes to supersede` is draft or review intent only. After an RFC successor is Accepted, clear it and update the successor's `Supersedes`, the predecessor's `Superseded by`, and the predecessor status together. Those normative links describe the accepted successor and its formerly accepted predecessor. A material change to a closed decision needs a later RFC, ADR, or maintained design record.

## Summary

State the problem, recommended approach, main trade-off, and exact decision requested. A reader should understand the choice without reading the rest of the RFC.

## Context, goals, and non-goals

Describe the evidence, affected users or systems, constraints, and why this decision is needed now. State what success means and what the proposal intentionally does not solve.

**Goals**

- [Outcome or capability this proposal must provide]

**Non-goals**

- [Work, guarantee, or scope this proposal does not provide]

## Proposed design

Explain the behaviour, main components, interfaces, data, compatibility, and failure handling. Link detailed API contracts, schemas, diagrams, ADRs, or prototypes instead of duplicating them. State assumptions and invariants: facts that must remain true for the design to be safe or correct.

| Area | Proposed approach | Owner or supporting record |
|---|---|---|
| [Component, interface, or data flow] | [Behaviour, boundary, and failure handling] | @name · [Link] |
| [Compatibility or migration] | [Old/new behaviour, cutover, and recovery] | @name · [Link] |

## Decision drivers and alternatives

Record the evidence and trade-offs that drive the recommendation. Include the status quo when it is viable.

| Option | Benefits | Costs or risks | Decision |
|---|---|---|---|
| [Recommended approach] | [Benefits] | [Costs and limits] | Recommended |
| [Alternative or status quo] | [Benefits] | [Why it is not preferred] | Not chosen |

## Risks and safeguards

Cover relevant security, privacy, reliability, performance, cost, and operational risks. For each material risk, name a safeguard, the remaining risk, and its owner. A risk without an owner or safe failure mode is unresolved.

| Risk | Safeguard or safe failure | Residual risk | Owner |
|---|---|---|---|
| [Risk] | [Mitigation, limit, alert, or recovery] | [What remains] | @name |

## Delivery, operation, and reversibility

State dependencies, migration or backfill, observability, support impact, rollback, data repair, and irreversible changes. Link runbooks and delivery plans. If a rollback is unsafe or impossible, state the recovery route and who approves it.

| Item | Owner | Evidence or plan | Failure action |
|---|---|---|---|
| [Migration, release, monitoring, or recovery] | @name | [Link] | [Hold, roll back, repair, or escalate] |

## Validation and release boundary

Name the tests, review, measurement, or reconciliation that proves the design is ready. Include an explicit stop condition. Do not use an implementation task as evidence.

| Evidence or signal | Owner | Pass condition | Stop or hold condition |
|---|---|---|---|
| [Test, review, dashboard, or reconciliation] | @name | [Explicit result] | [Explicit boundary] |

## Specialist records

For every applicable row, link the named specialist record before acceptance. A `No` needs a short reason; this table does not replace specialist review.

| Concern | Applies? | Owner and required record |
|---|---|---|
| Signed external events or inbound webhooks | Yes · No · Not applicable | @name · [Signed webhooks](/design/rfc/signed-webhooks/) |
| Retryable external effect or ordered event processing | Yes · No · Not applicable | @name · [Reliable event processing](/design/rfc/reliable-event-processing/) |
| Payments or fraud controls | Yes · No · Not applicable | @name · [Payment recovery](/plan/prd/payment-recovery/) |
| Controlled rollout or comparative decision | Yes · No · Not applicable | @name · [Controlled rollouts](/plan/prd/controlled-rollouts/) |

Add linked privacy, accessibility, security, and release records when those concerns apply.

## Open questions

| Question | Owner | Due date | Safe default or effect if unresolved |
|---|---|---|---|
| [Question] | @name | YYYY-MM-DD | [Block, defer, or protective boundary] |

## Decision outcome

When the RFC closes, record the decision, date, rationale, material dissent, follow-up links, and precisely what acceptance authorises. Unless `Acceptance authorises` explicitly permits scoped implementation, acceptance approves the design only. It never by itself authorises production release, wider rollout, or a different configuration. Record those decisions separately with fresh evidence.
