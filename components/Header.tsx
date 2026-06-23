import Link from "next/link";

export function Header() {
    return (
        <header className="border-b border-line bg-paper">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
                <Link
                    href="/"
                >
                The Argent <span className="text-crimson">Brief</span>
                </Link>
                <nav aria-label="Primary" className="flex gap-6 text-sm font-medium text-ink-mute">
                    <Link href="/" className="hover:text-ink">
                        Home
                    </Link>
                </nav>
            </div>
        </header>
    );
}