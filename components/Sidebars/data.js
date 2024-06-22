const path_prefix = `/apps/leads-management`;

export const leads_management_sidebar_data = [
  {
    id: "0",
    title: "Manage CRM",
    childrens: [
      {
        id: "0",
        title: "Introduction",
        path: path_prefix + "/introduction",
      },
      {
        id: "1",
        title: "Groups",
        childrens: [
          {
            id: "0",
            title: "Add a group",
            path: path_prefix + "/add-group-in-crm",
          },
          {
            id: "1",
            title: "Delete a group",
            path: path_prefix + "/delete-group-in-crm",
          },
          {
            id: "1",
            title: "Edit group",
            path: path_prefix + "/edit-group-in-crm",
          },
        ],
      },
      {
        id: "1",
        title: "Companies",
        childrens: [
          {
            id: "0",
            title: "Add a company",
            path: path_prefix + "/add-company-in-crm",
          },
          {
            id: "1",
            title: "Delete a company",
            path: path_prefix + "/delete-company-in-crm",
          },
          {
            id: "1",
            title: "Edit company",
            path: path_prefix + "/edit-company-in-crm",
          },
        ],
      },
    ],
  },
];
