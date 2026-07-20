import { createServerFn } from "@tanstack/react-start";
// "cannot find module or its corresponding type declarations" error. Ignore it for now.
//@ts-ignore
import { staticFunctionMiddleware } from "@tanstack/start-static-server-functions";

export const getNavTime = createServerFn({ method: "GET" })
	.middleware([staticFunctionMiddleware])
	.handler(async () => new Date().toLocaleTimeString());
