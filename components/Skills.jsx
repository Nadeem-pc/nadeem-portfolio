"use client";

import { 
    SiJavascript, 
    SiFirebase, 
    SiMongodb, 
    SiFigma, 
    SiGit, 
    SiReact, 
    SiRedux, 
    SiHtml5, 
    SiCss3, 
    SiTailwindcss, 
    SiPostgresql, 
    SiExpress, 
    SiNodedotjs, 
    SiBootstrap, 
    SiTypescript, 
    SiCloudinary, 
    SiNginx, 
    SiSocketdotio, 
    SiGithub, 
    SiPostman, 
    SiVercel,
    SiNextdotjs,
    SiRedis,
    SiStripe,
    SiDocker,
    SiRender,
    SiShadcnui,
    SiJsonwebtokens,
    SiRazorpay,
    SiWebrtc,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

export default function skills() {
    const skills = [
        // ===== Core Languages =====
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },

        // ===== Frontend =====
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "React.js", icon: SiReact, color: "text-blue-400" },
        { name: "Redux", icon: SiRedux, color: "text-purple-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        // { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
        { name: "shadcn/ui", icon: SiShadcnui, color: "text-black dark:text-white" },

        // ===== Backend =====
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "JWT", icon: SiJsonwebtokens, color: "text-blue-600" }, 
        { name: "Socket.IO", icon: SiSocketdotio, color: "text-foreground" },
        { name: "WebRTC", icon: SiWebrtc, color: "text-sky-500" },

        // ===== Databases =====
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "Redis", icon: SiRedis, color: "text-red-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },

        // ===== Cloud & DevOps =====
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        // { name: "Docker", icon: SiDocker, color: "text-sky-400" },
        { name: "Nginx", icon: SiNginx, color: "text-green-500" },

        // ===== Deployment & Platforms =====
        { name: "Vercel", icon: SiVercel, color: "text-foreground" },
        { name: "Render", icon: SiRender, color: "text-foreground" },

        // ===== Integrations =====
        { name: "Stripe", icon: SiStripe, color: "text-indigo-500" },
        { name: "Razorpay", icon: SiRazorpay, color: "text-blue-500" },
        { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-400" },

        // ===== Tools & Workflow =====
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        // { name: "GitHub", icon: SiGithub, color: "text-foreground" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
        // { name: "VS Code", icon: DiVisualstudio, color: "text-blue-500" },
        { name: "Figma", icon: SiFigma, color: "text-pink-500" },
    ];

    return (
        <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">Skills</h2>

            <div className="grid grid-cols-auto gap-6 my-16">

                <ul className="grid grid-cols-4 gap-3 px-2 justify-items-stretch sm:grid-cols-none sm:px-0 sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-6">
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        const isPostman = skill.name === "Postman";
                        return (
                            <li
                                key={skill.name}
                                className={`flex flex-col items-center justify-center w-full h-20 sm:w-24 sm:h-24 border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 gap-2 px-1${isPostman ? " lg:hidden" : ""}`}
                            >
                                <Icon
                                    className={`w-5 h-5 sm:w-7 sm:h-7 ${skill.color ?? ""}`}
                                    aria-label={skill.name}
                                />
                                <span className="text-[10.5px] sm:text-xs leading-tight text-gray-500 dark:text-white/70 text-center">
                                    {skill.name}
                                </span>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </div>
    )
}
