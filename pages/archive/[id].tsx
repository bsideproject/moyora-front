import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import A from '@components/Archive/archive.styles';
import LogoHeader from '@components/Common/LogoHeader';
import Image from 'next/image';
import ProfileImage from '@components/Common/ProfileImage';
import Facebook from '@public/svgs/icon-sns-facebook.svg';
import Instagram from '@public/svgs/icon-sns-instagram.svg';
import Youtube from '@public/svgs/icon-sns-youtube.svg';
import JobCategory from '@public/svgs/icon-info-jobCategory.svg';
import Region from '@public/svgs/icon-info-region.svg';
import BetaProfileImage from '@public/svgs/beta-profile.svg';
import Link from 'next/link';
import { info, info2, guestBookTempList } from '@configs/bigContents';
import GuestBookBox from '@components/Common/GuestBookBox';
import Sticker1 from '@public/svgs/sticker-1.svg';
import Sticker2 from '@public/svgs/sticker-2.svg';
import Sticker3 from '@public/svgs/sticker-3.svg';
import Sticker4 from '@public/svgs/sticker-4.svg';
import Sticker5 from '@public/svgs/sticker-5.svg';
import Sticker6 from '@public/svgs/sticker-6.svg';
import Sticker7 from '@public/svgs/sticker-7.svg';
import Sticker8 from '@public/svgs/sticker-8.svg';
import Sticker9 from '@public/svgs/sticker-9.svg';
import Sticker10 from '@public/svgs/sticker-10.svg';
import Sticker11 from '@public/svgs/sticker-11.svg';
import Sticker12 from '@public/svgs/sticker-12.svg';
import QuotationMark1 from '@public/svgs/quotationMark-1.svg';
import QuotationMark2 from '@public/svgs/quotationMark-2.svg';
import QuotationMark3 from '@public/svgs/quotationMark-3.svg';
import QuotationMark4 from '@public/svgs/quotationMark-4.svg';
import QuotationMark5 from '@public/svgs/quotationMark-5.svg';
const Archive: React.FC = () => {
  const router = useRouter();
  const id = (router.query?.id ?? 'myPage') as string;
  const [infoData, setInfoData] = useState(info);
  useEffect(() => {
    if (id != 'myPage') {
      info2.name = id;
      setInfoData(info2);
    }
  }, [id]);
  const snsImages = {
    instagram: <Image src={Instagram} alt="instagram" />,
    youtube: <Image src={Youtube} alt="youtube" />,
    facebook: <Image src={Facebook} alt="facebook" />,
  };
  const stickers = {
    '1': { sticker: Sticker1, quotationMark: QuotationMark1 },
    '2': { sticker: Sticker2, quotationMark: QuotationMark1 },
    '3': { sticker: Sticker3, quotationMark: QuotationMark1 },
    '4': { sticker: Sticker4, quotationMark: QuotationMark1 },
    '5': { sticker: Sticker5, quotationMark: QuotationMark2 },
    '6': { sticker: Sticker6, quotationMark: QuotationMark2 },
    '7': { sticker: Sticker7, quotationMark: QuotationMark3 },
    '8': { sticker: Sticker8, quotationMark: QuotationMark3 },
    '9': { sticker: Sticker9, quotationMark: QuotationMark4 },
    '10': { sticker: Sticker10, quotationMark: QuotationMark4 },
    '11': { sticker: Sticker11, quotationMark: QuotationMark5 },
    '12': { sticker: Sticker12, quotationMark: QuotationMark5 },
  };
  return (
    <A.ArchiveWrapper>
      <A.PrimaryBackgroundSection>
        <LogoHeader backgroundPrimary headerIcons />
        <A.Info>
          <div>
            <span>
              {infoData.profile === 'beta' ? (
                <span>
                  <Image src={BetaProfileImage} alt="betaProfile" />
                </span>
              ) : (
                <ProfileImage size="medium" url={infoData.profile} />
              )}
            </span>
            <span>
              <div>
                <h1>{infoData.name}</h1>
                <h3>{infoData.nickname}</h3>
              </div>
              <h3>
                {infoData.school} 초등학교 ({infoData.graduation}회 졸업)
              </h3>
            </span>
          </div>
          <div>
            <span>
              <Image src={JobCategory} alt="jobCategory" />
              <p>직업분야</p>
            </span>
            {infoData.jobCategory ? (
              <div>
                <h2>{infoData.jobCategory}</h2>
                <p>|</p>
                <h2>{infoData.jobCategory2}</h2>
              </div>
            ) : (
              <div>
                <h2>비공개</h2>
              </div>
            )}
            <span>
              <Image src={Region} alt="region" />
              <p>거주 지역</p>
            </span>
            <h2>{infoData.region || '비공개'}</h2>
          </div>
        </A.Info>
      </A.PrimaryBackgroundSection>
      <A.EtcInfo>
        <div>
          <span>
            <h4>{infoData.mbti ? infoData.mbti : '-'}</h4>
            <br />
            <p>MBTI</p>
          </span>
          <span></span>
          <span>
            {(infoData.sns.instagram || infoData.sns.youtube || infoData.sns.facebook) === '' ? (
              <h4>-</h4>
            ) : (
              <div>
                {infoData.sns.instagram ? (
                  <Link href={infoData.sns.instagram}>{snsImages.instagram}</Link>
                ) : (
                  ''
                )}
                {infoData.sns.youtube ? (
                  <Link href={infoData.sns.youtube}>{snsImages.youtube}</Link>
                ) : (
                  ''
                )}
                {infoData.sns.facebook ? (
                  <Link href={infoData.sns.facebook}>{snsImages.facebook}</Link>
                ) : (
                  ''
                )}
              </div>
            )}
            <br />
            <p>SNS</p>
          </span>
          <span></span>
          <span>
            <h4>{infoData.birthDay ? infoData.birthDay : '-'}</h4>
            <br />
            <p>생일</p>
          </span>
        </div>
      </A.EtcInfo>
      <A.GrayDiv />
      <A.Note>
        <div>
          <h1>{id === 'myPage' ? '내 쪽지' : `${infoData.name}님의 쪽지`}</h1>
          <Link href="/archive/myPage">
            <p>자세히 보기 &gt;</p>
          </Link>
        </div>
        {id === 'myPage' ? (
          <p>친구들이 남긴 쪽지를 확인해 보세요 :)</p>
        ) : (
          <p>친구에게 하고 싶은 말을 쪽지에 남겨보세요 :)</p>
        )}
        <div>
          {guestBookTempList && id === 'myPage' ? (
            guestBookTempList.map((guestBook) => (
              <GuestBookBox
                info={{ name: '이름', nickname: '별명', lock: guestBook.id === '0' ? true : false }}
                size={{ width: '200rem', height: '220rem', line: '3' }}
                text={guestBook.text}
                date={guestBook.date}
                key={guestBook.id}
              >
                <>
                  <div>
                    <Image src={stickers[guestBook.sticker].quotationMark} alt="quotationMark" />
                  </div>
                  <div>
                    <Image src={stickers[guestBook.sticker].sticker} alt="sticker" />
                  </div>
                </>
              </GuestBookBox>
            ))
          ) : (
            <span>
              <h5>아직 작성된 쪽지가 없어요</h5>
              <p>친구에게 먼저 쪽지를 남겨보세요 :)</p>
            </span>
          )}
        </div>
      </A.Note>
    </A.ArchiveWrapper>
  );
};

export default Archive;
