import 'dayjs/locale/ko';

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, message } from 'antd';

import fillZero from '@utils/fillZero';

import LogoHeader from '@components/Common/LogoHeader';

import LinkIcon from '@public/svgs/moyora-icons-link.svg';
import KakaoIcon from '@public/svgs/kakao-icons-sharing.svg';
import ParticleGroup from '@public/svgs/moyora-particles-group.svg';
import { useMyInfo } from '@APIs/user';
import S from '@components/Signup/Signup.styles';

dayjs.locale('ko');

const DDAY = '2023-02-08';
const toDay = dayjs().format('YYYY-MM-DD');
const URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_DOMAIN_URL ?? ''
    : 'http://localhost:3000';

const SignUpComplete: React.FC = () => {
  const router = useRouter();

  const { data } = useMyInfo();

  const [counterDay, setCounterDay] = useState('00');
  const [counterHour, setCounterHour] = useState('00');
  const [counterMinute, setCounterMinute] = useState('00');
  const [counterSecond, setCounterSecond] = useState('00');
  const [isCopy, isToggleCopy] = useToggle(false);

  const onClickRoute = () => router.replace('/');
  const bracket = /\([^)]*\)/;

  const onClickKakaoShare = () => {
    if (!window?.Kakao?.isInitialized()) {
      window?.Kakao?.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      window.Kakao?.Share?.createScrapButton({
        container: '#kakaotalk-sharing-btn',
        requestUrl: URL,
      });
    }
  };
  const onClickCopy = () => {
    if (!isCopy) {
      message.success('주소가 복사되었습니다!');
      isToggleCopy();
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      const nowDate = dayjs();
      const releaseDate = dayjs(DDAY, 'YYYY-MM-DD');
      const timerDate = releaseDate.diff(nowDate, 's');
      const lastDay = fillZero(timerDate / 3600 / 24);
      const lastHour = fillZero((timerDate / 3600) % 24);
      const lastMinutes = fillZero((timerDate / 60) % 60);
      const lastSeconds = fillZero(timerDate % 60);

      setCounterDay(lastDay);
      setCounterHour(lastHour);
      setCounterMinute(lastMinutes);
      setCounterSecond(lastSeconds);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  if (
    [counterDay, counterHour, counterMinute, counterSecond].every((isLoading) => isLoading === '00')
  )
    return null;
  return (
    <S.SignUpCompleteWrapper>
      <LogoHeader />
      <div>
        <Image src={ParticleGroup} alt="moyora-particle" priority />
        {data?.schoolName ? (
          <h1>
            <b>{data?.schoolName.replace(bracket, '')}</b>
            <br />
            여기여기 모여라~
          </h1>
        ) : (
          ''
        )}
        {DDAY >= toDay ? (
          <>
            <h2>
              <span>{counterDay}일</span>:<span>{counterHour}시</span>:
              <span>{counterMinute}분</span>:<span>{counterSecond}초</span>
            </h2>
            <p>2월 8일에 정식 버전으로 만나요!</p>
            <S.SignupCompleteWrap>
              <p>
                더 많은 동창 친구들이 모일 수 있도록
                <br />
                공유해보세요!
              </p>
              <br />
              <div>
                <div>
                  <Button id="kakaotalk-sharing-btn" shape="circle" onClick={onClickKakaoShare}>
                    <Image src={KakaoIcon} alt="kakao-icon" />
                  </Button>
                  <p>카카오톡</p>
                </div>
                <CopyToClipboard text={URL} onCopy={onClickCopy}>
                  <div>
                    <Button shape="circle">
                      <Image src={LinkIcon} alt="link-icon" />
                    </Button>
                    <p>링크 복사</p>
                  </div>
                </CopyToClipboard>
              </div>
            </S.SignupCompleteWrap>
          </>
        ) : (
          <>
            <p>
              우리 학교 동창들은 얼마나 모였는지
              <br />
              지금 바로 우리 학교 공간에서 확인해 보세요!
            </p>
            <Button block type="primary" onClick={onClickRoute}>
              우리 학교로 이동하기
            </Button>
          </>
        )}
      </div>
    </S.SignUpCompleteWrapper>
  );
};

export default SignUpComplete;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (!req.headers.referer) {
    res.statusCode = 302;
    res.setHeader('Location', `/login`);
    res.end();
  }
  return { props: {} };
};
