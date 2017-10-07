import React from 'react';
import YTVideoListItem from '../../components/YTVideoListItem';
import './YTVideoList.css';

const YTVideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <YTVideoListItem
      onVideoSelect = {props.onVideoSelect}
      key = {video.etag}
      video = {video} />
  });

  return (
    <ul className="list-group">
      {videoItems}
    </ul>
  );
};

export default YTVideoList;