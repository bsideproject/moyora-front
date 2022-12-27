import { Input } from 'antd';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.white};

  & h4 {
    margin-top: 160rem;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.gray500};
    text-align: center;
  }
`;

const SearchInput = styled(Input)`
  height: 52rem;
  padding: 0;
  margin-bottom: 4rem;
  font-size: 16px;
  font-weight: 400;

  & span.ant-input-prefix {
    margin-right: 8rem;
  }
  & span.ant-input-suffix {
    & span.ant-input-clear-icon {
      margin: 0 12rem;
    }
    & svg {
      color: ${({ theme }) => theme.gray400};
    }
    & button {
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;

const SearchSchoolCard = styled.div`
  display: flex;
  padding: 0 4rem;
  margin-top: 16rem;
  cursor: pointer;
  & div {
    margin-left: 8rem;

    & p {
      margin-bottom: 4rem;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.primary};
    }
    & span {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;

const S = { SearchWrapper, SearchInput, SearchSchoolCard };

export default S;
