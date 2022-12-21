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
            <StatisticsHeading>Statistics</StatisticsHeading>
            <Calender>
              <CalenderContent>6 Months</CalenderContent>
              <CalenderIcon>
                <CalenderIconImg
                  src={require("../../assets/Settings-1.svg").default}
                />
              </CalenderIcon>
            </Calender>
          </StatisticsTopContainer>
        </StatisticsContainer>
        <StatisticsMainContainer>
          <DeliveryContainer>
            <DeliveryFirstContainer>
              <DeliveryIcon>
                <DeliveryIconImg src={require("../../assets/Group 49.svg")} />
              </DeliveryIcon>
              <DeliveryContent>Awaiting Delivery 150k Orders</DeliveryContent>
            </DeliveryFirstContainer>
            <DeliverySecondContainer>
              <DeliveryIcon>
                <DeliveryIconImg src={require("../../assets/Group 49.svg")} />
              </DeliveryIcon>
              <DeliveryContent>Awaiting Delivery 150k Orders</DeliveryContent>
            </DeliverySecondContainer>
          </DeliveryContainer>
          <SalesContainer>
            <SalesImageContainer>
              <SalesImage src={require("../../assets/Group 26.svg").default} />
            </SalesImageContainer>
          </SalesContainer>
        </StatisticsMainContainer>
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
const StatisticsContainer = styled.div`
  padding: 55px 0 0 0px;
  width: 80%;
  margin: 0 auto;
`;
const StatisticsTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StatisticsHeading = styled.h1`
  font-size: 28px;
  font-family: "Poppins-Regular";
`;
const Calender = styled.div`
  display: flex;
  align-items: center;
`;
const CalenderContent = styled.small`
  display: block;
  font-family: "Poppins-Regular";
  color: #000;
  font-size: 14px;
`;
const CalenderIcon = styled.span`
  display: block;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`;
const CalenderIconImg = styled.img`
  display: block;
  width: 100%;
`;
const StatisticsMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;
const DeliveryContainer = styled.div`
  width:47%;
  display: flex;
  flex-direction:column;
  justify-content:space-between;

`;
const DeliveryFirstContainer = styled.div`
  height:47%;
  background-color:#F4E7E4;
  border-radius:20px;
  
`;
const DeliveryIcon = styled.span``;
const DeliveryIconImg = styled.img``;
const DeliveryContent=styled.p``;
const DeliverySecondContainer = styled.div`
  height:47%;
  border-radius:20px;
  background-color:#E6F4FF;
`;
const SalesContainer = styled.div`
  width: 47%
`;
const SalesImageContainer = styled.div`
`;
const SalesImage = styled.img`
  display: block;
  width: 100%;
  border-radius:20px; 

  
`;

