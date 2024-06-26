const setup_path_prefix = `/apps/forum`;
const user_guide_path_prefix = `/apps/forum/user-guide`;

export const forum_sidebar_data = [
  {
    id: "0",
    title: "Setup Forum",
    childrens: [
      {
        id: "0",
        title: "Overview",
        path: setup_path_prefix + "/overview",
      },
      {
        id: "1",
        title: "Category and Tags",
        path: setup_path_prefix + "/category-and-tags",
      },
      {
        id: "2",
        title: "Status",
        path: setup_path_prefix + "/status",
      },
      {
        id: "3",
        title: "Post types",
        path: setup_path_prefix + "/post-types",
      },
      {
        id: "4",
        title: "Custom domain",
        path: setup_path_prefix + "/domain",
      },
      {
        id: "5",
        title: "Manage admins",
        path: setup_path_prefix + "/manage-admins",
      },
      {
        id: "6",
        title: "Manage forum users",
        path: setup_path_prefix + "/manage-forum-users",
      },
      {
        id: "7",
        title: "Manage posts",
        path: setup_path_prefix + "/manage-posts",
      },
      {
        id: "8",
        title: "Review, Accept or Reject posts",
        path: setup_path_prefix + "/accept-reject-posts",
      },
    ],
  },
  {
    id: "1",
    title: "User guide",
    childrens: [
      {
        id: "0",
        title: "Create new post",
        path: user_guide_path_prefix + "/create-new-post",
      },
      {
        id: "1",
        title: "Add reply in a post",
        path: user_guide_path_prefix + "/add-reply-in-post",
      },
      {
        id: "2",
        title: "Like & Follow post",
        path: user_guide_path_prefix + "/like-and-follow-post",
      },
      {
        id: "3",
        title: "Profile & contribution",
        path: user_guide_path_prefix + "/profile-and-contribution",
      },
      {
        id: "4",
        title: "Most Popular, & Most Commented posts etc.",
        path: user_guide_path_prefix + "/home-page-posts-tabs",
      },
    ],
  },
];
