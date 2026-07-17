import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
const Title = () => {
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
            <motion.div className="title text-3xl sm:text-6xl font-bold text-primary" variants={{
                hidden: { opacity: 0 },
        visible: {opacity: 1 },
        exit: { opacity: 0}
            }}
                initial="hidden" animate={mainControls}
                // transition={{ type: "spring", stiffness: 30 }}
                whileInView="visible">
                    
            </motion.div>
        </div>
    )
}
export default Title;