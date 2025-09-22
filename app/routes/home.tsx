
import { Welcome } from "../welcome/welcome";

type LoaderData = { message?: string };

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// export function loader({ context }: Route.LoaderArgs) {
//   return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
// }

export default function Home({ loaderData }: { loaderData?: LoaderData }) {
  const message = loaderData?.message ?? "Welcome to Pangbourne and District Volunteer Centre!";
  return <Welcome message={message} />;
}
