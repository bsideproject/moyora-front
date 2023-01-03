import React from 'react';
import Image from 'next/image';

import betaImages from '@configs/betaImages';

import B from './Beta.styles';

const Exam: React.FC = () => {
  return (
    <B.ExamSection>
      <div>
        <h2>
          오랜만에 만난 반가운 친구들과
          <br />
          <span>
            <span>학교 통계와 방명록으로</span>
            <div className="bar" />
          </span>
          <br />
          근황을 나누며 동창회를 즐겨보세요!
        </h2>
        <div className="web">
          <Image src={betaImages.BetaJob} alt="beta-job" />
          <div className="job">
            <Image src={betaImages.BetaChart} alt="beta-chart" />
            <span>동창 정보 통계</span>
            <h3>
              간단한 가입을 통해
              <br />
              친구들의 근황을 <br />
              통계로 확인해 보세요!
            </h3>
            <p>
              동창들은 어떤 분야에서 일하고 있을까?
              <br /> 아직 우리 동네에서 살고 있을까?
              <br /> 그때는 몰랐던 동창들의 MBTI는 뭘까?
              <br />내 정보를 입력하고 지금 바로 학교 통계에서
              <br /> 확인해 보세요!
            </p>
          </div>
        </div>
        <div className="mobile">
          <Image src={betaImages.BetaChart} alt="beta-chart" className="exam-icon" />
          <span>동창 정보 통계</span>
          <Image src={betaImages.BetaJob} alt="beta-job" />
          <h3>
            간단한 가입을 통해
            <br />
            친구들의 근황을 <br />
            통계로 확인해 보세요!
          </h3>
          <p>
            동창들은 어떤 분야에서 일하고 있을까?
            <br /> 아직 우리 동네에서 살고 있을까?
            <br /> 그때는 몰랐던 동창들의 MBTI는 뭘까?
            <br />내 정보를 입력하고 지금 바로 학교 통계에서
            <br /> 확인해 보세요!
          </p>
        </div>
        <div className="web">
          <div className="exam">
            <Image src={betaImages.BetaPaper} alt="beta-paper" />
            <span>방명록, 쪽지 작성</span>
            <h3>
              보고 싶은 친구들에게 <br />
              학교 방명록과 <br />
              쪽지를 남겨보세요
            </h3>
            <p>
              그동안 연락이 닿지 못했던 <br />
              친구들에게 하고 싶은 말이 있나요? <br />
              우리 학교 공간에 익명으로 방명록을 남기거나 <br />
              친구 사물함에 쪽지를 남길 수 있어요
            </p>
          </div>
          <Image src={betaImages.BetaExam} alt="beta-exam" />
        </div>
        <div className="mobile">
          <Image src={betaImages.BetaPaper} alt="beta-paper" className="exam-icon" />
          <span className="is-blue">방명록, 쪽지 작성</span>
          <Image src={betaImages.BetaExam} alt="beta-exam" className="beta-exam" />
          <h3>
            보고 싶은 친구들에게 <br />
            학교 방명록과 <br />
            쪽지를 남겨보세요
          </h3>
          <p>
            그동안 연락이 닿지 못했던 <br />
            친구들에게 하고 싶은 말이 있나요? <br />
            우리 학교 공간에 익명으로 방명록을 남기거나 <br />
            친구 사물함에 쪽지를 남길 수 있어요
          </p>
        </div>
      </div>
    </B.ExamSection>
  );
};

export default Exam;
