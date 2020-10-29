import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  const cats = entry.getIn(['data', 'cats'])
  return (
    <BlogPostTemplate
      // content={widgetFor('內容')}
      logline={entry.getIn(['data', 'logline'])}
      tags={tags && tags.toJS()}
      cats={cats && cats.toJS()}
      title={entry.getIn(['data', '標題'])}
      author={entry.getIn(['data', '創作者'])}
      signature={entry.getIn(['data', '作品特色'])}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
