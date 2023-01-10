import React from 'react';
import { useRouter } from 'next/router';

import CommonButton from '@atoms/CommonButton';
import LogoHeader from '@components/Common/LogoHeader';

import M from '@components/Mypage/Mypage.styles';

const EditName: React.FC = () => {
  const router = useRouter();
  const onClickEditName = () => router.replace('/mypage');
  return (
    <M.MypageInputWrapper>
      <LogoHeader headerIcons />
      <h2>이름 및 닉네임 수정</h2>
      <h3>
        이름(실명)<span> *</span>
      </h3>
      <M.MypageInput isFill placeholder="2자 이상 10자 이내" value="홍길동" />
      <h3>닉네임(별명)</h3>
      <M.MypageInput placeholder="2자 이상 10자 이내" />
      <CommonButton type="primary" onClick={onClickEditName}>
        수정 완료
      </CommonButton>
    </M.MypageInputWrapper>
  );
};

export default EditName;
