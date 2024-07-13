const setup_path_prefix = `/apps/app-mon/setup`;
const user_guide_path_prefix = `/apps/app-mon/user-guide`;

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
          { id: "0", title: "Web Monitoring", path: setup_path_prefix + "/services/add-service/web-mon" },
          { id: "1", title: "Linux Monitoring", path: setup_path_prefix + "/services/add-service/linux-mon" },
          { id: "2", title: "Click-stream Monitoring", path: setup_path_prefix + "/services/add-service/click-stream-mon" },
          { id: "3", title: "Linux System Log Monitoring", path: setup_path_prefix + "/services/add-service/log-mon" },
          { id: "4", title: "Generic Log Monitoring", path: setup_path_prefix + "/services/add-service/gen-log-mon" },
          { id: "5", title: "SNMP Monitoring", path: setup_path_prefix + "/services/add-service/snmp-mon" },
        ],
      },
      {
        id: "1",
        title: "Edit service",
        path: setup_path_prefix + "/edit-service",
      },
      {
        id: "2",
        title: "Delete service",
        path: setup_path_prefix + "/delete-service",
      },
    ],
  },
];
