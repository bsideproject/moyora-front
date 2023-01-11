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
  padding: 56rem 0;

  & > div {
    padding: 0 20rem;
  }
`;

const ProfileWrap = styled.section`
  display: flex;
  align-items: center;
  padding: 22rem;
  background-color: ${({ theme }) => theme.gray50};

  & span.ant-upload-wrapper {
    position: relative;
    width: 76rem;
    height: 76rem;
    & div.ant-upload {
      & img {
        width: 76rem;
        height: 76rem;
      }
      & div {
        position: absolute;
        right: 0rem;
        bottom: 0rem;
        padding: 4rem;
        background-color: ${({ theme }) => theme.primary};
        border-radius: 50%;
        & img {
          width: 16rem;
          height: 16rem;
        }
      }
    }
  }

  & > div {
    margin-left: 26rem;

    & > div {
      display: flex;
      align-items: center;
      margin-bottom: 4rem;

      & > h2 {
        font-size: 24rem;
        font-weight: 700;
        line-height: 34rem;
        color: ${({ theme }) => theme.gray900};
      }
      & > h3 {
        margin-left: 8rem;
        font-size: 20rem;
        font-weight: 400;
        line-height: 28rem;
        color: ${({ theme }) => theme.gray700};
      }
    }

    & > p {
      font-size: 14rem;
      font-weight: 400;
      line-height: 20rem;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;
const LinkWrap = styled.section`
  & + & {
    border-top: 8rem solid ${({ theme }) => theme.gray50};
  }

  & > h4 {
    margin: 24rem 20rem 12rem;
    font-size: 16rem;
    font-weight: 700;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray800};
  }
`;
const LinkCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12rem 20rem 16rem;

  &:not(:last-child) {
    border-bottom: 1rem solid ${({ theme }) => theme.gray50};
  }

  & p {
    font-size: 16rem;
    font-weight: 500;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray750};
  }

  & img {
    width: 20rem;
    height: 20rem;
  }
`;

const LogoutModal = styled(Modal)`
  min-width: 350rem;
  & div.ant-modal-content {
    padding: 28rem;
    & div.ant-modal-body {
      margin-top: 32rem;
      & button {
        height: 44rem;
        font-size: 15rem;
        line-height: 22rem;
      }
      & button + button {
        margin-top: 8rem;
      }
    }
  }
`;

const MypageInputWrapper = styled.div`
  position: relative;
  min-height: 100vh;

  & > div + div {
    padding: 24rem 0 223rem;
  }

  & > div.form-section {
    padding: 24rem 0;
    border-top: 8rem solid ${({ theme }) => theme.gray50};

    & > h4 {
      font-size: 16rem;
      font-weight: 700;
      line-height: 24rem;
      color: ${({ theme }) => theme.gray800};
    }
  }

  & > h2 {
    padding-top: 20rem;
    font-size: 20rem;
    font-weight: 700;
    line-height: 28rem;
    color: ${({ theme }) => theme.gray900};
    border-top: 1rem solid ${({ theme }) => theme.gray100};
    &.custom-margin {
      margin-bottom: 20rem;
    }
  }

  & h3 {
    margin: 24rem 0 12rem;
    font-size: 16rem;
    font-weight: 500;
    color: ${({ theme }) => theme.gray800};
    text-align: left;

    & span {
      color: ${({ theme }) => theme.negative};
    }
  }

  & > p {
    margin: 72rem 0 12rem;
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
    text-align: center;
  }

  & div.select-group {
    display: flex;
    margin: 0 -4rem;
  }

  & h5 {
    margin-top: 16rem;
    font-size: 14rem;
    font-weight: 500;
    line-height: 20rem;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }

  & span.error-text {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 8rem;
    font-size: 14rem;
    font-weight: 400;
    line-height: 15rem;
    color: ${({ theme }) => theme.negative};
    & img {
      margin-right: 9rem;
    }
  }
`;

const MypageInput = styled(Input)<IInputPublicProps>`
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

const MypageSelect = styled(Select)<IInputPublicProps>`
  width: 100%;
  height: 44rem;
  text-align: left;

  & div.ant-select-selector {
    border-color: ${({ theme, isFill }) => (isFill ? theme.gray500 : theme.gray200)} !important;
  }

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

const MypageCollapse = styled(Collapse)`
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

const MypageSwitchWrap = styled.div`
  margin-top: 40rem;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12rem;

    & button {
      min-width: 38rem;
      height: 22rem;
      & div.ant-switch-handle {
        top: 3rem;
        width: 16rem;
        height: 16rem;
      }
    }

    & h3 {
      margin: 0;
    }
  }

  & p {
    font-size: 13rem;
    font-weight: 400;
    line-height: 18rem;

    color: ${({ theme }) => theme.gray800};
  }
`;

const ServiceInfoWrapper = styled.div`
  & > div {
    padding: 0 20rem;
  }

  & > h2 {
    padding: 20rem 20rem 16rem;
    font-size: 20rem;
    font-weight: 700;
    line-height: 28rem;
    color: ${({ theme }) => theme.gray900};
    border-top: 1rem solid ${({ theme }) => theme.gray100};
    &.custom-margin {
      margin-bottom: 20rem;
    }
  }
`;

const ServiceInfoTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16rem 20rem !important;
  border-bottom: 1rem solid ${({ theme }) => theme.gray100};

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
};

export default M;
