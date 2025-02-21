import { filterBarBlockStyle, filterBarTextStyle } from '@/entities/style';

export const FilterBar = () => {
  const blockStyle = filterBarBlockStyle();
  const textStyle = filterBarTextStyle();
  const filterBarContents = ['개발', '기획', '디자인', '마케팅'];

  return (
    <div className="w-[220px] h-auto py-[70px] gap-[10px] flex flex-col">
      {filterBarContents.map((content, index) => (
        <div key={index} className={blockStyle}>
          <p className={textStyle}>{content}</p>
        </div>
      ))}
    </div>
  );
};
