export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Radani Confecção de roupa infantil",
  description: "Confecção de roupa infantil em Porangaba-SP",
  navItems: [

    {
      label: "Lançamentos",
      href: "/categorias/Lancamento",
    },
    {
      label: "Body",
      href: "/categorias/Body",
    },
    {
      label: "Pagão",
      href: "/categorias/Pagao",
    },
    {
      label: "Produtos",
      href: "/produtos",
    },    
    {
      label: "Sobre",
      href: "/sobre",
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
      label: "Todos os Produtos",
      href: "/produtos",
    },
    {
      label: "Todos as Categorias ",
      href: "/categorias",
    },
    {
      label: "Sobre Nós",
      href: "/sobre",
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
