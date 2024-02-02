import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectSections from "./component/ProjectSections";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className ="container mx-auto px-12 py-4 ">
      <HeroSection />
      <AboutSection />
      <ProjectSections/>
      <EmailSection/>
      </div>
      <Footer />
    </main>
  );
}
