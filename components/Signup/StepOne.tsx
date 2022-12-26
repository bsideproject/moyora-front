import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';

import getGraduationYear from '@utils/getGraduationYear';

import SelectAllow from '@public/svgs/select-allow.svg';
import SearchPr from '@public/svgs/search-pr-icon.svg';
import School from '@public/svgs/school.svg';

import S from './Signup.styles';

const StepOne: React.FC = () => {
  const router = useRouter();
  const isSearchSchool = router.query?.isSearchSchool as string | undefined;
  const isAddSchool = router.query?.isAddSchool as string | undefined;
  const [school, setSchool] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [isSearch, onToggleSearch] = useToggle(false);
  const options = useMemo(() => getGraduationYear(), []);

  const onSelectGraduationYear = (value: unknown) => setGraduationYear(value as string);

  const onClickSearchSchool = () => {
    router.replace('/signup/1?isSearchSchool=true', '/signup/1', { shallow: true });
  };

  const onClickCloseSchool = () => {
    router.replace('/signup/1', '/signup/1', { shallow: true });
  };

  const onClickAddSchool = () => {
    router.replace('/signup/1?isAddSchool=true', '/signup/1', { shallow: true });
  };

  const onSearchSchool = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.value) onToggleSearch(true);
    else onToggleSearch(false);
  };

  const onClickSelectSchool = () => {
    setSchool('이매초등학교');
    router.replace('/signup/1', '/signup/1', { shallow: true });
  };

  if (isSearchSchool) {
    return (
      <S.SignupSearchWrapper>
        <S.SignupSearchInput
          allowClear
          bordered={false}
          prefix={<Image src={SearchPr} alt="search-pr-icon" />}
          suffix={<button onClick={onClickCloseSchool}>닫기</button>}
          onPressEnter={onSearchSchool}
        />
        {isSearch ? (
          <>
            <S.SearchSchoolCard>
              <Image src={School} alt="school-icon" />
              <div onClick={onClickSelectSchool}>
                <p>이매초등학교</p>
                <span>경기도 성남시 분당구</span>
              </div>
            </S.SearchSchoolCard>
            <S.SearchSchoolCard>
              <Image src={School} alt="school-icon" />
              <div>
                <p>이매초등학교</p>
                <span>경기도 성남시 분당구</span>
              </div>
            </S.SearchSchoolCard>
            <S.SearchSchoolCard>
              <Image src={School} alt="school-icon" />
              <div>
                <p>이매초등학교</p>
                <span>경기도 성남시 분당구</span>
              </div>
            </S.SearchSchoolCard>
          </>
        ) : (
          <h4>검색 결과가 없어요</h4>
        )}
      </S.SignupSearchWrapper>
    );
  }

  return (
    <S.SignupInputWrapper>
      <h3>졸업하신 초등학교는 어디인가요?</h3>
      {!isAddSchool ? (
        <S.SearchButton
          readOnly
          bordered={false}
          placeholder="학교 검색"
          value={school}
          onClick={onClickSearchSchool}
        />
      ) : (
        <>
          <S.SignupInput isFill placeholder="학교명 입력" />
          <h4>학교명 전체를 입력해 주세요. (예: 모여라초등학교)</h4>
        </>
      )}
      <h3>{!isAddSchool ? '졸업연도는 언제인가요?' : '학교 위치는 어디인가요?'}</h3>
      {!isAddSchool ? (
        <S.SignupSelect
          placeholder="졸업연도"
          isFill={Boolean(graduationYear)}
          onChange={onSelectGraduationYear}
          options={options}
          suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
        />
      ) : (
        <div className="select-group">
          <S.SignupSelect
            className="half"
            placeholder="시/도"
            options={options}
            suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          />
          <S.SignupSelect
            className="half"
            placeholder="시/구"
            options={options}
            suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          />
        </div>
      )}
      {!isAddSchool ? (
        <>
          <p>
            학교 검색이 안되시나요?
            <br />
            졸업하신 학교를 직접 등록하실 수 있습니다.
          </p>
          <button onClick={onClickAddSchool}>학교 직접 등록하기</button>
        </>
      ) : null}
    </S.SignupInputWrapper>
  );
};

export default StepOne;
