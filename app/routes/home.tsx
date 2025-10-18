import { Welcome } from "../welcome/welcome";

type LoaderData = { message?: string };

export function meta() {
  return [
    { title: "Pangbourne and District Volunteer Centre (Pangbourne Volunteers)" },
    { name: "description", content: "Welcome to the Pangbourne and District Volunteer Centre!" },
  ];
}

// export function loader({ context }: Route.LoaderArgs) {
//   return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
// }

export default function Home({ loaderData }: { loaderData?: LoaderData }) {
  const message = loaderData?.message ?? "Welcome to the Pangbourne and District Volunteer Centre!";
  return <Welcome message={message} />;
}
