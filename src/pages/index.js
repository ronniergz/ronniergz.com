import React from "react"

import Layout from "../components/layout"
import ProfileImage from "../components/images"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="row">
        <div className="col-md-6">
          <ProfileImage/>
        </div>
        <div className="col-md-6">
          <h3>About Me</h3>
          <p> I'm a Javascript developer, and have been working in the engineering field for most of my career.  I have a degree in Electrical Engineering and my background is in instrumentation and control systems for industrial sites.  My passion is solving problems with software whether it be a large scale control system or a single page web application.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <p>In my spare time, I'm exploring modern Javascript and the common frameworks that power today's web.  When I'm not in front of the computer, you can find me brewing beer, running a mile or two, or volunteering for a local non-profit.</p>
      <p>I'm currently working for Brown and Root Industrial Services in St. Rose, Louisiana.</p>
      <p>You can contact me at: <a href="mailto:ronnie@ronniergz.com">ronnie@ronniergz.com</a></p>                
    </div>
    
  </Layout>
)



export default IndexPage
