import React from 'react';
import F from '@components/Friends/List.styles';
import LogoHeader from '@components/Common/LogoHeader';
import Image from 'next/image';
import SearchPr from '@public/svgs/search-pr-icon.svg';
import { useRouter } from 'next/router';
import ProfileImage from '@components/Common/ProfileImage';
import { useGetClassMates } from '@APIs/user';

const List: React.FC = () => {
  const router = useRouter();
  const { data: friendsData } = useGetClassMates();

  const onClickSearchFriends = () => {
    router.push('/search', '', { shallow: true });
  };
  const onClickRouter = (id: number) => () => {
    router.push(`/archive/${id}`);
  };
  return (
    <F.FriendsListWrapper>
      <LogoHeader headerIcons={true} />
      <div>
        <h1>동창 목록</h1>
        <div onClick={onClickSearchFriends}>
          <Image src={SearchPr} alt="search-pr-icon" />
          <h2>동창 찾기</h2>
        </div>
      </div>
      <F.FriendsList>
        {friendsData?.length ? (
          friendsData.map((friend) => (
            <div key={friend.id} onClick={onClickRouter(friend?.id)}>
              <ProfileImage
                size="small"
                url={friend?.profile?.startsWith('http') ? friend.profile : ''}
              />
              <div>
                <h3>
                  {friend.username}
                  {friend.nickname ? ` (${friend.nickname})` : ''}
                </h3>
                <p>{friend.schoolName}</p>
              </div>
            </div>
          ))
        ) : (
          <h4>
            아직 우리 학교에 가입한 동창이 없어요
            <br />
            친구들이 모이기를 기다려주세요!
          </h4>
        )}
      </F.FriendsList>
    </F.FriendsListWrapper>
  );
};

export default List;
