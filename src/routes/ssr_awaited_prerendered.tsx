import { Await, createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import Greeting from "@/components/Greeting";
import Nav from "@/components/Nav";
import Todo from "@/components/Todo";
import { getGreeting, getNavTime } from "../actions";

export const Route = createFileRoute("/ssr_awaited_prerendered")({
	component: SSRAwaitedPrerendered,
	loader: async () => {
		const nav = await getNavTime();
		const greetingPromise = getGreeting();
		return {
			nav: nav,
			greetingPromise: greetingPromise,
		};
	},
});

function SSRAwaitedPrerendered() {
	const state = Route.useLoaderData();

	return (
		<main className="container">
			<Nav timeStr={state.nav.timeStr} />
			<Suspense
				fallback={
					<p>
						<span aria-busy="true"></span>
					</p>
				}
			>
				<Await promise={state.greetingPromise}>
					{(greeting) => (
						<Greeting browser={greeting.browser} timeStr={greeting.timeStr} />
					)}
				</Await>
			</Suspense>
			<Todo />
		</main>
	);
}
