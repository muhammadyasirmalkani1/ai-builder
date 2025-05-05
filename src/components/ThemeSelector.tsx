
import React from 'react';
import { Palette, SunMoon, PaintBucket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/context/ThemeContext';
import { Theme } from '@/types/theme';

interface ThemeOption {
  name: string;
  icon: JSX.Element;
  value: Theme;
}

const themeOptions: ThemeOption[] = [
  { 
    name: 'Light', 
    icon: <SunMoon className="mr-2 h-4 w-4" />,
    value: 'light' 
  },
  { 
    name: 'Dark', 
    icon: <SunMoon className="mr-2 h-4 w-4" strokeWidth={1.5} />,
    value: 'dark' 
  },
  { 
    name: 'Purple', 
    icon: <Palette className="mr-2 h-4 w-4" />,
    value: 'purple' 
  },
  { 
    name: 'Ocean', 
    icon: <PaintBucket className="mr-2 h-4 w-4" />,
    value: 'ocean' 
  },
  { 
    name: 'Pastel', 
    icon: <Palette className="mr-2 h-4 w-4" strokeWidth={1.5} />,
    value: 'pastel' 
  }
];

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Select Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option) => (
          <DropdownMenuItem 
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={theme === option.value ? 'bg-accent' : ''}
          >
            {option.icon}
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
