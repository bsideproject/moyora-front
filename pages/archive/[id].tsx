import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import A from '@components/Archive/archive.styles';
import L from '@components/GuestBook/List.styles';
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
import { useGetClassMate, useMyInfo } from '@APIs/user';
import { useGetMyNotes, useGetNote } from '@APIs/note';
import stickers from '@configs/stickers';
import floatButtonWrite from '@public/svgs/float-button-write.svg';
const Archive: React.FC = () => {
  const router = useRouter();
  const id = (router.query?.id ?? 'myPage') as string;
  const { data: myInfoData } = useMyInfo({ enabled: id === 'myPage' });
  const { data: myNotes } = useGetMyNotes({ enabled: id === 'myPage' });
  const { data: mateInfoData } = useGetClassMate(id, { enabled: id !== 'myPage' });
  const { data: mateNotes } = useGetNote(id, { enabled: id !== 'myPage' });
  const notes = useMemo(() => (id === 'myPage' ? myNotes : mateNotes), [id, myNotes, mateNotes]);

  const infoData = useMemo(
    () => (id === 'myPage' ? myInfoData : mateInfoData),
    [id, mateInfoData, myInfoData],
  );

  const snsImages = {
    instagram: <Image src={Instagram} alt="instagram" />,
    youtube: <Image src={Youtube} alt="youtube" />,
    facebook: <Image src={Facebook} alt="facebook" />,
  };
  const onClickRoute = () => {
    router.replace(`/guestBook/write/${id}`, '', { shallow: true });
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
                <h1>{infoData?.name || infoData?.username}</h1>
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
          {(infoData?.instagram || infoData?.youtube || infoData?.facebook) == null ? (
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
          <h1>{id === 'myPage' ? '내 쪽지' : `${infoData?.name || infoData?.username}의 쪽지`}</h1>
          {notes?.length ? (
            <button onClick={onClickNote}>
              <p>자세히 보기 &gt;</p>
            </button>
          ) : (
            ''
          )}
        </div>
        {id === 'myPage' ? (
          <p>친구들이 남긴 쪽지를 확인해 보세요 :)</p>
        ) : (
          <p>친구에게 하고 싶은 말을 쪽지에 남겨보세요 :)</p>
        )}
        <div>
          {notes?.length ? (
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
                    <Image src={stickers[guestBook?.sticker]?.quotationMark} alt="quotationMark" />
                  </div>
                  <div>
                    <Image src={stickers[guestBook?.sticker]?.sticker} alt="sticker" />
                  </div>
                </>
              </GuestBookBox>
            ))
          ) : (
            <>
              {id === 'myPage' ? (
                <span>
                  <h5>아직 작성된 쪽지가 없어요</h5>
                  <p>친구에게 먼저 쪽지를 남겨보세요 :)</p>
                </span>
              ) : (
                <>
                  <span>
                    <h5>아직 작성된 쪽지가 없어요</h5>
                    <p>글쓰기 버튼을 눌러 친구에게 쪽지를 남겨보세요 :)</p>
                  </span>
                  <L.FloatingButton
                    shape="circle"
                    type="primary"
                    onClick={onClickRoute}
                    icon={<Image src={floatButtonWrite} alt="floatButtonWirte" />}
                  />
                </>
              )}
            </>
          )}
        </div>
      </A.Note>
    </A.ArchiveWrapper>
  );
};

export default Archive;
