import React from "react";

export default function CodeboxOutput(props) {
  return (
    <div className="doc-code">
      <pre className="doc-terminal-output">{props.code}</pre>
    </div>
  );
}
