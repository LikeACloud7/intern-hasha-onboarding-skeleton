import { createContext } from 'react';

import type { postService } from '@/feature/post/service/postService';

type serviceContextType = {
  postService: postService;
};

export const serviceContext = createContext<serviceContextType | null>(null);
