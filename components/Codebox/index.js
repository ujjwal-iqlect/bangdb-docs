import React, { useState, forwardRef } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Codebox(props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="doc-code">
      <div className="doc-code-buttons-container">
        <CopyToClipboard text={props.copy}>
          <button className="copy-button" onClick={handleClick}></button>
        </CopyToClipboard>
      </div>
      <pre className="doc-terminal">{props.code}</pre>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
}
