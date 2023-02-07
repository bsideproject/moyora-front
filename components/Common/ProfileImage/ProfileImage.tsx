import React, { memo } from 'react';
import equal from 'fast-deep-equal';
import Image from 'next/image';

import NoProfileImage from '@public/svgs/no-profile.svg';
import P, { IProfileProps } from './ProfileImage.styles';

const ProfileImage: React.FC<IProfileProps> = ({ ...props }) => {
  return (
    <>
      <P.ProfileWrapper size={props.size} url={props.url}>
        {props.url ? (
          <P.Profile size={props.size} url={props.url}>
            <Image
              src={props.url}
              alt="noProfileImage"
              width={props.size === 'small' ? 44 : 60}
              height={props.size === 'small' ? 44 : 60}
            />
          </P.Profile>
        ) : (
          <P.Profile size={props.size}>
            <Image src={NoProfileImage} alt="noProfileImage" />
          </P.Profile>
        )}
      </P.ProfileWrapper>
    </>
  );
};

export default memo(ProfileImage, equal);
