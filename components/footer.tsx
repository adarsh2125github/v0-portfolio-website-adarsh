export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          {"<AA /> "}
          <span className="text-foreground/50">|</span>{" "}
          {"Adarsh Anand"}
        </p>
        <p className="text-xs text-muted-foreground">
          Built with passion & purpose.
        </p>
      </div>
    </footer>
  )
}
