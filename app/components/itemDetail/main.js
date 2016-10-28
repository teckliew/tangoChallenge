import React from 'react'
import { Link } from 'react-router'

const ItemDetail = ({params}) => {
  const phone = params.phone.split('-').join(' ')
  return (
    <div style={style.container}>
      <aside style={style.image}><img src={'assets/' + params.phone + '.jpg'} /></aside>
      <section style={style.introSection}>
        <h1 style={style.jumbo}>{phone}</h1>
        <p style={style.intro}>Get the purest, most powerful smartphone experience yet with {phone}.</p>
        <p style={style.intro}>
        Fully unlocked with support for all US carriers, freedom never felt so good. It's never been priced so well, either.</p>
      </section>
      <section style={style.priceSection}>
        <panel style={style.pricePanel}>
          <div style={style.borderBottom}>
            <p>GSM <br /> FROM TING</p>
          </div>
          <h1 style={style.jumbo}>$273</h1>
          <p>SHIPS BY MONDAY</p>
          <div style={style.borderBottom}>
            <Link to={`/checkout/${params.phone}/signup`}>
              <button>Buy</button>
            </Link>
          </div>
          <p>SIM CARD INCLUDED</p>
        </panel>
        <panel style={style.pricePanel}>
          <div style={style.borderBottom}>
            <p>GSM <br /> FROM TING</p>
          </div>
          <h1 style={style.jumbo}>$273</h1>
          <p>SHIPS BY MONDAY</p>
          <div style={style.borderBottom}>
            <Link to={`/checkout/${params.phone}/signup`}>
              <button>Buy</button>
            </Link>
          </div>
          <p>SIM CARD INCLUDED</p>
        </panel>
      </section>
      <section style={style.overviewSection}>
        <div style={style.borderBottom}>
          <h3>Overview</h3>
        </div>
        <br />
        <bold>Description</bold>
        <div style={style.description}>
          <p>
            If you are a devout Apple fan, if you want the latest and greatest but you're not a fan of the way phones keep getting bigger and bigger (and bigger)... you'll want to take a closer look at this, the Apple iPhone.
          </p><p>
            The biggest claim to fame here is purely a practical play: The iPhone goes back to the 4-inch formfactor that some among us lament losing as every phone seems to creep up closer to phablet-sized. You can hold it comfortably in one hand and you won't risk a strain injury when reaching for the top corner of the screen.
          </p><p>
            So, on the outside it's a throwback.
          </p><p>
            On this inside, it's vanguard.
          </p><p>
            In other words, judge it by its size, do not.
          </p><p>
            A 12 MP camera that captures spectacular stills plus 4K video too. Graphics processing capability on par with the iPhone 6S. Touch ID unlocking and payments with your fingerprint. LTE, of course, plus faster Wi-Fi.
          </p>
        </div>
      </section>
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
  image: {
    float: 'right'
  },
  jumbo: {
    fontFamily: 'ProximaNovaSemiBold',
    fontSize: '42px'
  },
  introSection: {
    width: '564px',
  },
  intro: {
    fontSize: '18px'
  },
  priceSection: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '11px',
    textAlign: 'center',
    verticalAlign: 'top'
  },
  pricePanel: {
    flex: '1',
    height: 'auto',
    marginTop: '10px 0 50px',
    marginRight: '15px',
    border: '1px solid #d1d1d1',
    padding: '15px',
    fontSize: '11px',
    verticalAlign: 'top',
    textTransform: 'uppercase',
  },
  borderBottom: {
    paddingBottom: '10px',
    borderBottom: '1px solid #d1d1d1',
  },
  overviewSection: {
    marginTop: '50px'
  },
  description: {
    width: '554px'
  }
}

export default ItemDetail
