import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMicrophoneAlt} from '@fortawesome/free-solid-svg-icons'


const Hire = (props) => {
    const singer = props.singer;
    const totalRem= singer.reduce((total,user) => total + user.salary,0)
    

    return (
        <div className="top-image"> 
           
           <h1><FontAwesomeIcon icon={faMicrophoneAlt} ></FontAwesomeIcon></h1>
            <br/>
           
            <h4>Grand summery </h4>
            <p> Total singer :{singer.length}</p>
            <p>Remuneration :{totalRem}</p>
          
            
            
        </div>
    );
};

export default Hire;