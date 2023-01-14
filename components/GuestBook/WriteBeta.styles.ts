import styled from 'styled-components';
import { Input, Button, Radio, Modal } from 'antd';

const GuestBookWriteWrapper = styled.section`
  & h1 {
    font-size: 20rem;
    font-weight: 700;
    line-height: 28rem;
    color: ${({ theme }) => theme.gray900};
    margin: 20rem 0 16rem 0;
  }
  & p {
    font-size: 15rem;
    font-weight: 600;
    line-height: 22rem;
  }
`;

const TextAreaSection = styled.section`
  height: auto;
  overflow: hidden;
  border: 1rem solid ${({ theme }) => theme.gray300};
  transition: all 0.2s;
  border-radius: 20rem;
  padding: 20rem 20rem 50rem 20rem;
  width: 100%;
  & > section {
    display: flex;
    justify-content: space-between;
  }

  &:focus-within {
    border: 1rem solid ${({ theme }) => theme.primary};
    transition: all 0.2s;
  }
  &:hover {
    border: 1rem solid ${({ theme }) => theme.primary};
    transition: all 0.2s;
  }
  & > label {
    font-size: 14rem;
    font-weight: 500;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
  }
`;

const TextArea = styled(Input.TextArea)`
  & textarea {
    font-size: 16rem;
    font-weight: 400;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray750};
    margin-top: 12rem;
    box-sizing: border-box;
    padding: 0;
  }
  & textarea::placeholder {
    color: ${({ theme }) => theme.gray600};
  }
  &::after {
    position: relative;
    bottom: 20rem;
    float: right;
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
  }
`;

const WarningSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8rem;

  font-size: 13rem;
  font-weight: 400;
  line-height: 18rem;
  color: ${({ theme }) => theme.gray600};
`;

const SelectStarSection = styled.section`
  margin-top: 24rem;
`;

const StarGroup = styled(Radio.Group)`
  margin-top: 16rem;
  padding: 20rem;
  height: 296rem;
  border: 1rem solid ${({ theme }) => theme.gray200};
  border-radius: 16rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
`;

const Star = styled(Radio.Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1rem solid ${({ theme }) => theme.gray200};
  border-radius: 16rem !important;
  height: 72rem;
  width: 72rem;
  & img {
    max-width: none;
  }
  &:not(:first-child)::before {
    width: 0;
  }
`;

const FinishButton = styled(Button)`
  position: sticky;
  bottom: 24rem;
  width: 100%;
  height: 44rem;
  z-index: 1;
`;

const AlertModal = styled(Modal)`
  & div.ant-modal-content {
    height: 226rem;
    width: 350rem;
    margin: auto;
    border-radius: 16rem;
    padding: 28rem 24rem;
  }
  & div.ant-modal-body {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    text-align: center;
    & > img {
      display: block;
      margin: auto;
    }
    & > h2 {
      font-size: 18rem;
      font-weight: 700;
      line-height: 26rem;
      color: ${({ theme }) => theme.gray950};
      margin-top: 24rem;
    }
  }
`;

const ConfirmModal = styled(Modal)`
  & div.ant-modal-content {
    height: 308rem;
    width: 350rem;
    margin: auto;
    border-radius: 16rem;
    padding: 28rem;
  }
  & div.ant-modal-body {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    text-align: center;
    & > img {
      display: block;
      margin: auto;
    }
    & > h2 {
      font-size: 18rem;
      font-weight: 700;
      line-height: 26rem;
      color: ${({ theme }) => theme.gray950};
      margin: 24rem 0 12rem 0;
    }
    & > h3 {
      font-size: 15rem;
      font-weight: 500;
      line-height: 22rem;
    }
    & > button:not(:first-of-type) {
      margin-top: 8rem;
    }
  }
`;

const ModalButton = styled(Button)`
  height: 44rem;
  margin-top: 32rem;
  & p {
    font-size: 15rem;
    font-weight: 600;
    line-height: 22rem;
  }
`;

const W = {
  GuestBookWriteWrapper,
  TextAreaSection,
  TextArea,
  WarningSection,
  SelectStarSection,
  StarGroup,
  Star,
  FinishButton,
  AlertModal,
  ConfirmModal,
  ModalButton,
};

export default W;
