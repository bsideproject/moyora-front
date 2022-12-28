import React from 'react';
import Image from 'next/image';
import SmallLogo from '@public/svgs/moyora-logo-small.svg';
import LogoHeaderWrapper from './LogoHeader.styles';
import HaedrIcons from './HeaderIcons';

interface IProps {
  headerIcons?: boolean;
  children?: React.ReactElement;
}

const LogoHeader: React.FC<IProps> = ({ headerIcons, children }) => {
  return (
    <LogoHeaderWrapper>
      <Image src={SmallLogo} alt="moyora-logo" />
      <div>{children}</div>
      {headerIcons ? <HaedrIcons /> : ''}
    </LogoHeaderWrapper>
  );
};

export default LogoHeader;
