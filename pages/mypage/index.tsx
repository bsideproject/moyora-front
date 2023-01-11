import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Upload } from 'antd';

import LogoHeader from '@components/Common/LogoHeader';

import Profile from '@public/svgs/profile.svg';
import Pencil from '@public/svgs/pencil.svg';
import ChevronRight from '@public/svgs/chevron-right.svg';

import M from '@components/Mypage/Mypage.styles';

const profileLinks = [
  { name: '이름 및 닉네임 수정', link: '/mypage/edit-name' },
  { name: '학교 정보 수정', link: '/mypage/edit-school' },
  { name: '프로필 정보 수정', link: '/mypage/edit-profile' },
];

const otherLinks = [
  { name: '서비스 정보', link: '/mypage/service-info' },
  { name: '로그아웃', link: '/mypage?logout=true' },
];

const Mypage: React.FC = () => {
  const router = useRouter();
  const logout = router.query?.logout ?? false;
  const onClickLogout = () => router.replace('/');
  const onClickCancelLogout = () => router.replace('/mypage', '/mypage', { shallow: true });
  return (
    <M.MypageIndexWrapper className="full-container">
      <M.GlobalStyle />
      <div>
        <LogoHeader headerIcons />
      </div>
      <M.ProfileWrap>
        <Upload>
          <Image src={Profile} alt="profile" />
          <div>
            <Image src={Pencil} alt="pencil" />
          </div>
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
        {profileLinks.map(({ name, link }) => (
          <M.LinkCard key={link} href={link}>
            <p>{name}</p>
            <Image src={ChevronRight} alt="chevron-right" />
          </M.LinkCard>
        ))}
      </M.LinkWrap>
      <M.LinkWrap>
        <h4>기타</h4>
        {otherLinks.map(({ name, link }) => (
          <M.LinkCard key={link} href={link}>
            <p>{name}</p>
            <Image src={ChevronRight} alt="chevron-right" />
          </M.LinkCard>
        ))}
      </M.LinkWrap>
      <M.LogoutModal
        title="정말 로그아웃 하시겠어요?"
        width={350}
        open={Boolean(logout)}
        closeIcon={<></>}
        footer=""
        centered
      >
        <Button block type="primary" onClick={onClickLogout}>
          로그아웃
        </Button>
        <Button block onClick={onClickCancelLogout}>
          취소
        </Button>
      </M.LogoutModal>
    </M.MypageIndexWrapper>
  );
};

export default Mypage;
