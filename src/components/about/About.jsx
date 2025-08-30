import React from 'react'
import ScrollReveal from './TextReveal'
import TextType from './TextTyping'
import { FaCss3, FaFigma, FaGithub, FaHtml5, FaJs, FaLaravel, FaPhp, FaPython, FaReact } from 'react-icons/fa'
import { SiNestjs, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import LogoLoop from './TechLoop'

const techIcons = [
    {
        "node": <FaHtml5 className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <FaCss3 className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <FaPhp className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <FaJs className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <FaReact className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <FaLaravel className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <SiNestjs className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <FaPython className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <SiTailwindcss className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <FaFigma className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <SiPostgresql className='text-gray-400 w-10 h-10' />,
    },
    {
        "node": <FaGithub className='text-gray-400 w-10 h-10' />,
    },
]
export const About = () => {
    return (
        <div className='md:mx-10 mx-5 h-screen flex flex-col justify-center'>
            <div>
                <h1 className='text-4xl font-bold mb-4 mt-20 '>
                    <code className='text-gray-300'>
                        {"> "}
                        <TextType
                            text={["whoami"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </code>
                </h1>
            </div>
            <code>
                <ScrollReveal textClassName='text-justify '>
                    I am an experienced full-stack developer specializing in creating scalable and efficient web applications and software solutions. As an active student at Indraprasta PGRI University, I am continuously enhancing my skills in computer science and emerging technologies. I am adept at addressing challenges that arise during the development process and finding effective solutions. Additionally, I excel in collaborative environments and enjoy engaging in discussions to determine the best approaches for completing each project.
                </ScrollReveal>
            </code>
            <LogoLoop
                logos={techIcons}
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
        </div>
    )
}
