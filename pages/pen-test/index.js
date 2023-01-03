import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import DocArticle from "../../components/DocArticle";
import { Chart } from "react-google-charts";

export default function PenTest() {
  const chartData = [
    ["Risk Level", "Count"],
    ["Low", 6],
    ["Informational", 4],
  ];

  const chartOptions = {
    colors: ["#b8cce4", "#bfbfbf"],
  };

  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pen Test Report - BangDB</title>
        <meta
          name="description"
          content="The objective of this pen test and security assessment is to identify and exploit the vulnerabilities of the web application, assess the security risks and provide recommendations to mitigate risks."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pen Test Report - BangDB" />
        <meta
          property="og:description"
          content="The objective of this pne test and security assessment is to identify and exploit the vulnerabilities of the web application, assess the security risks and provide recommendations to mitigate risks."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Pen Test Report - BangDB" />
        <meta
          name="twitter:description"
          content="The objective of this pen test and security assessment is to identify and exploit the vulnerabilities of the web application, assess the security risks and provide recommendations to mitigate risks."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Pen test report</h1>
        <div className="article-body">
          <h2>Executive Summary</h2>
          <h3>Context</h3>
          <p>
            The objective of this security assessment is to identify and exploit
            the vulnerabilities of the web application, assess the security
            risks and provide recommendations in order to mitigate the
            identified risks.
          </p>
          <h3>Project Scope</h3>
          <p>
            The <strong>web application</strong> assessment was performed in the{" "}
            <strong>Pre-production</strong> environment. The hosts of the target
            application were:
          </p>
          <ul>
            <li>testamp.bangdb.com</li>
            <li>testbe.bangdb.com</li>
            <li>testbrs.bangdb.com</li>
            <li>testtrain.bangdb.com</li>
            <li>testuser.bangdb.com</li>
          </ul>
          <h3>Key Findings</h3>
          <p>
            A total of six low-risk findings were found, with four
            informational-risk issues also identified. The following is a
            summary of the main findings:
          </p>
          <ul>
            <li>
              <strong>Server Header Disclosure</strong> allowed an attacker to
              identify exact server version via HTTP response header.
            </li>
            <li>
              <strong>
                Cross-origin Resource Sharing: Arbitrary Origin Trusted
              </strong>{" "}
              possible for an attacker to carry out privileged actions and
              possibly retrieve sensitive information.
            </li>
            <li>
              <strong>API Key Stored in Session Storage</strong> could be
              obtained by an attacker via Cross-site Scripting attack.
            </li>
          </ul>
          <h3>Summary of Findings</h3>
          <p>
            The web application suffered from a number of vulnerabilities which
            may affect the integrity and the confidentiality of the information
            contained within the system. It is recommended that remedial work be
            taken to ensure the future operation of the system.
          </p>
          <p>
            Vulnerabilities in the target application fell into two broad
            categories: <strong>security header misconfiguration </strong>
            and <strong>session management</strong>.
          </p>
          <p>
            <strong>Server Header Disclosure:</strong> The application in scope
            produced the exact version of the web server in use in its HTTP
            response headers. This issue could allow an attacker to use the
            disclosed web server version information to gain a greater
            understanding of the underlying technologies involved and tailor
            further attacks to these specific products.
          </p>
          <p>
            <strong>
              Cross-origin Resource Sharing: Arbitrary Origin Trusted:
            </strong>{" "}
            Allowing arbitrary resource origin was the instance of security
            header misconfiguration flaws. By exploiting this vulnerability, it
            would be possible for an attacker to carry out privileged actions
            and retrieve sensitive information as well as bypass any IP-based
            access controls by proxying through users&apos; browsers.
          </p>
          <p>
            <strong>API Key Stored in Session Storage:</strong> Most people tend
            to store API key in the session storage of the web browser. This
            tactic leaves applications open to an attack called Cross-site
            Scripting (XSS). So, for example, if the attacker can find a way to
            inject maliciously JavaScript code inside the applications via XSS
            attack, the API key is immediately accessible and sent to the
            attacker&apos;s machine.
          </p>
          <h3>Strategic Recommendations</h3>
          <ul>
            <li>
              <strong>
                Configure the web server so that version information is not
                disclosed via HTTP response header
              </strong>{" "}
              in a consistent manner, regardless of whether the requested web
              page exists.
            </li>
            <li>
              <strong>Use a whitelist of trusted domains</strong> and avoid
              whitelisting &quot;null&quot; value.
            </li>
            <li>
              <strong>Store the API key in cookies</strong> and ensure that
              HTTPOnly and Secure flags are set for sensitive cookies.
            </li>
          </ul>
          <h2>Security Assessment History</h2>
          <h3>Initial Security Assessment (25th December 2022)</h3>
          <p>
            A security assessment report generated indicates the result of the
            first test. By providing this report, the assessor acknowledges that
            there are 10 security issues open in the application. It is
            recommended that remedial work be taken to ensure the future
            operation of the system.
          </p>
          <h2>Overview</h2>
          <h3>Assessment Methodology</h3>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Phase 1 - Information Gathering</strong>
                  </td>
                  <td>
                    The security assessment was started by collecting
                    information of the target application from various sources.
                    The information, which was publicly available on the
                    Internet, includes the network infrastructure, domain name
                    service, security systems in use, open services, etc. The
                    information would help the consultants to understand the
                    target environment and plan for further assessment.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Phase 2 - Vulnerability Identification & Prioritization
                    </strong>
                  </td>
                  <td>
                    After information gathering, assessors would try to identify
                    any vulnerability on the application through automated
                    scanning tools and manual inspection. Numerous test cases
                    were conducted.
                    <br />
                    <p>
                      For the Web Application assessment,{" "}
                      <strong>OWASP Top 10 vulnerability</strong> would be
                      covered.
                    </p>
                    <ul>
                      <li>Client-side attacks</li>
                      <p>
                        Examine if there is any insecure data handling, such as
                        unencrypted data storage for sensitive information,
                        insecure file caching, etc.
                      </p>
                      <li>Network-side attacks</li>
                      <p>
                        Examine if there is any insecure data handling, such as
                        unencrypted data storage for sensitive information,
                        insecure file caching, etc.
                      </p>
                      <li>Server-side attacks</li>
                      <p>
                        Examine the traffic between the application and backend
                        server and identify if there is any possible data
                        manipulation between the client and server (e.g.
                        injection, data tampering, session hijacking, etc)
                      </p>
                    </ul>
                    <p>
                      The risks discovered will be correlated with the results
                      in static security assessment to produce a more accurate
                      result. The results were collected, reviewed and
                      prioritized for further exploit.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Phase 3 - Research & Development</strong>
                  </td>
                  <td>
                    In this phase, the consultants conducted research on the
                    vulnerabilities identified on the target application and
                    developed the attack approaches, tools, scripts, etc. and
                    prepared for exploiting the vulnerabilities.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Phase 4 - Exploitation</strong>
                  </td>
                  <td>
                    With the findings in the research and development phase, the
                    consultants would then carry exploits on the target. This
                    phase involved the use of real-world hacker tools and
                    scripts to simulate attacks on the vulnerabilities. In this
                    phase, a higher level of privileged or access to sensitive
                    information can be achieved.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Phase 5 - Post-Exploitation</strong>
                  </td>
                  <td>
                    After exploitation, the consultants might gain privileged
                    access to the target application. the consultants would
                    explore further opportunities to see if it is possible to
                    access other systems through the privileged access.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Phase 6 - Risk Analysis and Reporting</strong>
                  </td>
                  <td>
                    The results of the security assessment were documented in
                    detail in this report. The risk rating of each vulnerability
                    was assessed. The result and the recommendations for
                    remediation will be documented in the report. To cater for
                    different readers, the report will be clearly sectioned to
                    consist of executive-level reporting and technical
                    reporting. The consultants shall endeavor to produce a
                    report that is concise, wellstructured and contain of solid
                    recommendations and reproducible results.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Type of tests</h2>
          <p>
            The test can be conducted in black-box, grey-box or white-box
            approach. According to{" "}
            <strong>
              Open Source Security Testing Methodology Manual (OSSTMM)
            </strong>
            , the three types of tests are defined as follows:
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>TYPE</th>
                  <th>DESCRIPITON</th>
                </tr>
                <tr>
                  <td>
                    <strong>BLACK-BOX (BLIND)</strong>
                  </td>
                  <td>
                    The assessor engages the target with no prior knowledge of
                    its defenses, assets, or channels. The target is prepared
                    for the audit, knowing in advance all the details of the
                    audit. A black-box audit primarily tests the skills of the
                    assessor. The breadth and depth of a blind audit can only be
                    as vast as the assessor&apos;s applicable knowledge and
                    efficiency allows.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>GREY-BOX</strong>
                  </td>
                  <td>
                    The assessor engages the target with limited knowledge of
                    its defenses and assets and full knowledge of channels. The
                    target is prepared for the audit, knowing in advance all the
                    details of the audit. A grey-box audit tests the skills of
                    the assessor. The nature of the test is efficiency. The
                    breadth and depth depend upon the quality of the information
                    provided to the assessor before the test as well as the
                    assessor&apos;s applicable knowledge.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>WHITE-BOX</strong>
                  </td>
                  <td>
                    The assessor engages the target with limited knowledge of
                    its defenses and assets and full knowledge of channels. The
                    target is notified in advance of the scope and time frame of
                    the audit but not the channels tested or the test vectors. A
                    white-box audit tests the skills of the assessor and the
                    target&apos;s preparedness to unknown variables of
                    agitation. The breadth and depth depend upon the quality of
                    the information provided to the assessor and the target
                    before the test as well as the assessor&apos;s applicable
                    knowledge.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>For more details, please refer to OSSTMM v3.</p>
          <h2>Risk Level Classifications</h2>
          <p>
            This section of the report details the severity classification
            system used during the assessment according to
            <strong>
              Common Vulnerability Scoring System Version 3.1 (CVSS v3.1)
            </strong>
            :
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>SEVERITY RATING</th>
                  <th>DESCRIPTION</th>
                </tr>
                <tr>
                  <td>
                    <strong>CRITICAL</strong>
                  </td>
                  <td>
                    These issues imply an immediate, easily accessible threat of
                    large-scale total compromise. As such, they should be
                    resolved as a matter of urgency to ensure the business is
                    not operating with an excessive level of IT related business
                    risk.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>HIGH</strong>
                  </td>
                  <td>
                    These issues imply an immediate threat of system compromise.
                    As such, they should be resolved as soon as possible to
                    ensure the business is not operating with an excessive level
                    of IT related business risk.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>MEDIUM</strong>
                  </td>
                  <td>
                    These issues should be resolved in a timely manner where
                    possible; however, they can often be mitigated in the short
                    term until appropriate resolutions can be put in place.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>LOW</strong>
                  </td>
                  <td>
                    These issues should be resolved if the improvement in the
                    organization&apos;s security posture would justify the cost
                    of the solution. In general, solutions to low severity
                    issues should be implemented once higher severity issues
                    have been addressed.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>INFORMATIONAL</strong>
                  </td>
                  <td>
                    These issues are included in the report for completeness.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>For more details, please refer to CVSS v3.1.</p>
          <h2>Detailed Engagement Data</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>NAME</th>
                  <th>DETAILS</th>
                </tr>
                <tr>
                  <td>
                    <strong>COMPANY NAME</strong>
                  </td>
                  <td>IQLECT Software Solutions Pvt. Ltd.</td>
                </tr>
                <tr>
                  <td>
                    <strong>TEST TYPE</strong>
                  </td>
                  <td>Web Application Security Assessment</td>
                </tr>
                <tr>
                  <td>
                    <strong>TARGET</strong>
                  </td>
                  <td>
                    testamp.bangdb.com
                    <br />
                    testbe.bangdb.com
                    <br />
                    testbrs.bangdb.com
                    <br />
                    testtrain.bangdb.com
                    <br />
                    testuser.bangdb.com
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>ENVIRONMENT</strong>
                  </td>
                  <td>Pre-production</td>
                </tr>
                <tr>
                  <td>
                    <strong>METHOD</strong>
                  </td>
                  <td>Grey-box</td>
                </tr>
                <tr>
                  <td>
                    <strong>TEST ACCOUNTS</strong>
                  </td>
                  <td>
                    demouser
                    <br />
                    demouser2
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>TEST DATES</strong>
                  </td>
                  <td>18 th December 2022 - 25th December 2022</td>
                </tr>
                <tr>
                  <td>
                    <strong>FUNCTIONS IN SCOPE</strong>
                  </td>
                  <td>All accessible functions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Port Scanning Results</h2>
          <h5>testamp.bangdb.com</h5>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>AVAILABLE PORT</th>
                  <th>PROTOCOL</th>
                  <th>SERVICE</th>
                </tr>
                <tr>
                  <td>22</td>
                  <td>tcp</td>
                  <td>ssh</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>tcp</td>
                  <td>domain</td>
                </tr>
                <tr>
                  <td>443</td>
                  <td>tcp</td>
                  <td>https</td>
                </tr>
                <tr>
                  <td>10050</td>
                  <td>tcp</td>
                  <td>zabbix-agent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>testbe.bangdb.com</h5>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>AVAILABLE PORT</th>
                  <th>PROTOCOL</th>
                  <th>SERVICE</th>
                </tr>
                <tr>
                  <td>22</td>
                  <td>tcp</td>
                  <td>ssh</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>tcp</td>
                  <td>domain</td>
                </tr>
                <tr>
                  <td>1167</td>
                  <td>tcp</td>
                  <td>cisco-ipsla</td>
                </tr>
                <tr>
                  <td>10050</td>
                  <td>tcp</td>
                  <td>zabbix-agent</td>
                </tr>
                <tr>
                  <td>18080</td>
                  <td>tcp</td>
                  <td>unknown</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>testbrs.bangdb.com</h5>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>AVAILABLE PORT</th>
                  <th>PROTOCOL</th>
                  <th>SERVICE</th>
                </tr>
                <tr>
                  <td>22</td>
                  <td>tcp</td>
                  <td>ssh</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>tcp</td>
                  <td>domain</td>
                </tr>
                <tr>
                  <td>1167</td>
                  <td>tcp</td>
                  <td>cisco-ipsla</td>
                </tr>
                <tr>
                  <td>10050</td>
                  <td>tcp</td>
                  <td>zabbix-agent</td>
                </tr>
                <tr>
                  <td>18080</td>
                  <td>tcp</td>
                  <td>unknown</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>testtrain.bangdb.com</h5>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>AVAILABLE PORT</th>
                  <th>PROTOCOL</th>
                  <th>SERVICE</th>
                </tr>
                <tr>
                  <td>22</td>
                  <td>tcp</td>
                  <td>ssh</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>tcp</td>
                  <td>domain</td>
                </tr>
                <tr>
                  <td>1167</td>
                  <td>tcp</td>
                  <td>cisco-ipsla</td>
                </tr>
                <tr>
                  <td>10050</td>
                  <td>tcp</td>
                  <td>zabbix-agent</td>
                </tr>
                <tr>
                  <td>18080</td>
                  <td>tcp</td>
                  <td>unknown</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>testuser.bangdb.com</h5>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>AVAILABLE PORT</th>
                  <th>PROTOCOL</th>
                  <th>SERVICE</th>
                </tr>
                <tr>
                  <td>22</td>
                  <td>tcp</td>
                  <td>ssh</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>tcp</td>
                  <td>domain</td>
                </tr>
                <tr>
                  <td>1167</td>
                  <td>tcp</td>
                  <td>cisco-ipsla</td>
                </tr>
                <tr>
                  <td>10050</td>
                  <td>tcp</td>
                  <td>zabbix-agent</td>
                </tr>
                <tr>
                  <td>10101</td>
                  <td>tcp</td>
                  <td>ezmeeting-2</td>
                </tr>
                <tr>
                  <td>18080</td>
                  <td>tcp</td>
                  <td>unknown</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Result Summary</h2>
          <p>
            The following table presents the total number of vulnerabilities
            found, sorted by severity.{" "}
            <strong>
              Common Vulnerability Scoring System Version 3.1 (CVSS v3.1)
            </strong>{" "}
            would be covered:
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>RISK LEVEL</th>
                  <th>COUNT</th>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#c00000", color: "#fff" }}>
                    <strong>CRITICAL</strong>
                  </td>
                  <td>0</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#ffc000", color: "#fff" }}>
                    <strong>HIGH</strong>
                  </td>
                  <td>0</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#365f91", color: "#fff" }}>
                    <strong>MEDIUM</strong>
                  </td>
                  <td>0</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#b8cce4" }}>
                    <strong>LOW</strong>
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#bfbfbf" }}>
                    <strong>INFORMATIONAL</strong>
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <strong>GRAND TOTAL</strong>
                  </td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Chart
            chartType="PieChart"
            data={chartData}
            options={chartOptions}
            width={"100%"}
            height={"600px"}
          />
          <h2>Table of Findings</h2>
          <p>The following table presents the total number of findings.</p>
          <h3>Web Application</h3>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>RISK ID</th>
                  <th>VULNERABILITY</th>
                  <th>RISK LEVEL</th>
                </tr>
                <tr>
                  <td>A1</td>
                  <td>Server Header Disclosure</td>
                  <td style={{ backgroundColor: "#b8cce4" }}>
                    <strong>Low</strong>
                  </td>
                </tr>
                <tr>
                  <td>A2</td>
                  <td>
                    Cross-origin Resource Sharing: Arbitrary Origin Trusted
                  </td>
                  <td style={{ backgroundColor: "#b8cce4" }}>
                    <strong>Low</strong>
                  </td>
                </tr>
                <tr>
                  <td>A3</td>
                  <td>API Key Stored in Session Storage</td>
                  <td style={{ backgroundColor: "#b8cce4" }}>
                    <strong>Low</strong>
                  </td>
                </tr>
                <tr>
                  <td>A4</td>
                  <td>Clickjacking: X-Frame-Options Header Missing</td>
                  <td style={{ backgroundColor: "#b8cce4" }}>
                    <strong>Low</strong>
                  </td>
                </tr>
                <tr>
                  <td>A5</td>
                  <td>Missing X-Content-Type-Options Header</td>
                  <td style={{ backgroundColor: "#b8cce4" }}>
                    <strong>Low</strong>
                  </td>
                </tr>
                <tr>
                  <td>A6</td>
                  <td>Strict Transport Security Not Enforced</td>
                  <td style={{ backgroundColor: "#b8cce4" }}>
                    <strong>Low</strong>
                  </td>
                </tr>
                <tr>
                  <td>A7</td>
                  <td>Content Security Policy (CSP) Not Implemented</td>
                  <td style={{ backgroundColor: "#bfbfbf" }}>
                    <strong>Informational</strong>
                  </td>
                </tr>
                <tr>
                  <td>A8</td>
                  <td>Referrer Policy Header Missing</td>
                  <td style={{ backgroundColor: "#bfbfbf" }}>
                    <strong>Informational</strong>
                  </td>
                </tr>
                <tr>
                  <td>A9</td>
                  <td>X-XSS-Protection Header Missing</td>
                  <td style={{ backgroundColor: "#bfbfbf" }}>
                    <strong>Informational</strong>
                  </td>
                </tr>
                <tr>
                  <td>A10</td>
                  <td>Password Field with Autocomplete Enabled</td>
                  <td style={{ backgroundColor: "#bfbfbf" }}>
                    <strong>Informational</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>For more details, please refer to CVSS v3.1.</p>
          <h2>Detailed Findings</h2>
          <p>
            This section of the document is technical in nature and provides
            further detail about the items already discussed, for the purposes
            of remediation and risk-assessment.
          </p>
          <h2>Web Application</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>A1 Server Header Disclosure</h3>
                  </th>
                  <th style={{ backgroundColor: "#b8cce4" }}>
                    <h3 style={{ margin: "0" }}>Low</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 3.7
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>https://testamp.bangdb.com/</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            The application in scope, when encountered an unexpected error,
            produced the exact version of the webserver in use in its HTTP
            response headers. This allows an attacker to use this information to
            gain a greater understanding of the underlying technologies involved
            and tailor further attacks to these specific products.
          </p>
          <p>
            The following response disclosed the software version of the server:
          </p>
          <Image
            width="982"
            height="313"
            src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a1.png"
            alt="Pen test A1"
          />
          <aside className="doc-note">
            <strong>Recommendation:</strong>
            <p>
              The web server should be reconfigured so that software version
              information is not included in HTTP responses in a consistent
              manner, regardless of whether the requested webpage exists.
            </p>
          </aside>
          <h5>Reference:</h5>
          <p>Configuring the Web Server to Not Disclose its Identity</p>
          <p>
            <Link
              target={"_blank"}
              href={
                "https://www.acunetix.com/blog/articles/configure-web-server-disclose-identity/"
              }
              className="external"
            >
              https://www.acunetix.com/blog/articles/configure-web-server-disclose-identity/
            </Link>
          </p>
          <p>
            CWE-200: Information Exposure{" "}
            <Link
              href={"https://cwe.mitre.org/data/definitions/200.html"}
              className="external"
              target={"_blank"}
            >
              https://cwe.mitre.org/data/definitions/200.html
            </Link>
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>
                      A2 Cross-origin Resource Sharing: Arbitrary Origin
                    </h3>
                  </th>
                  <th style={{ backgroundColor: "#b8cce4" }}>
                    <h3 style={{ margin: "0" }}>Low</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <h3 style={{ margin: "0" }}>Trusted</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 3.7
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:L/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>
                    https://testbe.bangdb.com:18080/
                    <br />
                    https://testbrs.bangdb.com:18080/
                    <br />
                    https://testtrain.bangdb.com:18080/
                    <br />
                    https://testuser.bangdb.com:18080/
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            An HTML5 cross-origin resource sharing (CORS) policy controls
            whether and how content running on other domains can perform two-way
            interaction with the domain that publishes the policy. The policy is
            finegrained and can apply access controls per-request based on the
            URL and other features of the request.
          </p>
          <p>
            Trusting arbitrary origins effectively disables the same-origin
            policy, allowing two-way interaction by thirdparty web sites. Unless
            the response consists only of unprotected public content, this
            policy is likely to present a security risk.
          </p>
          <p>
            If the site specifies the header Access-Control-Allow-Credentials:
            true, third-party sites may be able to carry out privileged actions
            and retrieve sensitive information. Even if it does not, attackers
            may be able to bypass any IP-based access controls by proxying
            through users&apos; browsers.
          </p>
          <p>
            The following pictures show that the applications accepted an
            arbitrary origin:
          </p>
          <ul>
            <li>testbe.bangdb.com:18080</li>
            <Image
              width="930"
              height="580"
              src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a2-testbe.png"
              alt="Pen test A2 testbe"
            />
            <li>testbrs.bangdb.com</li>
            <Image
              width="903"
              height="565"
              src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a2-testbrs.png"
              alt="Pen test A2 testbrs"
            />
            <li>testtrain.bangdb.com</li>
            <Image
              width="924"
              height="580"
              src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a2-testtrain.png"
              alt="Pen test A2 testtrain"
            />
            <li>testuser.bangdb.com</li>
            <Image
              width="948"
              height="529"
              src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a2-testuser.png"
              alt="Pen test A2 testuser"
            />
          </ul>
          <aside className="doc-note">
            <strong>Recommendation: </strong>
            <p>
              Rather than using a wildcard or programmatically verifying
              supplied origins, use a whitelist of trusted domains.
            </p>
            <p>Avoid whitelisting &quot;null&quot; value.</p>
          </aside>
          <h5>Reference:</h5>
          <p>
            Cross-origin resource sharing (CORS) <br />
            <Link
              className="external"
              target="_blank"
              href="https://portswigger.net/web-security/cors"
            >
              https://portswigger.net/web-security/cors
            </Link>
          </p>
          <p>
            Exploiting CORS misconfigurations for Bitcoins and bounties <br />
            <Link
              className="external"
              target="_blank"
              href="https://portswigger.net/research/exploitingcors-misconfigurations-for-bitcoins-and-bounties"
            >
              https://portswigger.net/research/exploitingcors-misconfigurations-for-bitcoins-and-bounties
            </Link>
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>
                      A3 API Key Stored in Session Storage
                    </h3>
                  </th>
                  <th style={{ backgroundColor: "#b8cce4" }}>
                    <h3 style={{ margin: "0" }}>Low</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 3.7
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>https://testamp.bangdb.com/</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            Most people tend to store API key in the session storage of the web
            browser. This tactic leaves applications open to an attack called
            Cross-site Scripting (XSS). So, for example, if the attacker can
            find a way to inject maliciously JavaScript code inside the
            applications via XSS attack, the API key is immediately accessible
            and sent to the attacker&apos;s machine.
          </p>
          <p>
            The following picture shows the API key was stored in web
            browser&apos;s session storage.
          </p>
          <Image
            width="958"
            height="618"
            src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a3.png"
            alt="Pen test A3 testamp"
          />
          <aside className="doc-note">
            <strong>Recommendation:</strong>
            <p>Store the API key in cookies.</p>
            <p>
              Ensure that HTTPOnly and Secure flags are set for sensitive
              cookies.
            </p>
          </aside>
          <h5>Reference</h5>
          <p>
            JWT authentication: Best practices and when to use it{" "}
            <Link
              className="external"
              target="_blank"
              href="https://blog.logrocket.com/jwt-authenticationbest-practices/"
            >
              https://blog.logrocket.com/jwt-authenticationbest-practices/
            </Link>
          </p>
          <p>
            How to securely store JWT tokens.{" "}
            <Link
              className="external"
              target="_blank"
              href="https://dev.to/gkoniaris/how-to-securely-store-jwt-tokens-51cf"
            >
              https://dev.to/gkoniaris/how-to-securely-store-jwt-tokens-51cf
            </Link>
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>
                      A4 Clickjacking: X-Frame-Options Header Missing
                    </h3>
                  </th>
                  <th style={{ backgroundColor: "#b8cce4" }}>
                    <h3 style={{ margin: "0" }}>Low</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 3.1
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>https://testamp.bangdb.com/</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            Clickjacking (User Interface redress attack, UI redress attack, UI
            redressing) is a malicious technique of tricking a Web user into
            clicking on something different from what the user perceives they
            are clicking on, thus potentially revealing confidential information
            or taking control of their computer while clicking on seemingly
            innocuous web pages.
          </p>
          <p>
            The server did not return an X-Frame-Options header which means that
            this website could be at risk of a clickjacking attack.
          </p>
          <p>
            The following picture shows that the X-Frame-Options header was not
            present in the response:
          </p>
          <Image
            width="970"
            height="337"
            src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a4.png"
            alt="Pen test A4"
          />
          <aside className="doc-note">
            <strong>Recommendation: </strong>
            <p>
              The X-Frame-Options HTTP response header can be used to indicate
              whether or not a browser should be allowed to render a page inside
              a frame or iframe. Sites can use this to avoid clickjacking
              attacks, by ensuring that their content is not embedded into other
              sites.
            </p>
            <p>
              Configure all pages of the web server to include an
              X-Frame-Options header. Consult Web references for more
              information about the possible values for this header.
            </p>
          </aside>
          <h5>Reference:</h5>
          <p>
            CWE-1021: Improper Restriction of Rendered UI Layers or Frames{" "}
            <br />
            <Link
              className="external"
              target="_blank"
              href="https://cwe.mitre.org/data/definitions/1021.html"
            >
              https://cwe.mitre.org/data/definitions/1021.html
            </Link>
          </p>
          <p>
            Clickjacking Defense <br />
            <Link
              className="external"
              target="_blank"
              href="https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html"
            >
              https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html
            </Link>
          </p>
          <p>
            Clickjacking <br />{" "}
            <Link
              className="external"
              target="_blank"
              href="http://en.wikipedia.org/wiki/Clickjacking"
            >
              http://en.wikipedia.org/wiki/Clickjacking
            </Link>
          </p>
          <p>
            The X-Frame-Options response header <br />
            <Link
              className="external"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options"
            >
              https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options
            </Link>
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>
                      A5 Missing X-Content-Type-Options Header
                    </h3>
                  </th>
                  <th style={{ backgroundColor: "#b8cce4" }}>
                    <h3 style={{ margin: "0" }}>Low</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 3.1
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>https://testamp.bangdb.com/</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            The HTTP X-Content-Type-Options response header prevents the browser
            from MIME-sniffing a response away from the declared content-type.
          </p>
          <p>
            The server did not return a correct
            &quot;X-Content-Type-Options&quot; header, which means that this
            website could be at risk of a Cross-Site Scripting (XSS) attack.
          </p>
          <p>
            The following picture shows that the X-Content-Type-Options header
            was not present in the response:
          </p>
          <Image
            width="975"
            height="334"
            src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a5.png"
            alt="Pen test A5"
          />
          <aside className="doc-note">
            <strong>Recommendation: </strong>Configure the web server to include
            an &quot;X-Content-Type-Options&quot; header with a value of
            &quot;nosniff&quot;.
          </aside>
          <h5>Reference:</h5>
          <p>
            X-Content-Type-Options <br />{" "}
            <Link
              className="external"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-TypeOptions"
            >
              https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-TypeOptions
            </Link>
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>
                      A6 Strict Transport Security Not Enforced
                    </h3>
                  </th>
                  <th style={{ backgroundColor: "#b8cce4" }}>
                    <h3 style={{ margin: "0" }}>Low</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 2.6
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:A/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>https://testamp.bangdb.com/</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            The application fails to prevent users from connecting to it over
            unencrypted connections. An attacker able to modify a legitimate
            user&apos;s network traffic could bypass the application&apos;s use
            of SSL/TLS encryption, and use the application as a platform for
            attacks against its users. This attack is performed by rewriting
            HTTPS links as HTTP, so that if a targeted user follows a link to
            the site from an HTTP page, their browser never attempts to use an
            encrypted connection. The sslstrip tool automates this process.
          </p>
          <p>
            To exploit this vulnerability, an attacker must be suitably
            positioned to intercept and modify the victim&apos;s network
            traffic. This scenario typically occurs when a client communicates
            with the server over an insecure connection, or a corporate or home
            network that is shared with a compromised computer. Common defenses
            such as switched networks are not sufficient to prevent this. An
            attacker situated in the user&apos;s ISP or the application&apos;s
            hosting infrastructure could also perform this attack. Note that an
            advanced adversary could potentially target any connection made over
            the Internet&apos;s core infrastructure.
          </p>
          <p>
            The following picture shows that the Strict-Transport-Security
            header was not present in the response:
          </p>
          <Image
            width="964"
            height="331"
            src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a6.png"
            alt="Pen test A6"
          />
          <aside className="doc-note">
            <strong>Recommendation: </strong>
            <p>
              Enable HTTP Strict Transport Security (HSTS) by adding a response
              header with the name &apos;Strict-TransportSecurity&apos; and the
              value &apos;max-age=expireTime&apos;, where expireTime is the time
              in seconds that browsers should remember that the site should only
              be accessed using HTTPS. Consider adding the
              &apos;includeSubDomains&apos; flag if appropriate.
            </p>
            <p>
              Note that because HSTS is a “trust on first use” (TOFU) protocol,
              a user who has never accessed the application will never have seen
              the HSTS header and will therefore still be vulnerable to SSL
              stripping attacks. To mitigate this risk, optionally add the
              &apos;preload&apos; flag to the HSTS header and submit the domain
              for review by browser vendors.
            </p>
          </aside>
          <h5>Reference:</h5>
          <p>
            HTTP Strict Transport Security{" "}
            <Link
              className="external"
              target="_blank"
              href="https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security"
            >
              https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
            </Link>
          </p>
          <p>
            HSTS Preload Form
            <Link
              className="external"
              target="_blank"
              href="https://hstspreload.org/"
            >
              https://hstspreload.org/
            </Link>
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>
                      A7 Content Security Policy (CSP) Not Implemented
                    </h3>
                  </th>
                  <th style={{ backgroundColor: "#bfbfbf" }}>
                    <h3 style={{ margin: "0" }}>Informational</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 0.0
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>https://testamp.bangdb.com/</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            Content Security Policy (CSP) is an added layer of security that
            helps to detect and mitigate certain types of attacks, including
            Cross Site Scripting (XSS) and data injection attacks.
          </p>
          <p>
            It was detected that the web application did not implement Content
            Security Policy (CSP) as the CSP header is missing from the
            response.
          </p>
          <p>
            The following picture shows that the Content-Security-Policy header
            was not present in the response:
          </p>
          <Image
            width="967"
            height="325"
            src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a7.png"
            alt="Pen test A7"
          />
          <aside className="doc-note">
            <strong>Recommendation:</strong>
            <p>
              It is recommended to implement Content Security Policy (CSP) into
              the web application. Configuring Content Security Policy involves
              adding the Content-Security-Policy HTTP header to a web page and
              giving it values to control resources the user agent is allowed to
              load for that page.
            </p>
          </aside>
          <h5>Reference:</h5>
          <p>
            Content Security Policy (CSP) Not Implemented <br />
            <Link
              className="external"
              target="_blank"
              href="https://www.netsparker.com/web-vulnerabilityscanner/vulnerabilities/content-security-policy-csp-not-implemented/"
            >
              https://www.netsparker.com/web-vulnerabilityscanner/vulnerabilities/content-security-policy-csp-not-implemented/
            </Link>
          </p>
          <p>
            Content Security Policy (CSP)
            <br />
            <Link
              className="external"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
            >
              https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
            </Link>
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>
                      A8 Referrer Policy Header Missing
                    </h3>
                  </th>
                  <th style={{ backgroundColor: "#bfbfbf" }}>
                    <h3 style={{ margin: "0" }}>Informational</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 0.0
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>https://testamp.bangdb.com/</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            Referrer Policy controls behaviour of the Referrer header, which
            indicates the origin or web page URL the request was made from.
            There was no Referrer Policy header that may leak user&apos;s
            information to thirdparty sites.
          </p>
          <p>
            The following picture shows that the Referrer-Policy header was not
            present in the response:
          </p>
          <Image
            width="964"
            height="328"
            src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a8.png"
            alt="Pen test A8"
          />
          <aside className="doc-note">
            <strong>Recommendation:</strong>
            <p>
              Consider setting Referrer-Policy header to
              &apos;strict-origin-when-cross-origin&apos; or a stricter value.
            </p>
          </aside>
          <h5>Reference:</h5>
          <p>
            Referrer-Policy
            <br />
            <Link
              className="external"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy"
            >
              https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
            </Link>
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>
                      A9 X-XSS-Protection Header Missing
                    </h3>
                  </th>
                  <th style={{ backgroundColor: "#bfbfbf" }}>
                    <h3 style={{ margin: "0" }}>Informational</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 0.0
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>https://testamp.bangdb.com/</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            The HTTP X-XSS-Protection response header is a feature of modern
            browsers that allows websites to control their XSS auditors.
          </p>
          <p>
            The server is not configured to return a X-XSS-Protection header
            which means that any pages on this website could be at risk of a
            Cross-Site Scripting (XSS) attack. This URL is flagged as a specific
            example.
          </p>
          <p>
            The following picture shows that the X-XSS-Protection header was not
            present in the response:
          </p>
          <Image
            width="967"
            height="334"
            src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a9.png"
            alt="Pen test A9"
          />
          <aside className="doc-note">
            <strong>Recommendation:</strong>
            <p>
              Configure the application to include an
              &quot;X-XSS-Protection&quot; header with a value of &quot;1;
              mode=block&quot; on all pages
            </p>
          </aside>
          <h5>Reference:</h5>
          <p>
            X-XSS-Protection
            <br />
            <Link
              className="external"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection"
            >
              https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
            </Link>
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 style={{ margin: "0" }}>
                      A10 Password Field with Autocomplete Enabled
                    </h3>
                  </th>
                  <th style={{ backgroundColor: "#bfbfbf" }}>
                    <h3 style={{ margin: "0" }}>Informational</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <strong>CVSS v3.1 Base Score:</strong> 0.0
                  </td>
                  <td>
                    <strong>Vector String:</strong>{" "}
                    CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:N/I:N/A:N
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Host/URL:</strong>
                  </td>
                  <td>https://testamp.bangdb.com/login</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5>Issue Description:</h5>
          <p>
            Most browsers have a facility to remember user credentials that are
            entered into HTML forms. This function can be configured by the user
            and also by applications that employ user credentials. If the
            function is enabled, then credentials entered by the user are stored
            on their local computer and retrieved by the browser on future
            visits to the same application.
          </p>
          <p>
            The stored credentials can be captured by an attacker who gains
            control over the user&apos;s computer. Further, an attacker who
            finds a separate application vulnerability such as cross-site
            scripting may be able to exploit this to retrieve a user&apos;s
            browser-stored credentials.
          </p>
          <p>
            The following picture shows that the autocomplete attribute was not
            included in the HTML source code.
          </p>
          <Image
            width="957"
            height="553"
            src="https://bangdb.com/wp-content/uploads/2023/01/pen-test-a10.png"
            alt="Pen test A10"
          />
          <aside className="doc-note">
            <strong>Recommendation:</strong>
            <p>
              To prevent browsers from storing credentials entered into HTML
              forms, include the attribute <code>autocomplete="off"</code>{" "}
              within the FORM tag (to protect all form fields) or within the
              relevant INPUT tags (to protect specific individual fields).
            </p>
            <p>
              Please note that modern web browsers may ignore this directive. In
              spite of this there is a chance that not disabling autocomplete
              may cause problems obtaining PCI compliance.
            </p>
          </aside>
          <h5>Reference:</h5>
          <p>
            CWE-200: Exposure of Sensitive Information to an Unauthorized Actor
            <br />
            <Link
              className="external"
              target="_blank"
              href="https://cwe.mitre.org/data/definitions/200.html"
            >
              https://cwe.mitre.org/data/definitions/200.html
            </Link>
          </p>
          <h2>Appendix</h2>
          <h3>Tools List</h3>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>TOOLS USED</th>
                  <th>DESCRIPTION</th>
                </tr>
                <tr>
                  <td>
                    <strong>KALI LINUX</strong>
                  </td>
                  <td>
                    Pentest-focussed Linux distribution <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://www.kali.org/"
                    >
                      https://www.kali.org/
                    </Link>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>NMAP</strong>
                  </td>
                  <td>
                    Open source port scanner <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://npmap.org/"
                    >
                      https://nmap.org/
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>ACUNETIX</strong>
                  </td>
                  <td>
                    Web Vulnerability Scanner <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://www.acunetix.com/vulnerability-scanner/"
                    >
                      https://www.acunetix.com/vulnerability-scanner/
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>OWASP ZAP</strong>
                  </td>
                  <td>
                    Web Vulnerability Scanner <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://www.zaproxy.org/"
                    >
                      https://www.zaproxy.org/
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>NESSUS</strong>
                  </td>
                  <td>
                    Vulnerability scanning tool <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://www.tenable.com/products/nessus/nessus-professional"
                    >
                      https://www.tenable.com/products/nessus/nessus-professional
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>BURP SUITE PRO</strong>
                  </td>
                  <td>
                    Intercepting proxy and web application scanner <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://portswigger.net/"
                    >
                      https://portswigger.net/
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>METASPLOIT FRAMEWORK</strong>
                  </td>
                  <td>
                    Exploit development and penetration testing framework <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="http://www.metasploit.com/"
                    >
                      http://www.metasploit.com/
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>FEROXBUSTER</strong>
                  </td>
                  <td>
                    Web content scanner <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://www.kali.org/tools/feroxbuster/"
                    >
                      https://www.kali.org/tools/feroxbuster/
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>NIKTO</strong>
                  </td>
                  <td>
                    Web server scanner <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://tools.kali.org/information-gathering/nikto"
                    >
                      https://tools.kali.org/information-gathering/nikto
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>SSLSCAN</strong>
                  </td>
                  <td>
                    TLS/SSL scanner <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://github.com/rbsec/sslscan"
                    >
                      https://github.com/rbsec/sslscan
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Firefox</strong>
                  </td>
                  <td>
                    Web browser <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://www.mozilla.org/en-US/firefox/"
                    >
                      https://www.mozilla.org/en-US/firefox/
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Chrome</strong>
                  </td>
                  <td>
                    Web browser <br />
                    <Link
                      className="external"
                      target="_blank"
                      href="https://www.google.com/chrome/"
                    >
                      https://www.google.com/chrome/
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
