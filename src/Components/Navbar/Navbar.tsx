import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    // @ts-ignore
    return (
        <div id={"navbar"}>
            <div id={"news"} className={"navbar-box"}>
                <FontAwesomeIcon icon={faNewspaper}/>
            </div>
            <div id={"contact"} className={"navbar-box"}>
                <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <div id={"about me"} className={"navbar-box"}>
                <FontAwesomeIcon icon={faUser}/>
            </div>
        </div>
    )
}

export default Navbar;