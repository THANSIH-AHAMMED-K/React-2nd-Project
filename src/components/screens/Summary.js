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
                <DeliveryIconImg
                  src={require("../../assets/Group 49.svg").default}
                />
              </DeliveryIcon>
              <DeliveryContent>
                <MainContent> Awaiting Delivery</MainContent>

                <SubContent>150k Orders</SubContent>
              </DeliveryContent>
            </DeliveryFirstContainer>
            <DeliverySecondContainer>
              <DeliveryIcon>
                <DeliveryIconImg
                  src={require("../../assets/Group 49.svg").default}
                />
              </DeliveryIcon>
              <DeliveryContent>
                <MainContent> Awaiting Delivery</MainContent>

                <SubContent>150k Orders</SubContent>
              </DeliveryContent>
            </DeliverySecondContainer>
          </DeliveryContainer>
          <SalesContainer>
            <SalesImageContainer>
              <SalesImage src={require("../../assets/Group 26.svg").default} />
            </SalesImageContainer>
          </SalesContainer>
        </StatisticsMainContainer>
        <StatisticsBottomContainer>
          <BottomLeftContainer>
            <LeftContainerContent></LeftContainerContent>
            <LeftImageContainer>
              <LeftContainerImageImg  src={require("../../assets/businessman-svgrepo-com8u76 5(1)2.svg").default} />
            </LeftImageContainer>
          </BottomLeftContainer>
          <BottomRightContainer>
            <RightContainerContent></RightContainerContent>
            <RightImageContainer>
              <RightContainerImageImg  src={require("../../assets/businessman-svgrepo-com(2)2.svg").default}/>
            </RightImageContainer>
          </BottomRightContainer>
        </StatisticsBottomContainer>
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
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DeliveryFirstContainer = styled.div`
  height: 47%;
  background-color: #f4e7e4;
  border-radius: 20px;
`;
const DeliveryIcon = styled.span`
  display: block;
  width: 52px;
  padding: 40px 0 0px 30px;
`;
const DeliveryIconImg = styled.img`
  display: block;
  width: 100%;
`;
const DeliveryContent = styled.div`
  font-family: "Poppins-Regular";
  margin-top: -20px;
  margin-left: 25px;
`;
const MainContent = styled.h4`
  font-size: 20px;
`;
const SubContent = styled.h2`
  font-size: 26px;
  margin-top: -25px;
`;
const DeliverySecondContainer = styled.div`
  height: 47%;
  border-radius: 20px;
  background-color: #e6f4ff;
`;
const SalesContainer = styled.div`
  width: 47%;
`;
const SalesImageContainer = styled.div``;
const SalesImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 20px;
`;
const StatisticsBottomContainer=styled.div``;
const BottomLeftContainer=styled.div``;
const LeftContainerContent=styled.h3``;
const LeftImageContainer=styled.div``;
const LeftContainerImageImg=styled.img``;
const BottomRightContainer=styled.div``;
const RightContainerContent=styled.div``;
const RightImageContainer=styled.div``;
const RightContainerImageImg=styled.img``;

