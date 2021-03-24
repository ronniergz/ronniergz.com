import React from 'react';
import Layout from "../components/layout"
import styled from "styled-components"
import { Disqus } from 'gatsby-plugin-disqus';

const Container = styled.div`
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 2rem;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Title = styled.h1`
  margin: 1rem auto 1rem auto;
  @media (min-width: 540px) {
    font-size: 3rem;
  }
`;

const Date = styled.p`
  font-size: 0.8rem;
  text-align: right;
  padding-right: 1rem;
  @media (min-width: 540px) {
    font-size: 0.9rem;
  }
`;

const Post = styled.div`
  margin-bottom: 10rem;

`;


export default function Template({ data }) {
  const { markdownRemark: post } = data;
  let disqusConfig = {
    url: post.frontmatter.path,
    identifier: post.frontmatter.date,
    title: post.frontmatter.title,
  }
  return (
    <Layout>
      <Container>
        <a href="/blog">&lt; Back</a>
        <Title>{post.frontmatter.title}</Title>
        <Date>{post.frontmatter.date}</Date>
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />
        <Disqus
          config={disqusConfig}
        />
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`