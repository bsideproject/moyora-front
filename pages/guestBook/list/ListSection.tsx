import React, { useState } from 'react';
import L from '@components/GuestBook/List.styles';
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
import { IGuestBookList } from '@configs/bigContents';
import LockPrimary from '@public/svgs/icon-note-lock-primary.svg';
import floatButtonWrite from '@public/svgs/float-button-write.svg';
import Write from '@public/svgs/icon-write.svg';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';
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

interface IProps {
  guestBookList?: IGuestBookList[];
  noteId: string;
}
const ListSection: React.FC<IProps> = ({ guestBookList, noteId }) => {
  const router = useRouter();
  const [alert, onToggleAlert] = useToggle(false);
  const [isSelect, onToggle] = useToggle(false);
  const [selectedBox, setSelectedBox] = useState<IGuestBookList | null>(null);
  const onClickRoute = () =>
    noteId
      ? router.push(`/guestBook/write/${noteId}`, '', { shallow: true })
      : router.push('/guestBook/write/', '', { shallow: true });
  const onClickGuestBookBox = (id: string) => () => {
    const selBox = guestBookList ? guestBookList?.filter((guestBook) => guestBook.id === id) : null;
    if (selBox) {
      if (selBox[0].lock && noteId != 'myPage') {
        onToggleAlert();
      } else {
        setSelectedBox(selBox[0]);
        onToggle();
      }
    }
  };
  return (
    <>
      <L.ListSection>
        {guestBookList
          ? guestBookList.map((guestBook) => (
              <GuestBookBox
                size={{ width: '171rem', height: '218rem', line: '4' }}
                text={guestBook.text}
                date={guestBook.date}
                key={guestBook.id}
                onClick={onClickGuestBookBox(guestBook.id)}
                info={
                  noteId
                    ? {
                        id: noteId,
                        name: '이름',
                        nickname: '별명',
                        lock: guestBook.lock,
                      }
                    : { id: noteId, name: '' }
                }
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
          {noteId == 'myPage' ? (
            ''
          ) : (
            <L.FloatingButton
              shape="circle"
              type="primary"
              onClick={onClickRoute}
              icon={<Image src={floatButtonWrite} alt="floatButtonWirte" />}
            />
          )}
        </div>
        <L.GuestBookDrawer
          title={noteId ? '쪽지 보기' : '방명록 보기'}
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
              info={
                noteId
                  ? {
                      id: noteId,
                      name: '이름',
                      nickname: '별명',
                      lock: selectedBox.id == '0' ? true : false,
                    }
                  : { id: noteId, name: '' }
              }
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
          {noteId ? (
            noteId === 'myPage' ? (
              <L.BottomButton type="primary" onClick={onToggle}>
                닫기
              </L.BottomButton>
            ) : (
              <L.BottomButton type="primary" onClick={onClickRoute}>
                <Image src={Write} alt="" /> &nbsp;나도 쪽지 남기기
              </L.BottomButton>
            )
          ) : (
            <L.BottomButton type="primary" onClick={onClickRoute}>
              <Image src={Write} alt="" /> &nbsp;나도 방명록 쓰러가기
            </L.BottomButton>
          )}
        </L.GuestBookDrawer>
      </L.ListSection>
      <L.AlertModal
        closable={false}
        maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
        open={alert}
        onCancel={onToggleAlert}
        footer={[]}
        centered
      >
        <div>
          <Image src={LockPrimary} alt="" width={16} />
        </div>
        <h2>비공개 쪽지에요</h2>
        <L.ModalButton type="primary" onClick={onToggleAlert}>
          <p>닫기</p>
        </L.ModalButton>
      </L.AlertModal>
    </>
  );
};

export default ListSection;
