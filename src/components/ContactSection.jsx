import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from 'lucide-react'
import React from 'react'

const ContactSection = () => {

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> Get In 
            <span className='text-primary'> Touch </span>
        </h2>
        <p className='text-center mx-auto text-muted-foreground mb-12 max-w-2xl'>
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always to discussing new opportunities.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8 '>
                <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-y-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Mail className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='medium'>Email</h4>
                            <a href="mailto:hazantijani123@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                hazantijani123@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start space-y-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Phone className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='medium'>Phone</h4>
                            <a href="tel:09083273627" className='text-muted-foreground hover:text-primary transition-colors'>
                                09083273627
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start space-y-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <MapPin className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='medium'>Location</h4>
                            <a href="" className='text-muted-foreground hover:text-primary transition-colors'>
                                Abuja, Nigeria.
                            </a>
                        </div>
                    </div>
                </div>

                <div className='pt-8'>
                    <h4 className='font-medium mb-4'>Connect With Me</h4>
                    <div className='flex space-x-4 justify-center'>
                            <a href="#" target='_blank'>
                                <Linkedin />
                            </a>
                            <a href="#" target='_blank'>
                                <Twitter />
                            </a>
                            <a href="#" target='_blank'>
                                <Instagram />
                            </a>
                            <a href="#" target='_blank'>
                                <Twitch />
                            </a>
                    </div>
                </div>
            </div>

            <div className='bg-card p-8 rounded-lg shadow-xs'>
                <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                <form action="" className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-left text-sm font-medium mb-2'>Your Name</label>
                        <input type="text" id='name' name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Tijani Hassan...'/>
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-left text-sm font-medium mb-2'>Your Email</label>
                        <input type="email" id='email' name='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='info@gmail.com'/>
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-left text-sm font-medium mb-2'>Your Message</label>
                        <textarea id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'  placeholder="Hello,i'd like to talk about... "/>
                    </div>

                    <button type='submit' className='cosmic-button w-full flex justify-center items-center gap-2'>
                        Send Message <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}

export default ContactSection