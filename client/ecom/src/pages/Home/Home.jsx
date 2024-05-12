import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeatureProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type='featured'/>
      <Categories/>
      <FeaturedProducts type='trending'/>
      <Contact/>
      
    </div>
  );
};

export default Home;
