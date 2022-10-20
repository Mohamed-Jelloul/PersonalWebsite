import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from 'react-router-dom';

function Navbar() {

    return (
            <div id={"navbar"}>
                <div id={"news"} className={"navbar-box"}>
                    <Link to="/" className={"links"}>
                        <FontAwesomeIcon icon={faNewspaper}/>
                    </Link>
                </div>
                <div id={"contact"} className={"navbar-box"}>
                    <Link to="/contact" className={"links"}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </Link>
                </div>
                <div id={"about me"} className={"navbar-box"}>
                    <Link to="/home" className={"links"}>
                        <FontAwesomeIcon icon={faUser}/>
                    </Link>
                </div>
            </div>
    )
}

export default Navbar;