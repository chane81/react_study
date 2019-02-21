// module.exports = {
//   webpack: (config) => {
//     // Unshift polyfills in main entrypoint.
//     const originalEntry = config.entry;
//     config.entry = async () => {
//       const entries = await originalEntry();
//       if (entries['main.js']) {
//         entries['main.js'].unshift('./polyfills.js');
//       }
//       return entries;
//     };

//     return config;
//   }
// }

const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()


exports.exportPathMap = () => ({
  "/": { page: "/" },
  "/about": { page: "/about" },
  "/search": { page: "/search", query: { title: "hello-nextjs" } },
  "/ssr-test": { page: "/ssr-test", query: { title: "learn-nextjs" } }
});