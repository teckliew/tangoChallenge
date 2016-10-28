import React, { Component } from 'react'
import { Match, Link, Redirect, Miss } from 'react-router'

import PhoneOrder from './phoneOrder'
import Signup from './signup'
import ServiceAddress from './serviceAddress'
import BillingInfo from './billingInfo'

//const Checkout = ({params, pathname}) =>
class Checkout extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "United States"
    }
    this.setUserInfo = this.setUserInfo.bind(this)
  }

  setUserInfo(data) {
    this.setState(data)
  }

  render() {
    const { pathname, params } = this.props
    const state = this.state
    const activePage = location.hash.split('/').pop()
    const nav = ["Service address",	"Billing",	"Shipping", "Confirmation"].map((navItem, index) => {
      const navItemPath = navItem.toLowerCase().split(' ').join('_')
      return (<li style={activePage === navItemPath ? style.activeBreadcrumb : style.breadcrumb} key={navItem}>{index + 1}. {navItem}<span style={activePage === navItemPath ?  style.activeSeperator : style.seperator}></span></li>)
    })

    return (
      <div style={style.container}>
        {location.hash.split('/').pop() === 'signup' ? "" : (<nav style={style.navContainer}><ul style={style.nav}>{nav}</ul></nav>)}
        <div style={style.phoneOrder}>
          <PhoneOrder phone={params.phone} />
        </div>
        <div style={style.checkout}>
          <MatchWithProps pattern={`${pathname}/signup`} component={Signup} pathname={pathname} setUserInfo={this.setUserInfo} userInfo={state} />
          <MatchWithProps pattern={`${pathname}/service_address`} component={ServiceAddress} pathname={pathname} setUserInfo={this.setUserInfo} userInfo={state} />
          <MatchWithProps pattern={`${pathname}/billing`} component={BillingInfo} pathname={pathname} setUserInfo={this.setUserInfo} userInfo={state} />
        </div>
      </div>
    )
  }
}

const MatchWithProps = ({ component: Component, pathname, setUserInfo, userInfo, ...rest }) => {
  return (
    <Match {...rest} render={ () => ( <Component pathname={pathname} setUserInfo={setUserInfo} userInfo={userInfo} /> )} />
  )
}

const style = {
  container: {
    marginTop: '45px',
    marginRight: 'auto',
    marginLeft: 'auto',
    minHeight: '400px',
    padding: '0',
    width: '964px',
    boxSizing: 'border-box'
  },
  navContainer: {
    position: 'relative',
    marginBottom: '10px',
    border: '3px solid #fff',
    borderRadius: '30px',
    height: '42px',
    backgroundColor: '#f3f3f3',
    fontSize: '18px',
    overflow: 'hidden',
  },
  nav: {
    marginTop: '0',
    padding: '0'
  },
  breadcrumb: {
    display: 'inline-block',
    marginTop: '-2px',
    marginRight: '-15px',
    padding: '0 0 0 30px',
    borderRadius: '0 20px 20px 0',
    color: '#929292',
    fontFamily: 'ProximaNovaSemiBold'
  },
  activeBreadcrumb: {
    display: 'inline-block',
    marginTop: '-2px',
    marginRight: '-15px',
    padding: '0 0 0 30px',
    borderRadius: '0 20px 20px 0',
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: 'ProximaNovaSemiBold'
  },
  seperator: {
    display: 'inline-block',
    position: 'relative',
    border: '3px solid #fff',
    borderLeft: '0',
    borderRadius: '0 50px 50px 0',
    height: '41px',
    width: '18px',
    backgroundColor: '#f3f3f3',
    verticalAlign: 'middle'
  },
  activeSeperator: {
    display: 'inline-block',
    position: 'relative',
    border: '3px solid #fff',
    borderLeft: '0',
    borderRadius: '0 50px 50px 0',
    height: '41px',
    width: '18px',
    backgroundColor: '#fff',
    verticalAlign: 'middle'
  },
  phoneOrder: {
    float: 'left',
    marginBottom: '20px',
    padding: '5px 20px 30px',
    width: '226px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    overflow: 'auto',
    boxSizing: 'border-box'
  },
  checkout: {
    float: 'right',
    paddingRight: '37px',
    paddingBottom: '15px',
    marginBottom: '20px',
    borderRadius: '20px',
    padding: '66px 55px 100px',
    width: '718px',
    background: '#fff',
    boxSizing: 'border-box'
  },
}

export default Checkout
