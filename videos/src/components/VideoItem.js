import './VideoItem.css';
import React from "react";

const VideoItem = ({ video }) => {//instead of props.video u can destructure it like so ({video})
  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
      <div className="content">
      <div className="header">{video.snippet.title}</div>
      </div>
      
    </div>
  );
};

export default VideoItem;
