const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macrena', duration: '2:35' },
    { title: 'All Star', duration: '3:21' },
    { title: 'Mmbopp', duration: '1:59' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}