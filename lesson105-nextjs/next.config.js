exports.exportPathMap = () => ({
  "/": { page: "/" },
  "/about": { page: "/about" },
  "/search": { page: "/search", query: { title: "hello-nextjs" } },
  "/ssr-test": { page: "/ssr-test", query: { title: "learn-nextjs" } }
  })