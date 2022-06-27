const initiuallState = []

const recentlyReduser = (state=initiuallState, action) => {
    switch(action.type) {
        case 'GET_COLOR_RECENTLY' : 
                return JSON.parse(localStorage.getItem('colorsRecently'))
        case "ADD_COLOR_RECENTLY" :
            let colorsRecently = JSON.parse(localStorage.getItem('colorsRecently'));
            if (colorsRecently.length <= 10) {
                colorsRecently = [
                    ...colorsRecently, 
                    action.payload
                ]
            } else {
                colorsRecently.shift()
                colorsRecently = [
                    ...colorsRecently, 
                    action.payload
                ]
            }
            localStorage.setItem("colorsRecently", JSON.stringify(colorsRecently))
            return JSON.parse(localStorage.getItem('colorsRecently'))
        default :
            return JSON.parse(localStorage.getItem('colorsRecently'))
    }
}

export default recentlyReduser;