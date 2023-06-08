import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';


//handle states of song play or stop
const Discover = (song, isPlaying, activeSong) => {
    {/* dispatch would taken input an object and look through all actions of its state */}
    const dispatch = useDispatch();
    {/* select a specific branch or object of a state from Playerslice.js*/}
    const { } = useSelector((state) => state.player);
    {/* get the data and states from results of API call */}
    const { data, isFetching, error} = useGetTopChartsQuery();
    const genreTitle = 'Pop';
    console.log(data);
    {/* deal with rendering of display process and error occurs on front end  */}
    if(isFetching) return <Loader title ="loeading songs..."/>;
    if (error) return <Error />
    return (
        <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
  
            {/*select bar that allows the user to select genres*/ }
            <select
                onChange= {() => {}}
                value = ""
                className ="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
            >   
            {/* map each genres to an option tag that display the title of genre*/ }
                {genres.map((genre) => <option key = {genre.value} value ={genre.value}> {genre.title}</option>)}
            </select>
            </div>
            
            {/*create 10 song cards to display data of songs to the card*/}
            <div className ="flex flex-wrap sm:justify-start justify-center gap-8">
                {/* if data array exists, map each song and ID into the songcard */}
                {data?.map((song, i) => (
                <SongCard 
                    key = {song.key}
                    song = {song}
                    i ={i}
                    isPlaying = {isPlaying}
                    activeSong = {activeSong}
                    data = {data}
                />
                ))}
       
            </div>
        </div>
    )
};

export default Discover;
