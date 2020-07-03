import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
// import ProfileImage from "../components/images"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 6rem auto;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProfileImgWrapper = styled.figure`
  margin: 4rem auto;
  width: 75%;
  max-width: 290px;
`;

const IndexPage = (props) => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <div>
        <div className="row mx-0">
          <div className="col-md-6">
            <ProfileImgWrapper>
              <Img fluid={props.data.profileImage.childImageSharp.fluid} />
            </ProfileImgWrapper>
          </div>
          <div className="col-md-6 text-center">
            <h3 className="mt-4">About Me</h3>
            <p> I'm a Javascript developer, and have been working in the engineering field for most of my career.  I have a degree in Electrical Engineering and my background is in instrumentation and control systems for industrial sites.  My passion is solving problems with software whether it be a large scale control system or a single page web application.</p>
          </div>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col text-center">
          <p>In my spare time, I'm exploring modern Javascript and the common frameworks that power today's web.  When I'm not in front of the computer, you can find me brewing beer, running a mile or two, or volunteering for a local non-profit.</p>
          <p>I'm currently working for Brown and Root Industrial Services in St. Rose, Louisiana.</p>
          <p>You can contact me at: <a href="mailto:ronnie@ronniergz.com">ronnie@ronniergz.com</a></p>                
        </div>
      </div>
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;