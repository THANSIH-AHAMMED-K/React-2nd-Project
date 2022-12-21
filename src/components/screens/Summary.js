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
              <SearchIcon src={require("../../assets/search.svg").default} />
            </SearchBarIcon>
          </SearchBarContainer>
        </SearchBar>
        <StatisticsContainer>
          <StatisticsTopContainer>
            <Heading></Heading>
            <Calender>
              <CalenderContent></CalenderContent>
              <CalenderIcon>
                <Icon />
              </CalenderIcon>
            </Calender>
          </StatisticsTopContainer>
        </StatisticsContainer>
      </SummaryContainer>
    </>
  );
}

const SummaryContainer = styled.div`
  padding: 40px 0;
  width: 49%;
`;
const SearchBar = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #f1f1f3;
  border-radius: 15px;
`;
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;
const SearchBarContent = styled.h3`
  color: #5a5a5a;
  font-family: "Poppins-Regular";
`;
const SearchBarIcon = styled.span`
  display: block; ;
`;
const SearchIcon = styled.img`
  display: block;
  width: 100%;
`;
