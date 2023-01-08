import React from 'react';
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

interface IProps {
  headerIcons?: boolean;
  backgroundPrimary?: boolean;
  children?: React.ReactElement;
}

const LogoHeader: React.FC<IProps> = ({ headerIcons, backgroundPrimary, children }) => {
  const router = useRouter();
  return (
    <L.LogoHeaderWrapper backgroundPrimary={backgroundPrimary}>
      <Link href="/mainPage">
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
          <Button
            type="text"
            shape="circle"
            onClick={() => router.replace(`/guestBook/list`, '', { shallow: true })}
          >
            <Image src={backgroundPrimary ? ListIconPrimary : ListIcon} alt="ListIcon" />
          </Button>
        </L.HeaderIcons>
      ) : (
        ''
      )}
    </L.LogoHeaderWrapper>
  );
};

export default LogoHeader;
