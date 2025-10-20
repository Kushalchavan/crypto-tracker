"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, User, XIcon } from "lucide-react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="min-h-screen pb-20">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          <h1 className="font-bold text-xl text-foreground">CryptoPulse</h1>
          
          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
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
            <Link href="/signup">
              <Button className="hidden md:block px-6 py-2 active:scale-95 transition-all rounded-full text-white cursor-pointer">
                Sign Up
              </Button>
            </Link>

            <Link href="/login">
              <Button className="cursor-pointer hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900 bg-trasparent">
                Login
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="#" className="text-white">
            Cryptocurrencies
          </a>
          <a href="#" className="text-white">
            Exchanges
          </a>
          <a href="#" className="text-white">
            NFT
          </a>
          <a href="#" className="text-white">
            Learn
          </a>
          <a href="#" className="text-white">
            Products
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex"
          >
            <XIcon className="stroke-1" />
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

          {/* Headline + CTA */}
          <h1 className="mt-24 text-5xl md:text-6xl font-bold max-w-5xl text-center md:leading-[70px]">
            Track your Coins and NFTs with{"  "}
            <span className=" bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent text-nowrap">
              CryptoPulse Portfolio{" "}
            </span>{" "}
          </h1>

          <p className="max-w-md text-center text-base  my-7">
            Whether you’re just observing the crypto market or meticulously
            tracking your holdings — CryptoPulse Portfolio is tailored to meet
            your needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 ">
            <Link href="/login">
              <button className="bg-green-600 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-indigo-400 flex gap-2 items-center transition-colors font-semibold cursor-pointer">
                Get started
                <ArrowRight className="stroke-1" />
              </button>
            </Link>

            <Link href="/signup">
              <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-100 transition rounded-full px-7 h-12 cursor-pointer text-slate-700 font-semibold">
                <User className="size-4 stroke-1 " />
                <span>Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
