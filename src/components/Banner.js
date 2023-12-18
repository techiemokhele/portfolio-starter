import React from 'react';
import { FaGithub, FaMedium, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

//custom
import Avatar from '../assets/avatar.png';
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/*username section*/}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >NEO <span>MOKHELE</span></motion.h1>

            {/*skills set*/}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-2'>I am a</span>
              <TypeAnimation sequence={[
                'Frontend Developer', 1500,
                'Mobile Developer', 1500,
                'Web Designer', 1500,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            {/*about me text*/}
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              As a front-end developer, I have a wide skill set and a strong ambition to
              create engaging and responsive web and mobile experiences.
            </motion.p>

            {/*button links*/}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Download resume</button>
              <a href='#work' className='text-gradient btn-link' rel="noreferrer">My Portfolio</a>
            </motion.div>

            {/*social links*/}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/techiemokhele' target='_blank' rel="noreferrer">
                <FaGithub />
              </a>

              <a href='https://medium.com/@softwareninjaneer' target='_blank' rel="noreferrer">
                <FaMedium />
              </a>

              <a href='https://www.linkedin.com/in/neo-mokhele-458188188/' target='_blank' rel="noreferrer">
                <FaLinkedin />
              </a>

              <a href='https://stackoverflow.com/users/8152836/wizard' target='_blank' rel="noreferrer">
                <FaStackOverflow />
              </a>
            </motion.div>
          </div>

          {/*developer image*/}
          <motion.div variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Avatar} alt='avatar-img' />
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
