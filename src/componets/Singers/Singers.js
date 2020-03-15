import React from 'react';
import './Singers.css';
import fakeData from '../../fakeData/index';
import {useState} from 'react';
import User from '../User/User';
import Hire from '../Hire/Hire';

const Singers = () => {
    const [users, setUsers] = useState(fakeData);
    const[singer, setSinger] = useState([]);

    const handleHireme = (user) => {
        console.log("user added")
        const newSinger = [...singer,user]
        setSinger(newSinger);
    }
    


    return (
        <div className="main-container">
            <div className="grand-info">
            
                <Hire singer = {singer}></Hire>
                
            </div>

            <div className="user-info">
      
 
                {
                    users.map(user => <User 
                    handleHireme = {handleHireme}
                    user = {user}>

                    </User>)
                }
               
            </div>
            
            
                
        </div>
    );
};

export default Singers;