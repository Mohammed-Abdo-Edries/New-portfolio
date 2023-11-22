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
            <motion.div className="title" variants={{ hidden: { y: -150 }, visible: { y: 0 } }}
                initial="hidden" animate={mainControls}
                transition={{ duration: 0.2, type: "spring", stiffness: 250 }}
                whileInView="visible"
                data-title={title.title}>
                <h1>{title.title}</h1>
            </motion.div>
        </div>
    )
}
export default Title;