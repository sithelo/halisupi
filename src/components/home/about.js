import React from "react";
import Title from "../title";
import styles from "../../css/about.module.css";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="about halisupi"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
          Halisupi (Pty) Ltd is aimed at providing clients with best quality products and services 
          which exceed customer expectations in plumbing and construction industry and to create 
          long-term relationships with our clients.
          </p>
          <p>
          We do our best with each job that we do. Be it plumbing or construction we always do our very best. 
          We pride ourselves in service excellence, a happy, satisfied client always makes our job so worthwhile.
          </p>
          <p>
          Halisupi is 50 % women owned.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
