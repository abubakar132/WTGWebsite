import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = ({ image, title, description }) => {
  return (
    <>
      <div className=" dark:text-white group">
        <div className="overflow-hidden relative w-full" style={{ paddingBottom: '56.25%' }}>
          <img
            src={image}
            alt="No image"
            className="absolute top-0 left-0 h-full w-full object-contain group-hover:scale-105 duration-300"
          />
        </div>
        <div className="neon-card space-y-2 p-4 ml-6 bg-black -translate-y-16">
          <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
          <p className="line-clamp-4 text-gray-500 text-sm">{description}</p>
          <div className="flex justify-end pr-4 text-gray-500">
            {/* Add any additional elements like icons or buttons here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
