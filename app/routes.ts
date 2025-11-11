
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	// Live Site
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("assistance", "routes/assistance.tsx"),
	route("volunteering", "routes/volunteering.tsx"),
	route("contact", "routes/contact.tsx"),

	// Site 1
	route("site1", "routes/site1/home.tsx"),
	route("site1/about", "routes/site1/about.tsx"),
	route("site1/assistance", "routes/site1/assistance.tsx"),
	route("site1/volunteering", "routes/site1/volunteering.tsx"),
	route("site1/contact", "routes/site1/contact.tsx"),

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
