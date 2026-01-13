export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Ryan Gladstone",
  description: "News, engineering, product management, and AI",
  author: {
    name: "Ryan Gladstone",
    bio: "Director of Product Engineering, Creator Apps at Arc XP, The Washington Post.",
  },
  social: {
    github: "https://github.com/ryangladstone",
    twitter: "https://x.com/ryangladstone",
    linkedin: "https://linkedin.com/in/ryangladstone",
  },
  siteUrl: "https://ryangladstone.com"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;