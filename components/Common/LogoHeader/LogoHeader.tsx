import React from 'react';
import Image from 'next/image';

import SmallLogo from '@public/svgs/moyora-logo-small.svg';

import LogoHeaderWrapper from './LogoHeader.styles';

interface IProps {
  children?: React.ReactElement;
}

const LogoHeader: React.FC<IProps> = ({ children }) => {
  return (
    <LogoHeaderWrapper>
      <Image src={SmallLogo} alt="moyora-logo" />
      <div>{children}</div>
    </LogoHeaderWrapper>
  );
};

export default LogoHeader;
