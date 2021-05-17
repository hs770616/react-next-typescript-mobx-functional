import { useCallback } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { observer, inject } from "mobx-react";
import { isObservable, isAction, isComputed, set } from "mobx";

const MainSearchInput = inject("searchStore")(
  observer(({ searchStore }: any) => {
    const pushTo = useRouter().pathname == "/" ? "/blue" : "/";

    console.log("rendered - MainSearchInput");

    const getStore = useCallback(() => {
      console.log("==========");
      console.log("===" + (pushTo == "/" ? "red " : "blue") + "===");
      console.log(".computedSearch: ", searchStore.computedSearch);
      console.log(".computedDoubleNum: ", searchStore.computedDoubleNum);
      Router.push(pushTo).then((r) => console.log("push", r));
    }, [searchStore]);

    return (
      <>
        <Container>
          <SearchInput
            onChange={(e: any) => searchStore.updateSearch(e.target.value)}
            onKeyDown={(e: any) => e.keyCode == 13 && getStore()}
            autoFocus
          />
          <SearchInputBtn onClick={() => getStore()}>go</SearchInputBtn>
        </Container>
        <Button1 onClick={() => searchStore.increaseNum()}>+1</Button1>
        <Button2
          onClick={() =>
            console.log("doubleNum! : ", searchStore.computedDoubleNum)
          }
        >
          x2
        </Button2>
      </>
    );
  })
);
export default MainSearchInput;

const Container = styled.div`
  margin-top: 30px;

  & :after {
    content: "";
    display: table;
    clear: both;
  }
`;

const SearchInput = styled.input`
  height: 70px;
  background-color: #fff;
  border: none;
  border-radius: 35px 0 0 35px;
  font-size: 20px;
  padding: 20px 30px;
  display: block;
  float: left;
  &:focus {
    outline: none;
  }
`;

const SearchInputBtn = styled.button`
  height: 70px;
  width: 70px;
  border: none;
  float: right;
  border-radius: 0 35px 35px 0;
  cursor: pointer;
  padding: 20px 30px;
  &:focus {
    outline: none;
  }
`;

const Button1 = styled.button`
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  margin-top: 30px;
  &:focus {
    outline: none;
  }
`;

const Button2 = styled.button`
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 35px;
  margin-top: 30px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
