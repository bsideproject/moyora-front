import React, { useMemo } from 'react';
import Image from 'next/image';

import { ICounts, useGetCounts } from '@APIs/statistics';

import useComma from '@utils/useComma';
import betaImages from '@configs/betaImages';

import B from './Beta.styles';

const Number: React.FC = () => {
  const data = useGetCounts();
  const countData = useMemo(() => {
    const countResult: ICounts = { schoolCount: 0, schoolGuestBookKeyCount: 0, userCount: 0 };
    data.map((v) => Object.assign(countResult, v.data));
    return countResult;
  }, [data]);

  return (
    <B.NumberSection>
      <div>
        <div>
          <Image src={betaImages.BetaHeart} alt="beta-heart" />
          <h3>{useComma(countData?.userCount ?? 0)}명</h3>
          <p>누적 참여자</p>
        </div>
        <div>
          <Image src={betaImages.BetaSchool} alt="beta-school" />
          <h3>{useComma(countData?.schoolCount ?? 0)}개</h3>
          <p>활성화된 학교</p>
        </div>
        <div>
          <Image src={betaImages.BetaLetter} alt="beta-letter" />
          <h3>{useComma(countData?.schoolGuestBookKeyCount ?? 0)}개</h3>
          <p>총 방명록, 쪽지</p>
        </div>
      </div>
    </B.NumberSection>
  );
};

export default Number;
