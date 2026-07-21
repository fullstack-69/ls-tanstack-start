import { Await, createFileRoute, Link } from "@tanstack/react-router";
import { Suspense } from "react";
import { getGreeting, getNavTime } from "../server_functions";
export const Route = createFileRoute("/prerendered")({
	component: PreRendered,
	loader: async () => {
		const navTime = await getNavTime();
		return {
			navTime: navTime,
			greeting: getGreeting(), // Promise returned here, will be resolved in the component
		};
	},
});

function PreRendered() {
	const state = Route.useLoaderData();
	return (
		<main className="p-8">
			<h1>Prerendered</h1>
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
		</main>
	);
}
