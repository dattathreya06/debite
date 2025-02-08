export interface NavItem {
    title: string
    href: string
    description?: string
    icon?: string
  }
  
  export interface NavSection {
    title: string
    items: NavItem[]
  }
  
  export interface MainNavItem extends NavItem {
    sections?: NavSection[]
  }
  
  export const siteConfig = {
    mainNav: [
      {
        title: "Products",
        href: "/products",
        sections: [
          {
            title: "Financial Solutions",
            items: [
              {
                title: "Business Credit Card",
                href: "/products/credit-card",
                description: "Flexible business spending with rewards"
              },
              {
                title: "Revenue Financing",
                href: "/products/revenue-financing",
                description: "Growth capital based on your revenue"
              }
            ]
          },
          {
            title: "Enterprise Solutions",
            items: [
              {
                title: "Corporate Finance",
                href: "/products/corporate-finance",
                description: "Custom financing solutions for large businesses"
              },
              {
                title: "Payment Solutions",
                href: "/products/payments",
                description: "Streamlined payment processing"
              }
            ]
          }
        ]
      },
      {
        title: "Solutions",
        href: "/solutions",
        sections: [
          {
            title: "By Industry",
            items: [
              {
                title: "E-commerce",
                href: "/solutions/ecommerce",
                description: "Financial tools for online retailers"
              },
              {
                title: "SaaS",
                href: "/solutions/saas",
                description: "Solutions for software companies"
              }
            ]
          },
          {
            title: "By Need",
            items: [
              {
                title: "Working Capital",
                href: "/solutions/working-capital",
                description: "Short-term financing solutions"
              },
              {
                title: "Growth Financing",
                href: "/solutions/growth-financing",
                description: "Capital for business expansion"
              }
            ]
          }
        ]
      },
      {
        title: "Resources",
        href: "/resources",
        sections: [
          {
            title: "Learn",
            items: [
              {
                title: "Blog",
                href: "/blog",
                description: "Latest insights and updates"
              },
              {
                title: "Guides",
                href: "/guides",
                description: "In-depth financial resources"
              }
            ]
          },
          {
            title: "Support",
            items: [
              {
                title: "Help Center",
                href: "/help",
                description: "Answers to common questions"
              },
              {
                title: "Contact",
                href: "/contact",
                description: "Get in touch with our team"
              }
            ]
          }
        ]
      },
      {
        title: "About",
        href: "/about",
        sections: [
          {
            title: "Company",
            items: [
              {
                title: "Our Story",
                href: "/about/story",
                description: "Learn about our mission"
              },
              {
                title: "Careers",
                href: "/careers",
                description: "Join our team"
              }
            ]
          }
        ]
      }
    ]
  } 