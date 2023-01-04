import styled from 'styled-components';
import { FloatButton, Drawer, Button } from 'antd';
const GuestBookListWrapper = styled.section`
  & > div:first-of-type {
    align-self: flex-start;
    margin: 20rem 0;
    & p {
      font-size: 20rem;
      font-weight: 700;
      line-height: 28rem;
      color: ${({ theme }) => theme.gray900};
    }
    & b {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ListSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: calc(100vh-84rem);
  & > div {
    margin-bottom: 12rem;
  }
`;

const FloatingButton = styled(FloatButton)`
  width: 56rem;
  height: 56rem;
  & div {
    width: 56rem !important;
    height: 56rem !important;
    margin: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const GuestBookDrawer = styled(Drawer)`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 390rem !important;
  margin: auto;
  border-radius: 24rem 24rem 0 0;
  & div.ant-drawer-header {
    border: 0;
    height: 72rem;
    padding: 28rem 20rem;
    text-align: center;
    & div.ant-drawer-header-title {
      justify-content: center;
      & button {
        order: 1;
        margin-right: 0;
      }
      & div {
        font-size: 18rem;
        font-weight: 600;
        line-height: 26rem;
        color: ${({ theme }) => theme.gray900};
      }
    }
  }
  & div.ant-drawer-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20rem;
    & > div {
      padding: 20rem;
      background-color: transparent;
      border: 1rem solid ${({ theme }) => theme.gray200};
      border-radius: 16rem;
    }
  }
`;

const writeButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44rem;
  margin-bottom: 35rem;

  font-size: 15rem;
  font-weight: 600;
  line-height: 22rem;
`;

const L = {
  GuestBookListWrapper,
  ListSection,
  FloatingButton,
  GuestBookDrawer,
  writeButton,
};

export default L;
