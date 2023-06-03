import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  PlayPause from './PlayPause';
//import setActiveSong component from redux tool kit to manage state and action of each songSlice
import {playPause, setActiveSong} from '../redux/features/playerSlice';

const SongCard = ({ song, i}) => {
  const activeSong ='active';

  {/* render data onto each songcard */}
  return (
  <div className ="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup
  rounded-lg cursor-pointer">
    
      <div className ="relative w-full h-56 group">
      {/* display song's images, title*/}
      <div className = {`absolute inset-0 justify-center items-center
      bg-black bg-opacity-50 group-hover:flex
      ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}
      `}>
        <PlayPause />
      </div>
       {/* display song's cover image from the Song data*/}
      <img alt = "song_img" src ={song.images?.coverart} />
       {/* decorate title and description*/}
      <div className ="mt-4 flex flex-col">
        <p className = "font-semibold text-lg text-white truncate">
          <Link to = {`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className = "text-sm truncate text-gray-300 mt-1">
          <Link to = {song.artists ? `/artists/${song?.artists[0]?.adamid}`: '/top-artists'}>
            {song.subtitle}
          </Link>  
        </p>
      </div>
    </div>
  </div>
  );
};

export default SongCard;
