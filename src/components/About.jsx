import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Constants -> index.js
const ServiceCard = ({ index, title, icon })=> {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 *
        index, 0.75)}
        className="w-full p-[1px]
        rounded-[40px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="rounded-[40px]
          py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px]
          font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1,1)}
        className="mt-7 text-secondary text-[17px]
        max-w-6xl leading-[30px]"
      >
        I am an aspiring web developer with experience in Python, C#, C++, and 
        React. My passion lies in learning new technologies and working collaboratively to 
        create robust, scalable, and user-centric solutions that solves real-world challenges. 
      </motion.p>

      <div className="mt-40 flex flex-wrap gap-20 justify-evenly">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service} /> 
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");