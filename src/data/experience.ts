export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  signals: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Miltenyi Biotec",
    role: "Software Engineer",
    location: "Zurich, Switzerland",
    dates: "Sept 2024 - Present",
    summary: "Production backend, grounded LLM assistants, observability, CI/CD, and internal AI tooling.",
    signals: ["Backend ownership", "Grounded LLM service", "Routed retrieval", "Evaluation infrastructure", "CI/CD", "Observability"],
    highlights: [
      "Built FastAPI data platform for biosensor time-series.",
      "Shipped documentation and evaluation assistants with deterministic evidence routing, streaming responses, and source grounding.",
      "Built human-in-the-loop evaluation infrastructure: a versioned golden set enforced by regression assertions and deterministic retrieval gates in CI.",
      "Hardened production reliability by converting 46 unhandled HTTP 500 error paths into typed errors across 120 call sites.",
      "Added CI/CD validation gates for backend/frontend/model updates.",
      "Instrumented services with OpenTelemetry and Datadog."
    ]
  },
  {
    company: "Bosch",
    role: "Machine Learning Engineer Intern",
    location: "Stuttgart, Germany",
    dates: "Mar 2024 - Aug 2024",
    summary: "Distributed data and computer-vision infrastructure on multi-GPU Linux clusters.",
    signals: ["Distributed data pipeline", "Reproducibility", "GPU cluster", "Containerized environments"],
    highlights: [
      "Built dataset versioning and reproducible data pipelines.",
      "Optimized GPU memory for 3D video reconstruction.",
      "Automated data-pipeline provisioning and container validation.",
      "Work productized into first-author patent."
    ]
  },
  {
    company: "ETH Zurich",
    role: "Research Assistant, Generative AI",
    location: "Computer Vision Lab, Zurich",
    dates: "Mar 2023 - Sept 2023",
    summary: "Controllable image generation and reproducible evaluation pipelines.",
    signals: ["Fine-tuning", "Evaluation pipeline", "Model controllability"],
    highlights: [
      "Built a controllable Stable Diffusion 1.5/ControlNet image-generation pipeline, fine-tuning trainable adapters on a 24 GB RTX 3090.",
      "Improved mean color-accuracy AUC by 3.97 points over prior work with reproducible training and evaluation runs."
    ]
  }
];
