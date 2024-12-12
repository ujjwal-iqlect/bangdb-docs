const setup_path_prefix = `/apps/bug-tracker/setup`;
const user_guide_path_prefix = `/apps/forum/user-guide`;

export const bugtracker_sidebar_data = [
  {
    id: "0",
    title: "Get Started",
    childrens: [
      {
        id: "0",
        title: "How to Insatall",
        path: "/install-bugtracker",
      },
      {
        id: "1",
        title: "Add project",
        path: setup_path_prefix + "/add-project",
      },
      {
        id: "2",
        title: "Setup project",
        path: setup_path_prefix + "/setup-project",
      },
      {
        id: "3",
        title: "Manage users",
        path: setup_path_prefix + "/manage-users",
      },
      {
        id: "4a",
        title: "Assign user to project",
        path: setup_path_prefix + "/assign-user-to-project",
      },
      {
        id: "4",
        title: "Change user password",
        path: setup_path_prefix + "/change-user-password",
      },
      // {
      //   id: "5",
      //   title: "Edit user profile",
      //   path: setup_path_prefix + "/edit-user-profile",
      // },
      {
        id: "6",
        title: "Add bug",
        path: setup_path_prefix + "/add-bug",
      },
      {
        id: "7",
        title: "Edit bug",
        path: setup_path_prefix + "/edit-bug",
      },
      {
        id: "8",
        title: "Filter bugs",
        path: setup_path_prefix + "/filter-bugs",
      },
      {
        id: "9",
        title: "Import bugs",
        path: setup_path_prefix + "/import-bugs",
      },
      {
        id: "10",
        title: "Bugs stats",
        path: setup_path_prefix + "/bugs-stats",
      },
      { 
        id: "12",
        title: "Email notifications",
        path: setup_path_prefix + "/email-notifications",
      },
      {
        id: '13',
        title: "Project reports & stats",
        path: setup_path_prefix + "/project-stats",
      }
    ],
  },
];
