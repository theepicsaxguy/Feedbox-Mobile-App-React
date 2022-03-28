import React from 'react'

import projectStyles from '../style.module.css'
import styles from './copyright.module.css'

const Copyright = (props) => {
  return (
    <div className={styles['Copyright']}>
      <div
        className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
      >
        <span className={styles['text']}>
          <span className={styles['text1']}>
            © All rights reserved
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.teleporthq.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className={styles['text2']}>@TeleportHQ.</span>
          </a>
          <span className={styles['text3']}>
            {' '}
            Powered by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.vercel.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className={styles['text4']}>Vercel</span>
          </a>
          <span className={styles['text5']}>
            . Image source:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.unsplash.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className={styles['text6']}>Unsplash</span>
          </a>
          <span className={styles['text7']}>.</span>
        </span>
      </div>
    </div>
  )
}

export default Copyright
