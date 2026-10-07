import fs from "node:fs";
const read = (file) =>
  JSON.parse(
    fs.readFileSync(new URL("../research/" + file, import.meta.url), "utf8"),
  );
const files = [
  "robotics-models.json",
  "niche.json",
  "simulation-worlds.json",
  "spatial.json",
];
const taxonomy = read("taxonomy.json");
const relationships = read("relationships.json");
const focusById = Object.fromEntries(
  Object.values(taxonomy).flatMap((groups) =>
    Object.entries(groups).flatMap(([label, ids]) =>
      ids.map((id) => [id, label]),
    ),
  ),
);
const aliases = {
  "cross embodiment": "Cross-embodiment",
  "cross-embodiment": "Cross-embodiment",
  "sim to real": "Sim-to-real",
  "sim-to-real": "Sim-to-real",
  "co simulation": "Co-simulation",
  "co-simulation": "Co-simulation",
  vla: "VLA",
  slam: "SLAM",
  "ros 2": "ROS 2",
  lidar: "LiDAR",
  cfd: "CFD",
  bim: "BIM",
  sar: "SAR",
  dagger: "DAgger",
  "3d generation": "3D generation",
  "4d": "4D",
  "4d gaussian splatting": "4D Gaussian splatting",
  webgpu: "WebGPU",
  dreamerv3: "DreamerV3",
  smolvla: "SmolVLA",
  diamond: "DIAMOND",
  aces: "ACES",
  "as/rs": "AS/RS",
  xr: "XR",
  "gpu simulation": "GPU simulation",
  "lod streaming": "LOD streaming",
};
const tag = (t) =>
  aliases[t.trim().toLowerCase()] ||
  t.trim().charAt(0).toUpperCase() + t.trim().slice(1).toLowerCase();
const source = (s) => {
  const u = new URL(s.url);
  let type = s.type;
  if (u.hostname === "arxiv.org") type = "paper";
  if (u.hostname.includes("patents.google.com")) type = "patent";
  if (
    u.hostname.startsWith("docs.") ||
    u.hostname.includes("readthedocs") ||
    u.hostname.includes("cdn-docs.") ||
    u.pathname.startsWith("/docs/") ||
    u.hostname === "openusd.org"
  )
    type = "docs";
  return { ...s, type };
};
const normalize = (e) => ({
  ...e,
  tags: [...new Set((e.tags || []).map(tag))],
  sources: (e.sources || []).map(source),
  related: [...new Set([...(e.related || []), ...(relationships[e.id] || [])])],
});
const data = {
  companies: files
    .flatMap(read)
    .map((e) => normalize({ ...e, focus: focusById[e.id] })),
  problems: read("problems.json").map(normalize),
  experiments: read("experiments.json").map(normalize),
};
fs.mkdirSync(new URL("../src/data", import.meta.url), { recursive: true });
fs.writeFileSync(
  new URL("../src/data/atlas.json", import.meta.url),
  JSON.stringify(data),
);
console.log(
  `Prepared ${data.companies.length} companies, ${data.problems.length} problems, ${data.experiments.length} experiments.`,
);
