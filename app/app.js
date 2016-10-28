import React from 'react'
import { BrowserRouter as Router, HashRouter, Match, Miss, Link } from 'react-router'

import Checkout from './components/checkout/main'
import ItemDetail from './components/itemDetail/main'
import LandingPage from './components/getStarted/main'
import Shop from './components/shop/main'

const App = () => {
  return(
    <HashRouter>
      <div style={style.nav}>
        <ul style={style.navUl}>
          <li style={style.logoLink}>
            <Link to="/">
              <svg style={style.logo} role="img" title="Ting Logo" width="69" height="69">
		            <use xlinkHref="./assets/icons.svg#ting"></use>
	            </svg>
              <small style={style.motto}>mobile that makes sense.</small>
            </Link>
          </li>
          <li style={style.shopLink}><Link to="/shop">Shop</Link></li>
        </ul>
        <div style={style.content}>
          <Match pattern='/shop/:phone' component={ItemDetail} />
          <Match exactly pattern='/' component={LandingPage} />
          <Match exactly pattern='/shop' component={Shop} />
          <Match pattern='/checkout/:phone' component={Checkout} />
        </div>
      </div>
    </HashRouter>
  )
}

const style = {
  nav: {
    top: '0',
    height: '78px',
    margin: '0',
    padding: '0',
    backgroundColor: '#fff',
    boxShadow: '0 1px 5px rgba(0,0,0,.14)',
  },
  navUl: {
    width: '964px',
    marginTop: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0',
  },
  logoLink: {
    display: 'inline-block',
    margin: '0'
  },
  logo: {
    fill: '#0ae'
  },
  motto: {
    display: 'inline-block',
    marginTop: '25px',
    marginLeft: '9px',
    color: '#0ae',
    fontSize: '18px',
    verticalAlign: 'top'
  },
  shopLink: {
    display: 'inline-block',
    float: 'right',
    margin: '25px',
    lineHeight: '28px',
    fontSize: '18px',
    cursor: 'pointer',
    verticalAlign: 'bottom'
  },
  content: {
  }
}

export default App
