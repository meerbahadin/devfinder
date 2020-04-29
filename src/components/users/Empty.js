import React from 'react';
import { motion } from "framer-motion";

const Empty = () => {
    return (
        <motion.div className='text-center mt-4 border-bottom border-danger p-4 rounded' initial={{scale : 0}} animate={{scale : 1}} transition={{duration:.2}}>
           No user found by that username sorry :( search again!
        </motion.div>
    )
}

export default Empty;