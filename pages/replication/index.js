import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import DocArticle from "../../components/DocArticle";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import HighlightedOutput from "../../components/HighlightedOutput";

export default function Replication() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Replication in BangDB</title>
        <meta
          name="description"
          content="BangDB replication can be set using few configs provided in bangdb.config or in CLI arguments. Based on these BangDB sets itself to run in replicated mode as configured or expected."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Replication in BangDB" />
        <meta
          property="og:description"
          content="BangDB replication can be set using few configs provided in bangdb.config or in CLI arguments. Based on these BangDB sets itself to run in replicated mode as configured or expected."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Replication in BangDB" />
        <meta
          name="twitter:description"
          content="BangDB replication can be set using few configs provided in bangdb.config or in CLI arguments. Based on these BangDB sets itself to run in replicated mode as configured or expected."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Replication</h1>
        <div className="article-body">
          <p>
            BangDB replication can be set using few configs, provided in
            bangdb.config or in command line arguments. Based on these config,
            BangDB sets itself to run in replicated mode as configured or
            expected. Following different modes are required for BangDB to
            achieve this:
          </p>
          <ol>
            <li>Master</li>
            <li>Slave</li>
          </ol>
          <p>
            There could be only single Master node that can be there in any
            cluster, and the maximum numbers of slaves can be as configured
            (default is 4).
          </p>
          <h2>Configurations using bangdb.config file</h2>
          <p>
            Edit the bangdb.config file and set following params as per your
            environment variables.
          </p>
          <h3>For Master</h3>
          <HighlightedCpp
            code={`SERVER_TYPE = 0
ENABLE_REPLICATION = 1
SERVER_ID = 0.0.0.0
SERVER_PUBLIC_IP = <public ip="" of="" the="" server="">
SERV_PORT = 10101 // change it based on the port num you use for master`}
          />
          <h3>For Slave</h3>
          <HighlightedCpp
            code={`SERVER_TYPE = 1
ENABLE_REPLICATION = 1
SERVER_ID = 0.0.0.0
SERVER_PUBLIC_IP = <public ip="" of="" the="" server="">
SERV_PORT = 10101 // change it based on the port num you use for slave
MASTER_SERVER_ID = <public ip="" of="" master="">
MASTER_SERV_PORT = <port of="" master="">   `}
          />
          <h2>Configurations using command line argument</h2>
          <h3>For Master</h3>
          <HighlightedCpp
            code={`./bangdb-server-2.0 -r yes -i master -p <public_ip>`}
          />
          <h3>For Slave</h3>
          <HighlightedCpp
            code={`./bangdb-server-2.0 -r yes -i slave -p <public_ip> -m <master_public_ip>:<master_port>`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>If you wish to run in tcp + http mode, add{" "}
            <strong>&quot;-c hybrid -w 18080&quot;</strong> to the command line
            for both master and slave.
          </aside>
          <h2>Failover</h2>
          <p>We can set up failover in two ways as following:</p>
          <ol style={{ listStyle: "upper-alpha" }}>
            <li>
              <strong>Auto Failover</strong>
            </li>
            <p>
              This can be enabled by setting following config param to 1 in the
              bangdb.config file.
            </p>
            <HighlightedCpp
              code={`AUTO_SWITCH_OVER = 1
// Or by adding "-a yes" to the command line argument`}
            />
            <aside className="doc-note">
              <strong>Note: </strong>This uses DB default logic to switch slave
              to a master in automated manner when slave sees that master is not
              available for N pings with a gap of M sec. Here N and M are config
              params in bangdb.config file, PING_THRESHOLD and PING_FREQ
              respectively. Default values are 10 each, which means, 10 failed
              pings with a gap of 10 seconds.
            </aside>
            <p>The Auto switch has two options:</p>
            <ol>
              <li>Conservative</li>
              <p>
                When slaves see that the master is no longer available, all the
                slaves will turn themselves to master. It will be then upto the
                user to switch all other master (except one) to the slave of the
                remaining master. Basically, user will have to pick one master
                from the other masters and make all other masters slaves to this
                newly picked master.
              </p>
              <p>
                This approach is very conservative and tries to maximize the
                chances of finding another master as soon as possible. However,
                there is a manual work involved in turning other masters to the
                slaves of the new master. This is default method if
                AUTO_SWITCH_OVER is defined with all slaves have SLAVE_ID=1
              </p>
              <li>Optimistic</li>
              <p>
                When slaves see that master is no longer available, the slave
                with SLAVE_ID = 1, becomes the new master. All other slaves then
                switch themselves to this new master automatically. If the
                remaining slaves for some reason (either when new master is
                again unavailable or slaves are unable to connect to the new
                master) find the new master unreachable, then they turn
                themselves to masters.
              </p>
              <p>This is how we enable this scenario.</p>
              <p>Let&apos;s say we have one master and two slaves.</p>
              <p>
                Then for slave 1 (192.168.1.107, 10101), set following in
                bangdb.config
              </p>
              <HighlightedCpp code={`SLAVE_ID = 1`} />
              <p>For slave 2 (192.168.1.105, 10101)</p>
              <HighlightedCpp
                code={`SLAVE_ID = 2 
SLAVE_1_IP = 192.168.1.107 
SLAVE_1_PORT = 10101`}
              />
              <p>
                That&apos;s it! Now run the master and slaves, try to remove
                master and following will happen.
              </p>
              <ol>
                <li>Slaves 1 and 2 will note that master is not available</li>
                <li>
                  Both slaves will try for PING_THRESHOLD times with PING_FREQ
                  latency
                </li>
                <li>
                  Slave 1 (with SLAVE_ID=1), will become new master, after some
                  time
                </li>
                <li>
                  Slave 2 (with SLAVE_ID=2), will try to check the new master
                  (it will check type also to ensure this is the new master)
                </li>
                <li>
                  Slave 2 may try for few times (PING_THRESHOLD) to contact new
                  master
                </li>
                <li>
                  If Slave 2 is successful in contacting new master and
                  establishing that Slave 1 is the new master, then it will
                  switch itself to a slave of the new master
                </li>
                <li>
                  If Slave 2 is not successful in contacting the new master,
                  then it will turn itself to a new master
                </li>
              </ol>
            </ol>
            <li>
              <strong>Custom failover [ manual or through script]</strong>
            </li>
            <p>
              Many a times, we may need bit complex logic to switch the slave to
              a master or auto failover and developers, devops wish to write
              their own script to manage the logic and then need a command to
              switch the slave to master. In this case, we can use the commands
              available in the CLI (as described below). Here devops would
              typically implement their own script to find out right time to
              switch the slave to a master and then use the command to execute
              this.
            </p>
          </ol>
          <h2>Server Information (Master and Slave)</h2>
          <ol>
            <li>
              <strong>Using Commands</strong>
            </li>
            <p>
              BangDB installs bdbc_s (bdbc for non-ssl) in the /usr/bin folder,
              so this can be used from anywhere.
            </p>
            <p>Ping the local server</p>
            <HighlightedCpp code={`bdbc_s -p ping`} />
            <p>Ping remote server</p>
            <HighlightedCpp code={`bdbc_s  -s <ip>:<port> -p ping`} />
            <p>
              We can run all the commands available in the CLI (discussed
              below), from cmd as well.
            </p>
            <p>
              <code>bdbc_s -c &quot;any commands …&quot;</code>
            </p>
            <li>
              <strong>Using REST API</strong>
            </li>
            <p>Check the server type</p>
            <HighlightedJava code={`GET https://ip:port/server/type`} />
            <p>Returns</p>
            <HighlightedOutput code={`{"type":"master","slaves":2}`} />
            <p>Or</p>
            <HighlightedOutput code={`{"type":"slave"}`} />
            <p>Check if the server is master</p>
            <HighlightedJava code={`GET https://ip:port/server/is_master`} />
            <p>Returns</p>
            <p>HTTP error: 400</p>
            <HighlightedOutput
              code={`{"msg":"request seems to be malformed, may check if requested resource is proper","errcode":400}`}
            />
            <p>Or</p>
            <p>HTTP error: 200</p>
            <HighlightedOutput code={`{"is_master":1}`} />
            <li>
              <strong>Using CLI</strong>
            </li>
            <p>
              We can use CLI to check the information about the servers. CLI can
              also be used to perform some other actions as required from
              sysadmin perspective. Note that all the cli commands are also
              available for bdbc_s command with -c option.
            </p>
            <p>Run the cli, connect it to either master or slave</p>
            <HighlightedCpp
              code={`./bangdb-cli-2.0 -s <server_ip>:<port> 
// here server is to which you wish to connect to`}
            />
            <p>To see help for repl:</p>
            <HighlightedJava code={`help repl`} />
            <HighlightedOutput
              code={`++++++++++++++++++++++++++++++++++++++++++ replication ++++++++++++++++++++++++++
server repl state change command
________________________________
register master where server = ip:port
register slave where server = ip:port and master = ip:port
show servertype
show servertype where server = ip:port`}
            />
            <p>
              etc… please visit <Link href="/">www.bangdb.com/developer</Link>{" "}
              for more info. Check server type
            </p>
            <HighlightedJava code={`show servertype`} />
            <HighlightedOutput
              code={`server [ 192.168.1.107 : 10101 ] is master with num of slaves = 1`}
            />
            <p>
              Check server type for another server (not the one to which cli is
              connected, for ex: some slave)
            </p>
            <HighlightedJava
              code={`show servertype where server = 192.168.1.105:10101`}
            />
            <HighlightedOutput
              code={`server [ 192.168.1.105 : 10101 ] is slave`}
            />
            <p>
              Now switch slave to master. Note this will not affect current
              Master, only switch the slave into a master (another one). In this
              case, the 192.168.1.105:10101 is the slave, so we will switch it
              to master.
            </p>
            <HighlightedJava
              code={`register master where server = 192.168.1.105:10101`}
            />
            <HighlightedOutput
              code={`successful in switching server [ 192.168.1.105 : 10101 ] to a [ master ]`}
            />
            <p>Now again check the server type of older slave (see above)</p>
            <HighlightedJava
              code={`show servertype where server = 192.168.1.105:10101`}
            />
            <HighlightedOutput
              code={`server [ 192.168.1.105 : 10101 ] is master with num of slaves = 0`}
            />
            <aside className="doc-note">
              <strong>Note: </strong>The server type returns that the server is
              now a master with number of slave = 0, which is correct as we
              switched an existing slave to a master. This operation happens
              instantaneously as slave simply sets itself as new master.
              However, switch of master to slave takes some time since the slave
              will try to sync with master before becoming available for
              commands.
            </aside>
            <p>
              If we see the servertype of another master (192.168.1.107:10101),
              we will see that it&apos;s still a master.
            </p>
            <p>
              Now, switch another master (192.168.1.107:10101) to a slave of
              this new master (192.168.1.105:10101)
            </p>
            <HighlightedJava
              code={`register slave where server = 192.168.1.107:10101 and master = 192.168.1.105:10101`}
            />
            <HighlightedOutput
              code={`successful in switching server [ 192.168.1.107 : 10101 ] to a [ slave ]`}
            />
            <p>
              If you see the logs, the new slave is now syncing with the master.
            </p>
            <p>Check the server type of the new slave</p>
            <aside className="doc-note">
              <strong>Note: </strong>Let the sync work finish, the server would
              not respond until slave syncs with the master.
            </aside>
            <HighlightedJava code={`show servertype`} />
            <HighlightedOutput
              code={`server [ 192.168.1.107 : 10101 ] is slave`}
            />
            <p>
              We have totally flipped the master and slave using the above
              commands using CLI.
            </p>
            <aside className="doc-note">
              <strong>Note: </strong>If we wish to move DB to new
              server/machine/bigger or smaller instance etc… we can use these
              commands to do that. Note that user or app operations don&apos;t
              need to stop at all (except the DNS entries changes might be
              required and that take a minute or so, if we use another mapping
              using LB then this will also be quick).
            </aside>
            <p>
              We can use these commands to set up our own mechanism to switch
              the servers depending upon the custom workflow and scenarios.
              Typical ways to do this would be a script which checks the health
              of servers and when it sees master is no longer available, switch
              one of the slaves to master, and switch other slaves to slaves of
              this new master.
            </p>
          </ol>
          <h2>Important Points</h2>
          <ul>
            <li>Start master and then slaves</li>
            <li>
              Two slaves are good enough for most of the cases, however you may
              add more [ MAX_SLAVES controls this]
            </li>
            <li>
              PING_THRESHOLD and PING_FREQ should be kept same for all slaves
              and master [ not mandatory but better]
            </li>
            <li>Set REPLICA_READ_WRITE=0 [ by default it&apos;s 0]</li>
            <li>
              Use cmd [ bdbc_s -p ping] to check health of the server. The
              server responds only when DB is up and ready to accept new
              requests. This is much lighter and faster that REST GET [
              https://ip:port/db or other such APIs] API. The overhead is almost
              10 times less with cmd
            </li>
            <li>
              Try to keep PING_THRESHOLD = 10 or more and PING_FREQ = 10 or more
              [ 10 sec is good]
            </li>
            <li>
              BangDB uses UDP based ping hence it&apos;s very lightweight. Since
              it&apos;s connectionless call, hence PING_THRESHOLD is needed.
              Note that, BangDB will figure out that the master is not available
              only when PING_THRESHOLD times consecutively it fails to get
              response from master
            </li>
            <li>
              For auto failover with “optimistic” approach, SLAVE_ID should
              start with 1 and then 2, etc. Slave with SLAVE_ID=1 will be the
              one who will become master first and other slaves (with
              SLAVE_ID&gt;1) will become the slave of new master (SLAVE_ID=1)
            </li>
            <li>
              Must provide SLAVE_1_IP and SLAVE_1_PORT for all the slaves with
              SLAVE_ID&gt;1. SLAVE_1_IP and SLAVE_1_PORT are ip and port for
              slave with SLAVE_ID=1
            </li>
          </ul>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
