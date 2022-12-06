import React, { useState } from "react";
import { Context } from "../components/Context";
import "../styles/globals.css";
import styles from "../styles/article.css";
import Sidebar from "../components/Sidebar";
import HelpGuideSidebar from "../components/HelpGuideSidebar";
import GraphSidebar from "../components/GraphSidebar";

function MyApp({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <Context.Provider value={{ sidebar, setSidebar }}>
        <Component {...pageProps} />
      </Context.Provider>
      {(() => {
        if (pageProps.helpGuideSidebar) {
          return <HelpGuideSidebar sidebar={sidebar} setSidebar={setSidebar} />;
        } else if (pageProps.graph) {
          return <GraphSidebar sidebar={sidebar} setSidebar={setSidebar} />;
        } else if (pageProps.noSidebar) {
          return null;
        } else {
          return <Sidebar sidebar={sidebar} setSidebar={setSidebar} />;
        }
      })()}
    </div>
  );
}

export default MyApp;
