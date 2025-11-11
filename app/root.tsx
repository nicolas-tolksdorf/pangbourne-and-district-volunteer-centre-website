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

import logoUrl from "./images/logo.svg";


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
  {
    rel: "shortcut icon",
    href: "/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96x96.png",
    sizes: "96x96",
  },
  {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const basepath_livesite = ""
  const livesite = (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent mb-1 pl-8 pt-5 pb-2">
          Pangbourne and District Volunteer Centre <br />
          (Pangbourne Volunteers)
        </p> */}
      {/* <h1 className="text-blue-700 text-3xl text-left mb-1 pl-8 pt-4 pb-2 uppercase wrap">
        Pangbourne and District Volunteer Centre
        (Pangbourne Volunteers)
      </h1> */}
        <p style={{ padding: "0.55rem 1.2rem 0.7rem" }}>
          <img
            alt="Pangbourne Volunteers logo"
            src={logoUrl}
            width={720}
            style={{ height: "auto", display: "block" }}
            loading="eager"
            decoding="async"
          />
        </p>
          <nav style={{
            width: "100%",
            padding: "1rem 2rem",
            background: "linear-gradient(160deg, #f03fa6a4 0%, #8a5cf652 100%)",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            gap: "0.2rem",
            alignItems: "center"
          }}>
            <a href={basepath_livesite + "/"} style={{ 
              textDecoration: "none", 
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_livesite}/` ? "bold" : "normal",
              padding: location.pathname === `${basepath_livesite}/about` ? "0.2rem 0.21rem" : "0.2rem 0.25rem 0.2rem 0rem",
              }}>Welcome</a>
            <span className="padding-0" style={{ paddingLeft: "1%", paddingRight: "1%", margin: "0"}}>|</span>
            <a href={basepath_livesite + "/about"} style={{
              textDecoration: "none",
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_livesite}/about` ? "bold" : "normal",
              padding: location.pathname === `${basepath_livesite}/about` ? "0.2rem 0.18rem" : "0.2rem 0.25rem",
              }}>About</a>
            <span className="padding-0" style={{ paddingLeft: "1%", paddingRight: "1%", margin: "0"}}>|</span>
            <a href={basepath_livesite + "/assistance"} style={{
              textDecoration: "none",
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_livesite}/assistance` ? "bold" : "normal",
              padding: location.pathname === `${basepath_livesite}/assistance` ? "0.2rem 0.5rem" : "0.2rem 0.55rem",
              width: `${basepath_livesite}/assistance` ? "100px" : "100px",
            }}>Assistance</a>
            <span className="padding-0" style={{ paddingLeft: "1%", paddingRight: "1%", margin: "0"}}>|</span>
            <a href={basepath_livesite + "/volunteering"} style={{
              textDecoration: "none",
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_livesite}/volunteering` ? "bold" : "normal",
              padding: location.pathname === `${basepath_livesite}/volunteering` ? "0.2rem 0.1rem" : "0.2rem 0.15rem",
              }}>Volunteering</a>
            <span className="padding-0" style={{ paddingLeft: "1%", paddingRight: "1%", margin: "0"}}>|</span>
            <a
              href={basepath_livesite + "/contact"}
              style={{
              textDecoration: "none",
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_livesite}/contact`? "bold" : "normal",
              padding: location.pathname === `${basepath_livesite}/contact` ? "0.2rem 0.25rem" : "0.2rem 0.15rem",
              }}>Contact</a>
          </nav>
          {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
  
  const basepath_site1 = "/site1"
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
            <a href={basepath_site1 + "/" }style={{ 
              textDecoration: "none", 
              color: "#7c2b83ee",
              fontWeight: location.pathname === `${basepath_site1}/` ? "bold" : "normal",
              }}>Welcome</a>
            <a href={basepath_site1 + "/about"} style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === `${basepath_site1}/about` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site1}/about` ? "0.2rem 0.20rem" : "0.2rem 0.25rem",
              }}>About</a>
            <a href={basepath_site1 + "/assistance"} style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === `${basepath_site1}/assistance` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site1}/assistance` ? "0.2rem 0.5rem" : "0.2rem 0.55rem",
            }}>Assistance</a>
            <a href={basepath_site1 + "/volunteering"} style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === `${basepath_site1}/volunteering` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site1}/volunteering` ? "0.2rem 0.1rem" : "0.2rem 0.15rem",
              }}>Volunteering</a>
            <a href={basepath_site1 + "/contact"} style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === `${basepath_site1}/contact` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site1}/contact` ? "0.2rem 0.25rem" : "0.2rem 0.15rem",
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
        {/* <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent mb-1 pl-8 pt-5 pb-2">
          Pangbourne and District Volunteer Centre <br />
          (Pangbourne Volunteers)
        </p> */}
      {/* <h1 className="text-blue-700 text-3xl text-left mb-1 pl-8 pt-4 pb-2 uppercase wrap">
        Pangbourne and District Volunteer Centre
        (Pangbourne Volunteers)
      </h1> */}
        <p style={{ padding: "0.55rem 1.2rem 0.7rem" }}>
          <img
            alt="Pangbourne Volunteers logo"
            src={logoUrl}
            width={720}
            style={{ height: "auto", display: "block" }}
            loading="eager"
            decoding="async"
          />
        </p>
          <nav style={{
            width: "100%",
            padding: "1rem 2rem",
            background: "linear-gradient(160deg, #f03fa6a4 0%, #8a5cf652 100%)",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            gap: "0.2rem",
            alignItems: "center"
          }}>
            <a href={basepath_site2 + "/"} style={{ 
              textDecoration: "none", 
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_site2}/` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site2}/about` ? "0.2rem 0.21rem" : "0.2rem 0.25rem 0.2rem 0rem",
              }}>Welcome</a>
            <span className="padding-0" style={{ paddingLeft: "1%", paddingRight: "1%", margin: "0"}}>|</span>
            <a href={basepath_site2 + "/about"} style={{
              textDecoration: "none",
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_site2}/about` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site2}/about` ? "0.2rem 0.18rem" : "0.2rem 0.25rem",
              }}>About</a>
            <span className="padding-0" style={{ paddingLeft: "1%", paddingRight: "1%", margin: "0"}}>|</span>
            <a href={basepath_site2 + "/assistance"} style={{
              textDecoration: "none",
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_site2}/assistance` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site2}/assistance` ? "0.2rem 0.5rem" : "0.2rem 0.55rem",
              width: `${basepath_site2}/assistance` ? "100px" : "100px",
            }}>Assistance</a>
            <span className="padding-0" style={{ paddingLeft: "1%", paddingRight: "1%", margin: "0"}}>|</span>
            <a href={basepath_site2 + "/volunteering"} style={{
              textDecoration: "none",
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_site2}/volunteering` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site2}/volunteering` ? "0.2rem 0.1rem" : "0.2rem 0.15rem",
              }}>Volunteering</a>
            <span className="padding-0" style={{ paddingLeft: "1%", paddingRight: "1%", margin: "0"}}>|</span>
            <a
              href={basepath_site2 + "/contact"}
              style={{
              textDecoration: "none",
              color: "#4b1a50ee",
              fontWeight: location.pathname === `${basepath_site2}/contact`? "bold" : "normal",
              padding: location.pathname === `${basepath_site2}/contact` ? "0.2rem 0.25rem" : "0.2rem 0.15rem",
              }}>Contact</a>
          </nav>
          {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );


  const basepath_site3 = "/site3"
  const site3 = (
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
              href={basepath_site3 + "/"}
              style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight:
                location.pathname === basepath_site3 ||
                location.pathname === `${basepath_site3}/`
                ? "bold"
                : "normal",
              }}
            >
              Welcome
            </a>
            <a
              href={basepath_site3 + "/about"}
              style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight:
                location.pathname === `${basepath_site3}/about`
                ? "bold"
                : "normal",
              padding:
                location.pathname === `${basepath_site3}/about"`
                ? "0.2rem 0.20rem"
                : "0.2rem 0.25rem",
              }}>About</a>
            <a
              href={basepath_site3 + "/assistance"}
              style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === `${basepath_site3}/assistance` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site3}/assistance` ? "0.2rem 0.5rem" : "0.2rem 0.55rem",
              // transition: "background 5.5s, color 5.5s"
            }}>Assistance</a>
            <a
              href={basepath_site3 + "/volunteering"}
              style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === `${basepath_site3}/volunteering` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site3}/volunteering` ? "0.2rem 0.1rem" : "0.2rem 0.15rem",
              }}>Volunteering</a>
            <a
              href={basepath_site3 + "/contact"}
              style={{
              textDecoration: "none",
              color: "#7c2b83ee",
              fontWeight: location.pathname === `${basepath_site3}/contact` ? "bold" : "normal",
              padding: location.pathname === `${basepath_site3}/contact` ? "0.2rem 0.25rem" : "0.2rem 0.15rem",
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
    case "site1":
      return site1;
      break;

    case "site2":
      return site2;
      break;
  
    case "site3":
      return site3;
      break;
  
    default:
      return livesite;
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
