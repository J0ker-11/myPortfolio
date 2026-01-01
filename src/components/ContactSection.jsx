import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from 'lucide-react'
import React, { useState } from 'react'

const ContactSection = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()

        // name validation
        if (name === "") {
            setError("Please Enter a name")
            return   
        }

        // email validation
        if (!email.includes ("@")) {
            setError("Email is not valid")
            return
        }

        // message validation
        if (message === "") {
            setError("Message is empty")
            return
        }

        setError("")

        const  response = await fetch("https://formspree.io/f/xbdljaqw", {
            method: "POST",
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Accept': 'application/json'
            }
        });
        

        if (response.ok) {
        setIsSuccess(true)
            // Clear the inputs
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setError("Something went wrong with the server.");
        }
    }

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
                            <a href="www.linkedin.com/in/tijani-hassan-048a782a6" target='_blank'>
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
               { isSuccess ? (
                <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-green-500">Success!</h3>
                <p>Your message has been Delivered</p>
                <button onClick={() => setIsSuccess(false)} className="mt-4 text-blue-500 text-sm underline cursor-pointer">
                  Send another?
                </button>
              </div>
               ) : (
                <form  onSubmit={handleRegister}  className='space-y-6'>
                <div>
                    <label htmlFor="name" className='block text-left text-sm font-medium mb-2'>Your Name</label>
                    <input  type="text" value={name} onChange={(e) => setName(e.target.value)} id='name' name='name' className={`w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary  ${error && "border border-red-600"}`} placeholder='Tijani Hassan...'/>
                </div>
                <div>
                    <label htmlFor="email" className='block text-left text-sm font-medium mb-2'>Your Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email'  className={`w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary ${error && "border border-red-600"}`} placeholder='info@gmail.com'/>
                </div>
                <div>
                    <label htmlFor="message" className='block text-left text-sm font-medium mb-2'>Your Message</label>
                    <textarea id='message' 
                     name='message' onChange={(e) => setMessage(e.target.value)}   className={`w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none ${error && "border border-red-600"}`}  placeholder="Hello,i'd like to talk about... "/>
                </div>

                <button type='submit' className='cosmic-button w-full flex justify-center items-center gap-2'>
                    Send Message <Send size={16} />
                </button>
                {error &&
                    <p className='text-red-500 text-sm font-medium'>{error}</p> }
            </form>
               )}
            </div>
        </div>
        </div>
    </section>
  )
}

export default ContactSection