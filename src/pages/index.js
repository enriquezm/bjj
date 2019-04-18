import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const PostsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Post = styled.div`
  width: 30%;
  padding: 5px;
  margin-bottom: 50px;
  h3 {
    margin-bottom: 10px;
  }
  @media (max-width: 960px) {
    width: 45%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  img {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
    transform: scale3d(1, 1, 1);
    &:hover {
      transform: scale3d(1.2, 1.2, 1.2);
      transition: all 0.3s;
    }
  }
`

const Title = styled.h3`
  font-size: 20px;
  margin: 25px 0 5px 0;
  a {
    color: #141414;
    text-decoration: none;
    transition: 0.2s all;
    &:hover {
      color: #a0a0a0;
      transition: 0.3s all;
    }
  }
`

const Date = styled.p`
  color: #a0a0a0;
  font-size: 14px;
  margin-bottom: 5px;
`

const Description = styled.p`
  margin: 5px 0 10px 0;
  font-size: 16px;
  line-height: 30px;
  color: #646464;
  font-weight: 300;
`

const TextButton = styled(Link)`
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  padding: 5px 0;
  border-bottom: 1px solid #7C26CB;
  color: #7C26CB;
  transition: 0.2s all;
  &:hover {
    color: #cb26c8;
    border-bottom: 1px solid #cb26c8;
    transition: 0.3s all;
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `bjj`, `jiu jitsu`]}
        />
        <PostsContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Post key={node.fields.slug}>
                <ImageContainer>
                  <Link to={node.fields.slug}>
                    <Image sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                  </Link>
                </ImageContainer>
                <Title>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </Title>
                <Date>{node.frontmatter.date}</Date>
                <Description
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <TextButton to={node.fields.slug}>Read More</TextButton>
              </Post>
            )
          })}
        </PostsContainer>
        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 768) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
