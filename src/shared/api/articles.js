export default (restClient) => ({
  receive: async (params) => {
    return restClient.get('/articles/receiveArticles', { params: params });
  },
});
