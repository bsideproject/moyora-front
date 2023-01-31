import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import { Collapse, Drawer, Input, Modal, Select } from 'antd';

interface IInputPublicProps {
  isFill?: boolean;
}

const GlobalStyle = createGlobalStyle`
    div.container{
      main {
        min-height: 100vh;
        padding: 0;
        background-color: ${({ theme }) => theme.white};
      }
      div.full-container{
        padding: 0;
      }
    }
`;

const MypageIndexWrapper = styled.div`
  padding: 56px 0;

  & > div {
    padding: 0 20px;
  }
`;

const ProfileWrap = styled.section`
  display: flex;
  align-items: center;
  padding: 22px;
  background-color: ${({ theme }) => theme.gray50};

  & span.ant-upload-wrapper {
    position: relative;
    width: 76px;
    height: 76px;
    & div.ant-upload {
      & img {
        width: 76px;
        height: 76px;
      }
      & div {
        position: absolute;
        right: 0px;
        bottom: 0px;
        padding: 4px;
        background-color: ${({ theme }) => theme.primary};
        border-radius: 50%;
        & img {
          width: 16px;
          height: 16px;
        }
      }
    }
  }

  & > div {
    margin-left: 26px;

    & > div {
      display: flex;
      align-items: center;
      margin-bottom: 4px;

      & > h2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 34px;
        color: ${({ theme }) => theme.gray900};
      }
      & > h3 {
        margin-left: 8px;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        color: ${({ theme }) => theme.gray700};
      }
    }

    & > p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;
const LinkWrap = styled.section`
  & + & {
    border-top: 8px solid ${({ theme }) => theme.gray50};
  }

  & > h4 {
    margin: 24px 20px 12px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${({ theme }) => theme.gray800};
  }
`;
const LinkCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 16px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.gray50};
  }

  & p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.gray750};
  }

  & img {
    width: 20px;
    height: 20px;
  }
`;

const LogoutModal = styled(Modal)`
  min-width: 350px;
  & div.ant-modal-content {
    padding: 28px;
    & div.ant-modal-body {
      margin-top: 32px;
      & button {
        height: 44px;
        font-size: 15px;
        line-height: 22px;
      }
      & button + button {
        margin-top: 8px;
      }
    }
  }
`;

const MypageInputWrapper = styled.div`
  position: relative;
  min-height: 100vh;

  & > div + div {
    padding: 24px 0 223px;
  }

  & > div.form-section {
    padding: 24px 0;
    border-top: 8px solid ${({ theme }) => theme.gray50};

    & > h4 {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      color: ${({ theme }) => theme.gray800};
    }
  }

  & > h2 {
    padding-top: 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: ${({ theme }) => theme.gray900};
    border-top: 1px solid ${({ theme }) => theme.gray100};
    &.custom-margin {
      margin-bottom: 20px;
    }
  }

  & h3 {
    margin: 24px 0 12px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray800};
    text-align: left;

    & span {
      color: ${({ theme }) => theme.negative};
    }
  }

  & > p {
    margin: 72px 0 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
    text-align: center;
  }

  & div.select-group {
    display: flex;
    margin: 0 -4px;
  }

  & h5 {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }

  & span.error-text {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    color: ${({ theme }) => theme.negative};
    & img {
      margin-right: 9px;
    }
  }
`;

const MypageInput = styled(Input)<IInputPublicProps>`
  padding: 9px 10px;
  font-weight: 400;
  border: 1px solid ${({ theme, isFill }) => (isFill ? theme.gray500 : theme.gray200)};
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

const SearchButton = styled(Input.Search)<IInputPublicProps>`
  padding: 5px 0;
  font-weight: 400;
  & input {
    cursor: pointer;
  }
  border: 1px solid ${({ theme, isFill }) => (isFill ? theme.gray500 : theme.gray200)};
  border-radius: 8px;
  & button {
    border: 0;
    & svg {
      color: ${({ theme }) => theme.gray800};
    }
  }
`;

const MypageSelect = styled(Select)<IInputPublicProps>`
  width: 100%;
  height: 44px;
  text-align: left;

  & div.ant-select-selector {
    border-color: ${({ theme, isFill }) => (isFill ? theme.gray500 : theme.gray200)} !important;
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

const MypageCollapse = styled(Collapse)`
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

const MypageSwitchWrap = styled.div`
  margin-top: 40px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    & button {
      min-width: 38px;
      height: 22px;
      & div.ant-switch-handle {
        top: 3px;
        width: 16px;
        height: 16px;
      }
    }

    & h3 {
      margin: 0;
    }
  }

  & p {
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;

    color: ${({ theme }) => theme.gray800};
  }
`;

const ServiceInfoWrapper = styled.div`
  & > div {
    padding: 0 20px;
  }

  & > h2 {
    padding: 20px 20px 16px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: ${({ theme }) => theme.gray900};
    border-top: 1px solid ${({ theme }) => theme.gray100};
    &.custom-margin {
      margin-bottom: 20px;
    }
  }
`;

const ServiceInfoTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px !important;
  border-bottom: 1px solid ${({ theme }) => theme.gray100};

  & > p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.gray750};

    &.primary-text {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ServiceTermsTextWrap = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  & h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
  & h3 {
    font-size: 13px;
    font-weight: 600;
    line-height: 17px;
  }
`;

const M = {
  GlobalStyle,
  MypageIndexWrapper,
  ProfileWrap,
  LinkWrap,
  LinkCard,
  LogoutModal,
  MypageInputWrapper,
  MypageInput,
  SearchButton,
  MypageSelect,
  JobDrawer,
  MypageCollapse,
  Panel,
  MypageSwitchWrap,
  ServiceInfoWrapper,
  ServiceInfoTextWrap,
  ServiceTermsTextWrap,
};

export default M;
