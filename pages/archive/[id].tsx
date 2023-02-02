import { useRouter } from 'next/router';
import React from 'react';
import A from '@components/Archive/archive.styles';
import LogoHeader from '@components/Common/LogoHeader';
import Image from 'next/image';
import ProfileImage from '@components/Common/ProfileImage';
import Facebook from '@public/svgs/icon-sns-facebook.svg';
import Instagram from '@public/svgs/icon-sns-instagram.svg';
import Youtube from '@public/svgs/icon-sns-youtube.svg';
import JobCategory from '@public/svgs/icon-info-jobCategory.svg';
import Region from '@public/svgs/icon-info-region.svg';
import Link from 'next/link';
import GuestBookBox from '@components/Common/GuestBookBox';
import { useMyInfo } from '@APIs/user';
import { useGetMyNotes } from '@APIs/note';
import stickers from '@configs/stickers';

const Archive: React.FC = () => {
  const router = useRouter();
  const id = (router.query?.id ?? 'myPage') as string;
  const { data: infoData } = useMyInfo({ enabled: id === 'myPage' });
  const { data: notes } = useGetMyNotes({ enabled: id === 'myPage' });

  const snsImages = {
    instagram: <Image src={Instagram} alt="instagram" />,
    youtube: <Image src={Youtube} alt="youtube" />,
    facebook: <Image src={Facebook} alt="facebook" />,
  };

  const onClickNote = () => router.push(`/guestBook/list/${id}`, '', { shallow: true });
  return (
    <A.ArchiveWrapper>
      <A.PrimaryBackgroundSection>
        <LogoHeader backgroundPrimary headerIcons />
        <A.Info>
          <div>
            <span>
              <ProfileImage
                size="medium"
                url={infoData?.profile?.startsWith('http') ? infoData?.profile : ''}
              />
            </span>
            <span>
              <div>
                <h1>{infoData?.name}</h1>
                <h3>{infoData?.nickname}</h3>
              </div>
              <h3>{infoData?.schoolName}</h3>
            </span>
          </div>
          <div>
            <span>
              <Image src={JobCategory} alt="jobCategory" />
              <p>직업분야</p>
            </span>
            {infoData?.job ? (
              <div>
                <h2>{infoData?.jobCategory}</h2>
                <p>|</p>
                <h2>{infoData?.job}</h2>
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
            <h2>{infoData?.residence || '비공개'}</h2>
          </div>
        </A.Info>
      </A.PrimaryBackgroundSection>
      <A.EtcInfo>
        <div>
          <h4>{infoData?.mbti ? infoData?.mbti : '-'}</h4>
          <p>MBTI</p>
        </div>
        <span></span>
        <div>
          {(infoData?.instagram || infoData?.youtube || infoData?.facebook) === '' ? (
            <h4>-</h4>
          ) : (
            <div>
              {infoData?.instagram ? (
                <Link href={infoData?.instagram}>{snsImages.instagram}</Link>
              ) : (
                ''
              )}
              {infoData?.youtube ? <Link href={infoData?.youtube}>{snsImages.youtube}</Link> : ''}
              {infoData?.facebook ? (
                <Link href={infoData?.facebook}>{snsImages.facebook}</Link>
              ) : (
                ''
              )}
            </div>
          )}
          <p>SNS</p>
        </div>
        <span></span>
        <div>
          <h4>{infoData?.birthDate ? infoData?.birthDate : '-'}</h4>
          <p>생일</p>
        </div>
      </A.EtcInfo>
      <A.GrayDiv />
      <A.Note>
        <div>
          <h1>{id === 'myPage' ? '내 쪽지' : `${infoData?.name}님의 쪽지`}</h1>
          <button onClick={onClickNote}>
            <p>자세히 보기 &gt;</p>
          </button>
        </div>
        {id === 'myPage' ? (
          <p>친구들이 남긴 쪽지를 확인해 보세요 :)</p>
        ) : (
          <p>친구에게 하고 싶은 말을 쪽지에 남겨보세요 :)</p>
        )}
        <div>
          {notes?.length && id === 'myPage' ? (
            notes?.map((guestBook) => (
              <GuestBookBox
                info={{
                  id: id,
                  name: guestBook?.username,
                  nickname: guestBook?.nickname,
                  lock: guestBook?.isPublic,
                }}
                size={{ width: '200px', height: '220px', line: '3' }}
                text={guestBook?.content}
                date={guestBook?.createdDate}
                key={guestBook?.noteId}
              >
                <>
                  <div>
                    <Image src={stickers[guestBook?.sticker].quotationMark} alt="quotationMark" />
                  </div>
                  <div>
                    <Image src={stickers[guestBook?.sticker].sticker} alt="sticker" />
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
