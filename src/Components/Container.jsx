import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
const Container = ({ children, delay }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });
    const mainControls = useAnimation();
    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView]);
    return (
        <div ref={ref}>
            <motion.div variants={{ hidden: { x: "-100%", opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                initial="hidden" animate={mainControls} transition={{ duration: 0.2, delay, type: "spring", stiffness: 50 }}
                whileInView="visible"  >
                {children}
            </motion.div>
        </div>
    )
}

export default Container