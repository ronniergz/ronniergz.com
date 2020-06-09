import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 400px;
  text-align: center;
`;

const BlogList = styled.ul`
  list-style: none;
  margin: 6rem 0;
`;

const Entry = styled.li`
  width: 75%;
  margin: 2rem auto;
`;

const Date = styled.p`
  font-size: .7rem;
`;

const Blog = ({data}) => (
  <Layout>
    <Container>
      <SEO title="Blog" />
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
