import React from "react";
import Custom_Management from "./Custom_Management";
import manager from "../assets/manager.jpg";

const Manager = () => {
  return (
    <div>
      <Custom_Management
        image={manager}
        name="Mr. Govind Singh"
        designation="Manager, SNS Global School"
        content="Ourfocus lies in to make every student a better being which shall help every student to be of service to those with whom they interact. Learning is a lifelong process. Enjoy it!"
      />
    </div>
  );
};

export default Manager;
