import React from "react";
import styled from "styled-components";
import data from "../../db/mainLeft";
import { useState } from "react";

const MainLeftWrap = styled.div`
  /* background-color: grey; */
  /* display: block; */
  width: 44%;
  padding-right: 2%;
  /* max-height: 12000px; */
`;

const MainLeft = () => {
  let [img, setImg] = useState(data);
  return (
    <MainLeftWrap>
      <ul>
        {img.map((ele, i) => {
          return (
            <li key={ele.id}>
              <a href={ele.url}>
                <img src={ele.imgUrl} />
              </a>
            </li>
          );
        })}
      </ul>
    </MainLeftWrap>
  );
};

export default MainLeft;
