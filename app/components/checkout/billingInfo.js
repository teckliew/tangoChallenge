import React from 'react'

import { stateArray, Form } from './form'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const BillingInfo = props => {
  return (
    <div>
      <h1>Billing Information</h1>
      <small>The information provided will be used for your future payments.</small>
      <Form pathname={props.pathname} setUserInfo={props.setUserInfo} userInfo={props.userInfo} component={FormInputs} />
    </div>
  )
}

const FormInputs = props => {
  const { userInfo, onChangeHandler } = props
  const stateOptions = stateArray.map((stateName, index) => (<option key={index} value={stateName}>{stateName}</option>))
  const monthOptions = months.map((month, index) => (<option key={index} value={('0' + (index + 1)).slice(-2)}>{('0' + (index + 1)).slice(-2)} - {month}</option>))
  const yearOptions = Array(10).fill(0).map((num, index) => (<option key={index} value={index + 2016}>{index + 2016}</option>))

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div style={style.formField}>
        <b>Full name</b> <small>(as it appears on card)</small>
        <input />
      </div>
      <div style={style.formField}>
        <b>Credit card number</b>
        <input />
      </div>
      <div style={style.formField}>
        <div style={style.inputTwoThirdSize}>
          <b >Expiration date</b>
          <br />
          <div style={style.inputThirdSize}>
            <div style={style.dropdown}><select style={style.select}>{monthOptions}</select></div>
          </div>
          <div style={style.inputThirdSize}>
            <div style={style.dropdown}><select style={style.select}>{yearOptions}</select></div>
          </div>
        </div>
        <div style={style.inputThirdSize}>
          <b>Security number</b> <small>(cvv)</small>
          <input style={{marginTop: '15px'}} />
        </div>
      </div>
      <div style={style.clear}></div>
      <div style={style.formField}>
        <div style={style.borderBottom}>
          <h3>Billing address</h3>
        </div>
        <div style={style.inputHalfSize}>
          <b>First Name</b>
          <input placeholder={userInfo.firstName} />
        </div>
        <div style={style.inputHalfSize}>
          <b>Last Name</b>
          <input placeholder={userInfo.lastName} />
        </div>
      </div>
      <div style={style.formField}>
        <b>Address</b>
        <input placeholder={userInfo.address} />
      </div>
      <div style={style.formField}>
        <div style={style.inputHalfSize}>
          <b>City</b>
          <input placeholder={userInfo.city} />
        </div>
        <div style={style.inputHalfSize}>
          <b>State</b>
          <p style={style.dropdown}><select style={style.select} value={userInfo.state} onChange={e => onChangeHandler(e, "state")}>{stateOptions}</select></p>
        </div>
        <div style={style.clear}></div>
      </div>
      <div style={style.formField}>
        <div style={style.inputHalfSize}>
          <b>Zip code</b>
          <input placeholder={userInfo.zip} />
        </div>
        <div style={style.inputHalfSize}>
          <b>Country</b>
          <p style={style.dropdown}><select style={style.select} value={userInfo.country} onChange={e => onChangeHandler(e, "country")}>
            <option>United States</option>
            <option>Canada</option>
          </select></p>
          </div>
      </div>
      <button>Continue</button>
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
  inputThirdSize: {
    float: 'left',
    margin: '5px 0',
    padding: '0 5px 20px 0',
    width: '38%',
    fontWeight: 'bold'
  },
  inputTwoThirdSize: {
    float: 'left',
    margin: '5px 0',
    padding: '0 0 20px 0',
    width: '60%',
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
  borderBottom: {
    marginBottom: '15px',
    padding: '12px 0 0',
    borderBottom: '1px solid #d1d1d1'
  },
  clear: {
    clear: 'both'
  }
}

export default BillingInfo
