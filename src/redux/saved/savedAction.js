const getSaved = () => {
    return {
        type: "GET_SAVED"
    }
}

const addColorSaved = color => {
    return {
        type: "ADD_COLOR",
        payload: color
    }
}

const delColorSaved = color => {
    return {
        type: "DEL_COLOR",
        payload: color
    }
}

export {addColorSaved, delColorSaved, getSaved}