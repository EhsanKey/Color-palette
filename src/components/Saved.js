import React from 'react'
import { useSelector } from 'react-redux'
import Color from './shared/Color'

//Styles
import Styles from "./Saved.module.css"

const Saved = () => {

    const saved = useSelector(state => state.savedReduserState)

    return (
        <main className={Styles.container}>
            <section className={Styles.saved}>
                {
                    saved.length ? saved.map(item => <Color key={item} color={item} /> ) : 
                    <h2>Color is not available in saved list</h2>
                }
            </section>
        </main>
    )
}

export default Saved