const errorMessage = document.getElementById("error_message")
const password = document.querySelector(".password")
const confirmedPassword = document.querySelector('.passwordConfirm')
const submitBtn = document.getElementById('signupBtn')

console.log(submitBtn)

submitBtn.addEventListener('click', (e) => {
    console.log('test')
    if(password.value !== confirmedPassword.value) {
        console.log('NAH')
        e.preventDefault()
    }
})