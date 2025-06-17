import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Security from "./components/Security";
import AthenaPage from "./athena/page";
import About from "./components/About";
import ParallaxWrapper from "./components/ParallaxWrapper";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ParallaxWrapper offset={30}>
        <About />
      </ParallaxWrapper>
      <ParallaxWrapper offset={50}>
        <Features />
      </ParallaxWrapper>
      <ParallaxWrapper offset={40}>
        <AthenaPage />
      </ParallaxWrapper>
      <ParallaxWrapper offset={35}>
        <Security />
      </ParallaxWrapper>
      <ParallaxWrapper offset={45}>
        <Pricing />
      </ParallaxWrapper>
      <ParallaxWrapper offset={25}>
        <ContactUs />
      </ParallaxWrapper>
    </PageTransition>
  );
}
