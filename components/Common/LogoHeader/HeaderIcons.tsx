import React from 'react';
import Image from 'next/image';
import ArchiveIcon from '@public/svgs/moyora-icons-archive.svg';
import UserIcon from '@public/svgs/moyora-icons-users.svg';
import ListIcon from '@public/svgs/moyora-icons-list.svg';
import Link from 'next/link';
import HeaderIcons from './HeaderIcons.styles';

const HaedrIcons: React.FC = () => {
  return (
    <HeaderIcons>
      <Link href="/mainPage">
        <Image src={ArchiveIcon} alt="ArchiveIcon" />
      </Link>
      <Link href="/mainPage">
        <Image src={UserIcon} alt="ArchiveIcon" />
      </Link>
      <Link href="/mainPage">
        <Image src={ListIcon} alt="ArchiveIcon" />
      </Link>
    </HeaderIcons>
  );
};

export default HaedrIcons;
