import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Blog = ({data}) => (
  <Layout>
    <Container>
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
      </Container>
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
