// GUIDE: 스웨거 문서를 토대로 schema를 작성합니다.
export type post = {
  id: string;
  author: {
    id: string;
    name: string;
    profileImageLink: string | null;
  };
  companyName: string;
  slogan: string;
  email: string;
  investAmount: number;
  investCompany: string;
  series: string;
  imageLink: string;
  title: string;
  employmentEndDate: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  category: string;
  headcount: string;
  isBookmarked: boolean;
};

export type postsResponse = {
  posts: post[];
  paginator: {
    lastPage: number;
  };
};
