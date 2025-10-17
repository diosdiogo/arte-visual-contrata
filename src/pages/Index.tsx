import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
