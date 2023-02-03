import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import getGraduationYear from '@utils/getGraduationYear';

import CommonButton from '@atoms/CommonButton';
import LogoHeader from '@components/Common/LogoHeader';

import SelectAllow from '@public/svgs/select-allow.svg';

import M from '@components/Mypage/Mypage.styles';
import { useEditSchool, useMyInfo } from '@APIs/user';
import { useQueryClient } from '@tanstack/react-query';

const EditSchool: React.FC = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const schoolName = router.query?.schoolName as string | undefined;
  const schoolCode = router.query?.schoolCode as string | undefined;

  const { data: me } = useMyInfo();
  const [name, setName] = useState(me?.schoolName?.split('(')[0]);
  const [code, setCode] = useState(me?.schoolCode);
  const [graduationYear, setGraduationYear] = useState(me?.graduationYear);
  const options = useMemo(() => getGraduationYear(), []);

  const onSelectGraduationYear = (value: unknown) => setGraduationYear(value as number);

  const onClickSearchSchool = () => {
    router.replace('/search?isSchool=/signup/1', '/search', { shallow: true });
  };

  const onSuccess = () => {
    queryClient.fetchQuery(['/user/myinfo']);
    router.replace('/mypage');
  };

  const { mutate } = useEditSchool({ onSuccess });

  const onClickEditSchool = () => {
    mutate({ schoolCode: '' + code, graduationYear });
  };

  useEffect(() => {
    if (schoolName) setName(schoolName);
    if (schoolCode) setCode(+schoolCode);
  }, [schoolCode, schoolName]);

  return (
    <M.MypageInputWrapper>
      <LogoHeader headerIcons />
      <h2>학교 정보 수정</h2>
      <h3>
        초등학교명<span> *</span>
      </h3>
      <M.SearchButton
        readOnly
        bordered={false}
        isFill={Boolean(code)}
        placeholder="학교 검색"
        value={name}
        onClick={onClickSearchSchool}
      />
      <h3>
        졸업연도<span> *</span>
      </h3>
      <M.MypageSelect
        placeholder="졸업연도"
        isFill={Boolean(graduationYear)}
        onChange={onSelectGraduationYear}
        options={options}
        defaultValue={graduationYear}
        suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
      />
      <CommonButton type="primary" onClick={onClickEditSchool}>
        수정 완료
      </CommonButton>
    </M.MypageInputWrapper>
  );
};

export default EditSchool;
