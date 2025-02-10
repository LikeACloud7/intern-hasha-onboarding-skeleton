// GUIDE: 작업하실 때는 주석을 푸시면 됩니다.

import type {
  ErrorResponse,
  InternalCallParams,
  ResponseNecessary,
  // SuccessResponse,
} from '../../entities';
// import type {} from './schemas';

type GetApisProps = {
  callWithToken: <R extends ResponseNecessary>(
    p: InternalCallParams & { token: string },
  ) => Promise<R | ErrorResponse>;
  callWithoutToken: <R extends ResponseNecessary>(
    p: InternalCallParams & { token?: never },
  ) => Promise<R | ErrorResponse>;
  callWithOptionalToken: <R extends ResponseNecessary>(
    p: InternalCallParams & { token?: string },
  ) => Promise<R | ErrorResponse>;
};

type Api = (_: {
  body: never;
  token: string;
  params: never;
  query: never;
}) => Promise<{ status: number; data: unknown }>;

export const getLocalServerApis = (
  {
    // callWithToken,
    // callWithoutToken,
    // callWithOptionalToken,
  }: GetApisProps,
) =>
  ({
    // 'GET /echo/:message': ({ params }: { params: EchoParams }) =>
    //   callWithoutToken<SuccessResponse<never>>({
    //     method: 'GET',
    //     path: `echo/${params.message}`,
    //   }),
  }) satisfies Record<string, Api>;
