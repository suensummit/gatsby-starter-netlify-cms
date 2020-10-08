import React, { Component } from 'react'
import { Link } from 'gatsby'
 
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
        <ul className='search__list'>
          {this.state.results.map((page) => (
          <li key={page.url}>
            <Link className='search__list_white search__list_non-decoration'
              to={page.url}>
              {page.title}
            </Link>
          </li>
          ))}
        </ul>
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