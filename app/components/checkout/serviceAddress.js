import React from 'react'
import { Link } from 'react-router'

import { stateArray, Form } from './form'

const ServiceAddress = props => {
  return (
    <div>
      <h1>ServiceAddress</h1>
      <p>Your service address will allow us to determine if your area is serviceable by our network.</p>
      <Form pathname={props.pathname} setUserInfo={props.setUserInfo} userInfo={props.userInfo} component={FormInputs} />
    </div>
  )
}

const FormInputs = props => {
  const formFields = {address: "", city: "", state: "", zip: ""}
  const { formState, onChangeHandler, submitHandler, pathname, formErrorMessage } = props
  const stateOptions = stateArray.map((stateName, index) => (<option key={index} value={stateName}>{stateName}</option>))

  return (
    <form id="form" onSubmit={e => e.preventDefault()}>
      <div id="address" style={style.formField}>
        <b>Address</b>
        <input name="address" onChange={e => onChangeHandler(e, "address")} />
      </div>
      <div id="city" style={style.formField}>
        <b>City</b>
        <input name="city" onChange={e => onChangeHandler(e, "city")} />
      </div>
      <div id="state" style={style.formField}>
        <div style={style.inputHalfSize}>
          <b>State</b>
          <p style={style.dropdown}><select name="state" style={style.select} onChange={e => onChangeHandler(e, "state")}>{stateOptions}</select></p>
        </div>
        <div id="zip" style={style.inputHalfSize}>
          <b>Zip code</b>
          <input name="zip" onChange={e => onChangeHandler(e, "zip")} />
        </div>
      </div>
      <div style={style.clear}></div>
      <p style={{textAlign: 'center'}}>
        <Link to={pathname + '/billing'}  >
          {({ onClick }) => <button onClick={(e) => { submitHandler(e, formFields, onClick, () => formErrorMessage() ) }}>Next step</button> }
        </Link>
      </p>
    </form>
  )
}

const style = {
  formField: {
    margin: '20px 0'
  },
  inputHalfSize: {
    float: 'left',
    margin: '5px 0',
    padding: '0 37px 20px 0',
    width: '267px',
    fontWeight: 'bold'
  },
  dropdown: {
    position: 'relative',
    marginTop: '12px',
    border: '1px solid #cceefc',
    borderRadius: '20px',
    padding: '0',
    minWidth: '75px',
    width: '100%',
    height: '36px',
    verticalAlign: 'top',
    background: 'url(./assets/form_pulldown_arrow.png) right center no-repeat #f0fbff',
    overflow: 'hidden'
  },
  select: {
    minWidth: '130%',
    width: '150%'
  },
  clear: {
    clear: 'both'
  }
}


export default ServiceAddress
