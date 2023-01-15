import { Button } from 'antd';
import styled from 'styled-components';

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;

  & > div {
    margin: 30.5px 0 64px;
    text-align: center;

    & h3 {
      font-size: 22px;
      font-weight: 700;
    }

    & p {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;

const KakaoLogin = styled(Button)`
  justify-content: center;
  width: 100%;
  height: 56px;
  font-weight: 700;
  background-color: #fce750;
  border: 0;

  & > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #000 !important;
    & img {
      margin-right: 9px;
    }
  }
`;

const L = {
  LoginWrapper,
  KakaoLogin,
};

export default L;
