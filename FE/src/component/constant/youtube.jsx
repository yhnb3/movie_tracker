import React from 'react';
import YouTube from 'react-youtube';

export default function youture({ video }) {
  const opts = {
    height: '312',
    width: '512',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return <YouTube videoId={video.key} opts={opts} onReady={onReady} />;
}
