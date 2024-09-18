import React from 'react'
import Title from './Title'

const Projects = () => {
    return (
        <div id='#projects' className='container px-8 mb-4 mx-16 text-center'>
            <Title title="Projects"/>
            <div className='sm:flex mt-4'>
                <div className="h-60 w-80 mx-2 py-4 px-4 mb-4 rounded-lg border-2 border-black">
                    Facebook clone
                    </div>
                <div className="h-60 w-80 mx-2 py-4 px-4 mb-4 rounded-lg border-2 border-black">
                   <div className='mb-8'>
                    ecommerce website
                   </div>
                <a href="https://luxury-t0tu.onrender.com" target="_blank" rel="noopener noreferrer">Visit</a>
                    </div>
                <div className="h-60 w-80 mx-2 py-4 px-4 rounded-lg border-2 border-black">
                    <div className='mb-8'>
                    Restrunt website
                    </div>
                    <a href="https://delicious-nine.vercel.app" target="_blank" rel="noopener noreferrer">Visit</a>
                </div>
                {/* <div className="card"></div> */}
            </div>
        </div>
    )
}

export default Projects