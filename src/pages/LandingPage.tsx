import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

import { CustomAccordion } from '@/components/ui/accordion';
import FilterBar from '@/components/ui/FilterBar';
import Header from '@/components/ui/Header';
import { ICON_SRC } from '@/entities/asset';
import Card from '@/feature/post/ui/Card';
import { serviceContext } from '@/shared/context/serviceContext';

const LandingPage = () => {
  const posts = useGetPosts();

  return (
    // <div className='w-[1920px] h-[1024px] min-w-[1348px] max-w-[1920px] bg-grey-light gap-[10px] top-[425px] left-[185px]'>
    <div className="min-h-screen bg-grey-light">
      <div className="w-full h-auto gap-[42px] flex flex-col bg-grey-light items-center">
        <Header />
        <div className="w-full h-auto px-[22px] gap-[20px] max-w-[1464px] flex">
          <FilterBar />
          <div className="w-full h-auto gap-[24px] flex flex-col">
            <p className="w-full h-auto font-pretendard font-bold text-[30px] leading-[45px] tracking-normal">
              개발 인턴 공고
            </p>
            <div className="w-full h-auto justify-between flex">
              <div className="w-auto h-auto gap-[16px] flex">
                <div className="w-auto h-auto gap-[6px] flex">
                  <CustomAccordion title="모집 중" />
                  <CustomAccordion title="시리즈" />
                  <CustomAccordion title="투자 금액" />
                </div>
                <div className="w-auto h-auto gap-[4px] flex items-center">
                  <img
                    src={ICON_SRC.REFRESH}
                    alt="Refresh Icon"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="w-auto h-auto font-pretendard font-medium text-[14px] leading-[19.6px] tracking-normal text-gray-dark-active">
                    초기화
                  </p>
                </div>
              </div>
              <div>
                <CustomAccordion title="최신 순" />
              </div>
            </div>
            <div className="w-full h-auto gap-[20px] grid-cols-3 grid">
              {posts?.map((post, index) => <Card key={index} post={post} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

const useGetPosts = () => {
  const context = useContext(serviceContext);
  const postService = context?.postService;

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      if (postService == null) {
        throw new Error('Post service not found');
      }
      const response = await postService.getPosts();
      return response.posts;
    },
  });

  return posts;
};
