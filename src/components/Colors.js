import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

//dispath
import { addColorRecently, getColorsRecently } from '../redux/recently/recentlyAction';
import { getSaved } from '../redux/saved/savedAction';

// functions
import { randomColor } from '../functions/randomColor';

//Components
import Color from './shared/Color';

//Styles
import styled from 'styled-components';
import Styles from "./Colors.module.css"

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.color};
    height: calc(100vh - 50px);
    @media screen and (max-width: 576px) {
        flex-direction: column-reverse;
    }

`

const Colors = () => {

    const dispatch = useDispatch()
    const colors = useSelector(state => state.recentlyReduserState)
    
    const [color, setColor] = useState("");
    const [clickColor, setClickColor] = useState('');

    useEffect(() => {
        if (!localStorage.getItem("getSaved")) localStorage.setItem("getSaved", JSON.stringify([]))
        if (!localStorage.getItem("colorsRecently")) localStorage.setItem("colorsRecently", JSON.stringify([])) 
            dispatch(getColorsRecently())
            setColor(randomColor())
            dispatch(getSaved())
    }, [])

    const clickHandler = () => {
        setClickColor("")
        dispatch(addColorRecently(color))
        setColor(randomColor())
    }

    return (
        <Background color={clickColor ? clickColor : color} >
            <div className={Styles.recently}>
                {
                    colors &&
                        colors.length ? colors.map(color => <Color key={color} color={color} setClickColor={setClickColor} /> ) : 
                        <h3>Recently</h3> 
                }
            </div>
            <div>
                <button onClick={() => clickHandler()}>newColor</button>
                <h4 onClick={() => navigator.clipboard.writeText(color)}>{clickColor ? clickColor : color}</h4>
            </div>
        </Background >
    )
}

export default Colors;  