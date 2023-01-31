import React, { useState } from 'react';
import { useToggle } from 'react-use';
import Image from 'next/image';
import SmallLogo from '@public/svgs/moyora-logo-small.svg';
import SmallLogoPrimary from '@public/svgs/moyora-logo-small-primary.svg';
import L from './LogoHeader.styles';
import ArchiveIcon from '@public/svgs/moyora-icons-archive.svg';
import UserIcon from '@public/svgs/moyora-icons-users.svg';
import ListIcon from '@public/svgs/moyora-icons-list.svg';
import ArchiveIconPrimary from '@public/svgs/moyora-icons-archive-primary.svg';
import UserIconPrimary from '@public/svgs/moyora-icons-users-primary.svg';
import ListIconPrimary from '@public/svgs/moyora-icons-list-primary.svg';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import Link from 'next/link';
import CloseIcon from '@public/svgs/icon-close.svg';
import BetaProfileImage from '@public/svgs/beta-profile.svg';

interface IProps {
  headerIcons?: boolean;
  backgroundPrimary?: boolean;
  children?: React.ReactElement;
}

const LogoHeader: React.FC<IProps> = ({ headerIcons, backgroundPrimary, children }) => {
  const router = useRouter();
  const [isSelect, onToggle] = useToggle(false);
  const [isLogout, setIsLogout] = useState(false);
  const onClickLogout = () => router.replace('/');
  return (
    <L.LogoHeaderWrapper backgroundPrimary={backgroundPrimary}>
      <Link href="/">
        <Image src={backgroundPrimary ? SmallLogoPrimary : SmallLogo} alt="moyora-logo" />
      </Link>
      <div>{children}</div>
      {headerIcons ? (
        <L.HeaderIcons>
          <Button
            type="text"
            shape="circle"
            onClick={() => router.replace(`/archive/myPage`, '', { shallow: true })}
          >
            <Image src={backgroundPrimary ? ArchiveIconPrimary : ArchiveIcon} alt="ArchiveIcon" />
          </Button>
          <Button
            type="text"
            shape="circle"
            onClick={() => router.replace(`/friends/list`, '', { shallow: true })}
          >
            <Image src={backgroundPrimary ? UserIconPrimary : UserIcon} alt="UserIcon" />
          </Button>
          <Button type="text" shape="circle" onClick={onToggle}>
            <Image src={backgroundPrimary ? ListIconPrimary : ListIcon} alt="ListIcon" />
          </Button>

          <L.MyDrawer
            title={<LogoHeader />}
            placement="left"
            maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
            onClose={onToggle}
            open={isSelect}
            closeIcon={<Image src={CloseIcon} alt="closeIcon" />}
          >
            <L.ProfileWrap>
              <span>
                <Image src={BetaProfileImage} alt="betaProfile" />
              </span>
              <div>
                <div>
                  <h2>홍길동</h2>
                  <h3>별명</h3>
                </div>
                <p>모여라 초등학교 (77회 졸업)</p>
              </div>
            </L.ProfileWrap>
            <Link href="/mypage">프로필 및 설정</Link>
            <span></span>
            <Link href="/archive/myPage">내 사물함</Link>
            <Link href="/guestBook/list/myPage">내 쪽지</Link>
            <span></span>
            <Link href="/statistics">우리 학교 통계</Link>
            <Link href="/guestBook/list/mySchool">우리 학교 방명록</Link>
            <Link href="/friends/list">동창 목록</Link>
            <span></span>
            <p onClick={onClickLogout}>로그아웃</p>
            <L.LogoutModal
              title="정말 로그아웃 하시겠어요?"
              width={350}
              open={isLogout}
              closeIcon={<></>}
              footer=""
              centered
            >
              <Button block type="primary" onClick={onClickLogout}>
                로그아웃
              </Button>
              <Button block onClick={() => setIsLogout(false)}>
                취소
              </Button>
            </L.LogoutModal>
          </L.MyDrawer>
        </L.HeaderIcons>
      ) : (
        ''
      )}
    </L.LogoHeaderWrapper>
  );
};

export default LogoHeader;
