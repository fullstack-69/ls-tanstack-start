import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getNavTime } from "../server_functions";

const getHomeData = createServerFn({ method: "GET" }).handler(async () => {
	return { message: "Hello from the server!" };
});

export const Route = createFileRoute("/")({
	component: Home,
	loader: async () => {
		return await getHomeData();
	},
});

function Home() {
	const state = Route.useLoaderData();
	console.log("Loader data:", state);

	return (
		<main className="p-8">
			<h1>Home</h1>
			<Link to="/about">Go to About page</Link>
		</main>
	);
}
