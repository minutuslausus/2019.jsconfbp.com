import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.scss'
import Helmet from 'react-helmet'
// , styles.nav__open

const Navigation = props => {
  const { open } = props
  const className = [styles.nav]

  if (open) {
    className.push(styles.nav__open)
  }

  return (
    <nav className={className.join(' ')}>
      <ul>
        <li className={styles.item}>
          <Link className={styles.link} to="/call-for-speakers">
            Call for Speakers
          </Link>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/sponsoration">
            Sponsoration
          </a>
        </li>
        {/*
            <li className={styles.item}>
              <Link className={styles.link} to="/code-of-conduct">
                News
              </Link>
            </li>      
            <li className={styles.item}>
                <Link className={styles.link} to="/speakers">Speakers</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/venue">Venue</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/sponsors">Sponsors</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/budapest-guide">Budapest Guide</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/updates">Updates</Link>
            </li>
      */}
        <li className={styles.item}>
          <Link className={styles.link} to="/code-of-conduct">
            Code of Conduct
          </Link>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="http://eepurl.com/dMgAr-/"
            target="_blank"
          >
            Get Updates
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="http://2017.jsconfbp.com"
            target="_blank"
          >
            2017
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="http://2016.jsconfbp.com"
            target="_blank"
          >
            2016
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="http://2015.jsconfbp.com"
            target="_blank"
          >
            2015
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
