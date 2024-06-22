import React from "react";
import Head from "next/head";
import DocArticle from "../../components/DocArticle";
import Image from "next/image";
import Codebox from "../../components/Codebox";

export default function DeployBangdbOcTool() {
  const bangdbYaml = String.raw`selector:
  matchLabels:
    deployment: bangdb
template:
  metadata:
    creationTimestamp: null
    labels:
      deployment: bangdb
  spec:
    containers:
      - name: bangdb
        image: >-
          bangdb/bangdb-server
        ports:
          - name: tcp
            protocol: TCP
            containerPort: 10101
            targetPort: 10101
          - name: http
            protocol: TCP
            containerPort: 18080
            targetPort: 18080
        imagePullPolicy: Always
        securityContext:
            fsGroupChangePolicy: OnRootMismatch
            runAsNonRoot: true
            supplementalGroups: [bangdb,1000]
            allowPrivilegeEscalation: false
            seccompProfile:
                type: RuntimeDefault
            capabilities:
                drop: ["ALL"]
    volumeMounts:
       - name: data
         mountPath: /bin/data
       - name: logdir
         mountPath: /bin/logdir
    volumes:
       - name: data
       - name: logdir`;

  return (
    <React.Fragment>
      <Head>
        <title>Using OC Command line tool - BangDB</title>
        <meta
          name="description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the OC command line tool."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Using OC Command line tool - BangDB"
        />
        <meta
          property="og:description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the OC command line tool."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Using OC Command line tool - BangDB"
        />
        <meta
          name="twitter:description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the OC command line tool."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <h1 className="article-title">Using OC command tool</h1>
        <div className="article-body">
          <h2>Deploy BangDB on OpenShift</h2>
          <h3>
            METHOD 1 - Deploying BangDB on openshift using OC command line tool
          </h3>
          <p>
            To Deploy BangDB on an openshift using OC command line tool - Let&apos;s
            create a &apos;BangDB&apos; instance as a Kubernetes deployment object. Here
            is the yaml file, bangdb.yaml for deployment object. Please don&apos;t
            forget to change the value of namespace in the yaml file below.
          </p>
          <Codebox code={bangdbYaml} />
          <p>Now you can run the following command from the Bastion node.</p>
          <Codebox code="oc apply -f bangdb.yaml" />
          <p>
            This deployment creates a single pod running &apos;BangDB&apos;. To verify the
            deployment you can check the logs of the pod created. The logs
            should appear as shown below saying &apos;BangDB&apos; service is up and
            running.
          </p>
          <Image
            src={
              "https://bangdb.com/wp-content/uploads/2021/08/bangdb_openshift_startup_log.png"
            }
            alt="Deploy BangDB on OpenShift"
            width={1600}
            height={601}
          />
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
