import React from 'react';
import Song from './Song.js'

const SongList = (props) => {
  if(!props.songs) return null;
const songNodes = props.songs.map((song, index) => {
  return <Song
    artist={props.songs[index]["im:artist"].label}
    title={props.songs[index]["im:name"].label}
    key={index + 1}
    position={index + 1}/>
})
  return (
    <ul>
    {songNodes}
    </ul>
  )
}

export default SongList;
