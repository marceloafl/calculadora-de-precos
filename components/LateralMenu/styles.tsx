"use client";
import styled from "styled-components";

export const LateralMenu = styled.aside`
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  grid-area: aside;
  padding: 16px;
  width: 256px;
  ul {
    padding: 0;
  }

  a {
    text-decoration: none;
    &:hover{
      color: #004976;
      text-decoration: underline;
    }
  }
`;

export const PrimaryList = styled.ul`
  border-bottom: solid 1px #F3F2EF;
  list-style: none;
  margin: 0;
  li{
    margin: 8px 0;
  }
  a {
    color: #000;
    font-weight: 700;
  }
`;

export const SecondaryList = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0 0 0 32px;
  li {
    color: pink;
  }
  a {
    font-weight: 400;
  }
`;
