import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Differentials from "@/components/Differentials";
import ServiceArea from "@/components/ServiceArea";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <HowItWorks />
    <Pricing />
    <Differentials />
    <ServiceArea />
    <FinalCTA />
    <Footer />
    <WhatsAppButton variant="floating" />
  </>
);

export default Index;
