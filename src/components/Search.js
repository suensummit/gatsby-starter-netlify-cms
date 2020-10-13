import React, { Component, Image } from 'react'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Select from 'react-select'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const options = [
  { value: 'chocolate', label: '冒險' },
  { value: 'strawberry', label: '奇幻' },
  { value: 'vanilla', label: '懸疑' }
]

class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  render() {
    return (
      <div className={this.props.classNames}>
        <input className="search__input searchbar"
          type="text"
          value={this.state.query}
          onChange={this.search}
          placeholder={"搜尋"}
        />
        <br />
        <Select
          defaultValue={[options[2], options[3]]}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <br />
        <div className="columns is-multiline">
          {this.state.results.map((page) => (
            <div className="is-parent column content is-12" key={page.url}>
              <article className="blog-list-item tile is-child box">
                <header>
                  {page.featuredimage ? (
                    <div className="featured-thumbnail">
                      <img
                        src={page.featuredimage}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link 
                      className="title has-text-primary is-size-4"
                      // className='search__list_white search__list_non-decoration'
                      to={page.url}>
                      {page.title}
                    </Link>
                    <span></span>
                    {page.cats && page.cats.length ? (
                      <div style={{ marginTop: `1rem` }}>
                        <ul className="catlist">
                          {page.cats.map((cat) => (
                            <li key={cat + `cat`}>
                              <Link to={`/cats/${kebabCase(cat)}/`}>{cat}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {page.tags && page.tags.length ? (
                      <div style={{ marginTop: `1rem` }}>
                        <ul className="taglist">
                          {page.tags.map((tag) => (
                            <li key={tag + `tag`}>
                              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <br />
                    <span className="subtitle is-size-5 is-block">
                      {page.logline}
                    </span>
                  </p>
                </header>
                <p>
                  <br />
                  <Link className="button" to={page.url}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    )
  }

  getSearchResults(query) {
    if (!query || !window.__LUNR__) return []
    console.log(window.__LUNR__)
    const results = window.__LUNR__.jp.index.search(query)
    return results.map(({ ref }) => window.__LUNR__.jp.store[ref])
  }

  search = event => {
    const query = event.target.value
    const results = this.getSearchResults(query)
    this.setState({ results, query })
  }
}

export default Search