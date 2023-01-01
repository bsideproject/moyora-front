import styled from 'styled-components';

type TSizeType = 'small' | 'medium' | 'large';

export const sizes = {
  small: { divSize: '44rem', imgSize: '22rem' },
  medium: { divSize: '60rem', imgSize: '32rem' },
  large: { divSize: '76rem', imgSize: '38rem' },
};

export interface IProfileProps {
  size: TSizeType;
  url?: string;
}

const ProfileWrapper = styled.div<IProfileProps>`
  width: ${({ size }) => sizes[size].divSize};
  height: ${({ size }) => sizes[size].divSize};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray300};
`;

const Profile = styled.div<IProfileProps>`
  position: relative;
  width: ${({ size }) => sizes[size].imgSize};
  height: ${({ size }) => sizes[size].imgSize};
`;

const P = {
  ProfileWrapper,
  Profile,
};

export default P;
