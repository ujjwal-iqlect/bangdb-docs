import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function DevNavList(props) {
  const router = useRouter();

  return (
    <>
      <DevNavItem>
        <DevNavTitle
          href={props.url}
          style={{
            background: router.pathname === props.url ? "#d7effe" : null,
          }}
        >
          <DevNavText
            style={{
              fontWeight: router.pathname === props.url ? "700" : null,
              color: router.pathname === props.url ? "black" : null,
            }}
          >
            {props.text}
          </DevNavText>
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
