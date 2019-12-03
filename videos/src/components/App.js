import React from "react";
import YTSearch from "youtube-api-search";
// import youtube from "../apis/youtube";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

//Youtube API key
const API_KEY = "AIzaSyC155gl9ebjiGxd5cYGPkxt36STlGarSbs";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('quran reciter'); // quran reciter is going to be the default searched page on the page
  }

  onTermSubmit = term => {
    //call back method called when user clicks submit
    //    const response = await youtube.get('/search', {
    //       params: {
    //         q: term  //q is short for the youtube api query key
    //       }
    //     });
    //     console.log(response);

    this.searchYT(term);
  };

  searchYT = async term => {
    await YTSearch({ key: API_KEY, term }, response => {
      this.setState({
        videos: response,
        selectedVideo: response[0]
      });
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        Found {this.state.videos.length} videos.
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
