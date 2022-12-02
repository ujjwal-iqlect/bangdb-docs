import "../styles/globals.css";
import styles from "../styles/article.css";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      {pageProps.noLayout ? <></> : <Sidebar />}
    </div>
  );
}

export default MyApp;
