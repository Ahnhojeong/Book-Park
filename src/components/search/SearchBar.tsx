import React, { useState } from "react";
import { styled } from "styled-components";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { MediaQuery } from "@style/media";

const Div = styled.div`
  display: flex;
  width: 35%;
  background: #333333;
  border-radius: 30px;
  padding: 10px;
  align-items: center;
  margin-bottom: 20px;
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
  width: 80%;
  & > input {
    width: 100%;
    padding: 0;
    margin: 0;
    display: block;
    height: 25px;
  }
`;

function SearchBar() {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChange e -> ", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Div>
      <span>
        <MagnifyingGlassIcon width={25} />
      </span>
      <InputBox>
        <input
          placeholder="검색어를 입력해주세요"
          onChange={onChange}
          value={value}
        />
      </InputBox>
      {value !== "" && (
        <span onClick={() => setValue("")}>
          <XMarkIcon width={25} />
        </span>
      )}
    </Div>
  );
}

export default SearchBar;
