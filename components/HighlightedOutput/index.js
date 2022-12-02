import React, { useState, forwardRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function HighlightedOutput(props) {
  const codeStyle = {
    comment: {
      color: "#b80672",
      fontFamily: "Roboto Mono",
    },
    operator: {
      color: "#188038",
      fontFamily: "Roboto Mono",
    },
    string: {
      color: "#188038",
      fontFamily: "Roboto Mono",
    },
    number: {
      color: "#188038",
      fontFamily: "Roboto Mono",
    },
    token: {
      fontFamily: "Roboto Mono",
    },
  };

  return (
    <div className="doc-code">
      <SyntaxHighlighter
        language="java"
        customStyle={{
          background: "#f8f9fa",
        }}
        style={codeStyle}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
}
