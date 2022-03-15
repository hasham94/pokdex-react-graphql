import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: block;
  margin: auto;
  padding: 0px 0px 22px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  select {
    font-size: 16px;
    padding: 10px;
  }
`
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 7px;
  }
  select {
    background: #313131;
    color: white;
    width: 240px;
    border-radius: 7px;
    option {
      background-color: #616161;
      :hover {
        background: #313131 !important;
      }
    }
  }
`
