import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";

// Moved the loading of the application's css file from individual tsx files:
//
// import "./app.css";
//
// NOTE: attempting to use import() to conditionally load css files
//       caused delays in the loading and display of style and layout:
//
//       // Dynamically load the appropriate stylesheet based on the current pathname
//       if (typeof window !== "undefined") {
//         const path = window.location.pathname.split("/");
//         const basepath = path.length >= 2 ? path[1] : "";
//         if (basepath === "site2") {
//           import("./app-site2.css");
//         } else {
//           import("./app.css");
//         }
//       }
//

import logoUrl from "./images/2/logo.svg";


export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const site1 = (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent mb-1 pl-8 pt-5 pb-2">
          Pangbourne and District Volunteer Centre <br />
          (Pangbourne Volunteers)
        </p>
      {/* <h1 className="text-blue-700 text-3xl text-left mb-1 pl-8 pt-4 pb-2 uppercase wrap">
        Pangbourne and District Volunteer Centre
        (Pangbourne Volunteers)
      </h1> */}
          <nav style={{
            width: "100%",
            padding: "1rem 2rem",
            background: "linear-gradient(160deg, #f03fa6a4 0%, #8a5cf652 100%)",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            gap: "2rem",
            alignItems: "center"
          }}>
            <a href="/" style={{ 
              textDecoration: "none", 
              color: "#7c2b83ee",
              fontWeight: location.pathname === "/" ? "bold" : "normal",
              }}>Welcome</a>
            <a href="/about" style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === "/about" ? "bold" : "normal",
              padding: location.pathname === "/about" ? "0.2rem 0.20rem" : "0.2rem 0.25rem",
              }}>About</a>
            <a href="/assistance" style={{
              textDecoration: "none",
              color: location.pathname === "/assistance" ? "#fff" : "#7c2b83ee",
              fontWeight: location.pathname === "/assistance" ? "bold" : "normal",
              background: location.pathname === "/assistance" ? "#4b206bf3" : "#cee4dd79",
              borderRadius: location.pathname === "/assistance" ? "0.5rem" : "0.5rem",
              padding: location.pathname === "/assistance" ? "0.2rem 0.5rem" : "0.2rem 0.55rem",
              // transition: "background 5.5s, color 5.5s"
            }}>Assistance</a>
            <a href="/volunteering" style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === "/volunteering" ? "bold" : "normal",
              padding: location.pathname === "/volunteering" ? "0.2rem 0.1rem" : "0.2rem 0.15rem",
              }}>Volunteering</a>
            <a href="/contact" style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === "/contact" ? "bold" : "normal",
              padding: location.pathname === "/contact" ? "0.2rem 0.25rem" : "0.2rem 0.15rem",
              }}>Contact</a>
          </nav>
          {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );

  const basepath_site2 = "/site2"
  const site2 = (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <p style={{ padding: "1rem 2rem 2rem" }}>
          <img
            alt="Pangbourne Volunteers logo"
            src={logoUrl}
            width={680}
            style={{ height: "auto", display: "block" }}
            loading="eager"
            decoding="async"
          />
        </p>
          <nav style={{
            width: "100%",
            padding: "1rem 2rem",
            // rgba(117, 20, 196, 0.15)
            // background: "linear-gradient(160deg, #f03fa6a4 0%, #8a5cf652 100%)",
            background: "rgba(117, 20, 196, 0.15)",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            gap: "2rem",
            alignItems: "center"
          }}>
            <a
              href={basepath_site2 + "/"}
              style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight:
                location.pathname === basepath_site2 ||
                location.pathname === `${basepath_site2}/`
                ? "bold"
                : "normal",
              }}
            >
              Welcome
            </a>
            <a
              href={basepath_site2 + "/about"}
              style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight:
                location.pathname === `${basepath_site2}/about`
                ? "bold"
                : "normal",
              padding:
                location.pathname === `${basepath_site2}/about"`
                ? "0.2rem 0.20rem"
                : "0.2rem 0.25rem",
              }}>About</a>
            <a
              href={basepath_site2 + "/assistance"}
              style={{
              textDecoration: "none",
              color: location.pathname === "/site2/assistance" ? "#fff" : "#7c2b83ee",
              fontWeight: location.pathname === "/site2/assistance" ? "bold" : "normal",
              background: location.pathname === "/site2/assistance" ? "#4b206bf3" : "#cee4dd79",
              borderRadius: location.pathname === "/site2/assistance" ? "0.5rem" : "0.5rem",
              padding: location.pathname === "/site2/assistance" ? "0.2rem 0.5rem" : "0.2rem 0.55rem",
              // transition: "background 5.5s, color 5.5s"
            }}>Assistance</a>
            <a
              href={basepath_site2 + "/volunteering"}
              style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === "/site2/volunteering" ? "bold" : "normal",
              padding: location.pathname === "/site2/volunteering" ? "0.2rem 0.1rem" : "0.2rem 0.15rem",
              }}>Volunteering</a>
            <a
              href={basepath_site2 + "/contact"}
              style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === "/site2/contact" ? "bold" : "normal",
              padding: location.pathname === "/site2/contact" ? "0.2rem 0.25rem" : "0.2rem 0.15rem",
              }}>Contact</a>
          </nav>
          {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
  
  const path = location.pathname.split("/")
  const basepath = path.length >= 2 ? path[1]: ""

  switch (basepath) {
    case "site2":
      return site2;  
      break;
  
    default:
      return site1;
      break;
  }
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
