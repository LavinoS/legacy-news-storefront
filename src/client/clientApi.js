import apiBuilder from '../shared/api';
import restClientBuilder from '../shared/restClient/restClientBuilder';

export let clientApi = null;
export const initApi = () => {
  clientApi = apiBuilder({
    restClient: restClientBuilder({
      baseUrl: 'http://localhost:3001/api/',
    }),
  });
};
