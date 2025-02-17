import { ICON_SRC } from '@/entities/asset';
import { headerTextStyle } from '@/entities/style';

const Header = () => {
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
          <p className={headerTextStyle()}>알림</p>
          <p className={headerTextStyle()}>마이페이지</p>
          <p className={headerTextStyle()}>로그아웃</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
