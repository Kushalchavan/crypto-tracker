"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Input } from "../ui/input";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-6 lg:px-16 xl:px-22 text-sm border-b">
        <h1 className="font-bold text-xl text-foreground">CryptoPulse</h1>

        <div className="hidden md:flex items-center gap-8 transition duration-500 text-muted-foreground font-semibold">
          <a href="#" className="hover:text-green-600 transition">
            Cryptocurrencies
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Exchanges
          </a>
          <a href="#" className="hover:text-green-600 transition">
            NFT
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Learn
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Products
          </a>
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Input placeholder="Search..." className="bg-gray-100 placeholder:font-bold"/>
        </div>
      </nav>
  );
};
export default Navbar;
