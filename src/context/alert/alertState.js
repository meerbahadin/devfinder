import React, { useReducer } from 'react';
import AlertContect from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../Types';

const AlertState = props => {
    const initialState = null;

    const [state , dispatch] = useReducer(AlertReducer , initialState);

    const setAlert = (msg , type) => {

        dispatch({
            type:SET_ALERT,
            payload:{msg , type}
        })
    
        setTimeout(() => {
          dispatch({
              type:REMOVE_ALERT
          })
        }, 5000);
      }
    

    return (
        <AlertContect.Provider value = {{
           alert:state,
           setAlert
        }}>

        {props.children}

        </AlertContect.Provider>
    )
}


export default AlertState;