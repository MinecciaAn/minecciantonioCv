import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

type Lang = 'it' | 'en';
type Theme = 'light' | 'dark';

interface ProjectItem {
  name: string;
  client?: string;
  period: string;
  activity: string;
  description?: string;
  tech: string[];
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  website?: string;
  techs?: string[];
  description?: string;
  highlights?: string[];
  projects?: ProjectItem[];
}

interface EducationItem {
  title: string;
  institution: string;
  period: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  detail?: string;
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface VolunteerItem {
  role: string;
  organization: string;
  period: string;
  focus: string;
}

interface SiteContent {
  role: string;
  location: string;
  heroEyebrow: string;
  about: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  volunteer: VolunteerItem;
  skills: SkillGroup[];
}

interface UiStrings {
  nav: {
    about: string;
    experience: string;
    education: string;
    certifications: string;
    volunteer: string;
    skills: string;
    contact: string;
  };
  sectionTitles: {
    about: string;
    experience: string;
    education: string;
    certifications: string;
    volunteer: string;
    skills: string;
    contact: string;
  };
  ctaContact: string;
  ctaLinkedin: string;
  footerText: string;
  footerLinkedin: string;
  photoAlt: string;
  langToggleLabel: string;
  themeToggleLabelToDark: string;
  themeToggleLabelToLight: string;
  clientLabel: string;
}

interface TechMeta {
  abbr: string;
  bg: string;
  fg: string;
}

const TECH_ICONS: Record<string, TechMeta> = {
  angular: { abbr: 'ng', bg: '#dd0031', fg: '#ffffff' },
  'angular material': { abbr: 'M', bg: '#dd0031', fg: '#ffffff' },
  angularjs: { abbr: 'ng1', bg: '#b52e31', fg: '#ffffff' },
  typescript: { abbr: 'TS', bg: '#3178c6', fg: '#ffffff' },
  javascript: { abbr: 'JS', bg: '#f7df1e', fg: '#1c2430' },
  html5: { abbr: '5', bg: '#cc4722', fg: '#ffffff' },
  css3: { abbr: '3', bg: '#1572b6', fg: '#ffffff' },
  bootstrap: { abbr: 'B', bg: '#7952b3', fg: '#ffffff' },
  rxjs: { abbr: 'Rx', bg: '#b7178c', fg: '#ffffff' },
  react: { abbr: 'R', bg: '#20232a', fg: '#61dafb' },
  git: { abbr: 'Git', bg: '#ce452b', fg: '#ffffff' },
  bitbucket: { abbr: 'Bit', bg: '#0052cc', fg: '#ffffff' },
  sonarqube: { abbr: 'SQ', bg: '#3d79a0', fg: '#ffffff' },
  docker: { abbr: 'Dk', bg: '#1d78be', fg: '#ffffff' },
  jira: { abbr: 'Jira', bg: '#0052cc', fg: '#ffffff' },
  jasmine: { abbr: 'Jas', bg: '#8a4182', fg: '#ffffff' },
  karma: { abbr: 'Ka', bg: '#57c4a9', fg: '#1c2430' },
  postgresql: { abbr: 'PG', bg: '#336791', fg: '#ffffff' },
  php: { abbr: 'PHP', bg: '#6d71a6', fg: '#ffffff' },
  laravel: { abbr: 'Lv', bg: '#e0281c', fg: '#ffffff' },
  'azure/cloud computing': { abbr: 'Az', bg: '#0079bc', fg: '#ffffff' },
  genai: { abbr: 'AI', bg: '#0cd6e4', fg: '#0a2240' },
  splunk: { abbr: 'Spl', bg: '#000000', fg: '#ff6f00' },
  'wcag 2.1': { abbr: 'A11y', bg: '#627296', fg: '#ffffff' },
  'responsive design': { abbr: 'RWD', bg: '#627296', fg: '#ffffff' },
  'threat intelligence': { abbr: 'TI', bg: '#b00020', fg: '#ffffff' },
  'vulnerability assessment': { abbr: 'VA', bg: '#b00020', fg: '#ffffff' },
  'penetration testing': { abbr: 'PT', bg: '#b00020', fg: '#ffffff' },
  'incident response': { abbr: 'IR', bg: '#b00020', fg: '#ffffff' }
};

function techMeta(name: string): TechMeta {
  const key = name.trim().toLowerCase();
  return TECH_ICONS[key] ?? { abbr: name.slice(0, 3).toUpperCase(), bg: '#627296', fg: '#ffffff' };
}

const CONTENT: Record<Lang, SiteContent> = {
  it: {
    role: 'Software Developer Engineer specializzato in front-end',
    location: 'Noicattaro, Puglia, Italia',
    heroEyebrow: 'Ciao, sono',
    about: [
      'Sono un Software Developer Engineer specializzato in front-end, con una traiettoria professionale costruita con scelte precise: dalla formazione tecnica informatica alla specializzazione in sviluppo software, passando per un bootcamp Full Stack presso Aulab fino al ruolo attuale in NTT Data.',
      'Lavorare quotidianamente con Angular mi ha dato una solida base sul mondo frontend: architettura dei componenti, gestione dello stato, performance. Di recente ho iniziato ad approfondire React, che sto integrando attivamente nel mio percorso di crescita.',
      "Non mi fermo al lavoro: sono laureato in Informatica per le Aziende Digitali e attualmente frequento la laurea magistrale in Ingegneria Informatica al Politecnico di Bari, con specializzazione in Cybersecurity e Cloud. Un percorso che non è solo accademico, ma la direzione in cui voglio portare la mia carriera.",
      'Sono convinto che un buon developer non smetta mai di costruire, sia in produzione che su se stesso.'
    ],
    experience: [
      {
        role: 'Advanced Developer Engineer',
        company: 'NTT DATA Italia',
        period: 'nov 2022 - Presente (3 anni 10 mesi)',
        location: 'Bari, Puglia, Italia · Da remoto',
        techs: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap'],
        projects: [
          {
            name: 'SIBILLA',
            client: 'ENEL',
            period: 'set 2025 – Presente',
            activity:
              'Realizzazione di funzionalità per la gestione di scenari e simulazioni: inserimento, monitoraggio e cancellazione dei dati attraverso interfacce dedicate. Analisi e risoluzione di errori e warning di codice per garantire stabilità e deploy corretto delle funzionalità rilasciate.',
            description:
              'Modulo applicativo per la gestione di scenari e simulazioni, strutturato su sezioni collegate, progettato per supportare i processi operativi con interfacce intuitive e funzionalità integrate.',
            tech: ['Angular', 'Angular Material', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Bitbucket', 'SonarQube', 'Docker']
          },
          {
            name: 'Worked Hours',
            client: 'ENEL',
            period: 'ott 2024 – Presente',
            activity:
              "Sviluppo e manutenzione delle interfacce front-end con Angular. Adattamento dell'accessibilità secondo gli standard WCAG. Collaborazione con il team back-end per debug e test funzionali sulle API. Partecipazione a code review, gestione del codice con Git, refactoring e ottimizzazione del prodotto. Gestione delle attività di AMS (Application Management Services) tramite presa in carico di ticket dal cliente per la risoluzione di bug e altre segnalazioni riscontrate in produzione.",
            description:
              "Sviluppo di interfacce utente per l'applicativo Worked Hours di Enel, in linea con i requisiti funzionali e di design del cliente.",
            tech: ['Angular', 'Bootstrap', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'Bitbucket', 'SonarQube', 'Docker']
          },
          {
            name: 'Dojo',
            client: 'ENEL',
            period: 'lug 2025 – set 2025',
            activity:
              'Sviluppo e manutenzione delle interfacce front-end con Angular. Implementazione di funzionalità differenziate per tipologia di utenza autenticata, garantendo coerenza nei permessi e nei flussi operativi.',
            description:
              'Applicativo per la gestione delle working report list con funzionalità di creazione, consultazione, modifica e monitoraggio tramite pannello admin, con profilazione utente e permessi differenziati.',
            tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
          },
          {
            name: 'CRED',
            client: 'ENEL',
            period: 'mag 2025 – giu 2025',
            activity:
              'Sviluppo delle interfacce front-end con Angular. Debugging, test funzionali, ottimizzazione delle performance e versionamento con Git.',
            description: 'Applicazione per Enel Energia dedicata alla gestione e verifica dei trade e dei deal energetici.',
            tech: ['Angular', 'TypeScript', 'Git', 'Jira']
          },
          {
            name: 'Evolutive EDWH',
            client: 'Poste Italiane SpA',
            period: 'ago 2024 – ott 2024',
            activity: 'Risoluzione di segnalazioni di sicurezza e aumento della code coverage tramite la creazione di unit test.',
            description:
              'Analisi di nuove esigenze degli utenti, progettazione della soluzione tecnica e implementazione dei requisiti per incrementare il patrimonio informativo disponibile per analisi libere e istituzionali.',
            tech: ['Angular', 'Jasmine', 'Karma', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
          },
          {
            name: 'Sportello Virtuale Unico',
            client: 'Hermes / Comune di Reggio Calabria',
            period: 'mar 2024 – ago 2024',
            activity:
              "Implementazione di nuovi servizi per l'inserimento, la modifica e la creazione di certificati digitali. Adattamento e conversione di sezioni dell'applicativo in linea con l'interfaccia esistente.",
            description:
              "Architettura informatica per i servizi digitali al cittadino del Comune di Reggio Calabria (Angular front-end, WSO2 middleware, stack ELK per Legal Trace), nell'ambito del progetto PON Metro.",
            tech: ['Angular', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'SonarQube']
          },
          {
            name: 'DPP',
            client: 'ENEL',
            period: 'gen 2023 – feb 2024',
            activity:
              "Sviluppo di interfacce grafiche secondo le indicazioni del cliente. Implementazione di logiche funzionali per la corretta esecuzione dell'applicativo tramite programmazione reattiva con RxJS.",
            tech: ['Angular', 'RxJS', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
          }
        ]
      },
      {
        role: 'Docente/Tutor — Corso Angular',
        company: 'ITS Academy Apulia Digital',
        website: 'https://www.apuliadigital.it/',
        period: 'Ultimi 2 anni – Presente',
        location: 'Puglia, Italia',
        description:
          "Attività di docenza e tutoraggio Angular per gli studenti dei corsi ITS nell'area Tecnologie dell'Informazione, Comunicazione e Dati, affiancando la formazione tecnica con esempi pratici tratti dall'esperienza professionale in produzione.",
        techs: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
      },
      {
        role: 'Junior Solution Developer',
        company: 'Engineering Ingegneria Informatica Spa',
        period: 'mar 2021 - nov 2022 (1 anno 9 mesi)',
        location: 'Bitritto, Puglia, Italia',
        techs: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap', 'Git'],
        description:
          "Sviluppo e manutenzione di applicazioni web con Angular; collaborazione con team multidisciplinari per la progettazione e l'implementazione di soluzioni software. Analisi dei requisiti funzionali e tecnici, partecipazione a code review e attività di testing. Nello stesso periodo: Master Java (gen 2021 - mar 2021, 3 mesi)."
      },
      {
        role: 'Full Stack Developer, 18ª Edizione Aulab Hackademy',
        company: 'Aulab',
        period: 'set 2020 - nov 2020 (3 mesi)',
        location: 'Bari',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'Laravel', 'Git'],
        highlights: [
          'Apprendimento e utilizzo dei linguaggi HTML, CSS e JavaScript per la parte front-end.',
          'Apprendimento ed utilizzo del framework Bootstrap per velocizzare la realizzazione strutturale.',
          'Apprendimento ed utilizzo del linguaggio PHP e implementazione del framework Laravel lato back-end.',
          "Creazione e gestione dei dati all'interno del database e utilizzo di una Unix shell.",
          "Utilizzo di GIT come sistema di versionamento del codice e utilizzo dei tool Trello e Slack per l'organizzazione del lavoro."
        ]
      },
      {
        role: 'Tecnico informatico',
        company: 'Exasys S.r.l.',
        period: 'set 2018 - set 2020 (2 anni 1 mese)',
        location: 'Italia'
      },
      {
        role: 'Software Engineer — Stage',
        company: 'SerLab',
        period: 'ott 2014 - mar 2015 (6 mesi)',
        location: 'Bari'
      }
    ],
    education: [
      {
        title: 'Laurea Magistrale in Ingegneria Informatica – Cybersecurity and Cloud',
        institution: 'Politecnico di Bari',
        period: 'gen 2025 – presente'
      },
      {
        title: 'Master in Cybersecurity',
        institution: 'Il Sole 24 Ore Business School',
        period: 'set 2025 – apr 2026'
      },
      {
        title: 'Laurea Triennale in Informatica per le Aziende Digitali',
        institution: 'Università Telematica Pegaso',
        period: '2024'
      },
      {
        title: 'Diploma di Perito Informatico',
        institution: 'IISS G. Marconi – Istituto Tecnico Industriale',
        period: ''
      }
    ],
    certifications: [
      {
        name: 'Cybersecurity',
        issuer: 'Sole 24 ORE Formazione',
        detail: 'Rilasciata apr 2026 — ID credenziale: 19534733'
      },
      {
        name: 'GenAI White Belt Journey',
        issuer: 'Skillsoft/Percipio'
      },
      {
        name: 'Advanced React Course',
        issuer: 'NTT DATA Italia Human Academy'
      }
    ],
    volunteer: {
      role: 'Volontario',
      organization: 'Servizio Civile Nazionale',
      period: 'set 2017 - set 2018 (1 anno 1 mese)',
      focus: "Bambini (progetti dedicati all'infanzia)"
    },
    skills: [
      {
        category: 'Frontend',
        items: ['Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'RxJS', 'React', 'Responsive Design']
      },
      { category: 'DevOps & Tools', items: ['Git', 'Bitbucket', 'Docker', 'SonarQube', 'Jasmine', 'Karma', 'Jira'] },
      { category: 'Database', items: ['PostgreSQL'] },
      { category: 'Accessibilità', items: ['WCAG 2.1'] },
      {
        category: 'Cybersecurity',
        items: ['Threat Intelligence', 'Vulnerability Assessment', 'Penetration Testing', 'Incident Response', 'Splunk', 'GenAI']
      },
      { category: 'Altre competenze (bootcamp)', items: ['PHP', 'Laravel'] }
    ]
  },
  en: {
    role: 'Front-End Software Development Engineer',
    location: 'Noicattaro, Puglia, Italy',
    heroEyebrow: "Hi, I'm",
    about: [
      "I'm a Software Development Engineer specialized in front-end, with a career built on deliberate choices: from technical IT training to a specialization in software development, through a Full Stack bootcamp at Aulab, up to my current role at NTT Data.",
      'Working with Angular every day gave me a solid foundation in front-end development: component architecture, state management, performance. I recently started exploring React, which I am actively integrating into my growth path.',
      "I don't stop at work: I hold a degree in Computer Science for Digital Businesses and I am currently attending the Master's Degree in Computer Engineering at Politecnico di Bari, specializing in Cybersecurity and Cloud. A path that isn't only academic, but the direction I want to take my career.",
      "I believe a good developer never stops building — in production, and in themselves."
    ],
    experience: [
      {
        role: 'Advanced Developer Engineer',
        company: 'NTT DATA Italia',
        period: 'Nov 2022 - Present (3 years 10 months)',
        location: 'Bari, Puglia, Italy · Remote',
        techs: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap'],
        projects: [
          {
            name: 'SIBILLA',
            client: 'ENEL',
            period: 'Sep 2025 – Present',
            activity:
              'Built features for managing scenarios and simulations: data entry, monitoring and deletion through dedicated interfaces. Analyzed and resolved code errors and warnings to ensure stability and correct deployment of released features.',
            description:
              'Application module for managing scenarios and simulations, structured across linked sections, designed to support operational processes with intuitive interfaces and integrated functionality.',
            tech: ['Angular', 'Angular Material', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Bitbucket', 'SonarQube', 'Docker']
          },
          {
            name: 'Worked Hours',
            client: 'ENEL',
            period: 'Oct 2024 – Present',
            activity:
              "Developed and maintained front-end interfaces with Angular. Adapted accessibility to WCAG standards. Collaborated with the back-end team on debugging and functional API testing. Participated in code reviews, Git-based version control, refactoring and product optimization. Handled AMS (Application Management Services) activities by taking ownership of client tickets to resolve production bugs and other reported issues.",
            description:
              "Developed user interfaces for Enel's Worked Hours application, in line with the client's functional and design requirements.",
            tech: ['Angular', 'Bootstrap', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'Bitbucket', 'SonarQube', 'Docker']
          },
          {
            name: 'Dojo',
            client: 'ENEL',
            period: 'Jul 2025 – Sep 2025',
            activity:
              'Developed and maintained front-end interfaces with Angular. Implemented differentiated features based on authenticated user type, ensuring consistency in permissions and operational flows.',
            description:
              'Application for managing working report lists, with creation, consultation, editing and monitoring features through an admin panel, with user profiling and differentiated permissions.',
            tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
          },
          {
            name: 'CRED',
            client: 'ENEL',
            period: 'May 2025 – Jun 2025',
            activity: 'Developed front-end interfaces with Angular. Debugging, functional testing, performance optimization and version control with Git.',
            description: 'Application for Enel Energia dedicated to managing and verifying energy trades and deals.',
            tech: ['Angular', 'TypeScript', 'Git', 'Jira']
          },
          {
            name: 'Evolutive EDWH',
            client: 'Poste Italiane SpA',
            period: 'Aug 2024 – Oct 2024',
            activity: 'Resolved security findings and increased code coverage by writing unit tests.',
            description:
              'Analyzed new user requirements, designed the technical solution and implemented requirements to expand the information asset base available for open and institutional analysis.',
            tech: ['Angular', 'Jasmine', 'Karma', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
          },
          {
            name: 'Sportello Virtuale Unico',
            client: 'Hermes / Municipality of Reggio Calabria',
            period: 'Mar 2024 – Aug 2024',
            activity:
              'Implemented new services for entering, editing and issuing digital certificates. Adapted and converted application sections to align with the existing interface.',
            description:
              'IT architecture for digital citizen services for the Municipality of Reggio Calabria (Angular front-end, WSO2 middleware, ELK stack for Legal Trace), as part of the PON Metro project.',
            tech: ['Angular', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'SonarQube']
          },
          {
            name: 'DPP',
            client: 'ENEL',
            period: 'Jan 2023 – Feb 2024',
            activity:
              'Developed UI screens according to client specifications. Implemented functional logic for correct application behavior using reactive programming with RxJS.',
            tech: ['Angular', 'RxJS', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
          }
        ]
      },
      {
        role: 'Angular Instructor / Tutor',
        company: 'ITS Academy Apulia Digital',
        website: 'https://www.apuliadigital.it/',
        period: 'Last 2 years – Present',
        location: 'Puglia, Italy',
        description:
          'Teaching and mentoring Angular to ITS students in the Information Technology, Communication and Data track, pairing technical training with practical examples drawn from real production experience.',
        techs: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
      },
      {
        role: 'Junior Solution Developer',
        company: 'Engineering Ingegneria Informatica Spa',
        period: 'Mar 2021 - Nov 2022 (1 year 9 months)',
        location: 'Bitritto, Puglia, Italy',
        techs: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap', 'Git'],
        description:
          "Developed and maintained web applications with Angular; collaborated with multidisciplinary teams on the design and implementation of software solutions. Analyzed functional and technical requirements, participated in code reviews and testing. During the same period: Java Master's program (Jan 2021 - Mar 2021, 3 months)."
      },
      {
        role: 'Full Stack Developer, 18th Edition Aulab Hackademy',
        company: 'Aulab',
        period: 'Sep 2020 - Nov 2020 (3 months)',
        location: 'Bari',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'Laravel', 'Git'],
        highlights: [
          'Learned and used HTML, CSS and JavaScript for the front-end.',
          'Learned and used the Bootstrap framework to speed up structural development.',
          'Learned and used PHP and implemented the Laravel framework on the back-end.',
          'Created and managed data within the database, and used a Unix shell.',
          'Used GIT for source control, and Trello and Slack for work organization.'
        ]
      },
      {
        role: 'IT Technician',
        company: 'Exasys S.r.l.',
        period: 'Sep 2018 - Sep 2020 (2 years 1 month)',
        location: 'Italy'
      },
      {
        role: 'Software Engineer — Internship',
        company: 'SerLab',
        period: 'Oct 2014 - Mar 2015 (6 months)',
        location: 'Bari'
      }
    ],
    education: [
      {
        title: "Master's Degree in Computer Engineering – Cybersecurity and Cloud",
        institution: 'Politecnico di Bari',
        period: 'Jan 2025 – present'
      },
      {
        title: 'Master in Cybersecurity',
        institution: 'Il Sole 24 Ore Business School',
        period: 'Sep 2025 – Apr 2026'
      },
      {
        title: "Bachelor's Degree in Computer Science for Digital Businesses",
        institution: 'Pegaso Online University',
        period: '2024'
      },
      {
        title: 'IT Technician Diploma',
        institution: 'IISS G. Marconi – Technical Industrial Institute',
        period: ''
      }
    ],
    certifications: [
      {
        name: 'Cybersecurity',
        issuer: 'Sole 24 ORE Formazione',
        detail: 'Issued Apr 2026 — Credential ID: 19534733'
      },
      {
        name: 'GenAI White Belt Journey',
        issuer: 'Skillsoft/Percipio'
      },
      {
        name: 'Advanced React Course',
        issuer: 'NTT DATA Italia Human Academy'
      }
    ],
    volunteer: {
      role: 'Volunteer',
      organization: 'Servizio Civile Nazionale (National Civil Service)',
      period: 'Sep 2017 - Sep 2018 (1 year 1 month)',
      focus: 'Children (programs dedicated to childhood)'
    },
    skills: [
      {
        category: 'Frontend',
        items: ['Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'RxJS', 'React', 'Responsive Design']
      },
      { category: 'DevOps & Tools', items: ['Git', 'Bitbucket', 'Docker', 'SonarQube', 'Jasmine', 'Karma', 'Jira'] },
      { category: 'Database', items: ['PostgreSQL'] },
      { category: 'Accessibility', items: ['WCAG 2.1'] },
      {
        category: 'Cybersecurity',
        items: ['Threat Intelligence', 'Vulnerability Assessment', 'Penetration Testing', 'Incident Response', 'Splunk', 'GenAI']
      },
      { category: 'Additional skills (bootcamp)', items: ['PHP', 'Laravel'] }
    ]
  }
};

const UI: Record<Lang, UiStrings> = {
  it: {
    nav: {
      about: 'Chi sono',
      experience: 'Esperienza',
      education: 'Formazione',
      certifications: 'Certificazioni',
      volunteer: 'Volontariato',
      skills: 'Competenze',
      contact: 'Contatti'
    },
    sectionTitles: {
      about: 'Chi sono',
      experience: 'Esperienza',
      education: 'Formazione',
      certifications: 'Licenze e certificazioni',
      volunteer: 'Volontariato',
      skills: 'Competenze',
      contact: 'Contatti'
    },
    ctaContact: 'Contattami',
    ctaLinkedin: 'LinkedIn',
    footerText: 'Il modo migliore per contattarmi è tramite LinkedIn.',
    footerLinkedin: 'Visita il mio profilo LinkedIn',
    photoAlt: 'Foto di Antonio Mineccia',
    langToggleLabel: 'Cambia lingua',
    themeToggleLabelToDark: 'Attiva tema scuro',
    themeToggleLabelToLight: 'Attiva tema chiaro',
    clientLabel: 'Cliente'
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      volunteer: 'Volunteering',
      skills: 'Skills',
      contact: 'Contact'
    },
    sectionTitles: {
      about: 'About me',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Licenses & certifications',
      volunteer: 'Volunteering',
      skills: 'Skills',
      contact: 'Contact'
    },
    ctaContact: 'Contact me',
    ctaLinkedin: 'LinkedIn',
    footerText: 'The best way to reach me is via LinkedIn.',
    footerLinkedin: 'Visit my LinkedIn profile',
    photoAlt: 'Photo of Antonio Mineccia',
    langToggleLabel: 'Change language',
    themeToggleLabelToDark: 'Enable dark theme',
    themeToggleLabelToLight: 'Enable light theme',
    clientLabel: 'Client'
  }
};

const LANG_STORAGE_KEY = 'cv-lang';
const THEME_STORAGE_KEY = 'cv-theme';
const NIGHT_START_HOUR = 19;
const NIGHT_END_HOUR = 7;

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatToolbarModule, MatCardModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '[attr.data-theme]': 'theme'
  }
})
export class App {
  protected readonly fullName = 'Antonio Mineccia';
  protected readonly linkedin = 'https://www.linkedin.com/in/antonio-mineccia-04ba58147';
  protected readonly currentYear = new Date().getFullYear();

  protected lang: Lang;
  protected theme: Theme;
  protected mobileMenuOpen = false;

  constructor() {
    this.lang = this.resolveInitialLang();
    this.theme = this.resolveInitialTheme();
  }

  protected get c(): SiteContent {
    return CONTENT[this.lang];
  }

  protected get t(): UiStrings {
    return UI[this.lang];
  }

  protected setLang(lang: Lang): void {
    this.lang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }

  protected toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_STORAGE_KEY, this.theme);
  }

  protected toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  protected closeMenu(): void {
    this.mobileMenuOpen = false;
  }

  protected techMeta(name: string): TechMeta {
    return techMeta(name);
  }

  private resolveInitialLang(): Lang {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'it' || saved === 'en') {
      return saved;
    }
    return navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en';
  }

  private resolveInitialTheme(): Theme {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    const hour = new Date().getHours();
    return hour >= NIGHT_START_HOUR || hour < NIGHT_END_HOUR ? 'dark' : 'light';
  }
}
