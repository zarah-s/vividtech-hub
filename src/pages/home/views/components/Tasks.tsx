import React from "react";
import Assets from "../../../../assets";
import { motion } from "framer-motion";
const Tasks = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      <WhatWeDoCard
        title="WEB DEVELOPMENT"
        content="Craft stunning and responsive websites that capture your brand essence and engage your audience effectively."
        img={Assets.WebDevelopment}
      />
      <WhatWeDoCard
        title="MOBILE DEVELOPMENT"
        content="Design and develope intuitive mobile applications that cater to the needs of modern consumers."
        img={Assets.MobileDevelopment}
      />
      <WhatWeDoCard
        title="DIGITAL MARKETING"
        content="Create and execute comprehensive digital marketing strategies, including SEO, social media, and content marketing."
        img={Assets.DigitalMarketing}
      />
      <WhatWeDoCard
        title="E-COMMERCE SOLUTIONS"
        content="Build and optimize online stores, enabling businesses to reach customers beyond physical boundaries."
        img={Assets.ECommerce}
      />
      <WhatWeDoCard
        title="GRAPHICS DESIGN"
        content="Develop visually appealing graphics, logos and branding maretials that reflect your identity."
        img={Assets.Graphics}
      />
      <WhatWeDoCard
        title="IT CONSULTING"
        content="Provide expert advice and guidance on IT infrastructure, cybersecurity and technology integration."
        img={Assets.ItConsultation}
      />
      <WhatWeDoCard
        title="TRAINING & WORKSHOP"
        content="Conduct workshops and training sessions to enhance digital literacy and skill development."
        img={Assets.Training}
      />
      <WhatWeDoCard
        title="UI/UX DESIGN"
        content="Create user-centric interfaces and experiences that drive customer satisfaction and engagement."
        img={Assets.Graphics}
      />
      <WhatWeDoCard
        title="CONTENT CREATION AND DEVELOPMENT"
        content="Create high quality, engaging content that drive traffic to your website and convert leads into customers."
        img={Assets.Content}
      />
    </div>
  );
};

export default Tasks;

interface WhatWeDoProps {
  img: any;
  content: string;
  title: string;
}
const WhatWeDoCard = ({ content, img, title }: WhatWeDoProps) => {
  return (
    <motion.div
      initial={{
        translateY: 100,
        opacity: 0,
      }}
      whileInView={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="rounded-xl  shadow-xl border-l-2 my-5 border-r-2 border-b-2"
    >
      <img src={img} className="rounded-t-xl h-64 w-full object-cover" alt="" />
      <div className=" p-5">
        <h3 className="text-xl mb-4 font-medium">{title}</h3>
        <p className="text-sm text-[#333]  ">{content}</p>
      </div>
    </motion.div>
  );
};
