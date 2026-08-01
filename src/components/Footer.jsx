import { ArrowUp } from 'lucide-react'
import React from 'react'
import { data } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className=' py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between'>
        {" "}
        <p
         className='text-sm text-muted-foreground'>
        &copy;{new Date().getFullYear} Nada.co.All rights reserved .
        {" "}
        </p>
        <a 
        className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'
        href="#hero">
            <ArrowUp size={20}/>
        </a>
    </footer>
  )
}
