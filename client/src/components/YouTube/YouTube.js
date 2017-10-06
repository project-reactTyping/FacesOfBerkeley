import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import YTSearchBar from '../../components/YTSearchBar';
import YTVideoList from '../../components/YTVideoList';
import YTVideoDetail from '../../components/YTVideoDetail';
import "./YouTube.css";

const API_KEY = 'AIzaSyA9ElpHPFtemSxV2AE0fxy2iBNCAY3sMUA';

class YouTube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 0);

    return (
      <div>
        <YTSearchBar onSearchTermChange={videoSearch} />
        <br />
        <h3>Video Details:</h3>
        <YTVideoDetail video={this.state.selectedVideo}/>
        <br />
        <h3>Video List:</h3>
        <YTVideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
    );
  }
}


export default YouTube;