import React from "react";
import '../components.css'
const skillsData = [
  {
    name: "Web Development Wizards",
    icon: "💻",
    link: "#",
    description:
      "We’re the architects of the web, building sleek, stunning websites that captivate and convert. Whether you need a dazzling portfolio or a robust e-commerce site, we’ve got the skills to make it happen.",
    aosDelay: "0",
  },
  {
    name: "App Development Magic",
    icon: "📱",
    link: "#",
    description:
      "Got a wild idea for an app? We turn dreams into reality! From concept to launch, we craft mobile experiences that wow and engage.",
    aosDelay: "300",
  },
  {
    name: "Graphic Design Gurus",
    icon: "🎨",
    link: "#",
    description:
      "Visuals that pop, designs that drop jaws. Our graphic design team turns your brand into a visual masterpiece. From logos to full branding packages, we make your vision come alive.",
    aosDelay: "500",
  },
  {
    name: "Marketing Mavericks",
    icon: "📈",
    link: "#",
    description:
      "Cut through the noise with marketing that matters. Our digital marketing strategies are bold, innovative, and designed to deliver results. <br>From social media to SEO, we’ve got the tools to boost your brand.",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="bg-black dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-white"
            >
              Explore Our <span className="text-3xl font-semibold sm:text-3xl text-neon">Services</span>
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We bring your dreams to reality.
            </p>
          </div>

          {/* Services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card card-neon space-y-3 sm:space-y-4 p-4"
              >
                <div className="text-4xl">{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
