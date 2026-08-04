import { Link, useLocation } from "@tanstack/react-router";
import type { FC } from "react";
import "./nav.css";
interface NavProps {
	timeStr: string;
}

const Nav: FC<NavProps> = ({ timeStr }) => {
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;
	return (
		<nav>
			<ul>
				<li>
					<a href="/" aria-label="TanStack Start Home">
						<img src="/logo.png" alt="TanStack Start" width="40" height="40" />
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						to="/"
						aria-label="Home"
						className={isActive("/") ? "active" : ""}
					>
						Home
					</Link>
				</li>

				<li>
					<Link
						to="/ssr_prerendered"
						aria-label="SSR Prerendered"
						className={isActive("/ssr_prerendered") ? "active" : ""}
					>
						SSR Prerendered
					</Link>
				</li>
				<li>
					<Link
						to="/ssr_awaited"
						aria-label="SSR Awaited"
						className={isActive("/ssr_awaited") ? "active" : ""}
					>
						SSR Awaited
					</Link>
				</li>
				<li>
					<Link
						to="/ssr_awaited_prerendered"
						aria-label="SSR Awaited Prerendered"
						className={isActive("/ssr_awaited_prerendered") ? "active" : ""}
					>
						SSR Awaited Prerendered
					</Link>
				</li>
				<li>
					<a href="#NA" aria-label="Generated at: {timeStr}">
						Generated at: {timeStr}
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
