import React, { useEffect } from "react";
import { styled } from "styled-components";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { MediaQuery } from "@style/media";
import useSearchKeywordStore from "@store/search";
import { useSearchBook } from "@hooks/useSearchBook";

const Div = styled.div`
  display: flex;
  width: 35%;
  background: #333333;
  border-radius: 30px;
  padding: 10px;
  align-items: center;
  margin: 20px 0;
  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
  ${MediaQuery.tablet`
    width: 100%;
  `}
`;

const InputBox = styled.div`
  width: 90%;
  margin-right: 5px;
  & > input {
    width: 100%;
    padding: 0;
    margin: 0;
    display: block;
    height: 25px;
    color: #ffffff;
  }
`;

function SearchBar() {
  const { searchKeyword, setSearchKeyword, setSearchResult } =
    useSearchKeywordStore();

  const onSuccess = () => {
    console.log("데이터 가져오기 후 사이드 이펙트 수행");
  };
  const onError = () => {
    console.log("오류 발생 후 사이드 이펙트 수행");
  };

  const { data: searchBook, refetch } = useSearchBook(
    onSuccess,
    onError,
    searchKeyword
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChange e -> ", e.target.value);
    if (e.target.value === "") {
      setSearchResult([]);
    }
    setSearchKeyword(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchKeyword !== "") {
      refetch();

      console.log(`${searchKeyword} 입력 완료`);
    }
  };

  useEffect(() => {
    if (searchBook && searchBook.length > 0) {
      setSearchResult(searchBook);
    }
  }, [searchBook, setSearchResult]);

  return (
    <Div>
      <span>
        <MagnifyingGlassIcon width={25} color="#FFFFFF" />
      </span>
      <InputBox>
        <input
          // ref={ref}
          placeholder="검색어를 입력해주세요"
          onChange={onChange}
          value={searchKeyword}
          onKeyPress={onEnter}
        />
      </InputBox>
      {searchKeyword !== "" && (
        <span
          onClick={() => {
            setSearchKeyword("");
            setSearchResult([]);
          }}
        >
          <XMarkIcon width={25} color="#FFFFFF" />
        </span>
      )}
    </Div>
  );
}

export default SearchBar;
