import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


export const BlogPostTemplate = ({
  content,
  featuredimage,
  logline,
  cats,
  tags,
  title,
  author,
  origin,
  publisher,
  year,
  owner,
  dev,
  property,
  signature,
  field,
  spec,
  refs,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        {featuredimage ? (
          <PreviewCompatibleImage
            imageInfo={{
              image: featuredimage,
              alt: `featured image thumbnail for post ${title}`,
            }}
          />
        ) : null}
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
          </div>
        </div>
        <div className="columns">
          <TableContainer component={Paper} className="column is-8 is-offset-1">
            <Table aria-label="simple table">
              <TableBody>
                <TableRow key={title}>
                  <TableCell className="column is-4 is-offset-1">
                    LOGLINE ----
                    <br />
                    {logline}
                  </TableCell>
                  <TableCell className="column is-8 is-offset-1">
                    TYPE ----
                    <br />
                    {cats && cats.length ? (
                      <div style={{ marginTop: `1rem` }}>
                        <ul className="catlist">
                          {cats.map((cat) => (
                            <li key={cat + `cat`}>
                              <Link to={`/cats/${kebabCase(cat)}/`}>{cat}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <br />
                    KEYWORD ----
                    <br />
                    {tags && tags.length ? (
                      <div style={{ marginTop: `1rem` }}>
                        <ul className="taglist">
                          {tags.map((tag) => (
                            <li key={tag + `tag`}>
                              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            基本資訊 Information
          </div>
        </div>
        <div className="columns">
          <TableContainer component={Paper} className="column is-8 is-offset-1">
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" className="column is-4 is-offset-1">創作者</TableCell>
                  <TableCell><Link to={`https://zh.wikipedia.org/wiki/${author}`}>{author}</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" className="column is-4 is-offset-1">原始文體</TableCell>
                  <TableCell>{origin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" className="column is-4 is-offset-1">版權擁有者</TableCell>
                  <TableCell><Link to={`https://zh.wikipedia.org/wiki/${owner}`}>{owner}</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" className="column is-4 is-offset-1">出版者</TableCell>
                  <TableCell>{publisher}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" className="column is-4 is-offset-1">目前開發狀態</TableCell>
                  <TableCell>{dev}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            詮釋資訊 Highlights
          </div>
        </div>
        <div className="columns">
          <TableContainer component={Paper} className="column is-8 is-offset-1">
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" className="column is-4 is-offset-1">作品特色</TableCell>
                  <TableCell>{signature}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" className="column is-4 is-offset-1">建議改編領域</TableCell>
                  <TableCell>{field}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" className="column is-4 is-offset-1">建議改編規格</TableCell>
                  <TableCell>{spec}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" className="column is-4 is-offset-1">改編參考</TableCell>
                  <TableCell><Link to={`https://zh.wikipedia.org/wiki/${refs}`}>{refs}</Link></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  logline: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        logline={post.frontmatter.logline}
        helmet={
          <Helmet titleTemplate="%s | IP">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="logline"
              content={`${post.frontmatter.logline}`}
            />
          </Helmet>
        }
        dev={post.frontmatter.dev}
        refs={post.frontmatter.refs}
        cats={post.frontmatter.cats}
        tags={post.frontmatter.tags}
        year={post.frontmatter.year}
        spec={post.frontmatter.spec}
        title={post.frontmatter.title}
        owner={post.frontmatter.owner}
        field={post.frontmatter.field}
        author={post.frontmatter.author}
        origin={post.frontmatter.origin}
        property={post.frontmatter.property}
        publisher={post.frontmatter.publisher}
        signature={post.frontmatter.signature}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        logline
        cats
        tags
        author
        origin
        publisher
        year
        owner
        dev
        property
        signature
        field
        spec
        refs
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 250, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
