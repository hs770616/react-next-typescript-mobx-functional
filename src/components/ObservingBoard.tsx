import React from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";

const ObservingBoard = inject("searchStore")(
  observer(({ searchStore }: any) => {
    console.log("rendered - ObservingBoard");
    console.log("observedVal: ", searchStore.search + ", " + searchStore.num);

    return (
      <>
        <Board1 value={"search : " + searchStore.search} readOnly />
        <Board2>num : {searchStore.num}</Board2>
      </>
    );
  })
);

export default ObservingBoard;

const Board1 = styled.input`
  margin-top: 50px;
  border: none;
  border-top: double 2px #fff;
  font-size: 40px;
  width: 300px;
  background: none;
  text-align: center;
  color: #fff;
`;
const Board2 = styled.div`
  font-size: 40px;
  color: #fff;
`;
