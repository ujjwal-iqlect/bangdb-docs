import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import styles from "./DevArticle.module.css";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function DevArticle({ getit }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(1);

  const handleClick = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const jsonCode = String.raw`
// JSON Ouput

  {
    "server":{
       "node_name":"bangdb",
       "version":"#146~16.04.1-Ubuntu SMP Tue Apr 13 09:27:15 UTC 2021",
       "release":"4.15.0-142-generic",
       "machine_arch":"x86_64",
       "system":"\"Ubuntu 16.04.7 LTS\"\n",
       "ram_mb":15831,
       "num_cpu":12,
       "listen_tcp_sock":10,
       "established_tcp_sock":7,
       "avg_user_cpu":3.07,
       "avg_sys_cpu":0.5600000000000001,
       "avg_iowait_cpu":0.16,
       "avg_idle_cpu":95.68000000000001,
       "num_open_files":105314,
       "num_disk":2,
       "total_disk_space_GB":1024,
       "used_disk_space":"6%\n"
    },
    "bangdb_process":{
       "pid":26717,
       "bangdb_ip_port":"NULL",
       "vm":8886,
       "maxrss_mb":148,
       "user_time_sec":56,
       "sys_time_sec":0,
       "page_reclaims":34187,
       "page_fault_IO":1,
       "block_input":0,
       "block_output":4304,
       "context_switch_vol":1695,
       "context_switch_forced":255
    }
 } 
  `;

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
    property: {
      color: "#188038",
      fontFamily: "Roboto Mono",
    },
  };

  return (
    <React.Fragment>
      <MainWrapper>
        <Main
          style={{
            gridTemplateColumns: getit
              ? "1fr minmax(752px,936px) 1fr"
              : `minmax(269px, 1fr) minmax(752px, 936px) minmax(160px, 1fr)`,
          }}
        >
          <DocContent>
            <DocArticle>
              <DocBreadCrumb>
                <DocBreadCrumbList>
                  <DocBreadCrumbItem>
                    <DocBreadCrumbLink href={"/"}>BangDB 2.0</DocBreadCrumbLink>
                  </DocBreadCrumbItem>
                  <DocBreadCrumbItem>
                    <div style={{ margin: "0 4px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                        fill="#5f6368"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                      </svg>
                    </div>
                    <DocBreadCrumbLink href={"/"}>Docs</DocBreadCrumbLink>
                  </DocBreadCrumbItem>
                  <DocBreadCrumbItem>
                    <div style={{ margin: "0 4px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                        fill="#5f6368"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                      </svg>
                    </div>
                    <DocBreadCrumbLink href={"/"}>Manual</DocBreadCrumbLink>
                  </DocBreadCrumbItem>
                </DocBreadCrumbList>
              </DocBreadCrumb>
              <DocTitle>Android Security</DocTitle>
              <div className={styles["article-body"]}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  nisi!
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  nisi!
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  nisi!
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>
                    Lorem ipsum dolor sit amet
                    <Link href={"/done"}> consectetur </Link>
                    adipisicing elit. Voluptas enim dolorem iusto minima saepe
                    omnis doloribus sunt in! Vero unde possimus quidem hic iste
                    nesciunt nisi praesentium quibusdam dignissimos voluptatem!
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  laudantium animi vitae nobis tempore voluptates, quas vero
                  minima illum suscipit excepturi ullam laboriosam distinctio
                  sit, facilis rem itaque iusto commodi labore delectus
                  reiciendis? Exercitationem temporibus magnam illum nulla,
                  saepe, dolor aliquid vel mollitia officiis sed incidunt veniam
                  ad voluptatem quo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  aliquam consectetur voluptatem numquam fugit officia, quis
                  maiores dolor, tempora ex placeat, magni cum obcaecati?
                  Suscipit vero ea molestias eos commodi?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  laudantium animi vitae nobis tempore voluptates, quas vero
                  minima illum suscipit excepturi ullam laboriosam distinctio
                  sit, facilis rem itaque iusto commodi labore delectus
                  reiciendis? Exercitationem temporibus magnam illum nulla,
                  saepe, dolor aliquid vel mollitia officiis sed incidunt veniam
                  ad voluptatem quo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  aliquam consectetur voluptatem numquam fugit officia, quis
                  maiores dolor, tempora ex placeat, magni cum obcaecati?
                  Suscipit vero ea molestias eos commodi?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  laudantium animi vitae nobis tempore voluptates, quas vero
                  minima illum suscipit excepturi ullam laboriosam distinctio
                  sit, facilis rem itaque iusto commodi labore delectus
                  reiciendis? Exercitationem temporibus magnam illum nulla,
                  saepe, dolor aliquid vel mollitia officiis sed incidunt veniam
                  ad voluptatem quo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  aliquam consectetur voluptatem numquam fugit officia, quis
                  maiores dolor, tempora ex placeat, magni cum obcaecati?
                  Suscipit vero ea molestias eos commodi?
                </p>

                <aside className={styles["doc-note"]}>
                  <strong>Note: </strong>
                  AOSP ships with its own copies of the Python 2 and Python 3
                  packages, and you can use the version
                  <a href={"/"}> Such as CEP Policy </a>
                  thats included in the source tree. Google is migrating all
                  scripts in the Android source tree to Python 3, and the
                  embedded copy of Python 2 might be deprecated.
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    veniam <a href={"/"}>nemo</a> blanditiis alias?
                  </p>
                </aside>
                {/* Codebox */}
                <div className={styles["doc-code"]}>
                  <div className={styles["doc-code-buttons-container"]}>
                    <CopyToClipboard text={jsonCode}>
                      <button
                        className={styles["copy-button"]}
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  {/* <pre className={styles["doc-terminal"]}>
                    npm install bangdb
                  </pre> */}
                  <SyntaxHighlighter
                    language="json"
                    style={codeStyle}
                    customStyle={{
                      background: "#f8f9fa",
                    }}
                  >
                    {jsonCode}
                  </SyntaxHighlighter>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Copied to clipboard!
                    </Alert>
                  </Snackbar>
                </div>
                <div className={styles["table-container"]}>
                  <table>
                    <tbody>
                      <tr>
                        <th>Field</th>
                        <th>Purpose</th>
                        <th>Size</th>
                        <th>Value</th>
                      </tr>
                      <tr>
                        <td>magic number</td>
                        <td>used by fs_mgr as a sanity check</td>
                        <td>4 bytes</td>
                        <td>0xb001b001</td>
                      </tr>
                      <tr>
                        <td>version</td>
                        <td>used to version the metadata block</td>
                        <td>4 bytes</td>
                        <td>currently 0</td>
                      </tr>
                      <tr>
                        <td>signature</td>
                        <td>
                          the signature of the table in PKCS1.5 padded form
                        </td>
                        <td>256 bytes</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>table length</td>
                        <td>the length of the dm-verity table in bytes</td>
                        <td>4 bytes</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>table</td>
                        <td>the dm-verity table described earlier</td>
                        <td>table length bytes</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>padding</td>
                        <td>this structure is 0-padded to 32k in length</td>
                        <td></td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles["tab-shifter"]}>
                  <div className={styles["tab-wrapper"]}>
                    <div className={styles.tab} onClick={() => setTab(1)}>
                      <span className={tab !== 1 ? null : `${styles.active}`}>
                        C++
                      </span>
                    </div>
                    <div className={styles.tab} onClick={() => setTab(2)}>
                      <span className={tab !== 2 ? null : `${styles.active}`}>
                        Java
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: tab === 1 ? "block" : "none",
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    quam minima aspernatur repellendus corporis omnis explicabo
                    assumenda, ea optio perferendis, quasi esse ad quas
                    laudantium voluptatem officiis adipisci exercitationem
                    veritatis?
                  </p>
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>
                    Java ipsum dolor sit amet consectetur adipisicing elit. Vel
                    quam minima aspernatur repellendus corporis omnis explicabo
                    assumenda, ea optio perferendis, quasi esse ad quas
                    laudantium voluptatem officiis adipisci exercitationem
                    veritatis?
                  </p>
                </div>
              </div>
            </DocArticle>
          </DocContent>
        </Main>
      </MainWrapper>
    </React.Fragment>
  );
}

const MainWrapper = styled.section`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  margin-top: 156.979px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`;

const Main = styled.main`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: minmax(269px, 1fr) minmax(752px, 936px) minmax(
      160px,
      1fr
    );
  grid-template-rows: 1fr;
  position: relative;
  width: 100%;
`;

const DocContent = styled.div`
  align-self: start;
  grid-column: 2;
  display: block;
  position: relative;
  grid-row: 1;
  margin: 24px 0;
  max-width: 936px;
  min-width: 0;
`;

const DocArticle = styled.article`
  border: 1px solid #dadce0;
  background: #fff;
  border-radius: 8px;
  padding: 40px;
`;

const DocBreadCrumb = styled.div`
  display: grid;
  grid-gap: 0 16px;
  grid-template-areas: "breadcrumbs ratings";
  margin: 0 0 36px;
  grid-template-columns: 1fr auto;
`;

const DocBreadCrumbList = styled.ul`
  display: flex;
  align-items: center;
  white-space: nowrap;
  -webkit-box-flex: 1;
  flex-wrap: wrap;
  flex: 1;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
`;

const DocBreadCrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

const DocBreadCrumbLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #5f6368;
`;

const DocTitle = styled.h1`
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 40px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #000;
  letter-spacing: -0.5px;
  margin-inline-end: 83px;
  vertical-align: middle;
`;

// const Codebox = styled(SyntaxHighlighter)`
//   font-family: "Roboto Mono", monospace !important;
// `;
