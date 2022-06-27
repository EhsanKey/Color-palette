import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"

//disptach
import { addColorSaved } from '../../redux/saved/savedAction'
import { delColorSaved } from '../../redux/saved/savedAction'

//Styles
import Styles from "./Color.module.css"
import styled from 'styled-components'

//Icons
import { BsFillBookmarkStarFill } from "react-icons/bs"

const PrveColor = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
    @media screen and (max-width: 576px) {
        width: 30px;
        height: 30px;
    }
`

const Color = ({color, setClickColor}) => {

    const dispatch = useDispatch()
    const saved = useSelector(state => state.savedReduserState)
    
    const [save, setSave] = useState(true)

    useEffect(() => {
        const statusSave = !!saved.find(item => item === color);
        if (statusSave) {
            setSave(false)
        }
    }, [saved])

    const saveHandler = () => {
        setSave(!save)
        console.log(save);
        if(save) {
            dispatch(addColorSaved(color))
        } else {
            dispatch(delColorSaved(color))
        }
    }
    
    return (
            <div className={Styles.container}>
                <h4 onClick={() => navigator.clipboard.writeText(color)}>{color}</h4>
                <BsFillBookmarkStarFill className={(!save ? Styles.save : Styles.noneSave)} onClick={() => saveHandler()} />  
                <PrveColor onClick={() => (setClickColor(color))} color={color}></PrveColor>
            </div>
    )
}

export default Color