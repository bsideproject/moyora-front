import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';

import { dummyMBTIOptions, dummySNSOptions } from '@configs/bigContents';

import CommonButton from '@atoms/CommonButton';
import LogoHeader from '@components/Common/LogoHeader';

import ErrorIcon from '@public/svgs/error-icon.svg';
import SelectAllow from '@public/svgs/select-allow.svg';
import ChevronRight from '@public/svgs/chevron-right.svg';

import M from '@components/Mypage/Mypage.styles';
import getGraduationYear from '@utils/getGraduationYear';
import useInput from '@utils/useInput';
import { Switch } from 'antd';

const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

const EditProfile: React.FC = () => {
  const router = useRouter();
  const [isSelect, onToggle] = useToggle(false);
  const [isError, setError] = useState<null | boolean>(null);
  const [job, setJob] = useState('마케팅/광고/홍보');
  const [url, onChangeUrl] = useInput('');

  const onFocusUrl = () => setError(null);

  const onBlurUrl = () => {
    setError(url ? !urlRegex.test(url) : false);
  };

  const options = useMemo(() => getGraduationYear(), []);

  const onClickSignupInput = (value: string) => () => {
    setJob(value);
    onToggle(false);
  };
  const onClickEditProfile = () => router.replace('/mypage');
  return (
    <M.MypageInputWrapper>
      <LogoHeader headerIcons />
      <h2 className="custom-margin">프로필 정보 수정</h2>
      <div>
        <h4>필수 정보</h4>
        <h3>
          직업 분야<span> *</span>
        </h3>
        <M.MypageInput
          readOnly
          bordered={false}
          placeholder="직군/직무를 선택하기"
          isFill={Boolean(job)}
          value={job}
          suffix={<Image src={ChevronRight} alt="chevron-right" />}
          onClick={onToggle}
        />
        {job ? (
          <M.MypageInput
            readOnly
            bordered={false}
            placeholder="직군/직무를 선택하기"
            isFill={Boolean(job)}
            value={job}
            suffix={<Image src={ChevronRight} alt="chevron-right" />}
            onClick={onToggle}
          />
        ) : null}
        <h3>
          거주 지역<span> *</span>
        </h3>
        <div className="select-group">
          <M.MypageSelect
            className="half"
            placeholder="시/도"
            options={options}
            suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          />
          <M.MypageSelect
            className="half"
            placeholder="시/구"
            options={options}
            suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          />
        </div>
        <M.JobDrawer
          title="직군/직무를 선택"
          placement="bottom"
          getContainer={false}
          height="100%"
          maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          onClose={onToggle}
          open={isSelect}
        >
          <M.MypageCollapse
            ghost
            accordion
            expandIconPosition="end"
            bordered={false}
            expandIcon={({ isActive }) => (isActive ? '-' : '+')}
          >
            <M.Panel header="마케팅/PR" key="pr">
              <li className="all" onClick={onClickSignupInput('전체')}>
                전체
              </li>
              <li>전체</li>
              <li>전체</li>
            </M.Panel>
            <M.Panel header="마케팅/PR" key="pr1">
              <li>전체</li>
              <li>전체</li>
              <li>전체</li>
            </M.Panel>
            <M.Panel header="마케팅/PR" key="pr2">
              <li>전체</li>
              <li>전체</li>
              <li>전체</li>
            </M.Panel>
          </M.MypageCollapse>
        </M.JobDrawer>
        <M.MypageSwitchWrap>
          <div>
            <h3>필수 정보 비공개 설정</h3>
            <Switch />
          </div>
          <p>비공개 시 통계 집계에는 포함되지만 프로필에는 공개되지 않습니다.</p>
        </M.MypageSwitchWrap>
      </div>
      <div>
        <h4>선택 정보</h4>
        <h3>MBTI</h3>
        <M.MypageSelect
          placeholder="MBTI 유형"
          options={dummyMBTIOptions}
          suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
        />
        <h3>생일</h3>
        <div className="select-group">
          <M.MypageSelect
            className="half"
            placeholder="시/도"
            options={options}
            suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          />
          <M.MypageSelect
            className="half"
            placeholder="시/구"
            options={options}
            suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          />
          <M.MypageSelect
            className="half"
            placeholder="시/구"
            options={options}
            suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          />
        </div>
        <h3>SNS 계정</h3>
        <div className="select-group">
          <M.MypageSelect
            defaultValue="SNS 선택"
            className="half"
            placeholder="SNS 선택"
            options={dummySNSOptions}
            suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          />
          <M.MypageInput
            isFill
            status={isError ? 'error' : ''}
            placeholder="전체 URL 주소를 입력해주세요"
            value={url}
            onBlur={onBlurUrl}
            onFocus={onFocusUrl}
            onChange={onChangeUrl}
          />
        </div>
        {url && isError === false ? <h5>+ SNS 계정 추가</h5> : null}
        {url && isError === true ? (
          <span className="error-text">
            <Image src={ErrorIcon} alt="error-icon" />
            전체 URL 주소를 입력해주세요
          </span>
        ) : null}
      </div>
      <CommonButton type="primary" onClick={onClickEditProfile}>
        수정 완료
      </CommonButton>
    </M.MypageInputWrapper>
  );
};

export default EditProfile;
