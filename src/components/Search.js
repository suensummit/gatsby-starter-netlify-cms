import React, { Component, Image } from 'react'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Select from 'react-select'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const options = [
  {
    label: "原始文類",
    options: [
      { label: "原始文類 - 出版品", value: "出版品" },
      { label: "原始文類 - 音樂", value: "音樂" },
      { label: "原始文類 - 展演", value: "展演" },
      { label: "原始文類 - 電影", value: "電影" },
      { label: "原始文類 - 劇本", value: "劇本" }
    ]
  },
  {
    label: "類型",
    options: [
      { label: "類型 - 動作", value: "動作" },
      { label: "類型 - 成人", value: "成人" },
      { label: "類型 - 冒險", value: "冒險" },
      { label: "類型 - 動畫", value: "動畫" },
      { label: "類型 - 傳記", value: "傳記" },
      { label: "類型 - 喜劇", value: "喜劇" },
      { label: "類型 - 犯罪", value: "犯罪" },
      { label: "類型 - 家庭", value: "家庭" },
      { label: "類型 - 劇情", value: "劇情" },
      { label: "類型 - 奇幻", value: "奇幻" },
      { label: "類型 - 黑色", value: "黑色" },
      { label: "類型 - 歷史", value: "歷史" },
      { label: "類型 - 恐怖", value: "恐怖" },
      { label: "類型 - 音樂", value: "音樂" },
      { label: "類型 - 歌舞", value: "歌舞" },
      { label: "類型 - 懸疑", value: "懸疑" },
      { label: "類型 - 浪漫", value: "浪漫" },
      { label: "類型 - 科幻", value: "科幻" },
      { label: "類型 - 運動", value: "運動" },
      { label: "類型 - 驚悚", value: "驚悚" },
      { label: "類型 - 戰爭", value: "戰爭" },
      { label: "類型 - 西部", value: "西部" },
      { label: "類型 - 災難", value: "災難" }
    ]
  },
  {
    label: "建議改編領域",
    options: [
      { label: "建議改編領域 - 出版品", value: "出版品" },
      { label: "建議改編領域 - 音樂", value: "音樂" },
      { label: "建議改編領域 - 展演", value: "展演" },
      { label: "建議改編領域 - 電影", value: "電影" },
      { label: "建議改編領域 - 戲劇", value: "戲劇" }
    ]
  }
];

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
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">原始文類</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="出版品" />}
                label="出版品"
              />
              <FormControlLabel
                control={<Checkbox name="音樂" />}
                label="音樂"
              />
              <FormControlLabel
                control={<Checkbox name="展演" />}
                label="展演"
              />
              <FormControlLabel
                control={<Checkbox name="電影" />}
                label="電影"
              />
              <FormControlLabel
                control={<Checkbox name="腳本" />}
                label="腳本"
              />
            </FormGroup>
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">類型</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="冒險" />}
                label="冒險"
              />
              <FormControlLabel
                control={<Checkbox name="科幻" />}
                label="科幻"
              />
              <FormControlLabel
                control={<Checkbox name="家庭" />}
                label="家庭"
              />
              <FormControlLabel
                control={<Checkbox name="浪漫" />}
                label="浪漫"
              />
              <FormControlLabel
                control={<Checkbox name="劇情" />}
                label="劇情"
              />
              <FormControlLabel
                control={<Checkbox name="傳記" />}
                label="傳記"
              />
            </FormGroup>
            <FormHelperText></FormHelperText>
          </FormControl>
        </div>
        <br />
        <Select
          defaultValue={[options[2].options[0], options[0].options[2]]}
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