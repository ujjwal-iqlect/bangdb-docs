import React, { useRef, useState } from "react";
import { AppProvider } from "../Context";
// import { Context } from "../components/Context";
import "../styles/globals.css";
import styles from "../styles/article.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebars/Sidebar";
import UseCasesSidebar from "../components/Sidebars/UseCasesSidebar";
import HelpGuideSidebar from "../components/Sidebars/HelpGuideSidebar";
import ApiSidebar from "../components/Sidebars/ApiSidebar";
import GraphSidebar from "../components/Sidebars/GraphSidebar";
import ReleaseSidebar from "../components/Sidebars/ReleaseSidebar";

function MyApp({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      {(() => {
        if (pageProps.noHeader) {
          return <></>;
        } else {
          return <Header />;
        }
      })()}
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
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
        } else if (pageProps.releaseSidebar) {
          return <ReleaseSidebar sidebar={sidebar} setSidebar={setSidebar} />;
        } else {
          return <Sidebar sidebar={sidebar} setSidebar={setSidebar} />;
        }
      })()}
    </div>
  );
}

export default MyApp;
