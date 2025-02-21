import type { Post } from '@/api/apis/localServer/schemas';
import { ICON_SRC } from '@/entities/asset';
import { EnvContext } from '@/shared/context/EnvContext';
import { useGuardContext } from '@/shared/context/hooks';

export const Card = ({ post }: { post: Post }) => {
  const { API_BASE_URL } = useGuardContext(EnvContext);

  return (
    <div className="w-full h-auto min-w-[340px] max-w-[380px] gap-[12px] rounded-[16px] bg-[#ffffff] overflow-hidden">
      <div className="w-full h-auto gap-[6px] flex flex-col hover:text-grey-dark">
        <div className="w-full h-auto">
          <div className="w-full h-[50px] px-[22px] gap-[20px] bg-[#E8EBEF] flex">
            <div className="w-full h-auto gap-[6px] flex items-center">
              <img
                src={ICON_SRC.PERSON}
                alt="person"
                className="w-[24px] h-[24px]"
              />
              <p className="w-full h-auto font-pretendard font-semibold text-[15px] leading-[22.5px] tracking-normal">
                {post.title}
              </p>
            </div>
            <p className="w-auto h-auto font-pretendard text-grey-normal-hover font-medium text-[14px] leading-[19.6px] tracking-normal items-center flex">
              {post.employmentEndDate}
            </p>
          </div>
          <div className="w-full h-auto px-[22px] gap-[10px] flex justify-end">
            <img
              src={ICON_SRC.VECTOR}
              alt="vector"
              className="w-[28px] h-[12px]"
            />
          </div>
        </div>
        <div className="w-full h-[116px] px-[22px] gap-[14px] flex flex-col">
          <div className="w-full h-auto justify-between">
            <div className="w-full h-auto gap-[12px] flex items-center">
              <img
                src={`${API_BASE_URL}/${post.imageLink}`}
                alt="logo"
                className="w-[40px] h-[40px] rounded-[6px] bg-[#E1E4E9]"
              />
              <p className="w-full h-auto text-grey-darker font-pretendard font-semibold text-[18px] leading-[27px] tracking-normal">
                {post.companyName}
              </p>
            </div>
          </div>
          <p className="w-full h-full font-pretendard font-normal text-[13px] leading-[19.5px] tracking-normal text-gray-dark-hover">
            {post.slogan}
          </p>
        </div>
      </div>
      <div className="w-full h-auto justify-between p-[22px] items-center flex">
        <div className="w-auto h-auto gap-[6px] flex">dfd</div>
        <img
          src={ICON_SRC.BOOKMARK.UNSELECTED}
          alt="unselected"
          className="w-[30px] h-[30px]"
        />
      </div>
    </div>
  );
};
