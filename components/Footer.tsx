export function Footer() {
    return (
        <footer className="border-t border-line bg-paper-dim">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-ink-mute sm:px-6">
                <p>&copy; {new Date().getFullYear()} The Argent Brief. All rights reserved.</p>
            </div>
        </footer>
    )
}