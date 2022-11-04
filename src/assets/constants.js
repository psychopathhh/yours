import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import {
  loader,
  alternative,
  country,
  dance,
  electronic,
  film,
  hipHop,
  house,
  kPop,
  latin,
  pop,
  reggae,
  rock,
  soul,
  worldwide,
} from './index.js'

// export const genresEN = [
//   { title: 'Hip-Hop', value: 'HIP_HOP_RAP', bgColor: 'bg-orange-500', image: alternative },
//   { title: 'Rock', value: 'ROCK', bgColor: 'bg-red-600', image: rock },
//   { title: 'Soul', value: 'SOUL_RNB', bgColor: 'bg-teal-400', image: 'assets/alternative.jpg' },
//   { title: 'Dance', value: 'DANCE', bgColor: 'bg-lime-500', image: 'assets/alternative.jpg' },
//   { title: 'Electronic', value: 'ELECTRONIC', bgColor: 'bg-blue-500', image: 'assets/alternative.jpg' },
//   { title: 'Latin', value: 'LATIN', bgColor: 'bg-rose-500', image: 'assets/alternative.jpg' },
//   { title: 'Film', value: 'FILM_TV', bgColor: 'bg-red-400', image: 'assets/alternative.jpg' },
//   { title: 'Country', value: 'COUNTRY', bgColor: 'bg-yellow-400', image: 'assets/alternative.jpg' },
//   { title: 'Alternative', value: 'ALTERNATIVE', bgColor: 'bg-fuchsia-500', image: 'assets/alternative.jpg' },
//   { title: 'Worldwide', value: 'WORLDWIDE', bgColor: 'bg-indigo-600', image: 'assets/alternative.jpg' },
//   { title: 'K-Pop', value: 'K_POP', bgColor: 'bg-cyan-400', image: 'assets/alternative.jpg' },
//   { title: 'House', value: 'HOUSE', bgColor: 'bg-green-400', image: 'assets/alternative.jpg' },
//   { title: 'Pop', value: 'POP', bgColor: 'bg-pink-600', image: 'assets/alternative.jpg' },
//   { title: 'Reggae', value: 'REGGAE_DANCE_HALL', bgColor: 'bg-lime-800', image: 'assets/alternative.jpg' },
// ];

// export const linksEN = [
//   { name: 'Explore', to: '/explore', icon: HiOutlineHome },
//   { name: 'World Chart', to: '/top-charts', icon: HiOutlineHashtag },
//   { name: 'Popular Artists', to: '/top-artists', icon: HiOutlineUserGroup },
//   { name: 'Country Tracks', to: '/around-you', icon: HiOutlinePhotograph },
// ];



export const genres = [
  { title: 'Хип-хоп', value: 'HIP_HOP_RAP', bgColor: 'bg-orange-500', image: hipHop },
  { title: 'Рок', value: 'ROCK', bgColor: 'bg-red-600', image: rock },
  { title: 'Соул', value: 'SOUL_RNB', bgColor: 'bg-teal-400', image: soul },
  { title: 'Танцевальная', value: 'DANCE', bgColor: 'bg-fuchsia-500', image: dance },
  { title: 'Техно', value: 'ELECTRONIC', bgColor: 'bg-blue-500', image: electronic },
  { title: 'Latin', value: 'LATIN', bgColor: 'bg-rose-500', image: latin },
  { title: 'Саундтреки', value: 'FILM_TV', bgColor: 'bg-red-400', image: film },
  { title: 'Кантри', value: 'COUNTRY', bgColor: 'bg-yellow-400', image: country },
  { title: 'Альтернатива', value: 'ALTERNATIVE', bgColor: 'bg-yellow-600', image: alternative },
  { title: 'Worldwide', value: 'WORLDWIDE', bgColor: 'bg-indigo-600', image: worldwide },
  { title: 'K-Pop', value: 'K_POP', bgColor: 'bg-cyan-400', image: kPop },
  { title: 'Хаус', value: 'HOUSE', bgColor: 'bg-green-400', image: house },
  { title: 'Поп', value: 'POP', bgColor: 'bg-pink-600', image: pop },
  { title: 'Рэгги', value: 'REGGAE_DANCE_HALL', bgColor: 'bg-lime-800', image: reggae },
];

export const links = [
  { name: 'Главное', to: '/explore', icon: HiOutlineHome },
  { name: 'Новые Хиты', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Топ исполнители', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Популярно в твоей стране', to: '/around-you', icon: HiOutlinePhotograph },
];
