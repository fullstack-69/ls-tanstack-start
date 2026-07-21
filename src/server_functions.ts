import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { staticFunctionMiddleware } from "@tanstack/start-static-server-functions"; // Need to install manually due to experimental nature of the package.
import { UAParser } from "ua-parser-js";

export const getNavTime = createServerFn({ method: "GET" })
	.middleware([staticFunctionMiddleware])
	.handler(async () => new Date().toLocaleTimeString());

export const getGreeting = createServerFn({ method: "GET" }).handler(
	async () => {
		const header = getRequestHeaders();
		const ua = header.get("user-agent") ?? "";
		return {
			browser: new UAParser(ua).getResult().browser.name,
			time: new Date().toLocaleTimeString(),
		};
	},
);
