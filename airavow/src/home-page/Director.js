import React from "react";
import Custom_Management from "../pages/Custom_Management";
import director1 from "../assets/director1.jpg";

const Director = () => {
  return (
    <div>
      <Custom_Management
        image={director1}
        name="Mr.Jaivind Singh"
        designation="Director, SNS Global School"
        content="Our prime focus is -'Leave No Child Behind'.We will primarily focus on to teach students to make good decisions and be responsible, so they are able to do thingswithout depending ontheirpeers or family members infuture."
      />
    </div>
  );
};

export default Director;
