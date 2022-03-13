module.exports = {
  presets: [
    [
      // "@vue/app",
      "@babel/preset-env",
      {
        useBuiltIns: "usage"
      },
    ]
  ],
  plugins: [
    // 添加这个
    '@babel/plugin-syntax-dynamic-import',
    // [
    //   "component",
    //   {
    //     "libraryName": "element-ui",
    //     "styleLibraryName": "theme-chalk"
    //   }
    // ]
  ]
}
