import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
