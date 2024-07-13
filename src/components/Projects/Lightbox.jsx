import React from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const Lightbox = ({ project, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative text-white p-4 rounded-lg max-w-xl w-full">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <h1 className="text-2xl font-semibold mb-4">{project.title}</h1>
        <div className="flex justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-80 object-contain"
          />
        </div>
        <p className="mt-4">{project.description}</p>
        <div className="flex justify-between mt-4">
          <button onClick={onPrev}>
            <FaArrowLeft size={24} />
          </button>
          <button onClick={onNext}>
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
