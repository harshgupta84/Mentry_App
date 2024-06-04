"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

function Header() {
  const linkClassName =
    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50";

  return (
    <div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
          <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
            <span className="sr-only">Mentry</span>
          </Link>
          <div className="ml-auto flex gap-2">
            <Link href="/" className={linkClassName} prefetch={false}>
              Home
            </Link>
            <Link href="/about" className={linkClassName} prefetch={false}>
              About Us
            </Link>
            <Link href="/cars" className={linkClassName} prefetch={false}>
              Pricing
            </Link>
            <Link href="/portfolio" className={linkClassName} prefetch={false}>
              Portfolio
            </Link>
            <Link href="/contact" className={linkClassName} prefetch={false}>
              Contact
            </Link>
            <LoginLink>
              {" "}
              <Button
                variant="outline"
                className="justify-self-end px-2 py-1 text-xs border-white"
              >
                Sign in
              </Button>
            </LoginLink>
            <RegisterLink>
              <Button className="justify-self-end px-2 py-1 text-xs">
                Sign Up
              </Button>
            </RegisterLink>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
