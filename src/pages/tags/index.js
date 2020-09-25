import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('/img/search-index.jpg')`,
      }}
    >
      <div className="input-group">
      </div>
      <input className="searchbar"
        key="keyword"
        placeholder={"搜尋"}
      />
    </div>
    <section className="section">
      <Helmet title={`熱門標籤 | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">熱門標籤</h1>
            <ul className="taglist">
              {group.map((tag) => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="columns is-12 categories">
          <div className="column is-4 is-offset-2">
            <img src="/img/cat1.png" alt=""/>
          </div>
          <div className="column is-4 is-offset-2">
            <img src="/img/cat2.png" alt=""/>
          </div>
          <div className="column is-4 is-offset-2">
            <img src="/img/cat3.png" alt=""/>
          </div>
        </div>
        <div className="columns is-12 categories">
          <div className="column is-4 is-offset-2">
            <img src="/img/cat4.png" alt=""/>
          </div>
          <div className="column is-4 is-offset-2">
            <img src="/img/cat5.png" alt=""/>
          </div>
          <div className="column is-4 is-offset-2">
            <img src="/img/cat6.png" alt=""/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <BlogRoll />
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/blog">
                更多排行
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
