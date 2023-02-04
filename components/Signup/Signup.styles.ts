import styled from 'styled-components';
import { Button, Collapse, Drawer, Input, Select } from 'antd';

interface IInputPublicProps {
  isfill?: string | number | object | null;
}

const SignupButton = styled(Button)`
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: 600;
  border: 0;
`;

const SignupInputWrapper = styled.div`
  text-align: center;

  & h3 {
    margin: 24px 0 12px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray800};
    text-align: left;
  }

  & h4 {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.gray600};
    text-align: left;
  }

  & > p {
    margin: 72px 0 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
    text-align: center;
  }

  & > h4 {
    margin-top: 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
    text-align: left;
  }

  & > button {
    font-size: 14px;
    font-weight: 500;
    text-decoration: underline;
  }

  & div.select-group {
    display: flex;
    margin: 0 -4px;
  }
`;

const SearchButton = styled(Input.Search)<IInputPublicProps>`
  padding: 5px 0;
  font-weight: 400;
  & input {
    cursor: pointer;
  }
  border: 1px solid ${({ theme, isfill }) => (isfill ? theme.gray500 : theme.gray200)};
  border-radius: 8px;
  & button {
    border: 0;
    & svg {
      color: ${({ theme }) => theme.gray800};
    }
  }
`;

const SignupInput = styled(Input)<IInputPublicProps>`
  padding: 9px 10px;
  font-weight: 400;
  border: 1px solid ${({ theme, isfill }) => (isfill ? theme.gray500 : theme.gray200)};
  border-radius: 8px;

  & + & {
    margin-top: 12px;
  }

  &.ant-input-affix-wrapper-readonly {
    &:hover {
      border: 1px solid ${({ theme }) => theme.gray200};
    }
    & * {
      cursor: pointer;
    }
  }
`;

const SignupSelect = styled(Select)<IInputPublicProps>`
  width: 100%;
  height: 44px;
  text-align: left;

  & div.ant-select-selector {
    border-color: ${({ theme, isfill }) => (isfill ? theme.gray500 : theme.gray200)} !important;
  }

  &.half {
    width: 50%;
    margin: 0 4px;
  }

  & > div {
    height: 100% !important;
    font-weight: 400;

    & span {
      margin-top: 6px;
    }
  }
`;

const JobDrawer = styled(Drawer)`
  position: absolute;
  right: 0;
  left: 0;
  left: -21px;
  width: 390px !important;
  height: 80%;
  border-radius: 24px 24px 0 0;

  & div.ant-drawer-header {
    border: 0;
    & div.ant-drawer-header-title {
      & button {
        order: 1;
        margin-right: 0;
      }
      & div {
        margin-left: 12px;
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
    padding: 15.5px 4px !important;
    border-bottom: 1px solid ${({ theme }) => theme.gray50};
    & span {
      font-size: 16px;
      font-weight: 500;
    }
  }

  & div.ant-collapse-content-box {
    padding: 16px 4px !important;
    background-color: ${({ theme }) => theme.gray50};

    & li {
      padding: 10px 24px;
      font-size: 16px;
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
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
`;

const IntroductionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 100vh;
  & > h2 {
    margin-top: 24px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: ${({ theme }) => theme.gray900};
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
  }

  & > p {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.gray600};
  }
`;

const SignupTextArea = styled(Input.TextArea)`
  width: 350px;
  height: 132px;

  & textarea {
    padding: 10px 16px;
    margin-top: 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    resize: none;
    border: 1px solid #ccd2d8;
    border-radius: 4px;
  }

  &::after {
    position: relative;
    right: 10px;
    bottom: 10px;
    float: right;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
    transform: translateY(-100%);
  }
`;

const SignUpCompleteWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 124px);
    margin-top: 68px;
    text-align: center;
    & > h1 {
      margin: 35px auto;
      font-size: 28px;
      line-height: 40px;
      font-weight: 400;
      color: ${({ theme }) => theme.primary};
      & > b {
        font-size: 32px;
        font-weight: 500;
      }
    }

    & > h3 {
      margin-top: 43px;
      font-size: 20px;
      font-weight: 700;
      color: ${({ theme }) => theme.gray900};

      &.open {
        margin-bottom: 16px;
        font-size: 24px;
      }
    }

    & > h2 {
      font-family: GmarketSans;
      font-size: 28px;
      font-weight: 700;
      color: ${({ theme }) => theme.gray900};

      & span {
        display: inline-block;
        width: 73px;
        margin: 0 3px;
        font-family: GmarketSans;
        vertical-align: baseline;
      }
    }

    & > p {
      margin: 8px 0 108px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${({ theme }) => theme.gray800};
    }

    & > button {
      position: absolute;
      bottom: 24px;
      left: 0;
      height: 44px;
      font-size: 15px;
      font-weight: 600;
      border-radius: 8px;
    }
  }
`;

const SignupCompleteWrap = styled.div`
  justify-content: center;
  width: 100%;
  margin-bottom: 67px;

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
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
      margin-top: 26px;
      &:first-of-type {
        margin-right: 20px;
      }
      & > button {
        width: 56px;
        height: 56px;
        margin: auto;
      }

      & > button > img {
        margin: auto;
      }

      & > p {
        margin-top: 5px;
        font-size: 13px;
        font-weight: 400;
        line-height: 18px;
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
  JobDrawer,
  SignupCollapse,
  Panel,
  IntroductionWrapper,
  SignupTextArea,
  SignUpCompleteWrapper,
  SignupCompleteWrap,
};

export default S;
