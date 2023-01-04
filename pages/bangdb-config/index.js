import React, { useState, forwardRef } from "react";
import Head from "next/head";
import Link from "next/link";
import DocArticle from "../../components/DocArticle";
import Codebox from "../../components/Codebox";
import CodeboxOutput from "../../components/CodeboxOutput";

export default function BangdbConfig() {
  const confCode = String.raw`Usage:
-i [master | slave] 
-r [yes | no] 
-t [yes | no] 
-d [dbname] 
-s [IP:PORT] 
-m [IP:PORT] 
-p [IP] 
-b [yes | no] 
-c [tcp | http | hybrid] 
-w [HTTP_PORT] -v


Options:
 -i: defines the server's identity [master | slave], default is SERVER_TYPE (master) as defined in bangdb.config
 -r: defines replication state [yes | no], default is ENABLE_REPLICATION (0) as defined in bangdb.config 
 -t: defines if transaction is enabled(yes) or disabled(no) [yes | no], default is no 
 -d: defines the dbname, default is BANGDB_DATABASE_NAME (mydb) as defined in bangdb.config 
 -s: defines IP:Port of this server, default is SERVER_ID:SERV_PORT as defined in bangdb.config
 -m: defines IP:Port of the master (required only for slave as it declares master with this option)
 -p: defines public IP of the server (required for master and slave to expose their own public IP)
 -b: defines if server to be run in background as daemon, default is foreground
 -c: defines if server runs as tcp server or http (rest) server or both (hybrid), default is tcp server
 -w: defines the http port when server runs in http or hybrid mode default is MASTER_SERVER_ID:MASTER_SERV_PORT as 
 defined in the bangdb.config
 -v: prints the alpha-numeric version of the executable`;

  return (
    <React.Fragment>
      <Head>
        <title>BangDB Config - BangDB</title>
        <meta
          name="description"
          content="BangDB Config - There are several parameters that BangDB exposes for users to configure BangDB for optimal running and performance."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Docker Images - BangDB" />
        <meta
          property="og:description"
          content="BangDB Config - There are several parameters that BangDB exposes for users to configure BangDB for optimal running and performance."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Docker Images - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB Config - There are several parameters that BangDB exposes for users to configure BangDB for optimal running and performance."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <h1 className="article-title">bangdb.config</h1>
        <div className="article-body">
          <h2>Configuration for BangDB</h2>
          <h3>bangdb.config</h3>
          <p>
            There are several parameters that BangDB exposes for users to
            configure the BangDB for optimal and efficient running and
            performance.
          </p>
          <p>
            Let&apos;s first categorise these config params for better
            understanding and then go into each of these. We will provide
            recommendations as well for each of these config params
          </p>
          <ol
            style={{
              listStyle: "lower-alpha",
            }}
          >
            <li>Config that affects execution or running of BangDB</li>
            <li>Config specific when BangDB runs as a server</li>
            <li>AI/ML related server and db config</li>
            <li>Advanced config to tune core of BangDB</li>
          </ol>
          <p>
            Before we cover this in details, it will be good to see what all
            command line arguments that server takes if you run
            bangdb-server-2.0 directly. Here are these configurations; these are
            self explanatory
          </p>
          <CodeboxOutput code={confCode} />
          <p>
            Hence to run master with other values as defined in the
            bangdb.config, issue following command
          </p>
          <Codebox
            code="./bangdb-server -s 192.168.1.5:10101"
            copy="./bangdb-server -s 192.168.1.5:10101"
          />
          <p>
            if we add -c hybrid -w 18080, then it will run the server in hybrid
            (tcp and http(s)) mode with 18080 as http(s) port
          </p>
          <p>To run slave for this master with default other values..</p>
          <Codebox
            code="./bangdb-server -i slave -s 192.168.1.6:10102 -m 192.168.1.5:10101"
            copy="./bangdb-server -i slave -s 192.168.1.6:10102 -m 192.168.1.5:10101"
          />
          <p>etc…</p>
          <p>
            The command line args can only be provided only when you run the
            server directly from the executable, bangdb-server-2.0. If you run
            the BangDB server using the script bangdb-server, then it&apos;s not
            possible to provide these command line args. However, you may set
            all these in the bangdb.config file and then run, using either
            method.
          </p>
          <p>
            Let&apos;s see how these params can be set using the bangdb.config:
          </p>
          <h4>Set master or slave</h4>
          <p>
            SERVER_TYPE is the config param and we can use this to set whether
            this server is master or slave 0 for master, 1 for slave
          </p>
          <h4>Set whether replication is ON or OFF</h4>
          <p>
            ENABLE_REPLICATION is the config param to set it. <br />0 for ON and
            1 for OFF
          </p>
          <h4>Set db name</h4>
          <p>
            BANGDB_DATABASE_NAME is the param. By default it&apos;s always mydb
          </p>
          <h4>Set the (this) server ip and port</h4>
          <p>
            SERVER_ID for IP address, SERV_PORT for port. We can use ip address
            or name of the server SERVER_ID = 127.0.0.1 SERV_PORT = 10101
          </p>
          <h4>Set the master&apos;s ip and port</h4>
          <p>
            This is mainly for slave as it has to know where is the master
            MASTER_SERVER_ID for ip address of master, MASTER_SERV_PORT for port
            of master
          </p>
          <h4>Run the server in the background</h4>
          <p>
            Need to use -b command line argument, can&apos;t set using
            bangdb.config as of now -b yes
          </p>
          <h4>Run the server with transaction</h4>
          <p>
            Need to use -t command line argument, can&apos;t set using
            bangdb.config as of now -t yes
          </p>
          <h3>A. Config that affects BangDB execution</h3>
          <p>
            The following config params are for DB, whether it is run in
            embedded or server manner the param setting is done without using
            any quotes, either for numerical or string values
          </p>
          <h4>SERVER_DIR</h4>
          <p>
            The dir where the db files will be created. Please edit it with
            suitable dir location default is the local dir, note: this can be
            provided as input param while creating a database using{" "}
            <Link href={"/db-param"}>DBParam</Link>
          </p>
          <h4>BANGDB_LOG_DIR</h4>
          <p>
            Log dir. This is where database write ahead log files will be kept.
            Default is local dir note: this can be provided as input param while
            creating a database using DBParam
          </p>
          <h4>BUFF_POOL_SIZE_HINT</h4>
          <p>
            Memory budget for the DB. This is defined in MB and once set, BangDB
            will not use memory more than this. If it&apos;s handling more data
            than the size of the buffer pool, then it will do page flush as
            required for dirty pages etc. BangDB has patent in managing buffer
            pool in a manner which is very efficient and maintains the level of
            performance to acceptable range even in worse conditions and tends
            to degrade gracefully.
          </p>
          <p>
            We should select this properly as it has direct implication on
            performance. Max limit for buffer pool size on a machine is ~13TB
            and min limit is 500MB.
          </p>
          <p>
            Ideal value is of course dependent on the use case, but if it&apos;s
            a dedicated BangDB server then buffer pool should be RAM Size - 3/4
            GB. Therefore, on a 16GB machine, 11/12 GB would be a good number
            etc.
          </p>
          <p>
            BangDB buffer pool is very efficient, performant and implements
            several novel techniques for high performance. BangDB has Patent for{" "}
            <Link
              className="external"
              href={
                "https://ppubs.uspto.gov/pubwebapp/static/pages/landing.html"
              }
            >
              Adaptive prefetching in Buffer Pool
            </Link>{" "}
            And also Patent for{" "}
            <Link
              className="external"
              href={
                "https://ppubs.uspto.gov/pubwebapp/static/pages/landing.html"
              }
            >
              Buffer Pool and Page Cache
            </Link>
          </p>
          <h4>BANGDB_APP_LOG</h4>
          <p>
            When set to 1, then BangDB will do logging using syslog
            (/var/log/syslog file) When inactive(set to 0) then BangDB will
            flush the logs on to standard output(terminal) and when set to 2 it
            will flush to the logfile maintain by the BangDB. The preferred
            value is 2 as BangDB implements high performance logging mechanism
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            User should set it to 2 and DB will keep log files in
            data/dbname.applog. You should tail it for seeing what&apos;s going
            on. The BangDB log analysis can be used to further analyse the logs
            and it will continuously monitor and notify people as needed/set
          </aside>
          <h4>DB_APP_LOG_SIZE_MB</h4>
          <p>
            This sets the size of the applog (when BANGDB_APP_LOG = 2). When the
            file(applog) gets full, it creates another one and keeps rolling.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            After sometime when there are too many such files, users should
            delete older ones. DB doesn&apos;t clean or reclaim these log files
            on its own
          </aside>
          <h4>BANGDB_APP_LOG_LEVEL</h4>
          <p>This sets the log level, following options:</p>
          <aside className="doc-note">
            <strong>Note: </strong>
            Possible values 0: Critical 1: Error 2: Warning 3: Info 4: Debug
          </aside>
          <aside className="doc-note">
            <strong>Note: </strong>
            User should run the production with 2 or 3 (and not with 4). However
            for development and debug, pls set it 4. It requires DB restart
            after setting any param in the config file, hence here too it
            applies
          </aside>
          <h4>BANGDB_DATABASE_NAME</h4>
          <p>
            You may leave it the default val here. Please note, you can always
            pass dbname through command line or using the API
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            BangDB at a time deals with only single db, we may have many tables,
            streams etc. in it
          </aside>
          <h4>CEP_BUFFER_SW_SIZE</h4>
          <p>
            BangDB provides complex event processing support, therefore we can
            look for a given complex pattern on the streaming data. These
            pattern analysis is state based query which runs in a sliding
            window. Most of the CEP out there in the market are in-memory based
            model, this is bit inefficient as if we run few queries over a
            period of time, and number of event ingestion is bit moderately high
            then memory is not sufficient and the system starts dropping events.
            To get rid of this bottleneck, BangDB CEP buffer is backed with a
            table and this table runs in a sliding window. Therefore, this param
            is to set the sliding window size for the buffer table for cep
            related items. Size is defined in time in seconds, default is 86400
            (1 day).
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            Since most of the CEP queries are temporal in nature therefore all
            the queries are limited by this size as the high watermark, which
            means we can’t have more than this size for individual cep queries.
            1 day is too long for most of the queries, therefore we hardly need
            to change this, but it could be changed as needed
          </aside>
          <h4>BANGDB_PERSIST_TYPE</h4>
          <p>
            This is a table config param, it basically tells whether the table
            should be backed by file on the disk or is it going to be in-memory.
            This should be set by using TableEnv type
          </p>
          <h4>BANGDB_INDEX_TYPE</h4>
          <p>
            This is a table config param, it defines the index type (primary key
            arrangement type) for the table. This should be set by using
            TableEnv type
          </p>
          <h4>BANGDB_LOG</h4>
          <p>
            This is to set database log, this is different from app log which is
            basically db debug, error logging.
          </p>
          <p>
            BangDB supports write ahead logging (WAL) for every write
            operations. WAL also ensures atomicity, transaction and durability.
            It furthers allows BangDB to recover from crash in automated manner.
          </p>
          <p>BangDB has Patent for efficient write ahead log</p>
          <h4>LOG_BUF_SIZE</h4>
          <p>
            If BANGDB_LOG is set to be 1 (ON), then we can set the size of the
            log file. This is mmap area and WAL keeps rotating as it gets
            filled.
          </p>
          <p>
            Default value (128MB) is good in most of the cases, however if
            buffer pool size is large (for larger servers) , for ex; 64GB or
            more, then 256MB is better choice for the WAL size.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            WAL is append only log, which ensures the durability of data once
            written even though data is actually not flushed to the file system.
            Further BangDB keeps checkpointing (if ON) and keeps reclaiming the
            logs so that it doesn&apos;t fill the disk on the server
          </aside>
          <h4>DAT_SIZE</h4>
          <p>
            This denotes maximum size of data in KB. This is only true for
            normal key value or document data (for NORMAL and WIDE tables,
            <Link href={"/helper-types-embedded/"}> see here for details</Link>
            ). If the size is less than that of MAX_RESULTSET_SIZE (see below),
            then BangDB sets it to MAX_RESULTSET_SIZE . This can&apos;t be more
            than MAX_RESULTSET_SIZE. However, for larger data (LARGE TABLE), we
            can deal with large data size, for example hundreds or MBs or GBs
            upto 20GB file/data
          </p>
          <h4>KEY_SIZE</h4>
          <p>
            This is again a config param for table and not for db. This sets the
            default value for keysize when not specified using TableEnv. This
            should be set by using TableEnv type
          </p>
          <h4>MAX_RESULTSET_SIZE</h4>
          <p>
            BangDB supports scan method for running range query. These scan
            method returns ResultSet which has list of key/vals/docs as needed
            by the query. MAX_RESULTSET_SIZE defines the max size of such
            resultsets.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            Let&apos;s say there are 1.2GB of data in the db for a particular
            query. Returning all data in a single shot will be very inefficient
            and also unnecessary. Therefore BangDB supports recursive scan and
            keeps returning data until all is served or user decides to not
            fetch more. MAX_RESULTSET_SIZE defines what should be the size of
            data returned in every call.
            <br />
            However, user can still configure each scan using ScanFilter.
            Checkout more on{" "}
            <Link href={"/dataquery/"}>Query and ScanFilter</Link>
          </aside>
          <h4>KEY_COMP_FUNCTION_ID</h4>
          <p>
            Since BangDB arranges keys in order, it uses two key comparison
            methods.
          </p>
          <ol>
            <li>Lexicographical</li>
            <li>Quasi lexicographical</li>
          </ol>
          <p>Default value is 2.</p>
          <h4>BANGDB_AUTOCOMMIT</h4>
          <p>
            When BangDB is run in transaction mode, If auto commit is off(0)
            then explicit transaction is required (begin, commit/abort), else
            implicit non-transactional single op can be run in usual manner
            later this can be set/unset whenever required.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            This is only for single operation. It is important since single
            operation can have multiple sub operations which if not committed in
            an atomic manner, then it may leave DB in an inconsistent state.
            Therefore we should keep it ON (1). Note that, for multi ops
            atomicity, we must use explicit transaction
          </aside>
          <h4>BANGDB_TRANSACTION_CACHE_SIZE</h4>
          <p>
            BangDB supports transaction using Optimistic Concurrency Control
            (OCC). OCC demands size of memory kept aside for transaction related
            operations. BANGDB_TRANSACTION_CACHE_SIZE defines that size in the
            memory.
          </p>
          <p>
            Most of the time, default size is good enough, but if you are going
            to club too many operations in a single transaction then size should
            be increased. Note that BangDB supports many concurrent transactions
            and that has little implications on this size. This is mainly for
            large number of operations in a single transaction
          </p>
          <h4>TEXT_WORD_SIZE</h4>
          <p>
            BangDG supports reverse indexing, hence we need maximum size of a
            token/word. TEXT_WORD_SIZE defines the same. Default is good from
            logical perspective
          </p>
          <h4>MAXTABLE</h4>
          <p>
            BangDB supports several thousands of tables, infact it is only
            limited by the number of open file fds on the system which is only
            1M. But to optimise the running of BangDB, it is good to define this
            reasonably. Default value 16384 is good, however you may increase it
            as needed
          </p>
          <h4>PAGE_SIZE_BANGDB</h4>
          <p>
            BangDB page size can be configured. Default is 16KB which is a good
            fit for most of the scenario, however you may increase or decrease
            as needed.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>Page size is defined per DB, once defined it
            can&apos;t be changed subsequently unless new db is created. Also,
            the page size is always multiple of 8KB
          </aside>
          <h4>MASTER_LOG_BUF_SIZE</h4>
          <p>
            To maintain WAL, DB needs a masterlog for various housekeeping.
            MASTER_LOG_BUF_SIZE is the size of the master log. Default 4MB is
            good for many cases, however if you intend to have DB which will
            have large size (few TBs) then increase the size. Typically for few
            TB of DB size 4 - 16MB is good enough
          </p>
          <h3>B. Config specific when BangDB runs as a server</h3>
          <p>
            Following are the configurations when BangDB runs as server hence,
            these are server specific config params
          </p>
          <h4>SERVER_TYPE</h4>
          <p>
            BangDB when runs a server, then it may run as master or slave.
            SERVER_TYPE defines whether it&apos;s master (0) or slave (1). we
            can pass this as command line arg as well when we run server
            directly.
          </p>
          <Codebox
            code="./bangdb-server-2.0 -i master"
            copy="./bangdb-server-2.0 -i master"
          />
          OR
          <Codebox
            code="./bangdb-server-2.0 -i slave"
            copy="./bangdb-server-2.0 -i slave"
          />
          <p>
            Or we can set the SERVER_TYPE param in the config file for the db,
            this is needed when we run bangdb using the script (bangdb-server)
          </p>
          <h4>ENABLE_REPLICATION</h4>
          <p>
            We can run BangDB Server with replication ON (1) or OFF (0). If OFF
            then slaves can&apos;t be attached. We can do this with command line
            arg as well.
          </p>
          <Codebox
            code="./bangdb-server-2.0 -r yes"
            copy="./bangdb-server-2.0 -r yes"
          />
          OR
          <Codebox
            code="./bangdb-server-2.0 -r no"
            copy="./bangdb-server-2.0 -r no"
          />
          <h4>SERVER_ID</h4>
          <p>
            This sets the ip address or name of the server. We can do this with
            command line arg as well.
          </p>
          <Codebox
            code="./bangdb-server-2.0 -s 127.0.0.1:10101"
            copy="./bangdb-server-2.0 -s 127.0.0.1:10101"
          />
          <h4>SERV_PORT</h4>
          <p>
            This sets the port of the server. We can do this with command line
            arg as well.
          </p>
          <Codebox
            code="./bangdb-server-2.0 -s 127.0.0.1:10101"
            copy="./bangdb-server-2.0 -s 127.0.0.1:10101"
          />
          <h4>MASTER_SERVER_ID</h4>
          <p>
            When a server is slave of another server, then we need to tell this
            server about the master. This tells the server about the ip address
            of the master. We can do this using command line arg as well.
          </p>
          <Codebox
            code="./bangdb-server -m 127.0.0.1:10101"
            copy="./bangdb-server -m 127.0.0.1:10101"
          />
          <h4>MASTER_SERV_PORT</h4>
          <p>
            When a server is slave of another server, then we need to tell this
            server about the master. This tells the server about the port of the
            master. We can do this using command line arg as well.
          </p>
          <Codebox
            code="./bangdb-server -m 127.0.0.1:10101"
            copy="./bangdb-server -m 127.0.0.1:10101"
          />
          <h4>MAX_SLAVES</h4>
          <p>This is for master, to set the limit for number of slaves</p>
          <h4>OPS_REC_BUF_SIZE</h4>
          <p>
            BangDB allows read/write operations to continue even when slave is
            syncing with the server. This happens using the Ops record buffer
            when syncing is in progress with a slave. OPS_REC_BUF_SIZE sets the
            size in MB for the ops record. Default is good for most of the cases
          </p>
          <h4>PING_FREQ</h4>
          <p>
            Master and slaves checks each other liveliness using UDP based ping
            pong. PING_FREQ sets the frequency for the ping pong. Default value
            10 sec is good enough, however you may increase or decrease the
            frequency as needed
          </p>
          <h4>PING_THRESHOLD</h4>
          <p>
            How many pings or pongs to fail before one can conclude that the
            other server is unreachable or down? PING_THRESHOLD defines that.
            Default 5 times in a row is good enough
          </p>
          <h4>CLIENT_TIME_OUT</h4>
          <p>
            All clients connect to the server using tcp. BangDB server handles
            tens of thousands of concurrent number of such connections. However,
            user may define if server can time out some of the connections if no
            requests have been received for some period of time.
          </p>
          <p>
            CLIENT_TIME_OUT defines the same in number of seconds. Default is
            720 seconds
          </p>
          <h4>NUM_CONNECTIONS_IN_POOL</h4>
          <p>
            This is for clients only. It sets the number of connections with the
            server to be in the pool for performance and efficiency purposes.
            Default is 48, however you may increase as you need, no performance
            impact* due to this
          </p>
          <h4>SLAB_ALLOC_MEM_SIZE</h4>
          <p>
            BangDB Server uses pre allocated slabs for run time memory
            requirements. SLAB_ALLOC_MEM_SIZE defines the same in MB. default
            value of 256MB is good enough
          </p>
          <h4>TLS_IDENTITY</h4>
          <p>
            BangDB can run in secure mode as well and clients have to connect
            using the secure channel. TLS_IDENTITY can be set (reset) by the
            user for security purpose
          </p>
          <h4>TLS_PSK_KEY</h4>
          <p>
            BangDB can run in secure mode as well and clients have to connect
            using the secure channel. TLS_PSK_KEY can be set (reset) by the user
            for security purpose
          </p>
          <h4>BANGDB_SYNC_TRAN</h4>
          <p>
            If set then BangDB will sync forcefully with the filesystem after
            flush. Ideally it should be OFF (0), but in case of hard need, you
            may set it ON (1)
          </p>
          <h4>BANGDB_SIGNAL_HANDLER_STATE</h4>
          <p>
            There are various signal handlers set already, but for few extra
            ones, user may add the handlers. Ideally not required, but still
            user may switch them ON
          </p>
          <h4>LISTENQ</h4>
          <p>
            Queue size for the listen() call, default 10000 is quite a good
            number
          </p>
          <h4>MAX_CLIENT_EVENTS</h4>
          <p>
            Maximum number of concurrent connections to the server or num of
            concurrent connections. Server can handle default 10000, but change
            it to less number as suitable.
          </p>
          <p>
            Stage options, basically it tells server to create the number of
            stages to handle the clients and their requests there are two types
            of stages supported as of now
          </p>
          <ol>
            <li>
              two stages, one for handling clients and other for handling the
              requests
            </li>
            <li>
              four stages, one for handling clients, one for read, one for ops
              and finally one for write
            </li>
          </ol>
          <aside className="doc-note">
            <strong>Note: </strong>
            default is option 1 and works well in most of the scenarios
          </aside>
          <h4>SERVER_OPS_WORKERS</h4>
          <p>
            If SERVER_STAGE_OPTION = 2, then this can define how many workers to
            allocate for operations for db. . Default 0 is fine. Default 0
            allows db to select the number of workers best suited for the given
            server configuration.
          </p>
          <h4>SERVER_READ_WORKERS</h4>
          <p>
            If SERVER_STAGE_OPTION = 2, then this can define how many workers to
            allocate for read (network). Default 0 is fine Default 0 allows db
            to select the number of workers best suited for the given server
            configuration.
          </p>
          <h4>SERVER_WRITE_WORKERS</h4>
          <p>
            If SERVER_STAGE_OPTION = 2, then this can define how many workers to
            allocate for write (network). Default 0 is fine Default 0 allows db
            to select the number of workers best suited for the given server
            configuration.
          </p>
          <h4>EXT_PROG_RUN_CHLD_PROCESS</h4>
          <p>
            For IE (information extraction), or ML/DL related activities, BangDB
            may run external code such as python or c. In that case this flag
            tells whether the external libs or code can be run in the same
            process or in separate process for safety purpose.
          </p>
          <p>
            Default is to run in separate process. 0 for run in separate
            process, 1 will allow db to run in same process in case running in
            separate process fails
          </p>
          <h3>C. AI/ML related server and db config</h3>
          <p>
            Checkout this discussion on{" "}
            <Link href={"/ml-commands-cli"}>ML</Link> to know more on this
          </p>
          <h4>BRS_ACCESS_KEY</h4>
          <p>
            BangDB supports large data as well. These large data could be binary
            object data or could be file. While large object data is written
            into LARGE_TABLE, the files are stored in BRS.
          </p>
          <p>
            BRS stands for BangDB Resource Server. BRS is line S3 and supports
            similar concept and API. BangDB can run as BRS or as DB + BRS,
            depending on configuration (as described below).
          </p>
          <p>
            User may create buckets and store files in these buckets. To access
            these buckets user may define the access key using this param. The
            access key could be defined using the request json for creating such
            buckets as well
          </p>
          <h4>BRS_SECRET_KEY</h4>
          <p>
            BangDB supports large data as well. These large data could be binary
            object data or could be file. While large object data is written
            into LARGE_TABLE, the files are stored in BRS. BRS stands for BangDB
            Resource Server. BRS is line S3 and supports similar concept and
            API. BangDB can run as BRS or as DB + BRS, depending on
            configuration (as described below).
          </p>
          <p>
            User may create buckets and store files in these buckets. To access
            these buckets user may define the secret key using this param. The
            secret key could be defined using the request json for creating such
            buckets as well
          </p>
          <h4>BRS_DATABASE_NAME</h4>
          <p>
            When BangDB runs as separate instance as BRS then it can have
            different DB name, whereas if it runs as part of the DB then it
            shares the same name as DB's database
          </p>
          <h4>BRS_SERVER_ID</h4>
          <p>
            When BangDB runs as separate instance as BRS then it has different
            IP, whereas if it runs as part of the DB then it shares the IP as DB
            Using this param you may set the server IP address accordingly
          </p>
          <h4>BRS_SERVER_PORT</h4>
          <p>
            When BangDB runs as separate instance as BRS then it has different
            Port, whereas if it runs as part of the DB then it shares the Port
            as DB. Using this param you may set the server Port accordingly
          </p>
          <h4>BRS_ML_BUCKET_NAME</h4>
          <p>
            This sets the default bucket that's created by the DB at the start,
            you may use this (along with the default access key and secret key)
            to store files in this bucket
          </p>
          <h4>ML_TRAINING_SERVER_IP</h4>
          <p>
            BangDB can run as separate ML training server or as part of the DB
            as well. When it runs as part of the DB then it shares the IP else
            it has it's own IP Using this param, you may set the IP of the
            training server accordingly.
          </p>
          <h4>ML_TRAINING_SERVER_PORT</h4>
          <p>
            BangDB can run as separate ML training server or as part of the DB
            as well. When it runs as part of the DB then it shares the Port else
            it has it's own Port. Using this param, you may set the Port of the
            training server accordingly.
          </p>
          <h4>ML_PRED_SERVER_IP</h4>
          <p>
            BangDB can run as separate ML prediction server or as part of the DB
            as well. When it runs as part of the DB then it shares the IP else
            it has it's own IP Using this param, you may set the IP of the
            prediction server accordingly
          </p>
          <h4>ML_PRED_SERVER_PORT</h4>
          <p>
            BangDB can run as separate ML prediction server or as part of the DB
            as well. When it runs as part of the DB then it shares the Port else
            it has it's own Port. Using this param, you may set the Port of the
            prediction server accordingly.
          </p>
          <h4>BANGDB_ML_SERVER_TYPE</h4>
          <p>
            This is to set up the ML cluster including the BRS. For any server,
            this param defines what type of this server is as far as ML is
            concerned
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            <br />0 - invalid [ default will be used - default is prediction
            server ]<br />1 - Training Server [ no prediction will happen, it's
            a standalone training server ]
            <br />2 - Prediction Server [ no training will happen, only for
            prediction ]<br />3 - Hybrid - both train and predict at a single
            place
          </aside>
          <h4>TRAINING_PREDICT_FILES_LOC</h4>
          <p>
            Since BangDB trains, predicts in concurrent manner, therefore it
            could hog the memory as we do more of these operations, esp
            training. Also, for performance reasons it keeps the models in the
            memory in loaded condition. Therefore it is important that we put a
            limit to the memory that it could use.
          </p>
          <p>
            TRAIN_PRED_MEM_BUDGET sets the amount of memory ML can use. The
            loaded models are in LRU list and DB auto loads or unloads depending
            upon the usage pattern
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>Memory budget for training or prediction: It
            depends on kind of server it is.
            <br />
            For Training the mem budget will be used for training only,
            similarly for prediction it will be solely for prediction. However
            if the server is running in hybrid mode then it will be for both,
            50% each value is in MB
          </aside>
          <h4>MAX_CONCURRENT_PRED_MODEL</h4>
          <p>
            How many models could be trained or kept in the LRU list, this param
            sets that number. Default 32 is good for most of the scenario,
            however edit it as required
          </p>
          <h3>D. Advanced config to tune core of BangDB</h3>
          <p>
            The following are config params to tune the internal working of core
            BangDB. Therefore we need to be really sure before editing these.
            Let's go and understand these params as well
          </p>
          <h4>PAGE_SPILT_FACTOR</h4>
          <p>
            Since BangDB uses B+Tree* which keeps keys in sorted manner. When
            page splits then we need to transfer keys from one page to other.
            This variable decides the split factor.
          </p>
          <p>
            Simple rule is, if the ingestion of data is going to be mostly
            sequential (and not random) or semi sequential, then higher value is
            better. Else keep the default.
          </p>
          <p>
            As of now this is applicable to the entire db, however it should be
            for table. Will make it table specific in upcoming release
          </p>
          <h4>LOG_FLUSH_FREQ </h4>
          <p>
            This is frequency of log flush initiation. It's tuned for higher
            performance for general cases, however, you may play with the number
            and set what works best for you
          </p>
          <h4>CHKPNT_ENABLED</h4>
          <p>
            This is set to checkpointing of WAL. 0 means not checkpointing else
            yes. It's recommended to keep it ON, but for higher performance in
            certain cases you may turn it off as well
          </p>
          <h4>CHKPNT_FREQ</h4>
          <p>
            If checkpointing is ON then what's the frequency? Again this is set
            for better performance in general, however you may chose to edit it
            for experimentation and select the right value
          </p>
          <h4>LOG_SPLIT_CHECK_FREQ</h4>
          <p>
            WAL maintains append only rolling log file. It is recommended to
            keep checking if log file needs split at certain frequency. The
            value is selected for higher performance for general use cases,
            however you may experiment and pick the right value.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>This should be lower if ingestion rate is
            high
          </aside>
          <h4>LOG_RECLAIM_FREQ</h4>
          <p>
            BangDB generates WAL log files for durability and crash recovery
            along with atomicity and transaction. However it writes close 2.2X+
            4X more data in the WAL log than the ingested data. Which may result
            in large amount of logs generated on filesystem, which may cause
            disk full scenarios and db could go down.
          </p>
          <p>
            To avoid this, BangDB keeps checking and reclaiming the log files
            not needed by the db, even in the case of DB crash and recovery.
            It's a very complex process but very important. Therefore, we should
            have this value properly set to ensure DB runs properly without
            filling the disk with log files.
          </p>
          <h4>LOG_RECLAIM_ACTION</h4>
          <p>
            This will tell DB to steps it can take when it finds out that WAL
            logs could be reclaimed.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>0 means don't do anything, 1 means archive in
            reclaim folder 2 means delete the log files usually, 2 is good
          </aside>
          <h4>LOG_RECLAIM_DIR</h4>
          <p>
            If LOG_RECLAIM_ACTION = 1, then it tells which directory logs should
            be reclaimed. Ideally when we wish to keep the log files and not
            delete then reclaim folder should be on network or other disk where
            capacity is large
          </p>
          <h4>BUF_FLUSH_RECLAIM_FREQ</h4>
          <p>
            This is for buffer pool and defines buffer cache dirty page flusher
            and the buffer cache memory reclaimer frequency in micro sec.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            This is just a hint and db changes this as per need
          </aside>
          <h4>SCATTER_GATHER_MAX</h4>
          <p>
            Maximum number of pages to look for scatter gather, put 0 to select
            the system supported number (suggested), else put whatever num, but
            if it's more than system supported then it will be corrected to the
            system supported one. Ideally no need to change this
          </p>
          <h4>MAX_NUM_TABLE_HEADER_SLOT</h4>
          <p>
            This has implications on the length of the chain of pages for a
            slot. If there are too many tables ( more than 10,000 tables, then
            reduce this number a bit else leave it as default). Higher number
            with large number of tables would increase the memory overhead for
            the DB
          </p>
          <h4>MIN_DIRTY_SCAN</h4>
          <p>
            How many pages to scan to find out dirty pages. This is tuned for
            higher performance however change it as per your need after
            experiment. Be sure before changing
          </p>
          <h4>MIN_UPDATED_SCAN</h4>
          <p>
            How may pages to scan to find updated page? Be sure before changing
          </p>
          <h4>IDX_FLUSH_CONSTRAINT</h4>
          <p>
            This impacts the flushing of pages, it affects the core and hence
            only change when you are confident after experimentation
          </p>
          <h4>DAT_FLUSH_CONSTRAINT</h4>
          <p>
            This impacts the flushing of pages, it affects the core and hence
            only change when you are confident after experimentation
          </p>
          <h4>IDX_RECLAIM_CONSTRAINT</h4>
          <p>
            This impacts the flushing of pages, it affects the core and hence
            only change when you are confident after experimentation
          </p>
          <h4>DAT_RECLAIM_CONSTRAINT</h4>
          <p>
            This impacts the flushing of pages, it affects the core and hence
            only change when you are confident after experimentation
          </p>
          <h4>PAGE_WRITE_FACTOR</h4>
          <p>
            This in a way denotes how fast data is written, but we should not
            change it unless confident after experiment
          </p>
          <h4>PAGE_READ_FACTOR</h4>
          <p>
            This in a way denotes how fast data is read, but we should not
            change it unless confident after experiment
          </p>
          <h4>IDX_DAT_NORMALIZE</h4>
          <p>
            This normalises the idx vs dat pages, helpful when we favour one
            over other
          </p>
          <h4>PREFETCH_BUF_SIZE</h4>
          <p>
            The pre-fetch buffer max size defined in MB. DB treats this as the
            max limit for pre-fetching of pages in the pool
          </p>
          <h4>PREFETCH_SCAN_WINDOW_NUM</h4>
          <p>Size of window for prefetch scan</p>
          <h4>PREFETCH_EXTENT_NUM</h4>
          <p>To what extent pages would be pre fetched</p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
