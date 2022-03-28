import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={projectStyles['navbar-link']}>{props.text}</span>
      <span className={` ${styles['text1']} ${projectStyles['navbar-link']} `}>
        {props.text1}
      </span>
      <span className={` ${styles['text2']} ${projectStyles['navbar-link']} `}>
        {props.text2}
      </span>
      <span className={` ${styles['text3']} ${projectStyles['navbar-link']} `}>
        {props.text3}
      </span>
      <span className={` ${styles['text4']} ${projectStyles['navbar-link']} `}>
        {props.text4}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Features',
  text3: 'Blog',
  rootClassName: '',
  text4: 'Pricing',
  text: 'Home',
  text1: 'About',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
