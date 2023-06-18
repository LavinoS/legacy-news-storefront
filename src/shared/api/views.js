export default (restClient) => ({
  createView: async () => {
    return restClient.post('/views');
  },
});
