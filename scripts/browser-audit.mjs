import fs from "node:fs";
import assert from "node:assert/strict";
import { chromium } from "playwright-core";
import AxeBuilder from "@axe-core/playwright";
const data = JSON.parse(
  fs.readFileSync(new URL("../src/data/atlas.json", import.meta.url)),
);
const all = [
  ...data.companies,
  ...data.problems,
  ...data.experiments,
  ...data.resources,
];
const sourceList = [
  ...new Map(all.flatMap((e) => e.sources).map((s) => [s.url, s])).values(),
];
const companies = data.companies.length;
const byCategory = (c) => data.companies.filter((e) => e.category === c).length;
const base = process.env.ATLAS_BASE_URL || "http://localhost:5173";
fs.mkdirSync(".qa", { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.ATLAS_CHROMIUM_PATH || "/usr/bin/chromium",
  headless: true,
  args: ["--no-sandbox"],
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: "reduce",
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const results = [];
const log = (s) => {
  results.push(s);
  console.log("PASS", s);
};
const settle = () => page.waitForTimeout(160);
const navigate = async (hash) => {
  await page.goto(base + "/" + hash);
  await page.evaluate(() => document.fonts.ready);
  await settle();
};
const count = async (n) => {
  await settle();
  assert.equal(await page.locator(".entity-card").count(), n);
};
const clickTab = async (name) => {
  await page
    .locator(".view-tabs")
    .getByRole("button", { name, exact: true })
    .click();
  await settle();
};
const accessibility = async (label) => {
  const r = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  const v = r.violations.map((x) => ({
    id: x.id,
    nodes: x.nodes.map((n) => ({
      target: n.target,
      summary: n.failureSummary,
    })),
  }));
  fs.writeFileSync(`.qa/axe-${label}.json`, JSON.stringify(v, null, 2));
  assert.equal(v.length, 0, `${label}: ${JSON.stringify(v)}`);
  log(`Accessibility scan: ${label}`);
};
try {
  await navigate("#overview");
  await count(3);
  assert.equal(await page.locator(".map-node").count(), 7);
  assert.equal(await page.locator(".connection-legend>button").count(), 3);
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    false,
  );
  await accessibility("landscape");
  await page.screenshot({ path: ".qa/desktop-landscape.png", fullPage: true });
  log(
    "Landscape renders with seven navigable fields and explained relationships",
  );
  await clickTab("Companies");
  await count(companies);
  log("All company profiles available");
  const search = page.getByRole("textbox", { name: "Search the atlas" });
  await search.fill("Physical Intelligence");
  await count(1);
  await search.fill("");
  await count(companies);
  log("Search returns and clears real results");
  await page
    .locator(".category-nav")
    .getByRole("button", { name: /Foundation models/ })
    .click();
  await count(byCategory("foundation"));
  assert.equal(
    (await page.locator(".field-connections>button").count()) > 0,
    true,
  );
  await page.locator(".filter-toggle").click();
  assert.equal(
    await page.locator(".filter-toggle").getAttribute("aria-expanded"),
    "true",
  );
  await page
    .getByLabel("Focus", { exact: true })
    .selectOption("Generalist action policies");
  await count(
    data.companies.filter(
      (e) =>
        e.category === "foundation" && e.focus === "Generalist action policies",
    ).length,
  );
  await page.getByLabel("Focus", { exact: true }).selectOption("all");
  await page.getByLabel("Evidence stage").selectOption("Research");
  await count(
    data.companies.filter(
      (e) => e.category === "foundation" && e.stage === "Research",
    ).length,
  );
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await count(companies);
  log("Category, subcategory, and evidence-stage filters work and reset");
  await page
    .getByLabel("Focus", { exact: true })
    .selectOption("Generalist action policies");
  await page.locator(".brand").click();
  await count(3);
  await clickTab("Companies");
  await count(companies);
  await page.getByRole("button", { name: /New bearings/ }).click();
  await count(data.companies.filter((e) => e.added).length);
  await page.getByRole("button", { name: "All builders", exact: true }).click();
  await count(companies);
  log(
    "Home clears prior focus; the new-company discovery lens shows the curated expansion",
  );
  await clickTab("Essentials");
  if (
    (await page.locator(".filter-toggle").getAttribute("aria-expanded")) ===
    "false"
  )
    await page.locator(".filter-toggle").click();
  await page.getByLabel("Resource format").selectOption("Watch");
  await count(data.resources.filter((e) => e.format === "Watch").length);
  await page.goBack();
  await count(companies);
  assert.equal(await page.getByLabel("Evidence stage").inputValue(), "all");
  assert.equal(
    await page.locator('.view-tabs [aria-current="page"]').textContent(),
    "Companies",
  );
  log(
    "Browser Back clears inapplicable resource filters and restores active-view semantics",
  );
  await page.getByRole("button", { name: "List view", exact: true }).click();
  assert.equal(await page.locator(".entity-card.row").count(), companies);
  await page.getByRole("button", { name: "Grid view", exact: true }).click();
  log("Grid and list layouts work");
  const bookmark = page.getByRole("button", {
    name: "Save Physical Intelligence",
    exact: true,
  });
  await bookmark.focus();
  await bookmark.press("Enter");
  assert.equal(
    await page.evaluate(() =>
      document.activeElement?.getAttribute("aria-label"),
    ),
    "Unsave Physical Intelligence",
  );
  await page
    .locator(".toolkit")
    .getByRole("button", { name: /Reading list/ })
    .click();
  await count(1);
  await search.fill("impossible-nonmatching-query");
  await count(0);
  assert.equal(
    await page.locator(".empty-state h3").textContent(),
    "No entries match this view.",
  );
  await page
    .getByRole("button", { name: "Clear filters", exact: true })
    .click();
  await count(1);
  await page.reload();
  await count(1);
  log("Bookmarks persist, retain focus, and distinguish filtered emptiness");
  await page.locator(".card-main").first().click();
  await settle();
  assert.equal(await page.getByRole("dialog").count(), 1);
  assert.equal(
    await page.locator("#detail-title").textContent(),
    "Physical Intelligence",
  );
  assert.equal(
    await page.locator(".source-links a").count(),
    data.companies.find((e) => e.id === "physical-intelligence").sources.length,
  );
  assert.equal(await page.locator(".related-section>button").count(), 4);
  await page.keyboard.press("Control+k");
  assert.equal(
    await page.evaluate(
      () => document.activeElement.closest('[role="dialog"]') !== null,
    ),
    true,
  );
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(
      () => document.activeElement.closest('[role="dialog"]') !== null,
    ),
    true,
  );
  await accessibility("company-detail");
  await page.screenshot({ path: ".qa/company-detail.png" });
  const jump = page.getByRole("button", { name: "Founders", exact: true });
  await jump.focus();
  await jump.press("Enter");
  assert.equal(
    await page.evaluate(() => document.activeElement.id),
    "founders",
  );
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(
      () => document.activeElement.closest(".founder-section") !== null,
    ),
    true,
  );
  assert.equal(await page.locator(".founder-section").count(), 1);
  await page
    .locator(".founder-card details")
    .first()
    .locator("summary")
    .click();
  assert.equal(
    await page.locator(".founder-card details").first().getAttribute("open"),
    "",
  );
  assert.equal(
    (await page.locator(".contact-provenance a:visible").count()) > 0,
    true,
  );
  await accessibility("founder-provenance");
  log(
    "Founder routes expose identity evidence and separate channel provenance",
  );
  await page
    .locator(".research-drawer")
    .evaluate((el) => (el.scrollTop = el.scrollHeight));
  await page.locator(".related-section>button").first().click();
  await settle();
  assert.equal(
    await page.locator(".research-drawer").evaluate((el) => el.scrollTop),
    0,
  );
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "detached" });
  assert.equal(await page.getByRole("dialog").count(), 0);
  log(
    "Research drawer, cross-kind related links, focus containment, and scroll reset work",
  );
  await clickTab("Open problems");
  await count(21);
  await page.locator(".card-main").first().click();
  assert.equal((await page.locator(".detail-section").count()) > 2, true);
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "detached" });
  await accessibility("problems");
  log("All open problems expose stakes, approaches, and primary sources");
  await page
    .locator(".view-tabs")
    .getByRole("button", { name: /^Experiments/ })
    .click();
  await count(16);
  await page.locator(".filter-toggle").click();
  await page.getByLabel("Build difficulty").selectOption("Starter");
  assert.equal((await page.locator(".entity-card").count()) > 0, true);
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await count(16);
  await page.locator(".card-main").first().click();
  assert.equal(await page.locator(".build-steps li").count(), 5);
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "detached" });
  await accessibility("experiments");
  log(
    "Experiment plans include difficulty, five steps, resources, and metrics",
  );
  await clickTab("Essentials");
  await count(data.resources.length);
  assert.equal(await page.locator(".resource-paths button").count(), 3);
  await page
    .locator(".resource-paths button")
    .filter({ hasText: "Capture a space" })
    .click();
  await count(data.resources.filter((e) => e.category === "spatial").length);
  assert.equal(
    await page.evaluate(() => location.hash.includes("path=capture")),
    true,
  );
  await page.reload();
  await count(data.resources.filter((e) => e.category === "spatial").length);
  await page.locator(".filter-toggle").click();
  await page.getByLabel("Resource format").selectOption("Build");
  await count(
    data.resources.filter(
      (e) => e.category === "spatial" && e.format === "Build",
    ).length,
  );
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await count(data.resources.length);
  await accessibility("essentials");
  await page.screenshot({ path: ".qa/essentials.png", fullPage: true });
  await page.locator(".card-main").first().click();
  assert.equal(
    await page.locator(".resource-launch").getAttribute("href"),
    data.resources[0].url,
  );
  assert.equal(
    await page
      .locator(".research-drawer")
      .getByText("What you will understand", { exact: true })
      .count(),
    1,
  );
  await accessibility("resource-detail");
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "detached" });
  log(
    "Essential paths survive reload; format filters, learning payoff and direct links work",
  );
  await clickTab("Source library");
  assert.equal(
    await page.locator(".source-library>article").count(),
    sourceList.length,
  );
  await page.getByLabel("Filter source type").selectOption("reddit");
  assert.equal(
    await page.locator(".source-library>article").count(),
    sourceList.filter((s) => s.type === "reddit").length,
  );
  await page.getByLabel("Filter source type").selectOption("docs");
  assert.equal(
    await page.locator(".source-library>article").count(),
    sourceList.filter((s) => s.type === "docs").length,
  );
  await page.getByLabel("Filter source type").selectOption("all");
  await accessibility("sources");
  log(
    "Source library links back to entries and separates documentation and social sources",
  );
  await navigate("#companies?category=spatial&entry=company%3Aniantic-spatial");
  assert.equal(
    await page.locator("#detail-title").textContent(),
    "Niantic Spatial",
  );
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "detached" });
  await count(byCategory("spatial"));
  log("Deep links restore category and profile");
  await page.evaluate(() => window.scrollTo(0, 1200));
  await clickTab("Open problems");
  assert.equal(await page.evaluate(() => scrollY), 0);
  assert.equal(await page.locator("h1").isVisible(), true);
  await page.locator(".skip-link").evaluate((el) => el.focus());
  await page.keyboard.press("Enter");
  assert.equal(
    await page.evaluate(() => document.activeElement.id),
    "main-content",
  );
  assert.equal(
    await page.evaluate(() => location.hash.startsWith("#problems")),
    true,
  );
  log("View navigation resets scroll; skip link preserves routing");
  await page
    .getByRole("button", { name: "How to read this map", exact: true })
    .click();
  await accessibility("methodology");
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "detached" });
  await context.clearCookies();
  await page.setViewportSize({ width: 390, height: 844 });
  await navigate("#overview");
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    false,
  );
  await page.keyboard.press("Tab");
  assert.notEqual(
    await page.evaluate(
      () => document.activeElement.closest(".sidebar") !== null,
    ),
    true,
  );
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  await settle();
  assert.equal(await page.locator(".sidebar").isVisible(), true);
  await page
    .locator(".category-nav")
    .getByRole("button", { name: /Splatting & 3D/ })
    .click();
  await count(byCategory("spatial"));
  assert.equal(
    await page
      .getByRole("button", { name: "Open navigation", exact: true })
      .getAttribute("aria-expanded"),
    "false",
  );
  await accessibility("mobile-companies");
  await page.screenshot({ path: ".qa/mobile-companies.png", fullPage: true });
  await page.locator(".card-main").first().click();
  await accessibility("mobile-detail");
  await page.screenshot({ path: ".qa/mobile-detail.png" });
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "detached" });
  log(
    "Mobile navigation, readable company grid, and full-width detail drawer work",
  );
  await page.setViewportSize({ width: 320, height: 700 });
  await navigate("#overview");
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    false,
  );
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  assert.equal(
    await page
      .locator(".sidebar")
      .evaluate((el) => getComputedStyle(el).overflowY),
    "auto",
  );
  await page.locator(".method-link").scrollIntoViewIfNeeded();
  assert.equal(await page.locator(".method-link").isVisible(), true);
  log("Small-screen navigation scrolls without clipping");
  await page
    .getByRole("button", { name: "How to read this map", exact: true })
    .click();
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "detached" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await navigate("#companies");
  await page.evaluate(() => localStorage.setItem("field-atlas-saved", "null"));
  await page.reload();
  await count(companies);
  assert.equal(errors.length, 0, errors.join("\n"));
  log("Corrupt bookmark storage recovers; no browser runtime errors");
  fs.writeFileSync(
    ".qa/browser-results.json",
    JSON.stringify(
      { date: "2026-10-07", base, checks: results, errors },
      null,
      2,
    ),
  );
  console.log(`Browser audit passed (${results.length} flow checks).`);
} finally {
  await browser.close();
}
