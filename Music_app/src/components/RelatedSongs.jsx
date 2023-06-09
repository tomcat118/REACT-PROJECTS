// import React from 'react';

// import SongBar  from './SongBar';

// { /*Display your related songs for each song object */}
// const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
//   <div className="flex flex-col">
//     <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

//     <div className="mt-6 w-full flex flex-col">
//       {data?.map((song, i) => (
//         // song bar that display related songs regarding the song or the artist
//         <SongBar
//           key={`${song.key} - ${artistId} -${i}`}
//           song={song}
//           i={i}
//           artistId={artistId}
//           isPlaying={isPlaying}
//           activeSong={activeSong}
//           handlePauseClick={handlePauseClick}
//           handlePlayClick={handlePlayClick}
//         />
//       ))}
//     </div>

//   </div>
// );

// export default RelatedSongs;

import React from 'react';

import SongBar from './SongBar';

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${artistId}-${song.key}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;