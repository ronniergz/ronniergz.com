import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
// import ProfileImage from "../components/images"
import SEO from "../components/seo"

const ProfileImgWrapper = styled.figure`
  margin: 4rem auto;
  width: 90%;
  max-width: 450px;
`;

const Text = styled.p`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
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

      <div className="row mx-0 mb-4">
        <div className="col-lg">
          <ProfileImgWrapper>
            <Img fluid={props.data.profileImage.childImageSharp.fluid} />
          </ProfileImgWrapper>
        </div>
        <div className="col-lg">
          <Text>I'm a Web Developer, and have been working in the engineering field for most of my career.  I have 
            a degree in Electrical Engineering and my background is in instrumentation and control systems.  
            I'm always down to solve problems with software whether it be a large scale control system or a single 
            page web application.
          </Text>
        </div>
      </div>

      <div className="row mx-0 mb-4">
        <div className="col text-center">
          <p>In my spare time, I'm exploring modern Javascript and the common frameworks that power today's web.  
            When I'm not in front of the computer, you can find me brewing beer, running a mile or two, or playing 
            tug-of-war with my English Bulldog.</p>
          <p>I'm available for projects large or small.</p>
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