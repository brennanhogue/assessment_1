let password = "brennan1551"

let characterLength = password.length

function containsNumber(str) {
    return /[0-9]/.test(str)
}

console.log(containsNumber(password))

function containsLetter(str) {
    return /[a-zA-Z]/.test(str)
}

console.log(containsLetter(password))

if(characterLength > 9 && containsLetter(password) === true && containsNumber(password) === true) {
    console.log("Password is successful!")
} else {
    console.log("Password is unsuccessful!")
}

