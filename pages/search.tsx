import React, { useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ISchool, useSearchSchools } from '@APIs/search';

import useInput from '@utils/useInput';

import SearchSchoolCard from '@components/Search/SearchSchoolCard';
import SearchFriendCard from '@components/Search/SearchFriendCard';

import SearchPr from '@public/svgs/search-pr-icon.svg';

import S from '@components/Search/Search.styles';

const Search: React.FC = () => {
  const router = useRouter();
  const isSchool = router.query?.isSchool as string | undefined;
  const [searchText, onChangeSearchText] = useInput('');
  const { data, mutate } = useSearchSchools();

  const searchData = useMemo(() => (isSchool ? data : []), [isSchool, data]);

  const onClickCloseSearch = () => {
    const href = isSchool ?? '/friends/list';
    router.replace(href, '', { shallow: true });
  };

  const onSearch = () => {
    mutate(searchText);
  };

  const onClickSelectCard = (value: ISchool) => () => {
    const href = isSchool
      ? `${isSchool}?schoolName=${value?.schoolName}&schoolCode=${value?.schoolCode}`
      : `/mainPage?friend=${value}`;
    const as = isSchool ? `${isSchool}` : '/mainPage';
    router.replace(href, as, { shallow: true });
  };

  return (
    <S.SearchWrapper>
      <S.SearchInput
        allowClear
        bordered={false}
        prefix={<Image src={SearchPr} alt="search-pr-icon" />}
        suffix={<button onClick={onClickCloseSearch}>닫기</button>}
        value={searchText}
        onChange={onChangeSearchText}
        onPressEnter={onSearch}
        placeholder={!isSchool ? '찾고싶은 동창 이름을 검색하세요.' : '학교를 검색하세요'}
      />

      {searchData?.length ? (
        searchData.map((v) =>
          isSchool ? (
            <SearchSchoolCard
              key={v.id}
              title={v.schoolName}
              address={v.address}
              onClick={onClickSelectCard(v)}
            />
          ) : (
            <SearchFriendCard
              key={v.schoolCode}
              name="이서연"
              school="OO초등학교"
              onClick={onClickSelectCard(v)}
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
