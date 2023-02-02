import React from 'react';
import Link from 'next/link';

import B from './Beta.styles';

const Footer: React.FC = () => {
  return (
    <B.FooterSection>
      <div>
        <span>
          <p>반갑다친구야</p>
          <p>문의 | moyora.official@gmail.com</p>
        </span>
        <div>
          <Link href="/mypage/service-terms">서비스 이용약관</Link>
          <Link href="/mypage/service-privacy">개인정보 처리방침</Link>
        </div>
      </div>
    </B.FooterSection>
  );
};

export default Footer;
