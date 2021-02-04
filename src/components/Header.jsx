import headerPics from '../images/header.png';
import bgLine from '../images/bg_line.svg';
import bgTop from '../images/bg_top.png';
import { motion } from 'framer-motion';
import { useScroll } from './animation/useScroll';
import { bgVariants, delayFade, slideToLeft } from './animation/animate';

const Header = () => {
  const [element, animControls] = useScroll();
  return (
    <div id='home' className='relative' ref={element}>
      <motion.img
        variants={bgVariants}
        initial='hidden'
        animate={animControls}
        src={bgLine}
        alt=''
        className='absolute top-0 left-0 w-full xs-bg-line sm:mt-40 md:mt-48 lg:mt-56 xl:mt-40 2xl:mt-20 z-0'
      />
      <motion.img
        variants={slideToLeft}
        initial='hidden'
        animate={animControls}
        src={bgTop}
        alt=''
        className='absolute top-0 right-0 lg:w-9/12 sm:w-full md:h-56 sm:h-44 w-full h-40 -mt-20'
      />
      <div className='container mx-auto flex justify-center xs-screen-header sm:justify-between 2xl:justify-evenly z-10'>
        <motion.div
          variants={delayFade}
          initial='hidden'
          animate={animControls}
          className='sm:pb-48 sm:pt-40 md:pb-52 md:pt-48 lg:pt-56 lg:pb-64 xl:pb-80 xl:pt-56 2xl:pb-96'
        >
          <h1 className='font-semibold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-cyan-300 py-1'>
            Online Health Care
          </h1>
          <p className='sm:text-lg text-sm md:text-xl lg:text-2xl xl:text-3xl py-1'>
            Your <span className='font-semibold text-cyan-400'>Health</span> is
            our <span className='font-semibold text-cyan-400'>Priority</span>
          </p>
          <p className='text-sm sm:text-lg lg:text-xl xl:text-2xl py-1'>
            Be active and be healthy with us.
          </p>
          <div className='py-5 relative'>
            <button className='z-10 lg:py-2 lg:px-4 lg:text-xl md:text-base sm:py-1 sm:px-3 text-sm py-1 px-3 border rounded border-blue-400 hover:bg-blue-400 hover:text-white cursor-pointer focus:outline-none transition-all duration-300 ease-linear'>
              Get Started
            </button>
          </div>
        </motion.div>
        <motion.div
          className='max-w-3xl z-10'
          variants={delayFade}
          initial='hidden'
          animate={animControls}
        >
          <img
            src={headerPics}
            alt=''
            className='md:h-auto hidden sm:block sm:max-w-xs lg:max-w-2xl md:max-w-md py-32'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
