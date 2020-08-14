import React from 'react';
import Image from 'gatsby-image';
import { useInstagram } from './useInstagram';
import style from './style.module.css';

const Instagram: React.FC = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];
  return (
    <>
      <h2>Instagram posts from @{username}</h2>
      <ul className={style.instaList}>
        {instaPhotos.map((photo: any) => (
          <li key={photo.id}>
            <a href={`https://instagram.com/p/${photo.id}`}>
              <Image fluid={photo.fluid} alt={photo.caption} />
            </a>
          </li>
        ))}
      </ul>
      <a href={`https://instagram.com/${username}`}>See more on Instagram</a>
    </>
  );
};
export default Instagram;
