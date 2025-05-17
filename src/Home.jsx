import Hero from './Components/Hero/Hero.jsx';
import Cover from './Components/Cover/cover.jsx';
import Slider from './Components/Slider/Slider.jsx';
import CatchLine from './Components/Catchline/Catchline.jsx';
import Services from './Components/Services/Services.jsx';
import ServMap from './Components/ServiceMap/ServMap.jsx';
import Review from './Components/Reviews/Review.jsx';
import Consultation from './Components/Consulatation/Consultation.jsx';
import Pricing from './Components/Pricing/pricing.jsx';
import Footer from './Components/Footer/Footer.jsx';

const Home = () => {
  return (
    <div>
      
      <Hero/>
      <Cover />
      <Slider />
      <CatchLine />
      <ServMap />
      <Pricing />
      <Review />
      <Consultation/>
      <Footer />
    </div>
  )
};

export default Home;
