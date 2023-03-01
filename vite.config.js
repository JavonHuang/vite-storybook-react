import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   // 配置路径别名
  //   alias: {
  //     '@':resolve('src')
  //   },
  // },
  // //全局引入
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       /**如果引入多个文件，可以使用
  //      * '@import "@/assets/scss/globalVariable1.scss";
  //      * @import"@/assets/scss/globalVariable2.scss";'
  //     **/
  //       additionalData: '@import "@/stories/style/globalVar.scss";',
  //     }
  //   }
  // },
  plugins: [react()],
})
