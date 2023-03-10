import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
 
  pure: true,

  iconAssets: "iconfont",


  //文档在仓库中的目录
  docsDir: "",

  // 导航栏
  navbar: navbar,

  // 侧边栏
  sidebar: sidebar,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "",

  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,

  //页脚的默认内容，可输入 HTMLString
  footer: "hello",

  //是否默认显示页脚
  displayFooter: true,

  //全屏按钮
  fullscreen: true,

  //是否显示返回顶部
  backToTop:true,

  //主题色选择器
  themeColor: {
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  

  
  plugins: {
    blog: {
      //自动摘要
      autoExcerpt: false,
    },

    mdEnhance: {
      // 启用下角标功能
      sub: true,
      // 启用上角标
      sup: true,
      //是否启用幻灯片支持。
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      //支持Markdown标记
      mark: true,
      //添加提示、注释、信息、注意、警告和详情自定义容器的支持，默认true 
      container: true,
    },
    
  },
});
