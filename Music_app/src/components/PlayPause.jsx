import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

{/* PlayPause is a variable that shows pause icon when song isPlaying and & the current song's title is equal to song's title.*/}
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => ( isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle 
    size = {35} 
    className = "text-gray-300"
    onClick = {handlePause}
  />
) : (
  <FaPlayCircle 
    size = {35}
    className = "text-gray-300"
    onClick = {handlePlay}
    />
));

export default PlayPause;
