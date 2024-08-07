import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Codebox from "../../../../../components/Codebox";

export default function SnmpMonitoring() {
  return (
    <React.Fragment>
      <Head>
        <title>Setup configuration for SNMP</title>
        <meta
          h2
          name="description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Motivation - Why BangDB?" />
        <meta
          property="og:description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Motivation - Why BangDB?" />
        <meta
          name="twitter:description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Introduction" url="/bangdb-introduction" />
              <h1 className="article-title">Setup configuration for SNMP</h1>
              <div className="article-body">
                <h2>How to setup monitoring using BangDB for SNMP V3</h2>
                <h3>RedHat / CentOS</h3>
                <ol>
                  <li>Install RPM</li>
                  <Codebox
                    language="cpp"
                    code={`// For RedHat
sudo yum install net-snmp-utils net-snmp

// For CentOS
yum install net-snmp-utils net-snmp-libs`}
                  />
                  {/* <aside className="doc-note">
                    <strong>NOTE: </strong>
                    for CentOS{" : "}
                    <code>yum install net-snmp-utils net-snmp-libs</code>
                    </aside> */}
                  <li>Open Port 161</li>
                  <p>Ensure that port 161 is open and snmp service is added.</p>
                  <Codebox
                    language="cpp"
                    code={`sudo firewall-cmd --zone=public --add-service snmp`}
                  />
                  <li>Stop snmpd service</li>
                  <Codebox language="cpp" code={`sudo service snmpd stop`} />
                  <li>Create snmp v3 user</li>
                  <Codebox
                    language="cpp"
                    code={`sudo net-snmp-create-v3-user -ro -A myauthpass -X myprivpass -a SHA -x AES bangdbuser`}
                  />
                  <aside className="doc-note">
                    <strong>NOTE: </strong>
                    The command is like following : <br />
                    <br />
                    <code>
                      net-snmp-create-v3-user [-ro] [-A authpass] [-X privpass]
                      [-a MD5|SHA] [-x DES|AES] [username]
                    </code>
                  </aside>
                  <li>Start the service</li>
                  <Codebox
                    language="json"
                    code={`sudo service snmpd start

// Or you may use these as well
sudo systemctl restart snmpd
sudo systemctl enable snmpd`}
                  />
                  <li>Test locally</li>
                  <Codebox
                    language="json"
                    code={`snmpwalk -v3 -u bangdbuser -A myauthpass -a SHA -X myprivpass -x AES -l authPriv 127.0.0.1`}
                  />
                  <li>Test remotely</li>
                  <p>
                    Now using the right IP address of the server where we just
                    configured the snmp, if you get Timeout then it means the
                    port 161 is not open.
                  </p>
                  <Codebox
                    language="json"
                    code={`snmpwalk -v3 -u bangdbuser -A myauthpass -a SHA -X myprivpass -x AES -l authPriv 34.12.34.98`}
                  />
                </ol>

                <h3>Ubuntu / Debian </h3>

                <ol>
                  <li>Install libraries</li>
                  <Codebox
                    language="cpp"
                    code={`sudo apt-get install snmp snmpd libsnmp-dev`}
                  />
                  <li>Stop the services</li>
                  <Codebox language="cpp" code={`sudo service snmpd stop`} />
                  <li>Add v3 user</li>
                  <Codebox
                    language="cpp"
                    code={`sudo net-snmp-create-v3-user -ro -A myauthpass -X myprivpass -a SHA -x AES bangdbuser`}
                  />
                  <aside className="doc-note">
                    <strong>NOTE: </strong>
                    The command is like following : <br />
                    <br />
                    <code>
                      sudo net-snmp-create-v3-user -ro -A myauthpass -X
                      myprivpass -a SHA -x AES bangdbuser
                    </code>
                  </aside>
                  <p>
                    Edit the file /etc/snmp/snmpd.conf and comment out as shown,
                    then add the line as highlighted below
                  </p>
                  <Codebox
                    language="json"
                    code={`sudo vim /etc/snmp/snmpd.conf

#  Listen for connections from the local system only - COMMENT THIS
   agentAddress  udp:127.0.0.1:161

#  Listen for connections on all interfaces (both IPv4 *and* IPv6)
   agentAddress udp:161,udp6:[::1]:161,tcp:161,tcp6:[::1]:161`}
                  />
                  <li>Install necessary MIBs</li>
                  <Codebox
                    language="json"
                    code={`sudo apt-get install snmp-mibs-downloader
sudo download-mibs
sudo sed -i 's/mibs :/# mibs :/g' /etc/snmp/snmp.conf`}
                  />
                  <p>
                    Edit the snmpd.conf file and add following [ sudo vim /e
                    etc/snmp/snmpd.conf] includeAllDisks 10% for all partitions
                    and disks
                  </p>

                  <li>Start the service</li>
                  <Codebox
                    language="json"
                    code={`sudo service snmpd start

# Or you may use these as well

sudo systemctl restart snmpd
sudo systemctl enable snmpd`}
                  />

                  <li>Test locally</li>
                  <Codebox
                    language="json"
                    code={`snmpwalk -v3 -u bangdbuser -A myauthpass -a SHA -X myprivpass -x AES -l authPriv 127.0.0.1`}
                  />
                  <li>Test remotely</li>
                  <p>
                    Now using the right IP address of the server where we just
                    configured the snmp, if you get Timeout then it means the
                    port 161 is not open
                  </p>
                  <Codebox
                    language="json"
                    code={`snmpwalk -v3 -u bangdbuser -A myauthpass -a SHA -X myprivpass -x AES -l authPriv 34.12.34.98`}
                  />
                </ol>

                <h2>How to setup monitoring using BangDB for SNMP V1/2</h2>

                <h3>RedHat/ CentOS</h3>

                <ol>
                  <li>Install snmp</li>
                  <Codebox
                    language="cpp"
                    code={`// For RedHat
sudo yum install net-snmp-utils net-snmp

// For CentOS
yum install net-snmp-utils net-snmp-libs`}
                  />

                  <p>
                    Edit the /etc/snmp/snmpd.conf and add following
                    <Codebox language="cpp" code={`rocommunity bangdb`} />
                    <aside className="doc-note">
                      <strong>NOTE: </strong>
                      Save your existing file as backup
                    </aside>
                    <Codebox
                      language="cpp"
                      code={`mv /etc/snmp/snmpd.conf /etc/snmp/snmpd.conf.old`}
                    />
                    <aside className="doc-note">
                      <strong>NOTE: </strong>
                      The format is like this
                    </aside>
                    <Codebox
                      language="cpp"
                      code={`rocommunity <CommunityString>`}
                    />
                  </p>

                  <li>Start the service</li>
                  <Codebox
                    language="json"
                    code={`sudo service snmpd start

# Or you may use these as well

sudo systemctl restart snmpd
sudo systemctl enable snmpd`}
                  />
                </ol>

                <h3>Ubuntu / Debian </h3>

                <ol>
                  <li>Install snmp</li>
                  <Codebox language="cpp" code={`sudo apt-get install snmpd`} />

                  <p>
                    Edit the /etc/snmp/snmpd.conf and add following
                    <Codebox language="cpp" code={`rocommunity bangdb`} />
                    <aside className="doc-note">
                      <strong>NOTE: </strong>
                      Save your existing file as backup
                    </aside>
                    <Codebox
                      language="cpp"
                      code={`mv /etc/snmp/snmpd.conf /etc/snmp/snmpd.conf.old`}
                    />
                    <aside className="doc-note">
                      <strong>NOTE: </strong>
                      The format is like this
                    </aside>
                    <Codebox
                      language="cpp"
                      code={`rocommunity <CommunityString>`}
                    />
                  </p>

                  <li>Edit the snmpd file and do following :</li>
                  <p>Comment out following line or similar</p>
                  <Codebox
                    language="cpp"
                    code={`SNMPDOPTS='-Lsd -Lf /dev/null -u snmp -p /var/run/snmpd.pid'`}
                  />
                  <p>Add the following like</p>
                  <Codebox
                    language="cpp"
                    code={`SNMPDOPTS='-Lsd -Lf /dev/null -u snmp -I -smux -p /var/run/snmpd.pid -c /etc/snmp/snmpd.conf'`}
                  />

                  <li>Install necessary MIBs</li>
                  <Codebox
                    language="json"
                    code={`sudo apt-get install snmp-mibs-downloader
sudo download-mibs
sudo sed -i 's/mibs :/# mibs :/g' /etc/snmp/snmp.conf`}
                  />

                  <p>Edit snmpd.conf file and add</p>

                  <Codebox
                    language="json"
                    code={`includeAllDisks 10% for all partitions and disks`}
                  />

                  <li>Start the service</li>
                  <Codebox
                    language="json"
                    code={`sudo service snmpd start

# Or you may use these as well

sudo systemctl restart snmpd
sudo systemctl enable snmpd`}
                  />

                  <aside className="doc-note">
                    <strong>NOTE: </strong>

                    <ol style={{ listStyleType: "lower-alpha" }}>
                      <li>
                        Note that we have used 161 as default port, you can add
                        or use another port if needed.
                      </li>
                      <li>Ensure that the port is open for your machine</li>
                    </ol>
                  </aside>
                </ol>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { app_mon_sidebar: true },
  };
}
