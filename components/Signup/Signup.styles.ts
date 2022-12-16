import { Input, Select } from 'antd';
import styled from 'styled-components';

const SignupInputWrapper = styled.div`
  text-align: center;

  & h3 {
    margin: 24rem 0 12rem;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray800};
    text-align: left;
  }

  & > p {
    margin: 72rem 0 12rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
    text-align: center;
  }

  & > button {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray700};
    text-decoration: underline;
  }

  & div.select-group {
    display: flex;
    margin: 0 -4rem;
  }
`;

const SearchButton = styled(Input.Search)`
  padding: 5rem 0;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.gray200};
  border-radius: 8rem;
  & button {
    border: 0;
    & svg {
      color: ${({ theme }) => theme.gray800};
    }
  }
`;

const SignupInput = styled(Input)`
  padding: 9rem 10rem;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.gray200};
  border-radius: 8rem;
`;

const SignupSelect = styled(Select)`
  width: 100%;
  height: 44rem;
  text-align: left;
  border-color: ${({ theme }) => theme.gray200};

  &.half {
    width: 50%;
    margin: 0 4rem;
  }

  & > div {
    height: 100% !important;
    font-weight: 400;

    & span {
      margin-top: 6rem;
    }
  }
`;

const S = {
  SignupInputWrapper,
  SignupInput,
  SearchButton,
  SignupSelect,
};

export default S;
