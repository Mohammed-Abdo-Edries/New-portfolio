import { motion } from "framer-motion"
const Container = ({ children, delay, variants }) => {
    
    return (
        <div >
            <motion.div variants={variants}
                initial="hidden" animate="visible" transition={{ delay, type: "spring", 
                    stiffness: 30 }}  >
                {children}
            </motion.div>
        </div>
    )
}

export default Container