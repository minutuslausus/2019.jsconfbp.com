import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import styles from './layout.module.scss'
import Footer from '../Footer/'
import Logo from '../Logo/'
import TicketButton from '../TicketButton/'
import Navigation from '../Navigation/'

import Header from '../Header/'

const MainLayout = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            keywords
            description
          }
        }
      }
    `}
    render={data => (
      <div className={styles.grid2}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <main className={[styles.main, ...props.mainClassNames].join(' ')}>
          {props.children}
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    )}
  />
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  mainClassNames: PropTypes.array,
}

MainLayout.defaultProps = {
  mainClassNames: [],
}

export default MainLayout
