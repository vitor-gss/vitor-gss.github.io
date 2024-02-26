let createdColor
let h1 = document.querySelector('h1')
const body = document.body

document.addEventListener('mousemove', changeColorOfLettersAndBackgrounds)

function changeColorOfLettersAndBackgrounds() {

    body.style.backgroundColor = createColorNumbersAndLetters()
    h1.style.color = createColorNumbersAndLetters()
    for (const text of label) {
        text.style.color = createColorNumbersAndLetters()
    }
    for (const text of input) {
        text.style.backgroundColor = createColorNumbersAndLetters()
        text.style.color = createColorNumbersAndLetters()
    }
}

const createColorOnlyNumbers = () => {
    let color = ''
    for (let i = 0; i < 6; i++) {
        color = color + Math.floor(Math.random() * 10)
    }
    createdColor = '#' + color
    return createdColor
}

const createColorNumbersAndLetters = () => {
    let color = ''
    let letters = ['A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < 6; i++) {
        let type = randomType()
        if (type > 1) {
            color = color + Math.floor(Math.random() * 10)
        } else {
            color = color + letters[Math.floor(Math.random() * letters.length)]
        }
    }
    createdColor = '#' + color
    // console.log(createdColor)
    return createdColor
}

const randomType = () => {
    let randomNumber = Math.ceil(Math.random() * 2)
    return randomNumber
}

