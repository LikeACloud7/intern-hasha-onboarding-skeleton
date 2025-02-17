import { cva } from 'class-variance-authority';

export const headerTextStyle = cva(
  'font-pretendard font-semibold text-[14px] leading-[19.6px] tracking-normal w-auto h-auto',
);

export const filterBarBlockStyle = cva(
  'flex justify-between rounded-[10px] py-[10px] px-[20px]',
);

export const filterBarTextStyle = cva(
  'w-full h-auto font-pretendard font-semibold text-[18px] leading-[27px] tracking-normal',
);
