
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	// Site 1
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("assistance", "routes/assistance.tsx"),
	route("volunteering", "routes/volunteering.tsx"),
	route("contact", "routes/contact.tsx"),

	// Site 2
	route("site2", "routes/site2/home.tsx"),
	route("site2/about", "routes/site2/about.tsx"),

] satisfies RouteConfig;
