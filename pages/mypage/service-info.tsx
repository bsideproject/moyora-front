import React from 'react';
import Image from 'next/image';

import LogoHeader from '@components/Common/LogoHeader';
import ChevronRight from '@public/svgs/chevron-right.svg';

import M from '@components/Mypage/Mypage.styles';

const ServiceInfo: React.FC = () => {
  return (
    <M.ServiceInfoWrapper className="full-container">
      <M.GlobalStyle />
      <div>
        <LogoHeader headerIcons />
      </div>
      <h2>서비스 정보</h2>
      <M.ServiceInfoTextWrap>
        <p>서비스 버전</p>
        <p className="primary-text">1.0.0</p>
      </M.ServiceInfoTextWrap>
      <M.LinkCard href="/mypage/service-terms">
        <p>서비스 이용약관</p>
        <Image src={ChevronRight} alt="chevron-right" />
      </M.LinkCard>
      <M.LinkCard href="/mypage/service-privacy">
        <p>개인정보 처리방침</p>
        <Image src={ChevronRight} alt="chevron-right" />
      </M.LinkCard>
      <M.LinkCard href="/mypage/service-content">
        <p>콘텐츠 이용 규칙</p>
        <Image src={ChevronRight} alt="chevron-right" />
      </M.LinkCard>
      <M.ServiceInfoTextWrap>
        <p>문의</p>
        <p className="primary-text">moyora@gmail.com</p>
      </M.ServiceInfoTextWrap>
    </M.ServiceInfoWrapper>
  );
};

export default ServiceInfo;
