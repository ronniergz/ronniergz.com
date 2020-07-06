import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BlogList = styled.ul`
  list-style: none;
  margin: 0 0 6rem 0;
`;
  
const Entry = styled.li`
  width: 90%;
  margin: 2rem auto;
`;
  
const Date = styled.p`
  font-size: 1rem;
`;

const postLink = {
  fontSize: '1.5rem',
}

const Blog = ({data}) => (
  <Layout>
      <SEO title="Blog" />
      <div className="banner">
        <div className="container">
          <h1>My Blog</h1>
          <h2>Latest posts live here</h2>
        </div>
      </div>
      <div className="container">
        <BlogList>
          {data.allMarkdownRemark.edges.map(post => (
            <Entry>
              <Link style={postLink}
                to={post.node.frontmatter.path}
                key={post.node.id}>
                {post.node.frontmatter.title}
              </Link>
              <Date>{post.node.frontmatter.date}</Date>
            </Entry>
          ))}
        </BlogList>
      </div>
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
