"use client";
import styled from "styled-components";

export const LateralMenu = styled.aside`
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  grid-area: aside;
  padding: 0 8px;

  ul {
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

export const PrimaryList = styled.li`
  list-style: none;
  margin: 24px 8px;
  a {
    color: #000;
    font-weight: 700;
  }
`;

export const SecondaryList = styled.li`
  margin: 16px;
  a {
    font-weight: 400;
  }
`;
