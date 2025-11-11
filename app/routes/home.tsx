import { Welcome } from "../welcome/welcome";

type LoaderData = { message?: string };

export function meta() {
  return [
    { title: "Pangbourne Volunteers - Pangbourne and District Volunteer Centre" },
    { name: "description", content: "A warm welcome and introduction to the Pangbourne Volunteers from Reverend Alan Gates" },
    { name: "keywords", content: "Pangbourne Volunteers" },
    { name: "author", content: "Reverend Alan Gates" },
  ];
}

// export function loader({ context }: Route.LoaderArgs) {
//   return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
// }

export default function Home({ loaderData }: { loaderData?: LoaderData }) {
  const message = loaderData?.message ?? "Welcome to the Pangbourne and District Volunteer Centre!";
  return <Welcome message={message} />;
}
