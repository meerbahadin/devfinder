import React from 'react';
import { FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const Alert = ({ alert }) => {
    return (
        alert !== null && (
         <motion.div className={`alert alert-${alert.type}`} initial={{scale : 0}} animate={{scale : 1}} transition={{duration:.2}}>
         <FiAlertCircle/>  {alert.msg} 
         </motion.div>
    )
    )
}

export default Alert;