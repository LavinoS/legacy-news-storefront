export default (restClient) => ({
  receive: async (params) => {
    return restClient.get('/articles/receiveArticles', { params: params });
  },

  receiveArticle: async (payload) => {
    return restClient.get('/articles', { params: payload });
  },
});
