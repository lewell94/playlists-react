import React from 'react';

import './App.css';
import PlaylistCard from './playlist-card/Playlist-Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: []
    };
  }

  componentDidMount() {
    fetch('https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json')
      .then(res => res.json())
      .then(res => {
        const { content } = res.featuredPlaylists;

        this.setState({
          playlists: content
        })
      });
  }
  
  render() {
    const playlists = this.state.playlists.map((playlist, i) =>
      <PlaylistCard key={i} playlist={playlist}></PlaylistCard>
    );

    return (
      <div className="App">
        <div class="wave--one"></div>
        <h1>featured playlists</h1>
        <div class="cards">
          {playlists}
        </div>
      </div>
    );
  }
}

export default App;
