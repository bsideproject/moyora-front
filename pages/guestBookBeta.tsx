import React from 'react';

import G from '@components/SignUp/GuestBookBeta.styles';
import { Button, Input } from 'antd';
import Link from 'next/link';
import LSS from '@components/Common/LogoSmallSection';

const { TextArea } = Input;

const guestBook: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };
  return (
    <G.GuestBookBetaWrapper>
      <LSS>
        <Link href="/signUpComplete">
          <p>건너뛰기</p>
        </Link>
      </LSS>
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
      ></TextArea>
      <G.ButtonSection>
        <Button type="primary">다음</Button>
      </G.ButtonSection>
    </G.GuestBookBetaWrapper>
  );
};

export default guestBook;
