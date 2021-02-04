import pharmacyImage from '../images/pharmacy.png';
import skininfectionImage from '../images/skininfection.png';
import allergiesImage from '../images/allergies.png';
import fluImage from '../images/flu.png';
import capsulesImage from '../images/capsules.png';
import covidImage from '../images/covid.png';
import arthritisImage from '../images/arthritis.png';
import { motion } from 'framer-motion';
import { useScroll } from './animation/useScroll';
import {
  slideToRight,
  slideToTop,
  slideToLeft,
  fade,
} from './animation/animate';

const Pharmacy = () => {
  const [element, animControls] = useScroll();
  const [element2, animControls2] = useScroll();
  const [element3, animControls3] = useScroll();
  const [element4, animControls4] = useScroll();
  return (
    <div
      id='pharmacy'
      className='relative bg-cyan-50 py-8 px-4 md:mt-10 sm:px-0'
    >
      <div className='container mx-auto'>
        <motion.div
          ref={element}
          variants={slideToTop}
          initial='hidden'
          animate={animControls}
        >
          <div className='py-8'>
            <h1 className='text-center tracking-wide font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-cyan-400'>
              Checkout Our Pharmacy For Discounts
            </h1>
          </div>
        </motion.div>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 mt-3'>
          <motion.div
            ref={element2}
            variants={slideToRight}
            initial='hidden'
            animate={animControls2}
            className='h-full'
          >
            <img
              src={pharmacyImage}
              alt=''
              className='w-full md-h-65vh sm-h-50vh'
            />
          </motion.div>
          <div>
            <motion.div
              ref={element3}
              variants={slideToLeft}
              initial='hidden'
              animate={animControls3}
              className='grid grid-cols-2 gap-1'
            >
              <div className='relative w-full 2xl:h-56 md:h-48 sm:h-36 bg-white overflow-hidden'>
                <img
                  src={skininfectionImage}
                  alt=''
                  className='2xl:h-56 md:h-48 sm:h-32 w-10/12 mx-auto rounded transform hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-br from-blue-100 to-blue-300'>
                  <p className='text-center tracking-wide md:text-base sm:text-sm'>
                    Skin Infection
                  </p>
                </div>
              </div>
              <div className='relative w-full 2xl:h-56 md:h-48 sm:h-36 bg-white overflow-hidden'>
                <img
                  src={allergiesImage}
                  alt=''
                  className='2xl:h-56 md:h-48 sm:h-32 w-10/12 mx-auto rounded transform hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-br from-blue-100 to-blue-300'>
                  <p className='text-center tracking-wide'>Allergies</p>
                </div>
              </div>
              <div className='relative w-full 2xl:h-56 md:h-48 sm:h-36 bg-white overflow-hidden'>
                <img
                  src={fluImage}
                  alt=''
                  className='2xl:h-56 md:h-48 sm:h-32 w-10/12 mx-auto rounded transform hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-br from-blue-100 to-blue-300'>
                  <p className='text-center tracking-wide'>Flu / Fever</p>
                </div>
              </div>
              <div className='relative w-full 2xl:h-56 md:h-48 sm:h-36 bg-white overflow-hidden'>
                <img
                  src={capsulesImage}
                  alt=''
                  className='2xl:h-56 md:h-48 sm:h-32 w-full mx-auto rounded transform hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-br from-blue-100 to-blue-300'>
                  <p className='text-center tracking-wide'>Pain Reliever</p>
                </div>
              </div>
              <div className='relative w-full 2xl:h-56 md:h-48 sm:h-36 bg-white overflow-hidden'>
                <img
                  src={covidImage}
                  alt=''
                  className='2xl:h-56 md:h-48 sm:h-32 w-10/12 mx-auto rounded transform hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-br from-blue-100 to-blue-300'>
                  <p className='text-center tracking-wide'>Virus Disease</p>
                </div>
              </div>
              <div className='relative w-full 2xl:h-56 md:h-48 sm:h-36 bg-white overflow-hidden'>
                <img
                  src={arthritisImage}
                  alt=''
                  className='2xl:h-56 md:h-48 sm:h-32 w-full mx-auto rounded transform hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-br from-blue-100 to-blue-300'>
                  <p className='text-center tracking-wide'>Arthritis</p>
                </div>
              </div>
            </motion.div>
            <motion.button
              ref={element4}
              variants={fade}
              initial='hidden'
              animate={animControls4}
              className='block mx-auto rounded my-5 py-1 px-3 md:text-base sm:text-sm tracking-wide font-semibold border border-blue-400 hover:bg-blue-400 hover:text-white focus:outline-none transition-all duration-500 ease-in-out'
            >
              View More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
