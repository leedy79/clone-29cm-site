import React from "react";
import styled from "styled-components";
import Sticky from "../comp/Sticky";
import MainLeft from "../comp/main/MainLeft";
import MainRight from "../comp/main/MainRight";
import Footer from "../comp/Footer";


const MainWrap = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  max-height: 12000px;
`;


const Main = () => {
  return (
    <div>
      <Sticky />
      <MainWrap>
        <MainLeft />
        <MainRight />
      </MainWrap>
      <Footer />
    </div>
  );
};

export default Main;
