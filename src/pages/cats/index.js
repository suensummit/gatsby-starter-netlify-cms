import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import PageRoll from '../../components/PageRoll'
import HeaderSlider from '../../components/HeaderSlider'


const CatsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <HeaderSlider />
    <section className="section">
      <Helmet title={`首頁 | ${title}`} />
      <div className="container content">
        <div>
          <input className="searchbar"
            key="keyword"
            placeholder={"搜尋"}
          />
        </div>
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <ul className="catlist">
              {group.map((cat) => (
                <li key={cat.fieldValue}>
                  <Link to={`/cats/${kebabCase(cat.fieldValue)}/`}>
                    {cat.fieldValue} ({cat.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2 is-bold-light"></h1>
            <BlogRoll />
            <div className="column is-10 has-text-centered">
              <Link className="btn" to="/blog">
                更多排行
              </Link>
            </div>
          </div>
        </div>
        <div className="columns is-12 categories">
          <div className="column is-4 is-offset-0">
            <img src="/img/cat1.png" alt=""/>
          </div>
          <div className="column is-4 is-offset-0">
            <img src="/img/cat2.png" alt=""/>
          </div>
          <div className="column is-4 is-offset-0">
            <img src="/img/cat3.png" alt=""/>
          </div>
        </div>
        <div className="columns is-12 categories">
          <div className="column is-4 is-offset-0">
            <img src="/img/cat4.png" alt=""/>
          </div>
          <div className="column is-4 is-offset-0">
            <img src="/img/cat5.png" alt=""/>
          </div>
          <div className="column is-4 is-offset-0">
            <img src="/img/cat6.png" alt=""/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2 is-bold-light">商情文章</h1>
            <PageRoll />
            <div className="column is-10 has-text-centered">
              <Link className="btn" to="/blog">
                更多商情
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default CatsPage

export const catPageQuery = graphql`
  query CatsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___cats) {
        fieldValue
        totalCount
      }

    }
  }
`
