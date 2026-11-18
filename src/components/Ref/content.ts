import type { Language } from "../../pages/Home";
import type { Segment } from "./RevealTitle";

// Textos do layout novo. Os fatos seguem o briefing de 18/11/2026:
// sem métricas inventadas, IA como estudo, Copartners e VerdeSaber só em texto.

type L<T> = Record<Language, T>;

export const nav: L<{ links: [string, string][]; hire: string }> = {
  pt: {
    links: [["sobre", "Sobre"], ["experiencia", "Experiência"], ["projetos", "Projetos"], ["stack", "Stack"], ["contato", "Contato"]],
    hire: "Me contrate",
  },
  en: {
    links: [["sobre", "About"], ["experiencia", "Experience"], ["projetos", "Projects"], ["stack", "Stack"], ["contato", "Contact"]],
    hire: "Hire me",
  },
};

export const hero: L<{
  top: string;
  today: string;
  roles: string[];
  location: string;
  talk: string;
  linkedin: string;
  band: string[];
}> = {
  pt: {
    top: "Disponível para novos desafios",
    today: "Hoje eu sou",
    roles: ["Desenvolvedor full-stack", "Focado em backend", "Integrador de sistemas", "Estudante de IA aplicada"],
    location: "Salvador, BA · disponível para trabalho remoto",
    talk: "Vamos conversar",
    linkedin: "Ver LinkedIn",
    band: ["APIs", "Integrações", "Automação", "Backend", "Full-stack", "TypeScript", "Node.js", "NestJS", "React"],
  },
  en: {
    top: "Open to new challenges",
    today: "Today I am a",
    roles: ["Full-stack developer", "Backend-focused", "Systems integrator", "Applied AI student"],
    location: "Salvador, Brazil · available for remote work",
    talk: "Let's talk",
    linkedin: "View LinkedIn",
    band: ["APIs", "Integrations", "Automation", "Backend", "Full-stack", "TypeScript", "Node.js", "NestJS", "React"],
  },
};

export const about: L<{
  eyebrow: string;
  title: Segment[][];
  badge: string;
  lead: string;
  paragraphs: string[];
  stats: [string, string][];
  education: string[];
}> = {
  pt: {
    eyebrow: "01 · Sobre mim",
    title: [[{ t: "Prazer," }], [{ t: "eu sou o Jean.", k: "grad" }]],
    badge: "VAGAS E FREELAS · REMOTO · VAGAS E FREELAS · REMOTO · ",
    lead:
      "Desenvolvedor full-stack com foco em backend. Construo APIs, integrações e automações que rodam no dia a dia de empresas, do banco de dados à interface, e acompanho o sistema depois da entrega.",
    paragraphs: [
      "Na Fundação José Silveira, trabalho com APIs, integrações, automações e investigação de falhas em sistemas usados por diferentes áreas. Também desenvolvi integralmente uma plataforma de elegibilidade na VerdeSaber e fui o primeiro desenvolvedor da Copartners, onde depois atuei como líder técnico.",
      "Curso o MIT em Arquitetura de Software: Cloud, Dados e IA no Instituto Infnet e aprofundo meus estudos em aplicações com IA, LLMs e RAG.",
      "Busco um time onde eu possa crescer em backend e IA resolvendo problema real de negócio.",
    ],
    stats: [
      ["3+", "anos desenvolvendo software"],
      ["3", "etapas na FJS: estágio, trainee e júnior"],
      ["1º", "desenvolvedor da Copartners"],
      ["Pós", "em Arquitetura de Software, Cloud, Dados e IA"],
    ],
    education: [
      "MIT em Arquitetura de Software · Infnet · em andamento",
      "Bacharelado em Ciência e Tecnologia · UFBA",
      "Inglês avançado · C1",
    ],
  },
  en: {
    eyebrow: "01 · About me",
    title: [[{ t: "Nice to meet you," }], [{ t: "I'm Jean.", k: "grad" }]],
    badge: "JOBS & FREELANCE · REMOTE · JOBS & FREELANCE · REMOTE · ",
    lead:
      "Full-stack developer focused on backend. I build APIs, integrations and automation that run in everyday business operations, from database to interface, and I keep improving the system after delivery.",
    paragraphs: [
      "At Fundação José Silveira, I work on APIs, integrations, automation and production issue investigation across systems used by different teams. I also built an eligibility platform end to end at VerdeSaber and was Copartners' first developer, later taking on a technical leadership role.",
      "I am pursuing a postgraduate MIT program in Software Architecture: Cloud, Data and AI at Instituto Infnet while deepening my knowledge of AI applications, LLMs and RAG.",
      "I am looking for a team where I can grow in backend and AI while solving real business problems.",
    ],
    stats: [
      ["3+", "years building software"],
      ["3", "stages at FJS: intern, trainee and junior"],
      ["1st", "developer at Copartners"],
      ["MIT", "in Software Architecture, Cloud, Data and AI"],
    ],
    education: [
      "MIT in Software Architecture · Infnet · in progress",
      "Bachelor's in Science and Technology · UFBA",
      "Advanced English · C1",
    ],
  },
};

