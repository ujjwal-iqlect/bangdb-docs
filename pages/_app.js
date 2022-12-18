import React, { useRef, useState } from "react";
import { AppProvider } from "../Context";
import { Context } from "../components/Context";
import "../styles/globals.css";
import styles from "../styles/article.css";
import Sidebar from "../components/Sidebars/Sidebar";
import UseCasesSidebar from "../components/Sidebars/UseCasesSidebar";
import HelpGuideSidebar from "../components/Sidebars/HelpGuideSidebar";
import GraphSidebar from "../components/Sidebars/GraphSidebar";
import ApiSidebar from "../components/Sidebars/ApiSidebar";

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
        } else if (pageProps.graphSidebar) {
          return <GraphSidebar sidebar={sidebar} setSidebar={setSidebar} />;
        } else if (pageProps.useCasesSidebar) {
          return <UseCasesSidebar sidebar={sidebar} setSidebar={setSidebar} />;
        } else if (pageProps.apiSidebar) {
          return <ApiSidebar sidebar={sidebar} setSidebar={setSidebar} />;
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
