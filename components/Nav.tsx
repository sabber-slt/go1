import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={isMenuOpen}
      className="absolute w-[100vw] z-50 h-14 lg:h-16 shadow-md"
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-main"
      />

      <NavbarContent className="hidden sm:flex gap-8 z-50" justify="center">
        <NavbarItem>
          <Link href="/" className="font-bold text-[16px]">
            Home{" "}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="font-semibold text-[16px]">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://github.com/sabber-slt"
            className="font-semibold text-[16px]"
          >
            Github
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link href="/blogs" className="font-semibold text-[16px]">
            Blogs{" "}
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link
            href="https://raybod.io/services/software-development"
            className="font-semibold text-[16px]"
          >
            Development
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://server.sabber.dev/api/files/jaj0jt4uvl69aa3/4n7e65aoh97h9n6/cvzVgdmTzdQD_5CXP7zyOzg.pdf"
            className="font-semibold text-[16px]"
          >
            CV
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="absolute right-0">
        <NavbarItem>
          <Link href="/">
            <div className="relative w-10 lg:w-12 h-10 lg:h-12">
              <Image
                src="/logo.png"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="40%"
              />
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="absolute h-screen right-0 top-14 z-50">
        <NavbarMenuItem className="w-full left-0 flex flex-col">
          <Link
            className="text-[15px] w-72 border-b-2 border-main font-[600] mt-7"
            href="/"
          >
            Home{" "}
          </Link>
          <Link
            className="text-[15px] w-72 border-b-2 border-main font-[600] mt-4"
            href="/about"
          >
            About Us
          </Link>
          {/* <Link
            className="text-[15px] w-72 border-b-2 border-main font-[600] mt-4"
            href="/blogs"
          >
            Blogs{" "}
          </Link> */}
          <Link
            className="text-[15px] w-72 border-b-2 border-main font-[600] mt-4"
            href="https://raybod.io/services/consultation"
          >
            IT Consulting
          </Link>
          <Link
            className="text-[15px] w-72 border-b-2 border-main font-[600] mt-4"
            href="https://raybod.io/services/software-development"
          >
            Development
          </Link>
          <Link
            className="text-[15px] w-72 border-b-2 border-main font-[600] mt-4"
            href="https://raybod.io"
          >
            Raybod
          </Link>
          <Link
            className="text-[15px] w-72 border-b-2 border-main font-[600] mt-4"
            href="https://server.sabber.dev/api/files/jaj0jt4uvl69aa3/4n7e65aoh97h9n6/cvzVgdmTzdQD_5CXP7zyOzg.pdf"
          >
            CV
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
