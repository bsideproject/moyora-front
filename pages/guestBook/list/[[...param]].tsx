import React from 'react';
import L from '@components/GuestBook/List.styles';
import LogoHeader from '@components/Common/LogoHeader';

import { useRouter } from 'next/router';
import ListSection from './ListSection';
import { useGetSchoolGuestBook } from '@APIs/schoolGuestBook';
import { useGetClassMate, useMyInfo } from '@APIs/user';
import { useGetMyNotes, useGetNote } from '@APIs/note';
const List: React.FC = () => {
  const router = useRouter();
  const { data: me } = useMyInfo();
  const [id] = router.query.param ?? '';
  const { data: mate } = useGetClassMate(id, {
    enabled: Boolean(id && id !== 'mySchool' && id !== 'myPage'),
  });
  const { data: guestBookList, isLoading: guestBookListLoading } = useGetSchoolGuestBook(
    '' + (me?.schoolId ?? 0),
    {
      enabled: Boolean(id && me?.schoolId && id === 'mySchool' && me?.schoolId),
    },
  );

  const { data: myNoteList, isLoading: myNoteListLoading } = useGetMyNotes({
    enabled: Boolean(id && me?.id && id === 'myPage' && me?.id),
  });
  const { data: noteList, isLoading: noteListLoading } = useGetNote(id ?? '', {
    enabled: Boolean(id && id !== 'myPage' && id !== 'mySchool'),
  });

  if (id === 'mySchool' && guestBookListLoading) return <></>;
  if (id === 'myPage' && myNoteListLoading) return <></>;
  if (id !== 'myPage' && id !== 'mySchool' && noteListLoading) return <></>;

  return (
    <>
      <L.GuestBookListWrapper>
        <LogoHeader headerIcons={true} />
        {id === 'mySchool' ? (
          <>
            {guestBookList?.length ? (
              <div>
                우리 학교 방명록이 <b>{guestBookList.length}개</b> 있어요!
              </div>
            ) : (
              <div className="empty">
                아직 작성된 방명록이 없어요.
                <br />
                첫번째로 학교 방명록을 작성해 보세요!
              </div>
            )}
            <ListSection guestBookList={guestBookList} noteId={id} />
          </>
        ) : id === 'myPage' ? (
          <>
            {myNoteList?.length ? (
              <div>
                {id === 'myPage' ? '내 ' : ''}쪽지가 <b>{myNoteList?.length}개</b> 있어요!
              </div>
            ) : (
              <div className="empty">
                아직 작성된 쪽지가 없어요.
                <br />
                친구에게 먼저 쪽지를 남겨보세요 :)
              </div>
            )}
            <ListSection guestBookList={myNoteList} noteId={id} />
          </>
        ) : (
          <>
            {noteList?.length ? (
              <div>
                {id === 'myPage' ? '내 ' : `${mate?.username}의 `}쪽지가 <b>{noteList?.length}개</b>{' '}
                있어요!
              </div>
            ) : (
              <div className="empty">
                아직 작성된 쪽지가 없어요.
                <br />
                가장 먼저 쪽지를 남겨보세요!
              </div>
            )}
            <ListSection guestBookList={noteList} noteId={id} />
          </>
        )}
      </L.GuestBookListWrapper>
    </>
  );
};

export default List;
