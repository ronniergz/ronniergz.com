import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = (props) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects List</h1>
    <ul id="project-list">

      <div class="row-project">
        <li class="project" id="equip">
          <div class="project-image-wrapper">
            <Img fluid={props.data.equipImage.childImageSharp.fluid} />
            <div class="overlay">
              <ul class="image-text">
                <li class="text">MongoDB</li>
                <li class="text">Express.js</li>
                <li class="text">Angular.js</li>
                <li class="text">Node.js</li>
              </ul>
              <ul class="project-links">
                <li class="text project-link-text" id="equip-git">View on Github</li>
              </ul>
            </div>
          </div>
          <div class="project-description">
            <h3>E-quip</h3>
            <p>Lately, I\'ve been working on building an online store for electronics and accessories utilizing Javascript and the M.E.A.N. stack.  Inventory items are stored in JSON format using MongoDB.  Users can filter, sort, and search for items while store owners can update the inventory as needed.</p>
          </div>
        </li>
      </div>

      <div class="row-project">
        <li class="project" id="wyr">
          <div class="project-image-wrapper">
          <Img fluid={props.data.wyrImage.childImageSharp.fluid} />            
            <div class="overlay">
              <ul class="image-text">
                <li class="text">HTML</li>
                <li class="text">CSS</li>
                <li class="text">PHP</li>
              </ul>
              <ul class="project-links">
                <li class="text project-link-text" id="wyr-git">View on Github</li>
                <li class="text project-link-text" id="wyr-site">Visit Site</li>
              </ul>
            </div>
          </div>
          <div class="project-description">
            <h3>Where Ya' Rack</h3>
            <p>This site was migrated from Drupal 6 and rebuilt in Wordpress.  I also created a custom plugin using PHP.  The plugin inserts a electronic sponsor form for bicycle racks and provides HTML email confirmations.  It also creates a PDF with the sponsor information, and generates an email sent to the project team.  Sponsors have the ability to pay securely via Paypal.  The organization previously relied on paper forms for bike rack and payment information.  </p>
          </div>
        </li>
      </div>

      <div class="row-project">
        <li class="project" id="equip">
          <div class="project-image-wrapper">
            <Img fluid={props.data.lodownImage.childImageSharp.fluid} />
            <div class="overlay">
              <ul class="image-text">
                <li class="text">Javascript</li>
                <li class="text">Node.js</li>
              </ul>
              <ul class="project-links">
                <li class="text project-link-text" id="lodown-git">View on Github</li>
              </ul>
            </div>
          </div>
          <div class="project-description">
            <h3>Lodown</h3>
            <p>An npm functional Javascript libary.  The library utilizes built-in Javascript functions to create more useful functions for manipulating arrays of data. Module.exports object is used to expose each function as a module so the library can be used for future projects.</p>
          </div>
        </li>
      </div>
    </ul>
  </Layout>
)

export default Projects

export const pageQuery = graphql`
  query {
    equipImage: file(relativePath: { eq: "project-image-equip.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wyrImage: file(relativePath: { eq: "project-image-wyr.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lodownImage: file(relativePath: { eq: "project-image-lodown.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;