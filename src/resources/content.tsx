import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Eka",
  lastName: "Revandi",
  name: "Eka Revandi", // Fixed noUnusedTemplateLiteral
  role: "Fullstack Software Engineer",
  avatar: "/images/avatar.png", 
  email: "ekarevandii@gmail.com",
  location: "Asia/Jakarta", 
  languages: ["Indonesian", "English"], 
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/caidenrev",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/caidenrev",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Informatics Engineering Student & Fullstack Software Engineer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/project-1",
  },
  subline: (
    <>
      I'm Eka Revandi, a 6th semester Informatics Engineering student transitioning to a <Text as="span" size="xl" weight="strong">Fullstack Software Engineer</Text> role. I build AI powered platforms and highly functional SaaS applications.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, 
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Highly motivated 6th semester Informatics Engineering student transitioning to a Fullstack Software Engineer role. Proven expertise in the React/Next.js ecosystem and integrating Generative AI into highly functional SaaS applications. Successfully engineered and launched multiple AI powered platforms utilizing the Gemini API, Firebase, and Google Cloud to solve complex academic and professional challenges. Strong foundation in system prompting, cloud architecture, and building user centric web applications, complemented by technical community leadership experience.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Fiverr",
        timeframe: "Feb 2026 - Present",
        role: "Freelance Web/Fullstack Developer",
        achievements: [
          "Developed and deployed full-stack web applications for international clients using the React/Next.js and TypeScript ecosystem.",
          "Managed end to end project lifecycles, from requirement gathering and UI/UX wireframing in Figma to final deployment and maintenance.",
        ],
        images: [],
      },
      {
        company: "SaaS AI Ecosystem",
        timeframe: "Mar 2026 - Present",
        role: "Founder & Fullstack Software Engineer",
        achievements: [
          "Architected and deployed a suite of AI powered SaaS web applications (Learniverse, Paper Verse, When Yahhh Kerja) using Next.js and TypeScript, successfully serving 180+ active users with tools focused on academic optimization.",
          "Integrated Generative AI via Gemini API with customized system prompting to transform complex technical language into intuitive analogies, enhancing learning accessibility for non technical users.",
          "Developed \"Paper Verse,\" a high performance document generator capable of producing 170+ pages of cited academic content in minutes, overcoming standard LLM context limitations.",
          "Engineered \"When Yahhh Kerja,\" an AI-powered CV maker supported by senior tech engineers from companies like Astra and Google. It features intelligent role recommendations, ATS keyword injection, real-time PDF exports, and CV drafts.",
        ],
        images: [
          {
            src: "/images/saas-logo-revan/learniverse.png",
            alt: "Learniverse AI",
            width: 16,
            height: 9,
          },
          {
            src: "/images/saas-logo-revan/paper-verse.png",
            alt: "Paper Verse",
            width: 16,
            height: 9,
          },
          {
            src: "/images/saas-logo-revan/when-yahhh-kerja.png",
            alt: "When Yahhh Kerja",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "National Google Student Ambassador Portal",
        timeframe: "Mar - Apr 2026",
        role: "Fullstack Web Developer",
        achievements: [
          "Engineered a dedicated nationwide web portal for Google Student Ambassadors across Indonesia, centralizing member profiles and educational resources for 178+ elite student leaders.",
          "Developed a content driven platform to disseminate AI focused educational materials, fostering a community of practice for students leveraging AI in research and brainstorming.",
        ],
        images: [],
      },
      {
        company: "Amazon Web Services (AWS) Indonesia",
        timeframe: "Aug 2025 - Mar 2026",
        role: "Cloud Architect Intern",
        achievements: [
          "Designed and implemented scalable cloud infrastructure solutions, utilizing core AWS services including EC2, S3, RDS, and DynamoDB.",
          "Collaborated on architecting secure and efficient cloud environments, ensuring high availability for web-based applications.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Universitas Pamulang",
        description: "Bachelor of Informatics Engineering (6th Semester). Relevant Coursework: Data Structures & Algorithms, Software Engineering, Cloud Computing, Web Programming, Database Management, Artificial Intelligence.",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend & UI/UX",
        description: "Next.js, React.js, TypeScript, Tailwind CSS, Shadcn UI, Figma, Wireframing, User Research.",
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" }, 
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
          { name: "Figma", icon: "figma" },
        ],
        images: [],
      },
      {
        title: "Backend & Cloud Architecture",
        description: "AWS (EC2, S3, RDS, DynamoDB), Firebase (BaaS), Google Cloud Platform, RESTful APIs.",
        tags: [
          { name: "AWS", icon: "aws" }, 
          { name: "Firebase", icon: "firebase" },
          { name: "GCP", icon: "googlecloud" },
        ],
        images: [],
      },
      {
        title: "AI & Engineering",
        description: "Generative AI Integration, System Prompt Engineering, SaaS Architecture.",
        tags: [
          { name: "Generative AI", icon: "rocket" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
