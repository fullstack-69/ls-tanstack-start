import { Await, createFileRoute, Link } from "@tanstack/react-router";
import { Suspense } from "react";
import Todo from "@/components/Todo";
import { getGreeting, getNavTime } from "../actions";

export const Route = createFileRoute("/")({
	component: Home,
	loader: async () => {
		const navTime = await getNavTime();
		return {
			navTime: navTime,
			greeting: getGreeting(), // Promise returned here, will be resolved in the component
		};
	},
});

function Home() {
	const state = Route.useLoaderData();
	console.log("Loader data:", state);

	return (
		<main className="p-8">
			<h1>Home</h1>
			<Link to="/prerendered">Go to Prerendered page</Link>
			<p>Navigation time: {state.navTime}</p>
			<Suspense fallback={<span aria-busy="true" />}>
				<Await promise={state.greeting}>
					{(g) => (
						<h1>
							Hello, {g.browser}! ({g.time})
						</h1>
					)}
				</Await>
			</Suspense>
			<Todo />
		</main>
	);
}
