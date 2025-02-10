export const PATH = {
  INDEX: '/',
  POST_DETAIL: '/post/:postId',
  SIGN_IN_SELECT: '/signin',
  SIGN_UP_SELECT: '/signup',
  SIGN_UP_LOCAL: '/signup/local',
  SIGN_UP_COMPLETE: '/signup/complete',
  VERIFY_EMAIL: '/verify-email',
  MY_PAGE: '/mypage',
  CREATE_RESUME: '/post/:postId/resume/create',
  RESUME_LIST: '/resume',
  RESUME_DETAIL: '/resume/:resumeId',
  CREATE_COMPANY: '/company/create',
  CREATE_POST: '/post/create/:companyId',
  MAKE: {
    POST_DETAIL: (postId: string) => `/post/${postId}`,
    CREATE_RESUME: (postId: string) => `/post/${postId}/resume/create`,
    RESUME_DETAIL: (resumeId: string) => `/resume/${resumeId}`,
    CREATE_POST: (companyId: string) => `/post/create/${companyId}`,
  },
};
