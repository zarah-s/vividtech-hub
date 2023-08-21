const WhyChooseUs = () => {
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-2xl text-primary text-center font-semibold">
        Why choose us
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 mt-10 gap-20">
        <TitleContent
          title="LOCAL EXPERTISE"
          content="We are deeply rooted in Jos, Plateau State, and understand and
        understand the local business environment, enabling us to tailor
        solutions to your unique needs."
        />
        <TitleContent
          title="INNOVATION"
          content="We embrace the latest technologies and trends, ensuring that our clients stay ahead of the curve in their ever-evolving digital landscape."
        />
        <TitleContent
          title="QUALITY FOCUS"
          content="Our team is dedicated to delivering top-notch solutions that exceeds expectations with a commitment to excellence in every project."
        />
        <TitleContent
          title="COLLABORATIVE APPROACH"
          content="We believe in the power of collaboration and work closely with our clients to understand their vision and goals."
        />
        <TitleContent
          title="CUSTOMER-CENTRIC"
          content="Customer satisfaction is at the core of our operations. We go the extra mile to make sure our client's needs are met with the utmost professionalism and care."
        />
        <TitleContent
          title="CONTINOUS LEARNING"
          content="We are passionate about knowledge sharing and stay updated on the latest industry trends, transferring this knowledge to our clients."
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;

interface Props {
  title: string;
  content: string;
}
const TitleContent = ({ content, title }: Props) => {
  return (
    <div className="">
      <h1 className="text-xl text-primary text-center font-medium my-3">
        {title}
      </h1>
      <p className="text-gray-600 text-sm text-center">{content}</p>
    </div>
  );
};
