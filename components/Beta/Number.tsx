import React from 'react';
import Image from 'next/image';

import betaImages from '@configs/betaImages';

import B from './Beta.styles';

const Number: React.FC = () => {
  return (
    <B.NumberSection>
      <div>
        <div>
          <Image src={betaImages.BetaHeart} alt="beta-heart" />
          <h3>123,456명</h3>
          <p>누적 참여자</p>
        </div>
        <div>
          <Image src={betaImages.BetaSchool} alt="beta-school" />
          <h3>61,728개</h3>
          <p>활성화된 학교</p>
        </div>
        <div>
          <Image src={betaImages.BetaLetter} alt="beta-letter" />
          <h3>987,654개</h3>
          <p>총 방명록, 쪽지</p>
        </div>
      </div>
    </B.NumberSection>
  );
};

export default Number;
