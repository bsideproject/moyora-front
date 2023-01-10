import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import getGraduationYear from '@utils/getGraduationYear';

import CommonButton from '@atoms/CommonButton';
import LogoHeader from '@components/Common/LogoHeader';

import SelectAllow from '@public/svgs/select-allow.svg';

import M from '@components/Mypage/Mypage.styles';

const EditSchool: React.FC = () => {
  const router = useRouter();
  const school = router.query?.school ?? ('이매초등학교' as string | undefined);
  const [graduationYear, setGraduationYear] = useState('2015');
  const options = useMemo(() => getGraduationYear(), []);

  const onSelectGraduationYear = (value: unknown) => setGraduationYear(value as string);

  const onClickSearchSchool = () => {
    router.replace('/search?isSchool=/mypage/edit-school', '/search', { shallow: true });
  };

  const onClickEditSchool = () => router.replace('/mypage');

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
        isFill={Boolean(school)}
        placeholder="학교 검색"
        value={school}
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
