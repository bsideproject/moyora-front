import styled from 'styled-components';
import { Drawer, Modal } from 'antd';

interface IProps {
  backgroundPrimary?: boolean;
}

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 104px;
  & button {
    width: 24px;
    height: 24px;
    padding: 0;
    & img {
      margin: auto;
    }
  }
`;

const LogoHeaderWrapper = styled.section<IProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  background-color: ${({ theme, backgroundPrimary }) =>
    backgroundPrimary ? theme.primary : 'transparent'};
`;

const MyDrawer = styled(Drawer)`
  width: 390px !important;
  margin-left: calc((100vw - 390px) / 2);
  & div.ant-drawer-header {
    height: 72px;
    padding: 28px 20px;
    text-align: center;
    border: 0;
    & div.ant-drawer-header-title {
      justify-content: center;
      & button {
        order: 1;
        margin-right: 0;
      }
      & div {
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
        color: ${({ theme }) => theme.gray900};
      }
    }
  }
  & div.ant-drawer-body {
    display: flex;
    flex-direction: column;
    & > a {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.gray750};
      &:not(span + a) {
        margin-top: 24px;
      }
    }
    & > p {
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.gray600};
    }
    & > span {
      height: 1px;
      width: 350px;
      background-color: #e9ecef;
      margin: 14px 0;
    }
  }
`;

const ProfileWrap = styled.section`
  display: flex;
  align-items: center;
  background-color: transparent;
  & > span {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #b8c6fb;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div {
    margin-left: 22px;
    & > div {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      & > h2 {
        font-size: 22px;
        font-weight: 700;
        line-height: 32px;
        color: ${({ theme }) => theme.gray900};
      }
      & > h3 {
        margin-left: 7px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${({ theme }) => theme.gray700};
      }
    }

    & > p {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.gray600};
    }
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

const L = {
  HeaderIcons,
  LogoHeaderWrapper,
  MyDrawer,
  ProfileWrap,
  LogoutModal,
};

export default L;
