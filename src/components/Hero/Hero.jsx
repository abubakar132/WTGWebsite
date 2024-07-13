import React from "react";
import yellowCar from "../../assets/website/team.png";
import '../components.css';


const Hero = () => {
  return (
    <div id="home" className="bg-black text-white duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px] shadow-neon"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-neonBlack text-neonPink shadow-neon"
            >
              <p className="text-sm">⭐Projects</p>
              <h1 className="font-bold">
                200+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Crafting Digital{" "}
              <span className="text-neon">Dreams</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              At WTG Studio, we’re all about turning wild ideas into digital gold. From sleek web designs 
              to killer marketing strategies, we’ve got the tools to take your brand to the next level. Our team of digital artisans thrives on pushing boundaries
               and creating experiences that stand out in the digital landscape. 
               Whether you’re launching a startup or looking to revamp your online presence, 
               we're here to make it happen with flair and finesse.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="bg-neonPink text-dark shadow-neon px-4 py-2 rounded-md hover:bg-dark hover:text-neonPink transition duration-300"
              onClick={() => window.location.href = "#services"}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
