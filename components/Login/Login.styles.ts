import { Button } from 'antd';
import styled from 'styled-components';

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96rem;

  & > div {
    margin: 30.5rem 0 64rem;
    text-align: center;

    & h3 {
      font-size: 22rem;
      font-weight: 700;
    }

    & p {
      margin-top: 8rem;
      font-size: 16rem;
      font-weight: 400;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;

const KakaoLogin = styled(Button)`
  justify-content: center;
  width: 100%;
  height: 56rem;
  font-weight: 700;
  background-color: #fce750;
  border: 0;

  & > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #000 !important;
    & img {
      margin-right: 9rem;
    }
  }
`;

const L = {
  LoginWrapper,
  KakaoLogin,
};

export default L;
