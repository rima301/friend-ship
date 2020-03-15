import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMicrophone, faMapMarker,faPhoneSquare} from '@fortawesome/free-solid-svg-icons'

import './User.css';

const User = (props) => {
    console.log(props.user);
    const { image, name, salary, address, phone, email } = props.user;
    return (
        <div>
            <div className="user">
                <div>
                    <img src={image} alt="" />
                    <br />
                    <button 
                        className="btn"
                        onClick ={() => props.handleHireme(props.user)}>
                            <FontAwesomeIcon icon={faMicrophone} />Hire Me</button>
                </div>

                <div className="name-display">
                    <h2>{name}</h2>
                    <h3><small>Remuneration</small></h3>
                    <h4>${salary}</h4>
                </div>

                <div className="user-detail" >
                    <h5><FontAwesomeIcon icon={faEnvelopeOpen} />email: {email}</h5>
                    <h5><FontAwesomeIcon icon={faPhoneSquare} />Phone: {phone}</h5>
                    <h5><FontAwesomeIcon icon={faMapMarker} />Address: {address}</h5>


                </div>


            </div>
            <div>

            </div>

        </div>
    );
};

export default User;