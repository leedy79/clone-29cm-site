import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  width: 60px;
  height: 16px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Sticky_header = () => {
  return (
    <div>
      <Logo>
        <img src="img/logo.png" alt=""></img>
      </Logo>
    </div>
  );
};

export default Sticky_header;
