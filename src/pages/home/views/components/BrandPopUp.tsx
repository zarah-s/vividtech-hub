import { Splide, SplideSlide } from "@splidejs/react-splide";
import Popup from "reactjs-popup";
import Assets from "../../../../assets";
import { useEffect, useRef } from "react";
interface Props {
  open: boolean;
  images: any[];
  title: string;
  content: string;
  onClose: VoidFunction;
}
const BrandPopUp = ({ content, images, open, title, onClose }: Props) => {
  const splideRef = useRef<Splide | null>(null); // Add TypeScript type annotation

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      const interval = setInterval(() => {
        splideInstance?.go("+1");
      }, 2000); // Adjust the interval (in milliseconds) as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, []);
  return (
    <Popup
      lockScroll
      overlayStyle={{
        background: "rgba(0,0,0,.3)",
      }}
      closeOnDocumentClick
      closeOnEscape
      open={open}
      onClose={onClose}
    >
      <div className="bg-white shadow-lg mx-20 rounded-xl p-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                drag: "free",
                focus: "center",
                perPage: 1,
                gap: "20px",
              }}
              aria-label=""
            >
              {images.map((item: any, index: number) => {
                return (
                  <SplideSlide key={item} className="mx-3">
                    <img
                      src={item}
                      className="w-full h-80 object-cover rounded-lg"
                      alt=""
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
          <div className="col-span-9">
            <div className="bg-[#39889769] p-3 rounded-xl">
              <div className="flex items-center justify-around">
                <button
                  className={
                    true
                      ? "text-white font-[500] border-b-2 border-b-white"
                      : "text-[#398796]"
                  }
                >
                  Natural
                </button>
                <button
                  className={
                    false
                      ? "text-white font-[500] border-b-2 border-b-white"
                      : "text-[#398796]"
                  }
                >
                  Strawberry
                </button>
                <button
                  className={
                    false
                      ? "text-white font-[500] border-b-2 border-b-white"
                      : "text-[#398796]"
                  }
                >
                  Pineapple
                </button>
                <button
                  className={
                    false
                      ? "text-white font-[500] border-b-2 border-b-white"
                      : "text-[#398796]"
                  }
                >
                  Natural
                </button>
              </div>
            </div>
            <div className="my-10 mx-10">
              <h1 className="text-[#398796] font-[400] text-center text-3xl">
                {title}
              </h1>
              <p className="text-[#398796] mt-5">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default BrandPopUp;
