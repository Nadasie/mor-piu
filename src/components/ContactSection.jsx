import { Mail, MapPin, Send } from 'lucide-react'
import React, { useState } from 'react'
import { FaFacebook, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { cn } from '../lib/utils'
import { useToast } from '../hooks/use-toast'
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  
    const {toast} = useToast();

    const [isSubmitting,setSubmitting] = useState (false);

   const handleSubmit = async (e) => {
  e.preventDefault();

  setSubmitting(true);

  const form = e.target;

  try {
    await emailjs.sendForm(
      "service_yhgrs0i",
      "template_hlsaj8m",
      form,
      "1Z-ru7FXRWv6Q2vu6"
    );

    toast({
      title: "Message sent!",
      description: "Thank you for your message.",
    });

    form.reset();
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message.",
    });
  }

  setSubmitting(false);
};

  return (
    <section
    id='contact'
    className=' py-24 px4 relative bg-secondary/30'
    >
   <div className=' container mx-auto max-w-5xl'>
     <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
        Get In <span className='text-primary'>Touch</span>
    </h2>

    <p className=' text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
      Have a project in mind or want to collaborate ? Feet free to reach out I'm always open to discussing new opportunities.
    </p>

    <div className=' grid grid-cols-1 md:grid-cols-2 gap-12'>
      <div className='space-y-8'>
        <h3 className=' text-2xl font-semibold mb-6'>
            Contact Information
        </h3>
            <div className='space-y-6 justify-center'>
                <div className=' flex items-start space-x-4'>
                    <div className=' p-3 rounded-full bg-primary/10'>
                    <Mail className=' h-6 w-6 text-primary'/>{""}
                    </div>
                    <div>
                        <h4 className=' font-medium flex justify-start'> Email </h4>
                        <a href=" mailto:mnada835@gmail.com" className=' text-muted-foreground hover:text-primary transition-colors'>
                           mnada835@gmail.com
                        </a>
                    </div>
                </div>

                <div className=' flex items-start space-x-4'>
                    <div className=' p-3 rounded-full bg-primary/10'>
                    <FaLinkedinIn className=' h-6 w-6 text-primary'/>{""}
                    </div>
                    <div>
                        <h4 className=' font-medium flex justify-start'>linkedin</h4>
                        <a href=" https://www.linkedin.com/in/nada-mohamed-561802370/"
                        target='_blank'
                        className=' text-muted-foreground hover:text-primary transition-colors'>
                           linkedin.com
                        </a>
                    </div>
                </div>

                <div className=' flex items-start space-x-4'>
                    <div className=' p-3 rounded-full bg-primary/10'>
                    <FaWhatsapp className=' h-6 w-6 text-primary'/> {""}
                    </div>
                    <div>
                        <h4 className=' font-medium flex justify-start'>WhatsApp</h4>
                        <a href="https://wa.me/201101023925" className=' text-muted-foreground hover:text-primary transition-colors'>
                           Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div className=' flex items-start space-x-4'>
                    <div className=' p-3 rounded-full bg-primary/10'>
                    <MapPin className=' h-6 w-6 text-primary'/>{""}
                    </div>
                    <div>
                        <h4 className=' font-medium flex justify-start'> Email </h4>
                        <a className=' text-muted-foreground hover:text-primary transition-colors'>
                           Based in Cairo, Egypt
                        </a>
                    </div>
                </div>
            </div>

         <div className='pt-8'>
          <h4 className=' pb-2'>Connect With Me</h4>
          <div className='flex space-x-4 justify-center'>
            <a href="https://www.facebook.com/na.da.925279?locale=ar_AR" 
            target="_blank"
            className='text-muted-foreground hover:text-primary transition-colors'
            >
            <FaFacebook size={20}/>
            </a>
            <a href="https://www.instagram.com/nd_iaa.sie/"
             target="_blank" 
            className='text-muted-foreground hover:text-primary transition-colors'
            >
            <PiInstagramLogoLight size={20}/>
            </a>
            <a href="https://github.com/Nadasie"
             target="_blank" 
            className='text-muted-foreground hover:text-primary transition-colors'
            >
            <GrGithub size={20}/>
            </a>
          </div>
         </div>
      </div>
        
        <div className=' bg-card p-8 rounded-lg shadow-xs' >
          <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

          <form onSubmit={handleSubmit}>
            <div>
                <label 
                htmlFor="name"
                className='text-sm font-medium mb-2 flex justify-start'
                >
                    {""}
                    Your Name : </label>
                <input type="text" 
                id='name' 
                name='name'
                required
                className=' w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                placeholder='Enter Your Name . . . . '
                />
            </div>

            <div>
                <label 
                htmlFor="email"
                className='text-sm font-medium mb-2 flex justify-start mt-2'
                >
                    {""}
                    Your Email : </label>
                <input
                type="email" 
                id='email' 
                name='email'
                required
                className=' w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                placeholder='yourEmail@gmail.com . . . .'
                />
            </div>

            <div>
                <label 
                htmlFor="message"
                className='text-sm font-medium mb-2 flex justify-start mt-2' 
                >
                    {""}
                    Your Message : </label>
                <textarea 
                id='message' 
                name='message'
                required
                className=' w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                placeholder="Hello , I'd like to talk about . . . ."
                />
            </div>

                <button 
                type='submit' 
                disabled={isSubmitting}
                className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2 mt-4",

                )}>
                   {isSubmitting ? "Sending . . . " : "Send Message"}
               <Send size={16}/>
                </button>
            
          </form>
        </div>
       
    </div>

   </div>
    </section>
  )
}
