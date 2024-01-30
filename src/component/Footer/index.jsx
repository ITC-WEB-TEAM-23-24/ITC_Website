import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
      Copyright © ITC, IIT Bombay | Made by Web Team with <a href='https://www.deepaksilaych.tech/'>💛</a>
      </div>
    </div>
  )
}

export default Footer