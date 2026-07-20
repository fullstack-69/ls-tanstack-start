import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
// "cannot find module or its corresponding type declarations" error. Ignore it for now.
//@ts-ignore
import { staticFunctionMiddleware } from "@tanstack/start-static-server-functions";
import { UAParser } from "ua-parser-js";

export const getNavTime = createServerFn({ method: "GET" })
	.middleware([staticFunctionMiddleware])
	.handler(async () => new Date().toLocaleTimeString());

export const getGreeting = createServerFn({ method: "GET" }).handler(
	async () => {
		const ua = getRequestHeaders()["user-agent"] ?? "";
		return {
			browser: new UAParser(ua).getResult().browser.name,
			time: new Date().toLocaleTimeString(),
		};
	},
);
