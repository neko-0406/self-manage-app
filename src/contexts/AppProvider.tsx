import { createContext, useContext, ReactNode, useState, useMemo, useEffect } from 'react';

export type Theme = 'light' | 'dark';

// Contextで共有する値の型定義
interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Contextの作成
const AppContext = createContext<AppContextType | undefined>(undefined);

// Context Providerコンポーネント
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 初期テーマをlocalStorageから読み込むか、システムの prefers-color-scheme に合わせる
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme) return savedTheme;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    // themeが変更されたらlocalStorageに保存
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Contextを使用するためのカスタムフック
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};