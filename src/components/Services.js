import React, { useState } from 'react';
import { BsFillPeopleFill, BsWindowDesktop, BsCode, BsFillCloudDownloadFill, BsFillPhoneFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


//customs
import { fadeIn } from '../variants';

const Services = () => {
  const services = [
    {
      name: 'Web Development',
      description: 'I prioritise user interface (UI) and user experience (UX) design principles to create intuitive, visually appealing, and easy-to-navigate websites.',
      placeholder: BsWindowDesktop,
    },
    {
      name: 'Mobile Development',
      description: 'I follow a mobile-first approach, prioritising the mobile user experience to ensure your app looks and functions seamlessly on smartphones and tablets.',
      placeholder: BsFillPhoneFill,
    },
    {
      name: 'Technologies and Frameworks',
      description: 'Proficient in the core technologies for building interactive and dynamic user interfaces.',
      placeholder: BsCode,
    },
    {
      name: 'Optimisation and Performance',
      description: 'Implementing best practices to ensure fast loading times and a smooth browsing experience.',
      placeholder: BsFillCloudDownloadFill,
    },
    {
      name: 'Collaborative Approach',
      description: 'Keeping you informed throughout the development process and incorporating feedback to meet your project goals.',
      placeholder: BsFillPeopleFill,
    },
  ];
  const [expandedServiceIndex, setExpandedServiceIndex] = useState(null);

  const handleServiceClick = (i) => {
    setExpandedServiceIndex(i === expandedServiceIndex ? null : i);
  };

  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text and image section*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I am a Frontend Developer with over 5 years of experience.</h3>
            <Link to='work' smooth={true} duration={500} className='btn btn-sm py-4'>See my work</Link>
          </motion.div>

          {/*services map section*/}
          <div className='flex-1'>
            <div>
              {services.map((services, i) => {
                const { name, description, placeholder: Icon } = services;
                const isExpanded = i === expandedServiceIndex;

                return (
                  <motion.div
                    key={i}
                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='border-b border-white/20 h-[146px] mb-[20px] flex'
                    onClick={() => handleServiceClick(i)}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className={`font-secondary leading-tight overflow-hidden ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <div className='flex btn w-9 h-9 mb-[42px] justify-center items-center'>
                        {<Icon />}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
