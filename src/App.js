import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Pharmacy from './components/Pharmacy';
import { BackTop } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className='scroll-x-hidden'>
      <NavBar />
      <Header />
      <Pharmacy />
      <About />
      <Contact />
      <Footer />
      <BackTop>
        <div className='bg-cyan-300 rounded ml-1 p-2 cursor-pointer'>
          <FontAwesomeIcon icon={faArrowUp} className='text-xl' />
        </div>
      </BackTop>
    </div>
  );
};

export default App;
