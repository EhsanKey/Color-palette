import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { randomColor } from '../functions/randomColor';
import { useDispatch, useSelector } from 'react-redux';
import { addColorRecently, getColorsRecently } from '../redux/recently/recentlyAction';
import Styles from "./Colors.module.css"
import Color from './shared/Color';
import { getSaved } from '../redux/saved/savedAction';

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.color};
    height: calc(100vh - 50px);
`

const Colors = () => {

    const dispatch = useDispatch()
    const colors = useSelector(state => state.recentlyReduserState)
    
    const [color, setColor] = useState("");
    const [clickColor, setClickColor] = useState('');

    useEffect(() => {
        setColor(randomColor())
            dispatch(getColorsRecently())
            dispatch(getSaved())
    }, [])

    const clickHandler = () => {
        setClickColor("")
        setColor(randomColor())
        dispatch(addColorRecently(color))
    }

    return (
        <Background color={clickColor ? clickColor : color} >
            <div className={Styles.recently}>
                
                {
                    colors > 0 ? 
                        colors.map(color => <Color key={color} color={color} setClickColor={setClickColor} /> ) :
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