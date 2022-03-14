// 这个可以 就是生产环境构建elementcss大
// module.exports = {
//   presets: [
//     [
//       // "@vue/app",
//       "@babel/preset-env",
//       {
//         useBuiltIns: "usage"
//       },
//     ]
//   ],
//   plugins: [
//     // 添加这个
//     '@babel/plugin-syntax-dynamic-import',
//   ]
// }

module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    '@babel/plugin-syntax-dynamic-import',
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}



// module.exports = {
//   "presets": [
//     "@vue/cli-plugin-babel/preset",
//     "@babel/preset-env",
//     {
//       useBuiltIns: "usage"
//     },

//   ],
//   plugins: [

//     [
//       // 添加这个
//       '@babel/plugin-syntax-dynamic-import',
//       "component",
//       {
//         "libraryName": "element-ui",
//         "styleLibraryName": "theme-chalk"
//       }
//     ]
//   ]
// }
