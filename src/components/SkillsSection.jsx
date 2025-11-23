import React from 'react'

const SkillsSection = () => {

    const skills = [
        // Frontend
        {name: 'HTML/CSS', level: 95, category: 'Frontend'},
        {name: 'Javascript', level: 80, category: 'Frontend'},
        {name: 'Tailwindcss', level: 80, category: 'Frontend'},
        {name: 'React.js', level: 80, category: 'Frontend'},
        {name: 'Next.js', level: 80, category: 'Frontend'},

        // Backend 

        // Tools 
        {name: 'Git/GitHub', level: 90, category: 'Tools'},
        {name: 'Vscode', level: 95, category: 'Tools'},
        {name: 'Figma', level: 75, category: 'Tools'},
        {name: 'Framer', level: 70, category: 'Tools'},
    ]

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'>Skills</span>
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {skills.map((skill,key) => (
                    <div key={key} className='bg-card p-6 rounded-lg shadow-xs hover-card'>

                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default SkillsSection