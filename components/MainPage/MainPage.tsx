import React, { useMemo } from 'react';
import M from '@components/MainPage/MainPage.styles';
import LogoHeader from '@components/Common/LogoHeader';
import Image from 'next/image';
import { Col, Row } from 'antd';
import GuestBookBox from '@components/Common/GuestBookBox';
import Link from 'next/link';
import Crown1 from '@public/svgs/crown-1.svg';
import Crown2 from '@public/svgs/crown-2.svg';
import Crown3 from '@public/svgs/crown-3.svg';

import { useMyInfo } from '@APIs/user';
import { useSearchSchool } from '@APIs/search';
import { useGetJob, useGetMbti, useGetOurCounts, useGetRegion } from '@APIs/statistics';
import { useGetSchoolGuestBook } from '@APIs/schoolGuestBook';
import stickers from '@configs/stickers';
import useComma from '@utils/useComma';

interface IOurSchoolList {
  id: string;
  category: string;
  value: string | null;
  crown: string;
}

const MainPage: React.FC = () => {
  const { data: me } = useMyInfo();
  const { data: school } = useSearchSchool('' + me?.schoolId);
  const { data: mbti } = useGetMbti('' + me?.schoolId);
  const { data: region } = useGetRegion('' + me?.schoolId);
  const { data: job } = useGetJob('' + me?.schoolId);
  const { data: guestBookList } = useGetSchoolGuestBook('' + me?.schoolId);
  // const guestBookList = undefined;
  const schoolCount = useGetOurCounts('' + me?.schoolId);
  const ourSchoolFirstList: IOurSchoolList[] = useMemo(() => {
    if (!job?.data.length && !region?.data.length) return [];
    return [
      { id: '0', category: '직업', value: job?.data?.[0]?.title ?? '', crown: Crown1 },
      { id: '1', category: '지역', value: region?.data?.[0]?.title ?? '', crown: Crown2 },
      { id: '2', category: 'MBTI', value: mbti?.data?.[0]?.title ?? '', crown: Crown3 },
    ];
  }, [job?.data, mbti?.data, region?.data]);
  return (
    <M.MainPageWrapper>
      <LogoHeader headerIcons={true} />
      <M.mySchoolSection>
        <h2>{school?.schoolName}</h2> <p>{school?.simpleAddress}</p>
        <div>
          <div>
            <h1>{useComma(schoolCount?.[1]?.data ?? 0)}명</h1>
            <p>가입한 동창</p>
          </div>
          <div></div>
          <div>
            <h1>{useComma(schoolCount?.[0]?.data ?? 0)}개</h1>
            <p>방명록 수</p>
          </div>
        </div>
      </M.mySchoolSection>
      <M.ourSchoolStatisticsSection>
        <M.contentTitle>
          <h1>우리 학교 통계</h1>
          <Link href="/statistics">
            <p>자세히 보기 &gt;</p>
          </Link>
        </M.contentTitle>
        <M.content>
          {ourSchoolFirstList?.length ? (
            ourSchoolFirstList.map((data) => (
              <div key={data.id}>
                <Row>
                  <Col span={4}>
                    <p>{data.category}</p>
                  </Col>
                  <Col span={5}>
                    <section>
                      <Image src={data.crown} alt="crown" />
                      <h3>1위</h3>
                    </section>
                  </Col>
                  <Col span={16.5}>
                    <h2>
                      {data.value
                        ? data.value
                        : data.category === 'MBTI'
                        ? '아직 MBTI 정보가 없어요'
                        : null}
                    </h2>
                  </Col>
                </Row>
              </div>
            ))
          ) : (
            <p>데이터가 없습니다.</p>
          )}
        </M.content>
      </M.ourSchoolStatisticsSection>
      <M.ourSchoolGuestBookSection>
        <M.contentTitle>
          <h1>우리 학교 방명록</h1>
          {guestBookList ? (
            <Link href="/guestBook/list/mySchool">
              <p>자세히 보기 &gt;</p>
            </Link>
          ) : (
            ''
          )}
        </M.contentTitle>
        <M.GuestBook>
          {guestBookList ? (
            guestBookList.map((guestBook) => (
              <GuestBookBox
                key={guestBook.schoolGuestBookId}
                size={{ width: '200px', height: '200px', line: '3' }}
                text={guestBook.content}
                date={guestBook.modifiedDate}
              >
                <>
                  <div>
                    <Image
                      src={stickers?.[guestBook?.sticker ?? '1']?.quotationMark}
                      alt="quotationMark"
                    />
                  </div>
                  <div>
                    <Image src={stickers?.[guestBook?.sticker ?? '1']?.sticker} alt="sticker" />
                  </div>
                </>
              </GuestBookBox>
            ))
          ) : (
            <>
              <span className="empty">
                <h5>아직 작성된 방명록이 없어요</h5>
                <p>학교 방명록을 입력해 보세요!</p>
                <Link href={`/guestBook/write/mySchool`}>
                  <h2>+ 방명록 작성하기</h2>
                </Link>
              </span>
            </>
          )}
        </M.GuestBook>
      </M.ourSchoolGuestBookSection>
    </M.MainPageWrapper>
  );
};

export default MainPage;
