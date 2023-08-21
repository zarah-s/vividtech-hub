import { useNavigate } from "react-router-dom";
import Assets from "../../../../assets";
import RoutesPath from "../../../../constants/Routes";
import { useEffect, useState } from "react";

const About = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleScreenWidthChange = () => {
    setScreenWidth(window.innerWidth);
    // Perform any actions or updates based on the screen width change
  };

  useEffect(() => {
    // Event listener for screen resize
    window.addEventListener("resize", handleScreenWidthChange);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("resize", handleScreenWidthChange);
    };
  }, []);
  return (
    <div
      id="about"
      className="container mx-auto xl:px-20 lg:px-20 md:px-20 sm:px-0 xs:px-0 my-20"
    >
      <div className="flex items-center justify-between">
        {screenWidth >= 576 ? (
          <img
            src={Assets.About}
            className="w-full xl:block lg:block md:block sm:hidden xs:hidden h-[30rem] object-contain"
            alt=""
          />
        ) : null}
        <div className="xl:w-[calc(100%-20px)] lg:w-[calc(100%-20px)] md:w-[calc(100%-20px)] sm:w-full xs:w-full">
          <h1 className="text-3xl font-semibold text-primary text-center">
            About US
          </h1>
          <p className="text-sm my-5">
            VividTech Hub is a pioneering digital services hub located in the
            picturescue of Jos, Plateau State.
          </p>
          <p className="text-sm my-5">
            Commited to driving digital transformation and innovation, we
            provide a wide range of cutting-edge technological solutions to
            individuals, businesses, and organizations. With a focus on
            excellence and creativity, we are dedicated to shaping the digital
            landscape of jobs and beyond.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                navigate(RoutesPath.about);
              }}
              className="bg-primary xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full p-3 text-white rounded-lg "
            >
              Read More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
