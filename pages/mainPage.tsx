import React, { useEffect, useState } from 'react';
import M from '@components/MainPage/MainPage.styles';
import LogoHeader from '@components/Common/LogoHeader';
import Image from 'next/image';
import { Col, Row } from 'antd';
import GuestBookBox from '@components/Common/GuestBookBox';

import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';

import Crown1 from '@public/svgs/crown-1.svg';
import Crown2 from '@public/svgs/crown-2.svg';
import Crown3 from '@public/svgs/crown-3.svg';

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
import { guestBookTempList, IGuestBookList } from '@configs/bigContents';

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

const MainPage: React.FC = () => {
  interface IOurSchoolList {
    id: string;
    category: string;
    value: string | null;
    crown: string;
  }
  const [ourSchoolFirstList, setOurSchoolFirstList] = useState<IOurSchoolList[] | null>(null);
  const list = [
    { id: '0', category: '직업', value: '마케팅/광고/홍보', crown: Crown1 },
    { id: '1', category: '지역', value: '서울특별시 동대문구', crown: Crown2 },
    { id: '2', category: 'MBTI', value: 'ISTJ', crown: Crown3 },
  ];
  useEffect(() => {
    setOurSchoolFirstList(list);
  }, []);

  const [guestBookList, setGuestBookList] = useState<IGuestBookList[] | null>(null);

  useEffect(() => {
    setGuestBookList(guestBookTempList);
  }, []);

  return (
    <M.MainPageWrapper>
      <LogoHeader headerIcons={true} />
      <M.mySchoolSection>
        <h2>모여라 초등학교</h2> <p>경기도 성남시</p>
        <div>
          <div>
            <h1>123명</h1>
            <p>가입한 동창</p>
          </div>
          <div></div>
          <div>
            <h1>46개</h1>
            <p>방명록 수</p>
          </div>
        </div>
      </M.mySchoolSection>
      <M.ourSchoolStatisticsSection>
        <M.contentTitle>
          <h1>우리 학교 통계</h1>
          <Link href="/mainPage">
            <p>자세히 보기 &gt;</p>
          </Link>
        </M.contentTitle>
        <M.content>
          {ourSchoolFirstList ? (
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
          <Link href="/guestBook/list">
            <p>자세히 보기 &gt;</p>
          </Link>
        </M.contentTitle>
        {guestBookList ? (
          <Swiper spaceBetween={8} preventClicksPropagation={true} slidesPerView={(350 - 8) / 200}>
            {guestBookList
              ? guestBookList.map((guestBook) => (
                  <SwiperSlide key={guestBook.id}>
                    <GuestBookBox
                      size={{ width: '200rem', height: '200rem', line: '3' }}
                      text={guestBook.text}
                      date={guestBook.date}
                    >
                      <>
                        <div>
                          <Image
                            src={stickers[guestBook.sticker].quotationMark}
                            alt="quotationMark"
                          />
                        </div>
                        <div>
                          <Image src={stickers[guestBook.sticker].sticker} alt="sticker" />
                        </div>
                      </>
                    </GuestBookBox>
                  </SwiperSlide>
                ))
              : ''}
          </Swiper>
        ) : (
          <div>
            <div>
              <h4>아직 작성된 방명록이 없어요</h4>
              <br />
              <p>학교 방명록을 입력해 보세요!</p>
            </div>
          </div>
        )}
      </M.ourSchoolGuestBookSection>
    </M.MainPageWrapper>
  );
};

export default MainPage;
