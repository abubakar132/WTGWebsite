import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox"; // Import Lightbox component
import Img1 from "../../assets/Project/img (1).png";
import Img2 from "../../assets/Project/img (2).png";
import Img3 from "../../assets/Project/img (3).png";
import Img4 from "../../assets/Project/img (4).png";
import Img5 from "../../assets/Project/img (5).png";
import Img6 from "../../assets/Project/img (6).png";
import Img7 from "../../assets/Project/img (7).png";
import Img8 from "../../assets/Project/img (8).png";
import Img9 from "../../assets/Project/img (9).png";
import Img10 from "../../assets/Project/img (10).png";
import Img11 from "../../assets/Project/img (11).png";
import Img12 from "../../assets/Project/img (12).png";
import Img13 from "../../assets/Project/img (13).png";
import Img14 from "../../assets/Project/img (14).png";
import Img15 from "../../assets/Project/img (15).png";
import Img16 from "../../assets/Project/img (16).png";
import Img17 from "../../assets/Project/img (17).png";
import Img18 from "../../assets/Project/img (18).png";

const allProjects = [
  {
    id: 1,
    image: Img1,
    title: "🎬 Boostexplainer 🎬",
    description:
      "We designed a vibrant website for Boostexplainer, a 2D explainer videos agency. With engaging animations and a sleek interface, we showcased their storytelling prowess and made it easy for clients to explore their portfolio and services.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "🎉 SGD Events 🎉",
    description:
      "At WTG Studio, we crafted a dynamic website for SGD Events, an events management company. The site features eye-catching visuals and seamless navigation, highlighting their expertise in creating unforgettable events.",
    author: "Someone",
    date: "April 22, 2022",
  },
/*   {
    id: 3,
    image: Img3,
    title: "🎉 Jean Seiwe Events 🎉",
    description:
      "At WTG Studio, we designed a sleek, modern website for Jean Seiwe Events. With vibrant imagery and intuitive layout, we captured the essence of their event planning services, providing visitors with an engaging and informative experience.",
    author: "Someone",
    date: "April 22, 2022",
  }, */
  {
    id: 4,
    image: Img4,
    title: "⏰ Rormon ⏰",
    description:
      "We developed a sophisticated ecommerce website for Rormon, a clock store. With a clean, elegant design and user-friendly shopping experience, customers can easily browse and purchase unique timepieces.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 5,
    image: Img5,
    title: "👗 Grace Style 👗",
    description:
      "Grace Style's ecommerce clothing store got a chic makeover by WTG Studio. Our design showcases their stylish apparel with stunning visuals and a smooth shopping interface, making fashion accessible and fun.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 6,
    image: Img6,
    title: "🌸 Decent Fragrance 🌸",
    description:
      "WTG Studio created a luxurious ecommerce website for Decent Fragrance. The site exudes elegance, with beautiful product displays and an easy-to-navigate layout, making it simple for customers to find their perfect scent.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 7,
    image: Img7,
    title: "🎓 STFS Forum 🎓",
    description:
      "We built an informative and engaging website for STFS Forum, an education consultancy. The site features intuitive navigation and comprehensive resources, helping students and parents make informed decisions about their educational journey.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 8,
    image: Img8,
    title: "💪 AR Fitness 💪",
    description:
      "AR Fitness now has a dynamic business and ecommerce website, thanks to WTG Studio. Our design integrates a sleek store for fitness products and informative sections about their services, creating a hub for fitness enthusiasts.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 9,
    image: Img9,
    title: "💻 WebDure 💻",
    description:
      "WTG Studio developed a professional portfolio website for WebDure, a services-based company. The site highlights their diverse offerings and showcases their successful projects, presenting their expertise with style.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 10,
    image: Img10,
    title: "✈️ Radhika Travels ✈️",
    description:
      "We created an engaging website for Radhika Travels, a travel and tour company. The design features captivating travel imagery and an easy booking process, inspiring visitors to explore new destinations.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 11,
    image: Img11,
    title: "👜 Freaky Leather 👜",
    description:
      "WTG Studio designed a trendy ecommerce store for Freaky Leather, a leather accessories retailer. The site combines sleek design with intuitive navigation, making it easy for customers to shop for stylish leather goods.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 12,
    image: Img12,
    title: "🎶 Spottunes 🎶",
    description:
      "We developed a user-friendly app for Spottunes, a music player company. The app features a sleek interface and seamless music streaming, providing users with an exceptional listening experience.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 13,
    image: Img13,
    title: "🛵 Nate's Deliver 🛵",
    description:
      "WTG Studio created a robust app for Nate's Deliver, a scooter delivery service. The app offers a smooth user experience, from placing orders to tracking deliveries, ensuring efficiency and customer satisfaction.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 14,
    image: Img14,
    title: "💧 Aqua Partners 💧",
    description:
      "We developed a sleek and efficient app for Aqua Partners, a water provider company. The app allows users to easily order and manage water deliveries, enhancing their service experience.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 15,
    image: Img15,
    title: "🛋️ Rookie Furniture 🛋️",
    description:
      "WTG Studio designed an intuitive app for Rookie Furniture, a furniture store. The app features a clean layout and easy navigation, making it simple for customers to browse and purchase furniture.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 16,
    image: Img16,
    title: "🌦️ LikiWeather 🌦️",
    description:
      "We developed a precise and visually appealing app for LikiWeather, a weather forecast service. The app provides accurate forecasts with a user-friendly interface, keeping users informed and prepared.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 17,
    image: Img17,
    title: "📚 Lean Bulk 📚",
    description:
      "WTG Studio created a high-impact ebook design for Lean Bulk, a fitness store. The design features engaging visuals and clear, concise content, providing readers with valuable fitness insights.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 18,
    image: Img18,
    title: "🌟 Syed's Portfolio 🌟",
    description:
      "We built a sleek portfolio website for Syed, a talented developer. The site showcases his projects and skills with a clean, modern design, making it easy for potential clients to see his expertise.",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const ProjectsComp = () => {
  const [projectsToShow, setProjectsToShow] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setProjectsToShow((prev) => prev + 3);
      setLoadingMore(false);
    }, 1000);
  };

  const openLightbox = (project) => {
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const showNextProject = () => {
    const currentIndex = allProjects.findIndex(
      (project) => project.id === selectedProject.id
    );
    const nextIndex = (currentIndex + 1) % allProjects.length;
    setSelectedProject(allProjects[nextIndex]);
  };

  const showPrevProject = () => {
    const currentIndex = allProjects.findIndex(
      (project) => project.id === selectedProject.id
    );
    const prevIndex =
      (currentIndex - 1 + allProjects.length) % allProjects.length;
    setSelectedProject(allProjects[prevIndex]);
  };

  return (
    <>
      <div
        id="projects"
        className="bg-black  dark:text-white py-10 pb-14"
      >
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our <span className="text-3xl font-semibold sm:text-3xl text-neon">Projects</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.slice(0, projectsToShow).map((item) => (
              <div key={item.id} onClick={() => openLightbox(item)}>
                <ProjectCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
          {projectsToShow < allProjects.length && (
            <div className="text-center">
              <button
                className="bg-neonPink text-dark shadow-neon px-4 py-2 rounded-md hover:bg-dark hover:text-neonPink transition duration-300"
                onClick={handleLoadMore}
                disabled={loadingMore}
              >
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </section>
      </div>
      {selectedProject && (
        <Lightbox
          project={selectedProject}
          onClose={closeLightbox}
          onNext={showNextProject}
          onPrev={showPrevProject}
        />
      )}
    </>
  );
};

export default ProjectsComp;
