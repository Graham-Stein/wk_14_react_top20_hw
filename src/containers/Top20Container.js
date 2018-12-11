import React from 'react';
import SongList from '../components/SongList.js';
// import Song from '..components/Song.js';


class Top20Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: null,
      songList: [],
      song: null
    };
}

componentDidMount(){
    const url ='https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({music: data.feed.entry})
      // console.log('data loaded', this.state.music);
    });

    request.send();
  }

    render(){
      return(
        <>
        <h1>Top 20</h1>
        <SongList songs= {this.state.music}/>
        </>
      );
    }

}

export default Top20Container;
