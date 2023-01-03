import React from 'react';
import Image from 'next/image';

import betaImages from '@configs/betaImages';

import B from './Beta.styles';

const Question: React.FC = () => {
  return (
    <B.QuestionSection>
      <div>
        <h2>
          초등학교 동창 친구들은 <br />
          지금 뭐하고 지낼까?
        </h2>
        <h3>
          moyora는 우리 학교 동창 친구들의 근황을 <br className="mobile" />
          통계로 확인하고 <br className="web" />
          방명록과 쪽지로 <br className="mobile" />
          추억을 나눌 수 있는 서비스입니다.
        </h3>
        <div>
          <Image src={betaImages.BetaQuestion1} alt="beta-question1" />
          <Image src={betaImages.BetaQuestion2} alt="beta-question2" />
          <Image src={betaImages.BetaQuestion3} alt="beta-question3" className="web" />
        </div>
      </div>
    </B.QuestionSection>
  );
};

export default Question;
