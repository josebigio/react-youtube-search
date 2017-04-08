import React, {Component} from 'react';

const VideoItem = ({video, onVideoClicked}) => {
    const { title, description } = video.snippet;
    const { url } = video.snippet.thumbnails.default;
    console.log(`title: ${title}\nd escription: ${description}\nimageUrl: ${url}`)
    return (
        <li className="list-group-item" onClick={()=>onVideoClicked(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={url}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;