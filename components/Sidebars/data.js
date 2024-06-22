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
    ],
  },
  {
    id: "1",
    title: "Manage Groups",
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
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/edit-group-in-crm",
          },
          {
            id: "0",
            title: "Manage group admins",
            path: path_prefix + "/group-editing/manage-group-admins",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Manage Companies",
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
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/edit-company-in-crm",
          },
          {
            id: "1",
            title: "Add an existing user",
            path: path_prefix + "/company-editing/add-an-existing-user",
          },
          {
            id: "2",
            title: "Notification setup",
            path: path_prefix + "/company-editing/notification-setup",
          },
          {
            id: "2",
            title: "Notification setup",
            path: path_prefix + "/company-editing/notification-setup",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Manage Account Users",
    childrens: [
      // {
      //   id: "0",
      //   title: "Overview",
      //   path: path_prefix + "/manage-account-users/overview",
      // },
      {
        id: "1",
        title: "Create new user",
        path: path_prefix + "/manage-account-users/create-new-user",
      },
      {
        id: "2",
        title: "Activate, Suspend & Terminate user",
        path: path_prefix + "/manage-account-users/change-user-status",
      },
      {
        id: "3",
        title: "Reset password for a user",
        path: path_prefix + "/manage-account-users/reset-user-password",
      },
      {
        id: "4",
        title: "Activate/De-activate user from a company",
        path:
          path_prefix + "/manage-account-users/activate-de-activate-user-from-company",
      },
      {
        id: "5",
        title: "Remove user from a company",
        path: path_prefix + "/manage-account-users/remove-user-from-company",
      },
      {
        id: "6",
        title: "Update user details for a company",
        path:
          path_prefix +
          "/manage-account-users/update-user-details-for-a-company",
      },
      {
        id: "7",
        title: "Delete user from account",
        path: path_prefix + "/manage-account-users/delete-user",
      },
    ],
  },
];
