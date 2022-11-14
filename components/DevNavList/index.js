import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function DevNavList(props) {
  return (
    <>
      <DevNavItem>
        <DevNavTitle href={"/"}>
          <DevNavText>{props.text}</DevNavText>
        </DevNavTitle>
      </DevNavItem>
    </>
  );
}

const DevNavItem = styled.div`
  line-height: 20px;
  margin: 0;
  padding: 0;
`;

const DevNavTitle = styled(Link)`
  border-radius: 0 16px 16px 0;
  display: flex;
  padding: 6px 8px 6px 24px;
  text-decoration: none;
  word-break: break-word;
  margin-right: 8px;
  margin-bottom: 12px;
  color: #202124;
  &:hover {
    background: #f1f3f4;
  }
`;

const DevNavText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`;
