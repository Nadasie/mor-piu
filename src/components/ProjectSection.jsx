import { Description } from '@radix-ui/react-toast'
import { SquareArrowUpRight } from 'lucide-react'
import React from 'react'

const projects =[
  {
    id:1, 
    title:"Clarity",
    Description:"A modern and responsive online learning platform for exploring and accessing educational courses with a clean and user-friendly design.",
    Image:"./projects/Clarity.png",
    tags:["Bootstrap","HTML","JavaScript"],
    demoUrl:"https://project-cors-8aghiqod4-1-f122.vercel.app/",
},
{
    id:2, 
    title:"ContactHub",
    Description:"A responsive landing page built with JavaScript, featuring a modern design and smooth user experience.",
    Image:"./projects/ContactHub.png",
    tags:["Bootstrap","HTML","JavaScript"],
    demoUrl:"https://nadasie.github.io/Curds/",
},
{
    id:3, 
    title:"Game Arena",
    Description:"A gaming landing page developed using Bootstrap, focusing on responsive design, modern UI, and easy navigation.",
    Image:"./projects/Game-Arena.png",
    tags:["Bootstrap","HTML","JavaScript"],
    demoUrl:"https://streaming-gaming-bootstrap.vercel.app/",
},
{
    id:4, 
    title:"The UX Review",
    Description:"A responsive landing page built with HTML and CSS, showcasing a clean, modern, and user-friendly design.",
    Image:"./projects/The-UX-Review.png",
    tags:["css","HTML"],
    demoUrl:"https://the-ux-review-blog-sand.vercel.app/",
}
]

export default function ProjectSection() {
  return (
    <section id='projects' className='py-24 px-4 relative'>
       <div className=' container mx-auto max-w-5xl'>
         <h2 className=' text-3xl md:text-4xl font-bold mb-4 text-center'> {""} Featured <span className=' text-primary'> Project </span></h2>

         <p className=' text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
         </p>

         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project,key)=>(
            <div key={key} 
            className=' group bg-card rounded-lg overflow-hidden shadow-2xs card-hover'
            >
             <div className=' h-48 overflow-hidden'>
              <img className=' w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
              src={project.Image} alt={project.title} />
             </div>

             <div className=' p-6'>
              <div className=' flex flex-wrap gap-2 md-4 '>
                 {project.tags.map((tag) => (
                  <span className=' px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground '>
                    {tag}
                    </span>
                 ))}
                 <div className=' flex justify-between items-center'>
                <div className='flex space-x-3'>
                  <a href={project.demoUrl} 
                  className='text-foreground/80 hover:text-primary transition-colors duration-300'
                  target='_blank'
                  >
                       <SquareArrowUpRight size={20}/>
                  </a>
                </div>
                </div>
              </div>
             
              <h3 className=' text-xl font-semibold mb-1 pt-2'>{project.title}</h3>
              <p className='text-muted-foreground text-sm mb-4'>{project.Description}</p>
              

              </div>
            </div>
          ))}
         </div>

             <div className=" text-center mt-12">
              <a href="https://github.com/Nadasie"
               target='_blank'
               className=' cosmic-button w-fit items-center mx-auto gap-2'>Check My Github </a>
             </div>

       </div>
    </section>
  )
}
