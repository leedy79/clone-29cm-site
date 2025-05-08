import React from "react";
import styled from "styled-components";
import data from "../../db/collectionProd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 5px;
  padding-top: 35px;
  justify-content: center;
  align-items: center;
  .category {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .categoryName {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .categoryName:not(:first-of-type)::before {
    content: "/";
    margin: 0 10px;
    font-size: 22px;
    font-weight: 100;
    color: #5d5d5d;
  }
  .categoryName img {
    width: 24px;
    height: 24px;
  }
  .categoryName span {
    font-size: 15px;
    margin-right: 8px;
  }  
`;
const ProductPurchaseWrap = styled.div`
  min-width: 900px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 50px 0;
  .brand-box {
    margin-bottom: 16px;
  }
  .brand-link {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .brand-link img {
    width: 74px;
    height: 74px;
  }
  .brand-info-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 14px;
  }
  .brand {
    font-size: 16px;
    font-weight: 600;
  }
  .desc {
    font-size: 13px;
  }
  .brand-home {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin-top: 6px;
  }
  .brand-home-btn {
    /* min-width: 40px;
    min-height: 25px;
    display: inline; */
    padding: 0 9px;
    font-size: 11px;
    border: 1px solid #d4d4d4;
    border-radius: 2px;
  }
  .purchase-detail-box {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

`;

const ProductDetail = () => {
  const [item, setImg] = useState(data);
  const navigate = useNavigate();

  return (
    <>
      <CategoryWrap>
        <ul className="category">
          <li className="categoryName"><span>여성의류</span><img src={process.env.PUBLIC_URL + "/img/main_svg/more_circle.svg"} alt="categoryName"/></li>
          <li className="categoryName"><span>바지</span><img src={process.env.PUBLIC_URL + "/img/main_svg/more_circle.svg"} alt="categoryName"/></li>
          <li className="categoryName"><span>트레이닝</span><img src={process.env.PUBLIC_URL + "/img/main_svg/more_circle.svg"} alt="categoryName"/></li>
        </ul>
      </CategoryWrap>
      <ProductPurchaseWrap>
        <div className="brand-box">
          <a className="brand-link" href="#">
            <img src={process.env.PUBLIC_URL + "/img/detail/brand_img.webp"} alt=""/>
            <div className="brand-info-box">
              <h3 className="brand">프라크티</h3>
              <p className="desc">프라크티는 요가와 삶을 연결시키며 다채로운 컬러를 사랑하는 브랜드입니다.</p>
              <div className="brand-home">
                <button className="brand-home-btn">BRAND HOME</button>
              </div>
            </div>
          </a>
        </div>
        <div className="purchase-detail-box">
          <div className="product-img-box">
            <div className="product-img-slider">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>            
            <div className="product-img-slider-btn">
              <button><img src="" alt=""/></button>
              <button><img src="" alt=""/></button>
            </div>
            <ul className="product-img-presentation">
              <li><button></button></li>
              <li><button></button></li>
              <li><button></button></li>
              <li><button></button></li>
              <li><button></button></li>
              <li><button></button></li>
            </ul>
          </div>
          <div className="purchase-box">
            <div></div>
            <div></div>
            <hr></hr>
            <div></div>
            <div></div>
            <ul>
              <li></li>
              <li></li>
            </ul>
            <div></div>
          </div>
        </div>

        
      </ProductPurchaseWrap>
    </>
  );
};

export default ProductDetail;
