import React from 'react';
import { navigate } from 'gatsby';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


const SearchForm = ({ query }) => (
  <form role="search" method="GET">
    <label htmlFor="search-input"><h1></h1></label>
    <input
    	className="search__input searchbar"
      type="search"
      id="search-input"
      name="keywords"
      onChange={(e) => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
      placeholder={"搜尋"}
      value={query}
    />
    <br />
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">原始文類</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="keywords" value="出版品"/>}
            label="出版品"
          />
          <FormControlLabel
            control={<Checkbox name="keywords" value="音樂" />}
            label="音樂"
          />
          <FormControlLabel
            control={<Checkbox name="keywords" value="展演" />}
            label="展演"
          />
          <FormControlLabel
            control={<Checkbox name="keywords" value="電影" />}
            label="電影"
          />
          <FormControlLabel
            control={<Checkbox name="keywords" value="腳本" />}
            label="腳本"
          />
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">類型</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="keywords" value="冒險" />}
            label="冒險"
          />
          <FormControlLabel
            control={<Checkbox name="keywords" value="科幻" />}
            label="科幻"
          />
          <FormControlLabel
            control={<Checkbox name="keywords" value="家庭" />}
            label="家庭"
          />
          <FormControlLabel
            control={<Checkbox name="keywords" value="浪漫" />}
            label="浪漫"
          />
          <FormControlLabel
            control={<Checkbox name="keywords" value="劇情" />}
            label="劇情"
          />
          <FormControlLabel
            control={<Checkbox name="keywords" value="傳記" />}
            label="傳記"
          />
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">建議改編領域</FormLabel>
        <FormGroup>
		      <TreeView
			      defaultCollapseIcon={<ExpandMoreIcon />}
			      defaultExpandIcon={<ChevronRightIcon />}
			      multiSelect
			    >
			      <TreeItem nodeId="1" label="電影">
				        <FormControlLabel
			            control={<Checkbox name="keywords" value="劇情長片" />}
			            label="劇情長片"
			          />
				        <FormControlLabel
			            control={<Checkbox name="keywords" value="紀錄長片" />}
			            label="紀錄長片"
			          />
				        <FormControlLabel
			            control={<Checkbox name="keywords" value="其他" />}
			            label="其他"
			          />
			      </TreeItem>
			      <TreeItem nodeId="2" label="戲劇">
				        <FormControlLabel
			            control={<Checkbox name="keywords" value="網路劇" />}
			            label="網路劇"
			          />
				        <FormControlLabel
			            control={<Checkbox name="keywords" value="連續劇" />}
			            label="連續劇"
			          />
				        <FormControlLabel
			            control={<Checkbox name="keywords" value="迷你劇" />}
			            label="迷你劇"
			          />
				        <FormControlLabel
			            control={<Checkbox name="keywords" value="其他" />}
			            label="其他"
			          />
			      </TreeItem>
			    </TreeView>
			  </FormGroup>
			</FormControl>
    </div>
    <br />
    <button type="submit">送出</button>
  </form>
);

export default SearchForm;