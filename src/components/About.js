import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

//custom
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/*img section*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top'
          ></motion.div>

          {/*text section*/}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>I am a Frontend Developer with over 5 years of experience.</h3>
            <p className='mb-6'>
              As a front-end developer, I have a wide skill set and a strong ambition to
              create engaging and responsive web and mobile experiences. With a strong
              foundation in HTML, CSS, and JavaScript, I've honed my abilities in creating
              user-friendly interfaces that adhere to design criteria while stressing usability
              and performance.
            </p>

            {/*status section*/}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              {/*experience count*/}
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>

              {/*website dev count*/}
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={25} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Website Projects
                </div>
              </div>

              {/*mobile dev count*/}
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={7} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Mobile Projects
                </div>
              </div>
            </div>

            {/*button section*/}
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Download Resume</button>
              <a href="#work" rel='noreffer' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
