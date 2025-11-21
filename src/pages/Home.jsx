import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '@/components/StarBackground'
import NavaBar from '@/components/NavaBar'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        { /* Theme Toggle */ }
        

        { /* Background Effects */ } 
        <StarBackground />

        { /* Navbar */ }
        <NavaBar />


        { /* Main Content */ }


        { /* Footer */ }
    </div>
  )
}

export default Home