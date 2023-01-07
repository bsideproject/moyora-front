import React from 'react';
import Image from 'next/image';

import LogoHeader from '@components/Common/LogoHeader';

import Profile from '@public/svgs/profile.svg';
import ChevronRight from '@public/svgs/chevron-right.svg';

import M from '@components/Mypage/Mypage.styles';
import { Upload } from 'antd';

const Mypage: React.FC = () => {
  return (
    <M.MypageIndexWrapper className="full-container">
      <M.GlobalStyle />
      <div>
        <LogoHeader headerIcons />
      </div>
      <M.ProfileWrap>
        <Upload>
          <Image src={Profile} alt="profile" />
        </Upload>
        <div>
          <div>
            <h2>홍길동</h2>
            <h3>별명</h3>
          </div>
          <p>OO초등학교 (77회 졸업)</p>
        </div>
      </M.ProfileWrap>
      <M.LinkWrap>
        <h4>프로필</h4>
        <M.LinkCard href="/">
          <p>이름 및 닉네임 수정</p>
          <Image src={ChevronRight} alt="chevron-right" />
        </M.LinkCard>
      </M.LinkWrap>
    </M.MypageIndexWrapper>
  );
};

export default Mypage;
