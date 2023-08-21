import { useEffect, useState } from "react";
import Assets from "../../../../assets";

const Brief = () => {
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
    <div className="flex items-center justify-between my-20">
      {screenWidth >= 576 ? (
        <img
          src={Assets.About}
          className="w-full xl:block lg:block md:block sm:hidden xs:hidden h-[30rem] object-contain"
          alt=""
        />
      ) : null}
      <div className="xl:w-[calc(100%-20px)] md:px-20 px-5  lg:w-[calc(100%-20px)] md:w-[calc(100%-20px)] sm:w-full xs:w-full">
        <h1 className="text-3xl font-semibold text-primary text-center">
          About US
        </h1>
        <p className="text-sm my-5">
          VividTech Hub is a pioneering digital services hub located in the
          picturescue of Jos, Plateau State.
        </p>
        <p className="text-sm my-5">
          Commited to driving digital transformation and innovation, we provide
          a wide range of cutting-edge technological solutions to individuals,
          businesses, and organizations. With a focus on excellence and
          creativity, we are dedicated to shaping the digital landscape of jobs
          and beyond.
        </p>
      </div>
    </div>
  );
};

export default Brief;
