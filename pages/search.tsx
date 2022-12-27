import React from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';

import SearchPr from '@public/svgs/search-pr-icon.svg';
import SearchSchoolCard from '@components/Search/SearchSchoolCard';

import S from '@components/Search/Search.styles';

const Search: React.FC = () => {
  const router = useRouter();
  const [isSearch, onToggleSearch] = useToggle(false);

  const onClickCloseSearch = () => {
    router.replace('/signup/1', '/signup/1', { shallow: true });
  };

  const onSearchSchool = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.value) onToggleSearch(true);
    else onToggleSearch(false);
  };

  const onClickSelectSchool = (school: string) => () => {
    router.replace(`/signup/1?school=${school}`, '/signup/1', { shallow: true });
  };

  return (
    <S.SearchWrapper>
      <S.SearchInput
        allowClear
        bordered={false}
        prefix={<Image src={SearchPr} alt="search-pr-icon" />}
        suffix={<button onClick={onClickCloseSearch}>닫기</button>}
        onPressEnter={onSearchSchool}
      />
      {isSearch ? (
        [1, 2, 3, 4, 5].map((v) => (
          <SearchSchoolCard
            key={v}
            title="이매 초등학교"
            address="경기도 성남시 분당구"
            onClick={onClickSelectSchool('이매 초등학교')}
          />
        ))
      ) : (
        <h4>검색 결과가 없어요</h4>
      )}
    </S.SearchWrapper>
  );
};

export default Search;
