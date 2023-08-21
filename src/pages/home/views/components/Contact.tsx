import Assets from "../../../../assets";

const Contact = () => {
  return (
    <div
      id="contact"
      className="grid md:grid-cols-2 grid-cols-1 px-5 md:px-0 items-center justify-between"
    >
      <img src={Assets.ContactUs} alt="" />
      <div className="">
        <h1 className="text-3xl text-center font-semibold barlow mb-3">
          Contact Us
        </h1>
        <p className="text-center">
          VividTech Hub is your gateway to innovate digital solutions in Jos,
          Plateau State. Let's collaborate to shape a vibrant digital future for
          your business.
        </p>
        <div className="">
          <div className="flex my-10 items-center gap-10">
            <img src={Assets.Phone} className="w-10 h-10" alt="" />
            <h3>+234 8033 1199 419</h3>
          </div>
          <div className="flex my-10 items-center gap-10">
            <img src={Assets.Mail} className="w-10 h-10" alt="" />
            <h3>vividtechhub@gmail.com</h3>
          </div>
          <div className="flex my-10 items-center gap-10">
            <img src={Assets.Location} className="w-10 h-10" alt="" />
            <h3>D.D Fantur Close, Sabon Barki, Bukuru Jos Plateau State</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
