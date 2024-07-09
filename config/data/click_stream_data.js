const path_prefix = `/apps/click-stream`;
const setup_path_prefix = `/apps/click-stream/setup`;
const user_guide_path_prefix = `/apps/click-stream/user-guide`;

export const click_stream_sidebar_data = [
  {
    id: "0",
    title: "Setup Click Stream",
    childrens: [
      {
        id: "0",
        title: "Add website for click stream analysis",
        path: setup_path_prefix + "/add-website",
      },
      {
        id: "1",
        title: "Forms for lead collection",
        path: setup_path_prefix + "/forms",
      },
      {
        id: "2",
        title: "Call to action",
        path: setup_path_prefix + "/call-to-action",
      },
    ],
  },
  {
    id: "1",
    title: "User guide",
    childrens: [
      {
        id: "0",
        title: "Monitor data",
        path: user_guide_path_prefix + "/monitor-data",
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
      // {
      //   id: "4",
      //   title: "Activate/De-activate user from a company",
      //   path:
      //     path_prefix +
      //     "/manage-account-users/activate-de-activate-user-from-company",
      // },
      // {
      //   id: "5",
      //   title: "Remove user from a company",
      //   path: path_prefix + "/manage-account-users/remove-user-from-company",
      // },
      // {
      //   id: "6",
      //   title: "Update user details for a company",
      //   path:
      //     path_prefix +
      //     "/manage-account-users/update-user-details-for-a-company",
      // },
      {
        id: "7",
        title: "Delete user from account",
        path: path_prefix + "/manage-account-users/delete-user",
      },
    ],
  },
];
