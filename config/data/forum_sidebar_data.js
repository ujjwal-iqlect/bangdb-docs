const path_prefix = `/apps/forum`;

export const forum_sidebar_data = [
  {
    id: "0",
    title: "Setup Forum",
    childrens: [
      {
        id: "0",
        title: "Overview",
        path: path_prefix + "/setup/overview",
      },
      {
        id: "1",
        title: "Category and Tags",
        path: path_prefix + "/setup/category-and-tags",
      },
      {
        id: "2",
        title: "Status",
        path: path_prefix + "/setup/status",
      },
      {
        id: "3",
        title: "Post types",
        path: path_prefix + "/setup/post-types",
      },
      {
        id: "4",
        title: "Custom domain",
        path: path_prefix + "/setup/domain",
      },
      {
        id: "5",
        title: "Manage admins",
        path: path_prefix + "/setup/manage-admins",
      },
      {
        id: "6",
        title: "Manage forum users",
        path: path_prefix + "/setup/manage-forum-users",
      },
      {
        id: "7",
        title: "Manage posts",
        path: path_prefix + "/setup/manage-posts",
      },
      {
        id: "8",
        title: "Review, Accept or Reject posts",
        path: path_prefix + "/setup/accept-reject-posts",
      },
    ],
  },
  {
    id: "1",
    title: "User guide",
    childrens: [
      {
        id: "0",
        title: "Add reply in a post",
        path: path_prefix + "/add-reply-in-post",
      },
      {
        id: "1",
        title: "Like, Dislike & Follow post",
        path: path_prefix + "/like-dislike-and-follow-post",
      },
      {
        id: "2",
        title: "Profile & reputation",
        path: path_prefix + "/profile-and-reputation",
      },
      {
        id: "3",
        title:
          "Most Popular, & Most Commented posts etc.",
        path: path_prefix + "/home-page-posts-tabs",
      },
    ],
  },
];
