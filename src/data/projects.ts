export type Project = {
  title: string;
  status?: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  projectUrl?: string;
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
    status: "Released v0.1.0",
    subtitle:
      "A reproducible benchmark for human-review routing: compare admission policies and queue ordering under fixed reviewer capacity.",
    bullets: [
      "Compared admission policies and four queue orderings using one frozen, calibrated classifier on Jigsaw comments.",
      "At 180 admitted jobs/hour, severity ordering completed 53.75 more high-risk reviews and 53.75 fewer other reviews per 8-hour shift than FIFO, averaged over 20 paired simulation seeds.",
      "Total throughput stayed unchanged. Labels are proxies for review value; moderation actions still require human confirmation.",
      "Published experiment records, CI checks, and versioned model and evaluation artifacts."
    ],
    tags: ["Python", "scikit-learn", "ML Evaluation", "Human Review", "Queue Simulation"],
    projectUrl: "https://xinyangwuethz.github.io/review-router/",
    repoUrl: "https://github.com/XinyangWuEthz/review-router"
  },
  {
    title: "Abuse Signals",
    subtitle:
      "Account-level abuse-detection prototype with SQL behavioral signals and reproducible evaluation of deterministic rules and supervised classifiers.",
    bullets: [
      "Engineered 13 SQL behavioral signals over 20K synthetic accounts per experiment.",
      "Compared rules, logistic regression, and gradient boosting using grouped train/validation/test splits and validation-calibrated action thresholds.",
      "Achieved mean average precision of 0.988 with gradient boosting on held-out synthetic challenge data across three seeds, with 99.6% precision and 90.5% recall for suspend recommendations.",
      "Automated 63 tests, detection-quality regression gates, and a six-run benchmark with saved evaluation reports in GitHub Actions."
    ],
    tags: ["Python", "SQL", "scikit-learn", "FastAPI", "GitHub Actions"],
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
