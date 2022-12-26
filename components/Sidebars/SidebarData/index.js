export const SidebarData = [
  {
    id: "1",
    title: "Get Started",
    childrens: [
      {
        id: "1",
        title: "Server",
        childrens: [
          {
            id: "1",
            title: "Overview",
            path: "/server-getting-started",
          },
          {
            id: "2",
            title: "Install and Run",
            path: "/server-install",
          },
          {
            id: "3",
            title: "Docker Image",
            path: "/docker-images",
          },
          {
            id: "4",
            title: "BangDB Config",
            path: "/bangdb-config",
          },
          {
            id: "5",
            title: "Sample Program",
            path: "/sample-client-application",
          },
        ],
      },
      {
        id: "2",
        title: "BangDB on CPD IBM",
        childrens: [
          {
            id: "1",
            title: "Overview",
            path: "/cloud-pak-for-data",
          },
          {
            id: "2",
            title: "Using OC Command Tool",
            path: "/deploy-bangdb-oc-tool",
          },
          {
            id: "3",
            title: "Using Helm Chart",
            path: "/deploy-bangdb-helm-chart",
          },
        ],
      },
      {
        id: "3",
        title: "Benchmark",
        childrens: [
          {
            id: "1",
            title: "Overview",
            path: "/benchmark",
          },
          {
            id: "2",
            title: "Throughput-1B Records",
            path: "/throughput",
          },
          {
            id: "3",
            title: "YCSB Benchmark for BangDB",
            path: "/ycsb",
          },
          {
            id: "4",
            title: "(YCSB) BangDB vs Others",
            path: "/bangdb-vs-other-dbs",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Introduction",
    childrens: [
      {
        id: "1",
        title: "Overview",
        path: "/bangdb-introduction",
      },
      {
        id: "2",
        title: "Feature Details",
        path: "/feature-details",
      },
      {
        id: "3",
        title: "Multi Flavor",
        path: "/multi-flavour",
      },
      {
        id: "4",
        title: "Language Support",
        path: "/language-support",
      },
      {
        id: "5",
        title: "Platform Support",
        path: "/platform-support",
      },
      {
        id: "6",
        title: "License",
        path: "/license",
      },
      {
        id: "7",
        title: "Patents",
        path: "/patents",
      },
    ],
  },
  {
    id: "3",
    title: "Tech Overview",
    childrens: [
      {
        id: "1",
        title: "Architecture",
        path: "/architecture",
      },
      {
        id: "2",
        title: "Core Database Design",
        path: "/core-database-design",
      },
      {
        id: "3",
        title: "Access Methods",
        path: "/access-methods",
      },
    ],
  },

  {
    id: "4",
    title: "Index",
    childrens: [
      {
        id: "1",
        title: "Overview",
        path: "/index-bangdb",
      },
      {
        id: "2",
        title: "Primary Index",
        path: "/primary-index",
      },
      {
        id: "3",
        title: "Secondary Index",
        path: "/secondary-index",
      },
      {
        id: "4",
        title: "Nested Index",
        path: "/nested-index",
      },
      {
        id: "5",
        title: "Composite Index",
        path: "/composite-index",
      },
      {
        id: "6",
        title: "Geospatial Index",
        path: "/geospatial-index",
      },
      {
        id: "7",
        title: "Reverse Index",
        path: "/reverse-index",
      },
    ],
  },
  {
    id: "5",
    title: "Developing with BangDB",
    childrens: [
      {
        id: "1",
        title: "Introduction",
        path: "/developing-with-bangdb-embedded",
      },
      {
        id: "2",
        title: "Database",
        path: "/database-embedded",
      },
      {
        id: "3",
        title: "Table",
        childrens: [
          {
            id: "1",
            title: "Introduction",
            path: "/table-embedded",
          },
          {
            id: "2",
            title: "Normal Table",
            path: "/normal-table-embedded",
          },
          {
            id: "3",
            title: "Wide Table",
            path: "/wide-table-embedded",
          },
          {
            id: "4",
            title: "Large Table",
            path: "/large-table-embedded",
          },
          {
            id: "5",
            title: "Primitive Table",
            path: "/primitive-table-embedded",
          },
        ],
      },
      {
        id: "4",
        title: "Query in BangDB",
        path: "/dataquery",
      },
    ],
  },
  {
    id: "6",
    title: "Embedded API",
    childrens: [
      {
        id: "1",
        title: "Introduction",
        path: "/bangdb-api",
      },
      {
        id: "2",
        title: "Database Type",
        path: "/bangdb-database-embedded",
      },
      {
        id: "3",
        title: "Table",
        path: "/bangdb-table-embedded",
      },
      {
        id: "4",
        title: "Stream Manager",
        path: "/bangdb-stream-manager-embedded",
      },
      {
        id: "5",
        title: "Notification Manager",
        path: "/bangdb-notification-manager-embedded",
      },
      {
        id: "6",
        title: "Resource Manager",
        path: "/bangdb-resource-manager-embedded",
      },
      {
        id: "7",
        title: "DB Param",
        path: "/db-param-embedded",
      },
      {
        id: "8",
        title: "ML Helper",
        path: "/bangdb-ml-helper-embedded",
      },
      {
        id: "9",
        title: "Transaction",
        path: "/bangdb-transaction-embedded",
      },
      {
        id: "10",
        title: "TableEnv",
        path: "/table-env-embedded",
      },
      {
        id: "11",
        title: "Scan Filter",
        path: "/scanfilter-embedded",
      },
      {
        id: "12",
        title: "Result Set",
        path: "/resultset-embedded",
      },
      {
        id: "13",
        title: "RTF Manager",
        path: "/bangdb-rtf-manager-embedded",
      },
      {
        id: "14",
        title: "Helper Types",
        path: "/helper-types-embedded",
      },
    ],
  },
  {
    id: "7",
    title: "Server API",
    childrens: [
      {
        id: "1",
        title: "Basic Types",
        path: "/api-server",
      },
      {
        id: "2",
        title: "Environment API",
        path: "/bangdb-environment-api",
      },
      {
        id: "3",
        title: "Database",
        path: "/bangdb-database-api",
      },
      {
        id: "4",
        title: "Table",
        path: "/bangdb-table-api",
      },
      {
        id: "5",
        title: "Stream Manager",
        path: "/bangdb-stream-manager-api",
      },
      {
        id: "6",
        title: "Notification Manager",
        path: "/bangdb-notification-manager-api",
      },
      {
        id: "7",
        title: "Resource Manager",
        path: "/bangdb-resource-manager-api",
      },
      {
        id: "8",
        title: "DB Param",
        path: "/dbparam-type",
      },
      {
        id: "9",
        title: "ML Helper",
        path: "/bangdb-ml-helper-api",
      },
      {
        id: "10",
        title: "Transaction",
        path: "/bangdb-transaction-api",
      },
      {
        id: "11",
        title: "TableEnv",
        path: "/table-env-api",
      },
      {
        id: "12",
        title: "Scan Filter",
        path: "/scanfilter-api",
      },
      {
        id: "13",
        title: "Result Set",
        path: "/resultset-api",
      },
      {
        id: "14",
        title: "BangDB Common",
        path: "/bangdb-client-common",
      },
    ],
  },
  {
    id: "8",
    title: "Command Line Interface",
    childrens: [
      {
        id: "1",
        title: "Overview",
        path: "/cli-overview",
      },
      {
        id: "2",
        title: "DB Commands",
        path: "/db-commands-cli",
      },
      {
        id: "3",
        title: "BRS Commands",
        path: "/brs-commands-cli",
      },
      {
        id: "4",
        title: "Stream Commands",
        path: "/stream-commands-cli",
      },
      {
        id: "5",
        title: "ML Commands",
        path: "/ml-commands-cli",
      },
      {
        id: "6",
        title: "Replication Commands",
        path: "/replication-commands-cli",
      },
      {
        id: "7",
        title: "Agent Commands",
        path: "/agent-cli",
      },
    ],
  },
  {
    id: "9",
    title: "Examples for tryouts",
    childrens: [
      {
        id: "0",
        title: "Hands on BangDB",
        path: "/hands-on-bangdb",
      },
    ],
  },
];
