# Design: Seven Blog Posts from Notion Notes

**Date:** 2026-07-18
**Status:** Approved by user

## Goal

Publish seven English-language technical blog posts on XinyangWuEthz.github.io, distilled
from the author's private Notion study notes, using the site's existing `notes` content
collection. No layout, component, or config changes.

## Architecture

- Add seven `.mdx` files to `src/content/notes/`.
- Each file uses the existing frontmatter schema (`src/content/config.ts`):
  `title` (string), `date` (date), `summary` (string), `tags` (string[]).
- The notes index (`src/pages/notes/index.astro`) and detail route
  (`src/pages/notes/[...slug].astro`) pick up new entries automatically.
- Posts are dated by their source note's timeframe (June 2026) so they sit naturally
  alongside the three existing notes, rather than all carrying today's date.

## The seven posts

| # | Slug (file) | Working title | Source note (private Notion) |
|---|---|---|---|
| 1 | `opentelemetry-first-principles.mdx` | OpenTelemetry from First Principles | OTel fundamentals + three-signal correlation deep-dive |
| 2 | `otel-metrics-god-class-refactor.mdx` | Refactoring OTel Metrics: from God Class to Per-Subsystem Modules | OTel metrics architecture refactor |
| 3 | `an-agent-is-a-loop.mdx` | An Agent Is a Loop | Agentic systems architecture |
| 4 | `rag-beyond-the-demo.mdx` | RAG Beyond the Demo | Retrieval-augmented generation |
| 5 | `kubernetes-helm-weekend-lab.mdx` | A Weekend of Kubernetes: FastAPI + Helm on kind | Kubernetes & Helm hands-on lab |
| 6 | `what-happens-when-you-ssh.mdx` | What Actually Happens When You Run `ssh somehost` | SSH connection deep-dive |
| 7 | `working-map-of-networking.mdx` | A Working Map of Computer Networking | Computer networking fundamentals |

### Content per post

1. **OpenTelemetry from First Principles** — vendor-neutral telemetry model; the three
   signals and what question each answers; Resource / Scope / Instrument / Attributes /
   OTLP vocabulary; API vs SDK split and why libraries only depend on the API; trace
   context propagation (contextvars in-process, W3C `traceparent` across processes);
   correlation mechanisms (shared Resource, logs auto-stamped with trace_id, exemplars
   and shared dimensions); two anonymized war stories: the missing SERVER span that
   grafted spans onto hours-old traces, and the double log-export from two OTLP handlers;
   delta vs cumulative temporality as a backend-integration gotcha.
2. **Refactoring OTel Metrics** — why OTel instruments must be process-level singletons;
   the god-class + mixin anti-pattern and silent same-name attribute override;
   `@functools.cache` as memoization-as-singleton; cheap per-request wrapper vs expensive
   shared instruments (flyweight); cardinality budgeting and "log it, don't tag it";
   push (Counter/Histogram) vs pull (ObservableGauge + snapshot-under-lock callback);
   metric names as public contracts during refactors. Written from an observer/lessons
   perspective, not claiming authorship of the refactor.
3. **An Agent Is a Loop** — ReAct loop as the core mental model; five architecture
   layers (governance, orchestration, capabilities, state, factory); tool calling with
   the harness as the security boundary; MCP; model-driven vs deterministic control
   flow; retrieval/grounding; state = context window + external persistence; single vs
   multi-agent trade-offs (context isolation, parallelism, specialization vs
   coordination cost); autonomy levels proportional to reversibility × blast radius;
   escalation as the responsible default.
