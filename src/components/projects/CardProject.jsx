import React from 'react'
import '../../spark.css'
import { FaShare } from 'react-icons/fa'
import { RiShareBoxFill } from 'react-icons/ri'

export const CardProject = ({ img, title, desc, link, index }) => {
  const isDesktop = window.innerWidth >= 768; // md breakpoint

  return (
    <div
      data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
      data-aos-duration={index % 2 === 0 ? '1000' : '1200'}
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={isDesktop ? index * 200 : 0}
      className="group mx-3 card-spark relative w-full rounded-xl overflow-hidden">
      <div
        className="spark"
      />
      <div className="backdrop" />

      {/* Content */}
      <div className="relative z-10 group flex flex-col bg-gray-700/30 w-full rounded-xl p-5">
        <div className="overflow-hidden rounded-md">
          <img
            src={img}
            alt="project"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mt-2">{title}</h3>
          <p className="text-sm text-gray-300">{desc}</p>
        </div>
        <div className="mt-4">
          {link === "-" ? (
            <div
              className="flex items-center justify-center gap-2 w-full rounded-lg border border-gray-600 py-2 text-sm font-medium text-gray-500 bg-gray-800/40 cursor-not-allowed"
            >
              <span>Private</span>
              <RiShareBoxFill />
            </div>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-lg border border-gray-400 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600/50 hover:text-white transition"
            >
              <span>View Project</span>
              <RiShareBoxFill />
            </a>
          )}
        </div>

      </div>
    </div>
  )
}
