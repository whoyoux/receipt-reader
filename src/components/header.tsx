import { Button } from "./ui/button";

export default function Header() {
	return (
		<header className="w-full px-4 py-6 border-b flex justify-between items-center">
			<h1 className="font-semibold">Receipt Reader</h1>
			<Button>Sign in</Button>
		</header>
	);
}
