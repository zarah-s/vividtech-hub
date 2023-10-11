import Assets from "../../../assets";
import Footer from "../../../common/components/footer/Footer";
import NavBar from "../../../common/components/nav/NavBar";
import Contact from "../../home/views/components/Contact";
import Brief from "./components/Brief";
import MissionAndVission from "./components/MissionAndVission";
import Team from "./components/Team";
import WhyChooseUs from "./components/WhyChooseUs";

const AboutScreen = () => {
  return (
    <div>
      <NavBar activeTab="About" />
      <div className="mt-44"></div>
      <div className="flex items-center justify-center">
        <img
          src={Assets.LogoWhite}
          className="w-44 h-[100vh] object-contain"
          alt=""
        />
      </div>
      <Brief />
      <WhyChooseUs />

      <MissionAndVission />

      <Team />

      <Contact />

      <Footer />
    </div>
  );
};

export default AboutScreen;
