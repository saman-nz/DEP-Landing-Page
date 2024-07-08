import React from 'react'
import styles from './LogoBar.module.css'
const LogoBar = () => {
  return (
    <div className={`overflow-hidden ${styles.background}`}>
      <img src="./Logos.png" className="img-fluid" alt="" />
    </div>
  )
}

export default LogoBar
