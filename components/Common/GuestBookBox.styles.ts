import styled from 'styled-components';

const G = styled.div`
  background-color: ${({ theme }) => theme.gray50};
  border: 1rem solid ${({ theme }) => theme.gray100};
  border-radius: 20rem;
  padding: 20rem 16rem;
  width: 200rem;
  height: 200rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  & > div {
    width: 100%;
    & > section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    & textarea {
      width: 100%;
      resize: none;

      margin-top: 16rem;
      font-size: 14rem;
      font-weight: 400;
      line-height: 20rem;
      color: ${({ theme }) => theme.gray850};

      display: -webkit-box;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;

      background-color: transparent;
      border: none;
      outline: none;
    }
  }
  & > section {
    align-self: flex-end;
    font-size: 13rem;
    font-weight: 400;
    line-height: 18rem;
    color: ${({ theme }) => theme.gray600};
  }
`;

export default G;
