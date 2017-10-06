import React from 'react';
import './YTVideoDetail.css';

const YTVideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" allowFullScreen='true' src={url} title={video.snippet.title}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default YTVideoDetail;