export const aboutHighlights = {
  backend: "sky",
  apis: "lilac",
  integrações: "lilac",
  integrations: "lilac",
  automações: "amber",
  automation: "amber",
  interface: "sky",
} as const;

export type Accent = "sky" | "mint" | "lilac" | "amber" | "pink";

export const services: L<{ eyebrow: string; title: Segment[][]; items: { icon: string; accent: Accent; title: string; text: string }[] }> = {
  pt: {
    eyebrow: "02 · O que eu entrego",
    title: [[{ t: "O que eu levo" }], [{ t: "para o seu time.", k: "outline" }]],
    items: [
      { icon: "bx-git-branch", accent: "sky", title: "APIs e integrações", text: "APIs REST, serviços externos e integrações com sistemas legados e Fluig, para os sistemas da empresa conversarem entre si." },
      { icon: "bx-layer", accent: "mint", title: "Sistemas ponta a ponta", text: "Do banco de dados à interface: produtos completos como a plataforma da VerdeSaber e a Marqenda." },
      { icon: "bx-bot", accent: "lilac", title: "Automações e RPAs", text: "Rotinas e RPAs construídos em equipe com Node.js e Python para tirar trabalho repetitivo das pessoas." },
      { icon: "bx-bug", accent: "amber", title: "Investigação de falhas", text: "Análise de código, logs e dados para achar a causa de problemas em produção e acompanhar a correção." },
      { icon: "bx-code-alt", accent: "pink", title: "Produtos web", text: "Interfaces em React e Next.js, de páginas públicas a painéis administrativos." },
      { icon: "bx-brain", accent: "sky", title: "IA aplicada · em estudo", text: "LLMs, RAG e embeddings, estudados na pós-graduação e aplicados aos poucos em contexto real." },
    ],
  },
  en: {
    eyebrow: "02 · What I deliver",
    title: [[{ t: "What I bring" }], [{ t: "to your team.", k: "outline" }]],
    items: [
      { icon: "bx-git-branch", accent: "sky", title: "APIs & integrations", text: "REST APIs, external services and integrations with legacy systems and Fluig, so a company's systems can talk to each other." },
      { icon: "bx-layer", accent: "mint", title: "End-to-end systems", text: "From database to interface: complete products like the VerdeSaber platform and Marqenda." },
      { icon: "bx-bot", accent: "lilac", title: "Automation & RPAs", text: "Routines and RPAs built with the team using Node.js and Python to take repetitive work off people's plates." },
      { icon: "bx-bug", accent: "amber", title: "Issue investigation", text: "Code, log and data analysis to find the cause of production issues and follow the fix through." },
      { icon: "bx-code-alt", accent: "pink", title: "Web products", text: "React and Next.js interfaces, from public pages to admin panels." },
      { icon: "bx-brain", accent: "sky", title: "Applied AI · learning", text: "LLMs, RAG and embeddings, studied in my postgraduate program and gradually applied in real contexts." },
    ],
  },
};

export const experience: L<{ eyebrow: string; title: Segment[][]; current: string }> = {
  pt: {
    eyebrow: "03 · Experiência",
    title: [[{ t: "Onde eu " }, { t: "já", k: "sky" }], [{ t: "fiz", k: "grad" }], [{ t: "acontecer." }]],
    current: "Atual",
  },
  en: {
    eyebrow: "03 · Experience",
    title: [[{ t: "Where I've" }], [{ t: "made things", k: "grad" }], [{ t: "happen." }]],
    current: "Current",
  },
};

