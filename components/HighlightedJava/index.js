import React, { useState, forwardRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function HighlightedJava(props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const codeStyle = {
    punctuation: {
      color: "#37474f",
      fontFamily: "Roboto Mono",
    },
    comment: {
      color: "#b80672",
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
    "class-name": {
      color: "#188038",
      fontFamily: "Roboto Mono",
    },
    function: {
      color: "#188038",
      fontFamily: "Roboto Mono",
    },
    keyword: {
      color: "#1967d2",
      fontFamily: "Roboto Mono",
    },
  };

  return (
    <div className="doc-code">
      <div className="doc-code-buttons-container">
        <CopyToClipboard text={props.code}>
          <button className="copy-button" onClick={handleClick}></button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        language="java"
        customStyle={{
          background: "#f8f9fa",
        }}
        style={codeStyle}
      >
        {props.code}
      </SyntaxHighlighter>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
}
