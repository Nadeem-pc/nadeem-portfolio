"use client"
import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaWaveSquare } from "react-icons/fa";
import {
    SiEjs,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiReact,
    SiTailwindcss,
    SiRazorpay,
    SiJavascript,
    SiTypescript,
    SiRedis,
    SiStripe,
    SiSocketdotio,
    SiWebrtc,
    SiAmazons3,
    SiShadcnui,
    SiZod,
    SiJsonwebtokens,
    SiAxios,
} from "react-icons/si";

export default function Projects() {
    const techMetaMap = {
        "JavaScript": { Icon: SiJavascript, color: "#F7DF1E" },
        "EJS": { Icon: SiEjs, color: "#8BC34A" },
        "Bootstrap": { Icon: SiBootstrap, color: "#7952B3" },
        "Node.js": { Icon: SiNodedotjs, color: "#339933" },
        "Express.js": { Icon: SiExpress, color: "#9CA3AF" },
        "MongoDB": { Icon: SiMongodb, color: "#47A248" },
        "Razorpay": { Icon: SiRazorpay, color: "#0C8AFF" },
        "Nodemailer": { Icon: FaCode, color: "#009688" },
        "MVC Architecture": { Icon: FaCode, color: "#9CA3AF" },
        "React": { Icon: SiReact, color: "#61DAFB" },
        "React.js": { Icon: SiReact, color: "#61DAFB" },
        "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
        "TypeScript": { Icon: SiTypescript, color: "#3178C6" },
        "Redis": { Icon: SiRedis, color: "#DC382D" },
        "Stripe": { Icon: SiStripe, color: "#635BFF" },
        "Socket.io": { Icon: SiSocketdotio, color: "#010101" },
        "WebRTC": { Icon: SiWebrtc, color: "#0EA5E9" },
        "AWS S3": { Icon: SiAmazons3, color: "#569A31" },
        "JWT": { Icon: SiJsonwebtokens, color: "#2563EB" },
        "Zod": { Icon: SiZod, color: "#7C3AED" },
        "shadcn/ui": { Icon: SiShadcnui, color: "#0EA5E9" },
        "Repository Pattern": { Icon: FaCode, color: "#9CA3AF" },
        "Framer Motion": { Icon: FaWaveSquare, color: "#0EA5E9" },
        "Axios": { Icon: SiAxios, color: "#5A29E4" },
    };

    const getTechMeta = (tech) => {
        return techMetaMap[tech] || { Icon: FaCode, color: "#9CA3AF" };
    };
    const projects = [
        {
            name: 'Mentora',
            image: '/assets/images/mentora.jpeg',
            image2: '/assets/images/mentora-2.jpeg',
            tagline: 'Mental Health Consulting Platform',
            title: 'Mentora – Mental health consultation platform',
            description:
                'Mentora is a production-ready full-stack mental health consultation platform enabling users to connect with experienced therapists through online consultations, helping reduce social stigma and accessibility barriers. Built with a clean, SOLID-based repository architecture for scalability.',
            features: [
                'JWT-based authentication with OTP & role-based access.',
                'Secure appointment booking with real-time audio/video sessions via WebRTC.',
                'Therapist filtering by expertise, language, & budget.',
                'AI-powered chatbot for therapist recommendations.',
                'Stripe payments with integrated wallet support.',
                'Real-time chat and notifications using Socket.io.',
                'Secure profile and document storage using AWS S3.',
                'Admin dashboard for user, therapist, and platform management.',
                'Therapist dashboard to create schedules, manage appointments, track earnings, & view client reviews.',
            ],
            techStack: ['TypeScript', 'React.js', 'Axios', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Node.js', 'Express.js', 'Zod', 'JWT', 'MongoDB', 'Redis', 'Stripe', 'Socket.io', 'WebRTC', 'AWS S3', 'Nodemailer', 'Repository Pattern'],
            liveUrl: '#',
            sourceUrl: 'https://github.com/Nadeem-pc/mentora-mental-health-platform',
        },
        
        {
            name: 'ServiceLink',
            image: '/assets/images/servicelink.jpeg',
            image2: '/assets/images/servicelink-2.jpeg',
            tagline: 'Local Service Provider Platform',
            title: 'ServiceLink – Local service provider Listing platform',
            description:
            'ServiceLink is a full-stack local service provider listing platform that helps users discover and contact trusted professionals such as electricians and plumbers. It enables users to explore providers based on key details like location, pricing, and reviews. Developed collaboratively as a team using Git-based workflows.',
            features: [
                'Secure JWT authentication with OTP verification and role-based access.',
                'Users can select and directly contact service providers based on service type, location, pricing, ratings, reviews, and experience.',
                'Subscription-based listings where service providers purchase monthly plans for platform visibility.',
                'Stripe-powered recurring subscriptions with plan validation & expiry handling.',
            ],
            techStack: ['TypeScript', 'React.js', 'Axios', 'Tailwind CSS', 'Node.js', 'Express.js', 'Zod', 'JWT', 'MongoDB', 'Redis', 'Stripe', 'Nodemailer', 'Repository Pattern'],
            liveUrl: '#',
            sourceUrl: 'https://github.com/Razirasheed03/servicelink-platform',
        },

        {
            name: 'UrbanDot',
            image: '/assets/images/urbandot.jpeg',
            image2: '/assets/images/urbandot-2.png',
            tagline: 'E-commerce Platform',
            title: 'UrbanDot – Men’s fashion e-commerce platform',
            titleLines: ['UrbanDot – Men’s fashion', 'e-commerce platform'],
            description:
                'UrbanDot is a full-stack men’s fashion e-commerce platform built with a scalable backend architecture, focused on real-world commerce workflows. It emphasizes performance, security, and clean REST APIs, supported by reliable database design and admin tooling.',
            features: [
                'OTP-based authentication with secure user sessions.',
                'Advanced product search, filtering, and wishlist.',
                'Cart, checkout, order lifecycle, and return handling.',
                'Secure Razorpay payments with wallet functionality.',
                'Admin dashboard for managing products, users, orders, and coupons, with integrated sales analytics, inventory management, and downloadable reports.'
            ],
            techStack: ['JavaScript', 'EJS', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Nodemailer', 'MVC Architecture'],
            liveUrl: '#',
            sourceUrl: 'https://github.com/Nadeem-pc/UrbanDot-ecommerce',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (project) => {
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        if (!selectedProject) return;

        const originalHtmlOverflow = document.documentElement.style.overflow;
        const originalBodyOverflow = document.body.style.overflow;

        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';

        return () => {
            document.documentElement.style.overflow = originalHtmlOverflow;
            document.body.style.overflow = originalBodyOverflow;
        };
    }, [selectedProject]);

    return (
        <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">Projects</h2>
            {/* <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Explore a collection of projects that reflect my approach and experience in building real-world web applications.</p> */}

            <div className="grid grid-cols-auto my-14 gap-5 dark:text-black">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden"
                        onClick={() => openProject(project)}
                    >
                        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between h-20 md:h-24 duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{project.name}</h2>
                                <p className="text-sm text-gray-700">{project.tagline}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <FaExternalLinkAlt className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div
                    data-lenis-prevent
                    className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-stretch md:items-center justify-center px-0 py-0 md:px-4 md:py-6 overflow-y-auto"
                    onClick={closeProject}
                >
                    <div
                        className="relative w-full md:max-w-6xl bg-white dark:bg-darkTheme text-black dark:text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] h-dvh md:h-auto md:max-h-[92vh] rounded-none md:rounded-3xl overflow-y-auto touch-pan-y"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeProject}
                            className="absolute right-4 top-4 w-8 h-8 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center bg-white/80 dark:bg-black/40 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                            aria-label="Close project details"
                        >
                            <span className="text-lg leading-none">×</span>
                        </button>

                        <div className="grid md:grid-cols-[1.3fr,1.7fr] gap-6 md:gap-8">
                            <div className="md:border-r md:border-white/10 bg-black/5 dark:bg-white/5 p-5 md:p-6 flex flex-col items-center justify-center gap-4">
                                <img
                                    src={selectedProject.image2}
                                    alt={selectedProject.name}
                                    className="rounded-2xl w-full max-h-80 object-cover"
                                />

                                <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                                    {/* {selectedProject.liveUrl && (
                                        <a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white text-xs md:text-sm shadow-[0_0_18px_rgba(186,64,229,0.6)] hover:brightness-110 transition"
                                        >
                                            <FaExternalLinkAlt className="w-4 h-4" />
                                            <span>View Live</span>
                                        </a>
                                    )} */}
                                    {selectedProject.sourceUrl && (
                                        <a
                                            href={selectedProject.sourceUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs md:text-sm
                                            border-gray-300 bg-white text-gray-700 hover:bg-slate-100/80
                                            dark:border-white/40 dark:bg-transparent dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white
                                            transition"
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            <span>Source Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="p-5 md:p-7 space-y-4">
                                <div className="space-y-1">
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">
                                        {selectedProject.name === 'ServiceLink'
                                            ? 'Collaborative Project'
                                            : 'Featured project'}
                                    </h3>
                                    <h2 className="text-2xl md:text-3xl font-Ovo">
                                        {selectedProject.titleLines
                                            ? selectedProject.titleLines.map((line, idx) => (
                                                <span key={idx}>
                                                    {line}
                                                    {idx < selectedProject.titleLines.length - 1 && <br />}
                                                </span>
                                            ))
                                            : selectedProject.title}
                                    </h2>
                                </div>

                                <p className="text-sm md:text-base text-gray-700 dark:text-white/70">
                                    {selectedProject.description}
                                </p>

                                <ul className="list-disc list-outside pl-5 text-sm md:text-base space-y-1 text-gray-700 dark:text-white/80">
                                    {selectedProject.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="pt-2">
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech) => {
                                            const { Icon, color } = getTechMeta(tech);
                                            const isShadcn = tech === "shadcn/ui";
                                            const isSocket = tech === "Socket.io";

                                            return (
                                                <span
                                                    key={tech}
                                                    className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-white/25 bg-white/70 dark:bg-transparent"
                                                >
                                                    <Icon
                                                        className={`w-3.5 h-3.5${isShadcn || isSocket ? " text-black dark:text-white" : ""}`}
                                                        style={isShadcn || isSocket ? undefined : { color }}
                                                    />
                                                    <span>{tech}</span>
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}