import React from "react";
import styled from "styled-components";
import profile from "../../../assets/Group 38.jpg";

export default function RightBar() {
  return (
    <>
      <RightBarCointainer>
        <NotificationBar>
          <LeftSide>
            <BellIcon>
              <BellIconImage
                src={require("../../../assets/bell.svg").default}
              />
            </BellIcon>
            <MessageIcon>
              <MessageIconImage
                src={require("../../../assets/chat.svg").default}
              />
            </MessageIcon>
          </LeftSide>
          <RightSide>
            <ProfileIcon>
              <ProfileIconImage src={profile} />
            </ProfileIcon>
            <ArrowIcon>
              <ArrowIconImage
                src={require("../../../assets/Settings-1.svg").default}
              />
            </ArrowIcon>
          </RightSide>
        </NotificationBar>
        <ProductBar>
          <TopSection>
            <Heading>Hot SellingProducts</Heading>
            <SideHeading>See all</SideHeading>
          </TopSection>
          <ProductList>
            <Products>
              <ProductContent>
                <ProductImageContainer>
                  <ProductImage />
                </ProductImageContainer>
                <ProductTitle>
                  <ProductTitleText></ProductTitleText>
                  <ProductSalesText></ProductSalesText>
                </ProductTitle>
              </ProductContent>
              <ProductPrice>
                <PriceTag />
              </ProductPrice>
            </Products>
          </ProductList>
          
          <ProductBottom>
           <LeftContainer>
            <HelpText>What can We help you with?</HelpText>
            <Chat>
              <ChatText>Chat with us</ChatText>
              <ChatIcon>
                <ChatIconImage src={require("../../../assets/")}/>
              </ChatIcon>
            </Chat>
        
           </LeftContainer>
           <RightContainer>
            <OctionImage>
              <OctionIcon/>
            </OctionImage>

           </RightContainer>
          </ProductBottom>

        </ProductBar>
      </RightBarCointainer>
    </>
  );
}
const RightBarCointainer = styled.div`
  width: 30%;
  background-color: #f1f1f3;
`;
const NotificationBar = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
const BellIcon = styled.div`
  margin-right: 25px;
`;
const BellIconImage = styled.img`
  display: block;
  width: 100%;
`;
const MessageIcon = styled.div``;
const MessageIconImage = styled.img`
  display: block;
  width: 100%;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled.div`
  width: 39px;
`;
const ProfileIconImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
`;
const ArrowIcon = styled.div`
  width: 20px;
  margin-left: 3px;
`;
const ArrowIconImage = styled.img`
  width: 100%;
  display: block;
`;
const ProductBar = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0 0 0px;
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Heading = styled.h2`
  font-size: 24px;
  font-family: "Poppins-Regular";
`;
const SideHeading = styled.small`
  font-size: 13px;
  font-family: "Poppins-Regular";
`;
const ProductList = styled.div``;
const Products = styled.div``;
const ProductContent = styled.div``;
const ProductImageContainer = styled.div``;
const ProductImage = styled.img``;
const ProductTitle = styled.div``;
const ProductTitleText = styled.h4``;
const ProductSalesText = styled.small``;
const ProductPrice = styled.span``;
const PriceTag = styled.img``;
const ProductBottom=styled.div``;
const LeftContainer=styled.div``;
const HelpText=styled.h4``;
const Chat=styled.div``;
const ChatText=styled.h4``;
const ChatIcon=styled.small``;
const ChatIconImage=styled.img;
const RightContainer=styled.div``;
const OctionImage = styled.div``;
const OctionIcon=styled.img``;
