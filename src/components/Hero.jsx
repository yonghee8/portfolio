import { motion } from 'framer-motion';
import { styles } from '../styles';

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import React, { useRef, useState } from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[160px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <div className="flex flex-col justify-center items-center mt-7">
          
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#6c86de]">Yonghee</span></h1>
          <p className={`${styles.heroSubText} mt-5 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" /> interfaces, and web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

  