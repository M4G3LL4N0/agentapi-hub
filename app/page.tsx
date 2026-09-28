import Link from "next/link";
import { TOOL_DATA } from "@/lib/types";

const surfaces = [
  ["APIs", "REST and GraphQL endpoints with machine-readable contracts."],
  ["CLIs", "Command surfaces agents can invoke without scraping human docs."],
  ["MCP servers", "Tool servers exposed over the Model Context Protocol."],
  ["Schemas + docs", "Versioned schemas and docs that a planner can parse."],
];

const compareAxes = [
  ["Protocol", "REST, GraphQL, CLI, or MCP — what the agent actually speaks."],
  ["Auth", "OAuth, API key, token, or mTLS before you wire a secret."],
  ["Price", "Free, metered, or enterprise — listed as catalog copy, not a live invoice."],
  ["Compatibility", "Demo score for whether a planner can call the surface without scraping."],
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200">
            Developer Preview · demo catalog
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A marketplace for tools that agents can actually call.
          </h1>
          <p className="mt-4 max-w-xl text-slate-400">
            AgentAPI Hub is a searchable catalog of APIs, CLIs, MCP servers,
            schemas, and machine-readable docs. Developers compare protocol,
            auth, price, and demo compatibility scores — then submit a tool.
            Listings on this preview are sample catalog data, not audited vendors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/marketplace"
              className="inline-flex min-h-11 items-center rounded-full bg-fuchsia-400 px-5 py-2.5 text-sm font-semibold text-slate-950"
            >
              Browse marketplace
            </Link>
            <Link
              href="/submit"
              className="inline-flex min-h-11 items-center rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-200"
            >
              Submit a tool
            </Link>
          </div>
        </div>

        <aside
          className="overflow-hidden rounded-2xl border border-fuchsia-400/20 bg-slate-950/70"
          aria-label="Catalog preview"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fuchsia-200/80">
            <span>catalog</span>
            <span>demo rows</span>
          </div>
          <ul className="divide-y divide-white/8">
            {TOOL_DATA.slice(0, 5).map((tool) => (
              <li key={tool.slug} className="flex items-start justify-between gap-3 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-white">{tool.name}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {tool.category} · {tool.protocol} · {tool.auth} · {tool.price}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-[11px] text-fuchsia-200">
                  compat {tool.compatibility}
                </p>
              </li>
            ))}
          </ul>
          <div className="border-t border-white/10 px-4 py-3 font-mono text-[11px] text-slate-500">
            sample call · {JSON.stringify(TOOL_DATA[0].machineExample)}
          </div>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">How listings are compared</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          The marketplace is a filterable catalog, not a vendor audit. Each demo row
          exposes the same four axes so an agent builder can reject a tool before
          opening the card.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
          {compareAxes.map(([title, copy]) => (
            <div key={title} className="grid gap-2 border-b border-slate-800 px-5 py-4 last:border-b-0 sm:grid-cols-[140px_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fuchsia-300">{title}</p>
              <p className="text-sm text-slate-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        {surfaces.map(([title, copy]) => (
          <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <h2 className="text-base font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-400">{copy}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">What you can do in this preview</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
          <li>Search and filter the demo catalog by protocol, auth, and price.</li>
          <li>Open a tool card for a machine-readable call example.</li>
          <li>Submit a listing through the developer form.</li>
          <li>Read the marketplace revenue model on the pricing page.</li>
        </ol>
        <p className="mt-4 text-xs text-slate-500">
          Compatibility and reliability numbers are demo estimates for evaluation.
          Validate auth, SLAs, and security in your own stack before production use.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/pricing" className="text-sm font-medium text-fuchsia-300 hover:underline">
            Revenue model →
          </Link>
          <Link href="/docs" className="text-sm font-medium text-fuchsia-300 hover:underline">
            Docs →
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium text-fuchsia-300 hover:underline">
            How it works →
          </Link>
        </div>
      </section>
    </main>
  );
}
