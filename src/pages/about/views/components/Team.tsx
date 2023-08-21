import Assets from "../../../../assets";

const Team = () => {
  return (
    <div className="my-20">
      <h1 className="text-2xl text-primary text-center font-semibold">
        Our Team
      </h1>
      <div className="md:px-20 mt-10">
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center">
          <Member
            src={Assets.David}
            name="DAVID OBADIAH"
            role="DATA ANALYST/CONTENT CREATOR"
          />
          <Member
            src={Assets.Amama}
            name="AMAMA BENN"
            role="DATA ANALYST/CONTENT CREATOR"
          />
          <Member
            src={Assets.Akko}
            name="AKKO SOLOMON"
            role="DATA ANALYST/CONTENT CREATOR"
          />
          <Member
            src={Assets.Clinch}
            name="CLINCH EMMANUEL"
            role="DATA ANALYST/CONTENT CREATOR"
          />
          <Member
            src={Assets.Richard}
            name="RICHARD WAYO"
            role="DATA ANALYST/CONTENT CREATOR"
          />
          <Member
            src={Assets.Victoria}
            name="VICTORIA ISIGUZO"
            role="DATA ANALYST/CONTENT CREATOR"
          />
          <Member
            src={Assets.Clement}
            name="CLEMENT ISAAC"
            role="DATA ANALYST/CONTENT CREATOR"
          />
          <Member
            src={Assets.Victor}
            name="VICTOR FELIX"
            role="DATA ANALYST/CONTENT CREATOR"
          />
          <Member
            src={Assets.Ekomo}
            name="EKOMO EMMANUEL"
            role="DATA ANALYST/CONTENT CREATOR"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;

interface Props {
  src: any;
  name: string;
  role: string;
}

const Member = ({ name, role, src }: Props) => {
  return (
    <div className="">
      <img className="w-full h-80 object-cover" src={src} alt="" />
      <div className="bg-blue-900">
        <h1 className="text-white text-center">{name}</h1>
        <p className="text-sm text-white text-center">{role}</p>
      </div>
    </div>
  );
};
