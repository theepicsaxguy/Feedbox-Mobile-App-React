import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './feature-card.module.css'

const FeatureCard = (props) => {
  return (
    <div className={styles['Card']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <h4 className={` ${styles['text']} ${projectStyles['heading4']} `}>
        {props.heading}
      </h4>
      <span
        className={` ${styles['text1']} ${projectStyles['content-Light']} `}
      >
        {props.text}
      </span>
      <span className={styles['text2']}>{props.text1}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  text1: 'Get started >',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading: 'Search for ideas',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FeatureCard.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard
