import React from 'react'
import { CardProject } from './CardProject'
import stiqr from '../../assets/projects/stiqr.png'
import idsc from '../../assets/projects/idsc.png'
import mag from '../../assets/projects/mag.png'
import ws from '../../assets/projects/ws.png'
import cpDns from '../../assets/projects/cp-dns.png'
import cpParenthink from '../../assets/projects/cp-parenthink.png'

const projects = [
    {
        title: 'Stiqr',
        desc: 'An Application for Small Businesses and Personal Needs',
        img: stiqr,
        link: "https://app.stiqr.id"
    },
    {
        title: 'IdSmartCare',
        desc: 'Application for Pharmacy and Clinic',
        img: idsc,
        link: "https://my.idsmartcare.com/"
    },
    {
        title: 'CMS MAG',
        desc: 'A Content Management Application for Mobile Apps',
        img: mag,
        link: "-"
    },
    {
        title: 'Workspace',
        desc: 'An Application for Managing Office Needs',
        img: ws,
        link: "https://workspace.dnstech.co.id/"
    },
    {
        title: 'Compro DNS Tech',
        desc: 'A Company Profile Website for DNS Tech',
        img: cpDns,
        link: "https://dnstech.co.id/"
    },
    {
        title: 'Compro Parenthink',
        desc: 'A Company Profile Website for Parenthink',
        img: cpParenthink,
        link: "https://parenthink-pkk-unj.vercel.app/"
    },
    {
        title: 'Scoreboard',
        desc: 'A Simple Scoreboard Application',
        img: cpParenthink,
        link: "https://scoreboardonline.vercel.app/"
    },
]

export const Projects = () => {
    return (
        <div className="md:mx-32 min-h-screen flex flex-col mt-32 overflow-hidden">
            <h1 className="text-4xl font-bold text-center">Projects</h1>

            <div className="flex flex-wrap mt-5 w-full">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-full md:w-1/2 p-3"
                    >
                        <CardProject
                            img={project.img}
                            title={project.title}
                            desc={project.desc}
                            link={project.link}
                            index={index}
                        />
                    </div>
                ))}
            </div>
        </div >
    )
}
