import React from 'react'
import Title from './Title'

const Projects = () => {
    return (
        <div className='container px-8 mb-4 max-w-screen-2xl text-center'>
            <Title title="Projects"/>
            <div className='sm:flex mt-4'>
                <div className="h-60 w-80 mx-2 mb-4 rounded-lg bg-blue-700">Facebook clone</div>
                <div className="h-60 w-80 mx-2 mb-4 rounded-lg bg-blue-700">ecommerce website</div>
                <div className="h-60 w-80 mx-2 rounded-lg bg-blue-700">Restrunt website</div>
                {/* <div className="card"></div> */}
            </div>
        </div>
    )
}

export default Projects