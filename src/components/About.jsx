import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import checkingImage from '../images/checking.jpg';
import ambulanceImage from '../images/ambulance.png';
import lobbyImage from '../images/lobby.jpg';
import playgroundImage from '../images/playground.jpg';
import canteenImage from '../images/canteen.jpg';
import { motion } from 'framer-motion';
import { useScroll } from './animation/useScroll';
import {
  delayFade,
  slideToDown,
  slideToLeft,
  slideToRight,
  slideToTop,
} from './animation/animate';

const About = () => {
  const [element, animControls] = useScroll();
  const [element2, animControls2] = useScroll();
  const [element3, animControls3] = useScroll();
  const [element4, animControls4] = useScroll();

  return (
    <div id='about' className='bg-white py-14 px-4 sm:px-0'>
      <div className='container mx-auto relative'>
        <div className='grid sm:grid-cols-2 grid-cols-1 relative z-0 py-14'>
          <div>
            <img
              src={checkingImage}
              alt=''
              className='sm:w-full w-9/12 mx-auto sm:h-96 h-64 opacity-20'
            />
          </div>
          <div>
            <img
              src={ambulanceImage}
              alt=''
              className='sm:w-full w-9/12 mx-auto sm:h-96 h-64 opacity-20'
            />
          </div>
        </div>
        <div className='absolute top-0 z-10 w-full mx-auto py-5'>
          <motion.h1
            ref={element}
            variants={slideToDown}
            initial='hidden'
            animate={animControls}
            className='text-center md:text-4xl sm:text-3xl text-2xl text-cyan-400 tracking-wide relative z-10'
          >
            Why Choose Us?
          </motion.h1>
          <motion.h1
            ref={element}
            variants={delayFade}
            initial='hidden'
            animate={animControls}
            className='sm:text-5xl text-3xl text-gray-200 opacity-50 sm:-mt-8 -mt-6 absolute sm:relative w-full text-center z-0'
          >
            Why Choose Us
          </motion.h1>

          <div className='grid sm:grid-cols-2 grid-cols-1 pt-14'>
            <motion.div
              ref={element}
              variants={slideToRight}
              initial='hidden'
              animate={animControls}
            >
              <p className='sm:text-lg md:text-xl tracking-wider my-5'>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className='text-cyan-300 mr-2'
                />
                Affordable Medicine.
              </p>
              <p className='sm:text-lg md:text-xl tracking-wider my-5'>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className='text-cyan-300 mr-2'
                />
                Less Hassle For Checkup Appointments.
              </p>
              <p className='sm:text-lg md:text-xl tracking-wider my-5'>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className='text-cyan-300 mr-2'
                />
                Excellent Services.
              </p>
              <p className='sm:text-lg md:text-xl tracking-wider my-5'>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className='text-cyan-300 mr-2'
                />
                Professional Doctors.
              </p>
            </motion.div>
            <motion.div
              ref={element}
              variants={slideToLeft}
              initial='hidden'
              animate={animControls}
            >
              <p className='sm:text-lg md:text-xl tracking-wider sm:my-5 my-0'>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className='text-cyan-300 mr-2'
                />
                Friendly Environment.
              </p>
              <p className='sm:text-lg md:text-xl tracking-wider my-5'>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className='text-cyan-300 mr-2'
                />
                24/7 of Service.
              </p>
              <p className='sm:text-lg md:text-xl tracking-wider my-5'>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className='text-cyan-300 mr-2'
                />
                Immediate Response.
              </p>
              <p className='sm:text-lg md:text-xl tracking-wider my-5'>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className='text-cyan-300 mr-2'
                />
                Monitor Patients Time To Time.
              </p>
            </motion.div>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-1'>
          <motion.div
            ref={element2}
            variants={slideToDown}
            initial='hidden'
            animate={animControls2}
          >
            <img src={lobbyImage} alt='' className='h-64 w-full rounded' />
            <p className='text-center text-lg tracking-wider font-semibold py-2 my-4'>
              Neat and Clean Lobby
            </p>
          </motion.div>
          <motion.div
            ref={element3}
            variants={slideToDown}
            initial='hidden'
            animate={animControls3}
          >
            <img src={playgroundImage} alt='' className='h-64 w-full rounded' />
            <p className='text-center text-lg tracking-wider font-semibold py-2 my-4'>
              Playground
            </p>
          </motion.div>
          <motion.div
            ref={element4}
            variants={slideToTop}
            initial='hidden'
            animate={animControls4}
            className='sm:col-span-2'
          >
            <img src={canteenImage} alt='' className='w-full h-64 rounded' />
            <p className='text-center text-lg tracking-wider font-semibold py-2 my-4'>
              Canteen
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
