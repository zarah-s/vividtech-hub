import Assets from "../../../../assets";

const MissionAndVission = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
      <div className="md:hidden block">
        <h1 className="md:text-6xl text-3xl text-center font-semibold">
          Our Mission and vission Statements
        </h1>
      </div>
      <div className="">
        <img src={Assets.Mission} alt="" />
        <img src={Assets.Vission} alt="" />
      </div>
      <div className="md:block hidden">
        <h1 className="md:text-6xl text-2xl font-semibold">
          Our Mission and vission Statements
        </h1>
      </div>
    </div>
  );
};

export default MissionAndVission;
