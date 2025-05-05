
import React, { createContext, useState, useContext, ReactNode, useCallback, useMemo } from 'react';
import { Theme, ThemeContextValue, themes, themeConfigs } from '@/types/theme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const isValidTheme = useCallback((theme: string): theme is Theme => {
    return themes.includes(theme as Theme);
  }, []);

  const handleSetTheme = useCallback((newTheme: Theme) => {
    if (isValidTheme(newTheme)) {
      setTheme(newTheme);
      // Apply gradient to body background
      document.body.style.background = themeConfigs[newTheme].colors.gradient;
    } else {
      console.error(`Invalid theme: ${newTheme}`);
    }
  }, [isValidTheme]);

  const themeConfig = useMemo(() => themeConfigs[theme], [theme]);

  const value: ThemeContextValue = {
    theme,
    setTheme: handleSetTheme,
    isValidTheme,
    themeConfig,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

