"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false); // State to track if component is mounted

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after the component mounts
  }, []);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Toggle theme on button click
  };

  if (!isMounted) return null; // Prevent rendering until mounted

  return (
    <Button className="m-2" variant="outline" onClick={handleToggle}>
      {theme === "dark" ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
