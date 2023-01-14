import styled from 'styled-components';

const G = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 200px;
  height: 200px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.gray50};
  border: 1px solid ${({ theme }) => theme.gray100};
  border-radius: 20px;
  & > div {
    width: 100%;
    & > section {
      display: flex;
      justify-content: space-between;
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      & > span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      & > textarea {
        display: -webkit-box;
        width: 100%;

        margin-top: 16px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: ${({ theme }) => theme.gray850};
        word-wrap: break-word;
        resize: none;

        background-color: transparent;
        border: none;
        outline: none;
        -webkit-box-orient: vertical;
      }
    }
  }
  & > section {
    align-self: flex-end;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.gray600};
  }
  & > span:last-of-type {
    display: flex;
    align-items: cneter;
    justify-content: space-between;
    width: 100%;
    & > div {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      color: ${({ theme }) => theme.gray700};
    }
  }
`;

export default G;
