import { Link } from "@tanstack/react-router";
import type { FC } from "react";

interface NavProps {
	timeStr: string;
}

const Nav: FC<NavProps> = ({ timeStr }) => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/" aria-label="TanStack Start Home">
						<img src="/logo.png" alt="TanStack Start" width="40" height="40" />
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to="/prerendered" aria-label="Go to Prerendered page">
						Prerendered
					</Link>
				</li>
				<li>
					<Link to="." aria-label="Generated at: {timeStr}">
						Generated at: {timeStr}
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
