import React from 'react'
import { BrowserRouter as Router, Match, Miss, Link, Redirect, NavigationPrompt } from 'react-router'

import { Form } from './form'


const Signup = props => {
  return (
    <div>
      <section>
        <h1 style={style.header}>Create your Ting account</h1>
        <Form pathname={props.pathname} setUserInfo={props.setUserInfo} userInfo={props.userInfo} component={FormInputs} />
      </section>
    </div>
  )
}

const FormInputs = props => {
  const formFields = {firstName: "", lastName: "", number: "", email: "", password: "" }
  const { formState, onChangeHandler, submitHandler, pathname, formErrorMessage } = props

  return (
    <form id="form" onSubmit={e => e.preventDefault()}>
      <div>
        <div id="firstName" style={style.input}>
          <b>First Name</b>
          <input name="firstName" onChange={e => onChangeHandler(e, "firstName")} />
        </div>
        <div id="lastName" style={style.input}>
          <b>Last Name</b>
          <input name="lastName" onChange={e => onChangeHandler(e, "lastName")} />
        </div>
      </div>
      <div style={style.clear}></div>
      <div>
        <div id="number" style={style.input}>
          <b>Contact Number</b>
          <input name="number" onChange={e => onChangeHandler(e, "number")} />
          <div style={style.clear}></div>
        </div>
        <div id="email" style={style.input}>
          <b>Email</b>
          <input name="email" onChange={e => onChangeHandler(e, "email")} />
        </div>
      </div>
      <div style={style.clear}></div>
      <div>
        <div id="password" style={style.input}>
          <b>Password</b>
          <input name="password" type="password" onChange={e => {
            formFields.password = e.target.value
            onChangeHandler(e, "password")
          }} />
        </div>
        <div id="passwordCheck" style={style.input}>
          <b>Confirm password</b>
          <input name="passwordCheck" type="password" onChange={e => e.target.value === formFields.password  ? console.log(true) : console.log(false) } />
        </div>
      </div>
      <div style={style.clear}></div>
      <p>
      <input style={style.checkbox} type="checkbox" name="news" value="news" defaultChecked /> Send me Ting news</p>
      <p>
      <input style={style.checkbox} type="checkbox" name="alert" value="alert" defaultChecked /> Send me alerts about new devices</p>
      <p>
      <input style={style.checkbox} type="checkbox" name="survey" value="survey" defaultChecked />Send me Ting satisfaction surveys (4 per year)</p>
      <div style={style.center}>
        <Link to={pathname + '/service_address'}  >
          {({ onClick }) => <button style={style.signup} onClick={(e) => submitHandler(e, formFields, onClick, () => formErrorMessage()) }>Sign up</button> }
        </Link>
      </div>
    </form>
  )

}

const style = {
  header: {
    marginTop: '0',
    marginBottom: '20px',
    fontSize: '42px',
    textAlign: 'center'
  },
  input: {
    float: 'left',
    margin: '5px 0',
    padding: '0 37px 20px 0',
    width: '267px',
    fontWeight: 'bold'
  },
  checkbox: {
    float: 'left',
    margin: '0',
    marginRight: '5px',
    padding: '0',
    width: '10px',
    height: '10px'
  },
  signup: {
    marginTop: '30px'
  },
  center: {
    textAlign: 'center'
  },
  clear: {
    clear: 'both'
  }
}

export default Signup
