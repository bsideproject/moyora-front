import React, { useMemo, useState } from 'react';
import axios from 'axios';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { BaseOptionType } from 'antd/es/select';
import { dehydrate, QueryClient, useQueryClient } from '@tanstack/react-query';

import { useEditProfile, useMyInfo } from '@APIs/user';

import { baseURL } from '@configs/axios';
import { snsOptions, urlRegex } from '@configs/bigContents';

import CommonButton from '@atoms/CommonButton';
import LogoHeader from '@components/Common/LogoHeader';
import BirthDaySection from '@components/Mypage/BirthDaySection';
import PublicSwitchSection from '@components/Mypage/PublicSwitchSection';
import SelectJobSection from '@components/Mypage/SelectJobSection';
import SelectLocationSection, { ICity } from '@components/Mypage/SelectLocationSection';
import SelectMBTISection from '@components/Mypage/SelectMBTISection';
import SelectSNSSection from '@components/Mypage/SelectSNSSection';

import M from '@components/Mypage/Mypage.styles';
import fillZero from '@utils/fillZero';

const EditProfile: React.FC = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: me } = useMyInfo();
  const [isSelect, onToggle] = useToggle(false);
  const [jobCategory, setJobCategory] = useState(me?.jobCategory ?? '');
  const [job, setJob] = useState(me?.job ?? '');
  const onChangeCategory = (category: string | string[]) => {
    if (typeof category === 'string') setJobCategory(category);
  };
  const [parentRegion, setParentRegion] = useState<string | null>(
    me?.residence?.split(' ')[0] || null,
  );
  const [childRegion, setChildRegion] = useState<ICity | null>(
    me?.residence ? { label: me?.residence?.split(' ')[1] ?? '', value: me?.regionId ?? 0 } : null,
  );
  const onChangeState = (v: unknown) => {
    setChildRegion(null);
    setParentRegion(v as string);
  };
  const onChangeCity = (_: unknown, option: BaseOptionType) =>
    setChildRegion(option as unknown as ICity);
  const [isPublic, togglePublic] = useToggle(me?.isPublic ?? true);
  const [mbti, setMBTI] = useState(me?.mbti);
  const onChangeMBTI = (v: unknown) => setMBTI((v || undefined) as string);
  const [year, setYear] = useState(me?.birthDate?.split('.')?.[0] || undefined);
  const [month, setMonth] = useState(me?.birthDate?.split('.')[1]);
  const [day, setDay] = useState(me?.birthDate?.split('.')[2]);
  const onChangeYear = (v: unknown) => setYear((v || undefined) as string);
  const onChangeMonth = (v: unknown) => setMonth((v || undefined) as string);
  const onChangeDay = (v: unknown) => setDay((v || undefined) as string);
  const onClickSelectJob =
    ({ category, jobName }: { category: string; jobName: string }) =>
    () => {
      setJobCategory(category);
      setJob(jobName);
      onToggle(false);
    };
  const sns: { [key: string]: string } = useMemo(
    () => ({
      instagram: me?.instagram ?? '',
      youtube: me?.youtube ?? '',
      facebook: me?.facebook ?? '',
    }),
    [me],
  );
  const [urls, setUrls] = useState(() => {
    const data = snsOptions.filter((v) => sns?.[v?.value]);
    if (!data.length) return [{ label: 'SNS 선택', value: '', url: '' }];
    return data.map((v) => ({ label: v.label, value: v.value, url: sns?.[v?.value] }));
  });
  const [isError, setError] = useState<null | boolean>(null);
  const onClickAddUrls = () => {
    setUrls((prev) => [...prev, { label: 'SNS 선택', value: '', url: '' }]);
  };
  const onSelectUrls = (prevLabel: string) => (_: unknown, select: unknown) => {
    const { label, value } = select as { label: string; value: string };
    setUrls((prev) =>
      prev.map((url) => (url.label === prevLabel ? { ...url, label, value } : url)),
    );
  };
  const onFocusUrl = () => setError(null);
  const onBlurUrl = () =>
    setError(urls?.at(-1)?.url ? !urlRegex.test(urls?.at(-1)?.url ?? '') : false);
  const onChangeUrl = (label: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrls((prev) =>
      prev.map((url) => (url.label === label ? { ...url, url: e.target.value } : url)),
    );
  };
  const isDisabled = useMemo(
    () =>
      [
        Boolean(childRegion?.value),
        typeof year === typeof month,
        typeof month === typeof day,
        typeof year === typeof day,
      ].includes(false)
        ? true
        : false,
    [childRegion, day, month, year],
  );
  const onSuccess = async () => {
    await queryClient
      .refetchQueries({ queryKey: ['/user/myinfo'], type: 'active' })
      .then(() => router.replace('/mypage'));
  };
  const { mutate } = useEditProfile({ onSuccess });
  const onClickEditProfile = () => {
    const instagram = urls.filter((v) => v.value === 'instagram')[0]?.url;
    const youtube = urls.filter((v) => v.value === 'youtube')[0]?.url;
    const facebook = urls.filter((v) => v.value === 'facebook')[0]?.url;
    const birthDate = year ? `${year}-${fillZero(+(month ?? 0))}-${fillZero(+(day ?? 0))}` : null;
    console.log(birthDate);
    mutate({
      job,
      regionId: childRegion?.value,
      isPublic,
      mbti,
      instagram,
      youtube,
      facebook,
      birthDate,
    });
  };

  return (
    <M.MypageInputWrapper>
      <LogoHeader headerIcons />
      <h2 className="custom-margin">프로필 정보 수정</h2>
      <div className="form-section">
        <h4>필수 정보</h4>
        <h3>
          직업 분야<span> *</span>
        </h3>
        <SelectJobSection
          {...{ jobCategory, job, onToggle, isSelect, onChangeCategory, onClickSelectJob }}
        />
        <h3>
          거주 지역<span> *</span>
        </h3>
        <SelectLocationSection {...{ parentRegion, childRegion, onChangeState, onChangeCity }} />
        <PublicSwitchSection isPublic={isPublic} onChange={() => togglePublic()} />
      </div>
      <div className="form-section">
        <h4>선택 정보</h4>
        <h3>MBTI</h3>
        <SelectMBTISection {...{ mbti, onChangeMBTI }} />
        <h3>생일</h3>
        <BirthDaySection {...{ year, month, day, onChangeYear, onChangeMonth, onChangeDay }} />
        <h3>SNS 계정</h3>
        <SelectSNSSection
          {...{ urls, isError, onSelectUrls, onFocusUrl, onBlurUrl, onChangeUrl, onClickAddUrls }}
        />
      </div>
      <CommonButton type="primary" disabled={isDisabled} onClick={onClickEditProfile}>
        수정 완료
      </CommonButton>
    </M.MypageInputWrapper>
  );
};

export default EditProfile;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const queryClient = new QueryClient();
    const moyoraCookie = req?.cookies?.moyora || '';
    if (!moyoraCookie) return { props: {} };
    else {
      const queryKey = `${baseURL}/user/myinfo`;
      const getMyInfo = () =>
        axios
          .get(queryKey, { headers: { Authorization: `Bearer ${moyoraCookie}` } })
          .then((res) => res.data);
      if (getMyInfo) {
        await queryClient.prefetchQuery(['/user/myinfo'], getMyInfo);
        return {
          props: {
            dehydratedState: dehydrate(queryClient),
          },
        };
      } else throw new Error('Not Login');
    }
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
