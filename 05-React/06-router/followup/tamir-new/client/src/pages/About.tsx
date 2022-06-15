import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
