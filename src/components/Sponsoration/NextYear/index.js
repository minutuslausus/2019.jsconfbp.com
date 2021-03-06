import React from 'react'

import styles from './nextyear.module.scss'

const NextYear = () => (
  <>
    <div className={styles.nextyear}>
      <div className={styles.block_inner}>
        <h2>Coming up next</h2>

        <h3>
          2019 September 25-27
          <br />
          Ticket sales starts in December, 2018!
        </h3>

        <div className={styles.conferences}>
          <div className={styles.jsconf}>
            <h5>JSConf</h5>
            <ul>
              <li>Single track</li>
              <li>450+ attendees</li>
              <li>16 speakers</li>
            </ul>
          </div>

          <div className={styles.cssconf}>
            <h5>CSSConf</h5>
            <ul>
              <li>Single track</li>
              <li>250+ attendees</li>
              <li>8 speakers</li>
            </ul>
          </div>
        </div>

        <div className={styles.venue}>
          <h2>Venue</h2>

          <h5>Akvarium Klub Budapest</h5>
          <p>
            Center of the city, 580 square meters of exhibition space, literally
            under a pool
          </p>
        </div>
      </div>
    </div>
  </>
)

export default NextYear
