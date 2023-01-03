import React from 'react';
import Link from 'next/link';

import B from './Beta.styles';

const Footer: React.FC = () => {
  return (
    <B.FooterSection>
      <div>
        <Link href="">반갑다친구야</Link>
        <div>
          <Link href="">서비스 이용약관</Link>
          <Link href="">개인정보 처리방침</Link>
        </div>
      </div>
    </B.FooterSection>
  );
};

export default Footer;
