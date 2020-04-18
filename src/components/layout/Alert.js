import React ,{useContext}from 'react';
import { FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";

import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
         <motion.div className={`alert alert-${alert.type}`} initial={{scale : 0}} animate={{scale : 1}} transition={{duration:.2}}>
         <FiAlertCircle/>  {alert.msg} 
         </motion.div>
    )
    )
}

export default Alert;