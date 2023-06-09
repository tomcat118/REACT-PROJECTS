// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import  PlayPause from './PlayPause';
// //import setActiveSong component from redux tool kit to manage state and action of each songSlice
// import {playPause, setActiveSong} from '../redux/features/playerSlice';


// const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
//   {/* think state as a cake with slices with various flavors, useSelector inputs cake and outpput the slice we want  
//     here we use activeSong and isPlayng variable to track the user  player states
//   dispatch allows change to the state*/}
//   const dispatch = useDispatch();
  
//   const handlePauseClick = () => {
//     dispatch(playPause(false));
//   };
//   const handlePlayClick = () => {
//     dispatch(setActiveSong({ song, data, i }));
//     dispatch(playPause(true));
//   };
//   {/* render data onto each songcard */}
//   return (  
//   <div className ="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup
//   rounded-lg cursor-pointer">
    
//       <div className ="relative w-full h-56 group">
//       {/* display song's images, title*/}
//       <div className = {`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
//         <PlayPause
//             isPlaying={isPlaying}
//             activeSong={activeSong}
//             song={song}
//             handlePause={handlePauseClick}
//             handlePlay={handlePlayClick}
//           />
//       </div>
//        {/* display song's cover image from the Song data*/}
//       <img alt = "song_img" src ={song.images?.coverart} />
//     </div>
//     {/* songcard with title, description, links and and artistis
//           decorate title and description*/}
//     <div className ="mt-4 flex flex-col">
//       <p className="font-semibold text-lg text-white truncate">
//           <Link to={`/songs/${song?.key}`}>
//             {song.title}
//           </Link>
//         </p>
//         <p className="text-sm truncate text-gray-300 mt-1">
//           <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
//             {song.subtitle}
//           </Link>
//         </p>
//       </div>
//   </div>
//   );
// };

// export default SongCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} className="w-full h-full rounded-lg" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;