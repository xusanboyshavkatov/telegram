let sayt = document.querySelector(".sayt")
let sayt2 = document.querySelector(".sayt2")
let sayt3 = document.querySelector(".sayt3")


let country_number = document.querySelector(".country_number")
let userinputnumber = document.querySelector(".userinputnumber")


let verfication_code_input = document.querySelector(".verfication_code_input")

function Next() {
    sayt.classList.add("display_none")
    sayt2.classList.add("display_blok")
    userinputnumber.innerHTML = `Send the verification code to this phone number ${country_number.value}`
}
function back() {
    sayt.classList.remove("display_none")
    sayt2.classList.remove("display_blok")
}

function chek() {
    let country_number2 = country_number.value.slice(-4);
    let verfication_code_error = document.querySelector(".verfication_code_error")
    if (verfication_code_input.value == country_number2) {
        sayt2.classList.add("display_none")
        sayt3.classList.add("display_blok")
    } else {
        verfication_code_error.innerHTML = "The code entered is invalid!"
    }
    event.preventDefault()
}