import { Hono } from "hono";
import { createRequestHandler } from "react-router";

const app = new Hono();

// Add more routes here


// app.get("/sites.html", async (c) => {
//   try {
//     const env: any = c.env;
//     const res = await env.ASSETS.fetch(new URL("/sites.html", c.req.url));
//     if (res && res.status === 200) return res;
//   } catch (e) {}
//   return c.text("Not found", 404);
// });

app.get("*", (c) => {
  const requestHandler = createRequestHandler(
    () => import("virtual:react-router/server-build"),
    import.meta.env.MODE,
  );

  return requestHandler(c.req.raw, {
    cloudflare: { env: c.env, ctx: c.executionCtx },
  });
});

export default app;
