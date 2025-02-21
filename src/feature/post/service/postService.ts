import type { Apis } from '@/api';
import type { PostsResponse } from '@/api/apis/localServer/schemas';
import type { ServiceResponse } from '@/api/entities';

export type PostService = {
  getPosts: () => ServiceResponse<PostsResponse>;
};

export const implPostService = (apis: Apis): PostService => ({
  getPosts: async () => {
    const path = new URLSearchParams();
    path.append('page', '0');
    const { status, data } = await apis['GET /post']({
      params: path.toString(),
    });
    if (status === 200) {
      return {
        type: 'success',
        data,
      };
    } else {
      return { type: 'error', code: data.code, message: data.message };
    }
  },
});
