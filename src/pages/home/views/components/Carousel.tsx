import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef } from "react";
import Assets from "../../../../assets";
import "@splidejs/react-splide/css/core";

const Carousel = () => {
  const splideRef = useRef<Splide | null>(null); // Add TypeScript type annotation

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      const interval = setInterval(() => {
        splideInstance?.go("+1");
      }, 5000); // Adjust the interval (in milliseconds) as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, []);
  const carouselImages = [
    Assets.Img1,
    Assets.Img2,
    Assets.Img3,
    Assets.Img4,
    Assets.Img5,
    Assets.Img6,
  ];
  return (
    <div className="">
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 1,
          pagination: true,
          gap: "20px",
          arrows: false,
        }}
        aria-label=""
      >
        {[0, 1, 2, 3, 4, 5].map((item) => {
          return (
            <SplideSlide key={item} className="mx-3 relative">
              <img
                src={carouselImages[item]}
                className="w-full h-[90vh] object-cover"
                alt=""
              />
              <div className="absolute bottom-20 left-10">
                <h1 className="text-white text-6xl">VIVIDTECH HUB</h1>
                <p className="text-white md:w-1/2 w-full">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error, deserunt aperiam dicta porro doloremque odio
                  blanditiis! Distinctio dolore natus eveniet sequi suscipit,
                  totam temporibus excepturi, odio quibusdam, nisi asperiores
                  nihil?
                </p>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Carousel;
