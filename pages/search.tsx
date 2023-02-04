import React, { useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ISchool, useSearchSchools } from '@APIs/search';

import useInput from '@utils/useInput';

import SearchSchoolCard from '@components/Search/SearchSchoolCard';
import SearchFriendCard from '@components/Search/SearchFriendCard';

import SearchPr from '@public/svgs/search-pr-icon.svg';

import S from '@components/Search/Search.styles';
import { IUsers, useSearchClassMates } from '@APIs/user';
import { useToggle } from 'react-use';

const Search: React.FC = () => {
  const router = useRouter();
  const isSchool = router.query?.isSchool as string | undefined;
  const [searchText, onChangeSearchText] = useInput('');
  const { data, mutate } = useSearchSchools();
  const { data: mates, mutate: mateMutate } = useSearchClassMates();
  const [first, onToggleFirst] = useToggle(isSchool ? true : false);

  const searchData = useMemo(() => (isSchool ? data : mates), [isSchool, data, mates]);

  const onClickCloseSearch = () => {
    const href = isSchool ?? '/friends/list';
    router.replace(href, '', { shallow: true });
  };

  const onSearch = () => {
    onToggleFirst(false);
    if (isSchool) mutate(searchText);
    else mateMutate(searchText);
  };

  const onClickSelectCard = (value: ISchool | IUsers) => () => {
    const href = isSchool
      ? `${isSchool}?schoolName=${value?.schoolName}&schoolCode=${(value as ISchool)?.schoolCode}`
      : `/archive/${value?.id}`;
    const as = isSchool ? `${isSchool}` : `/archive/${value?.id}`;
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
        searchData.map((v) => {
          if (isSchool) {
            const school = v as ISchool;
            return (
              <SearchSchoolCard
                key={school.id}
                title={school.schoolName}
                address={school.address}
                onClick={onClickSelectCard(school)}
              />
            );
          } else {
            const mate = v as IUsers;
            return (
              <SearchFriendCard
                key={mate.id}
                name={mate?.username}
                school={mate?.schoolName}
                onClick={onClickSelectCard(mate)}
              />
            );
          }
        })
      ) : first ? (
        <h4>
          이번 버전은 초등학교만 검색이 가능합니다.
          <br />
          중학교와 고등학교는 준비중입니다 :)
        </h4>
      ) : (
        <h4>검색 결과가 없어요</h4>
      )}
    </S.SearchWrapper>
  );
};

export default Search;
