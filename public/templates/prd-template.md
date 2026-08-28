# PRD: [Product change]

> Replace every `[placeholder]` before review. `None` and `Not applicable` are valid final values when they are explicit.

| Field | Value |
|---|---|
| **Status** | Select one: Draft · In review · In delivery · Shipped · Stopped |
| **Record steward** | @name — keeps the record and evidence current |
| **Decision authority** | @name or [accountable role] — records the outcome below |
| **Related records / dates** | [Research, RFC, ADR, plan, or incident links] / target: YYYY-MM-DD or `Not set`; updated: YYYY-MM-DD |

## Decision summary

What change is proposed, for whom, and why now? State the decision this PRD requires. Say what happens if the team takes no action. Keep technical choices open unless a linked RFC or ADR has made them.

## Problem and evidence

Who is affected, and what happens today? Link the research, service data, support evidence, or incident that supports the problem. State the period, population, and material limits. Separate observed facts from assumptions and hypotheses.

## Outcomes and measures

State the user outcome, business or mission outcome, service outcome, and harm that must not increase. Define only measures that inform a decision.

| Measure or guardrail | Definition and scope | Target or limit | Evidence source, owner, and review date |
|---|---|---|---|
| [Primary outcome] | [Formula, population, and time window] | [Target] | [Source] · @name · YYYY-MM-DD |
| [Safety or service guardrail] | [Formula, population, and time window] | [Limit] | [Source] · @name · YYYY-MM-DD |

## Scope and constraints

- **In scope:** [Behaviour, users, systems, and boundaries included]
- **Out of scope:** [Work explicitly not being done]
- **Constraints:** [Policy, legal, technical, cost, time, or dependency limit]

## Users, needs, and evidence

| Need ID | User and situation | Need | Supporting evidence |
|---|---|---|---|
| UN-1 | As a [user], when [situation] | I need [need] so that [outcome] | [Link] |

## Requirements and acceptance

Use release priority: **Must** is required for this release; **Should** is valuable but may be removed only through a recorded scope decision. Link a detailed design, RFC, or ADR instead of copying it here.

| ID | Need | Behaviour and boundary | Priority | Observable acceptance proof |
|---|---|---|---|---|
| R1 | UN-1 | A [user or system] can [behaviour]; when [failure], it [safe outcome]. | Must | [Test, review, or observation link] |

## Delivery and operations

Name only material work: dependencies, migration, support, communications, monitoring, recovery, or rollback. Link the delivery plan and runbook. State the owner and the evidence needed before launch.

| Item | Owner | Evidence or plan | Effect if missing |
|---|---|---|---|
| [Dependency, migration, support, or recovery] | @name | [Link] | [Hold, change scope, or stop] |

## Risks and open questions

| Item | Type | Owner | Mitigation, decision, or safe default | Due date |
|---|---|---|---|---|
| [Risk, dependency, assumption, or question] | [Type] | @name | [Action or boundary] | YYYY-MM-DD |

## Specialist records

For every applicable row, link the named specialist record before the decision. `No` means the concern was assessed and does not apply here — give a short reason; `Not applicable` means the concern cannot arise for this product. Do not use this table to replace specialist review. Add linked accessibility, privacy, security, and release records when those concerns apply.

| Concern | Applies? | Owner and required record |
|---|---|---|
| Payments or fraud controls | Yes · No · Not applicable | @name · [Payment recovery](https://sdlc.guide/plan/prd/payment-recovery/) |
| Controlled rollout or comparative decision | Yes · No · Not applicable | @name · [Controlled rollouts](https://sdlc.guide/plan/prd/controlled-rollouts/) |
| Signed external events or inbound webhooks | Yes · No · Not applicable | @name · [Signed webhooks](https://sdlc.guide/design/rfc/signed-webhooks/) |
| Retryable external effect or ordered event processing | Yes · No · Not applicable | @name · [Reliable event processing](https://sdlc.guide/design/rfc/reliable-event-processing/) |

## Decision gate

| Required evidence | Decision authority | Decision and action |
|---|---|---|
| [Accepted requirements, applicable records, validation, risks, and recovery readiness] | @name | Go · Hold · Stop · Recover — [record the reason and next step] |

Approval authorises only the stated scope. It does not authorise a wider rollout, different configuration, migration, or further release without fresh evidence and a recorded decision.
