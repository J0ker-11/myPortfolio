import React from 'react'
import GrowMetra from '../../public/projects/GrowMetra.png'
import TrustXpect from '../../public/projects/TrustXpect.png'
import JejeOla from '../../public/projects/JejeOla.png'
import { ArrowRight, ExternalLink, Github} from 'lucide-react'

const ProjectSection = () => {

    const projects = [
        {
            id: 1,
            title: "Landing Page",
            description: "A beautiful Landing page using React and tailwindcss",
            image: GrowMetra,
            tags: ["React", "Tailwindcss"],
            demoUrl: "https://grow-metra11.vercel.app/",
            githubUrl: "#",
        },
        {
            id: 2,
            title: "Landing Page",
            description: "A beautiful Landing page using React and tailwindcss",
            image: TrustXpect,
            tags: ["React", "Tailwindcss"],
            demoUrl: "https://trustxpect.vercel.app/",
            githubUrl: "#",
        },
        {
            id: 3,
            title: "Landing Page",
            description: "A beautiful Landing page using HTML and CSS",
            image: JejeOla,
            tags: ["HTML", "CSS"],
            demoUrl: "https://jeje-ola-properties.vercel.app/",
            githubUrl: "#",
        },
    ]
  return (
    <section id='projects' className='relative py-24 px-4'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured<span className='text-primary'> Projects </span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Here are some of my recent projects. Each project was crafted with attention to detail, performance, and user experience.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {projects.map((project) => (
                    <div key={project.id} className='group bg-card rounded-lg overflow-hidden '>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        </div>
                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tags.map((tag) => (
                                    <span className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/50 text-secondary-foreground '>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                        <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                        <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-3'>
                                <a href={project.demoUrl} className='text-foreground/80 hover:text-primary transition-colors duration-300' target='_blank'>
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} className='text-foreground/80 hover:text-primary transition-colors duration-300' target='_blank'>
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-12'>
                <a href="https://www.github.com/j0ker_11" className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank'>Check my Github <ArrowRight /></a>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection