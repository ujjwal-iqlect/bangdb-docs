import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Box({ headline, para, link }) {
  return (
    <>
      <Card>
        <CardInner>
          <CardBody>
            <Headline>{headline}</Headline>
            <Para>{para}</Para>
          </CardBody>
          <Footer>
            <div style={{ marginTop: "-10px" }}>
              <LearnMore href={link}>Learn More</LearnMore>
            </div>
          </Footer>
        </CardInner>
      </Card>
    </>
  );
}

const Card = styled.div`
  border: 1px solid #dadce0;
  border-radius: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const CardInner = styled.div`
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 36px;
`;

const CardBody = styled.div`
  flex: 1;
`;

const Headline = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 26px;
  color: #202124;
  margin: 0;
`;

const Para = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin: 8px 0 0;
`;

const Footer = styled.div`
  margin-top: 28px;
`;

const LearnMore = styled(Link)`
  color: #7b1fa2;
  height: auto;
  margin: 24px 16px 0 0;
  align-items: center;
  box-shadow: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  font: 600 14px Raleway;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  letter-spacing: 0.25px;
  min-width: auto;
  outline: none;
  position: relative;
  text-decoration: none;
`;
