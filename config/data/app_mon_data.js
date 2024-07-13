const path_prefix = `/apps/app-mon`;
const setup_path_prefix = path_prefix + `/setup`;

export const app_mon_sidebar_data = [
  {
    id: "0",
    title: "Clusters",
    childrens: [
      {
        id: "0",
        title: "Add cluster",
        path: setup_path_prefix + "/add-cluster",
      },
      {
        id: "1",
        title: "Delete cluster",
        path: setup_path_prefix + "/delete-cluster",
      },
    ],
  },
  {
    id: "1",
    title: "Hosts",
    childrens: [
      {
        id: "0",
        title: "Add host",
        path: setup_path_prefix + "/add-host",
      },
      {
        id: "1",
        title: "Delete host",
        path: setup_path_prefix + "/delete-host",
      },
    ],
  },
  {
    id: "2",
    title: "Services",
    childrens: [
      {
        id: "0",
        title: "Add service",
        childrens: [
          {
            id: "0",
            title: "Web Monitoring",
            path: setup_path_prefix + "/services/add-service/web-mon",
          },
          {
            id: "1",
            title: "Linux Monitoring",
            path: setup_path_prefix + "/services/add-service/linux-mon",
          },
          // {
          //   id: "2",
          //   title: "Click-stream Monitoring",
          //   path: setup_path_prefix + "/services/add-service/click-stream-mon",
          // },
          {
            id: "3",
            title: "Linux System Log Monitoring",
            path: setup_path_prefix + "/services/add-service/log-mon",
          },
          {
            id: "4",
            title: "Generic Log Monitoring",
            path: setup_path_prefix + "/services/add-service/gen-log-mon",
          },
          {
            id: "5",
            title: "SNMP Monitoring",
            path: setup_path_prefix + "/services/add-service/snmp-mon",
          },
        ],
      },
      {
        id: "1",
        title: "Edit service",
        path: setup_path_prefix + "/services/edit-service",
      },
      {
        id: "2",
        title: "Delete service",
        path: setup_path_prefix + "/services/delete-service",
      },
    ],
  },
  {
    id: "3",
    title: "Monitor services",
    childrens: [
      {
        id: "0",
        title: "Website monitoring",
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/services/web-mon",
          },
        ],
      },
      {
        id: "1",
        title: "Linux Monitoring",
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/services/linux-mon",
          },
        ],
      },
      // {
      //   id: "2",
      //   title: "Click-stream Monitoring",
      //   childrens: [
      //     {
      //       id: "0",
      //       title: "Overview",
      //       path: path_prefix + "/services/click-stream-mon",
      //     },
      //   ],
      // },
      {
        id: "3",
        title: "Log Monitoring",
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/services/logs",
          },
        ],
      },
      {
        id: "5",
        title: "SNMP Monitoring",
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/services/snmp-mon",
          },
        ],
      },
    ],
  },
];
