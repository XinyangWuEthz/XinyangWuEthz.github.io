export type Project = {
  title: string;
  status?: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  repoUrl?: string;
  caseStudyUrl?: string;
  architectureUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Documentation & Evaluation Assistant Platform",
    subtitle:
      "Grounded LLM assistant for product documentation and evaluation workflows, built with routed retrieval, NDJSON streaming, source evidence, and reusable frontend drawers.",
    bullets: [
      "Built a FastAPI-based assistant service over generated product documentation and curated external knowledge corpora.",
      "Implemented question routing across product, science, hybrid, troubleshooting, surface-chemistry, and comparison intents.",
      "Designed retrieval policy with actionable vs. background evidence pools, transferability filters, and source-coverage guardrails.",
      "Streamed token and completion events as NDJSON with resolved source metadata for frontend grounding display.",
      "Reused the same assistant stream inside the Kinetics and Affinity Evaluation Assistant with goal, step, and data-selection context."
    ],
    tags: ["Python", "FastAPI", "TypeScript", "LLM", "RAG", "NDJSON Streaming", "Retrieval Policy", "CI/CD"],
    caseStudyUrl: "/notes/llm-gateway-observability/",
    architectureUrl: "/notes/ai-service-red-metrics/"
  },
  {
    title: "Go/Kubernetes Service Platform",
    status: "Current build",
    subtitle:
      "A production-style microservice deployed on Kubernetes with Helm, probes, HPA, ConfigMaps, Secrets, and CI/CD.",
    bullets: [
      "Built a Go REST/gRPC service with clean architecture and structured logging.",
      "Containerized the service with a multi-stage non-root Docker image.",
      "Deployed to Kubernetes using Helm with dev/prod values overlays.",
      "Added liveness/readiness probes, resource requests/limits, ConfigMap/Secret separation.",
      "Configured HorizontalPodAutoscaler with metrics-server.",
      "Added GitHub Actions CI for tests, linting, Docker build, and Helm chart validation."
    ],
    tags: ["Go", "Kubernetes", "Docker", "Helm", "GitHub Actions", "HPA", "Observability"],
    caseStudyUrl: "/notes/go-kubernetes-service/"
  },
  {
    title: "Review Router",
    subtitle:
      "Content-policy router that allocates a fixed human-review budget across abuse categories, treated as an operating-point and queueing problem.",
    bullets: [
      "Ran exact operating-point analysis over 63,978 scored Jigsaw test rows, surfacing precision ceilings of 84% (toxic) vs. 14% (threat) at 50% recall / 1% FPR.",
      "Routed rare high-harm labels to human review by policy under a fixed reviewer budget.",
      "Cut p50 time-to-action by 65% against an equal-capacity FIFO baseline while tracking p90/p99.",
      "Quantified a 1.74x severe-toxic volume overshoot from train-test prevalence shift that ROC-AUC missed.",
      "Enforced per-label precision, clearance, and determinism floors in CI."
    ],
    tags: ["Python", "ML Evaluation", "Operating Points", "Queue Simulation", "CI Gates"],
    repoUrl: "https://github.com/XinyangWuEthz/review-router"
  },
  {
    title: "Abuse Signals",
    subtitle:
      "Account-level abuse-detection prototype combining SQL behavioral signals, deterministic rules, and supervised classifiers.",
    bullets: [
      "Engineered SQL behavioral signals over 20K synthetic accounts.",
      "Combined deterministic rules with supervised classifiers for throttle/suspend decisions.",
      "Reached PR-AUC 1.00 with throttle/suspend precision of 1.00/1.00 and recall of 0.96/0.66 on held-out synthetic data.",
      "Enforced behavior with a 12-test CI gate."
    ],
    tags: ["Python", "SQL", "scikit-learn", "Deterministic Rules", "CI Gates"],
    repoUrl: "https://github.com/XinyangWuEthz/abuse-signals"
  },
  {
    title: "High-Throughput Time-Series Data Platform",
    subtitle:
      "FastAPI backend for biosensor time-series ingestion, indexing, and concurrent internal serving.",
    bullets: [
      "Designed and optimized a FastAPI data ingestion and processing platform.",
      "Implemented storage-layer indexing to reduce query latency by 10%.",
      "Supported concurrent serving for 30 internal users.",
      "Built deployment automation with GitLab CI and Docker."
    ],
    tags: ["FastAPI", "Python", "Time-Series", "Indexing", "Docker", "GitLab CI"],
    caseStudyUrl: "/notes/ai-service-red-metrics/"
  },
  {
    title: "Distributed Dataset Versioning & CV Pipeline",
    subtitle:
      "Reproducible data tooling on a multi-GPU Linux cluster for large-scale computer vision workloads.",
    bullets: [
      "Built dataset versioning and automated data-pipeline tooling.",
      "Reduced model-training data-preparation time by 50%.",
      "Improved reproducibility for downstream computer-vision stacks.",
      "Optimized GPU memory utilization for 3D video reconstruction.",
      "Work productized into first-author patent US 19/402,148."
    ],
    tags: ["Python", "PyTorch", "Linux", "Multi-GPU", "Dataset Versioning", "Computer Vision"],
    caseStudyUrl: "/notes/ai-service-red-metrics/"
  },
  {
    title: "AI Reading Partner",
    subtitle: "Chrome extension using Gemini API, DOM extraction, backend orchestration, and live UI.",
    bullets: [
      "Built a multimodal agentic Chrome extension for a browser AI challenge.",
      "Implemented DOM extraction, backend orchestration, and live UI updates.",
      "Demonstrates compact end-to-end GenAI product delivery."
    ],
    tags: ["Chrome Extension", "Gemini API", "TypeScript", "GenAI", "RAG"],
    demoUrl: "https://devpost.com/software/ai-reading-partner"
  }
];
