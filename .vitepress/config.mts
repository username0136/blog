import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PixelOS Docs",
  description: "TODO",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Blog", link: "/" },
      {
        text: "For Users",
        link: "/docs/ForUsers/faq",
        activeMatch: "^/docs/ForUsers/",
      },
      {
        text: "For Maintainers",
        link: "/docs/JoinTheTeam",
        activeMatch: "^/docs/JoinTheTeam/",
      },
      {
        text: "Resources",
        link: "/docs/resources/ImportantLinks",
        activeMatch: "^/docs/resources/",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: {
      "/docs/ForUsers/": [
        {
          items: [
            { text: "Frequently Asked Questions", link: "/docs/ForUsers/faq" },
            {
              text: "Community Guidelines",
              link: "/docs/ForUsers/CommunityGuidelines",
            },
          ],
        },
      ],
      "/docs/JoinTheTeam/": [
        {
          text: "Join The Team",
          items: [
            {
              text: "Maintainers Requirements",
              link: "/docs/JoinTheTeam/MaintainersRequirements",
            },
            {
              text: "Device Requirements",
              link: "/docs/JoinTheTeam/DeviceRequirements",
            },
          ],
        },
        {
          text: "Building PixelOS",
          items: [
            {
              text: "Build Guide",
              link: "/docs/JoinTheTeam/BuildingPixelOS",
            },
          ],
        },
      ],
      "/docs/resources": [
        {
          items: [
            {
              text: "Important Links",
              link: "/docs/resources/ImportantLinks",
            },
            {
              text: "Banners Archive",
              link: "/docs/resources/BannerArchives",
            },
            {
              text: "Wallpapers",
              link: "/docs/resources/wallpapers",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/PixelOS-AOSP" },
      { icon: "telegram", link: "https://t.me/PixelOSOfficial" },
      { icon: "twitter", link: "https://twitter.com/PixelOSROM" },
    ],
  },
});