4. **RAG Beyond the Demo** — what RAG fixes (hallucination, stale/private knowledge,
   context cost); RAG vs fine-tuning vs long-context; offline indexing and online query
   pipelines; embeddings (why an MLP isn't enough), chunking, ANN (HNSW/IVF) and when
   brute-force kNN is the right call; two-stage retrieval with rerankers, hybrid
   BM25+dense with RRF; deterministic vs prompt-inline citation; split retrieval/
   generation evaluation (recall@k, MRR; faithfulness via LLM-as-judge and its biases);
   prompt caching mechanics (prefix KV cache, render order, silent invalidators) and how
   caching moves the RAG-vs-long-context break-even point.
5. **A Weekend of Kubernetes** — multi-stage non-root image; kind cluster with host
   port mapping; Helm chart anatomy (Deployment/Service/ConfigMap/Secret/Ingress/HPA,
   dev/prod overlays, `checksum/config` rollout trick, templating N services from one
   values map); the Secret → tmpfs file → app config flow; deliberate-breakage lab
   (ImagePullBackOff, CrashLoopBackOff, selector mismatch, ingress scaled to zero);
   a closing self-test quiz adapted from the interview cheat sheet.
6. **What Actually Happens When You Run `ssh somehost`** — seven-stage pipeline:
   client config resolution (Host patterns, `ssh -G`), name resolution, TCP, cipher
   negotiation, host key verification (`known_hosts`), user auth (challenge-signature,
   private key never leaves the machine), channels (shell/exec/scp/port forwarding);
   mapping common errors to the stage that produced them; `-L` local forwarding
   explained. Hostname anonymized to a fictional `gpu-node-02`.
7. **A Working Map of Computer Networking** — layering and encapsulation as the core
   idea; five-layer map with protocols and addressing units; TCP vs UDP; three-way
   handshake / four-way teardown and the "why three / why four" reasoning; URL-to-page
   walkthrough as the full-stack demo; flow control vs congestion control; IP, CIDR,
   NAT; HTTP method idempotency and status classes; DNS resolution chain.

## Sanitization rules (hard requirements)

- **Remove entirely:** colleague names; commit hashes / MR numbers / branch names;
  internal metric names, scopes, and the employer's internal project name; internal
  hostnames and IPs; demo credentials; VPN topology specifics; internal file paths.
  (This spec itself is committed to the public repo, so the concrete banned strings
  live only in the private Notion sources — not here.)
- **Generalize:** "a production FastAPI prediction service", "our collector pipeline",
  "a scientific-instrument backend" style phrasing; fictional hostnames where an example
  is needed.
- **Honest attribution:** the metrics refactor post explains patterns learned from a
  refactor in a codebase the author works in, without claiming the author designed it.
- **Strip interview framing:** no "L3", "CV bullet", "面试考点", interview-script tone;
  posts read as engineering write-ups. Quiz-style recaps are fine when framed as
  self-tests for the reader.
- Code samples keep only generic patterns (OTel API usage, `functools.cache` singleton,
  MVP RAG retrieval, kubectl/helm commands) — nothing proprietary.

## Style

- Match the three existing notes: concise sections with `##` headings, practical tone,
  first person sparingly; MDX with fenced code blocks; tags drawn from the same family
  as existing ones (e.g. "OpenTelemetry", "Observability", "Kubernetes", "Helm",
  "LLM", "RAG", "Agents", "Networking", "SSH", "Python").
- Longer than the existing three notes is acceptable (sources are deep), but each post
  stays focused on its single theme; sibling posts cross-link via relative `/notes/...`
  links where genuinely helpful.

## Error handling / edge cases

- `npm run build` must pass with zero content-schema errors (Astro validates
  frontmatter against the zod schema at build time).
- Dates must be valid `YYYY-MM-DD` so the index sort stays correct.
- The uncommitted `src/components/Hero.astro` change predates this work and must not be
  included in any commit made for this task.

## Testing / verification

1. `npm run build` succeeds.
2. Preview the built site; spot-check the notes index lists 10 entries in date order
   and each new post renders (headings, code blocks, tables).
3. Grep the new MDX files for the banned tokens (internal project name, colleague
   names, internal hostnames, IPs, credentials) before committing.
4. Commit only `src/content/notes/*.mdx` + this spec/plan; push to `main` to publish
   via the existing GitHub Pages workflow.
