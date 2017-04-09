import React, {Component} from 'react';
import VideoItem from './video_item';

class VideoList extends Component {
    
    constructor(props) {
        super(props);
    }

    renderVideos() {
        const { onSelectedVideo } = this.props;
        return this.props.videos.map((video)=>
                <VideoItem 
                    video={video}
                    key={video.etag}
                    onVideoClicked={onSelectedVideo}/>
        );
    }

    render() {
        return(
           <ul className="col-md-4 list-group">
               {this.renderVideos()}
            </ul> 
        );
    }

}

export default VideoList;