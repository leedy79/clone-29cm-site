import React from "react";
import styled from "styled-components";
import data from "../../db/mainRight";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    width: 533px;
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
  .product-box {
    display: flex;
    /* justify-content: space-between; */
    gap: 8px;
    align-items: stretch;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
    flex: 1 1 0%;
  }
  .product-box > img {
    width: 54px;
    height: 54px;
  }
  .brand {
    font-size: 11px;
    font-weight: 700;
  }
  .name {
    font-size: 12px;
  }
  .price-box {
    display: flex;
    gap: 2px;
  }
  .price {
    font-size: 12px;
    font-weight: 700;
  }
  .discount {
    font-size: 12px;
    font-weight: 700;
    color: #ff4800;
    display: inline-block;
  }
  .like-box {
    width: 52px;
    height: 52px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .like-box img {
    width: 24px;
    height: 24px;
  }
  .likes {
    font-size: 12px;
    color: #5d5d5da3;
  }

  .banner {
    width: 533px;
  }
`;

const MainRightProduct = () => {
  const [item, setImg] = useState(data);
  const navigate = useNavigate();

  return (
    <MainRightWrap>
      {item.map((ele, i) => {
        if (ele.type === "product") {
          return (
            <div key={ele.id} className="product-block">
              {/* 컬렉션 정보 */}
              <div
                className="collection"
                onClick={() => navigate(`/collection/${ele.id}`)}
              >
                <img src={ele.collection.image} alt={ele.collection.title} />
                <div className="collection-info">
                  <h2>{ele.collection.title}</h2>
                  <p>{ele.collection.description}</p>
                </div>
              </div>

              {/* 제품 리스트 */}
              <ul className="product-list">
                {ele.products.map((product, i) => (
                  <li key={product.id} className="product">
                    <div onClick={() => navigate(`/product/${product.id}`)}>
                      <div className="product-box">
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                          <p className="brand">{product.brand}</p>
                          <p className="name">{product.name}</p>
                          <div className="price-box">
                            {product.discount && (
                              <span className="discount">
                                {product.discount}
                              </span>
                            )}
                            <span className="price">{product.price}</span>
                          </div>
                        </div>
                        <button className="like-box">
                          <img
                            className="icon-like"
                            src="img/main_svg/like.svg"
                            alt="like"
                          />
                          <p className="likes">{product.likes}</p>
                        </button>
                      </div>
                    </div>
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
