export const ApiSidebarData = [
  {
    id: '0',
    title: 'API 2.0',
    childrens: [
      {
        id: '0',
        title: 'Introduction',
        path: '/rest-api/api-introduction',
      },
      {
        id: '1',
        title: 'General Information',
        path: '/rest-api/general-information',
      },
      {
        id: '2',
        title: 'The document structure',
        path: '/rest-api/document-structure',
      },
      {
        id: '3',
        title: 'Server API',
        childrens: [
          {
            id: '0',
            title: 'Get the server stats',
            path: '/rest-api/get-the-server-stats',
          },
          {
            id: '90239024',
            title: 'Check the server type',
            path: '/rest-api/check-server-type',
          },
          {
            id: '1',
            title: 'Run SQL like query for tables',
            path: '/rest-api/run-sql-like-query-for-tables',
          },
          {
            id: '2',
            title: 'Get database name',
            path: '/rest-api/get-database-name',
          },
          {
            id: '3',
            title: 'Get the list of tables',
            path: '/rest-api/get-the-list-of-tables',
          },
          {
            id: '4',
            title: 'Open a table',
            path: '/rest-api/open-a-table',
          },
          {
            id: '5',
            title: 'Get environment details',
            path: '/rest-api/get-environment-details',
          },
          {
            id: '6',
            title: 'List all the tables',
            path: '/rest-api/list-all-the-tables',
          },
          {
            id: '7',
            title: 'Get general statistics of the tables',
            path: '/rest-api/get-the-general-info-statistics-of-the-tables',
          },
          {
            id: '8',
            title: 'Get the statistics of a given table',
            path: '/rest-api/get-the-stats-of-a-given-table',
          },
          {
            id: '9',
            title: 'Count number of rows in a table',
            path: '/rest-api/count-number-of-rows-in-a-table',
          },
          {
            id: '10',
            title: 'Create a table',
            path: '/rest-api/create-a-table',
          },
          {
            id: '11',
            title: 'Add index to a table',
            path: '/rest-api/add-index-to-a-table',
          },
          {
            id: '12',
            title: 'Insert data into a table',
            path: '/rest-api/insert-a-document-data-into-a-table',
          },
          {
            id: '13',
            title: 'Get data for key',
            path: '/rest-api/get-a-document-data-for-a-key',
          },
          {
            id: '14',
            title: 'Delete key-value document',
            path: '/rest-api/delete-a-key-and-value-document',
          },
          {
            id: '15',
            title: 'Delete an index from the table',
            path: '/rest-api/delete-an-index-from-the-table-only-secondary-index',
          },
          {
            id: '16',
            title: 'Delete a table',
            path: '/rest-api/delete-a-table',
          },
          {
            id: '17777',
            title: 'Register schema for stream processing',
            path: '/rest-api/register-schema-for-stream-processing',
          },
          {
            id: '17',
            title: 'Inset an event into a streams',
            path: '/rest-api/insert-an-event-into-a-stream',
          },
          {
            id: '18',
            title: 'Get the list of all the schemas registered in the DB',
            path: '/rest-api/get-the-list-of-all-schemas-registered-in-the-db',
          },
          {
            id: '19',
            title: 'Get the information for a given schema',
            path: '/rest-api/get-information-for-a-given-schema',
          },
          {
            id: '20',
            title: 'Get the schema json doc for a given schema',
            path: '/rest-api/get-the-schema-json-doc-for-a-given-schema',
          },
          {
            id: '21',
            title: 'Get the dependency graph of the schema',
            path: '/rest-api/get-the-dependency-graph-of-the-schema',
          },
          {
            id: '22',
            title: 'Change/Get the state of any stream',
            path: '/rest-api/change-the-state-of-any-stream',
          },
          {
            id: '23',
            title: 'Query streams to retrieve data',
            path: '/rest-api/query-streams-to-retrieve-data',
          },
          {
            id: '24',
            title: 'Run cypher on stream',
            path: '/rest-api/run-cypher-on-stream',
          },
          {
            id: '25',
            title: 'Add another stream into an existing schema',
            path: '/rest-api/add-another-stream-into-an-existing-schema',
          },
          {
            id: '26',
            title: 'Delete the prediction status of a file',
            path: '/rest-api/delete-prediction-status-of-a-file',
          },
          {
            id: '27',
            title: 'Delete a training request of a model',
            path: '/rest-api/delete-a-training-request-of-a-model',
          },
          {
            id: '28',
            title: 'Edit an existing schema',
            path: '/rest-api/edit-an-existing-schema',
          },
          {
            id: '29',
            title: 'Delete a model',
            path: '/rest-api/delete-a-model',
          },
          {
            id: '30',
            title: 'Get usage of the schema',
            path: '/rest-api/get-usage-of-the-schema',
          },
          {
            id: '31',
            title: 'Count the number of events in a stream',
            path: '/rest-api/count-the-number-of-events-in-a-stream',
          },
          {
            id: '32',
            title: 'Get the number of buckets',
            path: '/rest-api/get-the-number-of-buckets',
          },
          {
            id: '33',
            title: 'List all the buckets in the DB',
            path: '/rest-api/list-all-buckets-in-the-db',
          },
          {
            id: '34',
            title: 'Upload stream data to BRS',
            path: '/rest-api/upload-stream-data-to-brs',
          },
          {
            id: '35',
            title: 'Create a bucket',
            path: '/rest-api/create-a-bucket',
          },
          {
            id: '36',
            title: 'De-register a schema',
            path: '/rest-api/de-register-a-schema',
          },
          {
            id: '37',
            title: 'De-register a stream in a schema',
            path: '/rest-api/de-register-a-stream-in-a-schema',
          },
          {
            id: '38',
            title: 'Get the list of objects/files in the bucket',
            path: '/rest-api/get-list-of-objects-files-in-the-bucket',
          },
          {
            id: '39',
            title: 'Get list of objects in a bucket',
            path: '/rest-api/get-list-of-objects-in-a-bucket',
          },
          {
            id: '40',
            title: 'Train a model',
            path: '/rest-api/train-a-model',
          },
          {
            id: '41',
            title: 'Get the training status of a model',
            path: '/rest-api/get-the-training-status-of-a-model',
          },
          {
            id: '42',
            title: 'Upload/Put file into a bucket',
            path: '/rest-api/upload-put-file-into-a-bucket',
          },
          {
            id: '43',
            title: 'Download a file from the bucket',
            path: '/rest-api/download-a-file-from-the-bucket',
          },
          {
            id: '44',
            title: 'Do prediction for a trained model',
            path: '/rest-api/do-prediction-for-a-trained-model',
          },
          {
            id: '45',
            title: 'Get prediction status for a model (async)',
            path: '/rest-api/get-prediction-status-for-a-model-async',
          },
          {
            id: '46',
            title: 'Upload an object (in-memory)',
            path: '/rest-api/upload-an-object-in-memory',
          },
          {
            id: '47',
            title: 'Count number of models for a schema',
            path: '/rest-api/count-number-of-models-for-a-schema',
          },
          {
            id: '48',
            title: 'Delete an object from a bucket',
            path: '/rest-api/delete-an-object-from-a-bucket',
          },
          {
            id: '49',
            title: 'Delete a bucket',
            path: '/rest-api/delete-a-bucket',
          },
          {
            id: '50',
            title: 'Get training request for a model',
            path: '/rest-api/get-training-request-for-a-model',
          },
          {
            id: '51',
            title: 'Create a graph table',
            path: '/rest-api/create-a-graph-table',
          },
          {
            id: '52',
            title: 'Get all training requests in the system',
            path: '/rest-api/get-all-training-requests-in-the-system',
          },
          {
            id: '53',
            title: 'Open an existing graph table',
            path: '/rest-api/open-an-existing-graph-table',
          },
          {
            id: '54',
            title: 'List all graph tables in the db',
            path: '/rest-api/list-all-graph-tables-in-the-db',
          },
          {
            id: '55',
            title: 'Get the stats of a graph table',
            path: '/rest-api/get-the-stats-of-a-graph-table',
          },
          {
            id: '56',
            title: 'Add a node into a graph table',
            path: '/rest-api/add-a-node-into-a-graph-table',
          },
          {
            id: '57',
            title: 'Add triple into a graph table',
            path: '/rest-api/add-triple-into-a-graph-table',
          },
          {
            id: '58',
            title: 'Run cypher query on graph',
            path: '/rest-api/run-cypher-query-on-graph',
          },
          {
            id: '59',
            title: 'Register a notification',
            path: '/rest-api/register-a-notification',
          },
          {
            id: '60',
            title: 'Pause, activate & de-register a notification',
            path: '/rest-api/pause-activate-and-deregister-a-notification',
          },
          {
            id: '61',
            title: 'Various notification queries',
            path: '/rest-api/various-notification-queries',
          },
        ],
      },
    ],
  },
  {
    id: '1',
    title: 'Swagger API',
    childrens: [
      {
        id: '0',
        title: 'Swagger API',
        path: '/rest-api/swagger-api',
      },
    ],
  },
  {
    id: '2',
    title: 'Postman API',
    childrens: [
      {
        id: '0',
        title: 'Postman API',
        path: '/rest-api/postman-api',
      },
    ],
  },
];
