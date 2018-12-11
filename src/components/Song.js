import React from 'react';

const Song = ({artist, position, title}) => {
  return (
    <li>Number  {position} is {title} by {artist}. </li>
  )

}

export default Song;
