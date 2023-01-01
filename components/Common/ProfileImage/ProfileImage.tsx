import React, { memo } from 'react';
import equal from 'fast-deep-equal';
import P, { IProfileProps } from './ProfileImage.styles';
import NoProfileImage from '@public/svgs/no-profile.svg';
import AutoHeightImage from '../AutoHeightImage/AutoHeightImage';

const ProfileImage: React.FC<IProfileProps> = ({ ...props }) => {
  return (
    <>
      <P.ProfileWrapper size={props.size}>
        {props.url ? (
          <P.Profile size={props.size}>
            <AutoHeightImage src={props.url} alt="noProfileImage" />
          </P.Profile>
        ) : (
          <P.Profile size={props.size}>
            <AutoHeightImage src={NoProfileImage} alt="noProfileImage" />
          </P.Profile>
        )}
      </P.ProfileWrapper>
    </>
  );
};

export default memo(ProfileImage, equal);
