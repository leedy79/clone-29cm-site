import React from "react";
import styled from "styled-components";

const MainRightWrap = styled.div`
  background-color: #333;
  width: 56%;
  height: 500px;
`;

const MainRight = () => {
  return (
    <MainRightWrap>
      <p style={{ color: 'white' }}>MainRight</p>
    </MainRightWrap>
  );
};

export default MainRight;
