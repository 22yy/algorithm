import { sidebar } from "vuepress-theme-hope";

export default sidebar({

  '/algorithm/leetCode/': require('../algorithm/leetCode/sidebar'),

  '/writing/' : require('../writing/sidebar')
});
