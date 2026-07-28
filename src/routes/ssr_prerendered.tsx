import { createFileRoute } from "@tanstack/react-router";
import Greeting from "@/components/Greeting";
import Nav from "@/components/Nav";
import Todo from "@/components/Todo";
import { getGreeting, getNavTime } from "../actions";

export const Route = createFileRoute("/ssr_prerendered")({
	component: SSRPrerendered,
	loader: async () => {
		const nav = await getNavTime();
		const greeting = await getGreeting();
		return {
			nav: nav,
			greeting: greeting,
		};
	},
});

function SSRPrerendered() {
	const state = Route.useLoaderData();
	console.log("Loader data:", state);

	return (
		<main className="container">
			<Nav timeStr={state.nav.timeStr} />
			<Greeting
				browser={state.greeting.browser}
				timeStr={state.greeting.timeStr}
			/>
			<Todo />
		</main>
	);
}
