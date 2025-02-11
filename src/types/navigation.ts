// types/navigation.ts

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItemWithChildren[];
}

export interface MainNavItem {
  title: string;
  href: string;
  description?: string;
  sections?: NavSection[];
}

export interface SiteConfig {
  mainNav: MainNavItem[];
}

export const siteConfig: SiteConfig = {
  mainNav: [
    {
      title: "Industries",
      href: "/industries",
      sections: [
        {
          title: "Manufacturing & Technology",
          items: [
            {
              title: "Automotive",
              href: "/industries/automotive",
              description: "Digital solutions for automotive manufacturers and suppliers",
            },
            {
              title: "Manufacturing",
              href: "/industries/manufacturing",
              description: "Smart factory and Industry 4.0 solutions",
            }
          ]
        },
        {
          title: "Banking",
          items: [
            {
              title: "Banking",
              href: "/industries/banking",
              description: "Digital transformation for banking and capital markets",
            },
            {
              title: "Insurance",
              href: "/industries/insurance",
              description: "Innovation in insurance and risk management",
            }
          ]
        },
        {
          title: "Public Sector",
          items: [
            {
              title: "Government",
              href: "/industries/government",
              description: "Digital transformation for government agencies",
            },
            {
              title: "Insurance",
              href: "/industries/insurance",
              description: "Innovation in insurance and risk management",
            }
          ]
        }
      ]
    },
    {
      title: "Services",
      href: "/services",
      sections: [
        {
          title: "Digital & Cloud",
          items: [
            {
              title: "Cloud Services",
              href: "/services/cloud",
              description: "Cloud transformation and optimization",
            },
            {
              title: "Data & AI",
              href: "/services/data-ai",
              description: "AI and analytics solutions",
            }
          ]
        },
        {
          title: "Enterprise Solutions",
          items: [
            {
              title: "Consulting",
              href: "/services/consulting",
              description: "Strategic business and technology consulting"
            },
            {
              title: "Cybersecurity",
              href: "/services/cybersecurity",
              description: "Comprehensive security solutions",
            }
          ]
        },
        {
          title: "Payment Solutions",
          items: [
            {
              title: "UPI Payment Solutions",
              href: "/services/upi-solutions",
              description: "Streamlined UPI payment solutions"
            },
            {
              title: "Digital Invoicing & SMS Pay",
              href: "/services/digital-invoicing-sms-pay",
              description: " Digital invoicing and SMS-based payment solutions"
            },
            {
              title: "Payment Gateway Services",
              href: "/services/payment-gateway",
              description: "Payment gateway for Businesess of any size"
            },
          ]
        },
        {
          title: "ERP",
          items: [
            {
              title: "Comprehensive Billing Applications",
              href: "/services/billing-application",
              description: "Streamlined UPI payment solutions"
            },
            {
              title: "POS & Invoicing Solutions",
              href: "/services/pos-invoicing",
              description: "Streamlined UPI payment solutions"
            },
            {
              title: "Advanced Analytics & Reporting",
              href: "/services/analytics-reporting",
              description: "Streamlined UPI payment solutions"
            },
          ]
        }
      ]
    },
    {
      title: "Insights",
      href: "/insights",
      sections: [
        {
          title: "Thought Leadership",
          items: [
            {
              title: "Blog",
              href: "/insights/blog",
              description: "Latest insights and thought leadership",
            },
            {
              title: "Case Studies",
              href: "/insights/case-studies",
              description: "Client success stories and implementations",
            }
          ]
        },
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
              title: "About Us",
              href: "/about",
              description: "Our mission, values, and leadership",
            },
            {
              title: "Sustainability",
              href: "/about/sustainability",
              description: "Our commitment to sustainability",
            }
          ]
        },
        {
          title: "Careers",
          items: [
            {
              title: "Careers",
              href: "/careers",
              description: "Join our global team",
            },
          ]
        }
      ]
    }
  ]
};