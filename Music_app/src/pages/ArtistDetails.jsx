import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
// import API reducers to fetch specifc data
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  {/* hooks that fetch data from API for details of artists*/}
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistId });
   //const { data: songRelate, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });

  {/* handle loading page when Fetching data */}
 if (isFetchingArtistDetails) return <Loader title="Loading Artist details" />;

  console.log(artistData);
  if (error) return <Error />;

  return (
    // the detailsHeader inputs fetched artistId and artistData, then renders songs for each artistId
    <div className="flex flex-col">
       <DetailsHeader 
          artistId = {artistId}
          artistData = {artistData}
        />

         <RelatedSongs
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
       />
    </div>

  );
};

export default ArtistDetails;