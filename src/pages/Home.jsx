import React from "react";
import { About, Contact, Services, Stats, Team, Welcome, WhyUs } from "../components";

const Home = () => {
  return (
    <div className="bg-gray-50 space-y-52">
      <About />
      <Welcome />
      <Services />
      <WhyUs />
      <Stats />
      <Team />
      <Contact />
    </div>
  );
};
export default Home
