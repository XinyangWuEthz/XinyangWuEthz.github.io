export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Miltenyi Biotec",
    role: "Software Engineer",
    location: "Zurich, Switzerland",
    dates: "Sept 2024 - Present",
    summary: "Production backend, LLM services, observability, CI/CD, and internal AI tooling.",
    highlights: [
      "Built FastAPI data platform for biosensor time-series.",
      "Shipped production agentic LLM service.",
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
    summary: "Foundation-model fine-tuning and distributed evaluation pipelines.",
    highlights: [
      "Fine-tuned Stable Diffusion on shared multi-GPU infrastructure.",
      "Built training and evaluation pipelines for foundation-model experimentation."
    ]
  }
];
