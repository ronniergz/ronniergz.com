import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest Posts</h1>
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
export default Blog
