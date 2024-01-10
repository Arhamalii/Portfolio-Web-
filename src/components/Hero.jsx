import { motion } from "framer-motion";
import React from "react";
import ComputerCanvas from "../components/canvas/Computers";
import { styles } from "../styles";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white mt-2`}>
            Hi, I'm <span className="text-[#915eff]">Arham</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            MERN Stack Dev crafting simple <br className="sm:block hidden" />
            Websites to complex web applications.
          </p>
        </div>
      </div>
      <ComputerCanvas />
      <div className="absolute w-full max-xs:bottom-10 bottom-32 flex justify-center items-center ">
        <a href="#about">
          <div className="max-xs:w-[27px] max-xs:h-[50px] w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 max-xs:p-[.34rem]">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="max-xs:w-2.5 max-xs:h-2.5 w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
