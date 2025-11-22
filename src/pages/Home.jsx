import React from 'react'
import StarBackground from '@/components/StarBackground'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        { /* Theme Toggle */ }
        

        { /* Background Effects */ } 
        <StarBackground />

        { /* Navbar */ }
        <NavBar />


        { /* Main Content */ }
        <main>
          <HeroSection />
          <AboutSection />
        </main>


        { /* Footer */ }
    </div>
  )
}

export default Home