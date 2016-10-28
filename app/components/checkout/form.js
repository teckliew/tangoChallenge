import React from 'react'
import validationTest from '../../helpers/formValidation'

const stateArray = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {completeUserInfo: false}
    this.submitHandler = this.submitHandler.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.isUserInfoFilled = this.isUserInfoFilled.bind(this)
    this.formErrorMessage = this.formErrorMessage.bind(this)
  }

  submitHandler(event, childState, callback, notFilledCallback) {
    event.preventDefault
    const formInputs = document.getElementById("form").elements
    for (let element in formInputs) {
      this.state[element] = formInputs[element].value
    }

    if (this.isUserInfoFilled(childState)) {
      this.props.setUserInfo(this.state)
      this.setState({completeUserInfo: true})
      callback(event);
    } else {
      notFilledCallback()
      this.setState({completeUserInfo: false})
    }
  }

  onChangeHandler(e, field) {
    this.state[field] = e.target.value
  }

  isUserInfoFilled(childState) {
    for (let info in childState) {
      if (info !== "completeUserInfo") {
        if (this.state[info] === "" || this.state[info] === undefined) {
          return false
        }
      }
    }
    return true
  }

  formErrorMessage() {
    console.log('form error');
    validationTest((valid, inputName, message) => {
      let inputDiv = document.getElementById(inputName)
      let existingErrorMessage = document.getElementById(`${inputName}-error`)
      if (inputDiv !== null) {
        if (existingErrorMessage !== null) {
          inputDiv.removeChild(existingErrorMessage)
        }
        if (!valid){
          inputDiv.innerHTML += `<b id='${inputName}-error' class='errorMessage'>${message}</b>`
        }
      }
    })
  }

  render() {
    const {component: Component, pathname, userInfo} = this.props

    return (
      <Component pathname={pathname} formState={this.state} onChangeHandler={this.onChangeHandler} submitHandler={this.submitHandler} formErrorMessage={this.formErrorMessage} userInfo={userInfo} />
    )
  }
}

export { stateArray, Form }
