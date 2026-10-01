import fjsSaude from "../assets/fjssSaude.png";
import marqenda from "../assets/marqenda.png";

export type Project = {
  id: number;
  featured: boolean;
  tags: string[];
  photo?: string;
  link?: string;
  repository?: string;
  translations: {
    en: {
      name: string;
      eyebrow: string;
      description: string;
      role: string;
      status: string;
    };
    pt: {
      name: string;
      eyebrow: string;
      description: string;
      role: string;
      status: string;
    };
  };
};

export const myProjects: Project[] = [
  {
    id: 1,
    featured: true,
    tags: ["SaaS", "Scheduling", "Beta"],
    photo: marqenda,
    link: "https://marqenda.vercel.app",
    translations: {
      en: {
        name: "Marqenda",
        eyebrow: "Scheduling & service operations app",
        description:
          "A product in closed beta that brings scheduling, staff, services, availability, blocks and public booking into a single operational panel for service-based businesses.",
        role: "Product & software development",
        status: "Closed beta",
      },
      pt: {
        name: "Marqenda",
        eyebrow: "App de agenda e operação de atendimentos",
        description:
          "Produto em beta fechado que reúne agenda, equipe, serviços, disponibilidade, bloqueios e agendamento público em um único painel para negócios que trabalham com atendimentos.",
        role: "Produto & desenvolvimento de software",
        status: "Beta fechado",
      },
    },
  },
  {
    id: 2,
    featured: true,
    tags: ["Next.js", "Web", "Production"],
    photo: fjsSaude,
    link: "https://fjsaude.fjs.org.br",
    translations: {
      en: {
        name: "FJS Saúde",
        eyebrow: "Institutional health platform",
        description:
          "A production web experience built for a healthcare organization, presented here as one of the portfolio's professional delivery highlights.",
        role: "Full-Stack development / delivery",
        status: "Live",
      },
      pt: {
        name: "FJS Saúde",
        eyebrow: "Plataforma institucional de saúde",
        description:
          "Experiência web em produção para uma organização de saúde, apresentada como um dos destaques de entrega profissional do portfólio.",
        role: "Desenvolvimento Full-Stack / entrega",
        status: "Em produção",
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
