import React from "react";

type Lang = "en" | "pt";

type ExpertiseItem = {
  id: number;
  icon: React.ReactElement;
  translations: Record<
    Lang,
    {
      title: string;
      description: string;
    }
  >;
};

export const myExpertise: ExpertiseItem[] = [
  {
    id: 1,
    icon: React.createElement("i", {
      className: "bx bx-code-alt expertise__icon",
    }),
    translations: {
      en: {
        title: "Front-End Engineering",
        description:
          "Responsive interfaces, performance and clean component architecture with React/Next.js.",
      },
      pt: {
        title: "Engenharia Front-End",
        description:
          "Interfaces responsivas, performance e arquitetura limpa de componentes com React/Next.js.",
      },
    },
  },
  {
    id: 2,
    icon: React.createElement("i", {
      className: "bx bx-server expertise__icon",
    }),
    translations: {
      en: {
        title: "Back-End Engineering",
        description:
          "Secure APIs, authentication, integrations and performance with Node.js (NestJS/Express) and PostgreSQL.",
      },
      pt: {
        title: "Engenharia Back-End",
        description:
          "APIs seguras, autenticação, integrações e performance com Node.js (NestJS/Express) e PostgreSQL.",
      },
    },
  },
  {
    id: 3,
    icon: React.createElement("i", {
      className: "bx bx-cloud expertise__icon",
    }),
    translations: {
      en: {
        title: "DevOps & Cloud",
        description:
          "Docker, Kubernetes and CI/CD for predictable deployments and stable environments.",
      },
      pt: {
        title: "DevOps & Cloud",
        description:
          "Docker, Kubernetes e CI/CD para deploy previsível e ambientes estáveis.",
      },
    },
  },
  {
    id: 4,
    icon: React.createElement("i", { className: "bx bx-bot expertise__icon" }),
    translations: {
      en: {
        title: "GenAI & Automation",
        description:
          "LLMs and RAG to automate workflows, speed up delivery and improve systems.",
      },
      pt: {
        title: "IA & Automação",
        description:
          "LLMs e RAG para automatizar fluxos, acelerar entregas e evoluir sistemas.",
      },
    },
  },
];
