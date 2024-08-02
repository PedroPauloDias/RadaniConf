"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import LogoRadani from "../public/logo2.png"
import Image from "next/image";
import MyButton from "./myButton";
import useAuth from "../app/hooks/useAuth"; 
import Logout from "./Logout";
import { useRouter } from "next/navigation";


export const Navbar = () => {
  const { session } = useAuth();
  const router = useRouter()

  return (
    <NextUINavbar maxWidth="xl" position="sticky"  >
      <NavbarContent className="basis-1/5 sm:basis-full px-4" justify="start">
        <NavbarBrand className="gap-3 max-w-28 sm:max-w-40  min-w-32  ">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src={LogoRadani} height={200} width={350} alt='Logo da empresa Radani' />
          </NextLink>
        </NavbarBrand>
        <div className="hidden sm:flex gap-4 justify-start ml-1"    >
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full mr-4"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2 ">
        {session ? (
            <Logout />
          ) : (
            <MyButton onClick={() => router.push('/login')} color="radani" size="xs">
              Login
            </MyButton>
          )}
        </NavbarItem>
        <ThemeSwitch />
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1" justify="end">
        {session ? (
          <Logout />
        ) : (
          <MyButton onClick={() => router.push('/login')} color="radani" size="sm">
            Login
          </MyButton>
        )}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2"    >
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}
              onClick={() => toggleMenu()}

            >
              <Link
                color="foreground"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>

            </NavbarMenuItem>
          ))}
          <h2 className=' mt-16'>Redes Sociais</h2>
          <div className='w-full flex gap-8 mt-2' >
            <p><FaSquareFacebook size={20} /></p>
            <p><FaInstagram size={20} /></p>
            <p><BsTwitterX size={20} /></p>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
