import styled from 'styled-components';
const FriendsListWrapper = styled.section`
  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 20px 0 16px 0;
    & h1 {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      color: ${({ theme }) => theme.gray900};
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
      width: 92px;
      height: 24px;
      cursor: pointer;
    }
  }
`;

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 48px;

  & > div {
    &:not(:first-of-type) {
      margin-top: 12px;
    }
    & > div:first-of-type {
      margin-right: 12px;
    }
    display: flex;
    align-items: center;
    width: 350px;
    height: 80px;
    padding: 18px 20px;
    cursor: pointer;
    background: #fff4ec;
    border-radius: 16px;
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
  & h4 {
    margin-top: 180px;
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    color: ${({ theme }) => theme.gray500};
    text-align: center;
  }
`;

const F = {
  FriendsListWrapper,
  FriendsList,
};

export default F;
