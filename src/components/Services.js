import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

//customs
import { fadeIn } from '../variants';

const Services = () => {
  const services = [
    {
      name: 'Web Development',
      description: 'I prioritize user interface (UI) and user experience (UX) design principles to create intuitive, visually appealing, and easy-to-navigate websites.',
      link: 'Learn more',
    },
    {
      name: 'Mobile Development',
      description: 'I follow a mobile-first approach, prioritizing the mobile user experience to ensure your app looks and functions seamlessly on smartphones and tablets.',
      link: 'Learn more',
    },
    {
      name: 'Technologies and Frameworks',
      description: 'Expertise in popular frontend frameworks to enhance development efficiency and maintainability.',
      link: 'Learn more',
    },
    {
      name: 'Optimization and Performance',
      description: 'Implementing best practices to ensure fast loading times and a smooth browsing experience.',
      link: 'Learn more',
    },
    {
      name: 'Collaborative Approach',
      description: 'Keeping you informed throughout the development process and incorporating feedback to meet your project goals.',
      link: 'Learn more',
    },
  ]

  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text and image section*/}
          <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I am a Frontend Developer with over 5 years of experience.</h3>
            <button className='btn btn-sm'>See my work</button>
          </div>

          {/*services map section*/}
          <div className='flex-1'>
            <div>
              {services.map((services, i) => {
                return (
                  <div>services</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
