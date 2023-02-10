import React, { useRef, useState } from 'react';
import { AppProvider } from '../Context';
import '../styles/globals.css';
import styles from '../styles/article.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebars/Sidebar';
import UseCasesSidebar from '../components/Sidebars/UseCasesSidebar';
import HelpGuideSidebar from '../components/Sidebars/HelpGuideSidebar';
import ApiSidebar from '../components/Sidebars/ApiSidebar';
import GraphSidebar from '../components/Sidebars/GraphSidebar';
import ReleaseSidebar from '../components/Sidebars/ReleaseSidebar';
import StreamSidebar from '../components/Sidebars/StreamSidebar';
import CepSidebar from '../components/Sidebars/CepSidebar';
import MlSidebar from '../components/Sidebars/MlSidebar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppProvider>
        {(() => {
          if (pageProps.noHeader) {
            return <></>;
          } else {
            return <Header />;
          }
        })()}
        <Component {...pageProps} />
        {(() => {
          if (pageProps.helpGuideSidebar) {
            return <HelpGuideSidebar />;
          } else if (pageProps.graphSidebar) {
            return <GraphSidebar />;
          } else if (pageProps.useCasesSidebar) {
            return <UseCasesSidebar />;
          } else if (pageProps.apiSidebar) {
            return <ApiSidebar />;
          } else if (pageProps.noSidebar) {
            return null;
          } else if (pageProps.releaseSidebar) {
            return <ReleaseSidebar />;
          } else if (pageProps.streamSidebar) {
            return <StreamSidebar />;
          } else if (pageProps.cepSidebar) {
            return <CepSidebar />;
          } else if (pageProps.mlSidebar) {
            return <MlSidebar />;
          } else {
            return <Sidebar />;
          }
        })()}
        {(() => {
          if (pageProps.noHeader) {
            return <></>;
          } else {
            return <Footer />;
          }
        })()}
      </AppProvider>
    </div>
  );
}

export default MyApp;
