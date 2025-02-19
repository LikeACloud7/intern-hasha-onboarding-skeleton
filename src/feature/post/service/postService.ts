import type { Apis } from '@/api';
import type { postsResponse } from '@/api/apis/localServer/schemas';

export type postService = {
  getPosts: () => Promise<postsResponse>;
};

export const implPostService = (apis: Apis): postService => ({
  getPosts: async () => {
    const path = new URLSearchParams();
    path.append('page', '0');
    const { status, data } = await apis['GET /post']({
      params: path.toString(),
    });
    if (status === 200) {
      return data;
    } else {
      throw new Error('Failed to get posts');
    }
  },
});
