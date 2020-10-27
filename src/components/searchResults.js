import React from 'react';

const SearchResults = ({
	query,
	results
}) => (
  <section aria-label="Search results for all posts">
		{!!results.length && query && 
		  <h2
		    className="search-results-count"
		    id="search-results-count"
		    aria-live="assertive"
		  >
		  	Found {results.length} posts on "{query}"
		  </h2>
		}
		{!!results.length &&
		  <ol className="search-results-list">
		    {results.map(({
		      title,
		      url,
		    }
			) => (
			    <li key={title}>
		        <h3 className="search-results-list__heading">
		          <a href={url} className="search-results-list__link">
		            {title}
		          </a>
		        </h3>
		      </li>
			  ))}
		  </ol>
		}
  </section>
);

export default SearchResults;