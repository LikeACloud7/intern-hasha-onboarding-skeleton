import { createContext } from 'react';

import type { PostService } from '@/feature/post/service/postService';

type ServiceContextType = {
  postService: PostService;
};

export const serviceContext = createContext<ServiceContextType | null>(null);
