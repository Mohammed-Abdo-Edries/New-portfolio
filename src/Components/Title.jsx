import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
const Title = (title) => {
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
            <motion.div className="title text-3xl sm:text-6xl font-bold text-primary" variants={{ hidden: { x: "-100vh" }, visible: { x: 0 } }}
                initial="hidden" animate={mainControls}
                transition={{ duration: 0.2,dela3y:.5, type: "spring", stiffness: 30 }}
                whileInView="visible"
                data-title={title.title}>
                <h1>{title.title}</h1>
            </motion.div>
        </div>
    )
}
export default Title;