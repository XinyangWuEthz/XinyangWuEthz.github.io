export type Project = {
  title: string;
  status?: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Go/Kubernetes Service Platform",
    status: "In progress",
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
    tags: ["Go", "Kubernetes", "Docker", "Helm", "GitHub Actions", "HPA", "Observability"]
  },
  {
    title: "Agentic LLM Service for Spec Generation",
    subtitle:
      "Production-grade FastAPI service with async streaming, session management, evaluation gates, and observability.",
    bullets: [
      "Architected an agentic LLM service with asynchronous streaming and robust session management.",
      "Integrated automated evaluation and data validation into CI/CD before production updates.",
      "Added OpenTelemetry metrics, structured logs, Datadog RED dashboards, and p95/p99 monitoring.",
      "Improved automated spec-generation throughput by 35%."
    ],
    tags: ["Python", "FastAPI", "LLM", "RAG", "OpenTelemetry", "Datadog", "CI/CD"]
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
    tags: ["FastAPI", "Python", "Time-Series", "Indexing", "Docker", "GitLab CI"]
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
    tags: ["Python", "PyTorch", "Linux", "Multi-GPU", "Dataset Versioning", "Computer Vision"]
  },
  {
    title: "AI Reading Partner",
    subtitle: "Chrome extension using Gemini API, DOM extraction, backend orchestration, and live UI.",
    bullets: [
      "Built a multimodal agentic Chrome extension for the Google Chrome Built-in AI Challenge.",
      "Implemented DOM extraction, backend orchestration, and live UI updates.",
      "Demonstrates compact end-to-end GenAI product delivery."
    ],
    tags: ["Chrome Extension", "Gemini API", "TypeScript", "GenAI", "RAG"],
    href: "https://devpost.com/software/ai-reading-partner"
  }
];
