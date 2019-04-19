import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Date = styled.p`
  color: #a0a0a0;
  font-size: 14px;
`
const Content = styled.div`
  font-weight: 300;
  line-height: 30px;
  font-size: 16px;
  color: #646464;
  @media (max-with: 960px) {
    padding: 0 20px;
  }
`

const LineBreak = styled.hr`
  margin: 50px 0;
  border: 1px solid #efefef;
`

const ReadOnSection = styled.ul`
  margin-bottom: 75px;
`



class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {/* <Image sizes={post.frontmatter.featuredImage.childImageSharp.sizes} /> */}
        <h1>{post.frontmatter.title}</h1>
        <Date>
          {post.frontmatter.date}
        </Date>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <LineBreak/>
        <Bio />

        <ReadOnSection
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ReadOnSection>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
