import styled from 'styled-components';

interface IProps {
  backgroundPrimary?: boolean;
}

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 104px;
  & button {
    width: 24px;
    height: 24px;
    padding: 0;
    & img {
      margin: auto;
    }
  }
`;

const LogoHeaderWrapper = styled.section<IProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  background-color: ${({ theme, backgroundPrimary }) =>
    backgroundPrimary ? theme.primary : 'transparent'};
`;

const L = {
  HeaderIcons,
  LogoHeaderWrapper,
};

export default L;
