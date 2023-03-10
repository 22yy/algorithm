import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search"; 
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "algorithm",
  description: "算法笔记",
  base: "/algorithm/",
  theme,
  plugins:[
    searchPlugin
  ]
  
});
