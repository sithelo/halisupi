import React from "react";
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../css/error.module.css';
import Layout from '../components/layout';
import Banner from '../components/banner';
export default () => <Layout>
    <header className={styles.error}>
        <Banner 
            title="continue exploring"
            info="Website still under construction...."
        >
          <AniLink fade to="/404" className="btn-white">
          explore halisupi
          </AniLink>
        </Banner>
    </header>
</Layout>
