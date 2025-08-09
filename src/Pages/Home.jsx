import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import WhyBookForYou from "../Components/WhyBookForYou";
import Category from "../Components/Category";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <Hero />
        <WhyBookForYou />
        <Category />
      </div>
    </>
  );
};

export default Home;
