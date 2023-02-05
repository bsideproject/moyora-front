import React, { useMemo } from 'react';
import Image from 'next/image';

import { snsOptions } from '@configs/bigContents';

import SelectAllow from '@public/svgs/select-allow.svg';
import ErrorIcon from '@public/svgs/error-icon.svg';

import M from './Mypage.styles';

interface IProps {
  urls: { label: string; value: string; url: string }[];
  isError: boolean | null;
  onSelectUrls: (prevLabel: string) => (_: unknown, select: unknown) => void;
  onFocusUrl: () => void;
  onBlurUrl: () => void;
  onChangeUrl: (label: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAddUrls: () => void;
}

const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

const SelectSNSSection: React.FC<IProps> = ({
  urls,
  isError,
  onSelectUrls,
  onFocusUrl,
  onBlurUrl,
  onChangeUrl,
  onClickAddUrls,
}) => {
  const selectedSNS = useMemo(
    () => snsOptions.filter((v) => !urls.find((url) => v.value && url.value === v.value)),
    [urls],
  );
  return (
    <>
      {urls?.map((url) => (
        <div key={url.value} className="select-group">
          <M.MypageSelect
            isfill={Boolean(url.value)}
            defaultValue="SNS 선택"
            className="half"
            placeholder="SNS 선택"
            options={selectedSNS}
            value={{ label: url.label, value: url.value }}
            onSelect={onSelectUrls(url.label)}
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
            onChange={onChangeUrl(url.label)}
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
    </>
  );
};

export default SelectSNSSection;
