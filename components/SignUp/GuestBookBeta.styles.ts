import styled from 'styled-components';

const GuestBookBetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  & > h2 {
    font-size: 20rem;
    font-weight: 700;
    line-height: 28rem;
    color: ${({ theme }) => theme.gray900};
    margin-top: 24rem;
  }

  & p {
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
  }

  & > p {
    font-size: 16rem;
    font-weight: 400;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray600};
    margin-top: 12rem;
  }

  & > .ant-input-textarea-show-count::after {
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
    position: relative;
    float: right;
    transform: translateY(-100%);
    bottom: 10rem;
    right: 10rem;
  }

  & TextArea {
    font-size: 16rem;
    font-weight: 400;
    line-height: 20rem;
    border: 1px solid #ccd2d8;
    border-radius: 4rem;
    align-self: center;
    margin-top: 32rem;
  }
`;

const ButtonSection = styled.section`
  position: absolute;
  bottom: 0;
  height: 108rem;
  width: 390rem;
  & Button {
    width: 350px;
    height: 44px;
    border-radius: 8rem;
    padding: 11rem, 16rem;
  }
`;

const G = {
  GuestBookBetaWrapper,
  ButtonSection,
};

export default G;
