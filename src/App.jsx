import "./App.css";
import AboutUs from "./component/about/AboutUs";
import Client from "./component/client/Client";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import IntroSection from "./component/introSection/IntroSection";
import OurMission from "./component/mission/OurMission";
import Services from "./component/services/Services";
import OurTeam from "./component/team/OurTeam";

const services = [
  {
    title: "Supply Chain/Line",
    desc: "Specialises in Supply Chain/Line",
    icon: "🚚",
  },
  {
    title: "Live Tracking",
    desc: "Live tracking of all vehicles",
    icon: "📡",
  },
  {
    title: "Secure Shipping",
    desc: "Secure shipping",
    icon: "🔒",
  },
  {
    title: "Capacity & Flexibility",
    desc: "Large Capacity and Flexibility",
    icon: "📦",
  },
  {
    title: "Timely Delivery",
    desc: "Timely Delivery",
    icon: "⏱️",
  },
  {
    title: "Warehouse Management",
    desc: "Warehouse Management",
    icon: "🏢",
  },
  {
    title: "Competitive Prices",
    desc: "Competitive Prices",
    icon: "💸",
  },
  {
    title: "Future Oriented IT",
    desc: "Use of future oriented IT services",
    icon: "💻",
  },
];

function App() {
  return (
    <div className="main-bg">
      <Header />
      <Hero />
      <IntroSection />
      <OurMission />
      <Services />
      <Client />
      <OurTeam />
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;
