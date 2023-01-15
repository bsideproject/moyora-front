import styled from 'styled-components';

interface IProps {
  size: { width: string; height: string; line: string | false };
}

interface ILockProps {
  lock?: boolean;
}

const GuestBookBoxWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.gray50};
  border: 1px solid ${({ theme }) => theme.gray100};
  border-radius: 20px;
  & > section {
    align-self: flex-end;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.gray600};
  }
`;

const StickerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Textarea = styled.textarea<IProps>`
  display: -webkit-box;
  width: ${({ size }) =>
    size.line ? `${parseInt(size.width) - 32}px` : `${parseInt(size.width) - 32}px`} !important;
  height: ${({ size }) => (size.line ? `${parseInt(size.line) * 20}px` : '200px')} !important;
  overflow: ${({ size }) => (size.line ? 'hidden' : 'auto')};
  font-size: ${({ size }) => (size.line ? '14px' : '16px')};
  font-weight: 400;
  line-height: ${({ size }) => (size.line ? '20px' : '24px')};
  color: ${({ theme }) => theme.gray850};
  text-overflow: ellipsis;
  word-wrap: break-word;
  resize: none;
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ size }) => size.line};
`;

const LockTextArea = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ size }) =>
    size.line ? `${parseInt(size.width) - 32}px` : `${parseInt(size.width) - 32}px`};
  height: ${({ size }) => (size.line ? `${parseInt(size.line) * 20}px` : '200px')};
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.gray800};
`;

const BoxInfo = styled.div<ILockProps>`
  display: flex;
  /* justify-content: ${({ lock }) => (lock ? 'flex-end' : 'space-between')}; */
  align-items: cneter;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.gray700};
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.gray700};
  }
`;

const G = {
  GuestBookBoxWrapper,
  StickerDiv,
  Textarea,
  LockTextArea,
  BoxInfo,
};

export default G;
