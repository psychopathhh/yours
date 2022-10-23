import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'POP', bgColor: 'bg-pink-600' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP', bgColor: 'bg-orange-500' },
  { title: 'Dance', value: 'DANCE', bgColor: 'bg-lime-500' },
  { title: 'Electronic', value: 'ELECTRONIC', bgColor: 'bg-blue-500' },
  { title: 'Soul', value: 'SOUL_RNB', bgColor: 'bg-teal-400' },
  { title: 'Rock', value: 'ROCK', bgColor: 'bg-red-600' },
  { title: 'Latin', value: 'LATIN', bgColor: 'bg-rose-500' },
  { title: 'Film', value: 'FILM_TV', bgColor: 'bg-red-400' },
  { title: 'Alternative', value: 'ALTERNATIVE', bgColor: 'bg-fuchsia-500' },
  { title: 'Country', value: 'COUNTRY', bgColor: 'bg-yellow-400' },
  { title: 'Worldwide', value: 'WORLDWIDE', bgColor: 'bg-indigo-600' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL', bgColor: 'bg-lime-800' },
  { title: 'House', value: 'HOUSE', bgColor: 'bg-green-400' },
  { title: 'K-Pop', value: 'K_POP', bgColor: 'bg-cyan-400' },
];

export const links = [
  { name: 'Explore', to: '/explore', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
