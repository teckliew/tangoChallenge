import React from 'react'
import { Link } from 'react-router'

const GetStarted = () => {
  return (
    <div style={style.container}>
      <section style={style.section}>
        <h2>Ting now offers GSM services too!</h2>
        <small style={style.subTitle}>With both GSM and CDMA networks, over 80% of devices can now come to Ting.</small>
        <br />
        <img style={style.image} src='assets/getStartedDevices.jpg' />
        <div style={style.callToAction}>
          <Link to='/shop'><button>Shop Devices</button></Link>
        </div>
        <div style={style.callToAction}>
          <button>Bring yours</button>
        </div>
        <div style={style.clear}></div>
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
  section: {
    padding: '66px 0 80px',
    borderTop: '1px solid #d1d1d1',
    borderBottom: '1px solid #d1d1d1',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: '18px'
  },
  image: {
    display: 'block',
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  callToAction: {
    display: 'inline-block',
    marginTop: '30px',
    width: '214px'
  },
  clear: {
    clear: 'both'
  }
}

export default GetStarted
