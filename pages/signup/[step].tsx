import React, { useMemo } from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';

import getGraduationYear from '@utils/getGraduationYear';
import SignupLayout from '@components/Layout/SignupLayout';

import SelectAllow from '@public/svgs/select-allow.svg';

import S from '@components/Signup/Signup.styles';

type TStep = '1' | '2' | '3' | '4';

const Signup: React.FC = () => {
  const router = useRouter();
  const { step } = router.query;
  const options = useMemo(() => getGraduationYear(), []);
  const [isDefault, onToggle] = useToggle(true);

  return (
    <SignupLayout step={(step ?? '1') as TStep}>
      <S.SignupInputWrapper>
        <div>
          <h3>졸업하신 초등학교는 어디인가요?</h3>
          {isDefault ? (
            <S.SearchButton
              readOnly
              bordered={false}
              placeholder="학교 검색"
              onClick={() => alert('clicked')}
            />
          ) : (
            <S.SignupInput placeholder="학교명 입력" />
          )}
        </div>
        <div>
          <h3>{isDefault ? '졸업연도는 언제인가요?' : '학교 위치는 어디인가요?'}</h3>
          {isDefault ? (
            <S.SignupSelect
              placeholder="졸업연도"
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
        </div>
        {isDefault ? (
          <>
            <p>
              학교 검색이 안되시나요?
              <br />
              졸업하신 학교를 직접 등록하실 수 있습니다.
            </p>
            <button onClick={onToggle}>학교 직접 등록하기</button>
          </>
        ) : null}
      </S.SignupInputWrapper>
    </SignupLayout>
  );
};

export default Signup;
