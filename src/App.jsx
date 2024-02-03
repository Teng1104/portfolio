import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ToastContainer } from "react-toastify";
import BannerSection from "./components/BannerSection";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ParticlesComponent from "./components/ParticlesComponent";
import ProjectSection from "./components/ProjectSection";
import ContactMeSection from "./components/ContactMeSection";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { inView: bannerInView, ref: bannerInViewRef } = useInView({ threshold: 0.5 });
  const { inView: projectInView, ref: projectInViewRef } = useInView({ threshold: 0.5 });
  const { inView: contactInView, ref: contactInViewRef } = useInView({ threshold: 0.5 });

  useEffect(() => {
    const scrollHandler = () => {
      if (bannerInView) {
        console.log("User scrolled/navigated to BannerSection");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [bannerInView]);

  useEffect(() => {
    const scrollHandler = () => {
      if (projectInView) {
        console.log("User scrolled/navigated to ProjectSection");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [projectInView]);

  useEffect(() => {
    const scrollHandler = () => {
      if (contactInView) {
        console.log("User scrolled/navigated to ContactMeSection");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [contactInView]);

  return (
    <>
      <NavBar />
      <motion.div ref={bannerInViewRef} initial="hidden" animate={bannerInView ? "visible" : "hidden"} variants={animationVariants}>
        <BannerSection />
      </motion.div>
      <AboutMeSection />
      <motion.div ref={projectInViewRef} initial="hidden" animate={projectInView ? "visible" : "hidden"} variants={animationVariants}>
        <ProjectSection />
      </motion.div>
      <motion.div ref={contactInViewRef} initial="hidden" animate={contactInView ? "visible" : "hidden"} variants={animationVariants}>
        <ContactMeSection />
      </motion.div>
      <Footer />
      <ParticlesComponent />
      <ToastContainer />
    </>
  );
}

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
