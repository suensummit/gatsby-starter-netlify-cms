import React from 'react';
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'


const SearchResults = ({
	query,
	results
}) => (
  <section aria-label="Search results for all IPs">
		{!!results.length && query && 
		  <h2
		    className="search-results-count"
		    id="search-results-count"
		    aria-live="assertive"
		  >
		  	根據 "{query}" 條件篩選出 {results.length} 組 IP：
		  </h2>
		}
		{!!results.length &&
		  <div className="columns is-multiline">
		    {results.map(({
		      title,
		      url,
		      featuredimage,
		      cats,
		      tags,
		      logline,
		    }
			) => (
			    <div className="is-parent column content is-12" key={url}>
			    	<article className="blog-list-item tile is-child box">
			    		<header>
                {featuredimage ? (
                  <div className="featured-thumbnail">
                    <img
                      src={featuredimage}
                    />
                  </div>
                ) : null}
                <p className="post-meta">
		              <Link 
		                className="title has-text-primary is-size-4"
		                to={url}>
		                {title}
		              </Link>
		             	<span></span>
                  {cats && cats.length ? (
                    <div style={{ marginTop: `1rem` }}>
                      <ul className="catlist">
                        {cats.map((cat) => (
                          <li key={cat + `cat`}>
                            <Link to={`/search?keywords=${kebabCase(cat)}`}>{cat}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {tags && tags.length ? (
                    <div style={{ marginTop: `1rem` }}>
                      <ul className="taglist">
                        {tags.map((tag) => (
                          <li key={tag + `tag`}>
                            <Link to={`/search?keywords=${kebabCase(tag)}`}>{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <br />
                  <span className="subtitle is-size-5 is-block">
                    {logline}
                  </span>
                </p>
              </header>
              <p>
                <br />
                <Link className="button" to={url}>
                  閱讀更多》
                </Link>
              </p>
            </article>
          </div>
			  ))}
		  </div>
		}
  </section>
);

export default SearchResults;