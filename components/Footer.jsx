import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
    return (
        <div className="mt-20 border-t border-gray-400/60">
            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                <div className="text-center sm:text-left space-y-3">
                    <a href="#top">
                        <img src="/assets/logos/logo.png" alt="Logo" className="w-32 mx-auto sm:mx-0 mb-1 dark:hidden" />
                        <img src="/assets/logos/logo_dark.png" alt="Logo" className="w-32 mx-auto sm:mx-0 mb-1 hidden dark:block" />
                    </a>

                    <div className="flex items-center justify-center sm:justify-start gap-2 text-sm">
                        <img src="/assets/icons/mail_icon.png" alt="" className="w-4 dark:hidden" />
                        <img src="/assets/icons/mail_icon_dark.png" alt="" className="w-4 hidden dark:block" />
                        <a href="mailto:nadeempc777@gmail.com" className="hover:underline">
                            nadeempc777@gmail.com
                        </a>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-white/60">
                        © {new Date().getFullYear()} Nadeem Mohammed P C • All rights reserved.
                    </p>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/60">
                        Connect
                    </span>
                    <ul className="flex items-center gap-4">
                        <li>
                            <a
                                href="https://github.com/Nadeem-pc" 
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="w-9 h-9 rounded-full border border-gray-300 dark:border-white/30 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-darkHover transition"
                            >
                                <FaGithub className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/nadeempc/" 
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="w-9 h-9 rounded-full border border-gray-300 dark:border-white/30 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-darkHover transition"
                            >
                                <FaLinkedin className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://leetcode.com/u/NadeemMohammed" 
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LeetCode"
                                className="w-9 h-9 rounded-full border border-gray-300 dark:border-white/30 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-darkHover transition"
                            >
                                <SiLeetcode className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/nadeeempc" 
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X (Twitter)"
                                className="w-9 h-9 rounded-full border border-gray-300 dark:border-white/30 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-darkHover transition"
                            >
                                <FaXTwitter className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/i.nadeeem" 
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-full border border-gray-300 dark:border-white/30 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-darkHover transition"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}