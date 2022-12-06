import React from "react";
import { useCustomContext } from "../Context";

export default function DocArticle({ children }) {
  const { sidebar } = useCustomContext();
  return (
    <React.Fragment>
      <section className="main-container">
        <main
          className="container"
          style={{
            gridTemplateColumns: sidebar
              ? "1fr minmax(752px,1200px) 1fr"
              : `minmax(269px, 1fr) minmax(752px, 1200px) minmax(160px, 1fr)`,
          }}
        >
          <div className="article-content">
            <article className="article">{children}</article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
