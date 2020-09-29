import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Media } from "reactstrap"

const BlogList = styled.ul`
  list-style: none;
  margin: 0 0 10rem 0;
`;

const Entry = styled.li`
  width: 90%;
  margin: 2rem auto;
  font-size: 1.25rem;
  @media (min-width: 671px) {
    font-size: 1.5rem;
  }
`;

const Date = styled.p`
  font-size: 1rem;
  @media (min-width: 671px) {
    font-size: 1.1rem;
  }
`;

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div className="banner">
      <div className="container">
        <h1>Blog</h1>
        <p>Latest posts live here</p>
      </div>
    </div>
    <div className="container">
      <BlogList>
        {data.allMarkdownRemark.edges.map(post => (
          <Entry>
            <Link
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }}}
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
export default Blog
