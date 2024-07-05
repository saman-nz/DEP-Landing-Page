import React from 'react'
import styles from './Den.module.css'

const Den = () => {
  return (
    <div className='container pt-5'>
        <h2 className='darkgreen text-center'>
        Why Choose DEN
        </h2>
        <p className={`text-center ${styles.mw681} m-auto pt-3`}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking   
        </p>
        <div className='d-flex gap-4 flex-wrap align-items-center justify-content-center pt-5'>
            <div className={styles.denbox}>
                <img src="./Group 18.png" alt="" />
                <h5 className='darkgreen fw-bold'>
                    One on One Monitor
                </h5>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>

            </div>
            <div className={styles.denbox}>
                <img src="./Group 24.png" alt="" />
                <h5 className='darkgreen fw-bold'>
                24/7 Mentor
                </h5>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>

            </div>
            <div className={styles.denbox}>
                <img src="./Group 243.png" alt="" />
                <h5 className='darkgreen fw-bold'>
                Alumi
                </h5>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>

            </div>
            <div className={styles.denbox}>
                <img src="./Group 244.png" alt="" />
                <h5 className='darkgreen fw-bold'>
                Annual Experts
                </h5>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>

            </div>
        </div>
      
    </div>
  )
}

export default Den
