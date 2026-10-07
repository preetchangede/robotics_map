import fs from "node:fs";
import assert from "node:assert/strict";
const data = JSON.parse(
  fs.readFileSync(new URL("../src/data/atlas.json", import.meta.url), "utf8"),
);
const categories = [
  "general",
  "foundation",
  "niche",
  "simulation",
  "world",
  "twins",
  "spatial",
];
const sourceTypes = [
  "company",
  "paper",
  "code",
  "demo",
  "report",
  "docs",
  "patent",
  "x",
  "reddit",
];
const all = [
  ...data.companies,
  ...data.problems,
  ...data.experiments,
  ...data.resources,
];
const ids = new Set();
const sources = new Map();
function url(v) {
  assert.equal(typeof v, "string");
  const u = new URL(v);
  assert.equal(u.protocol, "https:");
  assert(!u.username && !u.password);
  assert(!u.hostname.includes("example."));
  return u;
}
function text(e, key) {
  assert(
    typeof e[key] === "string" && e[key].trim().length > 0,
    `${e.id}: missing ${key}`,
  );
}
for (const e of all) {
  assert(!ids.has(e.id), `Duplicate ID ${e.id}`);
  ids.add(e.id);
  assert(/^[a-z0-9-]+$/.test(e.id));
  assert(categories.includes(e.category));
  text(e, "summary");
  assert.equal(e.reviewed, "2026-10-07");
  assert(e.tags.length >= 2);
  assert(e.sources.length >= 2);
  assert.equal(
    new Set(e.tags.map((t) => t.toLowerCase())).size,
    e.tags.length,
    `${e.id}: duplicate normalized tags`,
  );
  for (const s of e.sources) {
    text(s, "title");
    text(s, "note");
    url(s.url);
    assert(sourceTypes.includes(s.type), s.type);
    if (sources.has(s.url))
      assert.equal(
        s.type,
        sources.get(s.url).type,
        `Conflicting source types: ${s.url}`,
      );
    else sources.set(s.url, s);
  }
}
for (const e of all)
  for (const id of e.related)
    assert(ids.has(id), `${e.id}: unknown related entry ${id}`);
for (const e of data.companies) {
  for (const k of [
    "name",
    "website",
    "subcategory",
    "focus",
    "thesis",
    "technology",
    "problem",
    "caveat",
  ])
    text(e, k);
  url(e.website);
  assert(
    ["Demonstrated", "Pilot", "Deployed", "Research", "Platform"].includes(
      e.stage,
    ),
  );
  assert(e.evidence.length >= 1);
  text(e, "edge");
  assert(e.edge.length <= 130, `${e.id}: card edge too long`);
  const contact = e.contacts;
  assert(
    contact && Array.isArray(contact.founders) && contact.founders.length,
    `${e.id}: missing founder provenance`,
  );
  assert.equal(contact.reviewed, "2026-10-07");
  text(contact, "note");
  for (const f of contact.founders) {
    text(f, "name");
    text(f, "role");
    url(f.roleSource);
    assert(
      f.channels.length,
      `${e.id}: no verified route or explicit company fallback`,
    );
    for (const ch of f.channels) {
      for (const k of ["label", "note", "provenance"]) text(ch, k);
      url(ch.provenance);
      assert(["email", "profile", "website", "company"].includes(ch.kind));
      if (ch.kind === "email")
        assert(
          ch.url.startsWith("mailto:"),
          `${e.id}: individual email must use an explicitly published address`,
        );
      assert(
        ["primary", "corroborated", "restricted"].includes(ch.verification),
      );
      if (ch.url.startsWith("mailto:")) {
        assert(["email", "company"].includes(ch.kind));
        assert(
          /^mailto:[^\s?]+@[^\s?]+$/.test(ch.url),
          `${e.id}: malformed published email`,
        );
        assert.equal(
          ch.verification,
          "primary",
          `${e.id}: email not verified from readable primary publication`,
        );
      } else url(ch.url);
    }
  }
  for (const v of e.evidence) {
    text(v, "label");
    text(v, "text");
    url(v.url);
    assert(
      e.sources.some((s) => s.url === v.url),
      `${e.id}: evidence URL missing from source library`,
    );
  }
}
for (const e of data.resources) {
  for (const k of [
    "title",
    "author",
    "why",
    "learn",
    "prerequisite",
    "time",
    "url",
    "caveat",
  ])
    text(e, k);
  url(e.url);
  assert(["Read", "Watch", "Build", "Follow"].includes(e.format));
  assert(["Foundational", "Deep dive", "Practical"].includes(e.level));
  assert(e.summary.length <= 160);
  assert(e.why.length <= 250);
  assert(e.learn.length <= 300);
  assert(
    e.sources.some((s) => s.url === e.url),
    `${e.id}: main resource absent from evidence`,
  );
}
for (const e of data.problems) {
  for (const k of ["title", "why", "approaches", "whatToWatch"]) text(e, k);
  assert(e.related.length >= 3);
}
for (const e of data.experiments) {
  for (const k of [
    "title",
    "hypothesis",
    "successMetric",
    "resources",
    "hardware",
    "time",
    "caveat",
  ])
    text(e, k);
  assert(e.steps.length >= 4);
  assert.equal(e.status, "Proposed");
  assert(["Starter", "Intermediate", "Advanced"].includes(e.difficulty));
}
for (const c of categories) {
  assert(data.companies.some((e) => e.category === c));
  assert.equal(data.problems.filter((e) => e.category === c).length, 3);
  assert(data.experiments.some((e) => e.category === c));
  assert(data.resources.some((e) => e.category === c));
}
assert(data.companies.length > 36);
assert.equal(data.problems.length, 21);
assert.equal(data.experiments.length, 16);
assert(data.resources.length >= 21);
console.log(
  `Data audit passed: ${all.length} entries, ${sources.size} distinct sources, 7 complete categories, no dangling relationships.`,
);
console.log(
  `Source types: ${JSON.stringify(Object.fromEntries(sourceTypes.map((t) => [t, [...sources.values()].filter((s) => s.type === t).length])))}`,
);
