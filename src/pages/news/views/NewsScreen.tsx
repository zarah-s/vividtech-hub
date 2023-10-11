import Assets from "../../../assets";
import NavBar from "../../../common/components/nav/NavBar";

const NewsScreen = () => {
  return (
    <div>
      <NavBar activeTab="News" />
      <div className="mt-20 ">
        <h1 className="text-5xl font-semibold my-5 text-center text-primary">
          News Letters
        </h1>
        <div className="flex flex-wrap">
          <img src={Assets.News.news_1} className="h-[80vh] w-1/4" alt="" />
          <img src={Assets.News.news_2} className="h-[80vh]" alt="" />
          <img src={Assets.News.news_3} className="h-[80vh]" alt="" />
          <img src={Assets.News.news_4} className="h-[80vh]" alt="" />
          <img src={Assets.News.news_5} className="h-[80vh]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsScreen;
