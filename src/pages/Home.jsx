import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar';
import HeroSections from '../components/HeroSections';
import AboutMe from '../components/AboutMe';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


export default function Home() {
  return (
     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle/>
       {/* background effects */}
      <StarBackground/>
       {/* navbar */}
       <Navbar/>
       {/* main content */}
       <main>
        <HeroSections/>
        <AboutMe/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
       </main>
       {/* footer */}
       <Footer/>
    </div>

  )
}
