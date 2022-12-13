import React from 'react';
import Image from 'next/image';

import LogoSmall from '@public/svgs/logos/moyora-logo-small.svg';

import G from '@components/GuestBook/GuestBook.styles';
import { Button, Input } from 'antd';
import Link from 'next/link';

const { TextArea } = Input;

const guestBook: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };
  return (
    <G.GuestBookWrapper>
      <G.LogoSection>
        <Image src={LogoSmall} alt="moyora-logo" />
        <Link href="/signUpComplete">
          <p>건너뛰기</p>
        </Link>
      </G.LogoSection>
      <h2>
        전체 학교 동창 친구들에게
        <br />
        한마디 남겨주세요.😆
      </h2>
      <p>학교 방명록은 익명으로 기록됩니다.</p>
      <TextArea
        showCount
        maxLength={200}
        style={{
          width: '350rem',
          height: '132rem',
          resize: 'none',
        }}
        onChange={onChange}
        placeholder="200자 이내로 입력해 주세요."
      />
      <G.ButtonSection>
        <Button type="primary">다음</Button>
      </G.ButtonSection>
    </G.GuestBookWrapper>
  );
};

export default guestBook;
