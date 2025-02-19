// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import Banner from "../components/Banner.vue";
import DeviceScreenshot from "../components/DeviceScreenshot.vue";

import VPArticle from "../components/VPArticle.vue";
import VPArticles from "../components/VPArticles.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    // ...
    app.component("Banner", Banner);
    app.component("DeviceScreenshot", DeviceScreenshot);
    app.component("VPArticle", VPArticle);
    app.component("VPArticles", VPArticles);
  },
} satisfies Theme;
