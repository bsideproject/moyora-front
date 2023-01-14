import { Input } from 'antd';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.white};

  & > h4 {
    margin-top: 160px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.gray500};
    text-align: center;
  }
`;

const SearchInput = styled(Input)`
  height: 52px;
  padding: 0;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;

  & span.ant-input-prefix {
    margin-right: 8px;
  }
  & span.ant-input-suffix {
    & span.ant-input-clear-icon {
      margin: 0 12px;
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
  padding: 0 4px;
  margin-top: 16px;
  cursor: pointer;
  & div {
    margin-left: 8px;

    & p {
      margin-bottom: 4px;
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

const SearchFriendWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 18px 20px;
  margin-top: 12px;
  cursor: pointer;
  background: #fff3ef;
  border-radius: 16px;

  & > div {
    margin-left: 12px;
    & h4 {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${({ theme }) => theme.gray900};
    }
    & p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;

const S = { SearchWrapper, SearchInput, SearchSchoolCard, SearchFriendWrapper };

export default S;
