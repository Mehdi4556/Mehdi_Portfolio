'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge } from '@radix-ui/themes';
import { bricolage_grotesque } from '@/utils/fonts';


const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center pb-8'>
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <Badge color="gray" variant="solid" highContrast onClick={loadMoreProjects} className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}>
          <span>Load More</span>
          <span className='!ml-[-3px] mt-[1px]'>
            <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200' />
          </span>
        </Badge>
      )}
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
  {
    logo: '/invoicely.webp',
    title: "Invoicely - Invoice Generator",
    description: "Create professional invoices in seconds no signup or login needed.Just fill your details, preview, and download a clean PDF instantly. Fast, easy, and perfect for freelancers and small businesses",
    techStack: ["React", "MUI", "Tailwind CSS", "Drizzle", "Context API", "Node.js", "Express.js", "Postgres"],
    link: "https://invoicely-niyq.vercel.app/",
    source: "https://github.com/Mehdi4556/Invoicely",
  },
  {
    logo: '/tradelogix.png',
    title: "Tradelogix - Tradeing Journal",
    description: "Built a trading journal and analytics platform using React, Node.js, and PostgreSQL. Implemented image uploads, P/L tracking, and calendar-based filters (daily, weekly, monthly). Designed a dark-theme UI, added trade-insight visualizations, and collaborated with the product team to deliver features based on real trader feedback.",
    techStack: ["Next.js", "TypeScript", "Zustand", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    link: "https://tradelogix-frontend.vercel.app/signup",
    source: "https://github.com/Mehdi4556/Tradelogix",
  },
  {
    logo: '/logo.webp',
    title: "Sens AI",
    description: "Unlock your career potential with an AI-powered career coach! Get personalized guidance on job searches, resume building, interview prep, and skill development. Whether you're starting out or leveling up, AI-driven insights help you achieve your career goals fasterances.",
    techStack: ["React","Shadcn", "TypeScript", "Neon DB", "Gemini", "Redux Toolkit", "Tailwind CSS"],
    link: "https://sens-ai-six.vercel.app/",
    source: "https://github.com/Mehdi4556/Sens-AI",
  },
  {
    logo: "/qr-code.png",
    title: "QR Code Generator",
    description: "Our QR Code Generator allows you to create high-quality, scannable QR codes quickly and effortlessly. Whether you need a QR code for websites, business cards, Wi-Fi access, payments, or promotions, our tool ",
    techStack: ["Next.js", "Typescript", "MongoDB", "NextAuth", "Tailwind CSS", "Shadcn"],
    link: "https://qr-code-generator-six-ashy.vercel.app/",
    source: "https://github.com/Mehdi4556/qr-code-generator",
  },
  {
    logo: "/codify.png",
    title: "Ochi Design",
    description: "Experience a stunning, interactive landing page designed to showcase animation skills using GSAP and ScrollTrigger. With smooth transitions, dynamic effects, and engaging visuals, .",
    techStack: ["Next.js", "GSAP", "ScrollTrigger", "TypeScript", "Tailwind CSS"],
    link: "https://ochi-design-one-gamma.vercel.app/",
    source: "https://github.com/Mehdi4556/ochi",
  },
]