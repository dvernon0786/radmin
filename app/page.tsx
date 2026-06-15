import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhoWeServe from "@/components/WhoWeServe";
import WhyRadmin from "@/components/WhyRadmin";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhoWeServe />
        <WhyRadmin />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
