import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
          <Link
            to={post.node.frontmatter.path}
            key={post.node.id}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { published: { eq: true }}}
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
            date
          }
        }
      }
    }
  }
`

export default IndexPage
