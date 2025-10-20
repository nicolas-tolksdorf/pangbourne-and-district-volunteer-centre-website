
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
	route("site2/assistance", "routes/site2/assistance.tsx"),
	route("site2/volunteering", "routes/site2/volunteering.tsx"),
	route("site2/contact", "routes/site2/contact.tsx"),

	// Site 3
	route("site3", "routes/site3/home.tsx"),
	route("site3/about", "routes/site3/about.tsx"),

] satisfies RouteConfig;
