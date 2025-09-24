
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("assistance", "routes/assistance.tsx"),
	route("volunteering", "routes/volunteering.tsx"),
	route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
