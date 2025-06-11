import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Security from "./components/Security";
import AthenaPage from "./athena/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AthenaPage />
      <Pricing />
      <Security />
      <ContactUs />
      <Footer />
    </>
  );
}
