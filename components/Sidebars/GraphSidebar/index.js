import React, { useState } from "react";
import styled from "styled-components";
import SideAccord from "../../SideAccord";
import { GraphSidebarData } from "../GraphSidebarData";
import { useGlobalContext } from "../../../Context";
import { useRouter } from "next/router";

export default function GraphSidebar() {
  const { sidebar, setSidebar } = useGlobalContext();
  const [iconHover, setIconHover] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const showSidebar = () => setSidebar(!sidebar);
  const handleIconHoverMouseEnter = () => setIconHover(true);
  const handleIconHoverMouseLeave = () => setIconHover(false);

  return (
    <>
      <SidebarBG
        style={{
          transform: !sidebar ? "translate(0,0px)" : "translate(-279px, 0px)",
        }}
      ></SidebarBG>
      <DeveloperNavigation
        style={{
          transform: !sidebar
            ? "translate(0,-60px)"
            : "translate(-279px,-60px)",
        }}
      >
        <DevNavFilter>
          <FilterIcon
            xmlns="http://www.w3.org/2000/svg"
            height="14px"
            viewBox="0 0 24 24"
            width="14px"
            id="filter-icon"
            fill="#5F6368"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
          </FilterIcon>
          <DevNavInput
            type="text"
            placeholder="Filter"
            name="filter"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />

          <FilterClearButton
            data-title="Clear filter"
            aria-label="Clear filter"
            role="button"
            tabindex="0"
          ></FilterClearButton>
        </DevNavFilter>
        <nav>
          <div>
            <div>
              <ul
                className="expand-container"
                style={{ paddingBottom: "150px" }}
              >
                {/* <DevNavList text="Overview" /> */}
                {/* Accords will appear here */}
                {GraphSidebarData.filter((data) =>
                  data.title.toLowerCase().includes(query)
                ).map((item) => {
                  return <SideAccord key={item.id} item={item} />;
                })}
              </ul>
            </div>
          </div>
        </nav>
      </DeveloperNavigation>
      <SidebarBlur
        style={{
          transform: !sidebar ? "translate(0,0px)" : "translate(-279px, 0px)",
        }}
      ></SidebarBlur>
      <SidebarToggleButton
        onClick={() => {
          setSidebar(!sidebar);
        }}
        onMouseEnter={handleIconHoverMouseEnter}
        onMouseLeave={handleIconHoverMouseLeave}
        style={{
          borderRadius: sidebar ? "0 20px 20px 0" : "50%",
          left: sidebar ? "-223px" : null,
          background: sidebar ? "#073042" : null,
        }}
      >
        <svg
          style={{
            pointerEvents: "none",
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill={iconHover || sidebar ? "#fff" : "#073042"}
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d={
              sidebar
                ? "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
                : "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
            }
          />
          {/* right angled <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /> */}
        </svg>
      </SidebarToggleButton>
    </>
  );
}

const SidebarBG = styled.div`
  bottom: 0;
  display: block;
  position: fixed;
  top: 0;
  z-index: 1;
  background: #fff;
  box-shadow: 0 1px 2px 0 #bdc1c6;
  width: 269px;
`;

const DeveloperNavigation = styled.div`
  top: 157px;
  max-height: 472px;
  transform: translateY(-60px);
  box-shadow: none;
  contain: content;
  max-height: 100%;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 100;
  width: 269px;
  transition: transform 0.2s ease;
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dee0e1;
    border-radius: 8px;
  }
`;

const DevNavFilter = styled.div`
  background: #fff;
  border-bottom: 1px solid #dadce0;
  display: flex;
  margin-bottom: 12px;
  padding: 24px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const FilterIcon = styled.svg`
  position: absolute;
  top: 33px;
  left: 34px;
`;

const DevNavInput = styled.input.attrs({
  type: "text",
})`
  background: #f1f3f4;
  border: 0;
  border-radius: 4px;
  color: #7c7c7c;
  font-size: 14px;
  height: 32px;
  font-family: "Roboto", sans-serif;
  padding: 16px 32px;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
`;

const FilterClearButton = styled.span`
  cursor: pointer;
  outline: 0;
`;

const SidebarBlur = styled.div`
  background-color: #fff;
  bottom: 0;
  left: 0;
  height: 64px;
  mask-image: -webkit-linear-gradient(transparent, #000 28px);
  pointer-events: none;
  position: fixed;
  width: calc(269px - 8px);
  z-index: 500;
  -webkit-transform: translate(0);
  transform: translate(0);
`;

const SidebarToggleButton = styled.button`
  display: flex;
  border-radius: 50%;
  width: 40px;
  -webkit-box-align: center;
  align-items: center;
  color: #073042;
  box-shadow: none;
  border: 2px solid #073042;
  bottom: 16px;
  height: 40px;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 24px;
  padding: 0;
  position: fixed;
  text-decoration: none;
  transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.7s ease,
    -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  transform: translateX(calc(229px - 8px));
  z-index: 999;
  &:hover {
    background: #073042;
    color: #fff;
  }
`;
