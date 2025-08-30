import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SocialMedia } from './SocialMedia';

const socialMedia = [
    {
        icon: <FaGithub className="text-black w-10 h-10 hover:scale-110 transition-transform" />,
        link: "https://github.com/dwiarya1104",
    },
    {
        icon: <FaLinkedin className="text-black w-10 h-10 hover:scale-110 transition-transform" />,
        link: "https://www.linkedin.com/in/dwiiaryaa/",
    },
    {
        icon: <FaInstagram className="text-black w-10 h-10 hover:scale-110 transition-transform" />,
        link: "https://www.instagram.com/dwiiarya.p_",
    },
];

export const Footer = () => {
    return (
        <footer className="relative bg-white/90 rounded-t-2xl mt-16 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px] rounded-t-2xl"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-around items-center md:items-start px-10 py-10 gap-8">

                {/* Left side */}
                <div className="flex flex-col md:items-start items-center text-black">
                    <span className="text-xl text-gray-500 tracking-wide uppercase">
                        Available for new projects!
                    </span>
                    <span className="text-2xl font-bold mt-1">
                        Contact Me
                    </span>
                    <a
                        href="mailto:aryeahx@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block rounded-full border border-gray-400 px-5 py-2 text-sm font-medium hover:bg-gray-100 hover:border-gray-600 transition"
                    >
                        aryeahx@gmail.com
                    </a>
                </div>

                {/* Right side */}
                <div className="flex flex-col items-center md:items-end">
                    <p className="mb-3 font-semibold text-xl text-gray-800">
                        Let&apos;s connect
                    </p>
                    <div className="flex gap-5">
                        {socialMedia.map((social, index) => (
                            <SocialMedia key={index} icon={social.icon} link={social.link} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="relative z-10 border-t border-gray-200 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Dwi Arya Putra
            </div>
        </footer>
    );
};
