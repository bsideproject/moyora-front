import styled from 'styled-components';

const GuestBookBetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  & > h2 {
    margin-top: 24rem;
    font-size: 20rem;
    font-weight: 700;
    line-height: 28rem;
    color: ${({ theme }) => theme.gray900};
  }

  & p {
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
  }

  & > p {
    margin-top: 12rem;
    font-size: 16rem;
    font-weight: 400;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray600};
  }

  & > .ant-input-textarea-show-count::after {
    position: relative;
    right: 10rem;
    bottom: 10rem;
    float: right;
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
    transform: translateY(-100%);
  }

  & TextArea {
    align-self: center;
    margin-top: 32rem;
    font-size: 16rem;
    font-weight: 400;
    line-height: 20rem;
    border: 1px solid #ccd2d8;
    border-radius: 4rem;
  }
`;

const ButtonSection = styled.section`
  position: absolute;
  bottom: 0;
  width: 390rem;
  height: 108rem;
  & Button {
    width: 350px;
    height: 44px;
    padding: 11rem, 16rem;
    border-radius: 8rem;
  }
`;

const G = {
  GuestBookBetaWrapper,
  ButtonSection,
};

export default G;
