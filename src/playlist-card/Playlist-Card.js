import React from 'react';

import './Playlist-Card.css'

const PlaylistCard = ({ playlist }) => {
  return (
    <div class="card">
      <a href={playlist.url} target="_blank" rel="noopener noreferrer" class="card__link">
        <img src={playlist.artwork} alt={playlist.name} class="card__image"></img>
        <div class="card__details">
          <h3 class="card__title">{playlist.name}</h3>
          <p class="card__text">Curated by {playlist.curator_name}</p>
        </div>
      </a>
    </div>
  );
}

export default PlaylistCard;