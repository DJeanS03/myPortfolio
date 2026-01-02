export const myExperiences = [
  // 1) MAIS RECENTE
  {
    id: 1,
    defaultValues: {
      companyName: "Fundação José Silveira",
      location: "Salvador, BA | Híbrido",
      startDate: new Date("2025-08-01"),
      exitDate: new Date("2025-12-31"),
      status: "a",
    },
    translations: {
      en: {
        jobTitle: "Software Developer",
        employmentType: "Full-time",
        children: [
          "Built GenAI solutions with LLMs (OpenAI, LangChain, RAG), connecting models to internal data for contextual answers and process automation.",
          "Developed back-end APIs and services with Node.js (Express/NestJS) and Python (FastAPI/automation scripts), integrating external APIs and implementing auth (JWT/OAuth).",
          "Created Python routines for web scraping (Requests, BeautifulSoup, Selenium/Playwright) and used APIFLASH for programmatic page capture and structured data pipelines.",
          "Worked with Docker, CI/CD (GitHub Actions/GitLab CI) and AWS (EC2/Lightsail/S3/Lambda/CloudWatch) for deployments and basic monitoring.",
          "Delivered front-end features with React + TypeScript (and Next.js when applicable), focusing on componentization, API consumption and state management.",
        ],
      },
      pt: {
        jobTitle: "Desenvolvedor de Software",
        employmentType: "Tempo integral",
        children: [
          "Atuação em soluções com IA generativa e LLMs (OpenAI, LangChain, RAG), conectando modelos a bases internas para respostas contextuais e automação de processos.",
          "Desenvolvimento de APIs e serviços backend com Node.js (Express/NestJS) e Python (FastAPI/automação), integração com APIs externas e autenticação (JWT/OAuth).",
          "Criação de rotinas em Python para web scraping (Requests, BeautifulSoup, Selenium/Playwright) e uso de APIFLASH para captura programática de páginas e estruturação de dados.",
          "Deploy e observabilidade básica com Docker, CI/CD (GitHub Actions/GitLab CI) e AWS (EC2/Lightsail/S3/Lambda/CloudWatch).",
          "Desenvolvimento de features no front com React + TypeScript (e Next.js quando aplicável), com componentização, consumo de APIs e gerenciamento de estado.",
        ],
      },
    },
  },

  // 2)
  {
    id: 2,
    defaultValues: {
      companyName: "Fundação José Silveira (Acelera FJS)",
      location: "Salvador, BA | Híbrido",
      startDate: new Date("2024-08-01"),
      exitDate: new Date("2025-08-01"),
      status: "i",
    },
    translations: {
      en: {
        jobTitle: "Full-Stack Developer",
        employmentType: "Internship",
        children: [
          "Integrated and automated legacy and modern systems, ensuring continuous and reliable communication across critical areas.",
          "Reduced paper usage by 90% and increased operational efficiency by 100%+, with 0% document loss and higher process reliability.",
          "Worked in an agile environment, aligning technical and strategic demands and contributing across front-end and back-end.",
          "Customized internal forms and workflows to optimize processes and accelerate deliveries.",
          "Received recognition from leadership for performance excellence and positive impact on workflow and sustainability.",
        ],
      },
      pt: {
        jobTitle: "Desenvolvedor Full-Stack",
        employmentType: "Estágio",
        children: [
          "Integração e automação de sistemas legados e modernos, assegurando comunicação contínua e confiável entre áreas críticas.",
          "Redução de 90% no uso de papel e aumento de eficiência operacional em +100%, com 0% de extravios e maior confiabilidade.",
          "Atuação em ambiente ágil, alinhando demandas técnicas e estratégicas e contribuindo em front-end e back-end.",
          "Customização de formulários e workflows internos, otimizando processos e acelerando entregas.",
          "Reconhecimento da direção pela excelência e impacto positivo no fluxo de trabalho e sustentabilidade.",
        ],
      },
    },
  },

  // 3)
  {
    id: 3,
    defaultValues: {
      companyName: "InfoJr",
      location: "Salvador, BA | Remoto",
      startDate: new Date("2023-06-01"),
      exitDate: new Date("2024-06-01"),
      status: "i",
    },
    translations: {
      en: {
        jobTitle: "Project Manager | DPROJ",
        employmentType: "Internship",
        children: [
          "Led projects end-to-end, defining timelines, goals and strategic resource allocation.",
          "Managed teams and deliveries, improving alignment with stakeholders and execution standards.",
          "Strengthened communication between teams and stakeholders, improving collaboration and predictability.",
          "Focused on process improvements and continuous follow-up to ensure delivery quality.",
        ],
      },
      pt: {
        jobTitle: "Gerente de Projetos | DPROJ",
        employmentType: "Estágio",
        children: [
          "Liderança de projetos ponta a ponta, com definição de cronogramas, metas e alocação estratégica de recursos.",
          "Gestão de times e entregas, melhorando alinhamento com stakeholders e padrões de execução.",
          "Fortalecimento da comunicação entre times e stakeholders, aumentando colaboração e previsibilidade.",
          "Foco em melhoria de processos e acompanhamento contínuo para garantir qualidade das entregas.",
        ],
      },
    },
  },

  // 4) MAIS ANTIGA (mas ainda ATUAL)
  {
    id: 4,
    defaultValues: {
      companyName: "InfoJr",
      location: "Salvador, BA | Remoto",
      startDate: new Date("2023-05-01"),
      exitDate: new Date(), // não é usado quando status = "a"
      status: "a",
    },
    translations: {
      en: {
        jobTitle: "Full-Stack Developer",
        employmentType: "Internship",
        children: [
          "Developed web and mobile applications with Next.js, React.js, Node.js and PostgreSQL, delivering custom solutions for different sectors.",
          "Optimized performance and user experience (Lighthouse 90+), improving load time and responsiveness.",
          "Implemented automated tests (Jest, Cypress) and CI/CD pipelines with GitHub Actions to improve delivery quality.",
          "Contributed to code reviews and technical standards to keep the codebase consistent and scalable.",
        ],
      },
      pt: {
        jobTitle: "Desenvolvedor Full-Stack",
        employmentType: "Estágio",
        children: [
          "Desenvolvimento de aplicações web e mobile com Next.js, React.js, Node.js e PostgreSQL, entregando soluções sob medida para diferentes setores.",
          "Otimização de performance e experiência do usuário (Lighthouse 90+), melhorando tempo de carregamento e responsividade.",
          "Implantação de testes automatizados (Jest, Cypress) e CI/CD com GitHub Actions para elevar a qualidade das entregas.",
          "Participação em code reviews e padrões técnicos para manter consistência e escalabilidade do projeto.",
        ],
      },
    },
  },
];
