import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function SideItem({ item }) {
  const [expanded, setExpanded] = useState(false);

  const showNestedAccordion = () => setExpanded(!expanded);

  return (
    <React.Fragment>
      {!item.childrens ? (
        <div>
          <DevNavAccordianSectionItem>
            <DevNavAccordianSectionTitle href={`${item.path}`}>
              <DevNavAccordianSectionText>
                {item.title}
              </DevNavAccordianSectionText>
            </DevNavAccordianSectionTitle>
          </DevNavAccordianSectionItem>
        </div>
      ) : (
        <DevNavExpandable onClick={showNestedAccordion}>
          <DevExpandableNav>
            <a>
              <svg
                style={{
                  transform: expanded ? "rotate(0deg)" : "rotate(-90deg)",
                  position: "absolute",
                  cursor: "pointer",
                  textRendering: "optimizeLegibility",
                  textTransform: "none",
                  transition: "transform 0.2s ease",
                  wordWrap: "normal",
                  left: "20px",
                  top: "6px",
                  userSelect: "none",
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="#202124"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            <DevNavTitle>
              <DevNavText>{item.title}</DevNavText>
            </DevNavTitle>
          </DevExpandableNav>
          <ul>
            {expanded &&
              item.childrens.map((item) => {
                return (
                  <DevNavAccordianSectionItem key={item.id}>
                    <DevNavAccordianSectionTitle
                      style={{
                        paddingLeft: "56px",
                      }}
                      href={`${item.path}`}
                    >
                      <DevNavAccordianSectionText>
                        {item.title}
                      </DevNavAccordianSectionText>
                    </DevNavAccordianSectionTitle>
                  </DevNavAccordianSectionItem>
                );
              })}
          </ul>
        </DevNavExpandable>
      )}
    </React.Fragment>
  );
}

// Accordian Item styles

const DevNavAccordianSectionItem = styled.li`
  line-height: 20px;
  margin: 0;
`;

const DevNavAccordianSectionTitle = styled(Link)`
  padding: 6px 8px 6px 40px;
  border-radius: 0 16px 16px 0;
  margin-right: 8px;
  user-select: none;
  color: #202124;
  text-decoration: none;
  display: flex;
  user-select: none;
  cursor: pointer;
  &:hover {
    background: #f1f3f4;
  }
`;

const DevNavAccordianSectionText = styled.span`
  overflow: hidden;
  user-select: none;
  color: #202124;
  font-family: "Roboto", sans-serif;
  text-overflow: ellipsis;
`;

// Nested Accordion styles

const DevNavExpandable = styled.li`
  line-height: 20px;
`;

const DevExpandableNav = styled.div`
  display: block;
  position: relative;
`;

const DevNavTitle = styled.div`
  border-radius: 0 16px 16px 0;
  padding: 6px 8px 6px 40px;
  color: #202124;
  margin-right: 8px;
  cursor: pointer;
`;

const DevNavText = styled.span`
  overflow: hidden;
  user-select: none;
  text-overflow: ellipsis;
`;
