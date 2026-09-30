import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyMNV from "../components/WhyMNV";
import Insights from "../components/Insights";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <WhyMNV/>
        <Insights/>
        <CTA/>
      </main>
      <Footer/>
    </>
  );
}
