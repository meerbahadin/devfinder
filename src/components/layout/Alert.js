import React from 'react';
import { FiAlertCircle } from "react-icons/fi";

const Alert = ({ alert }) => {
    return (
        alert !== null && (
         <div className={`alert alert-${alert.type}`}>
         <FiAlertCircle/>  {alert.msg} 
         </div>
    )
    )
}

export default Alert;