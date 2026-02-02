import { Outfit, Ovo } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Nadeem Mohammed P C | Full Stack Developer"
};

export default async function RootLayout({ children }) {
    const cookieStore = await cookies();
    const themeCookie = cookieStore.get("theme")?.value;
    const theme = themeCookie === "light" ? "light" : "dark";

    return (
        <html lang="en" className={theme === "dark" ? "dark" : ""} suppressHydrationWarning>
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            </body>
        </html>
    );
}