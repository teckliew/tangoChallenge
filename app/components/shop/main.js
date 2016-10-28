import React from 'react'
import { Link } from 'react-router'

const productArray = ['Apple-iPhone-5-Silver', 'Apple-iPhone-5-Gold', 'Apple-iPhone-5-Black', 'Apple-iPhone-4-White', 'Apple-iPhone-4-Black', 'OnePlus-2']

const Shop = ({pathname}) => {
  const phoneItems = productArray.map(product => (<ShopItem key={product} src={product} pathname={pathname} />) )
  return (
    <div style={style.container}>
      <div style={style.shopGrid}>
        {phoneItems}
      </div>
      <div style={style.clear}></div>
    </div>
  )
}

const ShopItem = props => {
  let productName = props.src.split('-')
  let brand = ""
  let phone = ""

  if (productName[0] === 'Apple') {
    brand = productName.shift()
    phone = productName.join(' ')
  } else {
    brand = productName.join(' ')
  }
  return (
    <div style={style.shopItem}>
      <Link to={`${props.pathname}/${props.src}`}>
        <img src={`assets/${props.src}.jpg`} />
        <div style={style.itemName}>{brand}<br />{phone}</div>
        <h5 style={style.itemPrice}>$273</h5>
        <div style={style.itemDetailFooter}>
          <small style={style.itemDetailLeft}>NEW</small>
          <small style={style.itemDetailRight}>CDMA, GSM</small>
        </div>
      </Link>
    </div>
  )
}

const style = {
  container: {
    marginTop: '50px',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '20px',
    padding: '66px 40px 100px',
    minHeight: '400px',
    width: '964px',
    background: '#fff',
    boxSizing: 'border-box',
  },
  shopGrid: {
    paddingLeft: '195px'
  },
  shopItem: {
    display: 'block',
    float: 'left',
    width: '188px',
    height: '399px',
    marginLeft: '37px',
    marginBottom: '50px',
    borderBottom: '1px solid #d1d1d1',
    paddingBottom: '10px',
    verticalAlign: 'top',
    textAlign: 'center',
    transitionProperty: 'margin',
    transitionDuration: '.3s',
    transitionTimingFunction: 'ease'
  },
  itemName: {
    height: '37px',
    marginTop: '30px',
    color: '#0ae',
    fontFamily: 'ProximaNovaSemiBold',
    fontSize: '18px',
    textAlign: 'center'
  },
  itemPrice: {
    marginTop: '5px',
    color: '#333',
    fontSize: '18px'
  },
  itemDetailFooter: {
    marginTop: '45px',
    color: 'grey'
  },
  itemDetailLeft: {
    float: 'left',
    textAlign: 'left',
  },
  itemDetailRight: {
    float: 'right',
    textAlign: 'right',
  },
  clear: {
    clear: 'both'
  }
}



export default Shop
