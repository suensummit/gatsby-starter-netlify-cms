import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/Layout";
import SearchForm from '../components/searchForm';
import SearchResults from '../components/searchResults';

const Search = ({
  data,
  location
}) => {
  const [results, setResults] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get('keywords') || '';

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.jp.index.search(searchQuery);
        const posts = refs.map(({ ref }) => lunr.jp.store[ref]);
        setResults(posts);
      });
    }
  }, [location.search]);

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SearchForm query={searchQuery} />
      <SearchResults
        query={searchQuery}
        results={results}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Search;