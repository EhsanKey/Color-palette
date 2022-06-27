const codeColor = ["0" , "a", "1", "2", "b", "3", "4", "c", "5", "6", "d", "7","8", "f", "9"];

export const randomColor = () => {

    let hex = ""
    for (let i = 0; i < 6; ++i) {
        const randomKey = Math.floor(Math.random() * codeColor.length)
        hex.concat(codeColor[randomKey])
        hex = hex+codeColor[randomKey]
    }
    return `#${hex}`
}