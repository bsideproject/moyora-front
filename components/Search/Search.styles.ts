import { Input } from 'antd';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.white};

  & > h4 {
    margin-top: 160rem;
    font-size: 16rem;
    font-weight: 500;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray500};
    text-align: center;
  }
`;

const SearchInput = styled(Input)`
  height: 52rem;
  padding: 0;
  margin-bottom: 4rem;
  font-size: 16rem;
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
      font-size: 14rem;
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
      font-size: 16rem;
      font-weight: 500;
      line-height: 24rem;
      color: ${({ theme }) => theme.primary};
    }
    & span {
      font-size: 14rem;
      font-weight: 400;
      line-height: 20rem;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;

const SearchFriendWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80rem;
  padding: 18rem 20rem;
  margin-top: 12rem;
  cursor: pointer;
  background: #fff3ef;
  border-radius: 16rem;

  & > div {
    margin-left: 12rem;
  }
`;

const S = { SearchWrapper, SearchInput, SearchSchoolCard, SearchFriendWrapper };

export default S;
