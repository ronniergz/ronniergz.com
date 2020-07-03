import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 960px) {
    font-size: 1.2rem;
  }
`;

const ProjectList = styled.ul`
  list-style-type: none;
  margin: 3rem;
`;

const Project = styled.li`
  margin: 6rem auto;
`;

const Title = styled.h3`  
  @media (min-width: 960px) {
    font-size: 1.75rem;
}

`;

const ProjectImgWrapper = styled.figure`
  position: relative;
  width: 100%;
  max-width: 290px;
  @media (min-width: 960px) {
    max-width: 400px;
  } 
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background: rgba(2,2,2, 0.5);
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .2s ease;
  ${ProjectImgWrapper}:hover & {
    bottom: 0;
    height: 100%;
  }
`;

const ImgTextList = styled.ul`
  position: absolute;
  margin: auto 0;
  list-style: none;
  padding-left: 0;
  width: 300px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);     
`;

const ImgTextItem = styled.li`
  color: #dddddd;
  display: inline-block;
  font-size: 16px;
  background-color: #313131;
  padding: 0px 10px;
  margin: 5px 10px;
  border-radius: 4px;
  opacity: 1;
`;

const ProjLinkList = styled.ul`
  position: absolute;
  margin: auto 0;
  padding-left: 0;
  top: 85%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const ProjLink = styled(ImgTextItem)`
  cursor:pointer;
`;

const Projects = (props) => (
  <Layout>
    <Container>
      <SEO title="Projects" />
      <ProjectList>

        <Project>
          <div className="row row-project">
            <div className="project-description col-md-6 order-md-2">
              <Title>Mandalorian Fansite</Title>
              <p>A site dedicated to The Mandalorian TV show that includes episode and character guides and even a puzzle. It usitilzes React for the front end design using React components and the Reactstrap library for basic styles and positioning. </p>
            </div>
            <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">
              <ProjectImgWrapper>
                <Img fluid={props.data.mandalorianImage.childImageSharp.fluid} />
                <Overlay>
                  <ImgTextList>
                    <ImgTextItem>Javascript</ImgTextItem>
                    <ImgTextItem>React</ImgTextItem>
                    <ImgTextItem>Node</ImgTextItem>
                  </ImgTextList>
                  <ProjLinkList>
                    <a href="https://github.com/ronniergz/mandalorianfansite">
                      <ProjLink>View on Github</ProjLink>
                    </a>
                    <a href="https://laughing-kalam-53b26c.netlify.app/">
                      <ProjLink>Visit Site</ProjLink>
                    </a>
                  </ProjLinkList>
                </Overlay>
              </ProjectImgWrapper>
            </div>
          </div>
        </Project>

        <Project>
          <div className="row row-project">
            <div className="col-md-6 order-md-2">        
              <Title>JChins Plumbing</Title>
              <p>This is a Single page business information site developed for a local contractor. </p>
            </div>
            <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">        
              <ProjectImgWrapper>
                <Img fluid={props.data.jchinsImage.childImageSharp.fluid} />
                <Overlay>
                  <ImgTextList>
                    <ImgTextItem>Bootstrap.js</ImgTextItem>
                    <ImgTextItem>Node.js</ImgTextItem>
                  </ImgTextList>
                  <ProjLinkList>
                    <a href="http://stealth-sandbox.xyz">
                      <ProjLink>Visit Site</ProjLink>
                    </a>
                  </ProjLinkList>
                </Overlay>
              </ProjectImgWrapper>
            </div>
          </div>
        </Project>

        <Project>
          <div className="row row-project">
            <div className="col-md-6 order-md-2">               
              <Title>Where Ya' Rack</Title>
              <p>This site was migrated from Drupal 6 and rebuilt in Wordpress.  I also created a custom plugin using PHP.  The plugin inserts a electronic sponsor form for bicycle racks and provides HTML email confirmations.  It also creates a PDF with the sponsor information, and generates an email sent to the project team.  Sponsors have the ability to pay securely via Paypal.  The organization previously relied on paper forms for bike rack and
              </p>
            </div>
            <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">             
              <ProjectImgWrapper>
              <Img fluid={props.data.wyrImage.childImageSharp.fluid} />            
                <Overlay>
                  <ImgTextList>
                    <ImgTextItem>HTML</ImgTextItem>
                    <ImgTextItem>CSS</ImgTextItem>
                    <ImgTextItem>PHP</ImgTextItem>
                  </ImgTextList>
                  <ProjLinkList>
                    <a href="http://www.whereyarack.org/">
                      <ProjLink>Visit Site</ProjLink>
                    </a>
                  </ProjLinkList>
                </Overlay>
              </ProjectImgWrapper>
            </div>
          </div>
        </Project>


        <Project>
          <div className="row row-project">
            <div className="col-md-6 order-md-2">        
              <Title>E-quip</Title>
              <p>I've been working on building an online store for electronics and accessories utilizing Javascript and the M.E.A.N. stack.  Inventory items are stored in JSON format using MongoDB.  Users can filter, sort, and search for items while store owners can update the inventory as needed.</p>
            </div>
            <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">        
              <ProjectImgWrapper>
                <Img fluid={props.data.equipImage.childImageSharp.fluid} />
                <Overlay>
                  <ImgTextList>
                    <ImgTextItem>MongoDB</ImgTextItem>
                    <ImgTextItem>Express.js</ImgTextItem>
                    <ImgTextItem>Angular.js</ImgTextItem>
                    <ImgTextItem>Node.js</ImgTextItem>
                  </ImgTextList>
                  <ProjLinkList>
                    <a href="https://github.com/ronniergz/e-quip">
                      <ProjLink>View on Github</ProjLink>
                    </a>
                  </ProjLinkList>
                </Overlay>
              </ProjectImgWrapper>
            </div>
          </div>
        </Project>

      </ProjectList>
    </Container>
  </Layout>
)

export default Projects

export const pageQuery = graphql`
  query {
    mandalorianImage: file(relativePath: { eq: "project-image-mandalorian.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jchinsImage: file(relativePath: { eq: "project-image-jchins.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    equipImage: file(relativePath: { eq: "project-image-equip.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wyrImage: file(relativePath: { eq: "project-image-wyr.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;