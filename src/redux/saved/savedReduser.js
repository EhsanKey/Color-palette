const initialState = [];

const savedReduser = (state=initialState, action) => {
    switch(action.type) {
        case "GET_SAVED" : 
                return JSON.parse(localStorage.getItem("getSaved"))
        case "ADD_COLOR" :
            var savedColors = JSON.parse(localStorage.getItem("getSaved"))
            savedColors = [
                ...savedColors,
                action.payload
            ]

            localStorage.setItem("getSaved", JSON.stringify(savedColors))
        return JSON.parse(localStorage.getItem("getSaved"))

        case "DEL_COLOR" : 
            var savedColors = JSON.parse(localStorage.getItem("getSaved"))
            let newSaved = savedColors.filter(item => item !== action.payload)
            savedColors = [
                ...newSaved,
            ]
        
            localStorage.setItem("getSaved", JSON.stringify(savedColors))
        return JSON.parse(localStorage.getItem("getSaved"))

        default :
            return JSON.parse(localStorage.getItem("getSaved"))
    }
}

export default savedReduser;