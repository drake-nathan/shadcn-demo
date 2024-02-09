import { createContext, useContext, useEffect, useState } from "react";
import { z } from "zod";

const themeSchema = z.enum(["dark", "light", "system"]);

type Theme = z.infer<typeof themeSchema>;

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const initialState: ThemeProviderState = {
  setTheme: () => null,
  theme: "system",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const storedTheme = localStorage.getItem(storageKey);
  const isValidTheme = themeSchema.safeParse(storedTheme);

  const [theme, setTheme] = useState<Theme>(
    isValidTheme.success ? isValidTheme.data : defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      root.classList.remove("light", "dark");

      if (theme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const value = {
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    theme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  return context;
};
