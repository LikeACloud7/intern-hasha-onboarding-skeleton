import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { type ExternalCallParams, implApi } from './api';
import { implPostService } from './feature/post/service/postService';
import { LandingPage } from './pages/LandingPage';
import { serviceContext } from './shared/context/serviceContext';

const queryClient = new QueryClient();

export const App = () => {
  const apiCall = async (content: ExternalCallParams) => {
    const response = await fetch(`/api/${content.path}`, {
      method: content.method,
      headers: content.headers,
      body: JSON.stringify(content.body),
    });
    return {
      status: response.status,
      data: (await response.json()) as unknown,
    };
  };
  const apis = implApi({ externalCall: apiCall });
  const services = {
    postService: implPostService(apis),
  };

  return (
    <QueryClientProvider client={queryClient}>
      <serviceContext.Provider value={services}>
        <LandingPage></LandingPage>
      </serviceContext.Provider>
    </QueryClientProvider>
  );
};
