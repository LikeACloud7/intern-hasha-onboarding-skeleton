import { filterBarBlockStyle, filterBarTextStyle } from '@/entities/style';

const FilterBar = () => {
  return (
    <div className="w-[220px] h-auto py-[70px] gap-[10px] flex flex-col">
      <div className={filterBarBlockStyle()}>
        <p className={filterBarTextStyle()}>개발</p>
      </div>
      <div className={filterBarBlockStyle()}>
        <p className={filterBarTextStyle()}>기획</p>
      </div>
      <div className={filterBarBlockStyle()}>
        <p className={filterBarTextStyle()}>디자인</p>
      </div>
      <div className={filterBarBlockStyle()}>
        <p className={filterBarTextStyle()}>마케팅</p>
      </div>
    </div>
  );
};

export default FilterBar;
