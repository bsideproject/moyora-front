/* eslint-disable max-lines */
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';

import { MBTIOptions, snsOptions } from '@configs/bigContents';

import CommonButton from '@atoms/CommonButton';
import LogoHeader from '@components/Common/LogoHeader';

import ErrorIcon from '@public/svgs/error-icon.svg';
import SelectAllow from '@public/svgs/select-allow.svg';

import M from '@components/Mypage/Mypage.styles';
import { useEditProfile, useMyInfo } from '@APIs/user';
import { BaseOptionType } from 'antd/es/select';
import { dehydrate, QueryClient, useQueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import BirthDaySection from '@components/Mypage/BirthDaySection';
import PublicSwitchSection from '@components/Mypage/PublicSwitchSection';
import SelectJobSection from '@components/Mypage/SelectJobSection';
import SelectLocationSection from '@components/Mypage/SelectLocationSection';

interface ICity {
  label: string;
  value: number;
}

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_SERVER_DEV_URL
    : process.env.NEXT_PUBLIC_SERVER_URL;

const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

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
  const onChangeMBTI = (v: unknown) => setMBTI(v as string);

  const [year, setYear] = useState(me?.birthDate?.split('-')[0] || undefined);
  const [month, setMonth] = useState(me?.birthDate?.split('-')[1]);
  const [day, setDay] = useState(me?.birthDate?.split('-')[2]);

  const onChangeYear = (v: unknown) => setYear(v as string);
  const onChangeMonth = (v: unknown) => setMonth(v as string);
  const onChangeDay = (v: unknown) => setDay(v as string);

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

  const selectedSNS = useMemo(
    () => snsOptions.filter((v) => !urls.find((url) => v.value && url.value === v.value)),
    [urls],
  );

  const onClickAddUrls = () => {
    setUrls((prev) => [...prev, { label: 'SNS 선택', value: '', url: '' }]);
  };

  const onSelectUrls = (value: unknown) => {
    let selected = { label: '', value: '', url: '' };
    if (value === 'instagram') selected = { label: '인스타그램', value, url: '' };
    else if (value === 'youtube') selected = { label: '유튜브', value, url: '' };
    else if (value === 'facebook') selected = { label: '페이스북', value, url: '' };
    else return;
    setUrls((prev) => [
      ...prev.filter((v) => v.label !== 'SNS 선택'),
      { label: selected?.label, value: selected?.value, url: '' },
    ]);
  };

  const onFocusUrl = () => {
    setError(null);
  };

  const onBlurUrl = () => {
    setError(urls?.at(-1)?.url ? !urlRegex.test(urls?.at(-1)?.url ?? '') : false);
  };

  const onChangeUrl =
    (label: string, value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUrls((prev) => [
        ...prev.filter((v) => v.label !== label),
        { label, value, url: e.target.value },
      ]);
    };

  const isDisabled = useMemo(() => {
    if (typeof year !== typeof month || typeof month !== typeof day || typeof year !== typeof day)
      return true;

    return false;
  }, [day, month, year]);

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
    const birthdate = year ? `${year}-${month}-${day}` : null;
    const data = {
      job,
      regionId: childRegion?.value,
      isPublic,
      mbti,
      instagram,
      youtube,
      facebook,
      birthdate,
    };
    mutate(data);
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
        <PublicSwitchSection isPublic onChange={() => togglePublic()} />
      </div>
      <div className="form-section">
        <h4>선택 정보</h4>
        <h3>MBTI</h3>
        <M.MypageSelect
          placeholder="MBTI 유형"
          options={MBTIOptions}
          value={mbti}
          onChange={onChangeMBTI}
          suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
        />
        <h3>생일</h3>
        <BirthDaySection {...{ year, month, day, onChangeYear, onChangeMonth, onChangeDay }} />
        <h3>SNS 계정</h3>
        {urls?.map((url) => (
          <div key={url.value} className="select-group">
            <M.MypageSelect
              isfill={Boolean(url.value)}
              defaultValue="SNS 선택"
              className="half"
              placeholder="SNS 선택"
              options={selectedSNS}
              value={{ label: url.label, value: url.value }}
              onSelect={onSelectUrls}
              suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
            />
            <M.MypageInput
              allowClear
              isfill={Boolean(url.url)}
              placeholder="전체 URL 주소를 입력해주세요"
              value={url.url}
              disabled={!url.value}
              onBlur={onBlurUrl}
              onFocus={onFocusUrl}
              onChange={onChangeUrl(url.label, url.value)}
            />
          </div>
        ))}
        {selectedSNS?.length > 1 && isError !== true && urlRegex.test(urls.at(-1)?.url ?? '') ? (
          <h5 onClick={onClickAddUrls}>+ SNS 계정 추가</h5>
        ) : null}
        {isError === true ? (
          <span className="error-text">
            <Image src={ErrorIcon} alt="error-icon" />
            전체 URL 주소를 입력해주세요
          </span>
        ) : null}
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
          .get(queryKey, {
            headers: { Authorization: `Bearer ${moyoraCookie}` },
          })
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
