export default function Custom404() {
  return (
    <div
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, Roboto",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {/* <style>
  body { margin: 0; color: #000; background: #fff; }
  .next-error-h1 {
    border-right: 1px solid rgba(0, 0, 0, .3);
  }

  @media (prefers-color-scheme: dark) {
    body { color: #fff; background: #000; }
    .next-error-h1 {
      border-right: 1px solid rgba(255, 255, 255, .3);
    }
  }</style> */}
        <h1
          class="next-error-h1"
          style={{
            display: "inline-block",
            margin: "0",
            marginRight: "20px",
            padding: "0 23px 0 0",
            fontSize: "24px",
            fontWeight: "500",
            verticalAlign: "top",
            lineHeight: "49px",
            borderRight: "1px solid rgba(0, 0, 0, .3)",
          }}
        >
          404
        </h1>

        <div
          style={{
            display: "inline-block",
            textAlign: "left",
            lineHeight: "49px",
            height: "49px",
            verticalAlign: "middle",
          }}
        >
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "49px",
              margin: "0",
              padding: "0",
            }}
          >
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      noSidebar: true,
      noHeader: true,
    },
  };
}
