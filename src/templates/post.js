import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 2rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Title = styled.h1`
  margin: 1rem auto 3rem auto;
  @media (min-width: 540px) {
    font-size: 3rem;
  }
`;

export default function Template({data}) {
  const {markdownRemark: post} = data;
  // OR const post = data.markdownRemark;
  return (
    <Layout>
      <Container>
        <div>
          <a href="/blog">&lt; Back</a>
          <Title>{post.frontmatter.title}</Title>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
      </Container>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html,
      frontmatter {
        path
        title
      }
    }
  }
`