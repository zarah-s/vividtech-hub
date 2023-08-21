import Assets from "../../../../assets";
interface Props {
  onTap: VoidFunction;
}
const Brands = ({ onTap }: Props) => {
  return (
    <div
      id="brands"
      className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2"
    >
      <Brand onTap={onTap} imgSrc={Assets.Img1} title="Stirred Yoghurt" />
      <Brand onTap={onTap} imgSrc={Assets.Img2} title="Milk" />
      <Brand onTap={onTap} imgSrc={Assets.Img1} title="Drinking Yoghurt" />
      <Brand onTap={onTap} imgSrc={Assets.Img1} title="Coming Soon" />
      <Brand onTap={onTap} imgSrc={Assets.Img1} title="Telsa" />
      <Brand onTap={onTap} imgSrc={Assets.Img1} title="Coming Soon" />
    </div>
  );
};

export default Brands;

interface BrandProps {
  imgSrc: any;
  title: string;
  onTap: VoidFunction;
}
const Brand = ({ imgSrc, title, onTap }: BrandProps) => {
  return imgSrc === Assets.Img5 ? (
    <div onClick={onTap} className="relative h-80">
      <img src={imgSrc} className="h-80 object-cover w-full" alt="" />
    </div>
  ) : (
    <div onClick={onTap} className="relative h-80">
      <img src={imgSrc} className="h-80 object-cover w-full" alt="" />
      <div className="absolute bg-primary-transparent top-0 h-full w-full">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-white font-semibold text-3xl">{title}</h1>
        </div>
      </div>
    </div>
  );
};
