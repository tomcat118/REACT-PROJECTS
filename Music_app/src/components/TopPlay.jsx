import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';
{/* topcharts that list popular songs and able to play*/}
const TopPlay = () => {
  {/* Initialize states including dispatch; activeSong, isPlaying from player, data*/}
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector ((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);
  
  {/* apply scroll to top effect to the topplay page */}
  useEffect(( ) => {
    divRef.current.scrollIntoView({ behavior: 'smooth'});
  })
  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div ref ={divRef}>

    </div>
  )
};

export default TopPlay;
