import React from 'react'
import Title from './Title'

const Contact = () => {
    return (
        <section id='contact' className='py-24 px-4 text-center mb-8'>
          <div className='text-3xl sm:text-4xl mb-8 font-bold'>
            Get In <span className='pl-1 text-primary'>Touch</span>
          </div> 
          <div className='mb-12 max-w-2xl mx-auto'>
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </div>
          <div className='container max-w-5xl text-center mx-auto
          grid grid-cols-1 md:grid-cols-2 gap-12
          '>
          <form className="form"
        //    onSubmit={sendEmail}
           >
            <ul className='list-unstyled'>
              <div className="row">
              <li className='col-sm-5 col-md-6 col-lg-6'>
                <input type="text" className="border-black border-2 rounded-md mt-4 mb-2 w-80 px-2 py-1" name="name" placeholder="Name" required/>
              </li>
              <li className='col-sm-5 col-md-6 col-lg-6'>
                <input type="email" className="border-black border-2 rounded-md my-2 w-80 px-2 py-1" name="email" placeholder="Email" required/>
              </li>
              </div>
              <li>
                <textarea placeholder="Message" className="border-black border-2 rounded-md my-2 w-80 px-2 py-1" name="message" required></textarea>
              </li>
              <li className='button'>
                <input type="submit" className='send' value="SEND" />
              </li>
            </ul>
          </form>
        </div>
        </section>
    )
}

export default Contact