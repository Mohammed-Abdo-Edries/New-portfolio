import React from 'react'
import Title from './Title'

const Projects = () => {
    return (
        <div id='projects' className='container px-8 mb-4 h-fit sm:h-[calc(90vh+0px)] text-center'>
            <Title title="some of my projects"/>
            <div className='sm:flex mt-4 sm:mx-auto text-center'>
                <div className="h-60 w-80 mx-2 py-4 px-4 mb-4 rounded-lg border-2 border-black dark:border-white dark:text-white">
                    Facebook clone
                    </div>
                <div className="h-60 w-80 mx-2 py-4 px-4 mb-4 rounded-lg border-2 border-black dark:border-white dark:text-white">
                   <div className='mb-8'>
                    ecommerce website
                   </div>
                <a href="https://luxury-t0tu.onrender.com" target="_blank" rel="noopener noreferrer">Visit</a>
                    </div>
                {/* <div className="card"></div> */}
            </div>
        </div>
    )
}

export default Projects