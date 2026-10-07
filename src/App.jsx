import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  Bookmark,
  X,
  Grid2X2,
  List,
  SlidersHorizontal,
  ChevronDown,
  Check,
  Menu,
  Command,
  FlaskConical,
  BookOpen,
  GitBranch,
  Compass,
  MoveUpRight,
  ExternalLink,
  RotateCcw,
  Clock,
  Cpu,
  ChevronRight,
  Network,
  GraduationCap,
  Play,
  Mail,
  Moon,
} from "lucide-react";
import {
  THEME_STORAGE_KEY,
  isThemePreference,
  readThemePreference,
  applyTheme,
} from "./theme";
import data from "./data/atlas.json";
import {
  categories,
  relations,
  catById,
  views,
  typeLabels,
  resourcePaths,
} from "./data/meta";

const allEntries = [
  ...data.companies.map((e) => ({ ...e, kind: "company" })),
  ...data.problems.map((e) => ({ ...e, kind: "problem" })),
  ...data.experiments.map((e) => ({ ...e, kind: "experiment" })),
  ...(data.resources || []).map((e) => ({ ...e, kind: "resource" })),
];
const entryMap = new Map(allEntries.map((e) => [e.kind + ":" + e.id, e]));
const sourcesMap = new Map();
allEntries.forEach((e) =>
  (e.sources || []).forEach((s) => {
    const existing = sourcesMap.get(s.url);
    if (existing) {
      existing.entries.push(e);
      if (!existing.notes.includes(s.note)) existing.notes.push(s.note);
    } else {
      sourcesMap.set(s.url, { ...s, entries: [e], notes: [s.note] });
    }
  }),
);
const sourceLibrary = [...sourcesMap.values()];
const normalize = (s) => String(s || "").toLowerCase();
function getRoute() {
  const [view, q] = window.location.hash.slice(1).split("?");
  const p = new URLSearchParams(q);
  return {
    view: [
      "overview",
      "companies",
      "problems",
      "experiments",
      "resources",
      "sources",
      "saved",
      "search",
    ].includes(view)
      ? view
      : "overview",
    category: catById[p.get("category")] ? p.get("category") : "all",
    entry: p.get("entry"),
    path: resourcePaths.some((r) => r.id === p.get("path"))
      ? p.get("path")
      : null,
  };
}
function BrandMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 35V13l17 17 17-17v22"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M7 35l17-10 17 10M24 25V9"
        stroke="currentColor"
        strokeWidth="1.3"
        opacity=".6"
      />
      <circle cx="24" cy="9" r="3" fill="currentColor" />
    </svg>
  );
}
function IntroFigure() {
  return (
    <svg
      className="intro-figure"
      viewBox="0 0 220 128"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth=".8">
        <ellipse
          cx="110"
          cy="64"
          rx="84"
          ry="38"
          transform="rotate(-20 110 64)"
        />
        <ellipse
          cx="110"
          cy="64"
          rx="84"
          ry="38"
          transform="rotate(20 110 64)"
        />
        <ellipse cx="110" cy="64" rx="38" ry="55" />
        <path d="M18 64h184M110 5v118" strokeDasharray="2 5" opacity=".6" />
        <path d="M38 44l72 40 72-40M38 84l72-40 72 40" opacity=".4" />
      </g>
      <circle cx="110" cy="64" r="5" fill="currentColor" />
      <circle cx="182" cy="44" r="4" fill="var(--signal)" />
      <circle cx="38" cy="84" r="4" fill="var(--signal)" />
    </svg>
  );
}
function Glyph({ category = "general", large = false }) {
  return (
    <svg
      viewBox="0 0 80 80"
      aria-hidden="true"
      className={"glyph " + (large ? "large" : "")}
      style={{ color: catById[category]?.color }}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        {category === "general" ? (
          <>
            <path d="M24 54V32l16-9 16 9v22l-16 9zM24 32l16 10 16-10M40 42v21M24 54l16-9 16 9" />
            <path d="M40 12v9M13 38l9 5M58 43l9-5" />
          </>
        ) : category === "foundation" ? (
          <>
            {[0, 1, 2].map((x) =>
              [0, 1, 2].map((y) => (
                <circle
                  key={x + ":" + y}
                  cx={24 + x * 16}
                  cy={24 + y * 16}
                  r="4"
                />
              )),
            )}
            <path d="M28 24h8m8 0h8M24 28v8m0 8v8M40 28v8m0 8v8M56 28v8m0 8v8M28 40h8m8 0h8M28 56h8m8 0h8" />
          </>
        ) : category === "niche" ? (
          <>
            <path d="M22 57h36M29 57V42l11-6V20M40 36l16 9-7 12M40 20h14l7 9" />
            <circle cx="40" cy="36" r="5" />
            <circle cx="29" cy="42" r="4" />
            <path d="M19 20h12M25 14v12" />
          </>
        ) : category === "simulation" ? (
          <>
            <path d="M16 48l24-14 24 14-24 14zM16 35l24-14 24 14-24 14zM16 35v13M64 35v13M40 49v13" />
            <path d="M28 28l24 14M52 28L28 42" />
          </>
        ) : category === "world" ? (
          <>
            <circle cx="40" cy="40" r="23" />
            <ellipse cx="40" cy="40" rx="10" ry="23" />
            <path d="M19 31h42M17 42h46M21 52h38" />
            <circle cx="57" cy="24" r="5" fill="var(--glyph-bg)" />
          </>
        ) : category === "twins" ? (
          <>
            <path d="M16 48V28l15-8 15 8v20l-15 8zM34 57V37l15-8 15 8v20l-15 8zM16 28l15 9 15-9M31 37v19M34 37l15 9 15-9M49 46v19" />
          </>
        ) : (
          <>
            {Array.from({ length: 26 }, (_, i) => (
              <circle
                key={i}
                cx={40 + Math.sin(i * 2.4) * ((i % 5) * 5 + 8)}
                cy={40 + Math.cos(i * 2.4) * ((i % 5) * 5 + 8)}
                r={(i % 3) + 1}
                fill="currentColor"
                opacity={0.25 + (i % 4) * 0.17}
              />
            ))}
          </>
        )}
      </g>
    </svg>
  );
}
function SourceLinks({ sources = [] }) {
  return (
    <div className="source-links">
      {sources.map((s, i) => (
        <a
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="source-link"
          key={s.url + ":" + i}
        >
          <span className={"source-type " + s.type}>
            {typeLabels[s.type] || s.type}
          </span>
          <span className="source-title">
            {s.title}
            <small>{s.note}</small>
          </span>
          <ArrowUpRight size={16} />
        </a>
      ))}
    </div>
  );
}
function AtlasMap({ category, onCategory }) {
  const [hover, setHover] = useState(null);
  const active = hover || (category === "all" ? null : category);
  const positions = {
    spatial: [115, 100],
    twins: [340, 100],
    simulation: [565, 100],
    world: [115, 255],
    foundation: [340, 255],
    general: [565, 255],
    niche: [790, 180],
  };
  return (
    <div className="atlas-map">
      <div className="map-top">
        <span className="eyebrow">THE CONNECTED LANDSCAPE</span>
        <span className="map-field-count">
          <span className="live-dot" />7 research fields
        </span>
        <span className="map-mobile-hint">Swipe to explore →</span>
      </div>
      <div className="map-scroll">
        <svg
          className="map-wires"
          viewBox="0 0 925 360"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dots"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r=".8" fill="#82958b" opacity=".24" />
            </pattern>
            <marker
              id="arrow"
              markerWidth="5"
              markerHeight="5"
              refX="4"
              refY="2.5"
              orient="auto"
            >
              <path d="M0 0L5 2.5L0 5" fill="#8b9e92" />
            </marker>
          </defs>
          <rect width="925" height="360" fill="url(#dots)" />
          {relations.map((r, i) => {
            const a = positions[r.from],
              b = positions[r.to];
            const visible = !active || r.from === active || r.to === active;
            return (
              <path
                key={i}
                d={`M ${a[0]} ${a[1]} C ${a[0] + (b[0] - a[0]) * 0.6} ${a[1]},${b[0] - (b[0] - a[0]) * 0.6} ${b[1]},${b[0]} ${b[1]}`}
                fill="none"
                stroke={active && visible ? "#e2e7a3" : "#9199bb"}
                opacity={visible ? 0.6 : 0.1}
                strokeWidth={active && visible ? 1.6 : 1}
                markerEnd="url(#arrow)"
              />
            );
          })}
        </svg>
        <div className="map-nodes">
          {categories.map((c) => {
            const [x, y] = positions[c.id];
            return (
              <button
                key={c.id}
                className={
                  "map-node " +
                  (active === c.id ? "active" : "") +
                  (active &&
                  !relations.some(
                    (r) =>
                      (r.from === active && r.to === c.id) ||
                      (r.to === active && r.from === c.id),
                  ) &&
                  active !== c.id
                    ? " dim"
                    : "")
                }
                style={{ left: `${x / 9.25}%`, top: `${y / 3.6}%` }}
                onMouseEnter={() => setHover(c.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(c.id)}
                onBlur={() => setHover(null)}
                onClick={() => onCategory(c.id)}
                aria-label={`Explore ${c.name}`}
              >
                <span className="map-node-number">{c.symbol}</span>
                <span className="map-node-icon">
                  <Glyph category={c.id} />
                </span>
                <strong>{c.short}</strong>
                <span>
                  {data.companies.filter((e) => e.category === c.id).length}{" "}
                  companies <ArrowUpRight size={12} />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="map-bottom">
        <span>
          {active
            ? catById[active].question
            : "From representing the world to acting in it."}
        </span>
        <span>
          Explore a field <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
}

function Card({
  e,
  index = 0,
  layout,
  saved,
  save,
  openDetail,
  setTag,
  setFilters,
}) {
  const c = catById[e.category];
  const isSaved = saved.includes(e.kind + ":" + e.id);
  return (
    <article
      className={
        "entity-card " + e.kind + " " + (layout === "list" ? "row" : "")
      }
      style={{ "--accent": c.color, "--index": Math.min(index, 10) }}
    >
      <div className="card-head">
        <span className="category-label">
          <i />
          {c.short}
        </span>
        <button
          className={"icon-button save-button " + (isSaved ? "is-saved" : "")}
          onClick={() => save(e)}
          aria-label={`${isSaved ? "Unsave" : "Save"} ${e.name || e.title}`}
          aria-pressed={isSaved}
        >
          <Bookmark size={17} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>
      <button className="card-main" onClick={() => openDetail(e)}>
        {e.kind === "company" && (
          <div className="company-heading">
            <span className="company-mark">
              <Glyph category={e.category} />
            </span>
            <div>
              <h3>{e.name}</h3>
              <span className="subcategory">{e.subcategory}</span>
            </div>
            <ArrowUpRight className="card-arrow" size={21} />
          </div>
        )}
        {e.kind !== "company" && (
          <>
            <span className="card-kicker">
              {e.kind === "resource" ? (
                <BookOpen size={16} />
              ) : e.kind === "experiment" ? (
                <FlaskConical size={16} />
              ) : (
                <GitBranch size={16} />
              )}{" "}
              {e.kind === "resource"
                ? `${e.format.toUpperCase()} / ${e.author}`
                : e.kind === "experiment"
                  ? "PROPOSED BUILD"
                  : "RESEARCH FRONTIER"}
            </span>
            <h3>{e.title}</h3>
          </>
        )}
        <p>{e.displaySummary || e.summary}</p>
        {e.kind === "company" && e.edge && (
          <div className="card-edge">
            <span>EDGE</span>
            <p>{e.edge}</p>
          </div>
        )}
        {e.kind === "resource" && (
          <div className="resource-meta">
            <span>{e.level}</span>
            <span>{e.time}</span>
          </div>
        )}
        {e.kind === "experiment" && (
          <div className="experiment-specs">
            <span>
              <Clock size={14} />
              {e.time}
            </span>
            <span>
              <Cpu size={14} />
              {e.hardware}
            </span>
          </div>
        )}
      </button>
      <div className="card-tags">
        {(e.tags || []).slice(0, 2).map((t) => (
          <button
            key={t}
            onClick={() => {
              setTag(t);
              setFilters(true);
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="card-foot">
        <span className="stage">
          <i />
          {e.stage || e.difficulty || e.format || "Open question"}
        </span>
        <button onClick={() => openDetail(e)}>
          {e.sources?.length || 0} sources <ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
}

function App() {
  const [themePreference, setThemePreference] = useState(readThemePreference);
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const isDark =
    themePreference === "dark" || (themePreference === "system" && systemDark);
  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystem = (event) => setSystemDark(event.matches);
    const syncPreference = (event) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        setThemePreference(
          isThemePreference(event.newValue) ? event.newValue : "system",
        );
      }
    };
    system.addEventListener("change", updateSystem);
    window.addEventListener("storage", syncPreference);
    return () => {
      system.removeEventListener("change", updateSystem);
      window.removeEventListener("storage", syncPreference);
    };
  }, []);
  useEffect(() => {
    applyTheme(themePreference, systemDark);
  }, [themePreference, systemDark]);
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    } catch {}
  }, [themePreference]);
  const [route, setRoute] = useState(getRoute);
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");
  const [focus, setFocus] = useState("all");
  const [stage, setStage] = useState("all");
  const [layout, setLayout] = useState("grid");
  const [filters, setFilters] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [sourceType, setSourceType] = useState("all");
  const [guide, setGuide] = useState(false);
  const [newOnly, setNewOnly] = useState(false);
  const [saved, setSaved] = useState(() => {
    try {
      const value = JSON.parse(
        localStorage.getItem("field-atlas-saved") || "[]",
      );
      return Array.isArray(value)
        ? value.filter((k) => typeof k === "string" && entryMap.has(k))
        : [];
    } catch {
      return [];
    }
  });
  const searchRef = useRef(null);
  const dialogRef = useRef(null);
  const routeRef = useRef(route);
  routeRef.current = route;
  const { view, category } = route;
  const detail = entryMap.get(route.entry);
  const dialogOpen = !!detail || guide;
  useEffect(() => {
    const update = () => {
      const next = getRoute();
      if (
        next.view !== routeRef.current.view ||
        next.category !== routeRef.current.category
      ) {
        setFocus("all");
        setStage("all");
        setTag("all");
        setNewOnly(false);
        setSourceType("all");
        setQuery("");
      }
      routeRef.current = next;
      setRoute(next);
      setMobile(false);
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("field-atlas-saved", JSON.stringify(saved));
    } catch {}
  }, [saved]);
  useEffect(() => {
    const fn = (e) => {
      if (dialogOpen) return;
      if (
        (e.key === "/" || ((e.ctrlKey || e.metaKey) && e.key === "k")) &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)
      ) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [dialogOpen]);
  useEffect(() => {
    if (!dialogOpen) return;
    const previous = document.activeElement;
    const timer = setTimeout(
      () => dialogRef.current?.querySelector("button")?.focus(),
      20,
    );
    const key = (e) => {
      if (e.key === "Escape") closeDetail();
      if (e.key === "Tab") {
        const els = [
          ...dialogRef.current.querySelectorAll(
            'button,a[href],input,select,[tabindex="0"]',
          ),
        ].filter((el) => !el.disabled && el.getClientRects().length);
        if (e.shiftKey && document.activeElement === els[0]) {
          e.preventDefault();
          els.at(-1)?.focus();
        } else if (!e.shiftKey && document.activeElement === els.at(-1)) {
          e.preventDefault();
          els[0]?.focus();
        }
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", key);
      if (
        previous?.isConnected &&
        !previous.closest("[inert]") &&
        getComputedStyle(previous).visibility !== "hidden"
      )
        previous.focus();
      else searchRef.current?.focus();
    };
  }, [dialogOpen, route.entry, guide]);
  useEffect(() => {
    if (!mobile || dialogOpen) return;
    const nav = document.getElementById("research-navigation");
    const previous = document.activeElement;
    nav.querySelector("a,button")?.focus();
    const key = (e) => {
      if (e.key === "Escape") setMobile(false);
      if (e.key === "Tab") {
        const els = [...nav.querySelectorAll("a[href],button")].filter(
          (el) => el.getClientRects().length,
        );
        if (e.shiftKey && document.activeElement === els[0]) {
          e.preventDefault();
          els.at(-1)?.focus();
        } else if (!e.shiftKey && document.activeElement === els.at(-1)) {
          e.preventDefault();
          els[0]?.focus();
        }
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("keydown", key);
      if (
        previous?.isConnected &&
        !previous.closest("[inert]") &&
        getComputedStyle(previous).visibility !== "hidden"
      )
        previous.focus();
      else searchRef.current?.focus();
    };
  }, [mobile, dialogOpen]);
  useEffect(() => {
    document.body.style.overflow = dialogOpen || mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [dialogOpen, mobile]);
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth > 740) setMobile(false);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  function navigate(next, cat = category, entry, path = null) {
    setMobile(false);
    if (next !== view) {
      setNewOnly(false);
      setSourceType("all");
      if (next !== "search") setQuery("");
      setTag("all");
      setStage("all");
      setFocus("all");
    }
    const p = new URLSearchParams();
    if (cat !== "all") p.set("category", cat);
    if (entry) p.set("entry", entry);
    if (path) p.set("path", path);
    window.location.hash = next + (p.size ? "?" + p.toString() : "");
    const nextRoute = getRoute();
    routeRef.current = nextRoute;
    setRoute(nextRoute);
  }
  function openDetail(e) {
    setGuide(false);
    navigate(view, category, e.kind + ":" + e.id, route.path);
  }
  function closeDetail() {
    setGuide(false);
    navigate(view, category, undefined, route.path);
  }
  function save(e) {
    const key = e.kind + ":" + e.id;
    setSaved((p) =>
      p.includes(key) ? p.filter((k) => k !== key) : [...p, key],
    );
  }
  function selectCategory(id) {
    setFocus("all");
    setTag("all");
    setStage("all");
    setQuery("");
    navigate(
      view === "sources"
        ? "sources"
        : view === "saved"
          ? "saved"
          : view === "overview"
            ? "companies"
            : view,
      id,
    );
  }
  function clearFilters() {
    setNewOnly(false);
    setFocus("all");
    setQuery("");
    setTag("all");
    setStage("all");
    setSourceType("all");
    navigate(view, "all");
  }
  const matches = (e) =>
    (!(newOnly && ["companies", "overview"].includes(view)) || e.added) &&
    (category === "all" || e.category === category) &&
    (focus === "all" || e.focus === focus) &&
    (tag === "all" || e.tags?.includes(tag)) &&
    (stage === "all" ||
      e.stage === stage ||
      e.difficulty === stage ||
      e.format === stage ||
      e.level === stage) &&
    (view !== "resources" ||
      !route.path ||
      resourcePaths
        .find((r) => r.id === route.path)
        .categories.includes(e.category)) &&
    (!query ||
      normalize(
        [
          e.name,
          e.title,
          e.summary,
          e.thesis,
          e.technology,
          e.subcategory,
          e.tags?.join(" "),
          e.problem,
          e.why,
          e.hypothesis,
          e.edge,
          e.author,
          e.learn,
          e.contacts?.founders?.map((f) => f.name).join(" "),
        ].join(" "),
      ).includes(normalize(query)));
  const visible = useMemo(() => {
    const entries =
      view === "problems"
        ? allEntries.filter((e) => e.kind === "problem")
        : view === "experiments"
          ? allEntries.filter((e) => e.kind === "experiment")
          : view === "resources"
            ? allEntries.filter((e) => e.kind === "resource")
            : view === "saved"
              ? allEntries.filter((e) => saved.includes(e.kind + ":" + e.id))
              : view === "search"
                ? allEntries
                : allEntries.filter((e) => e.kind === "company");
    return entries.filter(matches);
  }, [view, category, query, tag, stage, focus, saved, route.path, newOnly]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [view, category]);
  useEffect(() => {
    if (dialogRef.current) dialogRef.current.scrollTop = 0;
  }, [route.entry, guide]);
  const focuses = [
    ...new Set(
      data.companies
        .filter((e) => category === "all" || e.category === category)
        .map((e) => e.focus),
    ),
  ].sort();
  const tags = useMemo(
    () =>
      [
        ...new Set(
          allEntries
            .filter(
              (e) =>
                (category === "all" || e.category === category) &&
                ((view === "problems" && e.kind === "problem") ||
                  (view === "experiments" && e.kind === "experiment") ||
                  (view === "resources" && e.kind === "resource") ||
                  (["overview", "companies"].includes(view) &&
                    e.kind === "company") ||
                  ["saved", "search"].includes(view)),
            )
            .flatMap((e) => e.tags || []),
        ),
      ].sort(),
    [category, view],
  );
  const filteredSources = sourceLibrary.filter(
    (s) =>
      (sourceType === "all" || s.type === sourceType) &&
      (category === "all" || s.entries.some((e) => e.category === category)) &&
      (!query ||
        normalize(
          [
            s.title,
            s.note,
            s.url,
            s.entries.map((e) => e.name || e.title),
          ].join(" "),
        ).includes(normalize(query))),
  );
  const activeCat = catById[category];
  const fieldCount = (id) =>
    (view === "resources"
      ? data.resources
      : view === "problems"
        ? data.problems
        : view === "experiments"
          ? data.experiments
          : view === "saved"
            ? allEntries.filter((e) => saved.includes(e.kind + ":" + e.id))
            : data.companies
    ).filter((e) => e.category === id).length;

  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
          document.getElementById("main-content")?.scrollIntoView();
        }}
      >
        Skip to content
      </a>
      <aside
        id="research-navigation"
        inert={dialogOpen}
        className={"sidebar " + (mobile ? "mobile-open" : "")}
      >
        <a
          href="#overview"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            setQuery("");
            setTag("all");
            setStage("all");
            setFocus("all");
            setNewOnly(false);
            setSourceType("all");
            navigate("overview", "all");
          }}
        >
          <span className="brand-mark">
            <BrandMark />
          </span>
          <span>
            MORPH
            <small>PHYSICAL INTELLIGENCE INDEX</small>
          </span>
        </a>
        <div className="sidebar-section">
          <span className="eyebrow">RESEARCH INDEX</span>
          <button
            aria-current={view === "overview" ? "page" : undefined}
            className={
              "side-overview " + (view === "overview" ? "selected" : "")
            }
            onClick={() => {
              clearFilters();
              navigate("overview", "all");
            }}
          >
            <Compass size={18} />
            The landscape <ArrowUpRight size={16} />
          </button>
          <div className="category-nav">
            {categories.map((c) => (
              <button
                aria-pressed={category === c.id}
                className={category === c.id ? "selected" : ""}
                key={c.id}
                onClick={() => selectCategory(c.id)}
              >
                <span
                  className="category-dot"
                  style={{ background: c.color }}
                />
                <span>{c.short}</span>
                <small>{fieldCount(c.id)}</small>
              </button>
            ))}
          </div>
        </div>
        <div className="sidebar-section toolkit">
          <span className="eyebrow">FIELDWORK</span>
          <button
            onClick={() => {
              setQuery("");
              navigate("resources", "all");
            }}
            className={view === "resources" ? "selected" : ""}
            aria-current={view === "resources" ? "page" : undefined}
          >
            <GraduationCap size={17} />
            Essentials<span>{data.resources?.length || 0}</span>
          </button>
          <button
            onClick={() => {
              setQuery("");
              setTag("all");
              setStage("all");
              navigate("problems", "all");
            }}
            className={view === "problems" ? "selected" : ""}
            aria-current={view === "problems" ? "page" : undefined}
          >
            <GitBranch size={17} />
            Open problems<span>{data.problems.length}</span>
          </button>
          <button
            onClick={() => {
              setQuery("");
              setTag("all");
              setStage("all");
              navigate("experiments", "all");
            }}
            className={view === "experiments" ? "selected" : ""}
            aria-current={view === "experiments" ? "page" : undefined}
          >
            <FlaskConical size={17} />
            Experiments<span>{data.experiments.length}</span>
          </button>
          <button
            onClick={() => {
              setQuery("");
              setTag("all");
              setStage("all");
              navigate("saved", "all");
            }}
            className={view === "saved" ? "selected" : ""}
            aria-current={view === "saved" ? "page" : undefined}
          >
            <Bookmark size={17} />
            Reading list<span>{saved.length}</span>
          </button>
        </div>
        <div className="sidebar-bottom">
          <div className="edition">
            <span className="edition-dot" />
            <span>
              RESEARCH EDITION 02<small>Reviewed 7 October 2026</small>
            </span>
          </div>
          <button className="method-link" onClick={() => setGuide(true)}>
            How to read this map <ArrowUpRight size={15} />
          </button>
          <a
            href="https://github.com/preetchangede/robotics_map/tree/work"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source & research files <ArrowUpRight size={14} />
          </a>
        </div>
      </aside>
      {mobile && (
        <button
          className="mobile-scrim"
          aria-label="Close navigation"
          onClick={() => setMobile(false)}
        />
      )}
      <div className="app-shell" inert={dialogOpen || mobile}>
        <header className="topbar">
          <button
            className="icon-button mobile-toggle"
            aria-label={mobile ? "Close navigation" : "Open navigation"}
            aria-controls="research-navigation"
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            <Menu size={21} />
          </button>
          <div className="breadcrumb">
            MORPH INDEX <span>/</span>
            <strong>
              {activeCat?.short ||
                (view === "saved" ? "Reading list" : "All fields")}
            </strong>
          </div>
          <div className="search-box">
            <Search size={17} />
            <input
              ref={searchRef}
              placeholder="Search the atlas…"
              aria-label="Search the atlas"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (view === "overview") navigate("search", category);
              }}
            />
            {query ? (
              <button aria-label="Clear search" onClick={() => setQuery("")}>
                <X size={14} />
              </button>
            ) : (
              <kbd>
                <Command size={11} /> K
              </kbd>
            )}
          </div>
          <button
            type="button"
            className="icon-button theme-toggle"
            aria-label="Dark mode"
            aria-pressed={isDark}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setThemePreference(isDark ? "light" : "dark")}
          >
            <Moon size={18} aria-hidden="true" />
          </button>
        </header>
        <main id="main-content" tabIndex="-1">
          <div className="page-intro">
            <div>
              <div className="intro-kicker">
                <span className="small-cross">✳</span>
                {activeCat
                  ? activeCat.layer
                  : "ROBOTICS · WORLDS · SPATIAL COMPUTING"}
              </div>
              <h1>
                {view === "overview" ? (
                  <>
                    Intelligence
                    <br className="desktop-break" /> <em>takes shape.</em>
                  </>
                ) : view === "saved" ? (
                  <>
                    Your <em>reading list.</em>
                  </>
                ) : view === "sources" ? (
                  <>
                    Follow the <em>evidence.</em>
                  </>
                ) : view === "resources" ? (
                  <>
                    The essential <em>syllabus.</em>
                  </>
                ) : view === "experiments" ? (
                  <>
                    Ideas worth <em>building.</em>
                  </>
                ) : view === "problems" ? (
                  <>
                    The questions <em>still open.</em>
                  </>
                ) : view === "search" ? (
                  <>
                    Across the <em>atlas.</em>
                  </>
                ) : activeCat ? (
                  <>
                    {activeCat.short}
                    <em className="title-sub"> in focus.</em>
                  </>
                ) : (
                  <>
                    Meet the <em>builders.</em>
                  </>
                )}
              </h1>
              <p className="intro-description">
                {view === "overview"
                  ? "Exceptional builders. Critical questions. Ideas to try. A connected map of intelligence in the physical world."
                  : view === "saved"
                    ? "Your trail through the index. Bookmarks stay in this browser."
                    : view === "sources"
                      ? "Papers, code, technical posts, and practitioner discussions — linked to the ideas they inform."
                      : view === "resources"
                        ? "A small shelf with a large payoff. Read the mechanisms, watch the reasoning, build your intuition."
                        : view === "experiments"
                          ? "Test a real hypothesis. Build something small. Learn where the technology breaks. Each proposed experiment has controls, resources, and a measurable outcome."
                          : view === "problems"
                            ? "The gap between an impressive demonstration and a dependable system. Concrete research questions, with evidence and approaches worth watching."
                            : view === "search"
                              ? `Search companies, critical problems, and experiments together.${query ? " Results for “" + query + "”." : ""}`
                              : activeCat
                                ? activeCat.question
                                : "Technical ambition, a valuable problem, and evidence worth following."}
              </p>
            </div>
            <div className="intro-aside">
              <IntroFigure />
              <div className="atlas-stats">
                <span>
                  <strong>{data.companies.length}</strong>companies
                </span>
                <span>
                  <strong>{sourceLibrary.length}</strong>sources
                </span>
                <span>
                  <strong>07</strong>fields
                </span>
              </div>
            </div>
          </div>
          <nav className="view-tabs" aria-label="Research views">
            {views.map(([id, label]) => (
              <button
                key={id}
                className={view === id ? "active" : ""}
                aria-current={view === id ? "page" : undefined}
                onClick={() => {
                  setQuery("");
                  setTag("all");
                  setStage("all");
                  navigate(id, category);
                }}
              >
                {label}
                {id === "experiments" && <span>{data.experiments.length}</span>}
              </button>
            ))}
          </nav>
          {view === "resources" && (
            <section
              className="resource-paths"
              aria-label="Essential reading paths"
            >
              {resourcePaths.map((p, i) => (
                <button
                  key={p.id}
                  className={route.path === p.id ? "selected" : ""}
                  aria-pressed={route.path === p.id}
                  onClick={() => {
                    setQuery("");
                    setTag("all");
                    setStage("all");
                    navigate(
                      "resources",
                      "all",
                      undefined,
                      route.path === p.id ? null : p.id,
                    );
                  }}
                >
                  <span className="eyebrow">
                    PATH {String(i + 1).padStart(2, "0")}
                  </span>
                  <strong>
                    {p.title}
                    <ArrowUpRight size={17} />
                  </strong>
                  <p>{p.description}</p>
                </button>
              ))}
            </section>
          )}
          {view === "overview" && (
            <section
              className="landscape-section"
              aria-label="Landscape connections"
            >
              <AtlasMap category={category} onCategory={selectCategory} />
              <div className="map-caption">
                <span>
                  <Network size={15} /> Connections describe technical
                  relationships, not company partnerships.
                </span>
                <button onClick={() => setGuide(true)}>
                  Read the research lens <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="connection-legend">
                <span className="eyebrow">READ THE CONNECTIONS</span>
                {relations
                  .filter(
                    (r) =>
                      ["spatial", "simulation", "foundation"].includes(
                        r.from,
                      ) && ["twins", "foundation", "general"].includes(r.to),
                  )
                  .map((r) => (
                    <button
                      key={r.from + r.to}
                      onClick={() => selectCategory(r.to)}
                    >
                      <span>
                        {catById[r.from].short}
                        <ArrowRight size={13} />
                        {catById[r.to].short}
                      </span>
                      <small>{r.label}</small>
                    </button>
                  ))}
              </div>
              <div className="field-guide">
                <div>
                  <span className="eyebrow">THREE WAYS IN</span>
                  <h2>
                    Choose your <em>research path.</em>
                  </h2>
                </div>
                <button onClick={() => navigate("companies", "all")}>
                  <span>01</span>
                  <strong>Meet the builders</strong>
                  <p>
                    What is differentiated, what works, and what is still a
                    claim.
                  </p>
                  <ArrowUpRight size={20} />
                </button>
                <button onClick={() => navigate("problems", "all")}>
                  <span>02</span>
                  <strong>Find the hard part</strong>
                  <p>
                    Data, reliability, physics, and the economics of real
                    deployment.
                  </p>
                  <ArrowUpRight size={20} />
                </button>
                <button onClick={() => navigate("experiments", "all")}>
                  <span>03</span>
                  <strong>Try it yourself</strong>
                  <p>
                    Small, revealing experiments with explicit evaluation plans.
                  </p>
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </section>
          )}
          {activeCat && view !== "overview" && (
            <section
              className="field-connections"
              aria-label="Related technology fields"
            >
              <span className="eyebrow">CONNECTED FIELDS</span>
              {relations
                .filter((r) => r.from === category || r.to === category)
                .map((r) => (
                  <button
                    key={r.from + r.to}
                    onClick={() =>
                      selectCategory(r.from === category ? r.to : r.from)
                    }
                  >
                    <span
                      style={{
                        "--field-color":
                          catById[r.from === category ? r.to : r.from].color,
                      }}
                    >
                      {catById[r.from === category ? r.to : r.from].short}
                      <ArrowUpRight size={13} />
                    </span>
                    <small>{r.label}</small>
                  </button>
                ))}
            </section>
          )}
          {view === "sources" ? (
            <section className="results-section">
              <div className="results-toolbar">
                <h2>
                  Source library <span>{filteredSources.length}</span>
                </h2>
                <select
                  aria-label="Filter source type"
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value)}
                >
                  <option value="all">All source types</option>
                  {Object.entries(typeLabels).map(([id, label]) => (
                    <option key={id} value={id}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="source-library">
                {filteredSources.map((s) => (
                  <article key={s.url}>
                    <div>
                      <span className={"source-type " + s.type}>
                        {typeLabels[s.type] || s.type}
                      </span>
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        {s.title}
                        <ArrowUpRight size={17} />
                      </a>
                      <p>{s.notes.join(" ")}</p>
                      <span className="source-domain">
                        {new URL(s.url).hostname.replace("www.", "")}
                      </span>
                    </div>
                    <div className="source-used">
                      <span>IN THE ATLAS</span>
                      {s.entries.slice(0, 4).map((e) => (
                        <button
                          key={e.kind + e.id}
                          onClick={() => openDetail(e)}
                        >
                          {e.name || e.title}
                          <ChevronRight size={13} />
                        </button>
                      ))}
                      {s.entries.length > 4 && (
                        <small>+{s.entries.length - 4} more entries</small>
                      )}
                    </div>
                  </article>
                ))}
              </div>
              {!filteredSources.length && <Empty onClear={clearFilters} />}
            </section>
          ) : (
            <section className="results-section">
              <div className="results-toolbar">
                <h2>
                  {view === "overview"
                    ? "A few places to begin"
                    : view === "saved"
                      ? "Saved for later"
                      : view === "experiments"
                        ? "The experimental notebook"
                        : view === "resources"
                          ? resourcePaths.find((p) => p.id === route.path)
                              ?.title || "The essential shelf"
                          : view === "problems"
                            ? "Research frontiers"
                            : view === "search"
                              ? "Research results"
                              : "The company index"}
                  <span>
                    {view === "overview"
                      ? data.companies.length
                      : visible.length}
                  </span>
                </h2>
                <div className="toolbar-actions">
                  <button
                    className={"filter-toggle " + (filters ? "active" : "")}
                    aria-expanded={filters}
                    aria-controls="research-filters"
                    onClick={() => setFilters(!filters)}
                  >
                    <SlidersHorizontal size={15} />
                    Filters
                    {(tag !== "all" ||
                      stage !== "all" ||
                      focus !== "all" ||
                      category !== "all") && <i />}
                    <ChevronDown size={14} />
                  </button>
                  <div className="layout-toggle">
                    <button
                      aria-label="Grid view"
                      aria-pressed={layout === "grid"}
                      onClick={() => setLayout("grid")}
                      className={layout === "grid" ? "active" : ""}
                    >
                      <Grid2X2 size={16} />
                    </button>
                    <button
                      aria-label="List view"
                      aria-pressed={layout === "list"}
                      onClick={() => setLayout("list")}
                      className={layout === "list" ? "active" : ""}
                    >
                      <List size={17} />
                    </button>
                  </div>
                </div>
              </div>
              {view === "companies" && (
                <div
                  className="discovery-switch"
                  aria-label="Company discovery"
                >
                  <button
                    aria-pressed={!newOnly}
                    className={!newOnly ? "selected" : ""}
                    onClick={() => setNewOnly(false)}
                  >
                    All builders
                  </button>
                  <button
                    aria-pressed={newOnly}
                    className={newOnly ? "selected" : ""}
                    onClick={() => setNewOnly(true)}
                  >
                    New bearings
                    <span>{data.companies.filter((e) => e.added).length}</span>
                  </button>
                  <small>Selected in this edition</small>
                </div>
              )}
              {filters && (
                <div id="research-filters" className="filters-panel">
                  <label>
                    Field
                    <select
                      aria-label="Field"
                      value={category}
                      onChange={(e) => selectCategory(e.target.value)}
                    >
                      <option value="all">All fields</option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.short}
                        </option>
                      ))}
                    </select>
                  </label>
                  {["overview", "companies"].includes(view) && (
                    <label>
                      Focus
                      <select
                        aria-label="Focus"
                        value={focus}
                        onChange={(e) => setFocus(e.target.value)}
                      >
                        <option value="all">All subcategories</option>
                        {focuses.map((f) => (
                          <option key={f}>{f}</option>
                        ))}
                      </select>
                    </label>
                  )}
                  <label>
                    Research tag
                    <select
                      aria-label="Research tag"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    >
                      <option value="all">All tags</option>
                      {tags.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                  {view !== "problems" && (
                    <label>
                      {view === "resources"
                        ? "Resource format"
                        : view === "experiments"
                          ? "Build difficulty"
                          : "Evidence stage"}
                      <select
                        aria-label={
                          view === "resources"
                            ? "Resource format"
                            : view === "experiments"
                              ? "Build difficulty"
                              : "Evidence stage"
                        }
                        value={stage}
                        onChange={(e) => setStage(e.target.value)}
                      >
                        <option value="all">
                          {view === "resources"
                            ? "All formats"
                            : view === "experiments"
                              ? "All difficulties"
                              : "All stages"}
                        </option>
                        {(view === "resources"
                          ? ["Read", "Watch", "Build", "Follow"]
                          : view === "experiments"
                            ? ["Starter", "Intermediate", "Advanced"]
                            : [
                                "Demonstrated",
                                "Pilot",
                                "Deployed",
                                "Research",
                                "Platform",
                                ...(["saved", "search"].includes(view)
                                  ? [
                                      "Starter",
                                      "Intermediate",
                                      "Advanced",
                                      "Read",
                                      "Watch",
                                      "Build",
                                      "Follow",
                                    ]
                                  : []),
                              ]
                        ).map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </label>
                  )}
                  <button onClick={clearFilters}>
                    <RotateCcw size={14} />
                    Reset
                  </button>
                </div>
              )}
              {(category !== "all" ||
                tag !== "all" ||
                stage !== "all" ||
                focus !== "all") && (
                <div className="active-filters">
                  {activeCat && (
                    <button onClick={() => navigate(view, "all")}>
                      {activeCat.short}
                      <X size={12} />
                    </button>
                  )}
                  {focus !== "all" && (
                    <button onClick={() => setFocus("all")}>
                      {focus}
                      <X size={12} />
                    </button>
                  )}
                  {tag !== "all" && (
                    <button onClick={() => setTag("all")}>
                      {tag}
                      <X size={12} />
                    </button>
                  )}
                  {stage !== "all" && (
                    <button onClick={() => setStage("all")}>
                      {stage}
                      <X size={12} />
                    </button>
                  )}
                </div>
              )}
              <div
                className={
                  "entity-grid " + (layout === "list" ? "list-view" : "")
                }
              >
                {(view === "overview"
                  ? visible.filter((e) =>
                      ["galaxea", "bedrock-ocean", "arrival-space"].includes(
                        e.id,
                      ),
                    ).length >= 3
                    ? visible
                        .filter((e) =>
                          [
                            "galaxea",
                            "bedrock-ocean",
                            "arrival-space",
                          ].includes(e.id),
                        )
                        .slice(0, 3)
                    : visible.slice(0, 3)
                  : visible
                ).map((e, i) => (
                  <Card
                    key={e.kind + e.id}
                    e={e}
                    index={i}
                    layout={layout}
                    saved={saved}
                    save={save}
                    openDetail={openDetail}
                    setTag={setTag}
                    setFilters={setFilters}
                  />
                ))}
              </div>
              {visible.length === 0 && (
                <Empty
                  savedView={view === "saved" && saved.length === 0}
                  onClear={() => {
                    clearFilters();
                    if (view === "saved" && saved.length === 0)
                      navigate("companies", "all");
                  }}
                />
              )}
              {view === "overview" && (
                <button
                  className="browse-all"
                  onClick={() => navigate("companies", "all")}
                >
                  Explore all {data.companies.length} companies{" "}
                  <ArrowRight size={16} />
                </button>
              )}
            </section>
          )}
          <footer>
            <span className="footer-brand">
              <BrandMark /> MORPH
            </span>
            <p>Physical intelligence, with context.</p>
            <button onClick={() => setGuide(true)}>
              Methodology & limitations <ArrowUpRight size={14} />
            </button>
            <small>Edition 02 · 7 Oct 2026</small>
          </footer>
        </main>
      </div>
      {dialogOpen && (
        <div
          className="dialog-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeDetail();
          }}
        >
          <section
            className="research-drawer"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-title"
          >
            <div className="drawer-toolbar">
              <span className="eyebrow">
                {guide
                  ? "THE RESEARCH LENS"
                  : `${detail.kind === "company" ? "COMPANY PROFILE" : detail.kind === "problem" ? "OPEN PROBLEM" : detail.kind === "resource" ? "ESSENTIAL RESOURCE" : "EXPERIMENT NOTE"} / ${catById[detail.category].short}`}
              </span>
              <div>
                {!guide && (
                  <button
                    className="icon-button"
                    onClick={() => save(detail)}
                    aria-label={`${saved.includes(detail.kind + ":" + detail.id) ? "Unsave" : "Save"} ${detail.name || detail.title}`}
                  >
                    <Bookmark
                      size={18}
                      fill={
                        saved.includes(detail.kind + ":" + detail.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                )}
                <button
                  className="icon-button close-dialog"
                  aria-label="Close research detail"
                  onClick={closeDetail}
                >
                  <X size={22} />
                </button>
              </div>
            </div>
            <div className="drawer-body">
              {guide ? (
                <Guide />
              ) : (
                <>
                  <div className="detail-heading">
                    <Glyph category={detail.category} large />
                    {detail.kind === "experiment" && (
                      <span className="proposal-badge">
                        <FlaskConical size={14} />
                        Proposed experiment
                      </span>
                    )}
                    <span className="detail-subcategory">
                      {detail.subcategory ||
                        detail.difficulty ||
                        (detail.kind === "resource" &&
                          `${detail.format} · ${detail.author}`) ||
                        "Critical research question"}
                    </span>
                    <h2 id="detail-title">{detail.name || detail.title}</h2>
                    <p>{detail.summary}</p>
                    <div className="detail-tags">
                      {(detail.tags || []).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {detail.website && (
                      <a
                        className="primary-link"
                        href={detail.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Company website <ArrowUpRight size={16} />
                      </a>
                    )}
                    {detail.kind === "resource" && (
                      <a
                        className="primary-link resource-launch"
                        href={detail.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {detail.format === "Watch" ? (
                          <Play size={16} />
                        ) : (
                          <BookOpen size={16} />
                        )}{" "}
                        {detail.format === "Build"
                          ? "Open the project"
                          : detail.format === "Follow"
                            ? "Follow the work"
                            : `Start ${detail.format.toLowerCase()}ing`}
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                  {detail.kind === "company" && (
                    <nav
                      className="profile-jumps"
                      aria-label="Company profile sections"
                    >
                      {[
                        ["technology", "Technology"],
                        ["evidence", "Evidence"],
                        ["founders", "Founders"],
                        ["entry-sources", "Sources"],
                      ].map(([id, label]) => (
                        <button
                          key={id}
                          onClick={() => {
                            const target = document.getElementById(id);
                            target?.focus({ preventScroll: true });
                            target?.scrollIntoView({
                              behavior: window.matchMedia(
                                "(prefers-reduced-motion: reduce)",
                              ).matches
                                ? "instant"
                                : "smooth",
                              block: "start",
                            });
                          }}
                        >
                          {label}
                          <ChevronDown size={12} />
                        </button>
                      ))}
                    </nav>
                  )}
                  {detail.kind === "company" ? (
                    <>
                      <DetailSection
                        label="THE RESEARCH THESIS"
                        title="Why this company is interesting"
                        text={detail.thesis}
                      />
                      <DetailSection
                        id="technology"
                        label="UNDER THE HOOD"
                        title="Core technology & approach"
                        text={detail.technology}
                      />
                      <DetailSection
                        label="THE ACTUAL JOB"
                        title="The problem it solves"
                        text={detail.problem}
                      />
                      <section
                        id="evidence"
                        tabIndex="-1"
                        aria-label="Evidence"
                        className="detail-section"
                      >
                        <span className="eyebrow">EVIDENCE, WITH CONTEXT</span>
                        <h3>What is verifiable</h3>
                        <div className="evidence-list">
                          {detail.evidence?.map((ev, i) => (
                            <article key={i}>
                              <Check size={17} />
                              <div>
                                <h4>{ev.label}</h4>
                                <p>{ev.text}</p>
                                <a
                                  href={ev.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Follow the evidence <ArrowUpRight size={14} />
                                </a>
                              </div>
                            </article>
                          ))}
                        </div>
                      </section>
                      <FounderContacts
                        key={detail.id}
                        contacts={detail.contacts}
                      />
                    </>
                  ) : detail.kind === "problem" ? (
                    <>
                      <DetailSection
                        label="THE STAKES"
                        title="Why it matters"
                        text={detail.why}
                      />
                      <DetailSection
                        label="PATHS FORWARD"
                        title="Approaches being explored"
                        text={detail.approaches}
                      />
                      <DetailSection
                        label="A USEFUL SIGNAL"
                        title="What to watch"
                        text={detail.whatToWatch}
                      />
                    </>
                  ) : detail.kind === "resource" ? (
                    <>
                      <div className="build-specs">
                        <div>
                          <span>FORMAT</span>
                          <strong>{detail.format}</strong>
                        </div>
                        <div>
                          <span>DEPTH</span>
                          <strong>{detail.level}</strong>
                        </div>
                        <div>
                          <span>TIME</span>
                          <strong>{detail.time}</strong>
                        </div>
                      </div>
                      <DetailSection
                        label="THE PAYOFF"
                        title="Why this earns a place"
                        text={detail.why}
                      />
                      <DetailSection
                        label="TAKE AWAY"
                        title="What you will understand"
                        text={detail.learn}
                      />
                      <DetailSection
                        label="BEFORE YOU START"
                        title="Prerequisites"
                        text={detail.prerequisite}
                      />
                    </>
                  ) : (
                    <>
                      <div className="build-specs">
                        <div>
                          <span>DIFFICULTY</span>
                          <strong>{detail.difficulty}</strong>
                        </div>
                        <div>
                          <span>TIME ESTIMATE</span>
                          <strong>{detail.time}</strong>
                        </div>
                        <div>
                          <span>HARDWARE</span>
                          <strong>{detail.hardware}</strong>
                        </div>
                      </div>
                      <DetailSection
                        label="THE QUESTION"
                        title="Hypothesis to test"
                        text={detail.hypothesis}
                      />
                      <section className="detail-section">
                        <span className="eyebrow">PROPOSED EXPERIMENT</span>
                        <h3>A concrete build plan</h3>
                        <ol className="build-steps">
                          {detail.steps?.map((step, i) => (
                            <li key={i}>
                              <span>{String(i + 1).padStart(2, "0")}</span>
                              <p>{step}</p>
                            </li>
                          ))}
                        </ol>
                      </section>
                      <DetailSection
                        label="MEASURE, DON'T JUST DEMO"
                        title="What success looks like"
                        text={detail.successMetric}
                      />
                      <DetailSection
                        label="COMPUTE & SETUP"
                        title="Resources and practical limits"
                        text={detail.resources}
                      />
                    </>
                  )}
                  {detail.caveat && (
                    <aside className="caveat">
                      <span>KEEP IN MIND</span>
                      <p>{detail.caveat}</p>
                    </aside>
                  )}
                  <section
                    id="entry-sources"
                    tabIndex="-1"
                    aria-label="Sources"
                    className="detail-section"
                  >
                    <div className="sources-heading">
                      <div>
                        <span className="eyebrow">GO DEEPER</span>
                        <h3>Sources & technical resources</h3>
                      </div>
                      <span>{detail.sources?.length}</span>
                    </div>
                    <SourceLinks sources={detail.sources} />
                  </section>
                  <Related detail={detail} onOpen={openDetail} />
                  <div className="detail-reviewed">
                    Research reviewed 7 October 2026. Evidence dates and access
                    limitations are recorded in the linked sources and research
                    notes.
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
function DetailSection({ label, title, text, id }) {
  return (
    <section
      id={id}
      tabIndex={id ? "-1" : undefined}
      aria-label={id ? title : undefined}
      className="detail-section"
    >
      <span className="eyebrow">{label}</span>
      <h3>{title}</h3>
      <p>{Array.isArray(text) ? text.join(" ") : text}</p>
    </section>
  );
}
function FounderContacts({ contacts }) {
  const [expanded, setExpanded] = useState(false);
  if (!contacts) return null;
  const labels = {
    primary: "Primary-linked",
    corroborated: "Corroborated",
    restricted: "Access limited",
  };
  return (
    <section
      id="founders"
      tabIndex="-1"
      aria-label="Founders and contact routes"
      className="detail-section founder-section"
    >
      <span className="eyebrow">THE PEOPLE</span>
      <h3>Founders & contact routes</h3>
      <p className="founder-intro">
        Public professional channels. Each route has its own provenance.
      </p>
      {(expanded ? contacts.founders : contacts.founders.slice(0, 3)).map(
        (f) => (
          <article className="founder-card" key={f.name}>
            <header>
              <div>
                <h4>{f.name}</h4>
                <p>{f.role}</p>
              </div>
              <a href={f.roleSource} target="_blank" rel="noopener noreferrer">
                Role source
                <ArrowUpRight size={13} />
              </a>
            </header>
            <div className="founder-channels">
              {f.channels.map((ch, i) => (
                <a
                  key={ch.url + ":" + i}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ch.kind === "email" ? (
                    <Mail size={14} />
                  ) : (
                    <ArrowUpRight size={14} />
                  )}
                  <span>{ch.label}</span>
                  {ch.kind === "company" && <small>Company route</small>}
                </a>
              ))}
            </div>
            <details>
              <summary>
                Where found & how checked <ChevronDown size={13} />
              </summary>
              <div className="contact-provenance">
                {f.channels.map((ch, i) => (
                  <div key={ch.url + ":" + i}>
                    <span className="contact-status">
                      {labels[ch.verification] || ch.verification}
                    </span>
                    <strong>{ch.label}</strong>
                    <p>{ch.note}</p>
                    <a
                      href={ch.provenance}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View provenance
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                ))}
              </div>
            </details>
          </article>
        ),
      )}
      {contacts.founders.length > 3 && (
        <button
          className="more-founders"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? "Show fewer founders"
            : `Show all ${contacts.founders.length} founders`}
          <ChevronDown size={14} />
        </button>
      )}
      {contacts.note && <p className="contact-note">{contacts.note}</p>}
      <small className="contact-reviewed">
        Contact provenance reviewed {contacts.reviewed}. Profile links identify
        a channel; they do not establish inbox availability.
      </small>
    </section>
  );
}
function Empty({ savedView, onClear }) {
  return (
    <div className="empty-state">
      {savedView ? <Bookmark size={28} /> : <Search size={28} />}
      <h3>
        {savedView
          ? "Make a trail worth returning to."
          : "No entries match this view."}
      </h3>
      <p>
        {savedView
          ? "Save an entry with its bookmark to build your reading list."
          : "Try a broader search or clear the current filters."}
      </p>
      <button onClick={onClear}>
        {savedView ? "Explore companies" : "Clear filters"}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
function Related({ detail, onOpen }) {
  const related = allEntries
    .filter((e) => e.id !== detail.id)
    .map((e) => ({
      e,
      score:
        (detail.related?.includes(e.id) ? 8 : 0) +
        (e.category === detail.category ? 3 : 0) +
        (e.tags || []).filter((t) => detail.tags?.includes(t)).length +
        (e.kind !== detail.kind ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score);
  const diversified = ["company", "problem", "experiment", "resource"]
    .map((kind) => related.find((item) => item.e.kind === kind))
    .filter(Boolean);
  return (
    <section className="detail-section related-section">
      <span className="eyebrow">FOLLOW THE CONNECTIONS</span>
      <h3>Continue exploring</h3>
      <p className="related-note">
        Curated links and shared research interests, across the atlas.
      </p>
      {diversified.map(({ e }) => (
        <button key={e.kind + e.id} onClick={() => onOpen(e)}>
          <span
            className="category-dot"
            style={{ background: catById[e.category].color }}
          />
          <div>
            <small>
              {e.kind === "company"
                ? "Company"
                : e.kind === "problem"
                  ? "Open problem"
                  : e.kind === "resource"
                    ? "Essential resource"
                    : "Experiment"}{" "}
              · {catById[e.category].short}
            </small>
            <strong>{e.name || e.title}</strong>
          </div>
          <ArrowRight size={16} />
        </button>
      ))}
    </section>
  );
}
function Guide() {
  return (
    <div className="guide">
      <span className="intro-kicker">EDITION 02 / RESEARCH METHOD</span>
      <h2 id="detail-title">
        A useful map has
        <br />
        <em>honest edges.</em>
      </h2>
      <p className="guide-lede">
        This atlas is a selective research instrument. Its purpose is to help
        you understand what is technically distinctive, economically plausible,
        and worth investigating next.
      </p>
      <DetailSection
        label="SELECTION"
        title="Substance before company count"
        text="Entries were chosen for an unusual technical approach, a difficult and valuable problem, evidence of real work, and enough public material to assess the claim. Inclusion is an editorial judgment, not an investment recommendation or a numerical ranking. Large infrastructure companies appear where they explain the ecosystem; smaller specialists appear where their approach is particularly revealing."
      />
      <DetailSection
        label="EVIDENCE"
        title="A claim is only as useful as its scope"
        text="Company releases establish what a company says it built; papers and open code expose methods; independent reporting can corroborate deployments. Metrics remain attached to their task, dataset, date, and source. Pilots, contracts, preorders, demos, pending acquisitions, and completed deployments are distinguished in the profiles. An evidence-stage label describes the visible evidence, not a certification of reliability."
      />
      <DetailSection
        label="PRACTITIONER SIGNAL"
        title="X and Reddit are discovery layers"
        text="Direct discussions and launch threads are included where retrievable and relevant. Practitioner observations illuminate setup friction, failure modes, and how a tool feels in use; they are not independently verified performance evidence. X often requires login or blocks automated access. Some indexed posts could be found but not read directly; their source notes say so. The source library lets you filter these separately."
      />
      <DetailSection
        label="THE CONNECTIONS"
        title="Relationships between approaches"
        text="Landscape edges connect technical functions: captured scenes can ground twins, simulation can supply policy data, and predictive worlds can support planning. They do not imply a partnership, an endorsement, or that any two systems are interoperable. Related entries are suggested from shared fields and research tags."
      />
      <DetailSection
        label="THE BUILDS"
        title="Experiments are proposals, not completed benchmarks"
        text="Each experiment describes a testable hypothesis, controls, practical requirements, and an evaluation metric. Setup and run time are estimates. Licenses, GPU requirements, checkpoints, archived repositories, platform support, and paid features need checking before you invest in a build. Start with a small baseline and record failures as carefully as successes."
      />
      <DetailSection
        label="THE PEOPLE"
        title="Contact provenance, not guessed addresses"
        text="Founder roles and contact channels have separate provenance. We use publicly published professional emails, primary-linked profiles, or corroborated professional pages. Restricted profiles are marked; a company contact route is a fallback, not a direct founder inbox. Historical founders, advisory roles, and acquisition status remain explicit. Verification establishes the published route and identity, not whether someone will receive or answer a message."
      />
      <DetailSection
        label="THE SYLLABUS"
        title="Read for mechanisms and judgment"
        text="Essentials earn a place by explaining a mechanism, exposing an important limitation, or providing a practical learning loop. The paths group related fields; read the prerequisites and version notes before a build. Study-time estimates include inspection and notes. Videos were verified through primary indexes and available metadata; playback and every full transcript were not audited."
      />
      <DetailSection
        label="KEEPING IT CURRENT"
        title="A maintained source of truth"
        text="This edition was researched on 7 October 2026. It is a reviewed snapshot with editable research files; it does not automatically refresh or claim continuous monitoring. Source publish dates differ, and absence of public evidence does not prove absence of progress. Research notes record access limits and unresolved questions. Reading-list bookmarks stay in this browser and do not sync between devices."
      />
      <a
        className="primary-link"
        href="https://github.com/preetchangede/robotics_map/tree/work/research"
        target="_blank"
        rel="noopener noreferrer"
      >
        Inspect the research files <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
export default App;
