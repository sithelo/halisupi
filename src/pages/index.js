import React from "react";
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../css/error.module.css';
import layout from '../components/layout';
import banner from '../components/banner';
export default () => <layout>
    <header className={styles.error}>
        <banner 
            title="continue exploring"
            info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
        >
          <AniLink fade to="/404" className="btn-white">
          explore halisupi
          </AniLink>
        </banner>
    </header>
</layout>
