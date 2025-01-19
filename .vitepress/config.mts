import { defineConfig } from "vitepress";
import { getSidebarBlog } from "./blogUtil";

const blogItems = await getSidebarBlog();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PixelOS Docs",
  description: "TODO",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Blog", link: `/blog/${blogItems[0]}` },
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
      "blog/": [
        {
          base: "/blog/",
          items: blogItems.map((item) => ({
            text: item,
            link: item,
          })),
        },
      ],
      "/docs/ForUsers/": [
        {
          base: "/docs/ForUsers/",
          items: [
            {
              text: "Frequently Asked Questions",
              link: "faq",
            },
            {
              text: "Community Guidelines",
              link: "CommunityGuidelines",
            },
          ],
        },
      ],
      "/docs/JoinTheTeam/": [
        {
          text: "Join The Team",
          base: "/docs/JoinTheTeam/",
          items: [
            {
              text: "Maintainers Requirements",
              link: "MaintainersRequirements",
            },
            {
              text: "Device Requirements",
              link: "DeviceRequirements",
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
          base: "/docs/resources/",
          items: [
            {
              text: "Important Links",
              link: "ImportantLinks",
            },
            {
              text: "Banners Archive",
              link: "BannerArchives",
            },
            {
              text: "Wallpapers",
              link: "wallpapers",
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
