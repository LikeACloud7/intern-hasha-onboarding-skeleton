import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router';

import { type ExternalCallParams, implApi } from './api';
import { PATH } from './entities/route';
import { implPostService } from './feature/post/service/postService';
import { LandingPage } from './pages/LandingPage';
import { SignUpLocalPage } from './pages/SignUpLocalPage';
import { SignUpSelectPage } from './pages/SignUpSelectPage';
import { serviceContext } from './shared/context/serviceContext';

const queryClient = new QueryClient();

const RouteProvider = () => {
  return (
    <Routes>
      <Route path={PATH.INDEX} element={<LandingPage />} />
      <Route path={PATH.SIGN_UP_SELECT} element={<SignUpSelectPage />} />
      <Route path={PATH.SIGN_UP_LOCAL} element={<SignUpLocalPage />} />
    </Routes>
  );
};

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
        <RouteProvider />
      </serviceContext.Provider>
    </QueryClientProvider>
  );
};
