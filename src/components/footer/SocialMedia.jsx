import React from 'react'

export const SocialMedia = ({ link, icon }) => {
    return (
        <div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
            >
                {icon}
            </a>
        </div>
    )
}
