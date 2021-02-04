import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseUser,
  faMapMarkedAlt,
  faCalendarAlt,
  faUser,
  faEnvelope,
  faPencilAlt,
  faVenusMars,
  faUserNurse,
  faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useScroll } from './animation/useScroll';
import {
  delayFade,
  slideToDown,
  slideToLeft,
  slideToRight,
} from './animation/animate';

const Contact = () => {
  const [element, animControls] = useScroll();
  const [element2, animControls2] = useScroll();
  const [element3, animControls3] = useScroll();
  return (
    <div id='contact' className='bg-cyan-50 py-14 px-4 sm:px-0'>
      <div className='container mx-auto relative'>
        <motion.div
          ref={element}
          className='absolute top-0 z-10 w-full mx-auto py-5'
        >
          <motion.h1
            variants={slideToDown}
            initial='hidden'
            animate={animControls}
            className='text-center sm:text-4xl text-3xl text-cyan-400 tracking-wide relative z-10'
          >
            Contact Us
          </motion.h1>
          <motion.h1
            variants={delayFade}
            initial='hidden'
            animate={animControls}
            className='text-center text-5xl text-gray-200 opacity-50 p-0 -mt-8 relative z-0'
          >
            Contact Us
          </motion.h1>
        </motion.div>
        <div className='grid md:grid-cols-10 grid-cols-1 gap-8 pt-32 pb-14'>
          <motion.div
            ref={element2}
            variants={slideToRight}
            initial='hidden'
            animate={animControls2}
            className='md:col-start-1 md:col-span-4 bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 rounded px-5 py-5'
          >
            <h1 className='tracking-wide md:text-3xl text-lg'>Get In Touch</h1>
            <form>
              <div className='my-2 relative'>
                <FontAwesomeIcon
                  icon={faUser}
                  className='absolute top-0 left-0 sm:text-lg text-sm h-full my-auto mx-2'
                />
                <input
                  type='text'
                  className='w-full py-1 rounded focus:outline-none text-sm sm:text-base indent'
                  placeholder='Name'
                />
              </div>
              <div className='my-2 relative'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='absolute top-0 left-0 sm:text-lg text-sm h-full my-auto mx-2'
                />
                <input
                  type='text'
                  className='w-full py-1 rounded focus:outline-none text-sm sm:text-base indent'
                  placeholder='Email'
                />
              </div>
              <div className='my-2 relative'>
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className='absolute top-0 left-0 sm:text-lg text-sm m-2'
                />
                <textarea
                  cols='30'
                  rows='4'
                  placeholder='Message'
                  className='w-full py-1 rounded focus:outline-none text-sm sm:text-base indent'
                ></textarea>
              </div>
              <div className='w-full'>
                <button className='w-full border border-white rounded py-2 text-sm sm:text-base hover:bg-blue-300 hover:text-white focus:outline-none'>
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
          <motion.div
            ref={element3}
            variants={slideToLeft}
            initial='hidden'
            animate={animControls3}
            className='md:col-start-5 md:col-span-6 bg-gradient-to-bl from-blue-100 via-blue-200 to-purple-200 rounded px-5 py-5'
          >
            <h1 className='tracking-wide md:text-3xl text-lg'>
              Schedule for Appointment
            </h1>
            <form>
              <div className='my-2 relative'>
                <FontAwesomeIcon
                  icon={faHouseUser}
                  className='absolute top-0 left-0 sm:text-lg text-sm m-2'
                />
                <input
                  type='text'
                  className='w-full py-1 rounded focus:outline-none text-sm sm:text-base indent'
                  placeholder='Guardian Name'
                />
              </div>
              <div className='my-2 relative'>
                <FontAwesomeIcon
                  icon={faUserNurse}
                  className='absolute top-0 left-0 sm:text-lg text-sm m-2'
                />
                <input
                  type='text'
                  className='w-full py-1 rounded focus:outline-none text-sm sm:text-base indent'
                  placeholder='Patient Name'
                />
              </div>
              <div className='grid grid-cols-2 gap-2'>
                <div className='relative'>
                  <FontAwesomeIcon
                    icon={faVenusMars}
                    className='absolute top-0 left-0 sm:text-lg text-sm m-2'
                  />
                  <input
                    type='text'
                    className='w-full py-1 rounded focus:outline-none text-sm sm:text-base indent'
                    placeholder='Gender'
                  />
                </div>
                <div className='relative'>
                  <FontAwesomeIcon
                    icon={faRulerCombined}
                    className='absolute top-0 left-0 sm:text-lg text-sm m-2'
                  />
                  <input
                    type='text'
                    className='w-full py-1 rounded focus:outline-none text-sm sm:text-base indent'
                    placeholder='Age'
                  />
                </div>
              </div>
              <div className='my-2 relative'>
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  className='absolute top-0 left-0 sm:text-lg text-sm m-2'
                />
                <input
                  type='text'
                  className='w-full py-1 rounded focus:outline-none text-sm sm:text-base indent'
                  placeholder='Address'
                />
              </div>
              <div className='my-2 relative'>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className='absolute top-0 left-0 sm:text-lg text-sm m-2'
                />
                <input
                  type='text'
                  className='w-full py-1 rounded focus:outline-none text-sm sm:text-base indent'
                  placeholder='Preferred Sched - Month/Day/Year'
                />
              </div>
              <div className='w-full py-1'>
                <button className='w-full border border-white rounded py-2 text-sm sm:text-base hover:bg-blue-300 hover:text-white focus:outline-none'>
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
