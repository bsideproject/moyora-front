import React, { useMemo, useState } from 'react';
import L from '@components/GuestBook/List.styles';
import Image from 'next/image';
import GuestBookBox from '@components/Common/GuestBookBox';
import LockPrimary from '@public/svgs/icon-note-lock-primary.svg';
import floatButtonWrite from '@public/svgs/float-button-write.svg';
import Write from '@public/svgs/icon-write.svg';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';
import { ISchoolGuestBooks } from '@APIs/schoolGuestBook';
import stickers from '@configs/stickers';
import { INotes } from '@APIs/note';

interface IProps {
  guestBookList?: ISchoolGuestBooks[] | INotes[];
  noteId?: string;
}
const ListSection: React.FC<IProps> = ({ guestBookList: list, noteId }) => {
  const router = useRouter();
  const [alert, onToggleAlert] = useToggle(false);
  const [isSelect, onToggle] = useToggle(false);
  const [selectedBox, setSelectedBox] = useState<ISchoolGuestBooks | INotes | null>(null);

  const guestBookList = useMemo(
    () => (noteId === 'mySchool' ? (list as ISchoolGuestBooks[]) : []),
    [list, noteId],
  );

  const noteList = useMemo(() => (noteId !== 'mySchool' ? (list as INotes[]) : []), [list, noteId]);

  const onClickRoute = () => router.push(`/guestBook/write/${noteId}`, '', { shallow: true });
  const onClickGuestBookBox = (id: string) => () => {
    let selBox = null;
    if (noteId === 'mySchool')
      selBox = guestBookList?.length
        ? guestBookList.filter((guestBook) => guestBook?.schoolGuestBookId === +id)
        : null;
    else selBox = noteList?.length ? noteList.filter((note) => note?.noteId === +id) : null;

    if (
      selBox?.length &&
      !(selBox[0] as INotes)?.isPublic &&
      noteId != 'myPage' &&
      noteId != 'mySchool'
    )
      onToggleAlert();
    else {
      setSelectedBox(selBox?.[0] || null);
      onToggle();
    }
  };
  return (
    <>
      <L.ListSection>
        {noteId === 'mySchool'
          ? guestBookList.map((guestBook) => (
              <GuestBookBox
                size={{ width: '171px', height: '218px', line: '4' }}
                text={guestBook.content}
                date={guestBook.createdDate}
                key={guestBook?.schoolGuestBookId}
                onClick={onClickGuestBookBox('' + guestBook?.schoolGuestBookId)}
                info={{ id: '' + guestBook?.accountId }}
              >
                <>
                  <div>
                    <Image
                      src={stickers[guestBook.sticker || '1']?.quotationMark}
                      alt="quotationMark"
                    />
                  </div>
                  <div>
                    <Image src={stickers[guestBook.sticker || '1']?.sticker} alt="sticker" />
                  </div>
                </>
              </GuestBookBox>
            ))
          : noteList?.map((note) => (
              <GuestBookBox
                size={{ width: '171px', height: '218px', line: '4' }}
                text={note.content}
                date={note.createdDate}
                key={note?.noteId}
                onClick={onClickGuestBookBox('' + note?.noteId)}
                info={{
                  id: '' + note?.friendId,
                  name: note?.username,
                  nickname: note?.nickname,
                  lock: !note?.isPublic,
                }}
              >
                <>
                  <div>
                    <Image
                      src={stickers[note?.sticker || '1']?.quotationMark}
                      alt="quotationMark"
                    />
                  </div>
                  <div>
                    <Image src={stickers[note?.sticker || '1']?.sticker} alt="sticker" />
                  </div>
                </>
              </GuestBookBox>
            ))}
        <div>
          {noteId !== 'myPage' && (
            <L.FloatingButton
              shape="circle"
              type="primary"
              onClick={onClickRoute}
              icon={<Image src={floatButtonWrite} alt="floatButtonWirte" />}
            />
          )}
        </div>
        <L.GuestBookDrawer
          title={noteId === 'mySchool' ? '방명록 보기' : '쪽지 보기'}
          placement="bottom"
          height="80%"
          maskStyle={{ height: '100vh', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          onClose={onToggle}
          open={isSelect}
          getContainer={false}
        >
          {selectedBox && (
            <GuestBookBox
              size={{ width: '350px', height: '368px', line: false }}
              text={selectedBox.content}
              date={selectedBox.createdDate}
              info={{
                id:
                  noteId === 'mySchool'
                    ? '' + (selectedBox as ISchoolGuestBooks)?.accountId
                    : '' + (selectedBox as INotes)?.friendId,
              }}
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
          )}
          {noteId === 'mySchool' ? (
            <L.BottomButton type="primary" onClick={onClickRoute}>
              <Image src={Write} alt="" /> &nbsp;나도 방명록 쓰러가기
            </L.BottomButton>
          ) : noteId === 'myPage' ? (
            <L.BottomButton type="primary" onClick={onToggle}>
              닫기
            </L.BottomButton>
          ) : (
            <L.BottomButton type="primary" onClick={onClickRoute}>
              <Image src={Write} alt="" /> &nbsp;나도 쪽지 남기기
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
