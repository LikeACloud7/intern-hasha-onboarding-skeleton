import type { Context } from 'react';
import { useContext } from 'react';

export const useGuardContext = <T extends Record<string, unknown>>(
  contextValue: Context<T | null>,
): T => {
  const context = useContext(contextValue);
  if (context === null)
    throw new Error(
      `컨텍스트 값이 존재하지 않습니다: ${contextValue.displayName ?? ''}`,
    );
  return context;
};
