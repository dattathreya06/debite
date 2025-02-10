// types/navigation.ts

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItem[];
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
              items: [
                {
                  title: "Connected Vehicles",
                  href: "/industries/automotive/connected-vehicles"
                },
                {
                  title: "Manufacturing Excellence",
                  href: "/industries/automotive/manufacturing"
                }
              ]
            },
            {
              title: "Manufacturing",
              href: "/industries/manufacturing",
              description: "Smart factory and Industry 4.0 solutions",
              items: [
                {
                  title: "Smart Factory",
                  href: "/industries/manufacturing/smart-factory"
                },
                {
                  title: "Supply Chain",
                  href: "/industries/manufacturing/supply-chain"
                }
              ]
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
              items: [
                {
                  title: "Digital Banking",
                  href: "/banking/financial-services/digital-banking"
                },
                {
                  title: "Payments",
                  href: "/banking/financial-services/payments"
                }
              ]
            },
            {
              title: "Insurance",
              href: "/industries/insurance",
              description: "Innovation in insurance and risk management",
              items: [
                {
                  title: "Digital Insurance",
                  href: "/industries/insurance/digital"
                },
                {
                  title: "Claims Management",
                  href: "/industries/insurance/claims"
                }
              ]
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
              items: [
                {
                  title: "Cloud Migration",
                  href: "/services/cloud/migration"
                },
                {
                  title: "Cloud Native",
                  href: "/services/cloud/native"
                }
              ]
            },
            {
              title: "Data & AI",
              href: "/services/data-ai",
              description: "AI and analytics solutions",
              items: [
                {
                  title: "Advanced Analytics",
                  href: "/services/data-ai/analytics"
                },
                {
                  title: "Machine Learning",
                  href: "/services/data-ai/machine-learning"
                }
              ]
            }
          ]
        },
        {
          title: "Enterprise Solutions",
          items: [
            {
              title: "Consulting",
              href: "/services/consulting",
              description: "Strategic business and technology consulting",
              items: [
                {
                  title: "Digital Strategy",
                  href: "/services/consulting/digital-strategy"
                },
                {
                  title: "Technology Advisory",
                  href: "/services/consulting/technology"
                }
              ]
            },
            {
              title: "Cybersecurity",
              href: "/services/cybersecurity",
              description: "Comprehensive security solutions",
              items: [
                {
                  title: "Security Operations",
                  href: "/services/cybersecurity/operations"
                },
                {
                  title: "Identity & Access",
                  href: "/services/cybersecurity/identity"
                }
              ]
            }
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
              items: [
                {
                  title: "Technology Trends",
                  href: "/insights/blog/tech-trends"
                },
                {
                  title: "Digital Innovation",
                  href: "/insights/blog/innovation"
                }
              ]
            },
            {
              title: "Case Studies",
              href: "/insights/cases-studies",
              description: "Client success stories and implementations",
              items: [
                {
                  title: "Featured Cases",
                  href: "/insights/cases/featured"
                },
                {
                  title: "Industry Solutions",
                  href: "/insights/cases/solutions"
                }
              ]
            }
          ]
        },
        {
          title: "Resources",
          items: [
            {
              title: "Research & Reports",
              href: "/insights/research",
              description: "In-depth research and industry reports",
              items: [
                {
                  title: "Market Analysis",
                  href: "/insights/research/market"
                },
                {
                  title: "Technology Reports",
                  href: "/insights/research/tech"
                }
              ]
            },
            {
              title: "Events",
              href: "/insights/events",
              description: "Upcoming events and webinars",
              items: [
                {
                  title: "Conferences",
                  href: "/insights/events/conferences"
                },
                {
                  title: "Webinars",
                  href: "/insights/events/webinars"
                }
              ]
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
              title: "About Us",
              href: "/about/corporate-profile",
              description: "Our mission, values, and leadership",
              items: [
                {
                  title: "Leadership",
                  href: "/about/leadership"
                },
                {
                  title: "History",
                  href: "/about/history"
                }
              ]
            },
            {
              title: "Sustainability",
              href: "/about/sustainability",
              description: "Our commitment to sustainability",
              items: [
                {
                  title: "ESG",
                  href: "/about/sustainability/esg"
                },
                {
                  title: "Social Impact",
                  href: "/about/sustainability/social-impact"
                }
              ]
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
              items: [
                {
                  title: "Open Positions",
                  href: "/careers/search"
                },
                {
                  title: "Life at Debite",
                  href: "/careers/life"
                }
              ]
            },
            {
              title: "Partners",
              href: "/about/partners",
              description: "Our strategic partnerships",
              items: [
                {
                  title: "Technology Partners",
                  href: "/about/partners/technology"
                },
                {
                  title: "Alliance Partners",
                  href: "/about/partners/alliance"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};