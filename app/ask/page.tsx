import { redirect } from "next/navigation";

/** Legacy route: forward old /ask links (and cached bundles) to /askfeliz. */
export default async function AskLegacy({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; model?: string }>;
}) {
  const params = await searchParams;
  const q = new URLSearchParams();
  if (params.q) q.set("q", params.q);
  if (params.model) q.set("model", params.model);
  redirect(`/askfeliz${q.size ? `?${q.toString()}` : ""}`);
}
