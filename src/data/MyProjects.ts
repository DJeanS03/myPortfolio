import fjsSaude from "../assets/fjssSaude.png";
import marqenda from "../assets/marqenda.png";

export type ProjectCopy = {
  name: string;
  eyebrow: string;
  description: string;
  role: string;
  status: string;
  /** Fatos curtos exibidos no lugar da imagem quando o projeto não tem captura. */
  highlights?: string[];
};

export type Project = {
  id: number;
  featured: boolean;
  tags: string[];
  photo?: string;
  link?: string;
  repository?: string;
  translations: {
    en: ProjectCopy;
    pt: ProjectCopy;
  };
};

// Ordem dos destaques: VerdeSaber, Marqenda, Copartners, FJS Saúde, KubeRNP.
// VerdeSaber e Copartners ficam só em texto: não há captura segura para publicar.
export const myProjects: Project[] = [
  {
    id: 7,
    featured: true,
    tags: ["PHP/Laravel", "React/Inertia", "SQL", "Jobs / workers"],
    translations: {
      en: {
        name: "VerdeSaber",
        eyebrow: "Eligibility and compliance platform",
        description:
          "I built the platform as its sole developer, from company lookup and validation flows to interfaces, external integrations, asynchronous processing and reports. The work brought together PHP/Laravel, React/Inertia, SQL, queues and workers, including failure handling for external services.",
        role: "End-to-end development · sole developer",
        status: "Used by customers",
        highlights: ["Sole developer", "Used by customers", "External integrations", "Async processing & reports"],
      },
      pt: {
        name: "VerdeSaber",
        eyebrow: "Plataforma de elegibilidade e compliance",
        description:
          "Desenvolvi a plataforma como único desenvolvedor, do fluxo de consulta e validação de empresas até as interfaces, integrações externas, processamento assíncrono e geração de relatórios. O trabalho reuniu PHP/Laravel, React/Inertia, SQL, filas e workers, com tratamento de falhas em serviços externos.",
        role: "Desenvolvimento ponta a ponta · único desenvolvedor",
        status: "Usado por clientes",
        highlights: ["Único desenvolvedor", "Usado por clientes", "Integrações externas", "Processamento assíncrono e relatórios"],
      },
    },
  },
  {
    id: 1,
    featured: true,
    tags: ["SaaS", "Beta"],
    photo: marqenda,
    link: "https://marqenda.vercel.app",
    translations: {
      en: {
        name: "Marqenda",
        eyebrow: "Dental SaaS product",
        description:
          "I built the complete product to organize dental clinic operations. Its closed beta brings scheduling, staff, services, availability, blocked time slots and public booking into one workflow.",
        role: "Product ownership and end-to-end development",
        status: "Closed beta",
      },
      pt: {
        name: "Marqenda",
        eyebrow: "SaaS odontológico",
        description:
          "Construí o produto completo para organizar a operação de clínicas odontológicas. O beta fechado reúne agenda, equipe, serviços, disponibilidade, bloqueios e agendamento público em um só fluxo.",
        role: "Produto e desenvolvimento integral",
        status: "Beta fechado",
      },
    },
  },
  {
    id: 8,
    featured: true,
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Next.js"],
    translations: {
      en: {
        name: "Copartners",
        eyebrow: "Fintech operations platform",
        description:
          "I was the fintech's first developer and built data collection and processing flows, integrations and tools that supported credit analysis and business operations. As the team grew, I took on technical leadership while continuing to implement features.",
        role: "Full-stack development and technical leadership",
        status: "Used in the company's operations",
        highlights: ["First developer", "Data collection & integrations", "Landing page & admin panel", "Technical leadership"],
      },
      pt: {
        name: "Copartners",
        eyebrow: "Plataforma de operação de uma fintech",
        description:
          "Fui o primeiro desenvolvedor da fintech e construí soluções de captação e tratamento de dados, integrações e ferramentas que apoiavam a análise de crédito e a operação da empresa. Com a expansão do time, assumi a liderança técnica e continuei participando da implementação.",
        role: "Desenvolvimento full-stack e liderança técnica",
        status: "Utilizado na operação da empresa",
        highlights: ["Primeiro desenvolvedor", "Captação de dados e integrações", "Landing page e painel administrativo", "Liderança técnica"],
      },
    },
  },
  {
    id: 2,
    featured: true,
    tags: ["Next.js", "Web"],
    photo: fjsSaude,
    link: "https://fjsaude.fjs.org.br",
    translations: {
      en: {
        name: "FJS Saúde",
        eyebrow: "Public page for a healthcare service",
        description:
          "I developed the entire page from a supplied design and contributed improvement suggestions during implementation.",
        role: "Page development",
        status: "Published page",
      },
      pt: {
        name: "FJS Saúde",
        eyebrow: "Página pública para serviço de saúde",
        description:
          "Desenvolvi toda a página a partir de um design fornecido, contribuindo também com sugestões de melhoria durante a implementação.",
        role: "Desenvolvimento da página",
        status: "Página publicada",
      },
    },
  },
  {
    id: 3,
    featured: true,
    tags: ["Kubernetes", "ContainerLab", "Research"],
    photo:
      "https://github.com/hackinsdn/dashboard/blob/main/doc/img/dashboard-tela-inicial.png?raw=true",
    link: "https://hackinsdn.ufba.br",
    translations: {
      en: {
        name: "KubeRNP",
        eyebrow: "UFBA / RNP research project",
        description:
          "Modules and libraries designed to reduce the complexity of using an RNP Kubernetes cluster, including a Digital Twin proof of concept with ContainerLab.",
        role: "Research & software development",
        status: "Research project",
      },
      pt: {
        name: "KubeRNP",
        eyebrow: "Projeto de pesquisa UFBA / RNP",
        description:
          "Módulos e bibliotecas para reduzir a complexidade de uso de um cluster Kubernetes da RNP, incluindo prova de conceito de Digital Twin com ContainerLab.",
        role: "Pesquisa & desenvolvimento de software",
        status: "Projeto de pesquisa",
      },
    },
  },
  {
    id: 4,
    featured: false,
    tags: ["React", "TypeScript"],
    photo:
      "https://github.com/DJeanS03/ToDo_app/assets/109162543/cbb902b2-f526-47f9-b0fb-82f368504a1c",
    link: "https://coffee-delivery-ignite-chi.vercel.app",
    translations: {
      en: {
        name: "Coffee Delivery",
        eyebrow: "Frontend lab",
        description: "A product-style interface focused on component architecture and state management.",
        role: "Front-End development",
        status: "Completed",
      },
      pt: {
        name: "Coffee Delivery",
        eyebrow: "Laboratório Front-End",
        description: "Interface com foco em componentização, fluxo de produto e gerenciamento de estado.",
        role: "Desenvolvimento Front-End",
        status: "Concluído",
      },
    },
  },
  {
    id: 5,
    featured: false,
    tags: ["React", "TypeScript"],
    photo:
      "https://github.com/DJeanS03/DJeanS03/assets/109162543/b0bd2663-63f6-4023-aa6b-5e81a60eb4a1",
    link: "https://pomodoro-timer-pearl-eta.vercel.app",
    translations: {
      en: {
        name: "Pomodoro Timer",
        eyebrow: "Frontend lab",
        description: "A focused productivity experience built around timers, cycles and application state.",
        role: "Front-End development",
        status: "Completed",
      },
      pt: {
        name: "Pomodoro Timer",
        eyebrow: "Laboratório Front-End",
        description: "Experiência de produtividade construída em torno de timers, ciclos e estado da aplicação.",
        role: "Desenvolvimento Front-End",
        status: "Concluído",
      },
    },
  },
  {
    id: 6,
    featured: false,
    tags: ["React", "TypeScript"],
    photo:
      "https://github.com/DJeanS03/ToDo_app/assets/109162543/d37059c6-3ae9-4915-9a6e-2f2e18e0a7b5",
    link: "https://todo-app-xi-ruby.vercel.app",
    translations: {
      en: {
        name: "ToDo App",
        eyebrow: "Frontend lab",
        description: "A compact task-management project used to practice interface and state fundamentals.",
        role: "Front-End development",
        status: "Completed",
      },
      pt: {
        name: "ToDo App",
        eyebrow: "Laboratório Front-End",
        description: "Projeto compacto de tarefas usado para praticar fundamentos de interface e estado.",
        role: "Desenvolvimento Front-End",
        status: "Concluído",
      },
    },
  },
];
