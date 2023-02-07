import React from 'react';
import { useRouter } from 'next/router';

import CommonButton from '@atoms/CommonButton';
import LogoHeader from '@components/Common/LogoHeader';

import M from '@components/Mypage/Mypage.styles';
import { useEditName, useMyInfo } from '@APIs/user';
import useInput from '@utils/useInput';
import { useQueryClient } from '@tanstack/react-query';

const EditName: React.FC = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: me } = useMyInfo();

  const [name, onChangeName] = useInput(me?.name);
  const [nickname, onChangeNickname] = useInput(me?.nickname);

  const onSuccess = () => {
    queryClient.setQueryData(['/user/myinfo'], { ...me, name, nickname });
    router.replace('/mypage');
  };
  const { mutate } = useEditName({ onSuccess });
  const onClickEditName = () => {
    mutate({ name, nickname });
  };
  return (
    <M.MypageInputWrapper>
      <LogoHeader headerIcons />
      <h2>이름 및 닉네임 수정</h2>
      <h3>
        이름(실명)<span> *</span>
      </h3>
      <M.MypageInput
        isfill={Boolean(name)}
        placeholder="2자 이상 10자 이내"
        value={name}
        onChange={onChangeName}
      />
      <h3>닉네임(별명)</h3>
      <M.MypageInput
        isfill={Boolean(nickname)}
        placeholder="2자 이상 10자 이내"
        value={nickname}
        onChange={onChangeNickname}
      />
      <CommonButton type="primary" onClick={onClickEditName}>
        수정 완료
      </CommonButton>
    </M.MypageInputWrapper>
  );
};

export default EditName;
