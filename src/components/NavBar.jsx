import { useState } from 'react';
import logo from '../images/logoo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <>
      <nav
        className={`h-10vh transition-all duration-500 ease-in-out ${
          sideNav ? 'bg-cyan-200' : 'bg-none'
        } relative z-50`}
      >
        <div className='container mx-auto flex justify-between pt-3 xs-container'>
          <div className='lg:hidden block'>
            {sideNav ? (
              <FontAwesomeIcon
                icon={faTimes}
                className='sm:text-4xl text-2xl h-full cursor-pointer hover:text-blue-400'
                onClick={() => setSideNav(!sideNav)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className='sm:text-3xl text-xl h-full cursor-pointer hover:text-blue-400'
                onClick={() => setSideNav(!sideNav)}
              />
            )}
          </div>
          <div className='flex sm:items-center sm:mx-auto lg:mx-0'>
            <img
              src={logo}
              alt=''
              className='sm:w-12 sm:h-auto w-8 h-8 pt-1 sm:pt-0 cursor-pointer'
            />
            <h1
              className={`sm:text-2xl text-lg px-3 pt-1 sm:pt-0 tracking-wider transition-all duration-500 ease-in-out ${
                sideNav ? '' : 'text-cyan-400'
              }  font-semibold cursor-pointer`}
            >
              Health++
            </h1>
          </div>
          <div className='hidden lg:flex pt-1'>
            <a
              href='#home'
              className='px-8 text-lg tracking-wide hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'
            >
              Home
            </a>
            <a
              href='#pharmacy'
              className='px-8 text-lg tracking-wide hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'
            >
              Pharmacy
            </a>
            <a
              href='#about'
              className='px-8 text-lg tracking-wide hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'
            >
              About
            </a>
            <a
              href='#contact'
              className='px-8 text-lg tracking-wide hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'
            >
              Contact
            </a>
            <div className='-mt-1'>
              <button className='py-1 px-5 border border-blue-400 tracking-wide rounded hover:bg-blue-400 hover:text-white focus:outline-none transition-all duration-500 ease-in-out'>
                Register
              </button>
            </div>
          </div>
          <div className='lg:hidden block mt-1'>
            <button className='py-1 px-3 border text-xs sm:text-sm border-blue-400 tracking-wide rounded hover:bg-blue-400 hover:text-white focus:outline-none transition-all duration-500 ease-in-out'>
              Register
            </button>
          </div>
        </div>

        {/* max medium screen */}
      </nav>
      <div
        className={`lg:hidden fixed text-center sm:text-left sm:w-52 w-full border-t-2 bg-cyan-200 z-20 h-full pt-3 rounded-r transform ${
          sideNav ? '' : '-translate-x-full'
        }  transition-all duration-500 ease-in-out`}
      >
        <div className='px-5'>
          <h1 className='px-5 py-3 text-xl tracking-wide hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>
            Home
          </h1>
          <h1 className='px-5 py-3 text-xl tracking-wide hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>
            Pharmacy
          </h1>
          <h1 className='px-5 py-3 text-xl tracking-wide hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>
            About
          </h1>
          <h1 className='px-5 py-3 text-xl tracking-wide hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>
            Contact
          </h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
