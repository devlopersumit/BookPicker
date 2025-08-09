import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import WhyBookForYou from "../Components/WhyBookForYou";
import Category from "../Components/Category";
import NotSure from "../Components/NotSure";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <Hero />
        <WhyBookForYou />
        <Category />
        <NotSure />
        <Footer />
      </div>
    </>
  );
};

export default Home;
