import React, { useMemo } from "react";
import ScrollReveal from "./TextReveal";
import TextType from "./TextTyping";
import LogoLoop from "./TechLoop";

import {
    FaCss3,
    FaFigma,
    FaGithub,
    FaGitlab,
    FaHtml5,
    FaJs,
    FaLaravel,
    FaPhp,
    FaPython,
    FaReact,
} from "react-icons/fa";
import { SiFastapi, SiNestjs, SiPostgresql, SiSupabase, SiTailwindcss } from "react-icons/si";

const ICON_CLASS = "text-gray-400 w-10 h-10";

const TECH_ICONS = [
    { key: "html", Icon: FaHtml5 },
    { key: "css", Icon: FaCss3 },
    { key: "php", Icon: FaPhp },
    { key: "js", Icon: FaJs },
    { key: "react", Icon: FaReact },
    { key: "laravel", Icon: FaLaravel },
    { key: "nestjs", Icon: SiNestjs },
    { key: "python", Icon: FaPython },
    { key: "fastapi", Icon: SiFastapi },
    { key: "tailwind", Icon: SiTailwindcss },
    { key: "figma", Icon: FaFigma },
    { key: "postgresql", Icon: SiPostgresql },
    { key: "supabase", Icon: SiSupabase },
    { key: "github", Icon: FaGithub },
    { key: "gitlab", Icon: FaGitlab },
];

export const About = () => {
    const techLogos = useMemo(
        () =>
            // eslint-disable-next-line no-unused-vars
            TECH_ICONS.map(({ key, Icon }) => ({
                key,
                node: <Icon className={ICON_CLASS} aria-label={key} />,
            })),
        []
    );

    return (
        <section className="md:mx-10 mx-5 min-h-screen flex flex-col justify-center">
            <header className="mt-20 mb-4">
                <h1 className="text-4xl font-bold">
                    <code className="text-gray-300">
                        {"> "}
                        <TextType
                            text={["whoami"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor
                            cursorCharacter="|"
                        />
                    </code>
                </h1>
            </header>

            <code>
                <ScrollReveal textClassName="text-justify">
                    I am an experienced full-stack developer specializing in creating
                    scalable and efficient web applications and software solutions. As an
                    active student at Indraprasta PGRI University, I am continuously
                    enhancing my skills in computer science and emerging technologies. I
                    am adept at addressing challenges that arise during the development
                    process and finding effective solutions. Additionally, I excel in
                    collaborative environments and enjoy engaging in discussions to
                    determine the best approaches for completing each project.
                </ScrollReveal>
            </code>

            <LogoLoop
                logos={techLogos}
                speed={50}
                direction="left"
                logoHeight={48}
                gap={100}
                pauseOnHover
                scaleOnHover
                fadeOut
                className="text-white"
                ariaLabel="Technology partners"
            />
        </section>
    );
};
