import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
const Container = ({ children, delay, variants }) => {
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
            <motion.div variants={variants}
                initial="hidden" animate={mainControls} transition={{ delay, type: "spring", stiffness: 30 }}
                whileInView="visible"  >
                {children}
            </motion.div>
        </div>
    )
}

export default Container