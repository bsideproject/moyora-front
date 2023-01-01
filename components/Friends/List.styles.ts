import styled from 'styled-components';
const FriendsListWrapper = styled.section`
  & > div:first-of-type {
    height: 66rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rem 0;
    & h1 {
      font-size: 18rem;
      font-weight: 700;
      line-height: 26rem;
    }
    & h2 {
      font-size: 16rem;
      font-weight: 500;
      line-height: 24rem;
      color: ${({ theme }) => theme.primary};
    }
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
  }
`;

const FriendsList = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 144rem);
  overflow: scroll;
  & > div {
    margin-top: 12rem;
    height: 80rem;
    width: 350rem;
    padding: 16rem 20rem;
    background: #fff4ec;
    border-radius: 16rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > div {
      margin-left: 12rem;
    }
    & h3 {
      font-size: 16rem;
      font-weight: 400;
      line-height: 24rem;
      color: ${({ theme }) => theme.gray900};
    }
    & p {
      font-size: 14rem;
      font-weight: 400;
      line-height: 20rem;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;

const F = {
  FriendsListWrapper,
  FriendsList,
};

export default F;
