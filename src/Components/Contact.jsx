import React from 'react'
import Title from './Title'

const Contact = () => {
    return (
        <div id='contact' className='h-96 mx-auto text-center mb-8'>
            <Title title="Contact Me" /> 
            <div className="container">
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
        </div>
    )
}

export default Contact