import React from 'react';
import Image from 'next/image';
import LogoSmall from '@public/svgs/moyora-logo-small.svg';

import LSS from './LogoSmallSection.styles';

type Props = {
  children?: React.ReactElement;
};

const LogoSmallSection: React.FC<Props> = ({ children }) => {
  return (
    <>
      <LSS>
        <div>
          <Image src={LogoSmall} alt="moyora-logo" />
        </div>
        <div>{children}</div>
      </LSS>
    </>
  );
};

export default LogoSmallSection;
