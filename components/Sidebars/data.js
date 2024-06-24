const path_prefix = `/apps/leads-management`;

export const leads_management_sidebar_data = [
  {
    id: "0",
    title: "Manage CRM",
    childrens: [
      {
        id: "0",
        title: "Overview",
        path: path_prefix + "/crm-editing/overview",
      },
      {
        id: "1",
        title: "Edit CRM",
        childrens: [
          {
            id: "0",
            title: "Setup status",
            path: path_prefix + "/crm-editing/setup-status",
          },
          {
            id: "1",
            title: "Setup states",
            path: path_prefix + "/crm-editing/setup-states",
          },
          {
            id: "2",
            title: "Setup tags",
            path: path_prefix + "/crm-editing/setup-tags",
          },
          {
            id: "3",
            title: "Setup classifications",
            path: path_prefix + "/crm-editing/setup-classifications",
          },
          {
            id: "4",
            title: "Setup lead update template",
            path: path_prefix + "/crm-editing/setup-lead-update-template",
          },
          {
            id: "4",
            title: "Customize terminologies",
            path: path_prefix + "/crm-editing/customize-terminologies",
          },
          {
            id: "4",
            title: "Allow cross user view of leads",
            path:
              path_prefix + "/crm-editing/allow-cross-user-view-of-leads",
          },
          {
            id: "4",
            title: "Enable quota of leads for users",
            path: path_prefix + "/crm-editing/enable-quota-of-leads",
          },
        ],
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
            id: "1",
            title: "Manage group admins",
            path: path_prefix + "/group-editing/manage-group-admins",
          },
          {
            id: "2",
            title: "Set default severity",
            path: path_prefix + "/group-editing/set-default-severity",
          },
          {
            id: "3",
            title: "Set default due date",
            path: path_prefix + "/group-editing/set-default-due-date",
          },
          {
            id: "4",
            title: "Set business hours",
            path: path_prefix + "/group-editing/set-business-hours",
          },
          {
            id: "5",
            title: "Set business update form",
            path: path_prefix + "/group-editing/set-business-update-form",
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
            title: "Distribute leads",
            path: path_prefix + "/company-editing/distribute-leads",
          },
          {
            id: "3",
            title: "Add leads distribution logic",
            path: path_prefix + "/company-editing/add-leads-distribution-logic",
          },
          {
            id: "5",
            title: "Setup lead ID prefix",
            path: path_prefix + "/company-editing/setup-lead-id-prefix",
          },
          {
            id: "6",
            title: "Enable auto assignment of leads",
            path:
              path_prefix + "/company-editing/enable-auto-assignment-of-leads",
          },
          {
            id: "7",
            title: "Allow anonymous reporter for leads",
            path:
              path_prefix +
              "/company-editing/allow-anonymous-reporter-for-leads",
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
          path_prefix +
          "/manage-account-users/activate-de-activate-user-from-company",
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
  {
    id: "4",
    title: "Leads",
    childrens: [
      {
        id: "0",
        title: "Add lead manually",
        path: path_prefix + "/add-lead-in-company",
      },
      {
        id: "1",
        title: "Upload leads from excel / csv",
        path: path_prefix + "/upload-leads-from-csv",
      },
      {
        id: "2",
        title: "Setup web forms for lead collection",
        path: path_prefix + "/setup-web-forms-for-lead-collection",
      },
      {
        id: "3",
        title: "Add website for click-stream analysis",
        path: path_prefix + "/add-webiste-for-click-stream-analysis",
      },
      {
        id: "4",
        title: "Edit / Work on lead",
        path: path_prefix + "/edit-lead",
      },
      {
        id: "5",
        title: "Send E-mail",
        path: path_prefix + "/send-email",
      },
      {
        id: "6",
        title: "Make call",
        path: path_prefix + "/make-calls",
      },
      {
        id: "7",
        title: "Setup an event",
        path: path_prefix + "/setup-an-event",
      },
      {
        id: "8",
        title: "Delete a lead",
        path: path_prefix + "/delete-a-lead",
      },
      {
        id: "9",
        title: "Add / Edit title of a lead",
        path: path_prefix + "/edit-lead-title",
      },
      {
        id: "10",
        title: "Upload attachments / file to a lead",
        path: path_prefix + "/upload-attachments-in-lead",
      },
      {
        id: "11",
        title: "Filter Leads",
        path: path_prefix + "/filter-leads",
      },
    ],
  },
  {
    id: "5",
    title: "Stats",
    childrens: [
      {
        id: "0",
        title: "Stats for lead pipeline / company",
        path: path_prefix + "/stats-for-company",
      },
      {
        id: "1",
        title: "Funnel analysis",
        path: path_prefix,
      },
      {
        id: "2",
        title: "Clickstream & visitor analysis",
        path: path_prefix + "/click-stream-and-visitor-analysis",
      },
    ],
  },
];
