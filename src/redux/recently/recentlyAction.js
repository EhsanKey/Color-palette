const addColorRecently = color => {
    return {
        type: "ADD_COLOR_RECENTLY",
        payload: color
    }
} 

const getColorsRecently = () => {
    return {
        type: "GET_COLOR_RECENTLY",
    }
} 


export {addColorRecently, getColorsRecently}