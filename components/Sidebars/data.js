export const leads_management_sidebar_data = [
  {
    id: "0",
    title: "Manage CRM",
    childrens: [
      {
        id: "0",
        title: "Introduction",
        path: "/graph-and-cypher",
      },
      {
        id: "1",
        title: "Query scenarios",
        childrens: [
          {
            id: "0",
            title: "Query scenarios",
            path: "/graph-and-cypher/query-scenarios",
          },
          {
            id: "1",
            title: "Movies data",
            path: "/graph-and-cypher/query-scenarios#moviesdata",
            beforeIcon: "nested",
          },
          {
            id: "2",
            title: "Sales data",
            path: "/graph-and-cypher/query-scenarios#salesdata",
            beforeIcon: "nested",
          },
          {
            id: "3",
            title: "Patient data",
            path: "/graph-and-cypher/query-scenarios#patientdata",
            beforeIcon: "nested",
          },
        ],
      },
    ],
  },
];
