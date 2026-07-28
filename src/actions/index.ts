import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { staticFunctionMiddleware } from "@tanstack/start-static-server-functions"; // Need to install manually due to experimental nature of the package.
import { UAParser } from "ua-parser-js";
import { z } from "zod";
import { deleteTodo, getTodos } from "@/db";

export const getNavTime = createServerFn({ method: "GET" })
	.middleware([staticFunctionMiddleware])
	.handler(async () => {
		return {
			timeStr: new Date().toLocaleTimeString(),
		};
	});

export const getGreeting = createServerFn({ method: "GET" }).handler(
	async () => {
		const header = getRequestHeaders();
		const ua = header.get("user-agent") ?? "";
		return {
			browser: new UAParser(ua).getResult().browser.name || "Unknown",
			timeStr: new Date().toLocaleTimeString(),
		};
	},
);

export const actionGetTodos = createServerFn({ method: "GET" }).handler(
	async () => {
		const todos = await getTodos();
		return todos;
	},
);

const deleteTodoSchema = z.object({
	id: z.number(),
});
export const actionDeleteTodo = createServerFn({ method: "POST" })
	.validator(deleteTodoSchema)
	.handler(async ({ data }) => {
		await deleteTodo(data.id);
		return null;
	});
