function formValidation(callback) {
  const formInputs = document.getElementById("form").elements
  for (let element in formInputs) {
    let inputVal = formInputs[element].value
    let inputType = formInputs[element].type
    let inputNodeName = formInputs[element].nodeName
    let message = 'This field is required.'

    if (inputType !== 'checkbox' && inputNodeName !== 'BUTTON' && typeof inputVal === 'string') {
      switch (element) {
        case 'number':
          if (!isInputEmpty(inputVal)) {
            message = 'Please enter a valid phone number. For example "123-123-4567"'
            callback(isNumberValid(inputVal), element, message)
          } else {
            callback(!isInputEmpty(inputVal), element, message)
          }
          break
        case 'email':
          if (!isInputEmpty(inputVal)) {
            message = 'Please enter a valid email address. For example "fred@domain.com".'
            callback(isEmailValid(inputVal), element, message)
          } else {
            callback(!isInputEmpty(inputVal), element, message)
          }
          break
        case 'password':
          message = 'Please enter at least 10 characters.'
          callback(isPasswordValid(inputVal), element, message)
          break
        case 'passwordCheck':
          if (!isInputEmpty(inputVal)) {
            message = 'Password should match'
            callback(isPasswordMatch(formInputs['password'].value, inputVal), element, message)
          } else {
            callback(!isInputEmpty(inputVal), element, message)
          }
          break
        default:
          console.log("default");
          callback(!isInputEmpty(inputVal), element, message)
          break
      }
    }
  }
}

function isNumberValid(numStr) {
  var phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(numStr.match(phoneRegEx)) {
    return true
  } else {
    return false
  }
}

function isEmailValid(emailStr) {
  let strArray = emailStr.split('@')
  if (strArray.length === 2 ) {
    if (strArray[1].split('.').length === 2) {
      return true
    }
  }
  return false
}

function isPasswordValid(passwordStr) {
  return passwordStr.length > 9 ? true : false
}

function isPasswordMatch(passwordStr, confirmStr) {
  return passwordStr === confirmStr ? true : false
}

function isInputEmpty(str) {
  return str === "" || str.indexOf(0) === " " ? true : false
}

export default formValidation
