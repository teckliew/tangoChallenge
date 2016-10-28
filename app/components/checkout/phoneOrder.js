import React, { Component } from 'react'

class PhoneOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {quantity: 1}
    this.quantityChange = this.quantityChange.bind(this)
  }

  quantityChange(event) {
    this.setState({quantity: event.target.value})
  }

  render() {
    const { phone } = this.props
    const { quantity } = this.state
    const subtotal = 273*quantity

    const phoneSplit = phone.split('-')
    let phoneName = ""
    if (phoneSplit[0] === 'Apple') {
      phoneSplit.shift()
      phoneName = phoneSplit.join(' ')
    } else {
      phoneName = phoneSplit.join(' ')
    }

    const countOptions = Array(10).fill(0).map((num, index) => (<option key={index} value={index + 1}>{index + 1}</option>))

    return (
      <div>
        <h2 style={style.header}>Your order</h2>
        <div style={style.image}>
          <p style={style.phoneName}>{phoneName}</p>
          <img src={'assets/' + phone + '.jpg'} />
        </div>
        <div style={style.borderBottom}>
          Quantity
          <span style={style.floatRight}>
            <span style={style.dropdown}>
              <select style={style.select} onChange={this.quantityChange}>{countOptions}</select>
            </span>
            x $273
          </span>
          </div>
        <div style={style.borderBottom}>
          Subtotal
          <subtotal style={style.floatRight}>${subtotal}.00</subtotal>
        </div>
      </div>
    )
  }
}

const style = {
  header: {
    marginBottom: '15px',
    borderBottom: '1px solid #d1d1d1',
    paddingBottom: '10px',
    fontSize: '18px',
    textAlign: 'left'
  },
  phoneName: {
    marginBottom: '30px',
    fontSize: '18px',
    textAlign: 'center'
  },
  image: {
    paddingBottom: '35px',
    borderBottom: '1px solid #d1d1d1'
  },
  dropdown: {
    display: 'inline-block',
    position: 'relative',
    marginTop: '-12px',
    border: '1px solid #cceefc',
    borderRadius: '20px',
    padding: '0',
    width: '75px',
    verticalAlign: 'top',
    background: 'url(./assets/form_pulldown_arrow.png) right center no-repeat #f0fbff',
    overflow: 'hidden'
  },
  select: {
    minWidth: '130%',
    width: '150%'
  },
  borderBottom: {
    padding: '12px 0',
    borderBottom: '1px solid #d1d1d1'
  },
  floatRight: {
    float: 'right'
  }
}

export default PhoneOrder
