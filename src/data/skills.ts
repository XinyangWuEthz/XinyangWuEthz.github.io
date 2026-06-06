export type SkillGroup = {
  title: string;
  body: string;
};

export const skills: SkillGroup[] = [
  {
    title: "Backend Systems",
    body: "FastAPI, REST APIs, async streaming, session management, indexing, query optimization, SQL, data ingestion."
  },
  {
    title: "AI Infrastructure",
    body: "LLM services, RAG-style grounding, evaluation harnesses, model validation gates, experiment tracking, dataset versioning."
  },
  {
    title: "Cloud Native / DevOps",
    body: "Docker, GitHub Actions, GitLab CI, Kubernetes, Helm, HPA, ConfigMaps, Secrets, service health checks."
  },
  {
    title: "Observability",
    body: "OpenTelemetry, OTEL Collector, Datadog, RED dashboards, p95/p99 latency, structured logs, runbooks."
  }
];

export const languages = ["Python", "Go", "TypeScript", "SQL", "Java", "C", "Bash", "MATLAB"];
