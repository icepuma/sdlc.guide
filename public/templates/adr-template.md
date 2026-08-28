# ADR-[NNN]: [Short noun-phrase title]

> Replace every `[placeholder]` before review. Replace `[NNN]` with the next sequential ADR number; never reuse a number, including for a rejected or superseded ADR.

- **Status:** [Choose one: Proposed | Accepted | Rejected | Deprecated | Superseded]
- **Date:** YYYY-MM-DD
- **ADR steward:** @who (maintains the record and review)
- **Decision authority:** @who (accepts or rejects the decision)
- **Contributors:** @who | None
- **Supersedes:** `None` until this ADR is Accepted; then, only if it replaces an Accepted predecessor, name that predecessor in the coordinated update below
- **Superseded by:** `None` until this Accepted ADR has an Accepted successor; then name that successor in the coordinated update below

## Status and relationship rules

- **Proposed:** Can change during review. Both supersession fields are `None`; a proposed successor changes no predecessor.
- **Accepted:** The current decision. If it replaces an Accepted ADR predecessor, make one coordinated update: set this ADR’s **Supersedes** field to the predecessor, set the predecessor’s **Status** to **Superseded**, and set the predecessor’s **Superseded by** field to this ADR.
- **Rejected:** Records a decision not taken. Keep it immutable; both supersession fields are `None`.
- **Deprecated:** An accepted historical decision that must not be selected for new work. It is not a synonym for Superseded and does not name a replacement in **Superseded by**.
- **Superseded:** An accepted historical decision replaced by an Accepted successor through the coordinated update above. Its **Superseded by** field names that successor.

Keep accepted and rejected decision text immutable, apart from the status and relationship metadata above. Do not name an unaccepted ADR in either supersession field. Before a successor is Accepted, keep its **Supersedes** field and the predecessor’s **Superseded by** field as `None`.

## Context

State the factual technical, product, project, and social forces that make this decision necessary.

## Options considered

List the viable options—including the status quo when useful—and the trade-offs that led to the decision.

## Decision

State the outcome in active voice. For an Accepted ADR, write “We will …”. For a Rejected ADR, state what was rejected and why.

## Consequences

State the positive, negative, and neutral consequences: what becomes easier, harder, or otherwise changes. Include known risks and follow-up work.

## Confirmation or review trigger (optional)

State how the team will check that implementation conforms to this decision, or what evidence should trigger a successor ADR.
