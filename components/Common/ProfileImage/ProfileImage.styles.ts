import styled from 'styled-components';

type TSizeType = 'small' | 'medium' | 'large';

export const sizes = {
  small: { divSize: '44px', imgSize: '22px' },
  medium: { divSize: '60px', imgSize: '32px' },
  large: { divSize: '76px', imgSize: '38px' },
};

export interface IProfileProps {
  size: TSizeType;
  url?: string;
}

const ProfileWrapper = styled.div<IProfileProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => sizes[size].divSize};
  height: ${({ size }) => sizes[size].divSize};
  background-color: ${({ theme, url }) => (url ? '#B8C6FB' : theme.gray300)};
  border-radius: 50%;
`;

const Profile = styled.div<IProfileProps>`
  position: relative;
  width: ${({ size }) => sizes[size].imgSize};
  height: ${({ size }) => sizes[size].imgSize};
  border-radius: 50%;
`;

const P = {
  ProfileWrapper,
  Profile,
};

export default P;
