import styled from 'styled-components';
import { Button, Collapse, Drawer, Input, Select } from 'antd';

interface IInputPublicProps {
  isFill?: boolean;
}

const SignupButton = styled(Button)`
  position: absolute;
  bottom: 32rem;
  left: 0;
  width: 100%;
  height: 44rem;
  font-size: 15rem;
  font-weight: 600;
  border: 0;
`;

const SignupInputWrapper = styled.div`
  text-align: center;

  & h3 {
    margin: 24rem 0 12rem;
    font-size: 16rem;
    font-weight: 500;
    color: ${({ theme }) => theme.gray800};
    text-align: left;
  }

  & h4 {
    margin-top: 8rem;
    font-size: 14rem;
    font-weight: 400;
    color: ${({ theme }) => theme.gray600};
    text-align: left;
  }

  & > p {
    margin: 72rem 0 12rem;
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
    text-align: center;
  }

  & > button {
    font-size: 14rem;
    font-weight: 500;
    color: ${({ theme }) => theme.gray700};
    text-decoration: underline;
  }

  & div.select-group {
    display: flex;
    margin: 0 -4rem;
  }
`;

const SearchButton = styled(Input.Search)<IInputPublicProps>`
  padding: 5rem 0;
  font-weight: 400;
  & input {
    cursor: pointer;
  }
  border: 1rem solid ${({ theme, isFill }) => (isFill ? theme.gray500 : theme.gray200)};
  border-radius: 8rem;
  & button {
    border: 0;
    & svg {
      color: ${({ theme }) => theme.gray800};
    }
  }
`;

const SignupInput = styled(Input)<IInputPublicProps>`
  padding: 9rem 10rem;
  font-weight: 400;
  border: 1rem solid ${({ theme, isFill }) => (isFill ? theme.gray500 : theme.gray200)};
  border-radius: 8rem;

  & + & {
    margin-top: 12rem;
  }

  &.ant-input-affix-wrapper-readonly {
    &:hover {
      border: 1rem solid ${({ theme }) => theme.gray200};
    }
    & * {
      cursor: pointer;
    }
  }
`;

const SignupSelect = styled(Select)<IInputPublicProps>`
  width: 100%;
  height: 44rem;
  text-align: left;
  border-color: ${({ theme, isFill }) => (isFill ? theme.gray500 : theme.gray200)};

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

const SignupSearchWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 390rem;
  min-height: 100vh;
  padding: 0 16rem;
  margin-left: -20rem;
  background-color: ${({ theme }) => theme.white};
`;

const SignupSearchInput = styled(Input)`
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

const JobDrawer = styled(Drawer)`
  position: absolute;
  right: 0;
  left: 0;
  left: -21rem;
  width: 390rem !important;
  height: 80%;
  border-radius: 24rem 24rem 0 0;

  & div.ant-drawer-header {
    border: 0;
    & div.ant-drawer-header-title {
      & button {
        order: 1;
        margin-right: 0;
      }
      & div {
        margin-left: 12rem;
      }
    }
  }
`;

const SignupCollapse = styled(Collapse)`
  & div.ant-collapse-item-active {
    & div.ant-collapse-header {
      & span {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
  & div.ant-collapse-header {
    padding: 15.5rem 4rem !important;
    border-bottom: 1rem solid ${({ theme }) => theme.gray50};
    & span {
      font-size: 16rem;
      font-weight: 500;
    }
  }

  & div.ant-collapse-content-box {
    padding: 16rem 4rem !important;
    background-color: ${({ theme }) => theme.gray50};

    & li {
      padding: 10rem 24rem;
      font-size: 16rem;
      font-weight: 500;
      cursor: pointer;

      &.all {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

const Panel = styled(Collapse.Panel)`
  text-align: left;
  border-bottom: 1rem solid ${({ theme }) => theme.gray200};
`;

const IntroductionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 100vh;
  & > h2 {
    margin-top: 24rem;
    font-size: 20rem;
    font-weight: 700;
    line-height: 28rem;
    color: ${({ theme }) => theme.gray900};
  }

  & p {
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
  }

  & > p {
    margin-top: 12rem;
    font-size: 16rem;
    font-weight: 400;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray600};
  }
`;

const SignupTextArea = styled(Input.TextArea)`
  width: 350rem;
  height: 132rem;

  & textarea {
    padding: 10rem 16rem;
    margin-top: 32rem;
    font-size: 16rem;
    font-weight: 400;
    line-height: 20rem;
    resize: none;
    border: 1px solid #ccd2d8;
    border-radius: 4rem;
  }

  &::after {
    position: relative;
    right: 10rem;
    bottom: 10rem;
    float: right;
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
    transform: translateY(-100%);
  }
`;

const SignUpCompleteWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 68rem;
    text-align: center;

    & > h3 {
      margin-top: 43rem;
      font-size: 20rem;
      font-weight: 700;
      color: ${({ theme }) => theme.gray900};
    }

    & > h2 {
      margin-top: 20rem;
      font-size: 28rem;
      font-weight: 700;
      color: ${({ theme }) => theme.gray900};

      & span {
        display: inline-block;
        width: 35rem;
      }
    }

    & > p {
      margin-top: 8rem;
      font-size: 16rem;
      font-weight: 400;
      line-height: 24rem;
      color: ${({ theme }) => theme.gray800};
    }
  }
`;

const SignupCompleteWrap = styled.div`
  justify-content: center;
  width: 100%;
  margin-top: 108rem;

  & > p {
    margin-top: 108rem;
    font-size: 16rem;
    font-weight: 400;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray700};
  }

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > div {
      display: flex;
      flex-direction: column;
      margin-top: 20rem;
      &:first-of-type {
        margin-right: 20rem;
      }
      & > button {
        width: 56rem;
        height: 56rem;
        margin: auto;
      }

      & > button > img {
        margin: auto;
      }

      & > p {
        margin-top: 5rem;
        font-size: 13rem;
        font-weight: 400;
        line-height: 18rem;
        color: ${({ theme }) => theme.gray700};
      }
    }
  }
`;

const S = {
  SignupButton,
  SignupInputWrapper,
  SignupInput,
  SearchButton,
  SignupSelect,
  SignupSearchWrapper,
  SignupSearchInput,
  SearchSchoolCard,
  JobDrawer,
  SignupCollapse,
  Panel,
  IntroductionWrapper,
  SignupTextArea,
  SignUpCompleteWrapper,
  SignupCompleteWrap,
};

export default S;
