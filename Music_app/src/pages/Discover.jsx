import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
const Discover = () => {
    {/* get the data and states from results of API call */}
    const { data, isFetching, error} = useGetTopChartsQuery();
    const genreTitle = 'Pop';
    console.log(data);
    if(isFetching) return <Loader title ="loeading songs..."/>;
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
                
                {data?.map((song, i) => (
                <SongCard 
                    key = {song.key}
                    song = {song}
                    i ={i}
                />
                ))}
       
            </div>
        </div>
    )
};

export default Discover;
