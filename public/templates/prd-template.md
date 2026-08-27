# PRD: [Product change]

> **Placeholder rule.** Every [bracketed value], every token that begins with `@`, every literal date or date-time pattern (such as `YYYY-MM-DD`), every ellipsis, every `example.invalid` URL, and every unselected choice list is a placeholder. A bare `name`, `role`, or plural form is also a placeholder: replace it with a named person or accountable role. Replace each required placeholder before its relevant decision. Select exactly one status. Before an applicable gate, name the outcome decision authority and, if the gate can use a protective pause, the operational pause authority. `None`, `Not applicable`, and `not set` are deliberate final values, not placeholders.

| Field | Value |
|---|---|
| **Status** | Select exactly one: Draft · In review · In delivery · Shipped · Stopped |
| **Record steward** | @name — keeps this record current and links evidence |
| **Outcome decision authority** | @name or [named role] — decides the recorded gate outcome |
| **Operational pause authority** | @name or `None` — may apply only the protective action defined in the gate; cannot resume or expand scope without the decision authority |
| **Contributors** | @product, @design, @engineering, @research, @operations, or `None` |
| **Target release or decision date** | YYYY-MM-DD or not set |
| **Delivery plan** | [Plan title](https://example.invalid/delivery-plan) or `None` |
| **Staged-rollout plan** | [Plan title](https://example.invalid/rollout-plan) or `Not applicable` |
| **Last updated** | YYYY-MM-DD |

## Problem and evidence

Who is affected? What happens now? What evidence supports the claim? State the source, time period, filters, baseline formula where relevant, and links to research or operational evidence. Separate observed facts from assumptions and causal hypotheses.

## Intended outcome

State the user, business, service, and safety outcomes. Keep the solution open unless a linked RFC or ADR has already made the relevant technical decision.

- **User outcome** — [What becomes better for whom]
- **Business or mission outcome** — [Expected change]
- **Service or operational outcome** — [Expected quality, support, or reliability change]
- **Safety outcome** — [What must not get worse]

## Roles and decision authority

The decision gate below is the sole normative source for the release, rollout, pause, recovery, re-exposure, or scope decision that it covers. Evidence owners supply proof and report conditions; they do not change the decision. Delivery, release, and operations records may link to the gate but must not weaken or replace it.

- **Record steward** · @name — maintains the record and evidence.
- **Outcome decision authority** · @name or [named role] — makes the gate decision.
- **Operational pause authority** · @name or `None` — applies the pre-registered protective action when the gate says to pause; cannot resume, re-expose, or expand scope.
- **Evidence owners** · @roles — provide the named evidence and report failures.

## Scope and non-goals

**In scope**

- [Included behaviour, users, systems, and boundaries]

**Out of scope or non-goals**

- [Explicitly excluded work]

Define terms that affect acceptance. Link an RFC for a substantial technical proposal and an ADR for a durable architecture decision; do not duplicate their technical design here.

## Users, needs, and supporting links

Give each user need a stable ID and matching explicit anchor (for example, `un-1` for `UN-1`). Keep the anchor when its title changes, and use that ID in every requirement that traces to it. Use the user's language and link the research, flow, prototype, incident, or operational evidence that supports it.

<a id="un-1"></a>
### UN-1: [Short need name]

As a [user], when [situation], I need [need] so that I can [goal]. Evidence: [Research](https://example.invalid/research).

Supporting links, when applicable:

- [Research or discovery evidence](https://example.invalid/research)
- [User flow, design, or prototype](https://example.invalid/design)
- [Technical proposal or decision](https://example.invalid/decision)
- [Delivery and communication plan](https://example.invalid/delivery)
- [Acceptance or verification plan](https://example.invalid/verification)

## Requirements

Priority is release priority, not RFC 2119 wording. **Must** means required for this release. **Should** means valuable, but removable only through an explicit scope decision by the outcome decision authority.

| ID | Source need / evidence | User or system behaviour | Priority | Observable acceptance criteria | Acceptance evidence / link |
|---|---|---|---|---|---|
| R1 | [UN-1](#un-1) | A [user or system] can … | Must | A test, review, or observation demonstrates … | [Tracked check](https://example.invalid/acceptance) |

For each requirement, state the behaviour, boundary, failure handling, and evidence that proves it. Link detailed designs and technical decisions instead of copying them.

## Measures and evidence

Define measures only where they help make a decision. Give each one a formula or clear rule, population or scope, baseline when useful, target or limit, source, owner, review date, data-quality check, and gate consequence.

| Measure or guardrail | Definition and scope | Baseline, target, owner, and decision use |
|---|---|---|
| [Primary outcome] | [Formula, population, window, and finality rule] | [Baseline, target, source, owner, review date, and gate action] |
| [Safety or service guardrail] | [Formula or threshold, scope, and finality rule] | [Limit, source, owner, and gate action] |

### Staged rollout and comparative or causal analysis — only when applicable

For a staged or phased delivery, record the rollout stages, applicable operational safeguards, recovery plan, and the canonical decision-gate row that controls each stage. If a protective action changes delivered behaviour, configuration, or exposure, append an immutable actual-delivery override record. Name the affected unit, handle, or scope; actual experience/configuration version; effective time; reason; authority; canonical gate; and stage effect. It must not overwrite the assigned or planned experience, and it cannot authorise re-exposure. Do not require treatment and comparison arms, an estimand, sample targets, or statistical-look rules unless a decision uses comparative or causal evidence.

The actual-delivery override record is append-only.

When a decision uses comparative or causal evidence, register a separate analysis plan before the first exposure. It must define:

- The analysis unit and eligibility; the exact planned and actual delivered experience, immutable version/configuration, and user-visible/control behaviour for every treatment and comparison arm; the complete assignment map or method; and how both assignment and each arm's planned experience remain stable. Pre-register the actual-delivery override rule, its record fields, and whether an affected wave is ineligible for causal promotion while assignment-based ITT and safety reporting remains available.
- Each rollout stage, its matching canonical decision-gate row and named authority, and an outcome-independent closure rule.
- The primary estimand, measures, sample targets, effect or safety margins, planned looks, and how repeated inspection is controlled.
- Event time, observation window, late-arrival watermark, frozen as-of snapshot, reconciliation, data-quality rules, and an append-only correction, supersession, or reopen policy.
- The access boundary for comparative results and any auditable, least-privilege safety-only view or alert needed to apply a protective action without exposing control data or comparative efficacy.
- For a paired fraud-harm decision, an arm-neutral source and per-analysis-unit active outcome/completeness rule in both arms; define no-harm, qualifying-harm, censor, and incomplete states, and never treat missing evidence as zero.
- The evidence owners and the exact action for success, harm, incomplete evidence, or a protective pause, linked to the matching canonical decision-gate row.

Use concurrent comparison evidence for a causal promotion decision. A historical baseline may inform planning, but it is not a causal control.

## Conditional controls — include only when applicable

| Area | Add to this PRD when | Record or link |
|---|---|---|
| Accessibility | The change affects a user interface, content, assisted workflow, or supported device | Applicable standard, affected journeys, review method, and acceptance evidence |
| Privacy and data protection | The change collects, uses, shares, retains, or deletes personal or sensitive data | Data categories, purpose and minimisation; applicable lawful basis and notice/transparency; rights and redress; recipients/processors, contracts, security, locations and international-transfer safeguards; retention/deletion; applicable privacy-risk or data protection impact assessment (DPIA); named owners, approvals, and evidence |
| Security | The change changes trust boundaries, permissions, secrets, authentication, authorisation, or abuse resistance | Threat/risk review, rate or abuse bounds where needed, alerts, safe failure, verification, ownership, and recovery boundary |
| Operations and support | The change affects availability, observability, support, migration, rollback, or incident response | Service objectives, monitoring, runbooks, support process, and recovery proof |
| Payments or financial transactions | The change submits, records, reverses, or reconciles a financial transaction | Provider contract, user-confirmation, and idempotency/recovery boundaries. A result can finalise only from an authenticated provider query or valid signed provider callback with a registered timestamp-freshness/future-skew rule, event-ID replay protection, and idempotent/deduplicated handling. It must match the expected provider account/environment/object and local tenant, transaction/order, amount, currency, payload, and allowed state transition. When fraud or abuse prevention also applies, record each payment creation or recovery as an immutable revision with its current risk-input digest and name the active revision. Bind each later fraud review or disposition to its originating decision and revision, not to whichever revision is active when it arrives. A changed payment method or other risk-relevant revision invalidates the prior fraud decision and makes the superseded chain and its later outcomes audit-only; provider finalisation and fulfilment remain blocked until a fresh decision is bound to the active revision and digest. Record verification and reconciliation evidence, including stale, replayed, unauthenticated, mismatched-result, stale-revision, and stale-fraud-decision no-effect tests. |
| Fraud or abuse prevention | The change introduces a fraud, abuse, eligibility, or harm control | Policy, decision boundary, redress, monitoring, and proof that the control does not silently harm legitimate users; when a paired fraud-harm result informs a gate, require arm-neutral evidence and active outcome/completeness/censor rules in both arms, with missing evidence never counted as no harm |
| Software release or production deployment | The change releases a software artefact or production configuration | Exact tested artefact, authenticated release manifest and provenance, deployed controller/runtime readback, retained verification, and recovery proof |

## Assumptions, constraints, dependencies, and risks

| Type | Item | Owner | Validation, mitigation, or decision | Gate consequence | By when |
|---|---|---|---|---|---|
| [Assumption] | [What must remain true] | @name | [Evidence or review] | [Hold, revise, or continue] | YYYY-MM-DD |
| [Constraint] | [Policy, technical, legal, or delivery limit] | @name | [How it is met] | [No-go or scope change] | YYYY-MM-DD |
| [Dependency] | [Team, system, supplier, or decision] | @name | [Proof or contingency] | [Hold, recover, or stop] | YYYY-MM-DD |
| [Risk] | [User, service, security, privacy, financial, or operational harm] | @name | [Mitigation, monitoring, and recovery] | [Protective action or decision] | YYYY-MM-DD |

## Decision gate (normative)

This table is the one authoritative record for the decision it covers. State the evidence, accountable owners, authority, and action for each checkpoint. Use a protective pause only when a named authority and action are appropriate for the change.

| Checkpoint | Required evidence | Evidence owners | Decision and action |
|---|---|---|---|
| Readiness review — non-authorising | [Requirements, acceptance evidence, dependencies, approvals, and recovery readiness] | [Named owners] | @decision-authority: [ready, hold, or revise scope]. This row does not authorise release, launch, or implementation. |
| Release, launch, or implementation decision — canonical authorisation | [Measures, guardrails, and relevant verification pass; for software release, exact tested artefact, authenticated manifest/provenance, and deployed controller/runtime readback] | [Named owners] | @decision-authority: [go, hold, stop, or recover] |
| During a staged rollout — if applicable | [Registered stage evidence, finality, data quality, and no open safety condition] | [Named owners] | @decision-authority: [advance, hold, recover, or stop]; @pause-authority may apply only the registered protective action |
| Any gate-invalidating correction or safety boundary — if applicable | [What invalidates evidence or requires immediate protection] | [Detecting owner] and @pause-authority | @pause-authority: [protective action]; @decision-authority: [recovery or next decision after fresh proof] |

For a software release or production deployment, the exact tested artefact, authenticated release manifest and provenance, and deployed controller/runtime readback are non-waivable prerequisites. A different subject, configuration, migration, or flag state needs fresh verification before this gate can pass.

## Delivery plan and milestones

Every checkpoint needs one accountable owner, actual or planned date, and named proof. If it supplies evidence for or records a decision, name the exact decision-gate row; otherwise state `Not applicable`. Link detailed delivery work instead of copying a backlog.

- [ ] [Discovery, design, or dependency decision] — owner: @name; date: YYYY-MM-DD; proof: [link]; decision-gate row: [Readiness review — non-authorising].
- [ ] [Verification complete] — owner: @name; date: YYYY-MM-DD; proof: [link]; decision-gate row: [Readiness review — non-authorising].
- [ ] [Gate decision] — owner: @decision-authority; date: YYYY-MM-DD; proof: [link]; decision-gate row: [Release, launch, or implementation decision — canonical authorisation].
- [ ] [Outcome review or follow-up] — owner: @name; date: YYYY-MM-DD or not set; proof: [link]; decision-gate row: [During a staged rollout — if applicable] or `Not applicable`.

## Open questions

- [ ] [Question to decide or research] — owner: @name; decide by YYYY-MM-DD; effect if unresolved: [blocked scope, temporary boundary, or decision gate consequence]; record the resolution here.
