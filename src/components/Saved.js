import React from 'react'
import { useSelector } from 'react-redux'
import Color from './shared/Color'

//Styles
import Styles from "./Saved.module.css"

const Saved = () => {

    const saved = useSelector(state => state.savedReduserState)

    return (
        <div className={Styles.container}>
            <div className={Styles.saved}>
                {
                    saved.map(item => <Color key={item} color={item} /> )
                }
            </div>
        </div>
    )
}

export default Saved