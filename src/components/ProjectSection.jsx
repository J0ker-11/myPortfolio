import React from 'react'

const ProjectSection = () => {

    const projects = [
        {
            id: 1,
            title: "Landing Page",
            description: "A beautiful Landing page using React and tailwindcss",
            image: "",
            tags: ["React", "Tailwindcss"],
            demoUrl: "#",
            githubUrl: "#",
        },
        {
            id: 2,
            title: "Landing Page",
            description: "A beautiful Landing page using React and tailwindcss",
            image: "",
            tags: ["React", "Tailwindcss"],
            demoUrl: "#",
            githubUrl: "#",
        },
        {
            id: 3,
            title: "Landing Page",
            description: "A beautiful Landing page using React and tailwindcss",
            image: "",
            tags: ["React", "Tailwindcss"],
            demoUrl: "#",
            githubUrl: "#",
        },
    ]
  return (
    <section id='projects' className='relative py-24 px-4'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured<span className='text-primary'> Projects </span></h2>

        </div>
    </section>
  )
}

export default ProjectSection