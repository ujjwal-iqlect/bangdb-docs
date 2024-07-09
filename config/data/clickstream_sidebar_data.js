const setup_path_prefix = `/apps/click-stream/setup`;
const user_guide_path_prefix = `/apps/click-stream/user-guide`;

export const click_stream_sidebar_data = [
  {
    id: "0",
    title: "Setup Click Stream",
    childrens: [
      {
        id: "0",
        title: "Add website",
        path: setup_path_prefix + "/add-website",
      },
      {
        id: "1",
        title: "Forms for lead collection",
        path: setup_path_prefix + "/forms",
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
      {
        id: "5",
        title: "Search Posts",
        path: user_guide_path_prefix + "/search-posts",
      },
      {
        id: "6",
        title: "Filter Posts",
        path: user_guide_path_prefix + "/filter-posts",
      },
    ],
  },
];
