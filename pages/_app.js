import React from "react";
import { AppProvider } from "../Context";
import "../styles/globals.css";
import styles from "../styles/article.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebars/Sidebar";
import UseCasesSidebar from "../components/Sidebars/UseCasesSidebar";
import HelpGuideSidebar from "../components/Sidebars/HelpGuideSidebar";
// import ApiSidebar from "../components/Sidebars/ApiSidebar";
import GraphSidebar from "../components/Sidebars/GraphSidebar";
import ReleaseSidebar from "../components/Sidebars/ReleaseSidebar";
import StreamSidebar from "../components/Sidebars/StreamSidebar";
import CepSidebar from "../components/Sidebars/CepSidebar";
import MlSidebar from "../components/Sidebars/MlSidebar";
import AboutSidebar from "../components/Sidebars/AboutSidebar";
import CommonSidebar from "../components/Sidebars/CommonSidebar";
import { ApiSidebarData } from "../components/Sidebars/ApiSidebarData";

import { leads_management_sidebar_data } from "../config/data/leads_management_sidebar_data";
import { create_crm_object } from "../config/data/leads_selling_sidebar_data";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const updated_leads_management_sidebar_data = structuredClone(
    leads_management_sidebar_data
  );

  updated_leads_management_sidebar_data[0].childrens.splice(
    1,
    0,
    create_crm_object
  );

  const sidebar = (pageProps) => {
    switch (true) {
      case pageProps.helpGuideSidebar:
        return <HelpGuideSidebar />;
        break;

      case pageProps.graphSidebar:
        return <GraphSidebar />;
        break;

      case pageProps.useCasesSidebar:
        return <UseCasesSidebar />;
        break;

      case pageProps.apiSidebar:
        return <CommonSidebar data={ApiSidebarData} />;
        break;

      case pageProps.releaseSidebar:
        return <ReleaseSidebar />;
        break;

      case pageProps.streamSidebar:
        return <StreamSidebar />;
        break;

      case pageProps.cepSidebar:
        return <CepSidebar />;
        break;

      case pageProps.mlSidebar:
        return <MlSidebar />;
        break;

      case pageProps.aboutSidebar:
        return <AboutSidebar />;
        break;

      case pageProps.leads_management_sidebar:
        return (
          <CommonSidebar
            data={
              router.query.app === "leads_selling"
                ? updated_leads_management_sidebar_data
                : leads_management_sidebar_data
            }
          />
        );
        break;

      case pageProps.noSidebar:
        return null;
        break;

      default:
        return <Sidebar />;
        break;
    }
  };

  return (
    <div>
      <AppProvider>
        {header_footer(pageProps, "h")}
        <Component {...pageProps} />
        {sidebar(pageProps)}
        {header_footer(pageProps, "f")}
      </AppProvider>
    </div>
  );
}

const header_footer = (pageProps, type) => {
  if (type === "f") {
    if (pageProps.noHeader) {
      return null;
    } else {
      return <Footer />;
    }
  } else if (type === "h") {
    if (pageProps.noHeader) {
      return null;
    } else {
      return <Header />;
    }
  }
};

export default MyApp;
