import styled from 'styled-components';
import { Input, Button, Radio, Modal } from 'antd';

const GuestBookWriteWrapper = styled.section`
  & h1 {
    margin: 20px 0 16px 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: ${({ theme }) => theme.gray900};
  }
  & p {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
  }
`;

const TextAreaSection = styled.section`
  width: 100%;
  height: auto;
  padding: 20px 20px 50px 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.gray300};
  border-radius: 20px;
  transition: all 0.2s;
  & > section {
    display: flex;
    justify-content: space-between;
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.primary};
    transition: all 0.2s;
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
    transition: all 0.2s;
  }
  & > label {
    position: relative;
    bottom: -35px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
  }
`;

const TextArea = styled(Input.TextArea)`
  & textarea {
    box-sizing: border-box;
    padding: 0;
    margin-top: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.gray750};
  }
  & textarea::placeholder {
    color: ${({ theme }) => theme.gray600};
  }
  &::after {
    position: relative;
    bottom: -15px;
    float: right;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
  }
`;

const WarningSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;

  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.gray600};
`;

const SelectStarSection = styled.section`
  margin-top: 24px;
`;

const StarGroup = styled(Radio.Group)`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;
  height: 296px;
  padding: 20px;
  margin-top: 16px;
  border: 1px solid ${({ theme }) => theme.gray200};
  border-radius: 16px;
`;

const Star = styled(Radio.Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border: 1px solid ${({ theme }) => theme.gray200};
  border-radius: 16px !important;
  & img {
    max-width: none;
  }
  &:not(:first-child)::before {
    width: 0;
  }
`;

const FinishButton = styled(Button)`
  position: sticky;
  bottom: 24px;
  z-index: 1;
  width: 100%;
  height: 44px;
`;

const AlertModal = styled(Modal)`
  & div.ant-modal-content {
    width: 350px;
    height: 226px;
    padding: 28px 24px;
    margin: auto;
    border-radius: 16px;
  }
  & div.ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    height: 100%;
    text-align: center;
    & > img {
      display: block;
      margin: auto;
    }
    & > h2 {
      margin-top: 24px;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      color: ${({ theme }) => theme.gray950};
    }
  }
`;

const ConfirmModal = styled(Modal)`
  & div.ant-modal-content {
    width: 350px;
    height: 308px;
    padding: 28px;
    margin: auto;
    border-radius: 16px;
  }
  & div.ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    height: 100%;
    text-align: center;
    & > img {
      display: block;
      margin: auto;
    }
    & > h2 {
      margin: 24px 0 12px 0;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      color: ${({ theme }) => theme.gray950};
    }
    & > h3 {
      font-size: 15px;
      font-weight: 500;
      line-height: 22px;
    }
    & > button:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;

const ModalButton = styled(Button)`
  height: 44px;
  margin-top: 32px;
  & p {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
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
