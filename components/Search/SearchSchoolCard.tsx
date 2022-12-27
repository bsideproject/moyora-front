import React from 'react';
import Image from 'next/image';

import School from '@public/svgs/school.svg';

import S from './Search.styles';

interface IProps {
  title: string;
  address: string;
  onClick: () => void;
}

const SearchSchoolCard: React.FC<IProps> = ({ title, address, onClick }) => {
  return (
    <S.SearchSchoolCard>
      <Image src={School} alt="school-icon" />
      <div onClick={onClick}>
        <p>{title}</p>
        <span>{address}</span>
      </div>
    </S.SearchSchoolCard>
  );
};

export default SearchSchoolCard;
