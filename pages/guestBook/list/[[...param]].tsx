import React from 'react';
import L from '@components/GuestBook/List.styles';
import LogoHeader from '@components/Common/LogoHeader';

import { useRouter } from 'next/router';
import ListSection from './ListSection';
import { useGetSchoolGuestBook } from '@APIs/schoolGuestBook';
import { useMyInfo } from '@APIs/user';
import { useGetMyNotes, useGetNote } from '@APIs/note';

const List: React.FC = () => {
  const router = useRouter();
  const { data: me } = useMyInfo();
  const [id] = router.query.param ?? '';
  const { data: guestBookList, isLoading: guestBookListLoading } = useGetSchoolGuestBook(
    '' + me?.schoolId,
    {
      enabled: Boolean(id === 'mySchool' && me?.schoolId),
    },
  );

  const { data: myNoteList, isLoading: myNoteListLoading } = useGetMyNotes({
    enabled: Boolean(id === 'myPage' && me?.id),
  });

  const { data: noteList, isLoading: noteListLoading } = useGetNote('' + id, {
    enabled: Boolean(id !== 'myPage' && id !== 'mySchool'),
  });

  if (id === 'mySchool' && guestBookListLoading) return <></>;
  if (id === 'myPage' && myNoteListLoading) return <></>;
  if (id !== 'myPage' && id !== 'mySchool' && noteListLoading) return <></>;

  return (
    <>
      <L.GuestBookListWrapper>
        <LogoHeader headerIcons={true} />
        <div>
          <div>
            {id === 'mySchool' ? (
              <>
                {guestBookList?.length ? (
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
                <ListSection guestBookList={guestBookList} noteId={id} />
              </>
            ) : id === 'myPage' ? (
              <>
                {myNoteList?.length ? (
                  <>
                    {id === 'myPage' ? '내 ' : ''}쪽지가 <b>{myNoteList?.length}개</b> 있어요!
                  </>
                ) : (
                  <>
                    아직 작성된 쪽지가 없어요.
                    <br />
                    친구를 초대하고 부탁해 보세요!
                  </>
                )}
                <ListSection guestBookList={myNoteList} noteId={id} />
              </>
            ) : (
              <>
                {noteList?.length ? (
                  <>
                    {id === 'myPage' ? '내 ' : ''}쪽지가 <b>{noteList?.length}개</b> 있어요!
                  </>
                ) : (
                  <>
                    아직 작성된 쪽지가 없어요.
                    <br />
                    가장 먼저 쪽지를 남겨보세요!
                  </>
                )}
                <ListSection guestBookList={noteList} noteId={id} />
              </>
            )}
          </div>
        </div>
      </L.GuestBookListWrapper>
    </>
  );
};

export default List;
