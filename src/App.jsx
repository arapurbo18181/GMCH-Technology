import "./App.css";
import {
  About,
  Contact,
  Services,
  Stats,
  Team,
  Welcome,
  WhyUs
} from "./components";

function App() {
  return (
    <div className="bg-gray-50 space-y-52">
      <About />
      <Welcome/>
        <Services />
        <WhyUs />
        <Stats />
        <Team />
        <Contact />
    </div>
  );
}

export default App;
