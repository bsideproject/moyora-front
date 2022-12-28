import React from 'react';
import Image from 'next/image';

import Profile from '@public/svgs/profile.svg';
import S from './Search.styles';

interface IProps {
  profile?: string;
  name: string;
  nickname?: string;
  school: string;
  onClick: () => void;
}

const SearchFriendCard: React.FC<IProps> = ({ profile, name, nickname, school, onClick }) => {
  return (
    <S.SearchFriendWrapper onClick={onClick}>
      <Image src={profile ?? Profile} alt="profile-icon" />
      <div>
        <h4>
          {name}
          {nickname ? `(${nickname})` : ''}
        </h4>
        <p>{school}</p>
      </div>
    </S.SearchFriendWrapper>
  );
};

export default SearchFriendCard;
