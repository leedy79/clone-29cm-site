import React from "react";
import styled from "styled-components";

const MainLeftWrap = styled.div`
  background-color: grey;
  width: 44%;
  padding-right: 2%;
  height: 500px;
  display: block;
`;

const MainLeft = () => {
  return (
    <MainLeftWrap>
      <p style={{ color: 'white' }}>MainLeft</p>
    </MainLeftWrap>
  );
};

export default MainLeft;


