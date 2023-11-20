import { motion, AnimatePresence } from "framer-motion"
const Title = (title) => {
    return (
        <AnimatePresence>
            <motion.div key="title" mode='wait'
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 250 }}
                exit={{ y: -150, opacity: 0 }}
                data-title={title.title}>
                <h1>{title.title}</h1>
            </motion.div>
        </AnimatePresence>
    )
}
export default Title;