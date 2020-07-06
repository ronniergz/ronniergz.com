import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
// import ProfileImage from "../components/images"
import SEO from "../components/seo"

const ProfileImgWrapper = styled.figure`
  margin: 4rem auto;
  width: 75%;
  max-width: 450px;
`;

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="banner">
      <div className="container">
        <h1>About Me</h1>
        <h2>Developer, Brewer, Gamer, Bulldog Wrangler.  Out there slinging Javascript.</h2>
      </div>
    </div>
    <div className="container">
      <div>
        <p> I'm a Javascript developer, and have been working in the engineering field for most of my career.  I have a degree in Electrical Engineering and my background is in instrumentation and control systems for industrial sites.  My passion is solving problems with software whether it be a large scale control system or a single page web application.</p>
      </div>
      <div>
        <ProfileImgWrapper>
          <Img fluid={props.data.profileImage.childImageSharp.fluid} />
        </ProfileImgWrapper>
      </div>
      <div className="row mx-0 mb-4">
        <div className="col text-center">
          <p>In my spare time, I'm exploring modern Javascript and the common frameworks that power today's web.  When I'm not in front of the computer, you can find me brewing beer, running a mile or two, or playing tug-of-war with my English Bulldog, Molly.</p>
          <p>I'm currently working for Brown and Root Industrial Services.</p>
          <p>You can contact me at: <a href="mailto:ronnie@ronniergz.com">ronnie@ronniergz.com</a></p>       
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;