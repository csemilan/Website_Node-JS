import React from "react";
import Custom_Management from "./Custom_Management";
import founder from "../assets/founder.jpeg";

const Founder = () => {
  return (
    <div>
      <Custom_Management
        image={founder}
        name="Late Shri Natthu Singh"
        designation="Ex-Minister, Founder, SNS Trust"
        content="Following the ideology 'Learn, Evolve and Grow', the foundation has been laid keeping in mindthe aspirational aspect which suggests,in order to evolve,one must continuously learnandwith learning comes growth."
      />
    </div>
  );
};

export default Founder;
