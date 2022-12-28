import React, { useEffect, useState } from 'react';
import L from '@components/GuestBook/List.styles';
import LogoHeader from '@components/Common/LogoHeader';
import Image from 'next/image';
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
import { guestBookTempList, IGuestBookList } from '@configs/bigContents';

import floatButtonWrite from '@public/svgs/float-button-write.svg';
import Write from '@public/svgs/icon-write.svg';
import { useToggle } from 'react-use';

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

const List: React.FC = () => {
  const [guestBookList, setGuestBookList] = useState<IGuestBookList[] | null>(null);
  useEffect(() => {
    setGuestBookList(guestBookTempList);
  }, []);
  const [isSelect, onToggle] = useToggle(false);
  const [selectedBox, setSelectedBox] = useState<IGuestBookList | null>(null);
  const onClickGuestBookBox = (id: string) => () => {
    const selBox = guestBookList ? guestBookList?.filter((guestBook) => guestBook.id === id) : null;
    if (selBox) {
      setSelectedBox(selBox[0]);
      onToggle();
    }
  };
  return (
    <>
      <L.GuestBookListWrapper>
        <LogoHeader headerIcons={true} />
        <div>
          <p>
            {guestBookList ? (
              <>
                우리 학교 방명록이 <b>{guestBookList.length}개</b> 있어요!
              </>
            ) : (
              <>
                아직 작성된 방명록이 없어요.
                <br />
                가장 먼저 우리 학교 방명록에 글을 남겨보세요!
              </>
            )}
          </p>
        </div>
        <L.ListSection>
          {guestBookList
            ? guestBookList.map((guestBook) => (
                <GuestBookBox
                  size={{ width: '171rem', height: '218rem', line: '4' }}
                  text={guestBook.text}
                  date={guestBook.date}
                  key={guestBook.id}
                  onClick={onClickGuestBookBox(guestBook.id)}
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
            : ''}

          <div>
            <L.FloatingButton
              shape="circle"
              type="primary"
              icon={<Image src={floatButtonWrite} alt="floatButtonWirte" />}
            />
          </div>
          <L.GuestBookDrawer
            title="방명록 보기"
            placement="bottom"
            height="600rem"
            maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
            onClose={onToggle}
            open={isSelect}
          >
            {selectedBox ? (
              <GuestBookBox
                size={{ width: '350rem', height: '368rem', line: false }}
                text={selectedBox.text}
                date={selectedBox.date}
              >
                <>
                  <div>
                    <Image src={stickers[selectedBox.sticker].quotationMark} alt="quotationMark" />
                  </div>
                  <div>
                    <Image src={stickers[selectedBox.sticker].sticker} alt="sticker" />
                  </div>
                </>
              </GuestBookBox>
            ) : (
              ''
            )}
            <L.writeButton type="primary">
              <Image src={Write} alt="" /> &nbsp;나도 방명록 쓰러가기
            </L.writeButton>
          </L.GuestBookDrawer>
        </L.ListSection>
      </L.GuestBookListWrapper>
    </>
  );
};

export default List;
