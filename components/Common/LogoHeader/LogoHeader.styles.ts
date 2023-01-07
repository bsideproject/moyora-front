import styled from 'styled-components';

interface IProps {
  backgroundPrimary?: boolean;
}

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 104rem;
  & button {
    padding: 0;
    height: 24rem;
    width: 24rem;
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
  height: 56rem;
  background-color: ${({ theme, backgroundPrimary }) =>
    backgroundPrimary ? theme.primary : 'transparent'};
`;

const L = {
  HeaderIcons,
  LogoHeaderWrapper,
};

export default L;
