import styled from "styled-components"

export const Wrapper = styled.div`
  background: #313131;
  width: 100%;
  display: block;
  margin: auto;
  padding: 22px 0px;
`
export const SearchWrapper = styled.div`
  max-width: 932px;
  margin: auto;
  display: flex;
  align-items: end;
  .input-label {
    font-size: 21px;
    width: 100%;
    color: #fff;
    display: block;
    margin-bottom: 7px;
  }
  .search-field {
    font-size: 16px;
    padding: 12px;
    border-radius: 5px;
    min-width: 300px;
  }
  .search-hint {
    transition: background-color 0.1s linear;
    background-color: #4dad5b;
    border-radius: 5px;
    padding-bottom: 0.5em;
    color: #fff;
    margin-left: 46px;
    padding: 13px 13px 18px 13px;
    display: inline-block;
    max-width: 400px;
  }
`
