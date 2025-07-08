import React,{ useRef } from 'react'
import Title from './Title'
import emailjs from '@emailjs/browser'
import {MdOutlineMail} from 'react-icons/md'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TbBrandTelegram } from 'react-icons/tb'
const Contact = () => {
  const form = useRef()
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_yutqxp8', 'template_7ukvip4', form.current, 'vEjBKvvVFAosxOS7A')     
  //     .then((result) => {
  //         window.location.reload(false)
  //         alert("Message Successfully sent!")
  //         e.preventDefault();
  //     }, (error) => {
  //         alert("Failed to Send Message")
  //     }
  //   )
  // }
    return (
        <section id='contact' className='py-24 text-center'>
          <div className='container px-10'>
          <div className='text-3xl sm:text-4xl mb-8 font-bold'>
            Get In <span className='pl-1 text-primary'>Touch</span>
          </div> 
          <div className='mb-8 max-w-2xl mx-auto text-lg'>
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </div>
          <div className='container max-w-5xl text-center mx-auto
          grid grid-cols-1 md:grid-cols-2 gap-12
          '>
            <div className="gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="justify-center">
              <div className="flex items-start my-6 py-2 px-4 hover:scale-105 duration-300
               bg-slate-200 dark:bg-slate-800 rounded-xl">
                <div className="px-4 py-4">
                  <MdOutlineMail className='text-primary text-2xl'/>
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:mohammed.abdo1916@gmail.com"
                    className="text-xs sm:text-base hover:text-primary transition-colors"
                  >
                    mohammed.abdo1916@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start my-4 py-2 px-4 hover:scale-105 duration-300
               bg-slate-200 dark:bg-slate-800 rounded-xl">
                  <div className='px-4 py-4'>
                  <FiPhone className='text-primary text-2xl' />
                  </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+249112408191"
                    className="hover:text-primary transition-colors"
                  >
                    +249 112 40 8191
                  </a>
                </div>
              </div>
              <div className="flex items-start my-4 py-2 px-4 hover:scale-105 duration-300
              bg-slate-200 dark:bg-slate-800 rounded-xl">
                  <div className='px-4 py-4'>
                  <FiMapPin className='text-primary text-2xl'/>
                  </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="hover:text-primary transition-colors">
                    Kassla, Sudan
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center text-2xl">
                <a href="https://www.linkedin.com/in/mohammed-abdo-92249a247" target="_blank" rel="noopener noreferrer" >
                  <FaLinkedin />
                </a>
                <a href="https://x.com/Mohamme05936302?t=99PLgceH8BqbQCXSaUH77w&s=09" target="_blank" rel="noopener noreferrer" >
                  <FaXTwitter />
                </a>
                <a href="https://www.instagram.com/moha_abdo4?igsh=cjFnZzFyand1Z3px" target="_blank" rel="noopener noreferrer" >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          </div>

                  <form className="px-8 pt-8 pb-10 rounded-lg shadow-xs bg-slate-200 dark:bg-slate-800 
                  transition-colors" ref={form} 
                //    onSubmit={sendEmail}
                  >
                    <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                    {/* <ul className='list-unstyled'> */}
                      {/* <div className="row"> */}
                      <div className=''>
                        <label htmlFor="name" className='block text-sm font-medium mb-2'>
                          Your Name
                        </label>
                        <input type="text" id='name' className="w-full border-slate-300 border-2 rounded-md dark:bg-black
                         px-4 py-3 focus:outline-none bg-transparent" name="name" placeholder="Name" required/>
                      </div>
                      <div className='my-4'>
                        <label htmlFor="email" className='block text-sm font-medium mb-2'>
                          Your Email
                        </label>
                        <input type="email" id='email'
                        className="w-full border-slate-300 border-2 px-4 py-3 bg-transparent dark:bg-black
                        focus:outline-none  rounded-md"
                         name="email" placeholder="Email" required/>
                      </div>
                      {/* </div> */}
                      <div className='mb-4'>
                        <label htmlFor="message"
                        className='block text-sm font-medium mb-2'>
                          Your Message
                        </label>
                        <textarea placeholder="Message" id='message'
                        className="border-slate-300 border-2 rounded-md w-full px-4 py-3 bg-transparent dark:bg-black
                        focus:outline-none" 
                        name="message" required></textarea>
                      </div>
                        <button type="submit" className='flex justify-center w-full bg-primary py-2 rounded-3xl text-white hover:scale-105 duration-300' >
                        Send Message <span className='ml-2 text-xl pt-1'><TbBrandTelegram /> </span> 
                           </button>
                  </form>

        </div>
        </div>
        </section>
    )
}

export default Contact