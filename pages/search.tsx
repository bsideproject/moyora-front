import React from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';

import SearchPr from '@public/svgs/search-pr-icon.svg';

import SearchSchoolCard from '@components/Search/SearchSchoolCard';

import S from '@components/Search/Search.styles';
import SearchFriendCard from '@components/Search/SearchFriendCard';

const Search: React.FC = () => {
  const router = useRouter();
  const isSchool = router.query?.isSchool as string | undefined;
  const [isSearch, onToggleSearch] = useToggle(false);

  const onClickCloseSearch = () => {
    const href = isSchool ? '/signup/1' : '/';
    router.replace(href, '', { shallow: true });
  };

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.value) onToggleSearch(true);
    else onToggleSearch(false);
  };

  const onClickSelectCard = (value: string) => () => {
    const href = isSchool ? `/signup/1?school=${value}` : `/mainPage?friend=${value}`;
    const as = isSchool ? '/signup/1' : '/mainPage';
    router.replace(href, as, { shallow: true });
  };

  return (
    <S.SearchWrapper>
      <S.SearchInput
        allowClear
        bordered={false}
        prefix={<Image src={SearchPr} alt="search-pr-icon" />}
        suffix={<button onClick={onClickCloseSearch}>닫기</button>}
        onPressEnter={onSearch}
      />

      {isSearch ? (
        [1, 2, 3, 4, 5].map((v) =>
          isSchool ? (
            <SearchSchoolCard
              key={v}
              title="이매 초등학교"
              address="경기도 성남시 분당구"
              onClick={onClickSelectCard('이매 초등학교')}
            />
          ) : (
            <SearchFriendCard
              key={v}
              name="이서연"
              school="OO초등학교"
              onClick={onClickSelectCard('이서연')}
            />
          ),
        )
      ) : (
        <h4>검색 결과가 없어요</h4>
      )}
    </S.SearchWrapper>
  );
};

export default Search;
