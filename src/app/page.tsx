export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
      <article className="space-y-8">
        <header className="space-y-3 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
            Documentation
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            SimulCrowd
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            A single-page document site. Replace this content with your project
            overview, guides, or reference material.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Overview
          </h2>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            This page is a starting point for SimulCrowd documentation. Edit{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              src/app/page.tsx
            </code>{" "}
            to add sections, links, and the content you want published.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Deploy
          </h2>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            Connect this repository to Vercel to deploy. The app uses the Next.js
            App Router and is ready for a production build with{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              npm run build
            </code>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
