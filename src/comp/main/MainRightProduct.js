import React from "react";
import styled from "styled-components";
import data from "../../db/mainRight";
import { useState } from "react";

const MainRightWrap = styled.div`
  /* background-color: grey; */
  display: flex;
  flex-wrap: wrap;
  width: 56%;
  position: relative;
  /* max-height: 12000px; */
  .product-block {
    display: flex;
    flex-direction: column;
    padding: 32px 24px;
    gap: 12px;
    width: 435px;
  }
  .collection {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .collection-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .collection-info h2 {
    font-size: 22px;
  }
  .collection-info p {
    font-size: 15px;
  }
  .product-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .product {
    /* display: flex;
    flex-direction: column; */
    padding-top: 10px;
    border-top: 1px solid #5d5d5d29;
  }
  .banner {
    width: 435px;
  }
`;

const MainRightProduct = () => {
  const [item, setImg] = useState(data);

  return (
    <MainRightWrap>
      {item.map((ele, i) => {
        if (ele.type === "product") {
          return (
            <div key={ele.id} className="product-block">
              {/* 컬렉션 정보 */}
              <a className="collection" href={ele.collection.url}>
                <img src={ele.collection.image} alt={ele.collection.title} />
                <div className="collection-info">
                  <h2>{ele.collection.title}</h2>
                  <p>{ele.collection.description}</p>
                </div>
              </a>

              {/* 제품 리스트 */}
              <ul className="product-list">
                {ele.products.map((product, idx) => (
                  <li key={idx} className="product">
                    <a href={product.url}>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <p className="brand">{product.brand}</p>
                        <p className="name">{product.name}</p>
                        <p className="price">{product.price}</p>
                        {product.discount && (
                          <p className="discount">{product.discount}</p>
                        )}
                        <p className="likes">{product.likes}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        // 기본 배너 (type이 없거나 다른 경우)
        return (
          <div key={ele.id} className="banner">
            <a href={ele.url}>
              <img src={ele.imgUrl} alt={ele.alt} />
            </a>
          </div>
        );
      })}
    </MainRightWrap>
  );
};

export default MainRightProduct;
