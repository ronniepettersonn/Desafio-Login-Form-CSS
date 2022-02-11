const imgMail = document.querySelector('.mail')
const inputMail = document.querySelector('#email')

const imgLock = document.querySelector('.password')
const inputPassword = document.querySelector('#password')

const eye = document.querySelector('.eye')

eye.addEventListener('click', function() {
    if(inputPassword.getAttribute('type') === 'password') {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})

inputMail.addEventListener('focus', function() {
    imgMail.setAttribute('src', './images/mail-focus.svg')
})

inputMail.addEventListener('focusout', function() {
    imgMail.setAttribute('src', './images/mail.svg')
})

inputPassword.addEventListener('focus', function() {
    imgLock.setAttribute('src', './images/lock-focus.svg')
})

inputPassword.addEventListener('focusout', function() {
    imgLock.setAttribute('src', './images/lock.svg')
})



/* if (inputMail.focus()) {
    input.addEventListener('click', './images/mail-focus.svg')
} else {
    imgMail.setAttribute('src', './images/mail.svg')
} */

console.log(inputPassword.getAttribute('type'))