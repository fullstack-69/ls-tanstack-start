import type { FC } from "react";

interface GreetingProps {
	browser: string;
	timeStr: string;
}
const Greeting: FC<GreetingProps> = ({ browser, timeStr }) => {
	return (
		<article className="card">
			<h1>Hello, {browser}!</h1>
			<p>Generated at: {timeStr}</p>
		</article>
	);
};

export default Greeting;
