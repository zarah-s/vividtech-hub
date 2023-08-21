import NavBar from "../../../common/components/nav/NavBar";
import About from "./components/About";
import Footer from "../../../common/components/footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "./components/Carousel";
import RecentWorks from "./components/RecentWorks";
import Tasks from "./components/Tasks";
import Contact from "./components/Contact";

const HomeScreen = () => {
  const location = useLocation();

  const scrollToHash = (hash: string) => {
    const blogElement = document.getElementById(
      hash.split("").slice(1).join("")
    );
    if (blogElement) {
      window.scrollTo({
        behavior: "smooth",
        top: blogElement.offsetTop,
      });
    }
  };
  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);
  return (
    <div>
      <NavBar activeTab="Home" />
      <div className="mt-[4.5rem] bg-primary">
        <Carousel />
      </div>

      <div id="whatwedo" className="container my-20 mx-auto">
        <h1 className="text-3xl text-center font-semibold barlow mb-10">
          What We Do
        </h1>
        <Tasks />
      </div>
      {/* <WhatweDo /> */}
      <About />
      <RecentWorks />

      <Contact />

      <Footer />
    </div>
  );
};

export default HomeScreen;
