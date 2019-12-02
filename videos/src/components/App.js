import React from "react";
import SearchBar from "./SearchBar";
// import youtube from "../apis/youtube";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyC155gl9ebjiGxd5cYGPkxt36STlGarSbs";

class App extends React.Component {
  state = { videos: [] };

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
      this.setState({ videos: response });
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        Found {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
