export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Radani Confecção infantil",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Produtos",
      href: "/produtos",
    },
    {
      label: "Body",
      href: "/categorias/Body",
    },
    {
      label: "Mijão",
      href: "/categorias/Mijao",
    },
    {
      label: "Pagão",
      href: "/categorias/Pagao",
    },
    {
      label: "Bandana",
      href: "/categorias/Bandana",
    },
    {
      label: "Lançamentos",
      href: "/categorias/Lancamento",
    },
    {
      label: "Sobre nós",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Body",
      href: "/categorias/Body",    },
    {
      label: "Mijão",
      href: "/categorias/Mijao",
    },
    {
      label: "Pagão",
      href: "/categorias/Pagao",
    },
    {
      label: "Bandana",
      href: "/categorias/Bandana",
    },
    {
      label: "Lançamentos",
      href: "/categorias/Lancamento",
    },
    {
      label: "Todos os Produtos",
      href: "/produtos",
    },
    {
      label: "Todos as Categorias ",
      href: "/categorias",
    },
    {
      label: "Sobre nós",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
