import styled from 'styled-components';
const FriendsListWrapper = styled.section`
  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 66px;
    padding: 20px 0;
    & h1 {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
    }
    & h2 {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.primary};
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }
`;

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: calc(100vh - 144px);
  margin-top: 8px;
  overflow: scroll;
  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 350px;
    height: 80px;
    padding: 16px 20px;
    margin-top: 12px;

    cursor: pointer;
    background: #fff4ec;
    border-radius: 16px;
    & > div {
      margin-left: 12px;
    }
    & h3 {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${({ theme }) => theme.gray900};
    }
    & p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;

const F = {
  FriendsListWrapper,
  FriendsList,
};

export default F;
