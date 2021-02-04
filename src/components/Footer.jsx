import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faYoutube,
  faTwitterSquare,
  faInstagramSquare,
  faGooglePlusSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logoo.png';
import { motion } from 'framer-motion';
import { useScroll } from './animation/useScroll';
import { fade } from './animation/animate';

const Footer = () => {
  const [element, animControls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={fade}
      initial='hidden'
      animate={animControls}
      className='bg-blue-100 pt-10 px-4 sm:px-0'
    >
      <div className='container mx-auto'>
        <h1 className='text-center font-semibol tracking-wide sm:text-3xl text-2xl'>
          Frequently Ask Questions
        </h1>
        <div className='grid md:grid-cols-3 grid-cols-1 py-5 gap-5'>
          <div className='border border-white p-4 rounded'>
            <h1 className='font-semibold py-3'>How Do I Start?</h1>
            <p className='text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              exercitationem illum earum fuga, error dignissimos placeat
              quibusdam maiores? Perferendis, optio?
            </p>
          </div>
          <div className='border border-white p-4 rounded'>
            <h1 className='font-semibold py-3'>Is There A Free Checkup?</h1>
            <p className='text-sm'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, reprehenderit! Molestiae eius laboriosam tempora
              ratione tenetur magni error recusandae quod!
            </p>
          </div>
          <div className='border border-white p-4 rounded'>
            <h1 className='font-semibold py-3'>
              Do You Entertain Walk-in Checkup?
            </h1>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              accusantium voluptates officia? Quod magnam velit fugiat
              repudiandae voluptas minus laudantium.
            </p>
          </div>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 py-3'>
          <div className='text-center'>
            <h1 className='font-semibold py-2'>Contact</h1>
            <div className='flex justify-center'>
              <FontAwesomeIcon
                icon={faMobileAlt}
                className='mx-2 my-auto h-full'
              />
              <p>+0123456789</p>
            </div>
            <div className='flex justify-center'>
              <FontAwesomeIcon
                icon={faMobileAlt}
                className='mx-2 my-auto h-full'
              />
              <p>+9876543210</p>
            </div>
            <div className='flex justify-center'>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className='mx-2 my-auto h-full'
              />
              <p>(012) 345 6789</p>
            </div>
          </div>
          <div className='py-5 md:py-0'>
            <h1 className='font-semibold py-2 text-center'>
              Follow Us On Social Media
            </h1>
            <div className='flex justify-evenly'>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className='text-3xl text-blue-400 hover:text-gray-500 cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className='text-3xl text-blue-400 hover:text-gray-500 cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className='text-3xl text-blue-400 hover:text-gray-500 cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className='text-3xl text-blue-400 hover:text-gray-500 cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faGooglePlusSquare}
                className='text-3xl text-blue-400 hover:text-gray-500 cursor-pointer'
              />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center pb-3'>
          <img src={Logo} alt='' className='sm:w-14 mr-2 w-9' />
          <h1 className='tracking-wide font-semibold sm:text-2xl mr-5'>
            Health++
          </h1>
        </div>
        <div className='text-center pb-3'>
          <h1 className='font-semibold text-xs sm:text-base'>
            Alright Reserved &copy; November 2020
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
