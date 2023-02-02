import React, { useEffect, useState } from 'react';
import L from '@components/GuestBook/List.styles';
import LogoHeader from '@components/Common/LogoHeader';
import { guestBookTempList, IGuestBookList } from '@configs/bigContents';
import { useRouter } from 'next/router';
import ListSection from './ListSection';
import { useGetMySchoolGuestBooks } from '@APIs/schoolGuestBook';
const List: React.FC = () => {
  const router = useRouter();
  const [noteId, setNoteId] = useState('');
  const [id] = router.query.param ?? '';
  const { data: guestBookList, isLoading } = useGetMySchoolGuestBooks();

  useEffect(() => {
    if (id) setNoteId(id as string);
  }, [id]);

  return (
    <>
      <L.GuestBookListWrapper>
        <LogoHeader headerIcons={true} />
        <div>
          <div>
            {guestBookList?.length && !isLoading ? (
              <>
                {noteId === 'mySchool' ? (
                  <>
                    우리 학교 방명록이 <b>{guestBookList.length}개</b> 있어요!
                    <ListSection guestBookList={guestBookList} noteId={noteId} />
                  </>
                ) : (
                  <>
                    {noteId === 'myPage' ? '내 ' : ''}쪽지가 <b>{guestBookList.length}개</b> 있어요!
                    <ListSection guestBookList={guestBookList} noteId={noteId} />
                  </>
                )}
              </>
            ) : (
              <>
                <br />
                {noteId === 'mySchool' ? (
                  <>
                    아직 작성된 방명록이 없어요.
                    <br />
                    가장 먼저 우리 학교 방명록에 글을 남겨보세요!
                  </>
                ) : (
                  <>
                    아직 작성된 방명록이 없어요.
                    <br />
                    가장 먼저 방명록에 글을 남겨보세요!
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </L.GuestBookListWrapper>
    </>
  );
};

export default List;
