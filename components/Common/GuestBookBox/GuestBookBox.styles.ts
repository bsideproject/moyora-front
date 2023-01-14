import styled from 'styled-components';

interface IProps {
  size: { width: string; height: string; line: string | false };
}

interface ILockProps {
  lock?: boolean;
}

const GuestBookBoxWrapper = styled.div<IProps>`
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
  padding: 20rem 16rem;
  background-color: ${({ theme }) => theme.gray50};
  border: 1rem solid ${({ theme }) => theme.gray100};
  border-radius: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > section {
    align-self: flex-end;
    font-size: 13rem;
    font-weight: 400;
    line-height: 18rem;
    color: ${({ theme }) => theme.gray600};
  }
`;

const StickerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Textarea = styled.textarea<IProps>`
  resize: none;
  font-size: ${({ size }) => (size.line ? '14rem' : '16rem')};
  font-weight: 400;
  line-height: ${({ size }) => (size.line ? '20rem' : '24rem')};
  color: ${({ theme }) => theme.gray850};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ size }) => size.line};
  height: ${({ size }) => (size.line ? `${parseInt(size.line) * 20}rem` : '200rem')} !important;
  width: ${({ size }) =>
    size.line ? `${parseInt(size.width) - 32}rem` : `${parseInt(size.width) - 32}rem`} !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  background-color: transparent;
  border: none;
  outline: none;
  overflow: ${({ size }) => (size.line ? 'hidden' : 'auto')};
`;

const LockTextArea = styled.div<IProps>`
  height: ${({ size }) => (size.line ? `${parseInt(size.line) * 20}rem` : '200rem')};
  width: ${({ size }) =>
    size.line ? `${parseInt(size.width) - 32}rem` : `${parseInt(size.width) - 32}rem`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13rem;
  font-weight: 400;
  line-height: 18rem;
  color: ${({ theme }) => theme.gray800};
`;

const BoxInfo = styled.div<ILockProps>`
  display: flex;
  justify-content: space-between;
  /* justify-content: ${({ lock }) => (lock ? 'flex-end' : 'space-between')}; */
  align-items: cneter;
  font-size: 13rem;
  font-weight: 400;
  line-height: 18rem;
  color: ${({ theme }) => theme.gray700};
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13rem;
    font-weight: 400;
    line-height: 18rem;
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