// Resumo e destaques curtos de cada experiência, pelo id de MyExperiences.
export const experienceDetails: Record<number, { company: string } & L<{ summary: string; pills: string[] }>> = {
  1: {
    company: "Fundação José Silveira",
    pt: {
      summary: "Desenvolvo e mantenho APIs, integrações e automações usadas em processos da organização, e investigo falhas em produção a partir de código, logs e dados.",
      pills: ["APIs e integrações", "RPAs em equipe com TypeScript, NestJS e Python", "Investigação de falhas em produção", "Docker e CI/CD", "Apoio à evolução da Jô, assistente de IA"],
    },
    en: {
      summary: "I develop and maintain APIs, integrations and automation used in organizational processes, and investigate production issues through code, logs and data.",
      pills: ["APIs & integrations", "Team-built RPAs with TypeScript, NestJS and Python", "Production issue investigation", "Docker & CI/CD", "Supporting Jô, an AI assistant"],
    },
  },
  6: {
    company: "Fundação José Silveira",
    pt: {
      summary: "Desenvolvi e mantive aplicações internas no front-end e no backend, com integrações e automações para digitalizar processos.",
      pills: ["React, Next.js, Node.js e TypeScript", "Integrações e automações", "Regras de negócio", "Contato com áreas usuárias"],
    },
    en: {
      summary: "I developed and maintained internal frontend and backend applications, with integrations and automation to digitize processes.",
      pills: ["React, Next.js, Node.js & TypeScript", "Integrations & automation", "Business rules", "Working with user teams"],
    },
  },
  3: {
    company: "Acelera FJS",
    pt: {
      summary: "Estágio com integrações entre sistemas e digitalização de processos internos, junto às áreas usuárias e à equipe técnica.",
      pills: ["Integrações entre sistemas", "Formulários e workflows no Fluig", "Front-end e backend"],
    },
    en: {
      summary: "Internship working on system integrations and internal process digitization, alongside user teams and the technical team.",
      pills: ["System integrations", "Fluig forms & workflows", "Frontend & backend"],
    },
  },
  2: {
    company: "Copartners",
    pt: {
      summary: "Primeiro desenvolvedor da fintech: organizei a base técnica e as primeiras entregas. Com o time crescendo, assumi a liderança técnica e segui implementando.",
      pills: ["Captação de dados e APIs", "Integrações para análise de crédito", "Landing page e painel administrativo", "Liderança técnica"],
    },
    en: {
      summary: "The fintech's first developer: I set up the technical foundation and first deliveries. As the team grew, I took on technical leadership and kept implementing.",
      pills: ["Data collection & APIs", "Integrations for credit analysis", "Landing page & admin panel", "Technical leadership"],
    },
  },
  5: {
    company: "InfoJr UFBA",
    pt: {
      summary: "Membro de empresa júnior, desenvolvendo aplicações web e mobile para clientes de diferentes setores.",
      pills: ["React.js, Node.js e PostgreSQL", "Testes e CI/CD", "Code review"],
    },
    en: {
      summary: "Junior enterprise member, building web and mobile applications for clients across different sectors.",
      pills: ["React.js, Node.js & PostgreSQL", "Testing & CI/CD", "Code review"],
    },
  },
  4: {
    company: "InfoJr UFBA",
    pt: {
      summary: "Gerência de projetos na empresa júnior: cronogramas, metas e comunicação entre times e clientes.",
      pills: ["Gestão de projetos", "Equipes multidisciplinares", "Processos de entrega"],
    },
    en: {
      summary: "Project management at the junior enterprise: timelines, goals and communication between teams and clients.",
      pills: ["Project management", "Multidisciplinary teams", "Delivery processes"],
    },
  },
};

export const projects: L<{ eyebrow: string; title: Segment[][]; count: (n: number) => string; hint: string; privateUrl: string }> = {
  pt: {
    eyebrow: "04 · Projetos",
    title: [[{ t: "Coisas que " }, { t: "eu", k: "sky" }], [{ t: "construí.", k: "grad" }]],
    count: (n) => `${n} projetos · role para o lado`,
    hint: "sem captura pública: apresentado em texto",
    privateUrl: "projeto privado",
  },
  en: {
    eyebrow: "04 · Projects",
    title: [[{ t: "Things " }, { t: "I've", k: "sky" }], [{ t: "built.", k: "grad" }]],
    count: (n) => `${n} projects · scroll sideways`,
    hint: "no public screen: presented in text",
    privateUrl: "private project",
  },
};

