import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
import { skills } from '../data'
import Title from "./Title"
const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });
    const mainControls = useAnimation();
    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView]);
    return (
        <div className='container max-w-screen-2xl text-center h-fit py-4 bg-blue-950 rounded-lg'>
            <Title title="Skills" />
            <div className='container skills grid gap-4 sm:grid-cols-3 my-4 px-4 sm:mx-auto'>
                {skills.map((skill, index) => {
                    return (
                        <motion.div ref={ref} className='bg-white rounded-xl w-full mx-auto py-2' whileInView="visible" variants={{ hidden: { y: "100vh", opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            initial="hidden" animate={mainControls} exit={{ y: "-100%", opacity: 0 }} transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
                            id={skill.id} key={skill.id}>
                            <div className='text-3xl '>{skill.icon}</div>
                            <p className='mt-2'>{skill.text}</p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills