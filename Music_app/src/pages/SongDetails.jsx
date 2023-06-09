import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
// import API reducers to fetch specifc data
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  {/* hooks that fetch data from API calls and store in variables, with songid help identify which song we're fetching */}
  const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

  {/* handle loading page when Fetching data */}
  //if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details" />;

  console.log(songData)

  //if (error) return <Error />;
  
//   const handlePauseClick = () => {
//     dispatch(playPause(false));
//   };

//   {/* dispatch to play specific song */}
//   const handlePlayClick = (song, i) => {
//     dispatch(setActiveSong({ song, data, i }));
//     dispatch(playPause(true));
//   };

  return (
//     <div className="flex flex-col">
//       {/* <DetailsHeader
//         artistId={artistId}
//         songData={songData}
//       /> */}

<div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

    {/* display the Lyrics by line/tag if there's a LYRICS section in each songData object */}
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1]?.text.map((line, i) => (
              <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">{line}</p>
            ))
            : (
              <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )}
        </div>
      </div>
//     {/* section handles data of related songs */}
//       {/* <RelatedSongs
//         data={data}
//         artistId={artistId}
//         isPlaying={isPlaying}
//         activeSong={activeSong}
//         handlePauseClick={handlePauseClick}
//         handlePlayClick={handlePlayClick}
//       /> */}
//</div>

  );
};

export default SongDetails;