import React, {Component} from 'react';
import VideoItem from './video_item';

class VideoList extends Component {
    
    constructor(props) {
        super(props);
    }

    renderVideos() {
        console.log('renderVideos');
        return this.props.videos.map((video)=>
                <VideoItem 
                    video={video}
                    key={video.etag}
                    onVideoClicked={this.props.onSelectedVideo}/>
        );
    }

    render() {
        return(
           <ul className="col-md-12 list-group">
               {this.renderVideos()}
            </ul> 
        );
    }

}

export default VideoList;