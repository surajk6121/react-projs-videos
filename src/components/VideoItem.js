import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img alt={video.snippet.title} class="ui image" src={video.snippet.thumbnails.medium.url}/>
      <div class="content">
        <a class="header" href="/#">{video.snippet.title}</a>
        <div class="description">Description</div>
      </div>
    </div>
  )
};

export default VideoItem;