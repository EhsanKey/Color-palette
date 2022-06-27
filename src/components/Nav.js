import React from 'react'

import {Link} from "react-router-dom"

//Styles
import Styles from "./Nav.module.css"

const Nav = () => {
    return (
        <nav>
            <Link to="/colors">Colors</Link>
            <Link to="/saved">Saved</Link>
        </nav>
    )
}

export default Nav