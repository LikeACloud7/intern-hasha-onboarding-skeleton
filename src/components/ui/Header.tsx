import { ICON_SRC } from '@/entities/asset';
import { headerTextStyle } from '@/entities/style';

const Header = () => {
  const headerStyle = headerTextStyle();
  const headerContents = ['알림', '마이페이지', '로그아웃'];

  return (
    <div className="px-[22px] w-full h-[80px] flex justify-center items-center">
      <div className="w-full h-auto px-[22px] flex justify-between max-w-[1464px]">
        <div className="w-[113px] h-10 bg-grey-light-active" />
        <div className="gap-[20px] w-auto h-auto flex items-center ">
          <img
            src={ICON_SRC.SEARCH}
            alt="Search Icon"
            className="w-[24px] h-[24px]"
          />
          {headerContents.map((content, index) => (
            <p key={index} className={headerStyle}>
              {content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
