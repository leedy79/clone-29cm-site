import React from "react";
import styled from "styled-components";
import Sticky_header from "./Sticky_header";
import Sticky_nav from "./Sticky_nav";

const Header = styled.div`
  height: 217px;
  padding: 40px 48px 20px;
  display: flex;
  flex-direction: column;
`;

const Sticky = () => {
  return (
    <div>
      <Header>
        <Sticky_header />
      </Header>
    </div>
  );
};

export default Sticky;
