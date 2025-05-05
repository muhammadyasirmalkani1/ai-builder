
export const themes = ['light', 'dark', 'purple', 'ocean', 'pastel'] as const;
export type Theme = typeof themes[number];

export interface ThemeColors {
  background: string;
  foreground: string;
  gradient: string;
  card: {
    background: string;
    foreground: string;
    gradient: string;
  };
  primary: {
    DEFAULT: string;
    foreground: string;
  };
  secondary: {
    DEFAULT: string;
    foreground: string;
  };
}

export interface ThemeConfig {
  colors: ThemeColors;
}

export const themeConfigs: Record<Theme, ThemeConfig> = {
  light: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      gradient: 'linear-gradient(to right, #e6e9f0 0%, #eef1f5 100%)',
      card: {
        background: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
        gradient: 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      }
    }
  },
  dark: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      gradient: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
      card: {
        background: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
        gradient: 'linear-gradient(to right, #d7d2cc 0%, #304352 100%)'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      }
    }
  },
  purple: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      gradient: 'linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)',
      card: {
        background: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
        gradient: 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      }
    }
  },
  ocean: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      gradient: 'linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)',
      card: {
        background: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
        gradient: 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      }
    }
  },
  pastel: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      gradient: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
      card: {
        background: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
        gradient: 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      }
    }
  }
};

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isValidTheme: (theme: string) => theme is Theme;
  themeConfig: ThemeConfig;
}

