import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Breadcrumb(props) {
  return (
    <div>
      <DocBreadCrumb>
        <DocBreadCrumbList>
          <DocBreadCrumbItem>
            <DocBreadCrumbLink href={"https://bangdb.com/"} target={"_blank"}>
              BangDB
            </DocBreadCrumbLink>
          </DocBreadCrumbItem>
          <DocBreadCrumbItem>
            <div style={{ margin: "0 4px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="#5f6368"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            </div>
            <DocBreadCrumbLink href={"/"}>Docs</DocBreadCrumbLink>
          </DocBreadCrumbItem>
          <DocBreadCrumbItem>
            <div style={{ margin: "0 4px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="#5f6368"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            </div>
            <DocBreadCrumbLink href={props.url}>{props.text}</DocBreadCrumbLink>
          </DocBreadCrumbItem>
        </DocBreadCrumbList>
      </DocBreadCrumb>
    </div>
  );
}

const DocBreadCrumb = styled.div`
  display: grid;
  grid-gap: 0 16px;
  grid-template-areas: "breadcrumbs ratings";
  margin: 0 0 36px;
  grid-template-columns: 1fr auto;
`;

const DocBreadCrumbList = styled.ul`
  display: flex;
  align-items: center;
  white-space: nowrap;
  -webkit-box-flex: 1;
  flex-wrap: wrap;
  flex: 1;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
`;

const DocBreadCrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

const DocBreadCrumbLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #5f6368;
`;
