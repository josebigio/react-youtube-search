import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyAihlKnwXV_zqg7Sn2TBsZHKwPglURaqBA';



class App extends Component{

  constructor(props) {

    super(props);
    this.state = {
      videos:[],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'surfboards' }, (videos)=>{
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }

  onSelectedVideo(selectedVideo) {
    this.setState({selectedVideo});
  }

  render() {
    return (
        <div>
          <SearchBar/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo.bind(this)}/>
        </div>
      );
  }
  
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