export const stack: L<{
  eyebrow: string;
  title: Segment[][];
  educationLabel: string;
  education: string[];
  groups: { name: string; note?: string; items: string[] }[];
}> = {
  pt: {
    eyebrow: "05 · Caixa de ferramentas",
    title: [[{ t: "Stack " }, { t: "& skills", k: "outline" }]],
    educationLabel: "Formação e pesquisa",
    education: [
      "MIT em Arquitetura de Software: Cloud, Dados e IA · Infnet · em andamento",
      "Bacharelado Interdisciplinar em Ciência e Tecnologia · UFBA · concluído",
      "Iniciação científica · KubeRNP · UFBA / RNP",
      "Inglês avançado · C1",
    ],
    groups: [
      { name: "Back-End", items: ["Node.js", "TypeScript", "NestJS", "Express", "Python", "REST APIs"] },
      { name: "Front-End", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
      { name: "Dados & integrações", items: ["PostgreSQL", "Oracle", "SQL", "Fluig", "Integrações"] },
      { name: "Entrega", items: ["Docker", "CI/CD", "GitHub Actions", "Git", "Code Review"] },
      { name: "IA aplicada", note: "Em estudo na pós-graduação e por conta própria", items: ["LLMs", "RAG", "Embeddings", "Arquitetura com IA", "Integração de modelos"] },
      { name: "Também usei", note: "Usadas em projetos ou estudos, sem a mesma profundidade", items: ["PHP/Laravel", "Selenium", "Jest", "Cypress", "FastAPI", "MongoDB", "AWS", "LangChain"] },
    ],
  },
  en: {
    eyebrow: "05 · Toolbox",
    title: [[{ t: "Stack " }, { t: "& skills", k: "outline" }]],
    educationLabel: "Education & research",
    education: [
      "MIT in Software Architecture: Cloud, Data and AI · Infnet · in progress",
      "Interdisciplinary Bachelor's in Science and Technology · UFBA · completed",
      "Undergraduate research · KubeRNP · UFBA / RNP",
      "Advanced English · C1",
    ],
    groups: [
      { name: "Back-End", items: ["Node.js", "TypeScript", "NestJS", "Express", "Python", "REST APIs"] },
      { name: "Front-End", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
      { name: "Data & integrations", items: ["PostgreSQL", "Oracle", "SQL", "Fluig", "Integrations"] },
      { name: "Delivery", items: ["Docker", "CI/CD", "GitHub Actions", "Git", "Code Review"] },
      { name: "Applied AI", note: "Currently studying in my postgraduate program and on my own", items: ["LLMs", "RAG", "Embeddings", "AI architecture", "Model integration"] },
      { name: "Also used", note: "Used in projects or studies, without the same depth", items: ["PHP/Laravel", "Selenium", "Jest", "Cypress", "FastAPI", "MongoDB", "AWS", "LangChain"] },
    ],
  },
};

export const contact: L<{
  eyebrow: string;
  title: Segment[][];
  write: string;
  close: string;
  cards: { label: string; detail: string; href: string }[];
  location: string;
  modes: string;
  clock: string;
  made: string;
  credit: string;
}> = {
  pt: {
    eyebrow: "06 · Contato",
    title: [[{ t: "Vamos" }], [{ t: "trabalhar", k: "outline" }], [{ t: "juntos", k: "grad" }, { t: "?", k: "amber" }]],
    write: "Escrever mensagem",
    close: "Fechar formulário",
    cards: [
      { label: "LinkedIn", detail: "in/jean-victor200", href: "https://www.linkedin.com/in/jean-victor200" },
      { label: "GitHub", detail: "DJeanS03", href: "https://github.com/DJeanS03" },
    ],
    location: "Salvador, BA · disponível para trabalho remoto",
    modes: "Vagas · Freelance · Remoto",
    clock: "Salvador agora",
    made: "Feito com React, Vite e muito café",
    credit: "design inspirado em luizrenato.dev",
  },
  en: {
    eyebrow: "06 · Contact",
    title: [[{ t: "Let's" }], [{ t: "work", k: "outline" }], [{ t: "together", k: "grad" }, { t: "?", k: "amber" }]],
    write: "Write a message",
    close: "Close form",
    cards: [
      { label: "LinkedIn", detail: "in/jean-victor200", href: "https://www.linkedin.com/in/jean-victor200" },
      { label: "GitHub", detail: "DJeanS03", href: "https://github.com/DJeanS03" },
    ],
    location: "Salvador, Brazil · available for remote work",
    modes: "Jobs · Freelance · Remote",
    clock: "Salvador now",
    made: "Built with React, Vite and lots of coffee",
    credit: "design inspired by luizrenato.dev",
  },
};
