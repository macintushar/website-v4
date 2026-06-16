import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  IconMoonFilled,
  IconSunFilled,
  IconDeviceImac,
} from "@tabler/icons-react";

type Theme = "theme-light" | "dark" | "system";

export default function ModeToggle() {
  const themes: Theme[] = ["theme-light", "dark", "system"];

  const [theme, setThemeState] = React.useState<Theme>("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <Button
      onClick={() =>
        setThemeState(themes[(themes.indexOf(theme) + 1) % themes.length])
      }
      variant="secondary"
      size="icon-lg"
    >
      {theme === "dark" && <IconMoonFilled />}
      {theme === "theme-light" && <IconSunFilled />}
      {theme === "system" && <IconDeviceImac />}
    </Button>
  );
}
