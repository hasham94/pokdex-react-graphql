import styled from "styled-components"

export const BoxWrapper = styled.div`
  margin-bottom: 16px;
  width: 22%;
  height: fit-content;
  margin-bottom: 48px;
  .mainImg {
    width: 100%;
    background: #f2f2f2;
  }
  :hover {
    box-shadow: 1px 1px 14px -1px #747474;
  }
`
export const BoxContent = styled.div`
  position: relative;
  padding: 13px;
  position: relative;
  .favourite {
    background: #30a7d7;
    color: white;
    border: none;
    position: absolute;
    top: -32px;
    left: 0;
    right: 0;
    width: fit-content;
    margin: auto;
    cursor: pointer;
  }
  .unfavourite {
    background: #e91e63;
    color: white;
    border: none;
    position: absolute;
    top: -32px;
    left: 0;
    right: 0;
    width: fit-content;
    margin: auto;
    cursor: pointer;
  }
  span {
    margin-right: 13px;
  }
  .title {
    color: #313131;
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: capitalize;
  }
  .type {
    border-radius: 3px;
    line-height: 18px;
    max-width: 110px;
    margin: 0 1.5625% 0 0;
    width: 38.4375%;
    float: left;
    text-transform: none;
    font-size: 12px;
    text-align: center;
    margin-bottom: 13px;
  }
  .Grass {
    background-color: #9bcc50;
    color: #212121;
  }
  .Poison {
    background-color: #b97fc9;
    color: #fff;
  }
  .Fire {
    background-color: #fd7d24;
    color: #fff;
  }
  .Flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
    color: #212121;
  }
  .Water {
    background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background-color: #4592c4;
    color: #fff;
  }
  .Bug {
    background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background-color: #729f3f;
    color: #fff;
  }
`
