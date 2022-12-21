import React from "react";
import styled from "styled-components";

export default function Summary() {
  return (
    <>
      <SummaryContainer>
        <SearchBar>
          <SearchBarContainer>
            <SearchBarContent>Search here</SearchBarContent>
            <SearchBarIcon>
              <SearchIcon src={require("../../../assets/search.svg").default} />
            </SearchBarIcon>
          </SearchBarContainer>
        </SearchBar>
      </SummaryContainer>
    </>
  );
}
