import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ImageGrid(props) {
  return (
    <DocImageGrid>
      <Image
        alt={props.alt}
        src={props.src}
        width={props.width}
        height={props.height}
      />
      <Image
        alt={props.alt2}
        src={props.src2}
        width={props.width2}
        height={props.height2}
      />
    </DocImageGrid>
  );
}

const DocImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 30px 0;
`;
