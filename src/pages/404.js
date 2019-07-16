import React from 'react'
import layout from '../components/layout';
import styles from '../css/error.module.css';
import banner from '../components/banner';
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import SEO from "../components/SEO"
export default function error() {
  return (
    <layout>
      {/* <SEO title="Error" /> */}
      <header className={styles.error}>
        <banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </banner>
      </header>
    </layout>
  )
}
