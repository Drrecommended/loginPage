const inputs = document.querySelectorAll('input')
const errorMessage = document.querySelector('.error_message')
const pwd = document.querySelector('#password')
const confirmPwd = document.querySelector('#passwordConfirm')
const submitBtn = document.getElementById('signupBtn')

const checkInputs = () => {
  console.log(confirmPwd.value, pwd.value)
  console.log(errorMessage)
  if (confirmPwd.value) {
    if (pwd.value != confirmPwd.value) {
      pwd.style.border = '1px solid red'
      confirmPwd.style.border = '1px solid red'
      errorMessage.style.display = 'block'
      return false
    } else {
      pwd.style.border = '1px solid lightgrey'
      confirmPwd.style.border = '1px solid lightgrey'
      errorMessage.style.display = 'none'
    }
  }
  inputs.forEach((input) => {
    if (input.value.length <= 0) {
      input.style.border = '1px solid red'
    } else {
      input.style.border = '1px solid lightgrey'
    }
  })
  console.log('this works')
}
